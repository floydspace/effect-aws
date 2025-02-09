/**
 * @since 1.0.0
 */
import { CloudWatchLogsClient } from "@aws-sdk/client-cloudwatch-logs";
import { Context, Effect, Layer } from "effect";
import * as CloudWatchLogsServiceConfig from "./CloudWatchLogsServiceConfig.js";

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
export const make = Effect.flatMap(
  CloudWatchLogsServiceConfig.toCloudWatchLogsClientConfig,
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
export const layer = Layer.scoped(CloudWatchLogsClientInstance, make);
