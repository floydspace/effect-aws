/**
 * @since 1.0.0
 */
import { IoTEventsDataService } from "./IoTEventsDataService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IoTEventsDataClientInstance from "./IoTEventsDataClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IoTEventsDataServiceConfig from "./IoTEventsDataServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IoTEventsDataService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTEventsDataService
 */
export declare namespace IoTEventsData {
  /**
   * @since 1.0.0
   * @alias IoTEventsDataService.Config
   */
  export type Config = IoTEventsDataService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTEventsDataService
 */
export const IoTEventsData = IoTEventsDataService;
