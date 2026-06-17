/**
 * @since 1.0.0
 */
import { BedrockAgentService } from "./BedrockAgentService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as BedrockAgentClientInstance from "./BedrockAgentClientInstance.js";

/**
 * @since 1.0.0
 */
export * as BedrockAgentServiceConfig from "./BedrockAgentServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./BedrockAgentService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockAgentService
 */
export declare namespace BedrockAgent {
  /**
   * @since 1.0.0
   * @alias BedrockAgentService.Config
   */
  export type Config = BedrockAgentService.Config;

  /**
   * @since 1.0.0
   * @alias BedrockAgentService.Type
   */
  export type Type = BedrockAgentService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockAgentService
 */
export const BedrockAgent = BedrockAgentService;
