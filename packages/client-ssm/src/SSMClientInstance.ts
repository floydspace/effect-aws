/**
 * @since 1.0.0
 */
import { SSMClient } from "@aws-sdk/client-ssm";
import { Context, Effect, Layer } from "effect";
import { DefaultSSMClientConfigLayer, SSMClientInstanceConfig } from "./SSMClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SSMClientInstance extends Context.Tag(
  "@effect-aws/client-ssm/SSMClientInstance",
)<SSMClientInstance, SSMClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSSMClientInstance = Effect.flatMap(
  SSMClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SSMClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SSMClientInstanceLayer = Layer.scoped(
  SSMClientInstance,
  makeSSMClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSSMClientInstanceLayer = SSMClientInstanceLayer.pipe(
  Layer.provide(DefaultSSMClientConfigLayer),
);
