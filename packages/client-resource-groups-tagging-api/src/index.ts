/**
 * @since 1.0.0
 */
import { ResourceGroupsTaggingAPIService } from "./ResourceGroupsTaggingAPIService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-resource-groups-tagging-api";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as ResourceGroupsTaggingAPIClientInstance from "./ResourceGroupsTaggingAPIClientInstance.js";

/**
 * @since 1.0.0
 */
export * as ResourceGroupsTaggingAPIServiceConfig from "./ResourceGroupsTaggingAPIServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./ResourceGroupsTaggingAPIService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias ResourceGroupsTaggingAPIService
 */
export declare namespace ResourceGroupsTaggingAPI {
  /**
   * @since 1.0.0
   * @alias ResourceGroupsTaggingAPIService.Config
   */
  export type Config = ResourceGroupsTaggingAPIService.Config;

  /**
   * @since 1.0.0
   * @alias ResourceGroupsTaggingAPIService.Type
   */
  export type Type = ResourceGroupsTaggingAPIService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias ResourceGroupsTaggingAPIService
 */
export const ResourceGroupsTaggingAPI = ResourceGroupsTaggingAPIService;
