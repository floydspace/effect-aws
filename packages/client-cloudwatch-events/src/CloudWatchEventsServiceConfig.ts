/**
 * @since 1.0.0
 */
import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { CloudWatchEventsService } from "./CloudWatchEventsService.js";

/**
 * @since 1.0.0
 * @category cloudwatch-events service config
 */
const currentCloudWatchEventsServiceConfig = globalValue(
  "@effect-aws/client-cloudwatch-events/currentCloudWatchEventsServiceConfig",
  () => FiberRef.unsafeMake<CloudWatchEventsService.Config>({}),
);

/**
 * @since 1.0.0
 * @category cloudwatch-events service config
 */
export const withCloudWatchEventsServiceConfig: {
  (config: CloudWatchEventsService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudWatchEventsService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudWatchEventsService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentCloudWatchEventsServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudwatch-events service config
 */
export const setCloudWatchEventsServiceConfig = (config: CloudWatchEventsService.Config) =>
  Layer.locallyScoped(currentCloudWatchEventsServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudWatchEventsClientConfig: Effect.Effect<CloudWatchEventsClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentCloudWatchEventsServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
