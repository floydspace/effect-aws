/**
 * @since 1.0.0
 */
import { SFNService } from "./SFNService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-sfn";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SFNClientInstance from "./SFNClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SFNServiceConfig from "./SFNServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SFNService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SFNService
 */
export declare namespace SFN {
  /**
   * @since 1.0.0
   * @alias SFNService.Config
   */
  export type Config = SFNService.Config;

  /**
   * @since 1.0.0
   * @alias SFNService.Type
   */
  export type Type = SFNService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SFNService
 */
export const SFN = SFNService;
