import { AmazonBedrockLanguageModel } from "@effect-aws/ai-amazon-bedrock";
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";
import * as LanguageModel from "effect/ai/LanguageModel";
import * as Prompt from "effect/ai/Prompt";
import * as Tool from "effect/ai/Tool";
import * as Toolkit from "effect/ai/Toolkit";
import * as Console from "effect/Console";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";

const GetWeather = Tool.make("GetWeather", {
  description: "Get the current weather for a city",
  parameters: Schema.Struct({ city: Schema.String }),
  success: Schema.Struct({ temperatureCelsius: Schema.Number, conditions: Schema.String }),
});

const WeatherToolkit = Toolkit.make(GetWeather);

const WeatherHandlers = WeatherToolkit.toLayer({
  GetWeather: ({ city }) => Effect.succeed({ temperatureCelsius: city === "London" ? 14 : 24, conditions: "cloudy" }),
});

const Claude = AmazonBedrockLanguageModel.model("eu.anthropic.claude-sonnet-4-5-20250929-v1:0", {
  inferenceConfig: { maxTokens: 1024 },
});

const program = Effect.gen(function*() {
  let prompt = Prompt.make("Is it warmer in London or in Lisbon right now?");

  // Keep calling the model until it stops asking for tools
  for (let turn = 0; turn < 5; turn++) {
    const response = yield* LanguageModel.generateText({ prompt, toolkit: WeatherToolkit });
    prompt = Prompt.concat(prompt, Prompt.fromResponseParts(response.content));

    for (const call of response.toolCalls) {
      yield* Console.log(`called ${call.name}(${JSON.stringify(call.params)})`);
    }
    if (response.finishReason !== "tool-calls") {
      yield* Console.log(response.text);
      return;
    }
  }
});

program.pipe(
  Effect.provide(Layer.mergeAll(
    WeatherHandlers,
    Layer.provideMerge(Claude, BedrockRuntime.layer({ region: "eu-central-1" })),
  )),
  Effect.runPromise,
);
