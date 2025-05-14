/**
 * @since 1.0.0
 */
import { CloudSearchService } from "./CloudSearchService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CloudSearchClientInstance from "./CloudSearchClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CloudSearchServiceConfig from "./CloudSearchServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CloudSearchService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudSearchService
 */
export declare namespace CloudSearch {
  /**
   * @since 1.0.0
   * @alias CloudSearchService.Config
   */
  export type Config = CloudSearchService.Config;

  /**
   * @since 1.0.0
   * @alias CloudSearchService.Type
   */
  export type Type = CloudSearchService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudSearchService
 */
export const CloudSearch = CloudSearchService;
