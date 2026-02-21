/**
 * @since 1.0.0
 */
import type { GlueClientConfig } from "@aws-sdk/client-glue";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { GlueService } from "./GlueService.js";

/**
 * @since 1.0.0
 * @category glue service config
 */
const currentGlueServiceConfig = ServiceMap.Reference<GlueService.Config>(
  "@effect-aws/client-glue/currentGlueServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category glue service config
 */
export const withGlueServiceConfig: {
  (config: GlueService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: GlueService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: GlueService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentGlueServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category glue service config
 */
export const setGlueServiceConfig = (config: GlueService.Config) => Layer.succeed(currentGlueServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toGlueClientConfig: Effect.Effect<GlueClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentGlueServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
