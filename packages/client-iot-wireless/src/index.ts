/**
 * @since 1.0.0
 */
import { IoTWirelessService } from "./IoTWirelessService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-iot-wireless";

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

  /**
   * @since 1.0.0
   * @alias IoTWirelessService.Type
   */
  export type Type = IoTWirelessService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTWirelessService
 */
export const IoTWireless = IoTWirelessService;
