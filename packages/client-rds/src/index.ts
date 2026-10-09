/**
 * @since 1.0.0
 */
import { RDSService } from "./RDSService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-rds";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as RDSClientInstance from "./RDSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as RDSServiceConfig from "./RDSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./RDSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias RDSService
 */
export declare namespace RDS {
  /**
   * @since 1.0.0
   * @alias RDSService.Config
   */
  export type Config = RDSService.Config;

  /**
   * @since 1.0.0
   * @alias RDSService.Type
   */
  export type Type = RDSService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias RDSService
 */
export const RDS = RDSService;
