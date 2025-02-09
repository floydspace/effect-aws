/**
 * @since 1.0.0
 */
import { MqService } from "./MqService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as MqClientInstance from "./MqClientInstance.js";

/**
 * @since 1.0.0
 */
export * as MqServiceConfig from "./MqServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./MqService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias MqService
 */
export declare namespace Mq {
  /**
   * @since 1.0.0
   * @alias MqService.Config
   */
  export type Config = MqService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias MqService
 */
export const Mq = MqService;
