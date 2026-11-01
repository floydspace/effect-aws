import type { Message, Tool as BedrockTool, ToolChoice, ToolConfiguration } from "@aws-sdk/client-bedrock-runtime";
import * as AiError from "effect/ai/AiError";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Tool from "effect/ai/Tool";
import * as Effect from "effect/Effect";
import * as Predicate from "effect/Predicate";
import * as Schema from "effect/Schema";
import * as SchemaAST from "effect/SchemaAST";
import { MODULE, unsupportedSchema } from "./errors.js";
import { getHistoryToolUsage } from "./prompt.js";

const METHOD = "prepareTools";

export type StructuredOutputMode = "tool" | "native";

type ToolCodec = ReturnType<LanguageModel.CodecTransformer>["codec"];

/**
 * The codecs that strict tools were sent with, keyed by tool name.
 */
export type ToolCodecs = ReadonlyMap<string, ToolCodec>;

export interface PreparedTools {
  readonly toolConfig: ToolConfiguration | undefined;
  /**
   * The name of the synthetic tool whose input carries the structured output,
   * when `generateObject` runs in `"tool"` mode.
   */
  readonly structuredOutputToolName: string | undefined;
  readonly toolCodecs: ToolCodecs;
}

type ToolSpec = BedrockTool.ToolSpecMember;

const makeToolSpec = (
  name: string,
  description: string | undefined,
  json: unknown,
  strict?: boolean | undefined,
): ToolSpec => ({
  toolSpec: {
    name,
    ...(Predicate.isNotUndefined(description) ? { description } : undefined),
    inputSchema: { json: json as any },
    ...(Predicate.isNotUndefined(strict) ? { strict } : undefined),
  },
});

// Non-strict tools are sent with the tools' own schemas, which the toolkit
// decodes the parameters with. Strict tools may need the model's schema
// rewrites (Claude requires `additionalProperties: false` on every object, for
// example), so their codecs are kept to convert the parameters back.
const toUserToolSpecs = Effect.fnUntraced(function*({ codecTransformer, strictJsonSchema, tools }: {
  readonly codecTransformer: LanguageModel.CodecTransformer;
  readonly strictJsonSchema: boolean | undefined;
  readonly tools: ReadonlyArray<Tool.Any>;
}): Effect.fn.Return<{ readonly specs: Array<ToolSpec>; readonly toolCodecs: ToolCodecs }, AiError.AiError> {
  const specs: Array<ToolSpec> = [];
  const toolCodecs = new Map<string, ToolCodec>();
  for (const tool of tools) {
    if (Tool.isProviderDefined(tool)) {
      return yield* AiError.make({
        module: MODULE,
        method: METHOD,
        reason: new AiError.ToolConfigurationError({
          toolName: tool.name,
          description: "Provider-defined tools are not supported by the Amazon Bedrock provider yet",
        }),
      });
    }
    const strict = Tool.getStrictMode(tool) ?? strictJsonSchema;
    const hasRawJsonSchema = Tool.isDynamic(tool) && Predicate.isNotUndefined(tool.jsonSchema);
    const json = yield* Effect.try({
      try: () => {
        if (strict !== true || hasRawJsonSchema) {
          return Tool.getJsonSchema(tool, { transformer: LanguageModel.defaultCodecTransformer });
        }
        const { codec, jsonSchema } = codecTransformer(tool.parametersSchema);
        toolCodecs.set(tool.name, codec);
        return jsonSchema;
      },
      catch: (error) => unsupportedSchema(METHOD, error),
    });
    specs.push(makeToolSpec(tool.name, Tool.getDescription(tool), json, strict));
  }
  return { specs, toolCodecs };
});

// Converse has no `none` choice, so `none` omits the choice entirely.
const toToolChoice = (toolChoice: LanguageModel.ToolChoice<string>): ToolChoice | undefined => {
  if (toolChoice === "none") {
    return undefined;
  }
  if (toolChoice === "auto") {
    return { auto: {} };
  }
  if (toolChoice === "required") {
    return { any: {} };
  }
  if ("tool" in toolChoice) {
    return { tool: { name: toolChoice.tool } };
  }
  return toolChoice.mode === "required" ? { any: {} } : { auto: {} };
};

/**
 * Builds the Converse `toolConfig` for a request.
 *
 * Bedrock rejects requests whose history contains `toolUse` or `toolResult`
 * blocks unless `toolConfig` is present. Tool specs are therefore kept when
 * the history has tool blocks, even for the `none` tool choice, and tools the
 * history references but the request no longer provides get a permissive
 * placeholder spec.
 *
 * `codecTransformer` must be the transformer `LanguageModel` uses to decode
 * structured output, so the synthetic tool's schema matches it. Strict tools
 * use it too.
 */
