/**
 * @since 1.0.0
 */
import { STSClient } from "@aws-sdk/client-sts";
import { Context, Effect, Layer } from "effect";
import { DefaultSTSClientConfigLayer, STSClientInstanceConfig } from "./STSClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class STSClientInstance extends Context.Tag(
  "@effect-aws/client-sts/STSClientInstance",
)<STSClientInstance, STSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSTSClientInstance = Effect.flatMap(
  STSClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new STSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const STSClientInstanceLayer = Layer.scoped(
  STSClientInstance,
  makeSTSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSTSClientInstanceLayer = STSClientInstanceLayer.pipe(
  Layer.provide(DefaultSTSClientConfigLayer),
);
