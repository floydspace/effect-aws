/**
 * @since 1.0.0
 */
import type { AthenaClientConfig } from "@aws-sdk/client-athena";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { AthenaService } from "./AthenaService.js";

/**
 * @since 1.0.0
 * @category athena service config
 */
const currentAthenaServiceConfig = ServiceMap.Reference<AthenaService.Config>(
  "@effect-aws/client-athena/currentAthenaServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category athena service config
 */
export const withAthenaServiceConfig: {
  (config: AthenaService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: AthenaService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: AthenaService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentAthenaServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category athena service config
 */
export const setAthenaServiceConfig = (config: AthenaService.Config) =>
  Layer.succeed(currentAthenaServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toAthenaClientConfig: Effect.Effect<AthenaClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentAthenaServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
