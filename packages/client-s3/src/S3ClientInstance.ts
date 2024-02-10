/**
 * @since 1.0.0
 */
import { S3Client } from "@aws-sdk/client-s3";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultS3ClientConfigLayer,
  S3ClientInstanceConfig,
} from "./S3ClientInstanceConfig";

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
export const makeS3ClientInstance = Effect.map(
  S3ClientInstanceConfig,
  (config) => new S3Client(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const S3ClientInstanceLayer = Layer.effect(
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
