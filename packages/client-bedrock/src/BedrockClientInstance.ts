/**
 * @since 1.0.0
 */
import { BedrockClient } from "@aws-sdk/client-bedrock";
import { Context, Effect, Layer } from "effect";
import * as BedrockServiceConfig from "./BedrockServiceConfig.js";

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
export const layer = Layer.scoped(BedrockClientInstance, make);
