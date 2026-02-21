/**
 * @since 1.0.0
 */
import type { ECSClientConfig } from "@aws-sdk/client-ecs";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { ECSService } from "./ECSService.js";

/**
 * @since 1.0.0
 * @category ecs service config
 */
const currentECSServiceConfig = ServiceMap.Reference<ECSService.Config>(
  "@effect-aws/client-ecs/currentECSServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category ecs service config
 */
export const withECSServiceConfig: {
  (config: ECSService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ECSService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ECSService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentECSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ecs service config
 */
export const setECSServiceConfig = (config: ECSService.Config) => Layer.succeed(currentECSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toECSClientConfig: Effect.Effect<ECSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentECSServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
