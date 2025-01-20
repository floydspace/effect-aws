import type {
  ALBEvent,
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  CloudFrontRequestEvent,
  DynamoDBStreamEvent,
  EventBridgeEvent,
  KinesisStreamEvent,
  S3Event,
  SelfManagedKafkaEvent,
  SNSEvent,
  SQSEvent,
} from "aws-lambda";
import awsAlbEventSource from "./aws/alb";
import awsApiGatewayV1EventSource from "./aws/api-gateway-v1";
import awsApiGatewayV2EventSource from "./aws/api-gateway-v2";
import awsDynamoDbEventSource from "./aws/dynamodb";
import awsEventBridgeEventSource from "./aws/eventbridge";
import awsKinesisEventSource from "./aws/kinesis";
import awsLambdaEdgeEventSource from "./aws/lambda-edge";
import awsS3 from "./aws/s3";
import awsSelfManagedKafkaEventSource from "./aws/self-managed-kafka";
import awsSnsEventSource from "./aws/sns";
import awsSqsEventSource from "./aws/sqs";
import awsStepFunctionsEventSource from "./aws/step-functions";
import type {
  BatchLikeEvent,
  EventSource,
  StepFunctionsLikeEvent,
} from "./types";

export type AnyEvent = ALBEvent &
  APIGatewayProxyEvent &
  APIGatewayProxyEventV2 &
  BatchLikeEvent &
  EventBridgeEvent<string, unknown> &
  DynamoDBStreamEvent &
  KinesisStreamEvent &
  S3Event &
  SelfManagedKafkaEvent &
  SNSEvent &
  SQSEvent &
  CloudFrontRequestEvent &
  StepFunctionsLikeEvent;

const isBatchLikeEvent = (event: unknown): event is BatchLikeEvent =>
  !!(event as BatchLikeEvent).Records;

const isAlbEvent = (event: unknown): event is ALBEvent =>
  !!(event as ALBEvent).requestContext?.elb;

const isApiGatewayV1Event = (event: unknown): event is APIGatewayProxyEvent =>
  (event as APIGatewayProxyEvent).requestContext &&
  (event as APIGatewayProxyEventV2).version !== "2.0";

const isApiGatewayV2Event = (event: unknown): event is APIGatewayProxyEventV2 =>
  (event as APIGatewayProxyEventV2).requestContext &&
  (event as APIGatewayProxyEventV2).version === "2.0";

const isEventBridgeEvent = (
  event: unknown,
): event is EventBridgeEvent<string, unknown> =>
  !!(
    (event as EventBridgeEvent<string, unknown>).version === "0" &&
    (event as EventBridgeEvent<string, unknown>).id &&
    (event as EventBridgeEvent<string, unknown>)["detail-type"] &&
    (event as EventBridgeEvent<string, unknown>).source &&
    (event as EventBridgeEvent<string, unknown>).account &&
    (event as EventBridgeEvent<string, unknown>).time &&
    (event as EventBridgeEvent<string, unknown>).region &&
    Array.isArray((event as EventBridgeEvent<string, unknown>).resources) &&
    typeof (event as EventBridgeEvent<string, unknown>).detail === "object" &&
    !Array.isArray((event as EventBridgeEvent<string, unknown>).detail)
  );

const isStepFunctionsEvent = (
  event: unknown,
): event is StepFunctionsLikeEvent =>
  !!(
    (event as StepFunctionsLikeEvent).context?.Execution &&
    (event as StepFunctionsLikeEvent).context?.State &&
    (event as StepFunctionsLikeEvent).context?.StateMachine
  );

const isSelfManagedKafkaEvent = (
  event: unknown,
): event is SelfManagedKafkaEvent =>
  (event as SelfManagedKafkaEvent)?.eventSource === "SelfManagedKafka";

const isSnsEvent = (event: BatchLikeEvent): event is SNSEvent =>
  (event as SNSEvent).Records[0].EventSource === "aws:sns";

const isSqsEvent = (event: BatchLikeEvent): event is SQSEvent =>
  (event as SQSEvent).Records[0].eventSource === "aws:sqs";

const isDynamoDBEvent = (event: BatchLikeEvent): event is DynamoDBStreamEvent =>
  (event as DynamoDBStreamEvent).Records[0].eventSource === "aws:dynamodb";

const isKinesisEvent = (event: BatchLikeEvent): event is KinesisStreamEvent =>
  (event as KinesisStreamEvent).Records[0].eventSource === "aws:kinesis";

const isS3Event = (event: BatchLikeEvent): event is S3Event =>
  (event as S3Event).Records[0].eventSource === "aws:s3";

export function getEventSource<TEvent extends AnyEvent>(
  event: TEvent,
): EventSource<TEvent> {
  if (isAlbEvent(event)) return awsAlbEventSource as EventSource<TEvent>;
  if (isSelfManagedKafkaEvent(event))
    return awsSelfManagedKafkaEventSource as EventSource<SelfManagedKafkaEvent>;
  if (isBatchLikeEvent(event)) {
    if (isSnsEvent(event)) return awsSnsEventSource as EventSource<SNSEvent>;
    if (isDynamoDBEvent(event))
      return awsDynamoDbEventSource as EventSource<DynamoDBStreamEvent>;
    if (isSqsEvent(event)) return awsSqsEventSource as EventSource<SQSEvent>;
    if (isKinesisEvent(event))
      return awsKinesisEventSource as EventSource<KinesisStreamEvent>;
    if (isS3Event(event)) return awsS3 as EventSource<S3Event>;
    return awsLambdaEdgeEventSource as EventSource<CloudFrontRequestEvent>;
  }
  if (isApiGatewayV2Event(event))
    return awsApiGatewayV2EventSource as EventSource<APIGatewayProxyEventV2>;
  if (isApiGatewayV1Event(event))
    return awsApiGatewayV1EventSource as EventSource<APIGatewayProxyEvent>;
  if (isEventBridgeEvent(event))
    return awsEventBridgeEventSource as EventSource<
      EventBridgeEvent<string, unknown>
    >;
  if (isStepFunctionsEvent(event))
    return awsStepFunctionsEventSource as EventSource<StepFunctionsLikeEvent>;
  throw new Error("Couldn't detect valid event source.");
}
