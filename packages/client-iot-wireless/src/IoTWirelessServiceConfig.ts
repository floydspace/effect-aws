/**
 * @since 1.0.0
 */
import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { IoTWirelessService } from "./IoTWirelessService.js";

/**
 * @since 1.0.0
 * @category iot-wireless service config
 */
const currentIoTWirelessServiceConfig = globalValue(
  "@effect-aws/client-iot-wireless/currentIoTWirelessServiceConfig",
  () => FiberRef.unsafeMake<IoTWirelessService.Config>({}),
);

/**
 * @since 1.0.0
 * @category iot-wireless service config
 */
export const withIoTWirelessServiceConfig: {
  (config: IoTWirelessService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTWirelessService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTWirelessService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentIoTWirelessServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot-wireless service config
 */
export const setIoTWirelessServiceConfig = (config: IoTWirelessService.Config) =>
  Layer.locallyScoped(currentIoTWirelessServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTWirelessClientConfig: Effect.Effect<IoTWirelessClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentIoTWirelessServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
