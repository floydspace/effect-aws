/**
 * @since 1.0.0
 */
import { ECRService } from "./ECRService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as ECRClientInstance from "./ECRClientInstance.js";

/**
 * @since 1.0.0
 */
export * as ECRServiceConfig from "./ECRServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./ECRService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias ECRService
 */
export declare namespace ECR {
  /**
   * @since 1.0.0
   * @alias ECRService.Config
   */
  export type Config = ECRService.Config;

  /**
   * @since 1.0.0
   * @alias ECRService.Type
   */
  export type Type = ECRService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias ECRService
 */
export const ECR = ECRService;
