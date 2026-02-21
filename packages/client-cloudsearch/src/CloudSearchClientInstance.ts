/**
 * @since 1.0.0
 */
import { CloudSearchClient } from "@aws-sdk/client-cloudsearch";
import { Effect, Layer, ServiceMap } from "effect";
import * as CloudSearchServiceConfig from "./CloudSearchServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudSearchClientInstance extends ServiceMap.Service<CloudSearchClientInstance, CloudSearchClient>()(
  "@effect-aws/client-cloudsearch/CloudSearchClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  CloudSearchServiceConfig.toCloudSearchClientConfig,
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
export const layer = Layer.effect(CloudSearchClientInstance, make);
