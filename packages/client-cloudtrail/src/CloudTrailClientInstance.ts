/**
 * @since 1.0.0
 */
import { CloudTrailClient } from "@aws-sdk/client-cloudtrail";
import { Effect, Layer, ServiceMap } from "effect";
import * as CloudTrailServiceConfig from "./CloudTrailServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudTrailClientInstance extends ServiceMap.Service<CloudTrailClientInstance, CloudTrailClient>()(
  "@effect-aws/client-cloudtrail/CloudTrailClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  CloudTrailServiceConfig.toCloudTrailClientConfig,
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
export const layer = Layer.effect(CloudTrailClientInstance, make);
