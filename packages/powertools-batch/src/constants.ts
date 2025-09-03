import type { DynamoDBRecord, KinesisStreamRecord, SQSRecord } from "aws-lambda";

export type BaseRecord = { [key: string]: unknown } | SQSRecord | KinesisStreamRecord | DynamoDBRecord;

export enum EventType {
  SQS = "SQS",
  KinesisDataStreams = "KinesisDataStreams",
  DynamoDBStreams = "DynamoDBStreams",
}
