/**
 * @since 1.0.0
 */
import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { DSQLService } from "./DSQLService.js";

/**
 * @since 1.0.0
 * @category dsql service config
 */
const currentDSQLServiceConfig = ServiceMap.Reference<DSQLService.Config>(
  "@effect-aws/client-dsql/currentDSQLServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category dsql service config
 */
export const withDSQLServiceConfig: {
  (config: DSQLService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DSQLService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DSQLService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentDSQLServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category dsql service config
 */
export const setDSQLServiceConfig = (config: DSQLService.Config) => Layer.succeed(currentDSQLServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toDSQLClientConfig: Effect.Effect<DSQLClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentDSQLServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
