/**
 * @since 1.0.0
 */
import { IvsService } from "./IvsService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IvsClientInstance from "./IvsClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IvsServiceConfig from "./IvsServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IvsService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IvsService
 */
export declare namespace Ivs {
  /**
   * @since 1.0.0
   * @alias IvsService.Config
   */
  export type Config = IvsService.Config;

  /**
   * @since 1.0.0
   * @alias IvsService.Type
   */
  export type Type = IvsService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IvsService
 */
export const Ivs = IvsService;
