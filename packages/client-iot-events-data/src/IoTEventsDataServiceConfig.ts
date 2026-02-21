/**
 * @since 1.0.0
 */
import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { IoTEventsDataService } from "./IoTEventsDataService.js";

/**
 * @since 1.0.0
 * @category iot-events-data service config
 */
const currentIoTEventsDataServiceConfig = ServiceMap.Reference<IoTEventsDataService.Config>(
  "@effect-aws/client-iot-events-data/currentIoTEventsDataServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category iot-events-data service config
 */
export const withIoTEventsDataServiceConfig: {
  (config: IoTEventsDataService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTEventsDataService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTEventsDataService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentIoTEventsDataServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot-events-data service config
 */
export const setIoTEventsDataServiceConfig = (config: IoTEventsDataService.Config) =>
  Layer.succeed(currentIoTEventsDataServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTEventsDataClientConfig: Effect.Effect<IoTEventsDataClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentIoTEventsDataServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
