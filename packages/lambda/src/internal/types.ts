import type {
  ALBEvent,
  ALBResult,
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
  APIGatewayProxyResultV2,
  CloudFrontRequestEvent,
  DynamoDBStreamEvent,
  EventBridgeEvent,
  KinesisStreamEvent,
  S3Event,
  SelfManagedKafkaEvent,
  SNSEvent,
  SQSEvent,
} from "aws-lambda";

export type LambdaEvent =
  | ALBEvent
  | APIGatewayProxyEvent
  | APIGatewayProxyEventV2
  | BatchLikeEvent
  | EventBridgeEvent<string, unknown>
  | DynamoDBStreamEvent
  | KinesisStreamEvent
  | S3Event
  | SelfManagedKafkaEvent
  | SNSEvent
  | SQSEvent
  | CloudFrontRequestEvent
  | StepFunctionsLikeEvent;

export type LambdaResult =
  | ALBResult
  | APIGatewayProxyResult
  | APIGatewayProxyResultV2
  | void;

export type BatchLikeEvent<R = unknown> = { Records: Array<R> };
export type StepFunctionsLikeEvent = {
  context: { Execution: unknown; State: unknown; StateMachine: unknown };
};

export type RequestValues = {
  method: string;
  headers: Record<string, string>;
  body: any;
  remoteAddress?: string;
  path?: string;
};

export type ResponseValues<TEvent> = {
  event: TEvent;
  statusCode: number;
  body: string;
  headers: Record<string, string>;
  isBase64Encoded: boolean;
  response?: any;
};

export type EventSource<TEvent extends LambdaEvent, TResult extends LambdaResult = void> = {
  getRequest: (event: TEvent) => RequestValues;
  getResponse: (response: ResponseValues<TEvent>) => TResult;
};
