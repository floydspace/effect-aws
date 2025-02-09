/**
 * @since 1.0.0
 */
import { TextractService } from "./TextractService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as TextractClientInstance from "./TextractClientInstance.js";

/**
 * @since 1.0.0
 */
export * as TextractServiceConfig from "./TextractServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./TextractService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias TextractService
 */
export declare namespace Textract {
  /**
   * @since 1.0.0
   * @alias TextractService.Config
   */
  export type Config = TextractService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias TextractService
 */
export const Textract = TextractService;
