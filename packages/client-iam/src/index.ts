/**
 * @since 1.0.0
 */
import { IAMService } from "./IAMService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-iam";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IAMClientInstance from "./IAMClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IAMServiceConfig from "./IAMServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IAMService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IAMService
 */
export declare namespace IAM {
  /**
   * @since 1.0.0
   * @alias IAMService.Config
   */
  export type Config = IAMService.Config;

  /**
   * @since 1.0.0
   * @alias IAMService.Type
   */
  export type Type = IAMService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IAMService
 */
export const IAM = IAMService;
