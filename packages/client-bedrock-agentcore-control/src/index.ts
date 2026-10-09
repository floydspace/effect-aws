/**
 * @since 1.0.0
 */
import { BedrockAgentCoreControlService } from "./BedrockAgentCoreControlService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-bedrock-agentcore-control";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as BedrockAgentCoreControlClientInstance from "./BedrockAgentCoreControlClientInstance.js";

/**
 * @since 1.0.0
 */
export * as BedrockAgentCoreControlServiceConfig from "./BedrockAgentCoreControlServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./BedrockAgentCoreControlService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockAgentCoreControlService
 */
export declare namespace BedrockAgentCoreControl {
  /**
   * @since 1.0.0
   * @alias BedrockAgentCoreControlService.Config
   */
  export type Config = BedrockAgentCoreControlService.Config;

  /**
   * @since 1.0.0
   * @alias BedrockAgentCoreControlService.Type
   */
  export type Type = BedrockAgentCoreControlService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockAgentCoreControlService
 */
export const BedrockAgentCoreControl = BedrockAgentCoreControlService;
