/**
 * @since 1.0.0
 */
import { S3Client } from "@aws-sdk/client-s3";
import { Context, Effect, Layer } from "effect";
import {
  DefaultS3ClientConfigLayer,
  S3ClientInstanceConfig,
} from "./S3ClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class S3ClientInstance extends Context.Tag(
  "@effect-aws/client-s3/S3ClientInstance",
)<S3ClientInstance, S3Client>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeS3ClientInstance = Effect.flatMap(
  S3ClientInstanceConfig,
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
export const S3ClientInstanceLayer = Layer.scoped(
  S3ClientInstance,
  makeS3ClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultS3ClientInstanceLayer = S3ClientInstanceLayer.pipe(
  Layer.provide(DefaultS3ClientConfigLayer),
);
