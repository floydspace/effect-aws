/**
 * @since 1.0.0
 */
import { ECSService } from "./ECSService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-ecs";

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

  /**
   * @since 1.0.0
   * @alias ECSService.Type
   */
  export type Type = ECSService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias ECSService
 */
export const ECS = ECSService;
