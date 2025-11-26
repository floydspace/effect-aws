/**
 * @since 1.0.0
 */
import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { DataPipelineService } from "./DataPipelineService.js";

/**
 * @since 1.0.0
 * @category data-pipeline service config
 */
const currentDataPipelineServiceConfig = globalValue(
  "@effect-aws/client-data-pipeline/currentDataPipelineServiceConfig",
  () => FiberRef.unsafeMake<DataPipelineService.Config>({}),
);

/**
 * @since 1.0.0
 * @category data-pipeline service config
 */
export const withDataPipelineServiceConfig: {
  (config: DataPipelineService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DataPipelineService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DataPipelineService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentDataPipelineServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category data-pipeline service config
 */
export const setDataPipelineServiceConfig = (config: DataPipelineService.Config) =>
  Layer.locallyScoped(currentDataPipelineServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toDataPipelineClientConfig: Effect.Effect<DataPipelineClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentDataPipelineServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
