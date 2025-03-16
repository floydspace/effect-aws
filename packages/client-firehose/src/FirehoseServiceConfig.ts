/**
 * @since 1.0.0
 */
import type { FirehoseClientConfig } from "@aws-sdk/client-firehose";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { FirehoseService } from "./FirehoseService.js";

/**
 * @since 1.0.0
 * @category firehose service config
 */
const currentFirehoseServiceConfig = globalValue(
  "@effect-aws/client-firehose/currentFirehoseServiceConfig",
  () => FiberRef.unsafeMake<FirehoseService.Config>({}),
);

/**
 * @since 1.0.0
 * @category firehose service config
 */
export const withFirehoseServiceConfig: {
  (config: FirehoseService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: FirehoseService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: FirehoseService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentFirehoseServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category firehose service config
 */
export const setFirehoseServiceConfig = (config: FirehoseService.Config) =>
  Layer.locallyScoped(currentFirehoseServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toFirehoseClientConfig: Effect.Effect<FirehoseClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentFirehoseServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
