/**
 * @since 1.0.0
 */
import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
import { ServiceLogger } from "@effect-aws/commons";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type { TimestreamInfluxDBService } from "./TimestreamInfluxDBService.js";

/**
 * @since 1.0.0
 * @category timestream-influxdb service config
 */
const currentTimestreamInfluxDBServiceConfig = ServiceMap.Reference<TimestreamInfluxDBService.Config>(
  "@effect-aws/client-timestream-influxdb/currentTimestreamInfluxDBServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category timestream-influxdb service config
 */
export const withTimestreamInfluxDBServiceConfig: {
  (config: TimestreamInfluxDBService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TimestreamInfluxDBService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TimestreamInfluxDBService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentTimestreamInfluxDBServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category timestream-influxdb service config
 */
export const setTimestreamInfluxDBServiceConfig = (config: TimestreamInfluxDBService.Config) =>
  Layer.succeed(currentTimestreamInfluxDBServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toTimestreamInfluxDBClientConfig: Effect.Effect<TimestreamInfluxDBClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentTimestreamInfluxDBServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
