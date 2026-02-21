/**
 * @since 1.0.0
 */
import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { SecretsManagerService } from "./SecretsManagerService.js";

/**
 * @since 1.0.0
 * @category secrets-manager service config
 */
const currentSecretsManagerServiceConfig = ServiceMap.Reference<SecretsManagerService.Config>(
  "@effect-aws/client-secrets-manager/currentSecretsManagerServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category secrets-manager service config
 */
export const withSecretsManagerServiceConfig: {
  (config: SecretsManagerService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SecretsManagerService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SecretsManagerService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentSecretsManagerServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category secrets-manager service config
 */
export const setSecretsManagerServiceConfig = (config: SecretsManagerService.Config) =>
  Layer.succeed(currentSecretsManagerServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSecretsManagerClientConfig: Effect.Effect<SecretsManagerClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSecretsManagerServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
