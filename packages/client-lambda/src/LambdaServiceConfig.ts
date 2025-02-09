/**
 * @since 1.0.0
 */
import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { LambdaService } from "./LambdaService.js";

/**
 * @since 1.0.0
 * @category lambda service config
 */
const currentLambdaServiceConfig = globalValue(
  "@effect-aws/client-lambda/currentLambdaServiceConfig",
  () => FiberRef.unsafeMake<LambdaService.Config>({}),
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
    Effect.locally(effect, currentLambdaServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category lambda service config
 */
export const setLambdaServiceConfig = (config: LambdaService.Config) =>
  Layer.locallyScoped(currentLambdaServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toLambdaClientConfig: Effect.Effect<LambdaClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentLambdaServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
