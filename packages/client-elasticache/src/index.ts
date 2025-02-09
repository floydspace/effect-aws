/**
 * @since 1.0.0
 */
import { ElastiCacheService } from "./ElastiCacheService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as ElastiCacheClientInstance from "./ElastiCacheClientInstance.js";

/**
 * @since 1.0.0
 */
export * as ElastiCacheServiceConfig from "./ElastiCacheServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./ElastiCacheService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias ElastiCacheService
 */
export declare namespace ElastiCache {
  /**
   * @since 1.0.0
   * @alias ElastiCacheService.Config
   */
  export type Config = ElastiCacheService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias ElastiCacheService
 */
export const ElastiCache = ElastiCacheService;
