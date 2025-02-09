/**
 * @since 1.0.0
 */
import type { SSMClientConfig } from "@aws-sdk/client-ssm";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { SSMService } from "./SSMService.js";

/**
 * @since 1.0.0
 * @category ssm service config
 */
const currentSSMServiceConfig = globalValue(
  "@effect-aws/client-ssm/currentSSMServiceConfig",
  () => FiberRef.unsafeMake<SSMService.Config>({}),
);

/**
 * @since 1.0.0
 * @category ssm service config
 */
export const withSSMServiceConfig: {
  (config: SSMService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SSMService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SSMService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentSSMServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ssm service config
 */
export const setSSMServiceConfig = (config: SSMService.Config) => Layer.locallyScoped(currentSSMServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSSMClientConfig: Effect.Effect<SSMClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentSSMServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
