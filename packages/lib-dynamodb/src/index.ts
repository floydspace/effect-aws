/**
 * Re-exporting everything except the `DynamoDBStore` from the `@effect-aws/dynamodb` package
 * for backward compatibility.
 *
 * @since 1.0.0
 */
export {
  /**
   * @since 1.0.0
   */
  DynamoDBDocumentService as DynamoDBDocument,
} from "@effect-aws/dynamodb/DynamoDBDocumentService";

export {
  /**
   * @since 1.0.0
   */
  DynamoDBDocumentService,
  /**
   * @since 1.0.0
   */
  makeDynamoDBDocumentService,
} from "@effect-aws/dynamodb/DynamoDBDocumentService";

export {
  /**
   * @since 1.0.0
   */
  DynamoDBDocumentClientInstance,
} from "@effect-aws/dynamodb/DynamoDBDocumentClientInstance";

/**
 * @since 1.0.0
 */
export * as DynamoDBDocumentServiceConfig from "@effect-aws/dynamodb/DynamoDBDocumentServiceConfig";
