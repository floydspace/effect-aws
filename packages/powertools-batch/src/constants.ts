/**
 * @since 1.0.0
 */
import type { DynamoDBRecord, KinesisStreamRecord, SQSRecord } from "aws-lambda";

/**
 * The base record type for all event types.
 * @since 1.0.0
 */
export type BaseRecord = { [key: string]: unknown } | SQSRecord | KinesisStreamRecord | DynamoDBRecord;

/**
 * The event type for all event types.
 * @since 1.0.0
 */
export enum EventType {
  SQS = "SQS",
  KinesisDataStreams = "KinesisDataStreams",
  DynamoDBStreams = "DynamoDBStreams",
}
