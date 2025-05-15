/**
 * @since 1.0.0
 */
import { STSService } from "./STSService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as STSClientInstance from "./STSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as STSServiceConfig from "./STSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./STSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias STSService
 */
export declare namespace STS {
  /**
   * @since 1.0.0
   * @alias STSService.Config
   */
  export type Config = STSService.Config;

  /**
   * @since 1.0.0
   * @alias STSService.Type
   */
  export type Type = STSService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias STSService
 */
export const STS = STSService;
