/**
 * @since 1.0.0
 */
import { DynamoDBDocumentService } from "./DynamoDBDocumentService.js";

/**
 * @since 1.0.0
 */
export * as DynamoDBDocumentClientInstance from "./DynamoDBDocumentClientInstance.js";

/**
 * @since 1.0.0
 */
export * as DynamoDBDocumentServiceConfig from "./DynamoDBDocumentServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./DynamoDBDocumentService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias DynamoDBDocumentService
 */
export declare namespace DynamoDBDocument {
  /**
   * @since 1.0.0
   * @alias DynamoDBDocumentService.Config
   */
  export type Config = DynamoDBDocumentService.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias DynamoDBDocumentService
 */
export const DynamoDBDocument = DynamoDBDocumentService;
