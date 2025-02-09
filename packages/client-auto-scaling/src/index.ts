/**
 * @since 1.0.0
 */
import { AutoScalingService } from "./AutoScalingService.js";

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
}

/**
 * @since 1.0.0
 * @category exports
 * @alias AutoScalingService
 */
export const AutoScaling = AutoScalingService;