export const prepareTools = Effect.fnUntraced(function*({
  codecTransformer,
  messages,
  options,
  strictJsonSchema,
  structuredOutput,
}: {
  readonly codecTransformer: LanguageModel.CodecTransformer;
  readonly messages: ReadonlyArray<Message>;
  readonly options: LanguageModel.ProviderOptions;
  readonly strictJsonSchema: boolean | undefined;
  readonly structuredOutput: StructuredOutputMode;
}): Effect.fn.Return<PreparedTools, AiError.AiError> {
  const { responseFormat, toolChoice } = options;
  const history = getHistoryToolUsage(messages);

  const withHistoryTools = (specs: Array<ToolSpec>): Array<ToolSpec> => {
    if (!history.hasToolBlocks) {
      return specs;
    }
    const defined = new Set(specs.map((spec) => spec.toolSpec.name));
    const placeholders = Array.from(history.toolNames)
      .filter((name) => !defined.has(name))
      .map((name) =>
        makeToolSpec(name, "A tool used earlier in this conversation that is no longer available.", {
          type: "object",
        })
      );
    return [...specs, ...placeholders];
  };

  const tools = typeof toolChoice === "object" && "oneOf" in toolChoice
    ? options.tools.filter((tool) => toolChoice.oneOf.includes(tool.name))
    : options.tools;

  if (responseFormat.type === "json" && structuredOutput === "tool") {
    const { objectName, schema } = responseFormat;
    const json = yield* Effect.try({
      try: () => codecTransformer(schema).jsonSchema,
      catch: (error) => unsupportedSchema(METHOD, error),
    });
    const userDescription = SchemaAST.resolveDescription(schema.ast);
    const description = Predicate.isNotUndefined(userDescription)
      ? `${userDescription} - You MUST respond with a JSON object.`
      : "You MUST respond with a JSON object.";
    const { specs, toolCodecs } = yield* toUserToolSpecs({
      codecTransformer,
      strictJsonSchema,
      tools: tools.filter((tool) => tool.name !== objectName),
    });
    return {
      toolConfig: {
        tools: withHistoryTools([makeToolSpec(objectName, description, json), ...specs]),
        toolChoice: { tool: { name: objectName } },
      },
      structuredOutputToolName: objectName,
      toolCodecs,
    };
  }

  const { specs: userSpecs, toolCodecs } = toolChoice === "none" && !history.hasToolBlocks
    ? { specs: [], toolCodecs: new Map<string, ToolCodec>() }
    : yield* toUserToolSpecs({ codecTransformer, strictJsonSchema, tools });
  const specs = withHistoryTools(userSpecs);

  if (specs.length === 0) {
    return { toolConfig: undefined, structuredOutputToolName: undefined, toolCodecs };
  }

  const choice = toToolChoice(toolChoice);
  return {
    toolConfig: {
      tools: specs,
      ...(Predicate.isNotUndefined(choice) ? { toolChoice: choice } : undefined),
    },
    structuredOutputToolName: undefined,
    toolCodecs,
  };
});

/**
 * Resolves the parameters of a tool call from the model.
 *
 * Calls to tools the request doesn't provide fail with `ToolNotFoundError`,
 * unless tool call validation is deferred. Parameters of strict tools are
 * decoded with the codec the tool was sent with and encoded back with the
 * tool's own schema; parameters that don't decode are left unchanged for the
 * toolkit to report.
 */
export const resolveToolCallParams = Effect.fnUntraced(function*({
  method,
  options,
  params,
  toolCodecs,
  toolName,
}: {
  readonly method: string;
  readonly options: LanguageModel.ProviderOptions;
  readonly params: unknown;
  readonly toolCodecs: ToolCodecs;
  readonly toolName: string;
}): Effect.fn.Return<unknown, AiError.AiError> {
  const tool = options.tools.find((tool) => tool.name === toolName);
  if (Predicate.isUndefined(tool)) {
    if (options.toolCallValidation === "deferred") {
      return params;
    }
    return yield* AiError.make({
      module: MODULE,
      method,
      reason: new AiError.ToolNotFoundError({
        toolName,
        availableTools: options.tools.map((tool) => tool.name),
      }),
    });
  }
  const codec = toolCodecs.get(toolName);
  if (Predicate.isUndefined(codec)) {
    return params;
  }
  return yield* (Schema.decodeUnknownEffect(codec)(params) as Effect.Effect<unknown, Schema.SchemaError>).pipe(
    Effect.flatMap((decoded) =>
      Schema.encodeUnknownEffect(tool.parametersSchema)(decoded) as Effect.Effect<unknown, Schema.SchemaError>
    ),
    Effect.orElseSucceed(() => params),
  );
});
