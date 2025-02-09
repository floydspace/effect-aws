/**
 * @since 1.0.0
 */
import { IoTWirelessService } from "./IoTWirelessService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IoTWirelessClientInstance from "./IoTWirelessClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IoTWirelessServiceConfig from "./IoTWirelessServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IoTWirelessService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTWirelessService
 */
export declare namespace IoTWireless {
  /**
   * @since 1.0.0
   * @alias IoTWirelessService.Config
   */
  export type Config = IoTWirelessService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTWirelessService
 */
export const IoTWireless = IoTWirelessService;
