/**
 * @since 1.0.0
 */
import { CloudWatchLogsClient } from "@aws-sdk/client-cloudwatch-logs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultCloudWatchLogsClientConfigLayer,
  CloudWatchLogsClientInstanceConfig,
} from "./CloudWatchLogsClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudWatchLogsClientInstance extends Context.Tag(
  "@effect-aws/client-cloudwatch-logs/CloudWatchLogsClientInstance",
)<CloudWatchLogsClientInstance, CloudWatchLogsClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchLogsClientInstance = Effect.map(
  CloudWatchLogsClientInstanceConfig,
  (config) => new CloudWatchLogsClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudWatchLogsClientInstanceLayer = Layer.effect(
  CloudWatchLogsClientInstance,
  makeCloudWatchLogsClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchLogsClientInstanceLayer =
  CloudWatchLogsClientInstanceLayer.pipe(
    Layer.provide(DefaultCloudWatchLogsClientConfigLayer),
  );
