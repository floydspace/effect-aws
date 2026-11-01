/**
 * @since 1.0.0
 */
import { BedrockService } from "./BedrockService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-bedrock";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as BedrockClientInstance from "./BedrockClientInstance.js";

/**
 * @since 1.0.0
 */
export * as BedrockServiceConfig from "./BedrockServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./BedrockService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockService
 */
export declare namespace Bedrock {
  /**
   * @since 1.0.0
   * @alias BedrockService.Config
   */
  export type Config = BedrockService.Config;

  /**
   * @since 1.0.0
   * @alias BedrockService.Type
   */
  export type Type = BedrockService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockService
 */
export const Bedrock = BedrockService;
