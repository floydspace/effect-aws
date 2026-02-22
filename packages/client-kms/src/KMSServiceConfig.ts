/**
 * @since 1.0.0
 */
import type { KMSClientConfig } from "@aws-sdk/client-kms";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { KMSService } from "./KMSService.js";

/**
 * @since 1.0.0
 * @category kms service config
 */
const currentKMSServiceConfig = ServiceMap.Reference<KMSService.Config>(
  "@effect-aws/client-kms/currentKMSServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category kms service config
 */
export const withKMSServiceConfig: {
  (config: KMSService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KMSService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KMSService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentKMSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category kms service config
 */
export const setKMSServiceConfig = (config: KMSService.Config) => Layer.succeed(currentKMSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toKMSClientConfig: Effect.Effect<KMSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentKMSServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
