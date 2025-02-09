/**
 * @since 1.0.0
 */
import type { IoTJobsDataPlaneClientConfig } from "@aws-sdk/client-iot-jobs-data-plane";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { IoTJobsDataPlaneService } from "./IoTJobsDataPlaneService.js";

/**
 * @since 1.0.0
 * @category iot-jobs-data-plane service config
 */
const currentIoTJobsDataPlaneServiceConfig = globalValue(
  "@effect-aws/client-iot-jobs-data-plane/currentIoTJobsDataPlaneServiceConfig",
  () => FiberRef.unsafeMake<IoTJobsDataPlaneService.Config>({}),
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
    Effect.locally(effect, currentIoTJobsDataPlaneServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot-jobs-data-plane service config
 */
export const setIoTJobsDataPlaneServiceConfig = (config: IoTJobsDataPlaneService.Config) =>
  Layer.locallyScoped(currentIoTJobsDataPlaneServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTJobsDataPlaneClientConfig: Effect.Effect<IoTJobsDataPlaneClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentIoTJobsDataPlaneServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
