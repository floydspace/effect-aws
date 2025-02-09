/**
 * @since 1.0.0
 */
import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { SchedulerService } from "./SchedulerService.js";

/**
 * @since 1.0.0
 * @category scheduler service config
 */
const currentSchedulerServiceConfig = globalValue(
  "@effect-aws/client-scheduler/currentSchedulerServiceConfig",
  () => FiberRef.unsafeMake<SchedulerService.Config>({}),
);

/**
 * @since 1.0.0
 * @category scheduler service config
 */
export const withSchedulerServiceConfig: {
  (config: SchedulerService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SchedulerService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SchedulerService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentSchedulerServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category scheduler service config
 */
export const setSchedulerServiceConfig = (config: SchedulerService.Config) =>
  Layer.locallyScoped(currentSchedulerServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSchedulerClientConfig: Effect.Effect<SchedulerClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentSchedulerServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
