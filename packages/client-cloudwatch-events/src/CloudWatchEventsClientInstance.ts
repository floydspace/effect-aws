/**
 * @since 1.0.0
 */
import { CloudWatchEventsClient } from "@aws-sdk/client-cloudwatch-events";
import { Context, Effect, Layer } from "effect";
import {
  CloudWatchEventsClientInstanceConfig,
  DefaultCloudWatchEventsClientConfigLayer,
} from "./CloudWatchEventsClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudWatchEventsClientInstance extends Context.Tag(
  "@effect-aws/client-cloudwatch-events/CloudWatchEventsClientInstance",
)<CloudWatchEventsClientInstance, CloudWatchEventsClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchEventsClientInstance = Effect.flatMap(
  CloudWatchEventsClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CloudWatchEventsClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudWatchEventsClientInstanceLayer = Layer.scoped(
  CloudWatchEventsClientInstance,
  makeCloudWatchEventsClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchEventsClientInstanceLayer = CloudWatchEventsClientInstanceLayer.pipe(
  Layer.provide(DefaultCloudWatchEventsClientConfigLayer),
);
