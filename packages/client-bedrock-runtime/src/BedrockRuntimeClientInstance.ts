/**
 * @since 1.0.0
 */
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
