/**
 * @since 1.0.0
 */
import { ElastiCacheClient } from "@aws-sdk/client-elasticache";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as ElastiCacheServiceConfig from "./ElastiCacheServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ElastiCacheClientInstance extends ServiceMap.Service<ElastiCacheClientInstance, ElastiCacheClient>()(
  "@effect-aws/client-elasticache/ElastiCacheClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  ElastiCacheServiceConfig.toElastiCacheClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new ElastiCacheClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(ElastiCacheClientInstance, make);
