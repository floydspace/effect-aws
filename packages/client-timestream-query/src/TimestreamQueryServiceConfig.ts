/**
 * @since 1.0.0
 */
import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { TimestreamQueryService } from "./TimestreamQueryService.js";

/**
 * @since 1.0.0
 * @category timestream-query service config
 */
const currentTimestreamQueryServiceConfig = globalValue(
  "@effect-aws/client-timestream-query/currentTimestreamQueryServiceConfig",
  () => FiberRef.unsafeMake<TimestreamQueryService.Config>({}),
);

/**
 * @since 1.0.0
 * @category timestream-query service config
 */
export const withTimestreamQueryServiceConfig: {
  (config: TimestreamQueryService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TimestreamQueryService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TimestreamQueryService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentTimestreamQueryServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category timestream-query service config
 */
export const setTimestreamQueryServiceConfig = (config: TimestreamQueryService.Config) =>
  Layer.locallyScoped(currentTimestreamQueryServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toTimestreamQueryClientConfig: Effect.Effect<TimestreamQueryClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentTimestreamQueryServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
