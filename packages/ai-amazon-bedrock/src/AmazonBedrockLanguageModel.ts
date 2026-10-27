/**
 * The `AmazonBedrockLanguageModel` module implements Effect AI's
 * `LanguageModel` service on top of the Amazon Bedrock Converse API exposed by
 * `@effect-aws/client-bedrock-runtime`. It translates Effect AI prompts, tools,
 * files, reasoning content and Bedrock-specific options into Converse
 * requests, and converts regular and streaming Converse responses back into
 * Effect AI response parts.
 *
 * Request signing, credentials, retries and the event stream protocol are all
 * handled by the AWS SDK client behind `BedrockRuntimeService`.
 *
 * @since 0.1.0
 * @stability unstable
 */
import type {
  ConverseCommandInput,
  ConverseStreamCommandInput,
  OutputConfig,
  OutputFormat,
} from "@aws-sdk/client-bedrock-runtime";
import { BedrockRuntimeService } from "@effect-aws/client-bedrock-runtime";
import * as AiError from "effect/ai/AiError";
import { toCodecAnthropic } from "effect/ai/AnthropicStructuredOutput";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as AiModel from "effect/ai/Model";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Predicate from "effect/Predicate";
import type * as Schema from "effect/Schema";
import * as SchemaAST from "effect/SchemaAST";
import * as Stream from "effect/Stream";
import { type ErrorContext, MODULE, toAiError, unsupportedSchema } from "./internal/errors.js";
import { prepareMessages } from "./internal/prompt.js";
import { makeResponse } from "./internal/response.js";
import { abortOnClose, makeStreamResponse } from "./internal/stream.js";
import { annotateRequest, annotateResponse, annotateStreamResponse } from "./internal/telemetry.js";
import { prepareTools, type ToolCodecs } from "./internal/tools.js";

/**
 * An Amazon Bedrock model identifier.
 *
 * **Details**
 *
 * Any identifier the Converse API accepts works: a foundation model ID
 * (`anthropic.claude-sonnet-4-5-20250929-v1:0`), a cross-region inference
 * profile ID (`eu.anthropic.claude-sonnet-4-5-20250929-v1:0`), or the ARN of an
 * inference profile, provisioned throughput, imported model or prompt router.
 *
 * @since 0.1.0
 * @stability unstable
 * @category models
 */
export type Model = string;

// =============================================================================
// Configuration
// =============================================================================

/**
 * Context service for Amazon Bedrock language model configuration.
 *
 * **Details**
 *
 * Holds the Converse request fields that are not derived from the prompt:
 * `inferenceConfig`, `additionalModelRequestFields`, `guardrailConfig`,
 * `performanceConfig`, `serviceTier`, `requestMetadata` and so on.
 *
 * Configuration from the context takes precedence over the defaults passed to
 * `model`, `make` or `layer`. Fields are merged shallowly, so an override of
 * `{ inferenceConfig: { temperature: 0 } }` replaces the whole default
 * `inferenceConfig`. When `maxTokens` is left out, Bedrock uses the model's
 * maximum.
 *
 * `guardrailConfig.streamProcessingMode` only applies to `streamText`.
 *
 * @since 0.1.0
 * @stability unstable
 * @category services
 */
export class Config extends Context.Service<Config, Config.Service>()(
  "@effect-aws/ai-amazon-bedrock/AmazonBedrockLanguageModel/Config",
) {}

/**
 * @since 0.1.0
 * @stability unstable
 */
export declare namespace Config {
  /**
   * The Converse request fields that can be configured per model or per call.
   *
   * @since 0.1.0
   * @stability unstable
   * @category models
   */
  export interface Service extends
    Partial<
      Omit<ConverseStreamCommandInput, "modelId" | "messages" | "system" | "toolConfig" | "outputConfig">
    >
  {
    /**
     * Converse output settings other than the text format, which is set by
     * `generateObject` in `"native"` structured output mode.
     */
    readonly outputConfig?: Omit<OutputConfig, "textFormat"> | undefined;
    /**
     * How `generateObject` asks the model for structured output.
     *
     * - `"tool"` (default): forces a call to a synthetic tool whose input
     *   schema is the requested object schema. Works with every model that
     *   supports a forced tool choice, but removes Anthropic's extended
     *   `thinking` from the request.
     * - `"native"`: uses Converse `outputConfig.textFormat` with a JSON
     *   schema. Use it on models that support Bedrock structured output, such
     *   as Claude 4.5 and later or Qwen3, and whenever extended thinking must
     *   stay on.
     */
    readonly structuredOutput?: "tool" | "native" | undefined;
    /**
     * The Converse `strict` flag for user-defined tools that don't set it with
     * the `Tool.Strict` annotation.
     *
     * When neither is set, `strict` is not sent and the model's default
     * applies. Strict tool support varies across Bedrock models.
     */
    readonly strictJsonSchema?: boolean | undefined;
  }
}

