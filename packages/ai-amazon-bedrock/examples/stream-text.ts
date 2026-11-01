import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock";
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Stream from "effect/Stream";

const Claude = AmazonBedrockLanguageModel.model("eu.anthropic.claude-sonnet-4-5-20250929-v1:0", {
  inferenceConfig: { maxTokens: 1024 },
});

const program = LanguageModel.streamText({ prompt: "Write a short poem about the sea." }).pipe(
  Stream.runForEach((part) => {
    switch (part.type) {
      case "text-delta":
        return Effect.sync(() => process.stdout.write(part.delta));
      case "finish":
        return Effect.sync(() => process.stdout.write(`\n\n[${part.reason}]\n`));
      default:
        return Effect.void;
    }
  }),
);

program.pipe(
  Effect.provide(Layer.provideMerge(Claude, BedrockRuntime.layer({ region: "eu-central-1" }))),
  Effect.runPromise,
);
