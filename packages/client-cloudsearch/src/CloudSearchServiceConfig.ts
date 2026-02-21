/**
 * @since 1.0.0
 */
import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { CloudSearchService } from "./CloudSearchService.js";

/**
 * @since 1.0.0
 * @category cloudsearch service config
 */
const currentCloudSearchServiceConfig = ServiceMap.Reference<CloudSearchService.Config>(
  "@effect-aws/client-cloudsearch/currentCloudSearchServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category cloudsearch service config
 */
export const withCloudSearchServiceConfig: {
  (config: CloudSearchService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudSearchService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudSearchService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentCloudSearchServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudsearch service config
 */
export const setCloudSearchServiceConfig = (config: CloudSearchService.Config) =>
  Layer.succeed(currentCloudSearchServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudSearchClientConfig: Effect.Effect<CloudSearchClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentCloudSearchServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
