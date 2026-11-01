/**
 * @since 1.0.0
 */
import { SQSService } from "./SQSService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-sqs";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as SQSClientInstance from "./SQSClientInstance.js";

/**
 * @since 1.0.0
 */
export * as SQSServiceConfig from "./SQSServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./SQSService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias SQSService
 */
export declare namespace SQS {
  /**
   * @since 1.0.0
   * @alias SQSService.Config
   */
  export type Config = SQSService.Config;

  /**
   * @since 1.0.0
   * @alias SQSService.Type
   */
  export type Type = SQSService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias SQSService
 */
export const SQS = SQSService;
