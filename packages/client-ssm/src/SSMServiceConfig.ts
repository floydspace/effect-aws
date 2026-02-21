/**
 * @since 1.0.0
 */
import type { SSMClientConfig } from "@aws-sdk/client-ssm";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { SSMService } from "./SSMService.js";

/**
 * @since 1.0.0
 * @category ssm service config
 */
const currentSSMServiceConfig = ServiceMap.Reference<SSMService.Config>(
  "@effect-aws/client-ssm/currentSSMServiceConfig",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentSSMServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ssm service config
 */
export const setSSMServiceConfig = (config: SSMService.Config) => Layer.succeed(currentSSMServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSSMClientConfig: Effect.Effect<SSMClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSSMServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
