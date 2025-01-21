/**
 * @since 1.0.0
 */
import { CloudSearchClient } from "@aws-sdk/client-cloudsearch";
import { Context, Effect, Layer } from "effect";
import {
  DefaultCloudSearchClientConfigLayer,
  CloudSearchClientInstanceConfig,
} from "./CloudSearchClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudSearchClientInstance extends Context.Tag(
  "@effect-aws/client-cloudsearch/CloudSearchClientInstance",
)<CloudSearchClientInstance, CloudSearchClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudSearchClientInstance = Effect.flatMap(
  CloudSearchClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CloudSearchClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudSearchClientInstanceLayer = Layer.scoped(
  CloudSearchClientInstance,
  makeCloudSearchClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudSearchClientInstanceLayer =
  CloudSearchClientInstanceLayer.pipe(
    Layer.provide(DefaultCloudSearchClientConfigLayer),
  );
