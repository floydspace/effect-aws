/**
 * @since 1.0.0
 */
import { CloudTrailClient } from "@aws-sdk/client-cloudtrail";
import { Context, Effect, Layer } from "effect";
import {
  CloudTrailClientInstanceConfig,
  DefaultCloudTrailClientConfigLayer,
} from "./CloudTrailClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudTrailClientInstance extends Context.Tag(
  "@effect-aws/client-cloudtrail/CloudTrailClientInstance",
)<CloudTrailClientInstance, CloudTrailClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudTrailClientInstance = Effect.flatMap(
  CloudTrailClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CloudTrailClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudTrailClientInstanceLayer = Layer.scoped(
  CloudTrailClientInstance,
  makeCloudTrailClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudTrailClientInstanceLayer = CloudTrailClientInstanceLayer.pipe(
  Layer.provide(DefaultCloudTrailClientConfigLayer),
);
