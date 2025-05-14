/**
 * @since 1.0.0
 */
import { CloudWatchService } from "./CloudWatchService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CloudWatchClientInstance from "./CloudWatchClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CloudWatchServiceConfig from "./CloudWatchServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CloudWatchService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudWatchService
 */
export declare namespace CloudWatch {
  /**
   * @since 1.0.0
   * @alias CloudWatchService.Config
   */
  export type Config = CloudWatchService.Config;

  /**
   * @since 1.0.0
   * @alias CloudWatchService.Type
   */
  export type Type = CloudWatchService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudWatchService
 */
export const CloudWatch = CloudWatchService;
