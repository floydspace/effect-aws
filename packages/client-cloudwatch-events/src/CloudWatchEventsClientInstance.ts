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
export const makeCloudWatchEventsClientInstance = Effect.map(
  CloudWatchEventsClientInstanceConfig,
  (config) => new CloudWatchEventsClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudWatchEventsClientInstanceLayer = Layer.effect(
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
