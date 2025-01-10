/**
 * @since 1.0.0
 */
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultCloudWatchClientConfigLayer,
  CloudWatchClientInstanceConfig,
} from "./CloudWatchClientInstanceConfig";

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
