/**
 * @since 1.0.0
 */
import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { CloudWatchService } from "./CloudWatchService.js";

/**
 * @since 1.0.0
 * @category cloudwatch service config
 */
const currentCloudWatchServiceConfig = globalValue(
  "@effect-aws/client-cloudwatch/currentCloudWatchServiceConfig",
  () => FiberRef.unsafeMake<CloudWatchService.Config>({}),
);

/**
 * @since 1.0.0
 * @category cloudwatch service config
 */
export const withCloudWatchServiceConfig: {
  (config: CloudWatchService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudWatchService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudWatchService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentCloudWatchServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudwatch service config
 */
export const setCloudWatchServiceConfig = (config: CloudWatchService.Config) =>
  Layer.locallyScoped(currentCloudWatchServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudWatchClientConfig: Effect.Effect<CloudWatchClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentCloudWatchServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
