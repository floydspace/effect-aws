/**
 * @since 1.0.0
 */
import type { IAMClientConfig } from "@aws-sdk/client-iam";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { IAMService } from "./IAMService.js";

/**
 * @since 1.0.0
 * @category iam service config
 */
const currentIAMServiceConfig = globalValue(
  "@effect-aws/client-iam/currentIAMServiceConfig",
  () => FiberRef.unsafeMake<IAMService.Config>({}),
);

/**
 * @since 1.0.0
 * @category iam service config
 */
export const withIAMServiceConfig: {
  (config: IAMService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IAMService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IAMService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentIAMServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iam service config
 */
export const setIAMServiceConfig = (config: IAMService.Config) => Layer.locallyScoped(currentIAMServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIAMClientConfig: Effect.Effect<IAMClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentIAMServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
