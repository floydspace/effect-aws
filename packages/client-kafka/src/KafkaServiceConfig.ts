/**
 * @since 1.0.0
 */
import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { KafkaService } from "./KafkaService.js";

/**
 * @since 1.0.0
 * @category kafka service config
 */
const currentKafkaServiceConfig = globalValue(
  "@effect-aws/client-kafka/currentKafkaServiceConfig",
  () => FiberRef.unsafeMake<KafkaService.Config>({}),
);

/**
 * @since 1.0.0
 * @category kafka service config
 */
export const withKafkaServiceConfig: {
  (config: KafkaService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KafkaService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KafkaService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentKafkaServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category kafka service config
 */
export const setKafkaServiceConfig = (config: KafkaService.Config) =>
  Layer.locallyScoped(currentKafkaServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toKafkaClientConfig: Effect.Effect<KafkaClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentKafkaServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