/**
 * A Converse cache point. Bedrock caches the prompt content that precedes it
 * for reuse by later requests.
 *
 * @since 0.1.0
 * @stability unstable
 * @category provider options
 */
export type CachePoint = {
  readonly type: "default";
  /**
   * How long the cached content lives. Bedrock defaults to five minutes, and
   * only some models support one hour.
   */
  readonly ttl?: "5m" | "1h" | null | undefined;
};

/**
 * Bedrock options shared by every prompt message and every content part except
 * reasoning, which can't be cached.
 *
 * @since 0.1.0
 * @stability unstable
 * @category provider options
 */
export type CachePointOptions = {
  /**
   * Appends a cache point after this message or part.
   *
   * A message's cache point goes after its last content that isn't reasoning,
   * and is left out when a part's cache point is already there.
   */
  readonly cachePoint?: CachePoint | null | undefined;
};

/**
 * Bedrock reasoning metadata that has to be sent back with reasoning content
 * in later turns so the model can verify it.
 *
 * @since 0.1.0
 * @stability unstable
 * @category provider options
 */
export type ReasoningMetadata = {
  /**
   * The signature Bedrock returns for reasoning text.
   */
  readonly signature?: string | null | undefined;
  /**
   * Base64-encoded reasoning content that the model provider redacted.
   */
  readonly redactedContent?: string | null | undefined;
};

/**
 * Bedrock-specific details attached to the `finish` part of a response.
 *
 * @since 0.1.0
 * @stability unstable
 * @category provider metadata
 */
export type FinishMetadata = {
  /**
   * The raw Converse `stopReason`.
   */
  readonly stopReason: string | null;
  /**
   * Server-side latency reported in the Converse `metrics`.
   */
  readonly latencyMs: number | null;
  /**
   * The service tier that processed the request.
   */
  readonly serviceTier: string | null;
  /**
   * The Converse `trace`, including guardrail assessments when guardrail
   * tracing is enabled.
   */
  readonly trace: Schema.Json;
  /**
   * The raw Converse token usage, including per-TTL cache details.
   */
  readonly usage: Schema.Json;
  /**
   * Model-specific response fields requested through
   * `additionalModelResponseFieldPaths`.
   */
  readonly additionalModelResponseFields: Schema.Json;
};

