/**
 * @since 1.0.0
 */
import type { IvsClientConfig } from "@aws-sdk/client-ivs";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { IvsService } from "./IvsService.js";

/**
 * @since 1.0.0
 * @category ivs service config
 */
const currentIvsServiceConfig = ServiceMap.Reference<IvsService.Config>(
  "@effect-aws/client-ivs/currentIvsServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category ivs service config
 */
export const withIvsServiceConfig: {
  (config: IvsService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IvsService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IvsService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentIvsServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ivs service config
 */
export const setIvsServiceConfig = (config: IvsService.Config) => Layer.succeed(currentIvsServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIvsClientConfig: Effect.Effect<IvsClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentIvsServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
