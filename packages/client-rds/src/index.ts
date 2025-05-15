/**
 * @since 1.0.0
 */
import { RDSService } from "./RDSService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as RDSClientInstance from "./RDSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as RDSServiceConfig from "./RDSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./RDSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias RDSService
 */
export declare namespace RDS {
  /**
   * @since 1.0.0
   * @alias RDSService.Config
   */
  export type Config = RDSService.Config;

  /**
   * @since 1.0.0
   * @alias RDSService.Type
   */
  export type Type = RDSService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias RDSService
 */
export const RDS = RDSService;
