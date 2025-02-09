/**
 * @since 1.0.0
 */
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { Context, Effect, Layer } from "effect";
import * as CloudWatchServiceConfig from "./CloudWatchServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudWatchClientInstance extends Context.Tag(
  "@effect-aws/client-cloudwatch/CloudWatchClientInstance",
)<CloudWatchClientInstance, CloudWatchClient>() {}

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
export const layer = Layer.scoped(CloudWatchClientInstance, make);
