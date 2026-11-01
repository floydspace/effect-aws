/// <reference types="node" />
/**
 * Runs the provider against real Amazon Bedrock models with the default AWS
 * credential chain. Skipped unless `BEDROCK_LIVE_TEST=1`.
 *
 * - `AWS_REGION` picks the region (defaults to `us-east-1`). Cross-region
 *   inference profile IDs use the matching `us`, `eu` or `apac` prefix.
 * - `BEDROCK_LIVE_MODELS` limits the run to a comma-separated list of the
 *   model names below, for example `claude,nova-lite`.
 * - `BEDROCK_LIVE_RECORD_DIR` writes every raw Converse response to that
 *   directory, for use as test fixtures.
 */
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";
import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock";
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Prompt from "effect/ai/Prompt";
import type * as Response from "effect/ai/Response";
import * as Tool from "effect/ai/Tool";
import * as Toolkit from "effect/ai/Toolkit";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { blueCirclePng } from "./fixtures/images.js";

const isLive = process.env.BEDROCK_LIVE_TEST === "1";
const region = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "us-east-1";
const geo = region.startsWith("eu-") ? "eu" : region.startsWith("ap-") ? "apac" : "us";
const selected = process.env.BEDROCK_LIVE_MODELS?.split(",").map((name) => name.trim());
const recordDir = process.env.BEDROCK_LIVE_RECORD_DIR;

// What each model supports on Bedrock, as observed live: Bedrock rejects
// requests that use anything else, or (for `lengthStopReason`) reports
// `end_turn` instead of `max_tokens` when the token limit cuts a reply short.
type Capability =
  | "tools"
  | "streamingTools"
  | "toolChoice"
  | "strictTools"
  | "images"
  | "documents"
  | "promptCache"
  | "nativeStructuredOutput"
  | "stopSequences"
  | "lengthStopReason";

interface LiveModel {
  readonly name: string;
  readonly id: string;
  readonly capabilities: ReadonlyArray<Capability>;
  readonly reasoning?: {
    readonly config: AmazonBedrockLanguageModel.Config.Service;
    /** Whether Bedrock returns a signature (or redacted content) with the reasoning. */
    readonly signed: boolean;
  };
}

const models: ReadonlyArray<LiveModel> = [
  {
    name: "claude",
    id: `${geo}.anthropic.claude-haiku-4-5-20251001-v1:0`,
    capabilities: [
      "tools",
      "streamingTools",
      "toolChoice",
      "strictTools",
      "images",
      "documents",
      "promptCache",
      "nativeStructuredOutput",
      "stopSequences",
      "lengthStopReason",
    ],
    reasoning: {
      config: {
        inferenceConfig: { maxTokens: 2048 },
        additionalModelRequestFields: { thinking: { type: "enabled", budget_tokens: 1024 } },
      },
      signed: true,
    },
  },
  {
    name: "nova-lite",
    id: `${geo}.amazon.nova-lite-v1:0`,
    capabilities: [
      "tools",
      "streamingTools",
      "toolChoice",
      "images",
      "documents",
      "promptCache",
      "stopSequences",
      "lengthStopReason",
    ],
  },
  {
    name: "nova-2-lite",
    id: `${geo}.amazon.nova-2-lite-v1:0`,
    capabilities: ["tools", "streamingTools", "toolChoice", "images", "documents", "promptCache", "lengthStopReason"],
    reasoning: {
      config: { additionalModelRequestFields: { reasoningConfig: { type: "enabled", maxReasoningEffort: "low" } } },
      signed: false,
    },
  },
  {
    // Bedrock accepts tools and `outputConfig` for Gemma, but the model doesn't
    // reliably call tools or return valid JSON, so neither is tested.
    name: "gemma",
    id: "google.gemma-3-12b-it",
    capabilities: ["images", "lengthStopReason"],
  },
  {
    name: "pixtral",
    id: `${geo}.mistral.pixtral-large-2502-v1:0`,
    capabilities: ["tools", "images", "documents", "stopSequences"],
  },
  {
    // Bedrock accepts a forced tool choice and `outputConfig` for gpt-oss-20b
    // but doesn't enforce them: the model sometimes answers in plain text or
    // returns malformed JSON instead.
    name: "gpt-oss",
    id: "openai.gpt-oss-20b-1:0",
    capabilities: ["tools", "streamingTools", "strictTools", "lengthStopReason"],
    reasoning: { config: {}, signed: false },
  },
  {
    name: "qwen",
    id: "qwen.qwen3-32b-v1:0",
    capabilities: [
      "tools",
      "streamingTools",
      "toolChoice",
      "strictTools",
      "nativeStructuredOutput",
      "lengthStopReason",
    ],
  },
];

