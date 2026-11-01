/**
 * @since 1.0.0
 */
import { AutoScalingService } from "./AutoScalingService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-auto-scaling";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as AutoScalingClientInstance from "./AutoScalingClientInstance.js";

/**
 * @since 1.0.0
 */
export * as AutoScalingServiceConfig from "./AutoScalingServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./AutoScalingService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias AutoScalingService
 */
export declare namespace AutoScaling {
  /**
   * @since 1.0.0
   * @alias AutoScalingService.Config
   */
  export type Config = AutoScalingService.Config;

  /**
   * @since 1.0.0
   * @alias AutoScalingService.Type
   */
  export type Type = AutoScalingService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias AutoScalingService
 */
export const AutoScaling = AutoScalingService;
