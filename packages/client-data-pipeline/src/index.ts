/**
 * @since 1.0.0
 */
import { DataPipelineService } from "./DataPipelineService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-data-pipeline";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as DataPipelineClientInstance from "./DataPipelineClientInstance.js";

/**
 * @since 1.0.0
 */
export * as DataPipelineServiceConfig from "./DataPipelineServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./DataPipelineService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias DataPipelineService
 */
export declare namespace DataPipeline {
  /**
   * @since 1.0.0
   * @alias DataPipelineService.Config
   */
  export type Config = DataPipelineService.Config;

  /**
   * @since 1.0.0
   * @alias DataPipelineService.Type
   */
  export type Type = DataPipelineService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias DataPipelineService
 */
export const DataPipeline = DataPipelineService;
