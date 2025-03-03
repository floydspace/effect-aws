/**
 * @since 1.0.0
 */
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";
import { Context, Effect, Layer } from "effect";
import * as BedrockRuntimeServiceConfig from "./BedrockRuntimeServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockRuntimeClientInstance extends Context.Tag(
  "@effect-aws/client-bedrock-runtime/BedrockRuntimeClientInstance",
)<BedrockRuntimeClientInstance, BedrockRuntimeClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  BedrockRuntimeServiceConfig.toBedrockRuntimeClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new BedrockRuntimeClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(BedrockRuntimeClientInstance, make);
