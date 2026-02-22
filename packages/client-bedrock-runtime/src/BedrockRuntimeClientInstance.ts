/**
 * @since 1.0.0
 */
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";
import { Effect, Layer, ServiceMap } from "effect";
import * as BedrockRuntimeServiceConfig from "./BedrockRuntimeServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockRuntimeClientInstance
  extends ServiceMap.Service<BedrockRuntimeClientInstance, BedrockRuntimeClient>()(
    "@effect-aws/client-bedrock-runtime/BedrockRuntimeClientInstance",
  )
{}

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
export const layer = Layer.effect(BedrockRuntimeClientInstance, make);
