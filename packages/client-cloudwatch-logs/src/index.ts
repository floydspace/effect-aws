/**
 * @since 1.0.0
 */
import { CloudWatchLogsService } from "./CloudWatchLogsService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CloudWatchLogsClientInstance from "./CloudWatchLogsClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CloudWatchLogsServiceConfig from "./CloudWatchLogsServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CloudWatchLogsService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudWatchLogsService
 */
export declare namespace CloudWatchLogs {
  /**
   * @since 1.0.0
   * @alias CloudWatchLogsService.Config
   */
  export type Config = CloudWatchLogsService.Config;

  /**
   * @since 1.0.0
   * @alias CloudWatchLogsService.Type
   */
  export type Type = CloudWatchLogsService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudWatchLogsService
 */
export const CloudWatchLogs = CloudWatchLogsService;
