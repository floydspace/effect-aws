/**
 * @since 1.0.0
 */
import { OpenSearchServerlessService } from "./OpenSearchServerlessService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-opensearchserverless";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as OpenSearchServerlessClientInstance from "./OpenSearchServerlessClientInstance.js";

/**
 * @since 1.0.0
 */
export * as OpenSearchServerlessServiceConfig from "./OpenSearchServerlessServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./OpenSearchServerlessService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias OpenSearchServerlessService
 */
export declare namespace OpenSearchServerless {
  /**
   * @since 1.0.0
   * @alias OpenSearchServerlessService.Config
   */
  export type Config = OpenSearchServerlessService.Config;

  /**
   * @since 1.0.0
   * @alias OpenSearchServerlessService.Type
   */
  export type Type = OpenSearchServerlessService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias OpenSearchServerlessService
 */
export const OpenSearchServerless = OpenSearchServerlessService;
