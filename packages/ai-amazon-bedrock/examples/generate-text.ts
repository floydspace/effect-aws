import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock";
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Console from "effect/Console";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

const Claude = AmazonBedrockLanguageModel.model("eu.anthropic.claude-sonnet-4-5-20250929-v1:0", {
  inferenceConfig: { maxTokens: 1024 },
});

const program = Effect.gen(function*() {
  const response = yield* LanguageModel.generateText({
    prompt: [
      { role: "system", content: "You are a concise assistant." },
      { role: "user", content: "Explain what Amazon Bedrock is in one sentence." },
    ],
  });

  yield* Console.log(response.text);
  yield* Console.log(`finish reason: ${response.finishReason}`);
  yield* Console.log(`tokens: ${response.usage.inputTokens.total} in, ${response.usage.outputTokens.total} out`);
});

program.pipe(
  Effect.provide(Layer.provideMerge(Claude, BedrockRuntime.layer({ region: "eu-central-1" }))),
  Effect.runPromise,
);