declare module "effect/ai/Prompt" {
  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface SystemMessageOptions extends ProviderOptions {
    readonly bedrock?: CachePointOptions | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface UserMessageOptions extends ProviderOptions {
    readonly bedrock?: CachePointOptions | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface AssistantMessageOptions extends ProviderOptions {
    readonly bedrock?: CachePointOptions | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ToolMessageOptions extends ProviderOptions {
    readonly bedrock?: CachePointOptions | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface TextPartOptions extends ProviderOptions {
    readonly bedrock?: CachePointOptions | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ReasoningPartOptions extends ProviderOptions {
    readonly bedrock?: ReasoningMetadata | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface FilePartOptions extends ProviderOptions {
    readonly bedrock?:
      | (CachePointOptions & {
        /**
         * The AWS account that owns the bucket, for `s3://` file URLs in
         * another account.
         */
        readonly bucketOwner?: string | null | undefined;
      })
      | null
      | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ToolCallPartOptions extends ProviderOptions {
    readonly bedrock?: CachePointOptions | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ToolResultPartOptions extends ProviderOptions {
    readonly bedrock?: CachePointOptions | null | undefined;
  }
}

declare module "effect/ai/Response" {
  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ReasoningPartMetadata extends ProviderMetadata {
    readonly bedrock?: ReasoningMetadata | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ReasoningDeltaPartMetadata extends ProviderMetadata {
    readonly bedrock?: ReasoningMetadata | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface FinishPartMetadata extends ProviderMetadata {
    readonly bedrock?: FinishMetadata | null | undefined;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ErrorPartMetadata extends ProviderMetadata {
    readonly bedrock?: { readonly requestId: string | null } | null | undefined;
  }
}

// =============================================================================
// Language Model
// =============================================================================

const isPlainObject = (u: unknown): u is Record<string, unknown> =>
  Predicate.isObject(u) && !Array.isArray(u) && Object.getPrototypeOf(u) === Object.prototype;

// Anthropic models reject extended thinking combined with a forced tool call.
const withoutThinking = (fields: ConverseStreamCommandInput["additionalModelRequestFields"]) => {
  if (!isPlainObject(fields) || !("thinking" in fields)) {
    return fields;
  }
  const { thinking: _, ...rest } = fields;
  return Object.keys(rest).length > 0 ? rest : undefined;
};

// Claude only accepts strict JSON schemas for structured output and strict
// tools (for example, every object needs `additionalProperties: false`), which
// other Bedrock models don't require.
const getCodecTransformer = (model: Model): LanguageModel.CodecTransformer =>
  /anthropic\.claude/.test(model) ? toCodecAnthropic : LanguageModel.defaultCodecTransformer;

const toConverseInput = ({ guardrailConfig, ...request }: ConverseStreamCommandInput): ConverseCommandInput => {
  if (Predicate.isUndefined(guardrailConfig)) {
    return request;
  }
  const { streamProcessingMode: _, ...rest } = guardrailConfig;
  return { ...request, guardrailConfig: rest };
};

const makeTextFormat = Effect.fnUntraced(function*(
  codecTransformer: LanguageModel.CodecTransformer,
  responseFormat: { readonly objectName: string; readonly schema: Schema.Top },
): Effect.fn.Return<OutputFormat, AiError.AiError> {
  const jsonSchema = yield* Effect.try({
    try: () => codecTransformer(responseFormat.schema).jsonSchema,
    catch: (error) => unsupportedSchema("prepareOutputConfig", error),
  });
  const description = SchemaAST.resolveDescription(responseFormat.schema.ast);
  return {
    type: "json_schema",
    structure: {
      jsonSchema: {
        name: responseFormat.objectName,
        schema: JSON.stringify(jsonSchema),
        ...(Predicate.isNotUndefined(description) ? { description } : undefined),
      },
    },
  };
});

/**
 * Creates an Amazon Bedrock model descriptor that can be provided with
 * `Effect.provide`.
 *
 * **Example** (Generating text with Claude on Bedrock)
 *
 * ```ts
 * import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock"
 * import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime"
 * import * as LanguageModel from "effect/ai/LanguageModel"
 * import * as Effect from "effect/Effect"
 * import * as Layer from "effect/Layer"
 *
 * const Claude = AmazonBedrockLanguageModel.model("eu.anthropic.claude-sonnet-4-5-20250929-v1:0", {
 *   inferenceConfig: { maxTokens: 4096 }
 * })
 *
 * const program = LanguageModel.generateText({ prompt: "Hello" }).pipe(
 *   Effect.provide(Layer.provideMerge(Claude, BedrockRuntime.defaultLayer))
 * )
 * ```
 *
 * @see {@link layer} for creating a `LanguageModel.LanguageModel` layer directly
 *
 * @since 0.1.0
 * @stability unstable
 * @category constructors
 */
export const model = (
  model: Model,
  config?: Config.Service,
): AiModel.Model<"amazon-bedrock", LanguageModel.LanguageModel, BedrockRuntimeService> =>
  AiModel.make("amazon-bedrock", model, layer({ model, config }));

/**
 * Creates an Amazon Bedrock `LanguageModel` service from a model identifier and
 * optional request defaults.
 *
 * **Details**
 *
 * The returned effect requires `BedrockRuntimeService`, so the AWS client is
 * configured with the usual `BedrockRuntimeService` layers (`defaultLayer`,
 * `layer(config)` or `baseLayer`).
 *
 * @since 0.1.0
 * @stability unstable
 * @category constructors
 */
export const make = Effect.fnUntraced(function*({ config: providerConfig, model }: {
  readonly model: Model;
  readonly config?: Config.Service | undefined;
}): Effect.fn.Return<LanguageModel.LanguageModel, never, BedrockRuntimeService> {
  const service = yield* BedrockRuntimeService;
  const codecTransformer = getCodecTransformer(model);

  const makeConfig = Effect.map(
    Effect.serviceOption(Config),
    (config): Config.Service => ({ ...providerConfig, ...Option.getOrUndefined(config) }),
  );

  const makeRequest = Effect.fnUntraced(function*(options: LanguageModel.ProviderOptions): Effect.fn.Return<{
    readonly request: ConverseStreamCommandInput;
    readonly structuredOutputToolName: string | undefined;
    readonly toolCodecs: ToolCodecs;
  }, AiError.AiError> {
    const {
      additionalModelRequestFields,
      outputConfig,
      strictJsonSchema,
      structuredOutput = "tool",
      ...requestConfig
    } = yield* makeConfig;
    const { messages, system } = yield* prepareMessages(options.prompt);
    const { structuredOutputToolName, toolCodecs, toolConfig } = yield* prepareTools({
      codecTransformer,
      messages,
      options,
      strictJsonSchema,
      structuredOutput,
    });

    const requestOutputConfig: OutputConfig = { ...outputConfig };
    if (options.responseFormat.type === "json" && structuredOutput === "native") {
      requestOutputConfig.textFormat = yield* makeTextFormat(codecTransformer, options.responseFormat);
    }

    const requestFields = Predicate.isNotUndefined(structuredOutputToolName)
      ? withoutThinking(additionalModelRequestFields)
      : additionalModelRequestFields;

    const request: ConverseStreamCommandInput = {
      ...requestConfig,
      modelId: model,
      messages,
      ...(Predicate.isNotUndefined(system) ? { system } : undefined),
      ...(Predicate.isNotUndefined(toolConfig) ? { toolConfig } : undefined),
      ...(Predicate.isNotUndefined(requestFields) ? { additionalModelRequestFields: requestFields } : undefined),
      ...(Object.keys(requestOutputConfig).length > 0 ? { outputConfig: requestOutputConfig } : undefined),
    };

    return { request, structuredOutputToolName, toolCodecs };
  });

  return yield* LanguageModel.make({
    codecTransformer,
    // Converse only accepts system content in the top-level `system` field.
    supportsSystemMessagesInHistory: Effect.succeed(false),
    generateText: Effect.fnUntraced(function*(options) {
      const { request, structuredOutputToolName, toolCodecs } = yield* makeRequest(options);
      annotateRequest(options.span, request);
      const context: ErrorContext = { method: "generateText", modelId: model, operation: "Converse" };
      const output = yield* service.converse(toConverseInput(request)).pipe(
        Effect.mapError((error) => toAiError(error, context)),
      );
      annotateResponse(options.span, model, output);
      return yield* makeResponse({ modelId: model, options, output, structuredOutputToolName, toolCodecs });
    }),
    streamText: (options) =>
      Stream.unwrap(Effect.gen(function*() {
        const { request, toolCodecs } = yield* makeRequest(options);
        annotateRequest(options.span, request);
        const context: ErrorContext = { method: "streamText", modelId: model, operation: "ConverseStream" };
        const controller = yield* Effect.acquireRelease(
          Effect.sync(() => new AbortController()),
          (controller, exit) => Exit.isSuccess(exit) ? Effect.void : Effect.sync(() => controller.abort()),
        );
        const output = yield* service.converseStream(request, { abortSignal: controller.signal }).pipe(
          Effect.mapError((error) => toAiError(error, context)),
        );
        if (Predicate.isUndefined(output.stream)) {
          return yield* AiError.make({
            module: MODULE,
            method: context.method,
            reason: new AiError.InvalidResponseError({ description: "Amazon Bedrock returned no event stream" }),
          });
        }
        return makeStreamResponse({
          context,
          events: abortOnClose(output.stream, controller),
          options,
          requestId: output.$metadata?.requestId,
          toolCodecs,
        });
      })).pipe(
        Stream.map((part) => {
          annotateStreamResponse(options.span, part);
          return part;
        }),
      ),
  });
});

/**
 * Creates a layer for the Amazon Bedrock language model.
 *
 * @see {@link make} for constructing the language model service effectfully
 * @see {@link model} for creating a model descriptor
 *
 * @since 0.1.0
 * @stability unstable
 * @category layers
 */
export const layer = (options: {
  readonly model: Model;
  readonly config?: Config.Service | undefined;
}): Layer.Layer<LanguageModel.LanguageModel, never, BedrockRuntimeService> =>
  Layer.effect(LanguageModel.LanguageModel, make(options));

/**
 * Provides config overrides for Amazon Bedrock language model operations.
 *
 * **Details**
 *
 * The overrides are merged with any existing `Config` service for the
 * duration of the supplied effect, and take precedence over it and over the
 * model defaults. Fields are merged shallowly, so an overridden object field
 * such as `inferenceConfig` replaces the existing one.
 *
 * **Example** (Lowering the temperature for one call)
 *
 * ```ts
 * import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock"
 * import * as LanguageModel from "effect/ai/LanguageModel"
 *
 * const program = LanguageModel.generateText({ prompt: "Name a colour" }).pipe(
 *   AmazonBedrockLanguageModel.withConfigOverride({ inferenceConfig: { temperature: 0 } })
 * )
 * ```
 *
 * @see {@link Config} for the available configuration fields
 *
 * @since 0.1.0
 * @stability unstable
 * @category configuration
 */
export const withConfigOverride: {
  (overrides: Config.Service): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, Config>>;
  <A, E, R>(self: Effect.Effect<A, E, R>, overrides: Config.Service): Effect.Effect<A, E, Exclude<R, Config>>;
} = dual(
  2,
  <A, E, R>(self: Effect.Effect<A, E, R>, overrides: Config.Service) =>
    Effect.flatMap(
      Effect.serviceOption(Config),
      (config) => Effect.provideService(self, Config, { ...Option.getOrUndefined(config), ...overrides }),
    ),
);
