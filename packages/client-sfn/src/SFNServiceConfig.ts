/**
 * @since 1.0.0
 */
import type { SFNClientConfig } from "@aws-sdk/client-sfn";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { SFNService } from "./SFNService.js";

/**
 * @since 1.0.0
 * @category sfn service config
 */
const currentSFNServiceConfig = ServiceMap.Reference<SFNService.Config>(
  "@effect-aws/client-sfn/currentSFNServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category sfn service config
 */
export const withSFNServiceConfig: {
  (config: SFNService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SFNService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SFNService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentSFNServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category sfn service config
 */
export const setSFNServiceConfig = (config: SFNService.Config) => Layer.succeed(currentSFNServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSFNClientConfig: Effect.Effect<SFNClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSFNServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
