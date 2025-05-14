/**
 * @since 1.0.0
 */
import { KinesisService } from "./KinesisService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as KinesisClientInstance from "./KinesisClientInstance.js";

/**
 * @since 1.0.0
 */
export * as KinesisServiceConfig from "./KinesisServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./KinesisService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias KinesisService
 */
export declare namespace Kinesis {
  /**
   * @since 1.0.0
   * @alias KinesisService.Config
   */
  export type Config = KinesisService.Config;

  /**
   * @since 1.0.0
   * @alias KinesisService.Type
   */
  export type Type = KinesisService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias KinesisService
 */
export const Kinesis = KinesisService;
