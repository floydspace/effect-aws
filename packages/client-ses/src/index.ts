/**
 * @since 1.0.0
 */
import { SESService } from "./SESService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SESClientInstance from "./SESClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SESServiceConfig from "./SESServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SESService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SESService
 */
export declare namespace SES {
  /**
   * @since 1.0.0
   * @alias SESService.Config
   */
  export type Config = SESService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SESService
 */
export const SES = SESService;
