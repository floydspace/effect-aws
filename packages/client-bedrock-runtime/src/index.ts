/**
 * @since 1.0.0
 */
import { BedrockRuntimeService } from "./BedrockRuntimeService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-bedrock-runtime";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as BedrockRuntimeClientInstance from "./BedrockRuntimeClientInstance.js";

/**
 * @since 1.0.0
 */
export * as BedrockRuntimeServiceConfig from "./BedrockRuntimeServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./BedrockRuntimeService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockRuntimeService
 */
export declare namespace BedrockRuntime {
  /**
   * @since 1.0.0
   * @alias BedrockRuntimeService.Config
   */
  export type Config = BedrockRuntimeService.Config;

  /**
   * @since 1.0.0
   * @alias BedrockRuntimeService.Type
   */
  export type Type = BedrockRuntimeService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockRuntimeService
 */
export const BedrockRuntime = BedrockRuntimeService;
