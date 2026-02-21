/**
 * @since 1.0.0
 */
import type { RDSClientConfig } from "@aws-sdk/client-rds";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { RDSService } from "./RDSService.js";

/**
 * @since 1.0.0
 * @category rds service config
 */
const currentRDSServiceConfig = ServiceMap.Reference<RDSService.Config>(
  "@effect-aws/client-rds/currentRDSServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category rds service config
 */
export const withRDSServiceConfig: {
  (config: RDSService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: RDSService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: RDSService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentRDSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category rds service config
 */
export const setRDSServiceConfig = (config: RDSService.Config) => Layer.succeed(currentRDSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toRDSClientConfig: Effect.Effect<RDSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentRDSServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
