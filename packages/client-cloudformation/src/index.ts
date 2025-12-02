/**
 * @since 1.0.0
 */
import { CloudFormationService } from "./CloudFormationService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CloudFormationClientInstance from "./CloudFormationClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CloudFormationServiceConfig from "./CloudFormationServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CloudFormationService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudFormationService
 */
export declare namespace CloudFormation {
  /**
   * @since 1.0.0
   * @alias CloudFormationService.Config
   */
  export type Config = CloudFormationService.Config;

  /**
   * @since 1.0.0
   * @alias CloudFormationService.Type
   */
  export type Type = CloudFormationService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudFormationService
 */
export const CloudFormation = CloudFormationService;
