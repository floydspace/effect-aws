/**
 * @since 1.0.0
 */
import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { SchedulerService } from "./SchedulerService.js";

/**
 * @since 1.0.0
 * @category scheduler service config
 */
const currentSchedulerServiceConfig = ServiceMap.Reference<SchedulerService.Config>(
  "@effect-aws/client-scheduler/currentSchedulerServiceConfig",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentSchedulerServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category scheduler service config
 */
export const setSchedulerServiceConfig = (config: SchedulerService.Config) =>
  Layer.succeed(currentSchedulerServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSchedulerClientConfig: Effect.Effect<SchedulerClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSchedulerServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
