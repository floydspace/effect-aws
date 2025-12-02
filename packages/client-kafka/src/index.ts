/**
 * @since 1.0.0
 */
import { KafkaService } from "./KafkaService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as KafkaClientInstance from "./KafkaClientInstance.js";

/**
 * @since 1.0.0
 */
export * as KafkaServiceConfig from "./KafkaServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./KafkaService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias KafkaService
 */
export declare namespace Kafka {
  /**
   * @since 1.0.0
   * @alias KafkaService.Config
   */
  export type Config = KafkaService.Config;

  /**
   * @since 1.0.0
   * @alias KafkaService.Type
   */
  export type Type = KafkaService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias KafkaService
 */
export const Kafka = KafkaService;
