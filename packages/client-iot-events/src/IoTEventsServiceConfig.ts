/**
 * @since 1.0.0
 */
import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { IoTEventsService } from "./IoTEventsService.js";

/**
 * @since 1.0.0
 * @category iot-events service config
 */
const currentIoTEventsServiceConfig = ServiceMap.Reference<IoTEventsService.Config>(
  "@effect-aws/client-iot-events/currentIoTEventsServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category iot-events service config
 */
export const withIoTEventsServiceConfig: {
  (config: IoTEventsService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTEventsService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTEventsService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentIoTEventsServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot-events service config
 */
export const setIoTEventsServiceConfig = (config: IoTEventsService.Config) =>
  Layer.succeed(currentIoTEventsServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTEventsClientConfig: Effect.Effect<IoTEventsClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentIoTEventsServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
