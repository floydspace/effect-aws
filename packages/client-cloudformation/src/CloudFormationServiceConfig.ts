/**
 * @since 1.0.0
 */
import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { CloudFormationService } from "./CloudFormationService.js";

/**
 * @since 1.0.0
 * @category cloudformation service config
 */
const currentCloudFormationServiceConfig = ServiceMap.Reference<CloudFormationService.Config>(
  "@effect-aws/client-cloudformation/currentCloudFormationServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category cloudformation service config
 */
export const withCloudFormationServiceConfig: {
  (config: CloudFormationService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudFormationService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudFormationService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentCloudFormationServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudformation service config
 */
export const setCloudFormationServiceConfig = (config: CloudFormationService.Config) =>
  Layer.succeed(currentCloudFormationServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudFormationClientConfig: Effect.Effect<CloudFormationClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentCloudFormationServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
