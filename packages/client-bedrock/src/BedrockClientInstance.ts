/**
 * @since 1.0.0
 */
import { BedrockClient } from "@aws-sdk/client-bedrock";
import { Context, Effect, Layer } from "effect";
import { BedrockClientInstanceConfig, DefaultBedrockClientConfigLayer } from "./BedrockClientInstanceConfig.js";

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
export const DefaultBedrockClientInstanceLayer = BedrockClientInstanceLayer.pipe(
  Layer.provide(DefaultBedrockClientConfigLayer),
);
