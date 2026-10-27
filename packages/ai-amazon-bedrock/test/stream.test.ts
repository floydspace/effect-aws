import {
  BedrockRuntimeClient,
  ConverseStreamCommand,
  type ConverseStreamCommandInput,
  type ConverseStreamOutput,
  ModelStreamErrorException,
} from "@aws-sdk/client-bedrock-runtime";
import { makeStreamResponse } from "@effect-aws/ai-amazon-bedrock/internal/stream";
import { describe, expect, it } from "@effect/vitest";
import { mockClient } from "aws-sdk-client-mock";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Toolkit from "effect/ai/Toolkit";
import * as Deferred from "effect/Deferred";
import * as Effect from "effect/Effect";
import * as Fiber from "effect/Fiber";
import * as Stream from "effect/Stream";
import { afterEach } from "vitest";
import { GetWeather, MODEL_ID, provideModel, providerOptions, streamOutput, textStreamEvents } from "./utils.js";

const clientMock = mockClient(BedrockRuntimeClient);

afterEach(() => {
  clientMock.reset();
});

const context = { method: "streamText", modelId: MODEL_ID, operation: "ConverseStream" } as const;

const collectEvents = (
  events: ReadonlyArray<ConverseStreamOutput>,
  options: LanguageModel.ProviderOptions = providerOptions({ tools: [GetWeather] }),
) =>
  makeStreamResponse({
    context,
    events: (async function*() {
      yield* events;
    })(),
    options,
    requestId: "req-stream",
    toolCodecs: new Map(),
  }).pipe(Stream.runCollect);

const WeatherToolkit = Toolkit.make(GetWeather);

const WeatherHandlers = WeatherToolkit.toLayer({
  GetWeather: ({ city }) => Effect.succeed(`Sunny in ${city}`),
});

const makeToolStreamEvents = (name: string): Array<ConverseStreamOutput> => [
  { messageStart: { role: "assistant" } },
  { contentBlockDelta: { contentBlockIndex: 0, delta: { text: "Checking." } } },
  { contentBlockStop: { contentBlockIndex: 0 } },
  { contentBlockStart: { contentBlockIndex: 1, start: { toolUse: { toolUseId: "tool-1", name } } } },
  { contentBlockDelta: { contentBlockIndex: 1, delta: { toolUse: { input: '{"city":' } } } },
  { contentBlockDelta: { contentBlockIndex: 1, delta: { toolUse: { input: '"Paris"}' } } } },
  { contentBlockStop: { contentBlockIndex: 1 } },
  { messageStop: { stopReason: "tool_use" } },
  { metadata: { usage: { inputTokens: 20, outputTokens: 10, totalTokens: 30 }, metrics: { latencyMs: 90 } } },
];

const toolStreamEvents = makeToolStreamEvents("GetWeather");

const reasoningStreamEvents: Array<ConverseStreamOutput> = [
  { messageStart: { role: "assistant" } },
  { contentBlockDelta: { contentBlockIndex: 0, delta: { reasoningContent: { text: "Let me " } } } },
  { contentBlockDelta: { contentBlockIndex: 0, delta: { reasoningContent: { text: "think." } } } },
  { contentBlockDelta: { contentBlockIndex: 0, delta: { reasoningContent: { signature: "sig-1" } } } },
  { contentBlockStop: { contentBlockIndex: 0 } },
  {
    contentBlockDelta: {
      contentBlockIndex: 1,
      delta: { reasoningContent: { redactedContent: new Uint8Array([1, 2, 3]) } },
    },
  },
  { contentBlockStop: { contentBlockIndex: 1 } },
  { contentBlockDelta: { contentBlockIndex: 2, delta: { text: "42" } } },
  { contentBlockStop: { contentBlockIndex: 2 } },
  { messageStop: { stopReason: "end_turn" } },
  {
    metadata: {
      usage: { inputTokens: 5, outputTokens: 50, totalTokens: 1055, cacheReadInputTokens: 1000 },
      metrics: { latencyMs: 300 },
    },
  },
];

const sendOptions = (call = 0) =>
  (clientMock.send.getCall(call).args as Array<unknown>)[1] as { abortSignal?: AbortSignal } | undefined;

