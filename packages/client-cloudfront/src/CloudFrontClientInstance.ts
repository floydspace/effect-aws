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
export class CloudFrontClientInstance extends Context.Tag(
  "@effect-aws/client-cloudfront/CloudFrontClientInstance",
)<CloudFrontClientInstance, CloudFrontClient>() {}

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
export const layer = Layer.scoped(CloudFrontClientInstance, make);
