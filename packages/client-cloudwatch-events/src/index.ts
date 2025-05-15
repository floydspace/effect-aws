/**
 * @since 1.0.0
 */
import { CloudWatchEventsService } from "./CloudWatchEventsService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CloudWatchEventsClientInstance from "./CloudWatchEventsClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CloudWatchEventsServiceConfig from "./CloudWatchEventsServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CloudWatchEventsService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudWatchEventsService
 */
export declare namespace CloudWatchEvents {
  /**
   * @since 1.0.0
   * @alias CloudWatchEventsService.Config
   */
  export type Config = CloudWatchEventsService.Config;

  /**
   * @since 1.0.0
   * @alias CloudWatchEventsService.Type
   */
  export type Type = CloudWatchEventsService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CloudWatchEventsService
 */
export const CloudWatchEvents = CloudWatchEventsService;
