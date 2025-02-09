/**
 * @since 1.0.0
 */
import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { OpenSearchServerlessService } from "./OpenSearchServerlessService.js";

/**
 * @since 1.0.0
 * @category opensearch-serverless service config
 */
const currentOpenSearchServerlessServiceConfig = globalValue(
  "@effect-aws/client-opensearch-serverless/currentOpenSearchServerlessServiceConfig",
  () => FiberRef.unsafeMake<OpenSearchServerlessService.Config>({}),
);

/**
 * @since 1.0.0
 * @category opensearch-serverless service config
 */
export const withOpenSearchServerlessServiceConfig: {
  (config: OpenSearchServerlessService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: OpenSearchServerlessService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: OpenSearchServerlessService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentOpenSearchServerlessServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category opensearch-serverless service config
 */
export const setOpenSearchServerlessServiceConfig = (config: OpenSearchServerlessService.Config) =>
  Layer.locallyScoped(currentOpenSearchServerlessServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toOpenSearchServerlessClientConfig: Effect.Effect<OpenSearchServerlessClientConfig> = Effect.gen(
  function*() {
    const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentOpenSearchServerlessServiceConfig);

    const logger = serviceLogger === true
      ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
      : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

    return { logger, ...config };
  },
);
