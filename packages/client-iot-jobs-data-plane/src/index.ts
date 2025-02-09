/**
 * @since 1.0.0
 */
import { IoTJobsDataPlaneService } from "./IoTJobsDataPlaneService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as IoTJobsDataPlaneClientInstance from "./IoTJobsDataPlaneClientInstance.js";

/**
 * @since 1.0.0
 */
export * as IoTJobsDataPlaneServiceConfig from "./IoTJobsDataPlaneServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./IoTJobsDataPlaneService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTJobsDataPlaneService
 */
export declare namespace IoTJobsDataPlane {
  /**
   * @since 1.0.0
   * @alias IoTJobsDataPlaneService.Config
   */
  export type Config = IoTJobsDataPlaneService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias IoTJobsDataPlaneService
 */
export const IoTJobsDataPlane = IoTJobsDataPlaneService;
