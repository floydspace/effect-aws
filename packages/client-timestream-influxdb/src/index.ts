/**
 * @since 1.0.0
 */
import { TimestreamInfluxDBService } from "./TimestreamInfluxDBService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as TimestreamInfluxDBClientInstance from "./TimestreamInfluxDBClientInstance.js";

/**
 * @since 1.0.0
 */
export * as TimestreamInfluxDBServiceConfig from "./TimestreamInfluxDBServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./TimestreamInfluxDBService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias TimestreamInfluxDBService
 */
export declare namespace TimestreamInfluxDB {
  /**
   * @since 1.0.0
   * @alias TimestreamInfluxDBService.Config
   */
  export type Config = TimestreamInfluxDBService.Config;

  /**
   * @since 1.0.0
   * @alias TimestreamInfluxDBService.Type
   */
  export type Type = TimestreamInfluxDBService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias TimestreamInfluxDBService
 */
export const TimestreamInfluxDB = TimestreamInfluxDBService;