describe("makeStreamResponse", () => {
  it.effect("converts a text-only response", () =>
    Effect.gen(function*() {
      expect(yield* collectEvents(textStreamEvents(["Hel", "lo"]))).toMatchSnapshot();
    }));

  it.effect("converts a response with text and a tool call", () =>
    Effect.gen(function*() {
      expect(yield* collectEvents(toolStreamEvents)).toMatchSnapshot();
    }));

  it.effect("converts a response with signed and redacted reasoning", () =>
    Effect.gen(function*() {
      expect(yield* collectEvents(reasoningStreamEvents)).toMatchSnapshot();
    }));

  it.effect("still finishes when the metadata event never arrives", () =>
    Effect.gen(function*() {
      const parts = yield* collectEvents(textStreamEvents(["Hi"]).slice(0, -1));

      expect(parts.at(-1)).toMatchObject({
        type: "finish",
        reason: "stop",
        usage: { inputTokens: { total: undefined }, outputTokens: { total: undefined } },
      });
    }));

  it.effect("fails when tool parameters are not valid JSON", () =>
    Effect.gen(function*() {
      const events = toolStreamEvents.filter((event) => event.contentBlockDelta?.delta?.toolUse?.input !== '"Paris"}');

      const error = yield* Effect.flip(collectEvents(events));

      expect(error.reason._tag).toBe("ToolParameterValidationError");
    }));

  it.effect("ends with an error part and an error finish on exception events inside the stream", () =>
    Effect.gen(function*() {
      const parts = yield* collectEvents([
        { messageStart: { role: "assistant" } },
        { contentBlockDelta: { contentBlockIndex: 0, delta: { text: "Hel" } } },
        { throttlingException: { name: "ThrottlingException", message: "Slow down" } as any },
        { contentBlockDelta: { contentBlockIndex: 0, delta: { text: "lo" } } },
      ]);

      expect(parts.filter((part) => part.type === "text-delta").map((part) => part.delta)).toEqual(["Hel"]);
      expect(parts.slice(-2)).toMatchObject([
        {
          type: "error",
          error: { type: "ThrottlingException", message: "Slow down" },
          metadata: { bedrock: { requestId: "req-stream" } },
        },
        { type: "finish", reason: "error" },
      ]);
    }));

  it.effect("does not finish twice when the exception follows the metadata event", () =>
    Effect.gen(function*() {
      const parts = yield* collectEvents([
        ...textStreamEvents(["Hi"]),
        { modelStreamErrorException: { name: "ModelStreamErrorException", message: "Broken" } as any },
      ]);

      expect(parts.filter((part) => part.type === "finish")).toMatchObject([{ reason: "stop" }]);
      expect(parts.at(-1)).toMatchObject({ type: "error", error: { type: "ModelStreamErrorException" } });
    }));

  it.effect("fails with ToolNotFoundError when the model calls a tool the request doesn't provide", () =>
    Effect.gen(function*() {
      const error = yield* Effect.flip(collectEvents(toolStreamEvents, providerOptions()));

      expect(error.reason).toMatchObject({ _tag: "ToolNotFoundError", toolName: "GetWeather", availableTools: [] });
      expect(error.method).toBe("streamText");
    }));
});

