/**
 * @since 1.0.0
 */
import { TimestreamQueryService } from "./TimestreamQueryService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as TimestreamQueryClientInstance from "./TimestreamQueryClientInstance.js";

/**
 * @since 1.0.0
 */
export * as TimestreamQueryServiceConfig from "./TimestreamQueryServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./TimestreamQueryService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias TimestreamQueryService
 */
export declare namespace TimestreamQuery {
  /**
   * @since 1.0.0
   * @alias TimestreamQueryService.Config
   */
  export type Config = TimestreamQueryService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias TimestreamQueryService
 */
export const TimestreamQuery = TimestreamQueryService;
