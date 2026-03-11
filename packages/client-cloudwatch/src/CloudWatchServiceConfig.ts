/**
 * @since 1.0.0
 */
import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type { CloudWatchService } from "./CloudWatchService.js";

/**
 * @since 1.0.0
 * @category cloudwatch service config
 */
const currentCloudWatchServiceConfig = ServiceMap.Reference<CloudWatchService.Config>(
  "@effect-aws/client-cloudwatch/currentCloudWatchServiceConfig",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentCloudWatchServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudwatch service config
 */
export const setCloudWatchServiceConfig = (config: CloudWatchService.Config) =>
  Layer.succeed(currentCloudWatchServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudWatchClientConfig: Effect.Effect<CloudWatchClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentCloudWatchServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