const clientLayer = BedrockRuntime.baseLayer((config) => {
  const client = new BedrockRuntimeClient({ ...config, region });
  if (recordDir !== undefined) {
    mkdirSync(recordDir, { recursive: true });
    client.middlewareStack.add(
      (next, context) => async (args) => {
        const result = await next(args);
        if (context.commandName === "ConverseCommand") {
          const name = (expect.getState().currentTestName ?? "converse").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
          writeFileSync(path.join(recordDir, `${name}.json`), JSON.stringify(result.output, null, 2));
        }
        return result;
      },
      { step: "initialize", name: "recordConverseOutput" },
    );
  }
  return client;
});

const run = <A, E>(
  model: LiveModel,
  effect: Effect.Effect<A, E, LanguageModel.LanguageModel>,
  config: AmazonBedrockLanguageModel.Config.Service = {},
) =>
  effect.pipe(
    Effect.provide(Layer.provideMerge(
      AmazonBedrockLanguageModel.model(model.id, { inferenceConfig: { maxTokens: 1024 }, ...config }),
      clientLayer,
    )),
    Effect.runPromise,
  );

const textOf = (parts: ReadonlyArray<Response.AnyPart>): string =>
  parts.map((part) => part.type === "text-delta" ? part.delta : part.type === "text" ? part.text : "").join("");

const LookupOrder = Tool.make("LookupOrder", {
  description: "Looks up the shipping status of an order",
  parameters: Schema.Struct({ orderId: Schema.String }),
  success: Schema.Struct({ status: Schema.String, carrier: Schema.String }),
});

const OrdersToolkit = Toolkit.make(LookupOrder);

const OrdersHandlers = OrdersToolkit.toLayer({
  LookupOrder: () => Effect.succeed({ status: "shipped", carrier: "OWL-EXPRESS" }),
});

const Add = Tool.make("Add", {
  description: "Adds two numbers",
  parameters: Schema.Struct({ a: Schema.Number, b: Schema.Number }),
  success: Schema.Number,
});

const MathToolkit = Toolkit.make(Add);

const MathHandlers = MathToolkit.toLayer({ Add: ({ a, b }) => Effect.succeed(a + b) });

// `Schema.Number` would allow "NaN" and "Infinity" strings, which Claude on
// Bedrock fails on with an internal error in strict mode.
const SearchFlights = Tool.make("SearchFlights", {
  description: "Searches for flights between two airports",
  parameters: Schema.Struct({ from: Schema.String, to: Schema.String, maxStops: Schema.optional(Schema.Int) }),
  success: Schema.Struct({ flights: Schema.Number }),
}).annotate(Tool.Strict, true);

const FlightsToolkit = Toolkit.make(SearchFlights);

const FlightsHandlers = FlightsToolkit.toLayer({ SearchFlights: () => Effect.succeed({ flights: 3 }) });

const Person = Schema.Struct({ name: Schema.String, birthYear: Schema.Number }).annotate({ identifier: "Person" });

const BLUE_CIRCLE_PNG = blueCirclePng().toString("base64");

const TIMEOUT = 60_000;