describe("streamText", () => {
  it.effect("streams text deltas and finishes with usage", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () => streamOutput(textStreamEvents(["Hel", "lo"])));

      const parts = yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(Stream.runCollect, provideModel());

      expect(parts.filter((part) => part.type === "text-delta").map((part) => part.delta).join("")).toBe("Hello");
      expect(parts.find((part) => part.type === "response-metadata")).toMatchObject({
        id: "req-stream",
        modelId: MODEL_ID,
      });
      expect(parts.at(-1)).toMatchObject({
        type: "finish",
        reason: "stop",
        usage: { inputTokens: { uncached: 12, total: 12 }, outputTokens: { total: 3 } },
      });
    }));

  it.effect("keeps stream-only guardrail settings in the request", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () => streamOutput(textStreamEvents(["Hi"])));

      yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(
        Stream.runDrain,
        provideModel({ guardrailConfig: { guardrailIdentifier: "gr-1", streamProcessingMode: "async" } }),
      );

      const input: ConverseStreamCommandInput = clientMock.commandCalls(ConverseStreamCommand)[0].args[0].input;
      expect(input.guardrailConfig).toEqual({ guardrailIdentifier: "gr-1", streamProcessingMode: "async" });
    }));

  it.effect("ends with an error part when the SDK throws a Bedrock exception while reading the stream", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () =>
        streamOutput(textStreamEvents(["Hel"]).slice(0, 2), {
          failWith: new ModelStreamErrorException({ message: "Stream broke", $metadata: {} }),
        })
      );

      const parts = yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(Stream.runCollect, provideModel());

      expect(parts.slice(-2)).toMatchObject([
        { type: "error", error: { type: "ModelStreamErrorException", message: "Stream broke" } },
        { type: "finish", reason: "error" },
      ]);
    }));

  it.effect("fails on transport errors while reading the stream", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () =>
        streamOutput(textStreamEvents(["Hel"]).slice(0, 2), {
          failWith: Object.assign(new Error("socket hang up"), { code: "ECONNRESET" }),
        })
      );

      const error = yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(
        Stream.runDrain,
        Effect.flip,
        provideModel(),
      );

      expect(error._tag).toBe("AiError");
      expect(error.reason).toMatchObject({ _tag: "NetworkError", description: "socket hang up" });
    }));

  it.effect("fails with a non-retryable InvalidResponseError when the response has no event stream", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).resolves({ $metadata: { requestId: "req-stream" } });

      const error = yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(
        Stream.runDrain,
        Effect.flip,
        provideModel(),
      );

      expect(error.method).toBe("streamText");
      expect(error.reason).toMatchObject({
        _tag: "InvalidResponseError",
        description: "Amazon Bedrock returned no event stream",
      });
      expect(error.isRetryable).toBe(false);
    }));

  it.effect("fails with ToolNotFoundError for a call to a tool outside the toolkit", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () => streamOutput(makeToolStreamEvents("GetTime")));

      const error = yield* LanguageModel.streamText({ prompt: "Weather?", toolkit: WeatherToolkit }).pipe(
        Stream.runDrain,
        Effect.flip,
        Effect.provide(WeatherHandlers),
        provideModel(),
      );

      expect(error.reason).toMatchObject({ _tag: "ToolNotFoundError", toolName: "GetTime" });
    }));

  it.effect("returns calls to undeclared tools when tool call validation is deferred", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () => streamOutput(toolStreamEvents));

      const parts = yield* LanguageModel.streamText({
        prompt: "Weather?",
        disableToolCallResolution: true,
        toolCallValidation: "deferred",
      }).pipe(Stream.runCollect, provideModel());

      expect(parts.filter((part) => part.type === "tool-call")).toMatchObject([
        { id: "tool-1", name: "GetWeather", params: { city: "Paris" } },
      ]);
    }));

  it.effect("aborts the request when the stream is closed early", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () =>
        streamOutput(textStreamEvents(["Hel", "lo"]).slice(0, 2), { hang: true })
      );

      const parts = yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(
        Stream.filter((part) => part.type === "text-delta"),
        Stream.take(1),
        Stream.runCollect,
        provideModel(),
      );

      expect(parts).toHaveLength(1);
      expect(sendOptions()?.abortSignal?.aborted).toBe(true);
    }));

  it.effect("aborts the request when the consuming fiber is interrupted", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(async () =>
        streamOutput(textStreamEvents(["Hel", "lo"]).slice(0, 2), { hang: true })
      );
      const started = yield* Deferred.make<void>();

      const fiber = yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(
        Stream.runForEach((part) => part.type === "text-delta" ? Deferred.succeed(started, undefined) : Effect.void),
        provideModel(),
        Effect.forkChild,
      );
      yield* Deferred.await(started);
      yield* Fiber.interrupt(fiber);

      expect(sendOptions()?.abortSignal?.aborted).toBe(true);
    }));

  it.effect("aborts the request when interrupted before the response arrives", () =>
    Effect.gen(function*() {
      clientMock.on(ConverseStreamCommand).callsFake(() => new Promise(() => {}));

      const fiber = yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(
        Stream.runDrain,
        provideModel(),
        Effect.forkChild,
      );
      yield* Effect.promise(() => new Promise((resolve) => setTimeout(resolve, 10)));
      yield* Fiber.interrupt(fiber);

      expect(sendOptions()?.abortSignal?.aborted).toBe(true);
    }));

  it.effect("leaves a fully consumed request alone so its connection can be reused", () =>
    Effect.gen(function*() {
      let closed = false;
      clientMock.on(ConverseStreamCommand).callsFake(async () =>
        streamOutput(textStreamEvents(["Hi"]), {
          onClose: () => {
            closed = true;
          },
        })
      );

      yield* LanguageModel.streamText({ prompt: "Hi" }).pipe(Stream.runDrain, provideModel());

      expect(closed).toBe(true);
      expect(sendOptions()?.abortSignal?.aborted).toBe(false);
    }));
});
