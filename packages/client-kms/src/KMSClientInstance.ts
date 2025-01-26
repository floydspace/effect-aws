/**
 * @since 1.0.0
 */
import { KMSClient } from "@aws-sdk/client-kms";
import { Context, Effect, Layer } from "effect";
import { DefaultKMSClientConfigLayer, KMSClientInstanceConfig } from "./KMSClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KMSClientInstance extends Context.Tag(
  "@effect-aws/client-kms/KMSClientInstance",
)<KMSClientInstance, KMSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKMSClientInstance = Effect.flatMap(
  KMSClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new KMSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const KMSClientInstanceLayer = Layer.scoped(
  KMSClientInstance,
  makeKMSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultKMSClientInstanceLayer = KMSClientInstanceLayer.pipe(
  Layer.provide(DefaultKMSClientConfigLayer),
);