describe.skipIf(!isLive)("live Amazon Bedrock", () => {
  describe.each(models.filter((model) => selected === undefined || selected.includes(model.name)))("$name", (model) => {
    const supports = (capability: Capability) => model.capabilities.includes(capability);

    it("follows the system prompt", async () => {
      const response = await run(
        model,
        LanguageModel.generateText({
          prompt: [
            { role: "system", content: "The user's favourite fruit is mango." },
            { role: "user", content: "What is my favourite fruit? Reply with one word." },
          ],
        }),
      );

      expect(response.text).toMatch(/mango/i);
      expect(response.finishReason).toBe("stop");
      expect(response.usage.inputTokens.total).toBeGreaterThan(0);
      expect(response.usage.outputTokens.total).toBeGreaterThan(0);
    }, TIMEOUT);

    it("streams text", async () => {
      const parts = await run(
        model,
        LanguageModel.streamText({ prompt: "Count from 1 to 5, separated by spaces, with no other text." }).pipe(
          Stream.runCollect,
        ),
      );

      expect(textOf(parts)).toMatch(/1.*2.*3.*4.*5/s);
      expect(parts.at(-1)).toMatchObject({ type: "finish", reason: "stop" });
    }, TIMEOUT);

    it.runIf(supports("lengthStopReason"))("reports the length finish reason when it runs out of tokens", async () => {
      const response = await run(
        model,
        LanguageModel.generateText({ prompt: "Write a 500 word essay about the ocean." }).pipe(
          AmazonBedrockLanguageModel.withConfigOverride({ inferenceConfig: { maxTokens: 10 } }),
        ),
      );

      expect(response.finishReason).toBe("length");
    }, TIMEOUT);

    it.runIf(supports("stopSequences"))("stops at a stop sequence", async () => {
      const response = await run(
        model,
        LanguageModel.generateText({ prompt: "Count from 1 to 10, separated by spaces, with no other text." }).pipe(
          AmazonBedrockLanguageModel.withConfigOverride({ inferenceConfig: { stopSequences: ["6"] } }),
        ),
      );

      expect(response.text).toMatch(/5/);
      expect(response.text).not.toMatch(/7/);
      expect(response.finishReason).toBe("stop");
      // Some models report `end_turn` rather than `stop_sequence`.
      expect(["stop_sequence", "end_turn"]).toContain(
        response.content.find((part) => part.type === "finish")?.metadata.bedrock?.stopReason,
      );
    }, TIMEOUT);

    it.runIf(supports("tools"))("answers with the result of a tool call", async () => {
      let prompt = Prompt.make(
        "Use the LookupOrder tool to find order A-1001, then reply with the name of its carrier only.",
      );
      const calls: Array<unknown> = [];

      for (let turn = 0; turn < 3; turn++) {
        const response = await run(
          model,
          LanguageModel.generateText({ prompt, toolkit: OrdersToolkit }).pipe(Effect.provide(OrdersHandlers)),
        );
        for (const call of response.toolCalls) {
          calls.push(call.params);
        }
        prompt = Prompt.concat(prompt, Prompt.fromResponseParts(response.content));
        if (response.finishReason !== "tool-calls") {
          expect(response.text).toMatch(/owl[- ]?express/i);
          break;
        }
      }

      expect(calls).toContainEqual({ orderId: "A-1001" });
    }, TIMEOUT);

    it.runIf(supports("streamingTools"))("streams a tool call", async () => {
      const parts = await run(
        model,
        LanguageModel.streamText({
          prompt: "Look up order A-1001 with the LookupOrder tool.",
          toolkit: OrdersToolkit,
          toolChoice: supports("toolChoice") ? "required" : "auto",
        }).pipe(Stream.runCollect, Effect.provide(OrdersHandlers)),
      );

      expect(parts).toContainEqual(expect.objectContaining({ type: "tool-params-start", name: "LookupOrder" }));
      expect(parts).toContainEqual(expect.objectContaining({ type: "tool-params-delta" }));
      expect(parts).toContainEqual(
        expect.objectContaining({ type: "tool-call", name: "LookupOrder", params: { orderId: "A-1001" } }),
      );
      expect(parts).toContainEqual(
        expect.objectContaining({ type: "tool-result", result: { status: "shipped", carrier: "OWL-EXPRESS" } }),
      );
      expect(parts.at(-1)).toMatchObject({ type: "finish", reason: "tool-calls" });
    }, TIMEOUT);

    it.runIf(supports("toolChoice"))("calls the tool it is told to call", async () => {
      const response = await run(
        model,
        LanguageModel.generateText({ prompt: "What is 2 plus 3?", toolkit: MathToolkit, toolChoice: { tool: "Add" } })
          .pipe(Effect.provide(MathHandlers)),
      );

      expect(response.toolCalls).toMatchObject([{ name: "Add", params: { a: 2, b: 3 } }]);
      expect(response.toolResults).toMatchObject([{ name: "Add", result: 5 }]);
    }, TIMEOUT);

    it.runIf(supports("strictTools"))("calls a strict tool with an optional parameter", async () => {
      const response = await run(
        model,
        LanguageModel.generateText({
          prompt: "Use the SearchFlights tool to find flights from LHR to JFK, with any number of stops.",
          toolkit: FlightsToolkit,
          toolChoice: supports("toolChoice") ? { tool: "SearchFlights" } : "auto",
        }).pipe(Effect.provide(FlightsHandlers)),
      );

      expect(response.toolCalls).toMatchObject([{ name: "SearchFlights", params: { from: "LHR", to: "JFK" } }]);
      expect(response.toolResults).toMatchObject([{ name: "SearchFlights", result: { flights: 3 } }]);
    }, TIMEOUT);

    it.runIf(supports("toolChoice"))("generates an object with a forced tool call", async () => {
      const response = await run(
        model,
        LanguageModel.generateObject({ prompt: "Ada Lovelace was born in 1815. Extract the person.", schema: Person }),
      );

      expect(response.value).toEqual({ name: "Ada Lovelace", birthYear: 1815 });
    }, TIMEOUT);

    it.runIf(supports("nativeStructuredOutput"))("generates an object with native structured output", async () => {
      const response = await run(
        model,
        LanguageModel.generateObject({ prompt: "Ada Lovelace was born in 1815. Extract the person.", schema: Person }),
        { structuredOutput: "native" },
      );

      expect(response.value).toEqual({ name: "Ada Lovelace", birthYear: 1815 });
    }, TIMEOUT);

    it.runIf(supports("images"))("reads an image", async () => {
      const response = await run(
        model,
        LanguageModel.generateText({
          prompt: [{
            role: "user",
            content: [
              { type: "file", mediaType: "image/png", data: BLUE_CIRCLE_PNG },
              {
                type: "text",
                text: "Describe the shape drawn in this image and its colour in two words, for example 'red square'.",
              },
            ],
          }],
        }),
      );

      expect(response.text).toMatch(/blue/i);
      expect(response.text).toMatch(/circle/i);
    }, TIMEOUT);

    it.runIf(supports("documents"))("reads a document", async () => {
      const response = await run(
        model,
        LanguageModel.generateText({
          prompt: [{
            role: "user",
            content: [
              {
                type: "file",
                mediaType: "text/plain",
                fileName: "memo.txt",
                data: new TextEncoder().encode("Internal memo. The project code name is PELICAN-42."),
              },
              { type: "text", text: "What is the project code name in the memo? Reply with the code name only." },
            ],
          }],
        }),
      );

      expect(response.text).toMatch(/pelican-42/i);
    }, TIMEOUT);

    it.runIf(supports("promptCache"))("reports prompt cache usage consistently with Bedrock's own totals", async () => {
      // Long enough to pass the minimum cacheable prompt size of every model above.
      const instructions = Array.from(
        { length: 600 },
        (_, i) => `Rule ${i + 1}: answer politely, briefly and in plain English.`,
      ).join("\n");
      const generate = LanguageModel.generateText({
        prompt: [
          { role: "system", content: instructions, options: { bedrock: { cachePoint: { type: "default" } } } },
          { role: "user", content: "Reply with the single word: ok" },
        ],
      });

      const [first, second] = await run(model, Effect.all([generate, generate]));

      for (const response of [first, second]) {
        const { inputTokens, outputTokens } = response.usage;
        const finish = response.content.find((part) => part.type === "finish");
        expect(inputTokens.total).toBe(
          (inputTokens.uncached ?? 0) + (inputTokens.cacheRead ?? 0) + (inputTokens.cacheWrite ?? 0),
        );
        expect(finish?.metadata.bedrock?.usage).toMatchObject({
          totalTokens: (inputTokens.total ?? 0) + (outputTokens.total ?? 0),
        });
      }
      expect((first.usage.inputTokens.cacheRead ?? 0) + (first.usage.inputTokens.cacheWrite ?? 0)).toBeGreaterThan(
        0,
      );
      expect(second.usage.inputTokens.cacheRead).toBeGreaterThan(0);
    }, TIMEOUT);

    if (model.reasoning !== undefined) {
      const { config, signed } = model.reasoning;
      const question = "What is 17 multiplied by 23? Answer with just the number.";
      const followUp = "Add 9 to that number. Answer with just the number.";
      const isVerifiable = (part: Response.AnyPart) =>
        (part.type === "reasoning" || part.type === "reasoning-delta") &&
        (part.metadata.bedrock?.signature != null || part.metadata.bedrock?.redactedContent != null);

      it("returns reasoning and continues the conversation with it", async () => {
        const first = await run(model, LanguageModel.generateText({ prompt: question }), config);

        expect(first.reasoning.length).toBeGreaterThan(0);
        expect(first.content.some(isVerifiable)).toBe(signed);
        expect(first.text).toMatch(/391/);

        const second = await run(
          model,
          LanguageModel.generateText({
            prompt: Prompt.concat(
              Prompt.concat(Prompt.make(question), Prompt.fromResponseParts(first.content)),
              followUp,
            ),
          }),
          config,
        );

        expect(second.text).toMatch(/400/);
      }, TIMEOUT * 2);

      it("streams reasoning and continues the conversation with it", async () => {
        const parts = await run(model, LanguageModel.streamText({ prompt: question }).pipe(Stream.runCollect), config);

        expect(parts.some((part) => part.type === "reasoning-delta")).toBe(true);
        expect(parts.some(isVerifiable)).toBe(signed);
        expect(textOf(parts)).toMatch(/391/);

        const second = await run(
          model,
          LanguageModel.generateText({
            prompt: Prompt.concat(Prompt.concat(Prompt.make(question), Prompt.fromResponseParts(parts)), followUp),
          }),
          config,
        );

        expect(second.text).toMatch(/400/);
      }, TIMEOUT * 2);

      it.runIf(signed && supports("promptCache"))(
        "continues the conversation when a cached assistant turn ends with reasoning",
        async () => {
          const first = await run(model, LanguageModel.generateText({ prompt: question }), config);
          const reasoning = first.content.filter((part) => part.type === "reasoning");
          expect(reasoning.length).toBeGreaterThan(0);

          // Bedrock rejects a cache point straight after a reasoning block,
          // which is where this turn's cache point would otherwise go.
          const second = await run(
            model,
            LanguageModel.generateText({
              prompt: [
                { role: "user", content: question },
                {
                  role: "assistant",
                  content: reasoning.map((part) => ({
                    type: "reasoning" as const,
                    text: part.text,
                    options: part.metadata,
                  })),
                  options: { bedrock: { cachePoint: { type: "default" } } },
                },
                { role: "user", content: followUp },
              ],
            }),
            config,
          );

          expect(second.text).toMatch(/400/);
        },
        TIMEOUT * 2,
      );
    }
  });
});
