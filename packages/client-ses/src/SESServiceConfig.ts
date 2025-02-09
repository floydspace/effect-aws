/**
 * @since 1.0.0
 */
import type { SESClientConfig } from "@aws-sdk/client-ses";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { SESService } from "./SESService.js";

/**
 * @since 1.0.0
 * @category ses service config
 */
const currentSESServiceConfig = globalValue(
  "@effect-aws/client-ses/currentSESServiceConfig",
  () => FiberRef.unsafeMake<SESService.Config>({}),
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
    Effect.locally(effect, currentSESServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ses service config
 */
export const setSESServiceConfig = (config: SESService.Config) => Layer.locallyScoped(currentSESServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSESClientConfig: Effect.Effect<SESClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentSESServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
