/**
 * @since 1.0.0
 */
import { CloudWatchEventsClient } from "@aws-sdk/client-cloudwatch-events";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultCloudWatchEventsClientConfigLayer,
  CloudWatchEventsClientInstanceConfig,
} from "./CloudWatchEventsClientInstanceConfig";

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
export const DefaultCloudWatchEventsClientInstanceLayer =
  CloudWatchEventsClientInstanceLayer.pipe(
    Layer.provide(DefaultCloudWatchEventsClientConfigLayer),
  );
