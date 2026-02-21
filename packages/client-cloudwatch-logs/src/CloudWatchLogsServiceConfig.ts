/**
 * @since 1.0.0
 */
import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { CloudWatchLogsService } from "./CloudWatchLogsService.js";

/**
 * @since 1.0.0
 * @category cloudwatch-logs service config
 */
const currentCloudWatchLogsServiceConfig = ServiceMap.Reference<CloudWatchLogsService.Config>(
  "@effect-aws/client-cloudwatch-logs/currentCloudWatchLogsServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category cloudwatch-logs service config
 */
export const withCloudWatchLogsServiceConfig: {
  (config: CloudWatchLogsService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudWatchLogsService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudWatchLogsService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentCloudWatchLogsServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudwatch-logs service config
 */
export const setCloudWatchLogsServiceConfig = (config: CloudWatchLogsService.Config) =>
  Layer.succeed(currentCloudWatchLogsServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudWatchLogsClientConfig: Effect.Effect<CloudWatchLogsClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentCloudWatchLogsServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
