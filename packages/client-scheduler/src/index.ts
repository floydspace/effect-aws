/**
 * @since 1.0.0
 */
import { SchedulerService } from "./SchedulerService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SchedulerClientInstance from "./SchedulerClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SchedulerServiceConfig from "./SchedulerServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SchedulerService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SchedulerService
 */
export declare namespace Scheduler {
  /**
   * @since 1.0.0
   * @alias SchedulerService.Config
   */
  export type Config = SchedulerService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SchedulerService
 */
export const Scheduler = SchedulerService;
