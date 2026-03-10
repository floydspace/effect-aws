/**
 * @since 1.0.0
 */
import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import * as FiberRef from "effect/FiberRef";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import * as Layer from "effect/Layer";
import type { CloudFormationService } from "./CloudFormationService.js";

/**
 * @since 1.0.0
 * @category cloudformation service config
 */
const currentCloudFormationServiceConfig = globalValue(
  "@effect-aws/client-cloudformation/currentCloudFormationServiceConfig",
  () => FiberRef.unsafeMake<CloudFormationService.Config>({}),
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
    Effect.locally(effect, currentCloudFormationServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudformation service config
 */
export const setCloudFormationServiceConfig = (config: CloudFormationService.Config) =>
  Layer.locallyScoped(currentCloudFormationServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudFormationClientConfig: Effect.Effect<CloudFormationClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentCloudFormationServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
