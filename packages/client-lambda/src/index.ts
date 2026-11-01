/**
 * @since 1.0.0
 */
import { LambdaService } from "./LambdaService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-lambda";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as LambdaClientInstance from "./LambdaClientInstance.js";

/**
 * @since 1.0.0
 */
export * as LambdaServiceConfig from "./LambdaServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./LambdaService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias LambdaService
 */
export declare namespace Lambda {
  /**
   * @since 1.0.0
   * @alias LambdaService.Config
   */
  export type Config = LambdaService.Config;

  /**
   * @since 1.0.0
   * @alias LambdaService.Type
   */
  export type Type = LambdaService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias LambdaService
 */
export const Lambda = LambdaService;
