/**
 * @since 1.0.0
 */
import type { MqClientConfig } from "@aws-sdk/client-mq";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { MqService } from "./MqService.js";

/**
 * @since 1.0.0
 * @category mq service config
 */
const currentMqServiceConfig = ServiceMap.Reference<MqService.Config>(
  "@effect-aws/client-mq/currentMqServiceConfig",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentMqServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category mq service config
 */
export const setMqServiceConfig = (config: MqService.Config) => Layer.succeed(currentMqServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toMqClientConfig: Effect.Effect<MqClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentMqServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
