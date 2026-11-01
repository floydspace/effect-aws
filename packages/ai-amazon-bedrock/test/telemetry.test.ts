import { BedrockRuntimeClient, ConverseCommand, ConverseStreamCommand } from "@aws-sdk/client-bedrock-runtime";
import { mockClient } from "aws-sdk-client-mock";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import * as Tracer from "effect/Tracer";
import { afterEach, describe, expect, it } from "vitest";
import { converseOutput, MODEL_ID, provideModel, streamOutput, textStreamEvents } from "./utils.js";

const clientMock = mockClient(BedrockRuntimeClient);

const spans: Array<Tracer.NativeSpan> = [];
const tracer = Tracer.make({
  span: (options) => {
    const span = new Tracer.NativeSpan(options);
    spans.push(span);
    return span;
  },
});

const spanAttributes = (name: string) => Object.fromEntries(spans.find((span) => span.name === name)!.attributes);

afterEach(() => {
  clientMock.reset();
  spans.length = 0;
});

const inferenceConfig = { maxTokens: 100, temperature: 0.2, topP: 0.9, stopSequences: ["END"] };

describe("telemetry", () => {
  it("annotates the generateText span with GenAI attributes", async () => {
    clientMock.on(ConverseCommand).resolves(converseOutput({
      usage: { inputTokens: 10, outputTokens: 5, totalTokens: 115, cacheReadInputTokens: 100 },
    }));

    await LanguageModel.generateText({ prompt: "Hi" }).pipe(
      provideModel({ inferenceConfig }),
      Effect.withTracer(tracer),
      Effect.runPromise,
    );

    const attributes = spanAttributes("LanguageModel.generateText");
    expect(attributes).not.toHaveProperty("gen_ai.system");
    expect(attributes).toMatchObject({
      "gen_ai.provider.name": "aws.bedrock",
      "gen_ai.operation.name": "chat",
      "gen_ai.request.model": MODEL_ID,
      "gen_ai.request.max_tokens": 100,
      "gen_ai.request.temperature": 0.2,
      "gen_ai.request.top_p": 0.9,
      "gen_ai.request.stop_sequences": ["END"],
      "gen_ai.response.id": "req-123",
      "gen_ai.response.model": MODEL_ID,
      "gen_ai.response.finish_reasons": ["end_turn"],
      "gen_ai.usage.input_tokens": 110,
      "gen_ai.usage.output_tokens": 5,
      "gen_ai.usage.cache_read.input_tokens": 100,
      "gen_ai.usage.cache_write.input_tokens": 0,
    });
  });

  it("annotates the streamText span once the stream finishes", async () => {
    clientMock.on(ConverseStreamCommand).callsFake(async () => streamOutput(textStreamEvents(["Hi"])));

    await LanguageModel.streamText({ prompt: "Hi" }).pipe(
      Stream.runDrain,
      provideModel({ inferenceConfig }),
      Effect.withTracer(tracer),
      Effect.runPromise,
    );

    expect(spanAttributes("LanguageModel.streamText")).toMatchObject({
      "gen_ai.provider.name": "aws.bedrock",
      "gen_ai.request.model": MODEL_ID,
      "gen_ai.response.id": "req-stream",
      "gen_ai.response.finish_reasons": ["end_turn"],
      "gen_ai.usage.input_tokens": 12,
      "gen_ai.usage.output_tokens": 3,
    });
  });
});
