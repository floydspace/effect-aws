/**
 * @since 1.0.0
 */
import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { KinesisService } from "./KinesisService.js";

/**
 * @since 1.0.0
 * @category kinesis service config
 */
const currentKinesisServiceConfig = globalValue(
  "@effect-aws/client-kinesis/currentKinesisServiceConfig",
  () => FiberRef.unsafeMake<KinesisService.Config>({}),
);

/**
 * @since 1.0.0
 * @category kinesis service config
 */
export const withKinesisServiceConfig: {
  (config: KinesisService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KinesisService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: KinesisService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentKinesisServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category kinesis service config
 */
export const setKinesisServiceConfig = (config: KinesisService.Config) =>
  Layer.locallyScoped(currentKinesisServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toKinesisClientConfig: Effect.Effect<KinesisClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentKinesisServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
