/**
 * @since 1.0.0
 */
import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
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
