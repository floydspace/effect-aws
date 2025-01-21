/**
 * @since 1.0.0
 */
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { Context, Effect, Layer } from "effect";
import {
  DefaultCloudWatchClientConfigLayer,
  CloudWatchClientInstanceConfig,
} from "./CloudWatchClientInstanceConfig.js";

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
export const makeCloudWatchClientInstance = Effect.flatMap(
  CloudWatchClientInstanceConfig,
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
export const CloudWatchClientInstanceLayer = Layer.scoped(
  CloudWatchClientInstance,
  makeCloudWatchClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchClientInstanceLayer =
  CloudWatchClientInstanceLayer.pipe(
    Layer.provide(DefaultCloudWatchClientConfigLayer),
  );
