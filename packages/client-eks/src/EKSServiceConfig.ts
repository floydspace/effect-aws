/**
 * @since 1.0.0
 */
import type { EKSClientConfig } from "@aws-sdk/client-eks";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import type { EKSService } from "./EKSService.js";

/**
 * @since 1.0.0
 * @category eks service config
 */
const currentEKSServiceConfig = Context.Reference<EKSService.Config>(
  "@effect-aws/client-eks/currentEKSServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category eks service config
 */
export const withEKSServiceConfig: {
  (config: EKSService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: EKSService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: EKSService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentEKSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category eks service config
 */
export const setEKSServiceConfig = (config: EKSService.Config) => Layer.succeed(currentEKSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toEKSClientConfig: Effect.Effect<EKSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentEKSServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
