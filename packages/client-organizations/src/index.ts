/**
 * @since 1.0.0
 */
import { OrganizationsService } from "./OrganizationsService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-organizations";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as OrganizationsClientInstance from "./OrganizationsClientInstance.js";

/**
 * @since 1.0.0
 */
export * as OrganizationsServiceConfig from "./OrganizationsServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./OrganizationsService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias OrganizationsService
 */
export declare namespace Organizations {
  /**
   * @since 1.0.0
   * @alias OrganizationsService.Config
   */
  export type Config = OrganizationsService.Config;

  /**
   * @since 1.0.0
   * @alias OrganizationsService.Type
   */
  export type Type = OrganizationsService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias OrganizationsService
 */
export const Organizations = OrganizationsService;
