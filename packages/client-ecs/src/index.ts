/**
 * @since 1.0.0
 */
import { ECSService } from "./ECSService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as ECSClientInstance from "./ECSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as ECSServiceConfig from "./ECSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./ECSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias ECSService
 */
export declare namespace ECS {
  /**
   * @since 1.0.0
   * @alias ECSService.Config
   */
  export type Config = ECSService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias ECSService
 */
export const ECS = ECSService;
