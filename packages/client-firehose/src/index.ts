/**
 * @since 1.0.0
 */
import { FirehoseService } from "./FirehoseService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as FirehoseClientInstance from "./FirehoseClientInstance.js";

/**
 * @since 1.0.0
 */
export * as FirehoseServiceConfig from "./FirehoseServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./FirehoseService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias FirehoseService
 */
export declare namespace Firehose {
  /**
   * @since 1.0.0
   * @alias FirehoseService.Config
   */
  export type Config = FirehoseService.Config;

  /**
   * @since 1.0.0
   * @alias FirehoseService.Type
   */
  export type Type = FirehoseService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias FirehoseService
 */
export const Firehose = FirehoseService;
