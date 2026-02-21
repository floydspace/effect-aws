/**
 * @since 1.0.0
 */
import type { SQSClientConfig } from "@aws-sdk/client-sqs";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { SQSService } from "./SQSService.js";

/**
 * @since 1.0.0
 * @category sqs service config
 */
const currentSQSServiceConfig = ServiceMap.Reference<SQSService.Config>(
  "@effect-aws/client-sqs/currentSQSServiceConfig",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentSQSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category sqs service config
 */
export const setSQSServiceConfig = (config: SQSService.Config) => Layer.succeed(currentSQSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSQSClientConfig: Effect.Effect<SQSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSQSServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
