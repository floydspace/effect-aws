/**
 * @since 1.0.0
 */
import { AccountService } from "./AccountService.js";

/**
 * @since 1.0.0
 */
export * as AccountClientInstance from "./AccountClientInstance.js";

/**
 * @since 1.0.0
 */
export * as AccountServiceConfig from "./AccountServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./AccountService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias AccountService
 */
export declare namespace Account {
  /**
   * @since 1.0.0
   * @alias AccountService.Config
   */
  export type Config = AccountService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias AccountService
 */
export const Account = AccountService;
