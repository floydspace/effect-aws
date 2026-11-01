import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock";
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Console from "effect/Console";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";

const Person = Schema.Struct({
  name: Schema.String,
  birthYear: Schema.Number,
  knownFor: Schema.Array(Schema.String),
}).annotate({ identifier: "Person", description: "A historical figure" });

const Claude = AmazonBedrockLanguageModel.model("eu.anthropic.claude-sonnet-4-5-20250929-v1:0", {
  inferenceConfig: { maxTokens: 1024 },
});

const prompt = "Ada Lovelace (born 1815) wrote the first published algorithm for Babbage's Analytical Engine.";

const program = Effect.gen(function*() {
  // Default "tool" mode: works with any model that supports forced tool use
  const viaTool = yield* LanguageModel.generateObject({ prompt, schema: Person });
  yield* Console.log("tool mode:", viaTool.value);

  // "native" mode: uses Converse structured output on models that support it
  const viaNative = yield* LanguageModel.generateObject({ prompt, schema: Person }).pipe(
    AmazonBedrockLanguageModel.withConfigOverride({ structuredOutput: "native" }),
  );
  yield* Console.log("native mode:", viaNative.value);
});

program.pipe(
  Effect.provide(Layer.provideMerge(Claude, BedrockRuntime.layer({ region: "eu-central-1" }))),
  Effect.runPromise,
);
