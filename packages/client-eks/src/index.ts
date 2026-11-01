/**
 * @since 1.0.0
 */
import { EKSService } from "./EKSService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-eks";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as EKSClientInstance from "./EKSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as EKSServiceConfig from "./EKSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./EKSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias EKSService
 */
export declare namespace EKS {
  /**
   * @since 1.0.0
   * @alias EKSService.Config
   */
  export type Config = EKSService.Config;

  /**
   * @since 1.0.0
   * @alias EKSService.Type
   */
  export type Type = EKSService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias EKSService
 */
export const EKS = EKSService;
