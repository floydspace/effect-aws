/**
 * @since 1.0.0
 */
import { IoTDataPlaneService } from "./IoTDataPlaneService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-iot-data-plane";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IoTDataPlaneClientInstance from "./IoTDataPlaneClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IoTDataPlaneServiceConfig from "./IoTDataPlaneServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IoTDataPlaneService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTDataPlaneService
 */
export declare namespace IoTDataPlane {
  /**
   * @since 1.0.0
   * @alias IoTDataPlaneService.Config
   */
  export type Config = IoTDataPlaneService.Config;

  /**
   * @since 1.0.0
   * @alias IoTDataPlaneService.Type
   */
  export type Type = IoTDataPlaneService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTDataPlaneService
 */
export const IoTDataPlane = IoTDataPlaneService;
