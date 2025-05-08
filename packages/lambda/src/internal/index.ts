import type {
  ALBEvent,
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  DynamoDBStreamEvent,
  EventBridgeEvent,
  KinesisStreamEvent,
  S3Event,
  SelfManagedKafkaEvent,
  SNSEvent,
  SQSEvent,
} from "../Types.js";
import awsAlbEventSource from "./aws/alb.js";
import awsApiGatewayV1EventSource from "./aws/api-gateway-v1.js";
import awsApiGatewayV2EventSource from "./aws/api-gateway-v2.js";
import awsDynamoDbEventSource from "./aws/dynamodb.js";
import awsEventBridgeEventSource from "./aws/eventbridge.js";
import awsKinesisEventSource from "./aws/kinesis.js";
import awsLambdaEdgeEventSource from "./aws/lambda-edge.js";
import awsS3 from "./aws/s3.js";
import awsSelfManagedKafkaEventSource from "./aws/self-managed-kafka.js";
import awsSnsEventSource from "./aws/sns.js";
import awsSqsEventSource from "./aws/sqs.js";
import type { BatchLikeEvent } from "./types.js";

const isBatchLikeEvent = (event: unknown): event is BatchLikeEvent => !!(event as BatchLikeEvent).Records;

const isAlbEvent = (event: unknown): event is ALBEvent => !!(event as ALBEvent).requestContext?.elb;

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

const isSelfManagedKafkaEvent = (
  event: unknown,
): event is SelfManagedKafkaEvent => (event as SelfManagedKafkaEvent)?.eventSource === "SelfManagedKafka";

const isSnsEvent = (event: BatchLikeEvent): event is SNSEvent =>
  (event as SNSEvent).Records[0].EventSource === "aws:sns";

const isSqsEvent = (event: BatchLikeEvent): event is SQSEvent =>
  (event as SQSEvent).Records[0].eventSource === "aws:sqs";

const isDynamoDBEvent = (event: BatchLikeEvent): event is DynamoDBStreamEvent =>
  (event as DynamoDBStreamEvent).Records[0].eventSource === "aws:dynamodb";

const isKinesisEvent = (event: BatchLikeEvent): event is KinesisStreamEvent =>
  (event as KinesisStreamEvent).Records[0].eventSource === "aws:kinesis";

const isS3Event = (event: BatchLikeEvent): event is S3Event => (event as S3Event).Records[0].eventSource === "aws:s3";

export function getEventSource(event: unknown) {
  if (isAlbEvent(event)) return awsAlbEventSource;
  if (isSelfManagedKafkaEvent(event)) {
    return awsSelfManagedKafkaEventSource;
  }
  if (isBatchLikeEvent(event)) {
    if (isSnsEvent(event)) return awsSnsEventSource;
    if (isDynamoDBEvent(event)) {
      return awsDynamoDbEventSource;
    }
    if (isSqsEvent(event)) return awsSqsEventSource;
    if (isKinesisEvent(event)) {
      return awsKinesisEventSource;
    }
    if (isS3Event(event)) return awsS3;
    return awsLambdaEdgeEventSource;
  }
  if (isApiGatewayV2Event(event)) {
    return awsApiGatewayV2EventSource;
  }
  if (isApiGatewayV1Event(event)) {
    return awsApiGatewayV1EventSource;
  }
  if (isEventBridgeEvent(event)) {
    return awsEventBridgeEventSource;
  }
  throw new Error("Couldn't detect valid event source.");
}
