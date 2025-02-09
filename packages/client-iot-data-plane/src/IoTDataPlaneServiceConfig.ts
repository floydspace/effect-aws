/**
 * @since 1.0.0
 */
import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { IoTDataPlaneService } from "./IoTDataPlaneService.js";

/**
 * @since 1.0.0
 * @category iot-data-plane service config
 */
const currentIoTDataPlaneServiceConfig = globalValue(
  "@effect-aws/client-iot-data-plane/currentIoTDataPlaneServiceConfig",
  () => FiberRef.unsafeMake<IoTDataPlaneService.Config>({}),
);

/**
 * @since 1.0.0
 * @category iot-data-plane service config
 */
export const withIoTDataPlaneServiceConfig: {
  (config: IoTDataPlaneService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTDataPlaneService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTDataPlaneService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentIoTDataPlaneServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot-data-plane service config
 */
export const setIoTDataPlaneServiceConfig = (config: IoTDataPlaneService.Config) =>
  Layer.locallyScoped(currentIoTDataPlaneServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTDataPlaneClientConfig: Effect.Effect<IoTDataPlaneClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentIoTDataPlaneServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
