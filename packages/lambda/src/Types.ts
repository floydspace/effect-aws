/**
 * @since 1.0.0
 */
import type {
  ALBEvent,
  ALBResult,
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
  APIGatewayProxyResultV2,
  CloudFrontRequestEvent,
  Context,
  DynamoDBStreamEvent,
  EventBridgeEvent,
  KinesisStreamEvent,
  S3Event,
  SelfManagedKafkaEvent,
  SNSEvent,
  SQSEvent,
} from "aws-lambda";
import { type Layer } from "effect";
import type * as Effect from "effect/Effect";

/**
 * AWS Lambda native handler type.
 *
 * @since 1.0.0
 * @category model
 */
export type Handler<TEvent = unknown, TResult = any> = (
  event: TEvent,
  context: Context,
) => Promise<TResult>;

/**
 * Effectful AWS Lambda handler type.
 *
 * @since 1.0.0
 * @category model
 */
export type EffectHandler<T, R, E = never, A = void> = (
  event: T,
  context: Context,
) => Effect.Effect<A, E, R>;

/**
 * Combined object of an EffectHandler and a global layer.
 *
 * @param {EffectHandler<T, R, E1, A>} handler - The effectful handler function.
 * @param {Layer.Layer<R, E2>} layer - The global layer to provide to the handler.
 *
 * @since 1.0.0
 * @category model
 */
export type EffectHandlerWithLayer<T, R, E1 = never, E2 = never, A = void> = {
  readonly handler: EffectHandler<T, R, E1, A>;
  readonly layer: Layer.Layer<R, E2>;
  readonly memoMap?: Layer.MemoMap;
};

export {
  /**
   * @since 1.4.0
   */
  ALBEvent,
  /**
   * @since 1.4.0
   */
  ALBResult,
  /**
   * @since 1.4.0
   */
  APIGatewayProxyEvent,
  /**
   * @since 1.4.0
   */
  APIGatewayProxyEventV2,
  /**
   * @since 1.4.0
   */
  APIGatewayProxyResult,
  /**
   * @since 1.4.0
   */
  APIGatewayProxyResultV2,
  /**
   * @since 1.4.0
   */
  CloudFrontRequestEvent,
  /**
   * @since 1.4.0
   */
  Context as LambdaContext,
  /**
   * @since 1.4.0
   */
  DynamoDBStreamEvent,
  /**
   * @since 1.4.0
   */
  EventBridgeEvent,
  /**
   * @since 1.4.0
   */
  KinesisStreamEvent,
  /**
   * @since 1.4.0
   */
  S3Event,
  /**
   * @since 1.4.0
   */
  SelfManagedKafkaEvent,
  /**
   * @since 1.4.0
   */
  SNSEvent,
  /**
   * @since 1.4.0
   */
  SQSEvent,
};
