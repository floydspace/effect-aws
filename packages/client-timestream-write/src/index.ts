/**
 * @since 1.0.0
 */
import { TimestreamWriteService } from "./TimestreamWriteService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as TimestreamWriteClientInstance from "./TimestreamWriteClientInstance.js";

/**
 * @since 1.0.0
 */
export * as TimestreamWriteServiceConfig from "./TimestreamWriteServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./TimestreamWriteService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias TimestreamWriteService
 */
export declare namespace TimestreamWrite {
  /**
   * @since 1.0.0
   * @alias TimestreamWriteService.Config
   */
  export type Config = TimestreamWriteService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias TimestreamWriteService
 */
export const TimestreamWrite = TimestreamWriteService;
