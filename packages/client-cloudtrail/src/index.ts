/**
 * @since 1.0.0
 */
import { CloudTrailService } from "./CloudTrailService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-cloudtrail";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CloudTrailClientInstance from "./CloudTrailClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CloudTrailServiceConfig from "./CloudTrailServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CloudTrailService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudTrailService
 */
export declare namespace CloudTrail {
  /**
   * @since 1.0.0
   * @alias CloudTrailService.Config
   */
  export type Config = CloudTrailService.Config;

  /**
   * @since 1.0.0
   * @alias CloudTrailService.Type
   */
  export type Type = CloudTrailService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudTrailService
 */
export const CloudTrail = CloudTrailService;
