/**
 * @since 1.0.0
 */
import { BedrockClient } from "@aws-sdk/client-bedrock";
import { Effect, Layer, ServiceMap } from "effect";
import * as BedrockServiceConfig from "./BedrockServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockClientInstance extends ServiceMap.Service<BedrockClientInstance, BedrockClient>()(
  "@effect-aws/client-bedrock/BedrockClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  BedrockServiceConfig.toBedrockClientConfig,
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
export const layer = Layer.effect(BedrockClientInstance, make);
