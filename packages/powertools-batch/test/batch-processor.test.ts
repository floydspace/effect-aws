import { BatchProcessor, EventType, processPartialResponse } from "@effect-aws/powertools-batch";
import type { DynamoDBRecord, KinesisStreamRecord, SQSRecord } from "aws-lambda";
import { Effect, Either, Layer } from "effect";
import { describe, expect, it } from "vitest";

describe("BatchProcessor", () => {
  describe("SQS Event Processing", () => {
    const createSQSRecord = (messageId: string, body: string): SQSRecord => ({
      messageId,
      receiptHandle: `receipt-${messageId}`,
      body,
      attributes: {
        ApproximateReceiveCount: "1",
        SentTimestamp: "1695820800000",
        SenderId: "123456789012",
        ApproximateFirstReceiveTimestamp: "1695820800000",
      },
      messageAttributes: {},
      md5OfBody: "test-md5",
      eventSource: "aws:sqs",
      eventSourceARN: "arn:aws:sqs:us-east-1:123456789012:test-queue",
      awsRegion: "us-east-1",
    });

    it("should process all SQS records successfully", async () => {
      const records = [
        createSQSRecord("msg-1", "message 1"),
        createSQSRecord("msg-2", "message 2"),
        createSQSRecord("msg-3", "message 3"),
      ];

      const handler = (record: SQSRecord) => Effect.succeed({ messageId: record.messageId, processed: true });

      const layer = BatchProcessor({ eventType: EventType.SQS });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({ batchItemFailures: [] });
    });

    it("should handle partial failures for SQS", async () => {
      const records = [
        createSQSRecord("msg-1", "message 1"),
        createSQSRecord("msg-2", "message 2"),
        createSQSRecord("msg-3", "message 3"),
      ];

      const handler = (record: SQSRecord) => {
        if (record.messageId === "msg-2") {
          return Effect.fail(new Error("Processing failed"));
        }
        return Effect.succeed({ messageId: record.messageId, processed: true });
      };

      const layer = BatchProcessor({ eventType: EventType.SQS });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({
        batchItemFailures: [{ itemIdentifier: "msg-2" }],
      });
    });

    it("should handle full batch failure for SQS", async () => {
      const records = [
        createSQSRecord("msg-1", "message 1"),
        createSQSRecord("msg-2", "message 2"),
      ];

      const handler = (_: SQSRecord) => Effect.fail(new Error("Processing failed"));

      const layer = BatchProcessor({ eventType: EventType.SQS });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.either,
        Effect.runPromise,
      );

      expect(Either.isLeft(result)).toBe(true);
      if (Either.isLeft(result)) {
        expect(result.left._tag).toBe("FullBatchError");
      }
    });
  });

  describe("Kinesis Event Processing", () => {
    const createKinesisRecord = (sequenceNumber: string, data: string): KinesisStreamRecord => ({
      kinesis: {
        sequenceNumber,
        approximateArrivalTimestamp: 1695820800,
        data,
        partitionKey: "partition-1",
        kinesisSchemaVersion: "1.0",
      },
      eventSource: "aws:kinesis",
      eventSourceARN: "arn:aws:kinesis:us-east-1:123456789012:stream/test-stream",
      eventID: `shardId-000000000000:${sequenceNumber}`,
      eventName: "aws:kinesis:record",
      invokeIdentityArn: "arn:aws:iam::123456789012:role/test-role",
      awsRegion: "us-east-1",
      eventVersion: "1.0",
    });

    it("should process all Kinesis records successfully", async () => {
      const records = [
        createKinesisRecord("1000", "data-1"),
        createKinesisRecord("2000", "data-2"),
        createKinesisRecord("3000", "data-3"),
      ];

      const handler = (record: KinesisStreamRecord) =>
        Effect.succeed({ sequenceNumber: record.kinesis.sequenceNumber, processed: true });

      const layer = BatchProcessor({ eventType: EventType.KinesisDataStreams });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({ batchItemFailures: [] });
    });

    it("should handle partial failures for Kinesis", async () => {
      const records = [
        createKinesisRecord("1000", "data-1"),
        createKinesisRecord("2000", "data-2"),
        createKinesisRecord("3000", "data-3"),
      ];

      const handler = (record: KinesisStreamRecord) => {
        if (record.kinesis.sequenceNumber === "2000") {
          return Effect.fail(new Error("Processing failed"));
        }
        return Effect.succeed({ sequenceNumber: record.kinesis.sequenceNumber, processed: true });
      };

      const layer = BatchProcessor({ eventType: EventType.KinesisDataStreams });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({
        batchItemFailures: [{ itemIdentifier: "2000" }],
      });
    });
  });

  describe("DynamoDB Streams Event Processing", () => {
    const createDynamoDBRecord = (
      sequenceNumber: string,
      eventName: "INSERT" | "MODIFY" | "REMOVE",
    ): DynamoDBRecord => ({
      eventID: `event-${sequenceNumber}`,
      eventName,
      eventVersion: "1.1",
      eventSource: "aws:dynamodb",
      awsRegion: "us-east-1",
      dynamodb: {
        SequenceNumber: sequenceNumber,
        SizeBytes: 100,
        StreamViewType: "NEW_AND_OLD_IMAGES",
      },
      eventSourceARN: "arn:aws:dynamodb:us-east-1:123456789012:table/test-table/stream/2023-01-01T00:00:00.000",
    });

    it("should process all DynamoDB records successfully", async () => {
      const records = [
        createDynamoDBRecord("100", "INSERT"),
        createDynamoDBRecord("200", "MODIFY"),
        createDynamoDBRecord("300", "REMOVE"),
      ];

      const handler = (record: DynamoDBRecord) =>
        Effect.succeed({
          sequenceNumber: record.dynamodb?.SequenceNumber,
          eventName: record.eventName,
          processed: true,
        });

      const layer = BatchProcessor({ eventType: EventType.DynamoDBStreams });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({ batchItemFailures: [] });
    });

    it("should handle partial failures for DynamoDB Streams", async () => {
      const records = [
        createDynamoDBRecord("100", "INSERT"),
        createDynamoDBRecord("200", "MODIFY"),
        createDynamoDBRecord("300", "REMOVE"),
      ];

      const handler = (record: DynamoDBRecord) => {
        if (record.dynamodb?.SequenceNumber === "200") {
          return Effect.fail(new Error("Processing failed"));
        }
        return Effect.succeed({
          sequenceNumber: record.dynamodb?.SequenceNumber,
          eventName: record.eventName,
          processed: true,
        });
      };

      const layer = BatchProcessor({ eventType: EventType.DynamoDBStreams });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({
        batchItemFailures: [{ itemIdentifier: "200" }],
      });
    });

    it("should handle missing sequence number for DynamoDB", async () => {
      const recordWithoutSequenceNumber: DynamoDBRecord = {
        eventID: "event-missing",
        eventName: "INSERT",
        eventVersion: "1.1",
        eventSource: "aws:dynamodb",
        awsRegion: "us-east-1",
        dynamodb: {
          SizeBytes: 100,
          StreamViewType: "NEW_AND_OLD_IMAGES",
        },
        eventSourceARN: "arn:aws:dynamodb:us-east-1:123456789012:table/test-table/stream/2023-01-01T00:00:00.000",
      };

      const handler = (_: DynamoDBRecord) => Effect.fail(new Error("Processing failed"));

      const layer = BatchProcessor({ eventType: EventType.DynamoDBStreams });

      const result = await processPartialResponse({ Records: [recordWithoutSequenceNumber] }, handler).pipe(
        Effect.provide(layer),
        Effect.either,
        Effect.runPromise,
      );

      // Single record failure results in FullBatchError
      expect(Either.isLeft(result)).toBe(true);
      if (Either.isLeft(result)) {
        expect(result.left._tag).toBe("FullBatchError");
      }
    });
  });

  describe("processPartialResponse", () => {
    it("should process partial response with SQS records", async () => {
      const records = [
        {
          messageId: "msg-1",
          receiptHandle: "receipt-1",
          body: "message 1",
          attributes: {
            ApproximateReceiveCount: "1",
            SentTimestamp: "1695820800000",
            SenderId: "123456789012",
            ApproximateFirstReceiveTimestamp: "1695820800000",
          },
          messageAttributes: {},
          md5OfBody: "test-md5",
          eventSource: "aws:sqs",
          eventSourceARN: "arn:aws:sqs:us-east-1:123456789012:test-queue",
          awsRegion: "us-east-1",
        } as SQSRecord,
      ];

      const handler = (record: SQSRecord) => Effect.succeed({ messageId: record.messageId, processed: true });

      const layer = BatchProcessor({ eventType: EventType.SQS });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({ batchItemFailures: [] });
    });

    it("should handle errors in processPartialResponse", async () => {
      const records = [
        {
          messageId: "msg-1",
          receiptHandle: "receipt-1",
          body: "message 1",
          attributes: {
            ApproximateReceiveCount: "1",
            SentTimestamp: "1695820800000",
            SenderId: "123456789012",
            ApproximateFirstReceiveTimestamp: "1695820800000",
          },
          messageAttributes: {},
          md5OfBody: "test-md5",
          eventSource: "aws:sqs",
          eventSourceARN: "arn:aws:sqs:us-east-1:123456789012:test-queue",
          awsRegion: "us-east-1",
        } as SQSRecord,
      ];

      const handler = (_: SQSRecord) => Effect.fail(new Error("Processing failed"));

      const layer = BatchProcessor({ eventType: EventType.SQS });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.either,
        Effect.runPromise,
      );

      expect(Either.isLeft(result)).toBe(true);
      if (Either.isLeft(result)) {
        expect(result.left._tag).toBe("FullBatchError");
      }
    });
  });

  describe("Handler with dependencies", () => {
    class TestService extends Effect.Tag("TestService")<TestService, { process: (data: string) => string }>() {}

    const TestServiceLive = Layer.succeed(TestService, { process: (data: string) => `processed: ${data}` });

    it("should work with handlers that have dependencies", async () => {
      const records = [
        {
          messageId: "msg-1",
          receiptHandle: "receipt-1",
          body: "message 1",
          attributes: {
            ApproximateReceiveCount: "1",
            SentTimestamp: "1695820800000",
            SenderId: "123456789012",
            ApproximateFirstReceiveTimestamp: "1695820800000",
          },
          messageAttributes: {},
          md5OfBody: "test-md5",
          eventSource: "aws:sqs",
          eventSourceARN: "arn:aws:sqs:us-east-1:123456789012:test-queue",
          awsRegion: "us-east-1",
        } as SQSRecord,
      ];

      const handler = (record: SQSRecord) =>
        Effect.gen(function*() {
          const service = yield* TestService;
          return service.process(record.body);
        });

      const layer = BatchProcessor({ eventType: EventType.SQS });
      const fullLayer = Layer.merge(layer, TestServiceLive);

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(fullLayer),
        Effect.runPromise,
      );

      expect(result).toEqual({ batchItemFailures: [] });
    });
  });

  describe("Empty batch handling", () => {
    it("should handle empty batch", async () => {
      const handler = (_: SQSRecord) => Effect.succeed({ processed: true });

      const layer = BatchProcessor({ eventType: EventType.SQS });

      const result = await processPartialResponse({ Records: [] }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({ batchItemFailures: [] });
    });
  });

  describe("Multiple failure scenarios", () => {
    it("should handle multiple failures correctly", async () => {
      const records = [
        { messageId: "msg-1", body: "1" } as SQSRecord,
        { messageId: "msg-2", body: "2" } as SQSRecord,
        { messageId: "msg-3", body: "3" } as SQSRecord,
        { messageId: "msg-4", body: "4" } as SQSRecord,
        { messageId: "msg-5", body: "5" } as SQSRecord,
      ];

      const handler = (record: SQSRecord) => {
        if (["msg-2", "msg-4"].includes(record.messageId)) {
          return Effect.fail(new Error(`Failed to process ${record.messageId}`));
        }
        return Effect.succeed({ messageId: record.messageId, processed: true });
      };

      const layer = BatchProcessor({ eventType: EventType.SQS });

      const result = await processPartialResponse({ Records: records }, handler).pipe(
        Effect.provide(layer),
        Effect.runPromise,
      );

      expect(result).toEqual({
        batchItemFailures: [{ itemIdentifier: "msg-2" }, { itemIdentifier: "msg-4" }],
      });
    });
  });
});
