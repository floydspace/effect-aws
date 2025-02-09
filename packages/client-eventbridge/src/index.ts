/**
 * @since 1.0.0
 */
import { EventBridgeService } from "./EventBridgeService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as EventBridgeClientInstance from "./EventBridgeClientInstance.js";

/**
 * @since 1.0.0
 */
export * as EventBridgeServiceConfig from "./EventBridgeServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./EventBridgeService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias EventBridgeService
 */
export declare namespace EventBridge {
  /**
   * @since 1.0.0
   * @alias EventBridgeService.Config
   */
  export type Config = EventBridgeService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias EventBridgeService
 */
export const EventBridge = EventBridgeService;
