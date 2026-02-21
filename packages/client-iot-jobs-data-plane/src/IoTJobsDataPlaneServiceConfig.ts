/**
 * @since 1.0.0
 */
import type { IoTJobsDataPlaneClientConfig } from "@aws-sdk/client-iot-jobs-data-plane";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { IoTJobsDataPlaneService } from "./IoTJobsDataPlaneService.js";

/**
 * @since 1.0.0
 * @category iot-jobs-data-plane service config
 */
const currentIoTJobsDataPlaneServiceConfig = ServiceMap.Reference<IoTJobsDataPlaneService.Config>(
  "@effect-aws/client-iot-jobs-data-plane/currentIoTJobsDataPlaneServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category iot-jobs-data-plane service config
 */
export const withIoTJobsDataPlaneServiceConfig: {
  (config: IoTJobsDataPlaneService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTJobsDataPlaneService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTJobsDataPlaneService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentIoTJobsDataPlaneServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot-jobs-data-plane service config
 */
export const setIoTJobsDataPlaneServiceConfig = (config: IoTJobsDataPlaneService.Config) =>
  Layer.succeed(currentIoTJobsDataPlaneServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTJobsDataPlaneClientConfig: Effect.Effect<IoTJobsDataPlaneClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentIoTJobsDataPlaneServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
