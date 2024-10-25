/**
 * @since 1.0.0
 */
import { CloudTrailClient } from "@aws-sdk/client-cloudtrail";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultCloudTrailClientConfigLayer,
  CloudTrailClientInstanceConfig,
} from "./CloudTrailClientInstanceConfig";

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
export const makeCloudTrailClientInstance = Effect.map(
  CloudTrailClientInstanceConfig,
  (config) => new CloudTrailClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudTrailClientInstanceLayer = Layer.effect(
  CloudTrailClientInstance,
  makeCloudTrailClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudTrailClientInstanceLayer =
  CloudTrailClientInstanceLayer.pipe(
    Layer.provide(DefaultCloudTrailClientConfigLayer),
  );
