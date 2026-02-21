/**
 * @since 1.0.0
 */
import type { IoTClientConfig } from "@aws-sdk/client-iot";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { IoTService } from "./IoTService.js";

/**
 * @since 1.0.0
 * @category iot service config
 */
const currentIoTServiceConfig = ServiceMap.Reference<IoTService.Config>(
  "@effect-aws/client-iot/currentIoTServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category iot service config
 */
export const withIoTServiceConfig: {
  (config: IoTService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: IoTService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentIoTServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot service config
 */
export const setIoTServiceConfig = (config: IoTService.Config) => Layer.succeed(currentIoTServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTClientConfig: Effect.Effect<IoTClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentIoTServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
