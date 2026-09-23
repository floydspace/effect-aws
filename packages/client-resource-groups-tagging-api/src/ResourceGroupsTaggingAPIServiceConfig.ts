/**
 * @since 1.0.0
 */
import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import type { ResourceGroupsTaggingAPIService } from "./ResourceGroupsTaggingAPIService.js";

/**
 * @since 1.0.0
 * @category resource-groups-tagging-api service config
 */
const currentResourceGroupsTaggingAPIServiceConfig = Context.Reference<ResourceGroupsTaggingAPIService.Config>(
  "@effect-aws/client-resource-groups-tagging-api/currentResourceGroupsTaggingAPIServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category resource-groups-tagging-api service config
 */
export const withResourceGroupsTaggingAPIServiceConfig: {
  (config: ResourceGroupsTaggingAPIService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ResourceGroupsTaggingAPIService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ResourceGroupsTaggingAPIService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentResourceGroupsTaggingAPIServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category resource-groups-tagging-api service config
 */
export const setResourceGroupsTaggingAPIServiceConfig = (config: ResourceGroupsTaggingAPIService.Config) =>
  Layer.succeed(currentResourceGroupsTaggingAPIServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toResourceGroupsTaggingAPIClientConfig: Effect.Effect<ResourceGroupsTaggingAPIClientConfig> = Effect.gen(
  function*() {
    const { logger: serviceLogger, ...config } = yield* currentResourceGroupsTaggingAPIServiceConfig;

    const logger = serviceLogger === true
      ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
      : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

    return { logger, ...config };
  },
);
