/**
 * @since 1.0.0
 */
import { ElastiCacheClient } from "@aws-sdk/client-elasticache";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultElastiCacheClientConfigLayer,
  ElastiCacheClientInstanceConfig,
} from "./ElastiCacheClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class ElastiCacheClientInstance extends Context.Tag(
  "@effect-aws/client-elasticache/ElastiCacheClientInstance",
)<ElastiCacheClientInstance, ElastiCacheClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeElastiCacheClientInstance = Effect.flatMap(
  ElastiCacheClientInstanceConfig,
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
export const ElastiCacheClientInstanceLayer = Layer.scoped(
  ElastiCacheClientInstance,
  makeElastiCacheClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultElastiCacheClientInstanceLayer =
  ElastiCacheClientInstanceLayer.pipe(
    Layer.provide(DefaultElastiCacheClientConfigLayer),
  );
