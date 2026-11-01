/**
 * @since 1.0.0
 */
import { GlueService } from "./GlueService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-glue";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as GlueClientInstance from "./GlueClientInstance.js";

/**
 * @since 1.0.0
 */
export * as GlueServiceConfig from "./GlueServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./GlueService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias GlueService
 */
export declare namespace Glue {
  /**
   * @since 1.0.0
   * @alias GlueService.Config
   */
  export type Config = GlueService.Config;

  /**
   * @since 1.0.0
   * @alias GlueService.Type
   */
  export type Type = GlueService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias GlueService
 */
export const Glue = GlueService;
