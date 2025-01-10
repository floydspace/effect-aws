/**
 * @since 1.0.0
 */
import { BedrockClient } from "@aws-sdk/client-bedrock";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultBedrockClientConfigLayer,
  BedrockClientInstanceConfig,
} from "./BedrockClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockClientInstance extends Context.Tag(
  "@effect-aws/client-bedrock/BedrockClientInstance",
)<BedrockClientInstance, BedrockClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeBedrockClientInstance = Effect.flatMap(
  BedrockClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new BedrockClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const BedrockClientInstanceLayer = Layer.scoped(
  BedrockClientInstance,
  makeBedrockClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultBedrockClientInstanceLayer =
  BedrockClientInstanceLayer.pipe(
    Layer.provide(DefaultBedrockClientConfigLayer),
  );
