/**
 * @since 1.0.0
 */
import { KafkaConnectService } from "./KafkaConnectService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as KafkaConnectClientInstance from "./KafkaConnectClientInstance.js";

/**
 * @since 1.0.0
 */
export * as KafkaConnectServiceConfig from "./KafkaConnectServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./KafkaConnectService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias KafkaConnectService
 */
export declare namespace KafkaConnect {
  /**
   * @since 1.0.0
   * @alias KafkaConnectService.Config
   */
  export type Config = KafkaConnectService.Config;

  /**
   * @since 1.0.0
   * @alias KafkaConnectService.Type
   */
  export type Type = KafkaConnectService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias KafkaConnectService
 */
export const KafkaConnect = KafkaConnectService;
