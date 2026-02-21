/**
 * @since 1.0.0
 */
import { S3Client } from "@aws-sdk/client-s3";
import { Effect, Layer, ServiceMap } from "effect";
import * as S3ServiceConfig from "./S3ServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class S3ClientInstance extends ServiceMap.Service<S3ClientInstance, S3Client>()(
  "@effect-aws/client-s3/S3ClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  S3ServiceConfig.toS3ClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new S3Client(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(S3ClientInstance, make);
