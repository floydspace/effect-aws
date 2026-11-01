import type { Message, ToolConfiguration } from "@aws-sdk/client-bedrock-runtime";
import {
  prepareTools,
  resolveToolCallParams,
  type StructuredOutputMode,
} from "@effect-aws/ai-amazon-bedrock/internal/tools";
import { describe, expect, it } from "@effect/vitest";
import { toCodecAnthropic } from "effect/ai/AnthropicStructuredOutput";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Tool from "effect/ai/Tool";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Schema from "effect/Schema";
import { GetWeather, providerOptions } from "./utils.js";

const GetTime = Tool.make("GetTime", {
  parameters: Schema.Struct({ zone: Schema.String }),
  success: Schema.String,
});

const WebSearch = Tool.providerDefined({
  id: "anthropic.web_search_20250305",
  customName: "WebSearch",
  providerName: "web_search",
  success: Schema.String,
})();

const weatherSpec = {
  toolSpec: {
    name: "GetWeather",
    description: "Get the current weather",
    inputSchema: { json: Tool.getJsonSchema(GetWeather) },
  },
};

const timeSpec = {
  toolSpec: {
    name: "GetTime",
    inputSchema: { json: Tool.getJsonSchema(GetTime) },
  },
};

const historyWithTools: Array<Message> = [
  { role: "user", content: [{ text: "Weather?" }] },
  { role: "assistant", content: [{ toolUse: { toolUseId: "t1", name: "GetWeather", input: { city: "Paris" } } }] },
  { role: "user", content: [{ toolResult: { toolUseId: "t1", content: [{ text: "Sunny" }] } }] },
];

const Forecast = Tool.make("Forecast", {
  parameters: Schema.Struct({ city: Schema.String, days: Schema.optional(Schema.Number) }),
  success: Schema.String,
});

const prepare = (params: {
  readonly tools?: ReadonlyArray<Tool.Any>;
  readonly toolChoice?: LanguageModel.ToolChoice<string>;
  readonly responseFormat?: LanguageModel.ProviderOptions["responseFormat"];
  readonly messages?: Array<Message>;
  readonly structuredOutput?: StructuredOutputMode;
  readonly codecTransformer?: LanguageModel.CodecTransformer;
  readonly strictJsonSchema?: boolean;
}) =>
  prepareTools({
    codecTransformer: params.codecTransformer ?? LanguageModel.defaultCodecTransformer,
    messages: params.messages ?? [{ role: "user", content: [{ text: "Hi" }] }],
    options: providerOptions({
      tools: params.tools ?? [],
      toolChoice: params.toolChoice ?? "auto",
      responseFormat: params.responseFormat ?? { type: "text" },
    }),
    strictJsonSchema: params.strictJsonSchema,
    structuredOutput: params.structuredOutput ?? "tool",
  });

