/**
 * @since 1.0.0
 */
import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { OpenSearchService } from "./OpenSearchService.js";

/**
 * @since 1.0.0
 * @category opensearch service config
 */
const currentOpenSearchServiceConfig = globalValue(
  "@effect-aws/client-opensearch/currentOpenSearchServiceConfig",
  () => FiberRef.unsafeMake<OpenSearchService.Config>({}),
);

/**
 * @since 1.0.0
 * @category opensearch service config
 */
export const withOpenSearchServiceConfig: {
  (config: OpenSearchService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: OpenSearchService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: OpenSearchService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentOpenSearchServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category opensearch service config
 */
export const setOpenSearchServiceConfig = (config: OpenSearchService.Config) =>
  Layer.locallyScoped(currentOpenSearchServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toOpenSearchClientConfig: Effect.Effect<OpenSearchClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentOpenSearchServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
