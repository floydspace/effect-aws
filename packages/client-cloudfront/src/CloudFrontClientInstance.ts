/**
 * @since 1.0.0
 */
import { CloudFrontClient } from "@aws-sdk/client-cloudfront";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as CloudFrontServiceConfig from "./CloudFrontServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudFrontClientInstance extends Context.Service<CloudFrontClientInstance, CloudFrontClient>()(
  "@effect-aws/client-cloudfront/CloudFrontClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  CloudFrontServiceConfig.toCloudFrontClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CloudFrontClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(CloudFrontClientInstance, make);
