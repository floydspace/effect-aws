/**
 * @since 1.0.0
 */
import { OpenSearchService } from "./OpenSearchService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as OpenSearchClientInstance from "./OpenSearchClientInstance.js";

/**
 * @since 1.0.0
 */
export * as OpenSearchServiceConfig from "./OpenSearchServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./OpenSearchService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias OpenSearchService
 */
export declare namespace OpenSearch {
  /**
   * @since 1.0.0
   * @alias OpenSearchService.Config
   */
  export type Config = OpenSearchService.Config;

  /**
   * @since 1.0.0
   * @alias OpenSearchService.Type
   */
  export type Type = OpenSearchService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias OpenSearchService
 */
export const OpenSearch = OpenSearchService;
