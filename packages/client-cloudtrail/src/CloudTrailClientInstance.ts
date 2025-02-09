/**
 * @since 1.0.0
 */
import { CloudTrailClient } from "@aws-sdk/client-cloudtrail";
import { Context, Effect, Layer } from "effect";
import * as CloudTrailServiceConfig from "./CloudTrailServiceConfig.js";

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
export const layer = Layer.scoped(CloudTrailClientInstance, make);
