/**
 * @since 1.0.0
 */
import { DynamoDBService } from "./DynamoDBService.js";

/**
 * AWS SDK types for this client, including models, command inputs, and command outputs.
 *
 * @since 2.1.0
 * @category types
 */
export type * as Types from "@aws-sdk/client-dynamodb";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as DynamoDBClientInstance from "./DynamoDBClientInstance.js";

/**
 * @since 1.0.0
 */
export * as DynamoDBServiceConfig from "./DynamoDBServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./DynamoDBService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias DynamoDBService
 */
export declare namespace DynamoDB {
  /**
   * @since 1.0.0
   * @alias DynamoDBService.Config
   */
  export type Config = DynamoDBService.Config;

  /**
   * @since 1.0.0
   * @alias DynamoDBService.Type
   */
  export type Type = DynamoDBService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias DynamoDBService
 */
export const DynamoDB = DynamoDBService;
