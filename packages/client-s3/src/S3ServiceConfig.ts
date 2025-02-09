/**
 * @since 1.0.0
 */
import type { S3ClientConfig } from "@aws-sdk/client-s3";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { S3Service } from "./S3Service.js";

/**
 * @since 1.0.0
 * @category s3 service config
 */
const currentS3ServiceConfig = globalValue(
  "@effect-aws/client-s3/currentS3ServiceConfig",
  () => FiberRef.unsafeMake<S3Service.Config>({}),
);

/**
 * @since 1.0.0
 * @category s3 service config
 */
export const withS3ServiceConfig: {
  (config: S3Service.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: S3Service.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: S3Service.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentS3ServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category s3 service config
 */
export const setS3ServiceConfig = (config: S3Service.Config) => Layer.locallyScoped(currentS3ServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toS3ClientConfig: Effect.Effect<S3ClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentS3ServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
