/**
 * Amazon Bedrock error metadata augmentation.
 *
 * Adds a `bedrock` field to the metadata of every `AiError` reason that the
 * provider can produce, so the original Bedrock error details are typed.
 *
 * @since 0.1.0
 * @stability unstable
 */

/**
 * Amazon Bedrock details copied from the AWS SDK error.
 *
 * **Details**
 *
 * Each field is `null` when the error doesn't carry it, for example a network
 * failure that never reached Bedrock has no request ID or HTTP status.
 *
 * @since 0.1.0
 * @stability unstable
 * @category models
 */
export type AmazonBedrockErrorMetadata = {
  /**
   * The AWS SDK error name, such as `ThrottlingException` or
   * `ValidationException`.
   */
  readonly errorType: string | null;
  /**
   * The AWS request ID, for debugging with AWS Support.
   */
  readonly requestId: string | null;
  /**
   * The HTTP status code of the Bedrock response.
   */
  readonly httpStatusCode: number | null;
};

declare module "effect/ai/AiError" {
  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface RateLimitErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface QuotaExhaustedErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface AuthenticationErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface ContentPolicyErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface InvalidRequestErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface InvalidResponseErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface InternalProviderErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface InvalidOutputErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface StructuredOutputErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface UnsupportedSchemaErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }

  /**
   * @since 0.1.0
   * @stability unstable
   */
  export interface UnknownErrorMetadata {
    readonly bedrock?: AmazonBedrockErrorMetadata | null;
  }
}
