/**
 * @since 1.0.0
 */
import { AthenaService } from "./AthenaService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as AthenaClientInstance from "./AthenaClientInstance.js";

/**
 * @since 1.0.0
 */
export * as AthenaServiceConfig from "./AthenaServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./AthenaService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias AthenaService
 */
export declare namespace Athena {
  /**
   * @since 1.0.0
   * @alias AthenaService.Config
   */
  export type Config = AthenaService.Config;

  /**
   * @since 1.0.0
   * @alias AthenaService.Type
   */
  export type Type = AthenaService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias AthenaService
 */
export const Athena = AthenaService;
