/**
 * @since 1.0.0
 */
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
