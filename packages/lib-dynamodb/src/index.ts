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
  DynamoDBDocument,
  /**
   * @since 1.0.0
   */
  DynamoDBDocumentClientInstance,
  /**
   * @since 1.0.0
   */
  DynamoDBDocumentService,
  /**
   * @since 1.0.0
   */
  DynamoDBDocumentServiceConfig,
  /**
   * @since 1.0.0
   */
  makeDynamoDBDocumentService,
} from "@effect-aws/dynamodb";
