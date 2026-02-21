/**
 * @since 1.0.0
 */
import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { CognitoIdentityProviderService } from "./CognitoIdentityProviderService.js";

/**
 * @since 1.0.0
 * @category cognito-identity-provider service config
 */
const currentCognitoIdentityProviderServiceConfig = ServiceMap.Reference<CognitoIdentityProviderService.Config>(
  "@effect-aws/client-cognito-identity-provider/currentCognitoIdentityProviderServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category cognito-identity-provider service config
 */
export const withCognitoIdentityProviderServiceConfig: {
  (config: CognitoIdentityProviderService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CognitoIdentityProviderService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CognitoIdentityProviderService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentCognitoIdentityProviderServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cognito-identity-provider service config
 */
export const setCognitoIdentityProviderServiceConfig = (config: CognitoIdentityProviderService.Config) =>
  Layer.succeed(currentCognitoIdentityProviderServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCognitoIdentityProviderClientConfig: Effect.Effect<CognitoIdentityProviderClientConfig> = Effect.gen(
  function*() {
    const { logger: serviceLogger, ...config } = yield* currentCognitoIdentityProviderServiceConfig;

    const logger = serviceLogger === true
      ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
      : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

    return { logger, ...config };
  },
);
