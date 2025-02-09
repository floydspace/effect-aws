/**
 * @since 1.0.0
 */
import { SecretsManagerService } from "./SecretsManagerService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SecretsManagerClientInstance from "./SecretsManagerClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SecretsManagerServiceConfig from "./SecretsManagerServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SecretsManagerService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SecretsManagerService
 */
export declare namespace SecretsManager {
  /**
   * @since 1.0.0
   * @alias SecretsManagerService.Config
   */
  export type Config = SecretsManagerService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SecretsManagerService
 */
export const SecretsManager = SecretsManagerService;
