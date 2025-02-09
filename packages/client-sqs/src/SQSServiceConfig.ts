/**
 * @since 1.0.0
 */
import type { SQSClientConfig } from "@aws-sdk/client-sqs";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { SQSService } from "./SQSService.js";

/**
 * @since 1.0.0
 * @category sqs service config
 */
const currentSQSServiceConfig = globalValue(
  "@effect-aws/client-sqs/currentSQSServiceConfig",
  () => FiberRef.unsafeMake<SQSService.Config>({}),
);

/**
 * @since 1.0.0
 * @category sqs service config
 */
export const withSQSServiceConfig: {
  (config: SQSService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SQSService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SQSService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentSQSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category sqs service config
 */
export const setSQSServiceConfig = (config: SQSService.Config) => Layer.locallyScoped(currentSQSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSQSClientConfig: Effect.Effect<SQSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentSQSServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
