/**
 * @since 1.0.0
 */
import type { STSClientConfig } from "@aws-sdk/client-sts";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { STSService } from "./STSService.js";

/**
 * @since 1.0.0
 * @category sts service config
 */
const currentSTSServiceConfig = ServiceMap.Reference<STSService.Config>(
  "@effect-aws/client-sts/currentSTSServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category sts service config
 */
export const withSTSServiceConfig: {
  (config: STSService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: STSService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: STSService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentSTSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category sts service config
 */
export const setSTSServiceConfig = (config: STSService.Config) => Layer.succeed(currentSTSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSTSClientConfig: Effect.Effect<STSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSTSServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
