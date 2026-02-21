/**
 * @since 1.0.0
 */
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { Effect, Layer, ServiceMap } from "effect";
import * as CloudWatchServiceConfig from "./CloudWatchServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudWatchClientInstance extends ServiceMap.Service<CloudWatchClientInstance, CloudWatchClient>()(
  "@effect-aws/client-cloudwatch/CloudWatchClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  CloudWatchServiceConfig.toCloudWatchClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CloudWatchClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(CloudWatchClientInstance, make);
