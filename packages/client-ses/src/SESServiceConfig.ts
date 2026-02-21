/**
 * @since 1.0.0
 */
import type { SESClientConfig } from "@aws-sdk/client-ses";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { SESService } from "./SESService.js";

/**
 * @since 1.0.0
 * @category ses service config
 */
const currentSESServiceConfig = ServiceMap.Reference<SESService.Config>(
  "@effect-aws/client-ses/currentSESServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category ses service config
 */
export const withSESServiceConfig: {
  (config: SESService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SESService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SESService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentSESServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ses service config
 */
export const setSESServiceConfig = (config: SESService.Config) => Layer.succeed(currentSESServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSESClientConfig: Effect.Effect<SESClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSESServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
