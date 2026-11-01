import { BedrockRuntimeClient, ConverseCommand, type ConverseCommandInput } from "@aws-sdk/client-bedrock-runtime";
import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock";
import { mockClient } from "aws-sdk-client-mock";
import { toCodecAnthropic } from "effect/ai/AnthropicStructuredOutput";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Prompt from "effect/ai/Prompt";
import * as Tool from "effect/ai/Tool";
import * as Toolkit from "effect/ai/Toolkit";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { afterEach, describe, expect, it } from "vitest";
import { converseOutput, GetWeather, MODEL_ID, provideModel } from "./utils.js";

const clientMock = mockClient(BedrockRuntimeClient);

const lastConverseInput = (): ConverseCommandInput => {
  const calls = clientMock.commandCalls(ConverseCommand);
  return calls[calls.length - 1].args[0].input;
};

const WeatherToolkit = Toolkit.make(GetWeather);

const WeatherHandlers = WeatherToolkit.toLayer({
  GetWeather: ({ city }) => Effect.succeed(`Sunny in ${city}`),
});

const Person = Schema.Struct({ name: Schema.String, age: Schema.Number }).annotate({ identifier: "Person" });

afterEach(() => {
  clientMock.reset();
});

describe("AmazonBedrockLanguageModel", () => {
  describe("generateText", () => {
    it("returns text, usage, finish reason and metadata", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        usage: {
          inputTokens: 10,
          outputTokens: 5,
          totalTokens: 135,
          cacheReadInputTokens: 100,
          cacheWriteInputTokens: 20,
        },
        serviceTier: { type: "priority" },
      }));

      const response = await LanguageModel.generateText({ prompt: "Hello" }).pipe(
        provideModel({ inferenceConfig: { maxTokens: 1024 } }),
        Effect.runPromise,
      );

      expect(response.text).toBe("Hello!");
      expect(response.finishReason).toBe("stop");
      expect(response.usage.inputTokens).toEqual({ uncached: 10, total: 130, cacheRead: 100, cacheWrite: 20 });
      expect(response.usage.outputTokens.total).toBe(5);

      const metadata = response.content.find((part) => part.type === "response-metadata");
      expect(metadata).toMatchObject({ id: "req-123", modelId: MODEL_ID });

      const finish = response.content.find((part) => part.type === "finish");
      expect(finish?.metadata.bedrock).toEqual({
        stopReason: "end_turn",
        latencyMs: 120,
        serviceTier: "priority",
        trace: null,
        usage: {
          inputTokens: 10,
          outputTokens: 5,
          totalTokens: 135,
          cacheReadInputTokens: 100,
          cacheWriteInputTokens: 20,
        },
        additionalModelResponseFields: null,
      });

      expect(lastConverseInput()).toEqual({
        modelId: MODEL_ID,
        messages: [{ role: "user", content: [{ text: "Hello" }] }],
        inferenceConfig: { maxTokens: 1024 },
      });
    });

    it("sends the system prompt and request config, without stream-only guardrail settings", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput());

      await LanguageModel.generateText({
        prompt: [{ role: "system", content: "Be brief." }, { role: "user", content: "Hello" }],
      }).pipe(
        provideModel({
          guardrailConfig: { guardrailIdentifier: "gr-1", guardrailVersion: "1", streamProcessingMode: "async" },
          requestMetadata: { tenant: "acme" },
          performanceConfig: { latency: "optimized" },
          additionalModelRequestFields: { top_k: 5 },
        }),
        Effect.runPromise,
      );

      expect(lastConverseInput()).toEqual({
        modelId: MODEL_ID,
        system: [{ text: "Be brief." }],
        messages: [{ role: "user", content: [{ text: "Hello" }] }],
        guardrailConfig: { guardrailIdentifier: "gr-1", guardrailVersion: "1" },
        requestMetadata: { tenant: "acme" },
        performanceConfig: { latency: "optimized" },
        additionalModelRequestFields: { top_k: 5 },
      });
    });

    it("calls tools and resolves them with the toolkit", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [
          { text: "Let me check." },
          { toolUse: { toolUseId: "tool-1", name: "GetWeather", input: { city: "Paris" } } },
        ],
        stopReason: "tool_use",
      }));

      const response = await LanguageModel.generateText({ prompt: "Weather in Paris?", toolkit: WeatherToolkit }).pipe(
        provideModel(),
        Effect.provide(WeatherHandlers),
        Effect.runPromise,
      );

      expect(response.finishReason).toBe("tool-calls");
      expect(response.toolCalls).toMatchObject([{ id: "tool-1", name: "GetWeather", params: { city: "Paris" } }]);
      expect(response.toolResults).toMatchObject([{ id: "tool-1", name: "GetWeather", result: "Sunny in Paris" }]);

      expect(lastConverseInput().toolConfig).toEqual({
        tools: [{
          toolSpec: {
            name: "GetWeather",
            description: "Get the current weather",
            inputSchema: { json: Tool.getJsonSchema(GetWeather) },
          },
        }],
        toolChoice: { auto: {} },
      });
    });

    it("fails with ToolNotFoundError when the model calls a tool outside the toolkit", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [{ toolUse: { toolUseId: "tool-1", name: "GetTime", input: { zone: "UTC" } } }],
        stopReason: "tool_use",
      }));

      const error = await LanguageModel.generateText({ prompt: "Time?", toolkit: WeatherToolkit }).pipe(
        provideModel(),
        Effect.provide(WeatherHandlers),
        Effect.flip,
        Effect.runPromise,
      );

      expect(error.method).toBe("generateText");
      expect(error.reason).toMatchObject({
        _tag: "ToolNotFoundError",
        toolName: "GetTime",
        availableTools: ["GetWeather"],
      });
    });

    it("returns calls to undeclared tools when tool call validation is deferred", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [{ toolUse: { toolUseId: "tool-1", name: "GetTime", input: { zone: "UTC" } } }],
        stopReason: "tool_use",
      }));

      const response = await LanguageModel.generateText({
        prompt: "Time?",
        disableToolCallResolution: true,
        toolCallValidation: "deferred",
      }).pipe(provideModel(), Effect.runPromise);

      expect(response.toolCalls).toMatchObject([{ id: "tool-1", name: "GetTime", params: { zone: "UTC" } }]);
    });

    it("sends Claude strict schemas for strict tools and resolves the nulls Claude returns", async () => {
      const Forecast = Tool.make("Forecast", {
        parameters: Schema.Struct({ city: Schema.String, days: Schema.optional(Schema.Number) }),
        success: Schema.String,
      }).annotate(Tool.Strict, true);
      const ForecastToolkit = Toolkit.make(Forecast);
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [{ toolUse: { toolUseId: "tool-1", name: "Forecast", input: { city: "Paris", days: null } } }],
        stopReason: "tool_use",
      }));

      const response = await LanguageModel.generateText({ prompt: "Forecast?", toolkit: ForecastToolkit }).pipe(
        provideModel({ strictJsonSchema: false }),
        Effect.provide(ForecastToolkit.toLayer({ Forecast: ({ city, days }) => Effect.succeed(`${city}:${days}`) })),
        Effect.runPromise,
      );

      expect(response.toolCalls.map((call) => call.params)).toEqual([{ city: "Paris" }]);
      expect(response.toolResults).toMatchObject([{ name: "Forecast", result: "Paris:undefined" }]);

      const input = lastConverseInput();
      expect(input.toolConfig?.tools).toEqual([{
        toolSpec: {
          name: "Forecast",
          inputSchema: { json: toCodecAnthropic(Forecast.parametersSchema).jsonSchema },
          strict: true,
        },
      }]);
      expect(input).not.toHaveProperty("strictJsonSchema");
    });

    it("returns reasoning with the metadata needed to send it back", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [
          { reasoningContent: { reasoningText: { text: "Thinking...", signature: "sig-1" } } },
          { reasoningContent: { redactedContent: new Uint8Array([1, 2, 3]) } },
          { text: "42" },
        ],
      }));

      const response = await LanguageModel.generateText({ prompt: "Meaning of life?" }).pipe(
        provideModel(),
        Effect.runPromise,
      );

      expect(response.reasoning.map((part) => [part.text, part.metadata.bedrock])).toEqual([
        ["Thinking...", { signature: "sig-1" }],
        ["", { redactedContent: "AQID" }],
      ]);

      clientMock.on(ConverseCommand).resolves(converseOutput());
      await LanguageModel.generateText({
        prompt: Prompt.concat(
          Prompt.concat(Prompt.make("Meaning of life?"), Prompt.fromResponseParts(response.content)),
          Prompt.make("Why?"),
        ),
      }).pipe(provideModel(), Effect.runPromise);

      expect(lastConverseInput().messages?.[1]).toEqual({
        role: "assistant",
        content: [
          { reasoningContent: { reasoningText: { text: "Thinking...", signature: "sig-1" } } },
          { reasoningContent: { redactedContent: new Uint8Array([1, 2, 3]) } },
          { text: "42" },
        ],
      });
    });

    it("uses the model chosen by a prompt router as the response model", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        trace: { promptRouter: { invokedModelId: "anthropic.claude-3-5-haiku-20241022-v1:0" } },
      }));

      const response = await LanguageModel.generateText({ prompt: "Hello" }).pipe(provideModel(), Effect.runPromise);

      expect(response.content.find((part) => part.type === "response-metadata")).toMatchObject({
        modelId: "anthropic.claude-3-5-haiku-20241022-v1:0",
      });
    });

    it.each(
      [
        ["end_turn", "stop"],
        ["stop_sequence", "stop"],
        ["tool_use", "tool-calls"],
        ["max_tokens", "length"],
        ["model_context_window_exceeded", "length"],
        ["guardrail_intervened", "content-filter"],
        ["content_filtered", "content-filter"],
        ["malformed_model_output", "error"],
        ["malformed_tool_use", "error"],
        ["something_new", "unknown"],
      ] as const,
    )("maps stop reason %s to finish reason %s", async (stopReason, finishReason) => {
      clientMock.on(ConverseCommand).resolves(converseOutput({ stopReason: stopReason as any }));

      const response = await LanguageModel.generateText({ prompt: "Hello" }).pipe(provideModel(), Effect.runPromise);

      expect(response.finishReason).toBe(finishReason);
    });
  });

  describe("generateObject", () => {
    it("forces a synthetic tool in tool mode and decodes its input", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [
          { text: "Here is the person:" },
          { toolUse: { toolUseId: "tool-1", name: "Person", input: { name: "Ada", age: 36 } } },
        ],
        stopReason: "tool_use",
      }));

      const response = await LanguageModel.generateObject({ prompt: "Who wrote the first program?", schema: Person })
        .pipe(
          provideModel({
            additionalModelRequestFields: { thinking: { type: "enabled", budget_tokens: 1024 }, top_k: 5 },
          }),
          Effect.runPromise,
        );

      expect(response.value).toEqual({ name: "Ada", age: 36 });
      expect(response.text).toBe('{"name":"Ada","age":36}');
      expect(response.finishReason).toBe("stop");

      const input = lastConverseInput();
      expect(input.toolConfig).toEqual({
        tools: [{
          toolSpec: {
            name: "Person",
            description: "You MUST respond with a JSON object.",
            inputSchema: { json: toCodecAnthropic(Person).jsonSchema },
          },
        }],
        toolChoice: { tool: { name: "Person" } },
      });
      expect(input.additionalModelRequestFields).toEqual({ top_k: 5 });
      expect(input.outputConfig).toBeUndefined();
    });

    it("drops additionalModelRequestFields when thinking was the only field in tool mode", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [{ toolUse: { toolUseId: "tool-1", name: "Person", input: { name: "Ada", age: 36 } } }],
        stopReason: "tool_use",
      }));

      await LanguageModel.generateObject({ prompt: "Who?", schema: Person }).pipe(
        provideModel({ additionalModelRequestFields: { thinking: { type: "enabled", budget_tokens: 1024 } } }),
        Effect.runPromise,
      );

      expect(lastConverseInput().additionalModelRequestFields).toBeUndefined();
    });

    it("uses outputConfig.textFormat in native mode", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [{ text: '{"name":"Ada","age":36}' }],
      }));

      const response = await LanguageModel.generateObject({ prompt: "Who?", schema: Person }).pipe(
        provideModel({
          structuredOutput: "native",
          outputConfig: { effort: "low" },
          additionalModelRequestFields: { thinking: { type: "enabled", budget_tokens: 1024 } },
        }),
        Effect.runPromise,
      );

      expect(response.value).toEqual({ name: "Ada", age: 36 });

      const input = lastConverseInput();
      expect(input.toolConfig).toBeUndefined();
      expect(input.outputConfig).toEqual({
        effort: "low",
        textFormat: {
          type: "json_schema",
          structure: {
            jsonSchema: {
              name: "Person",
              schema: JSON.stringify(toCodecAnthropic(Person).jsonSchema),
            },
          },
        },
      });
      expect(input.additionalModelRequestFields).toEqual({ thinking: { type: "enabled", budget_tokens: 1024 } });
    });

    it("decodes the nulls Claude sends for optional fields", async () => {
      const Profile = Schema.Struct({ name: Schema.String, nickname: Schema.optional(Schema.String) });
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [{ text: '{"name":"Ada","nickname":null}' }],
      }));

      const response = await LanguageModel.generateObject({ prompt: "Who?", schema: Profile, objectName: "Profile" })
        .pipe(provideModel({ structuredOutput: "native" }), Effect.runPromise);

      expect(response.value).toEqual({ name: "Ada" });
    });

    it("sends schemas without Claude-specific rewrites to other models", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput({
        content: [{ text: '{"name":"Ada","age":36}' }],
      }));

      const response = await LanguageModel.generateObject({ prompt: "Who?", schema: Person }).pipe(
        provideModel({ structuredOutput: "native" }, "openai.gpt-oss-20b-1:0"),
        Effect.runPromise,
      );

      expect(response.value).toEqual({ name: "Ada", age: 36 });
      expect(lastConverseInput().outputConfig?.textFormat?.structure?.jsonSchema?.schema).toBe(
        JSON.stringify(LanguageModel.defaultCodecTransformer(Person).jsonSchema),
      );
    });
  });

  describe("config", () => {
    it("lets withConfigOverride win over context config, and context config win over model defaults", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput());

      await LanguageModel.generateText({ prompt: "Hello" }).pipe(
        AmazonBedrockLanguageModel.withConfigOverride({
          inferenceConfig: { topP: 0.9 },
          requestMetadata: { source: "override" },
        }),
        Effect.provideService(AmazonBedrockLanguageModel.Config, {
          inferenceConfig: { temperature: 0.5 },
          requestMetadata: { source: "context", team: "ai" },
        }),
        provideModel({
          inferenceConfig: { maxTokens: 100, temperature: 1 },
          serviceTier: { type: "flex" },
        }),
        Effect.runPromise,
      );

      const input = lastConverseInput() as ConverseCommandInput & { serviceTier?: unknown };
      expect(input.inferenceConfig).toEqual({ topP: 0.9 });
      expect(input.requestMetadata).toEqual({ source: "override" });
      expect(input.serviceTier).toEqual({ type: "flex" });
    });

    it("replaces object fields instead of merging them", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput());

      await LanguageModel.generateText({ prompt: "Hello" }).pipe(
        AmazonBedrockLanguageModel.withConfigOverride({ inferenceConfig: { temperature: 0 } }),
        provideModel({ inferenceConfig: { maxTokens: 100, temperature: 1 } }),
        Effect.runPromise,
      );

      expect(lastConverseInput().inferenceConfig).toEqual({ temperature: 0 });
    });

    it("only applies withConfigOverride to the wrapped effect", async () => {
      clientMock.on(ConverseCommand).resolves(converseOutput());

      await Effect.gen(function*() {
        yield* LanguageModel.generateText({ prompt: "One" }).pipe(
          AmazonBedrockLanguageModel.withConfigOverride({ inferenceConfig: { temperature: 0 } }),
        );
        yield* LanguageModel.generateText({ prompt: "Two" });
      }).pipe(provideModel({ inferenceConfig: { temperature: 1 } }), Effect.runPromise);

      const calls = clientMock.commandCalls(ConverseCommand);
      expect(calls[0].args[0].input.inferenceConfig).toEqual({ temperature: 0 });
      expect(calls[1].args[0].input.inferenceConfig).toEqual({ temperature: 1 });
    });
  });
});
