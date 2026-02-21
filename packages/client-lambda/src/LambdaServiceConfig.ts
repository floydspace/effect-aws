/**
 * @since 1.0.0
 */
import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { LambdaService } from "./LambdaService.js";

/**
 * @since 1.0.0
 * @category lambda service config
 */
const currentLambdaServiceConfig = ServiceMap.Reference<LambdaService.Config>(
  "@effect-aws/client-lambda/currentLambdaServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category lambda service config
 */
export const withLambdaServiceConfig: {
  (config: LambdaService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: LambdaService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: LambdaService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentLambdaServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category lambda service config
 */
export const setLambdaServiceConfig = (config: LambdaService.Config) =>
  Layer.succeed(currentLambdaServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toLambdaClientConfig: Effect.Effect<LambdaClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentLambdaServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
