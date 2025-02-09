/**
 * @since 1.0.0
 */
import type { IoTClientConfig } from "@aws-sdk/client-iot";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { IoTService } from "./IoTService.js";

/**
 * @since 1.0.0
 * @category iot service config
 */
const currentIoTServiceConfig = globalValue(
  "@effect-aws/client-iot/currentIoTServiceConfig",
  () => FiberRef.unsafeMake<IoTService.Config>({}),
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
    Effect.locally(effect, currentIoTServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category iot service config
 */
export const setIoTServiceConfig = (config: IoTService.Config) => Layer.locallyScoped(currentIoTServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toIoTClientConfig: Effect.Effect<IoTClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentIoTServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
