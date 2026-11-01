import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";
import { mockClient } from "aws-sdk-client-mock";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Prompt from "effect/ai/Prompt";
import * as Tool from "effect/ai/Tool";
import * as Toolkit from "effect/ai/Toolkit";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { afterEach, describe, expect, it } from "vitest";
import {
  cacheReadResponse,
  objectToolResponse,
  redactedReasoningTextResponse,
  strictToolUseResponse,
  textResponse,
  toolUseResponse,
  unsignedReasoningResponse,
} from "./fixtures/converse-responses.js";
import { provideModel } from "./utils.js";

const clientMock = mockClient(BedrockRuntimeClient);

afterEach(() => {
  clientMock.reset();
});

const Add = Tool.make("Add", {
  description: "Adds two numbers",
  parameters: Schema.Struct({ a: Schema.Number, b: Schema.Number }),
  success: Schema.Number,
});

const MathToolkit = Toolkit.make(Add);

describe("recorded Converse responses", () => {
  it("maps a text response", async () => {
    clientMock.on(ConverseCommand).resolves(textResponse);

    const response = await LanguageModel.generateText({ prompt: "Reply with the single word: pong" }).pipe(
      provideModel(),
      Effect.runPromise,
    );

    expect(response.text).toBe("pong");
    expect(response.finishReason).toBe("stop");
    expect(response.usage.inputTokens).toEqual({ uncached: 15, total: 15, cacheRead: 0, cacheWrite: 0 });
    expect(response.usage.outputTokens.total).toBe(5);
    expect(response.content.find((part) => part.type === "response-metadata")).toMatchObject({
      id: "b62325bf-8b42-4d15-bb74-4b99674a3059",
    });
  });

  it("maps a tool use response and resolves the tool", async () => {
    clientMock.on(ConverseCommand).resolves(toolUseResponse);

    const response = await LanguageModel.generateText({ prompt: "Add 2 and 3", toolkit: MathToolkit }).pipe(
      provideModel(),
      Effect.provide(MathToolkit.toLayer({ Add: ({ a, b }) => Effect.succeed(a + b) })),
      Effect.runPromise,
    );

    expect(response.finishReason).toBe("tool-calls");
    expect(response.toolCalls).toMatchObject([
      { id: "tooluse_GrVbDRFU4PwwZVyhirtXCH", name: "Add", params: { a: 2, b: 3 } },
    ]);
    expect(response.toolResults).toMatchObject([{ name: "Add", result: 5 }]);
  });

  it("resolves a strict tool call whose optional parameter Claude sent as null", async () => {
    const SearchFlights = Tool.make("SearchFlights", {
      parameters: Schema.Struct({ from: Schema.String, to: Schema.String, maxStops: Schema.optional(Schema.Int) }),
      success: Schema.Number,
    }).annotate(Tool.Strict, true);
    const FlightsToolkit = Toolkit.make(SearchFlights);
    clientMock.on(ConverseCommand).resolves(strictToolUseResponse);

    const response = await LanguageModel.generateText({ prompt: "Flights from LHR to JFK?", toolkit: FlightsToolkit })
      .pipe(
        provideModel(),
        Effect.provide(FlightsToolkit.toLayer({ SearchFlights: () => Effect.succeed(3) })),
        Effect.runPromise,
      );

    expect(response.toolCalls.map((call) => call.params)).toEqual([{ from: "LHR", to: "JFK" }]);
    expect(response.toolResults).toMatchObject([{ name: "SearchFlights", result: 3 }]);
  });

  it("decodes a structured output tool response", async () => {
    clientMock.on(ConverseCommand).resolves(objectToolResponse);

    const response = await LanguageModel.generateObject({
      prompt: "Ada Lovelace was born in 1815. Extract the person.",
      schema: Schema.Struct({ name: Schema.String, birthYear: Schema.Number }).annotate({ identifier: "Person" }),
    }).pipe(provideModel(), Effect.runPromise);

    expect(response.value).toEqual({ name: "Ada Lovelace", birthYear: 1815 });
    expect(response.finishReason).toBe("stop");
  });

  it.each([
    {
      name: "gpt-oss-20b",
      modelId: "openai.gpt-oss-20b-1:0",
      output: unsignedReasoningResponse,
      reasoning: "We need to calculate 391 + 9 = 400. Ensure to output just the number.",
    },
    {
      name: "Nova 2 Lite",
      modelId: "eu.amazon.nova-2-lite-v1:0",
      output: redactedReasoningTextResponse,
      reasoning: "[REDACTED].",
    },
  ])("maps unsigned reasoning from $name and leaves it out of the next request", async (testCase) => {
    const question = Prompt.make("What is 391 plus 9? Answer with just the number.");
    clientMock.on(ConverseCommand).resolves(testCase.output);

    const response = await LanguageModel.generateText({ prompt: question }).pipe(
      provideModel({}, testCase.modelId),
      Effect.runPromise,
    );

    expect(response.reasoning.map((part) => [part.text, part.metadata.bedrock])).toEqual([
      [testCase.reasoning, undefined],
    ]);
    expect(response.text).toBe("400");

    await LanguageModel.generateText({
      prompt: Prompt.concat(Prompt.concat(question, Prompt.fromResponseParts(response.content)), "Add 1 to that."),
    }).pipe(provideModel({}, testCase.modelId), Effect.runPromise);

    const calls = clientMock.commandCalls(ConverseCommand);
    expect(calls[calls.length - 1].args[0].input.messages?.[1]).toEqual({
      role: "assistant",
      content: [{ text: "400" }],
    });
  });

  it("reports cache reads with totals that match Bedrock's totalTokens", async () => {
    clientMock.on(ConverseCommand).resolves(cacheReadResponse);

    const response = await LanguageModel.generateText({ prompt: "Reply with the single word: ok" }).pipe(
      provideModel(),
      Effect.runPromise,
    );

    const { inputTokens, outputTokens } = response.usage;
    expect(inputTokens).toEqual({ uncached: 13, total: 9013, cacheRead: 9000, cacheWrite: 0 });
    expect((inputTokens.total ?? 0) + (outputTokens.total ?? 0)).toBe(cacheReadResponse.usage?.totalTokens);
  });
});
