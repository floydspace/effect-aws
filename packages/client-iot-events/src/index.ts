/**
 * @since 1.0.0
 */
import { IoTEventsService } from "./IoTEventsService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IoTEventsClientInstance from "./IoTEventsClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IoTEventsServiceConfig from "./IoTEventsServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IoTEventsService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTEventsService
 */
export declare namespace IoTEvents {
  /**
   * @since 1.0.0
   * @alias IoTEventsService.Config
   */
  export type Config = IoTEventsService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTEventsService
 */
export const IoTEvents = IoTEventsService;
