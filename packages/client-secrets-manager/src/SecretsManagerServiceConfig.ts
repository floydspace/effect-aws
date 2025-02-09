/**
 * @since 1.0.0
 */
import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { SecretsManagerService } from "./SecretsManagerService.js";

/**
 * @since 1.0.0
 * @category secrets-manager service config
 */
const currentSecretsManagerServiceConfig = globalValue(
  "@effect-aws/client-secrets-manager/currentSecretsManagerServiceConfig",
  () => FiberRef.unsafeMake<SecretsManagerService.Config>({}),
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
    Effect.locally(effect, currentSecretsManagerServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category secrets-manager service config
 */
export const setSecretsManagerServiceConfig = (config: SecretsManagerService.Config) =>
  Layer.locallyScoped(currentSecretsManagerServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSecretsManagerClientConfig: Effect.Effect<SecretsManagerClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentSecretsManagerServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
