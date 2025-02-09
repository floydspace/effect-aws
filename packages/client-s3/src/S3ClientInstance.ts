/**
 * @since 1.0.0
 */
import { S3Client } from "@aws-sdk/client-s3";
import { Context, Effect, Layer } from "effect";
import * as S3ServiceConfig from "./S3ServiceConfig.js";

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
export const layer = Layer.scoped(S3ClientInstance, make);
