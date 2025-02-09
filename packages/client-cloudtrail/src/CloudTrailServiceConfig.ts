/**
 * @since 1.0.0
 */
import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { CloudTrailService } from "./CloudTrailService.js";

/**
 * @since 1.0.0
 * @category cloudtrail service config
 */
const currentCloudTrailServiceConfig = globalValue(
  "@effect-aws/client-cloudtrail/currentCloudTrailServiceConfig",
  () => FiberRef.unsafeMake<CloudTrailService.Config>({}),
);

/**
 * @since 1.0.0
 * @category cloudtrail service config
 */
export const withCloudTrailServiceConfig: {
  (config: CloudTrailService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudTrailService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudTrailService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentCloudTrailServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudtrail service config
 */
export const setCloudTrailServiceConfig = (config: CloudTrailService.Config) =>
  Layer.locallyScoped(currentCloudTrailServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudTrailClientConfig: Effect.Effect<CloudTrailClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentCloudTrailServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
