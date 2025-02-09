/**
 * @since 1.0.0
 */
import { KMSService } from "./KMSService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as KMSClientInstance from "./KMSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as KMSServiceConfig from "./KMSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./KMSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias KMSService
 */
export declare namespace KMS {
  /**
   * @since 1.0.0
   * @alias KMSService.Config
   */
  export type Config = KMSService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias KMSService
 */
export const KMS = KMSService;
