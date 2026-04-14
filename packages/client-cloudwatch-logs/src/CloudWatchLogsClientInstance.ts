/**
 * @since 1.0.0
 */
import { CloudWatchLogsClient } from "@aws-sdk/client-cloudwatch-logs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as CloudWatchLogsServiceConfig from "./CloudWatchLogsServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudWatchLogsClientInstance extends Context.Service<CloudWatchLogsClientInstance, CloudWatchLogsClient>()(
  "@effect-aws/client-cloudwatch-logs/CloudWatchLogsClientInstance",
) {}

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
export const layer = Layer.effect(CloudWatchLogsClientInstance, make);
