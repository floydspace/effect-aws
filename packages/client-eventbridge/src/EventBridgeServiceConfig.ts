/**
 * @since 1.0.0
 */
import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { EventBridgeService } from "./EventBridgeService.js";

/**
 * @since 1.0.0
 * @category eventbridge service config
 */
const currentEventBridgeServiceConfig = globalValue(
  "@effect-aws/client-eventbridge/currentEventBridgeServiceConfig",
  () => FiberRef.unsafeMake<EventBridgeService.Config>({}),
);

/**
 * @since 1.0.0
 * @category eventbridge service config
 */
export const withEventBridgeServiceConfig: {
  (config: EventBridgeService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: EventBridgeService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: EventBridgeService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentEventBridgeServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category eventbridge service config
 */
export const setEventBridgeServiceConfig = (config: EventBridgeService.Config) =>
  Layer.locallyScoped(currentEventBridgeServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toEventBridgeClientConfig: Effect.Effect<EventBridgeClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentEventBridgeServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
