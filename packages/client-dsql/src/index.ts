/**
 * @since 1.0.0
 */
import { DSQLService } from "./DSQLService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as DSQLClientInstance from "./DSQLClientInstance.js";

/**
 * @since 1.0.0
 */
export * as DSQLServiceConfig from "./DSQLServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./DSQLService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias DSQLService
 */
export declare namespace DSQL {
  /**
   * @since 1.0.0
   * @alias DSQLService.Config
   */
  export type Config = DSQLService.Config;

  /**
   * @since 1.0.0
   * @alias DSQLService.Type
   */
  export type Type = DSQLService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias DSQLService
 */
export const DSQL = DSQLService;
