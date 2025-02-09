/**
 * @since 1.0.0
 */
import { SSMService } from "./SSMService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SSMClientInstance from "./SSMClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SSMServiceConfig from "./SSMServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SSMService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SSMService
 */
export declare namespace SSM {
  /**
   * @since 1.0.0
   * @alias SSMService.Config
   */
  export type Config = SSMService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SSMService
 */
export const SSM = SSMService;
