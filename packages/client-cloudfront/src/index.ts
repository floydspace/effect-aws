/**
 * @since 1.0.0
 */
import { CloudFrontService } from "./CloudFrontService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CloudFrontClientInstance from "./CloudFrontClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CloudFrontServiceConfig from "./CloudFrontServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CloudFrontService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudFrontService
 */
export declare namespace CloudFront {
  /**
   * @since 1.0.0
   * @alias CloudFrontService.Config
   */
  export type Config = CloudFrontService.Config;

  /**
   * @since 1.0.0
   * @alias CloudFrontService.Type
   */
  export type Type = CloudFrontService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudFrontService
 */
export const CloudFront = CloudFrontService;
