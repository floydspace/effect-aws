/**
 * @since 1.0.0
 */
import { CloudWatchLogsClient } from "@aws-sdk/client-cloudwatch-logs";
import { Context, Effect, Layer } from "effect";
import {
  DefaultCloudWatchLogsClientConfigLayer,
  CloudWatchLogsClientInstanceConfig,
} from "./CloudWatchLogsClientInstanceConfig.js";

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
export const makeCloudWatchLogsClientInstance = Effect.flatMap(
  CloudWatchLogsClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CloudWatchLogsClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudWatchLogsClientInstanceLayer = Layer.scoped(
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
