/**
 * @since 1.0.0
 */
import { SESv2Service } from "./SESv2Service.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-sesv2";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SESv2ClientInstance from "./SESv2ClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SESv2ServiceConfig from "./SESv2ServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SESv2Service.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SESv2Service
 */
export declare namespace SESv2 {
  /**
   * @since 1.0.0
   * @alias SESv2Service.Config
   */
  export type Config = SESv2Service.Config;

  /**
   * @since 1.0.0
   * @alias SESv2Service.Type
   */
  export type Type = SESv2Service.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SESv2Service
 */
export const SESv2 = SESv2Service;
