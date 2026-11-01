import type {
  ContentBlock,
  ConverseCommandOutput,
  ConverseStreamCommandOutput,
  ConverseStreamOutput,
} from "@aws-sdk/client-bedrock-runtime";
import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock";
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";
import type * as LanguageModel from "effect/ai/LanguageModel";
import type * as AiModel from "effect/ai/Model";
import * as Prompt from "effect/ai/Prompt";
import * as Tool from "effect/ai/Tool";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";

export const MODEL_ID = "eu.anthropic.claude-sonnet-4-5-20250929-v1:0";

export const GetWeather = Tool.make("GetWeather", {
  description: "Get the current weather",
  parameters: Schema.Struct({ city: Schema.String }),
  success: Schema.String,
});

export const providerOptions = (
  overrides: Partial<LanguageModel.ProviderOptions> = {},
): LanguageModel.ProviderOptions => ({
  prompt: Prompt.empty,
  tools: [],
  toolChoice: "auto",
  responseFormat: { type: "text" },
  span: undefined as any,
  previousResponseId: undefined,
  incrementalPrompt: undefined,
  ...overrides,
});

export const provideModel = (config?: AmazonBedrockLanguageModel.Config.Service, modelId = MODEL_ID) =>
<A, E, R>(
  effect: Effect.Effect<A, E, R>,
): Effect.Effect<A, E, Exclude<R, LanguageModel.LanguageModel | AiModel.ProviderName | AiModel.ModelName>> =>
  effect.pipe(
    Effect.provide(Layer.provideMerge(
      AmazonBedrockLanguageModel.model(modelId, config),
      BedrockRuntime.defaultLayer,
    )),
  ) as any;

export const converseOutput = (
  { content = [{ text: "Hello!" }], ...overrides }: Partial<ConverseCommandOutput> & {
    readonly content?: Array<ContentBlock>;
  } = {},
): ConverseCommandOutput => ({
  $metadata: { requestId: "req-123" },
  output: { message: { role: "assistant", content } },
  stopReason: "end_turn",
  usage: { inputTokens: 10, outputTokens: 5, totalTokens: 15 },
  metrics: { latencyMs: 120 },
  ...overrides,
});

export const streamOutput = (
  events: ReadonlyArray<ConverseStreamOutput>,
  options: { readonly failWith?: unknown; readonly hang?: boolean; readonly onClose?: () => void } = {},
): ConverseStreamCommandOutput => ({
  $metadata: { requestId: "req-stream" },
  stream: (async function*() {
    try {
      for (const event of events) {
        yield event;
      }
      if (options.failWith !== undefined) {
        throw options.failWith;
      }
      if (options.hang === true) {
        await new Promise(() => {});
      }
    } finally {
      options.onClose?.();
    }
  })(),
});

export const textStreamEvents = (text: ReadonlyArray<string>): Array<ConverseStreamOutput> => [
  { messageStart: { role: "assistant" } },
  ...text.map((delta): ConverseStreamOutput => ({
    contentBlockDelta: { contentBlockIndex: 0, delta: { text: delta } },
  })),
  { contentBlockStop: { contentBlockIndex: 0 } },
  { messageStop: { stopReason: "end_turn" } },
  {
    metadata: {
      usage: { inputTokens: 12, outputTokens: 3, totalTokens: 15 },
      metrics: { latencyMs: 80 },
    },
  },
];
