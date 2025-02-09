/**
 * @since 1.0.0
 */
import { IoTService } from "./IoTService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IoTClientInstance from "./IoTClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IoTServiceConfig from "./IoTServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IoTService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTService
 */
export declare namespace IoT {
  /**
   * @since 1.0.0
   * @alias IoTService.Config
   */
  export type Config = IoTService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTService
 */
export const IoT = IoTService;
