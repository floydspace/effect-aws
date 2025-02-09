/**
 * @since 1.0.0
 */
import type { MqClientConfig } from "@aws-sdk/client-mq";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { MqService } from "./MqService.js";

/**
 * @since 1.0.0
 * @category mq service config
 */
const currentMqServiceConfig = globalValue(
  "@effect-aws/client-mq/currentMqServiceConfig",
  () => FiberRef.unsafeMake<MqService.Config>({}),
);

/**
 * @since 1.0.0
 * @category mq service config
 */
export const withMqServiceConfig: {
  (config: MqService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: MqService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: MqService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentMqServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category mq service config
 */
export const setMqServiceConfig = (config: MqService.Config) => Layer.locallyScoped(currentMqServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toMqClientConfig: Effect.Effect<MqClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentMqServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
