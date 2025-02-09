/**
 * @since 1.0.0
 */
import { CodeDeployService } from "./CodeDeployService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CodeDeployClientInstance from "./CodeDeployClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CodeDeployServiceConfig from "./CodeDeployServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CodeDeployService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CodeDeployService
 */
export declare namespace CodeDeploy {
  /**
   * @since 1.0.0
   * @alias CodeDeployService.Config
   */
  export type Config = CodeDeployService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CodeDeployService
 */
export const CodeDeploy = CodeDeployService;