describe("prepareTools", () => {
  it.effect("maps user-defined tools to tool specs with their JSON schema and description", () =>
    Effect.gen(function*() {
      const { structuredOutputToolName, toolConfig } = yield* prepare({ tools: [GetWeather, GetTime] });

      expect(toolConfig).toEqual({ tools: [weatherSpec, timeSpec], toolChoice: { auto: {} } });
      expect(structuredOutputToolName).toBeUndefined();
      expect(weatherSpec.toolSpec.inputSchema.json).toMatchObject({
        type: "object",
        properties: { city: { type: "string" } },
        required: ["city"],
      });
    }));

  describe("tool choice", () => {
    it.effect("maps required to any", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({ tools: [GetWeather], toolChoice: "required" });

        expect(toolConfig?.toolChoice).toEqual({ any: {} });
      }));

    it.effect("maps a named tool to a specific tool choice", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({ tools: [GetWeather, GetTime], toolChoice: { tool: "GetTime" } });

        expect(toolConfig?.toolChoice).toEqual({ tool: { name: "GetTime" } });
      }));

    it.effect("filters tools with oneOf and maps its mode", () =>
      Effect.gen(function*() {
        const auto = yield* prepare({ tools: [GetWeather, GetTime], toolChoice: { oneOf: ["GetTime"] } });
        const required = yield* prepare({
          tools: [GetWeather, GetTime],
          toolChoice: { mode: "required", oneOf: ["GetWeather"] },
        });

        expect(auto.toolConfig).toEqual({ tools: [timeSpec], toolChoice: { auto: {} } });
        expect(required.toolConfig).toEqual({ tools: [weatherSpec], toolChoice: { any: {} } });
      }));

    it.effect("omits the tool config for none when the history has no tool blocks", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({ tools: [GetWeather], toolChoice: "none" });

        expect(toolConfig).toBeUndefined();
      }));

    it.effect("omits the tool config when there are no tools", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({ tools: [] });

        expect(toolConfig).toBeUndefined();
      }));
  });

  describe("history with tool blocks", () => {
    it.effect("keeps tool specs without a tool choice for none", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({
          tools: [GetWeather],
          toolChoice: "none",
          messages: historyWithTools,
        });

        expect(toolConfig).toEqual({ tools: [weatherSpec] });
      }));

    it.effect("adds placeholder specs for tools the history uses but the request no longer provides", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({ tools: [], toolChoice: "none", messages: historyWithTools });

        expect(toolConfig).toEqual({
          tools: [{
            toolSpec: {
              name: "GetWeather",
              description: "A tool used earlier in this conversation that is no longer available.",
              inputSchema: { json: { type: "object" } },
            },
          }],
        });
      }));
  });

  describe("strict mode", () => {
    const strictOf = (toolConfig: ToolConfiguration | undefined, name: string) =>
      toolConfig?.tools?.find((tool) => tool.toolSpec?.name === name)?.toolSpec?.strict;

    it.effect("omits strict when neither the tool nor the config sets it", () =>
      Effect.gen(function*() {
        const { toolCodecs, toolConfig } = yield* prepare({ tools: [GetWeather] });

        expect(toolConfig?.tools?.[0].toolSpec).not.toHaveProperty("strict");
        expect(toolCodecs.size).toBe(0);
      }));

    it.effect("uses the config default for tools without a Strict annotation", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({ tools: [GetWeather], strictJsonSchema: true });

        expect(toolConfig?.tools).toEqual([{ toolSpec: { ...weatherSpec.toolSpec, strict: true } }]);
      }));

    it.effect("lets the Tool.Strict annotation win over the config", () =>
      Effect.gen(function*() {
        const Lenient = GetWeather.annotate(Tool.Strict, false);
        const Strict = GetTime.annotate(Tool.Strict, true);

        const { toolConfig } = yield* prepare({ tools: [Lenient, Strict], strictJsonSchema: true });
        const off = yield* prepare({ tools: [Strict], strictJsonSchema: false });

        expect(strictOf(toolConfig, "GetWeather")).toBe(false);
        expect(strictOf(toolConfig, "GetTime")).toBe(true);
        expect(strictOf(off.toolConfig, "GetTime")).toBe(true);
      }));

    it.effect("sends strict tools with the model's codec transformer and keeps their codecs", () =>
      Effect.gen(function*() {
        const StrictForecast = Forecast.annotate(Tool.Strict, true);

        const { toolCodecs, toolConfig } = yield* prepare({
          tools: [StrictForecast, GetWeather],
          codecTransformer: toCodecAnthropic,
        });

        expect(toolConfig?.tools).toEqual([
          {
            toolSpec: {
              name: "Forecast",
              inputSchema: { json: toCodecAnthropic(Forecast.parametersSchema).jsonSchema },
              strict: true,
            },
          },
          weatherSpec,
        ]);
        expect([...toolCodecs.keys()]).toEqual(["Forecast"]);
      }));

    it.effect("sends the raw JSON schema of a strict dynamic tool unchanged", () =>
      Effect.gen(function*() {
        const json = { type: "object", properties: { query: { type: "string" } }, required: ["query"] };
        const Search = Tool.dynamic("Search", { parameters: json }).annotate(Tool.Strict, true);

        const { toolCodecs, toolConfig } = yield* prepare({ tools: [Search], codecTransformer: toCodecAnthropic });

        expect(toolConfig?.tools).toEqual([{ toolSpec: { name: "Search", inputSchema: { json }, strict: true } }]);
        expect(toolCodecs.size).toBe(0);
      }));
  });

  describe("resolveToolCallParams", () => {
    const resolve = (params: unknown, toolCodecs = new Map()) =>
      resolveToolCallParams({
        method: "generateText",
        options: providerOptions({ tools: [Forecast] }),
        params,
        toolCodecs,
        toolName: "Forecast",
      });

    it.effect("converts the nulls of a Claude strict schema back to missing fields", () =>
      Effect.gen(function*() {
        const codecs = new Map([["Forecast", toCodecAnthropic(Forecast.parametersSchema).codec]]);

        expect(yield* resolve({ city: "Paris", days: null }, codecs)).toEqual({ city: "Paris" });
        expect(yield* resolve({ city: "Paris", days: 3 }, codecs)).toEqual({ city: "Paris", days: 3 });
      }));

    it.effect("leaves parameters that don't decode for the toolkit to report", () =>
      Effect.gen(function*() {
        const codecs = new Map([["Forecast", toCodecAnthropic(Forecast.parametersSchema).codec]]);

        expect(yield* resolve({ town: "Paris" }, codecs)).toEqual({ town: "Paris" });
      }));

    it.effect("passes parameters through for tools sent with their own schema", () =>
      Effect.gen(function*() {
        expect(yield* resolve({ city: "Paris", days: null })).toEqual({ city: "Paris", days: null });
      }));
  });

  it.effect("rejects provider-defined tools", () =>
    Effect.gen(function*() {
      const exit = yield* Effect.exit(prepare({ tools: [GetWeather, WebSearch] }));

      expect(Exit.isFailure(exit)).toBe(true);
      if (Exit.isFailure(exit)) {
        expect(exit.cause.toString()).toMatch("ToolConfigurationError");
        expect(exit.cause.toString()).toMatch("WebSearch");
      }
    }));

  describe("structured output", () => {
    const Person = Schema.Struct({ name: Schema.String, age: Schema.Number }).annotate({
      description: "A person",
    });

    it.effect("forces a synthetic tool in tool mode", () =>
      Effect.gen(function*() {
        const { structuredOutputToolName, toolConfig } = yield* prepare({
          toolChoice: "none",
          responseFormat: { type: "json", objectName: "Person", schema: Person },
        });

        expect(structuredOutputToolName).toBe("Person");
        expect(toolConfig).toEqual({
          tools: [{
            toolSpec: {
              name: "Person",
              description: "A person - You MUST respond with a JSON object.",
              inputSchema: { json: LanguageModel.defaultCodecTransformer(Person).jsonSchema },
            },
          }],
          toolChoice: { tool: { name: "Person" } },
        });
      }));

    it.effect("keeps user tools next to the synthetic tool in tool mode", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({
          tools: [GetWeather],
          responseFormat: { type: "json", objectName: "Person", schema: Person },
        });

        expect(toolConfig?.tools?.map((tool) => tool.toolSpec?.name)).toEqual(["Person", "GetWeather"]);
        expect(toolConfig?.toolChoice).toEqual({ tool: { name: "Person" } });
      }));

    it.effect("uses the structured output transformer for the synthetic tool only", () =>
      Effect.gen(function*() {
        const { toolConfig } = yield* prepare({
          tools: [GetWeather],
          responseFormat: { type: "json", objectName: "Person", schema: Person },
          codecTransformer: toCodecAnthropic,
        });

        expect(toolConfig?.tools?.[0].toolSpec?.inputSchema?.json).toEqual(toCodecAnthropic(Person).jsonSchema);
        expect(toolConfig?.tools?.[1]).toEqual(weatherSpec);
      }));

    it.effect("adds no synthetic tool in native mode", () =>
      Effect.gen(function*() {
        const { structuredOutputToolName, toolConfig } = yield* prepare({
          toolChoice: "none",
          structuredOutput: "native",
          responseFormat: { type: "json", objectName: "Person", schema: Person },
        });

        expect(structuredOutputToolName).toBeUndefined();
        expect(toolConfig).toBeUndefined();
      }));
  });
});
