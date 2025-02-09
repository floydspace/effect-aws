/**
 * @since 1.0.0
 */
import type { ECRClientConfig } from "@aws-sdk/client-ecr";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { ECRService } from "./ECRService.js";

/**
 * @since 1.0.0
 * @category ecr service config
 */
const currentECRServiceConfig = globalValue(
  "@effect-aws/client-ecr/currentECRServiceConfig",
  () => FiberRef.unsafeMake<ECRService.Config>({}),
);

/**
 * @since 1.0.0
 * @category ecr service config
 */
export const withECRServiceConfig: {
  (config: ECRService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ECRService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ECRService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentECRServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ecr service config
 */
export const setECRServiceConfig = (config: ECRService.Config) => Layer.locallyScoped(currentECRServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toECRClientConfig: Effect.Effect<ECRClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentECRServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
