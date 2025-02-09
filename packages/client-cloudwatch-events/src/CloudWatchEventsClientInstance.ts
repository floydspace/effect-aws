/**
 * @since 1.0.0
 */
import { CloudWatchEventsClient } from "@aws-sdk/client-cloudwatch-events";
import { Context, Effect, Layer } from "effect";
import * as CloudWatchEventsServiceConfig from "./CloudWatchEventsServiceConfig.js";

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
export const make = Effect.flatMap(
  CloudWatchEventsServiceConfig.toCloudWatchEventsClientConfig,
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
export const layer = Layer.scoped(CloudWatchEventsClientInstance, make);
