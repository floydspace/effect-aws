/**
 * @since 1.0.0
 */
import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { AutoScalingService } from "./AutoScalingService.js";

/**
 * @since 1.0.0
 * @category auto-scaling service config
 */
const currentAutoScalingServiceConfig = globalValue(
  "@effect-aws/client-auto-scaling/currentAutoScalingServiceConfig",
  () => FiberRef.unsafeMake<AutoScalingService.Config>({}),
);

/**
 * @since 1.0.0
 * @category auto-scaling service config
 */
export const withAutoScalingServiceConfig: {
  (config: AutoScalingService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: AutoScalingService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: AutoScalingService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentAutoScalingServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category auto-scaling service config
 */
export const setAutoScalingServiceConfig = (config: AutoScalingService.Config) =>
  Layer.locallyScoped(currentAutoScalingServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toAutoScalingClientConfig: Effect.Effect<AutoScalingClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentAutoScalingServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
