/**
 * @since 1.0.0
 */
import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { ElastiCacheService } from "./ElastiCacheService.js";

/**
 * @since 1.0.0
 * @category elasticache service config
 */
const currentElastiCacheServiceConfig = globalValue(
  "@effect-aws/client-elasticache/currentElastiCacheServiceConfig",
  () => FiberRef.unsafeMake<ElastiCacheService.Config>({}),
);

/**
 * @since 1.0.0
 * @category elasticache service config
 */
export const withElastiCacheServiceConfig: {
  (config: ElastiCacheService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ElastiCacheService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ElastiCacheService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentElastiCacheServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category elasticache service config
 */
export const setElastiCacheServiceConfig = (config: ElastiCacheService.Config) =>
  Layer.locallyScoped(currentElastiCacheServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toElastiCacheClientConfig: Effect.Effect<ElastiCacheClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentElastiCacheServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
