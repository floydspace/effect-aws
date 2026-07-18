/**
 * @since 1.0.0
 */
import { BedrockAgentCoreService } from "./BedrockAgentCoreService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as BedrockAgentCoreClientInstance from "./BedrockAgentCoreClientInstance.js";

/**
 * @since 1.0.0
 */
export * as BedrockAgentCoreServiceConfig from "./BedrockAgentCoreServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./BedrockAgentCoreService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockAgentCoreService
 */
export declare namespace BedrockAgentCore {
  /**
   * @since 1.0.0
   * @alias BedrockAgentCoreService.Config
   */
  export type Config = BedrockAgentCoreService.Config;

  /**
   * @since 1.0.0
   * @alias BedrockAgentCoreService.Type
   */
  export type Type = BedrockAgentCoreService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias BedrockAgentCoreService
 */
export const BedrockAgentCore = BedrockAgentCoreService;
