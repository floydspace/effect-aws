/**
 * @since 1.0.0
 */
import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { KafkaConnectService } from "./KafkaConnectService.js";

/**
 * @since 1.0.0
 * @category kafkaconnect service config
 */
const currentKafkaConnectServiceConfig = ServiceMap.Reference<KafkaConnectService.Config>(
  "@effect-aws/client-kafkaconnect/currentKafkaConnectServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category kafkaconnect service config
 */
export const withKafkaConnectServiceConfig: {
  (config: KafkaConnectService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KafkaConnectService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KafkaConnectService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentKafkaConnectServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category kafkaconnect service config
 */
export const setKafkaConnectServiceConfig = (config: KafkaConnectService.Config) =>
  Layer.succeed(currentKafkaConnectServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toKafkaConnectClientConfig: Effect.Effect<KafkaConnectClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentKafkaConnectServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
