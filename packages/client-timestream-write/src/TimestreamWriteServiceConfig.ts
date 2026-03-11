/**
 * @since 1.0.0
 */
import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type { TimestreamWriteService } from "./TimestreamWriteService.js";

/**
 * @since 1.0.0
 * @category timestream-write service config
 */
const currentTimestreamWriteServiceConfig = ServiceMap.Reference<TimestreamWriteService.Config>(
  "@effect-aws/client-timestream-write/currentTimestreamWriteServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category timestream-write service config
 */
export const withTimestreamWriteServiceConfig: {
  (config: TimestreamWriteService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TimestreamWriteService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TimestreamWriteService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentTimestreamWriteServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category timestream-write service config
 */
export const setTimestreamWriteServiceConfig = (config: TimestreamWriteService.Config) =>
  Layer.succeed(currentTimestreamWriteServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toTimestreamWriteClientConfig: Effect.Effect<TimestreamWriteClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentTimestreamWriteServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
