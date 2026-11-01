/**
 * @since 1.0.0
 */
import { AccountService } from "./AccountService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-account";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

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
 * @category exports
 * @alias AccountService
 */
export declare namespace Account {
  /**
   * @since 1.0.0
   * @alias AccountService.Config
   */
  export type Config = AccountService.Config;

  /**
   * @since 1.0.0
   * @alias AccountService.Type
   */
  export type Type = AccountService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias AccountService
 */
export const Account = AccountService;
