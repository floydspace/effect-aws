/**
 * @since 1.0.0
 */
import { SNSService } from "./SNSService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SNSClientInstance from "./SNSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SNSServiceConfig from "./SNSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SNSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SNSService
 */
export declare namespace SNS {
  /**
   * @since 1.0.0
   * @alias SNSService.Config
   */
  export type Config = SNSService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SNSService
 */
export const SNS = SNSService;
