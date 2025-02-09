/**
 * @since 1.0.0
 */
import type { RDSClientConfig } from "@aws-sdk/client-rds";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { RDSService } from "./RDSService.js";

/**
 * @since 1.0.0
 * @category rds service config
 */
const currentRDSServiceConfig = globalValue(
  "@effect-aws/client-rds/currentRDSServiceConfig",
  () => FiberRef.unsafeMake<RDSService.Config>({}),
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
    Effect.locally(effect, currentRDSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category rds service config
 */
export const setRDSServiceConfig = (config: RDSService.Config) => Layer.locallyScoped(currentRDSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toRDSClientConfig: Effect.Effect<RDSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentRDSServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
