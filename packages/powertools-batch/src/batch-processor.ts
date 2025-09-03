import type { DynamoDBRecord, KinesisStreamRecord, SQSRecord } from "aws-lambda";
import { Array, Effect, Either, Layer, Option, Schema } from "effect";
import type { BaseRecord } from "./constants.js";
import { EventType } from "./constants.js";
import { FullBatchError, Processor } from "./processor.js";

class BatchProcessError extends Schema.TaggedError<BatchProcessError>()("BatchProcessError", {
  record: Schema.Unknown,
  cause: Schema.Defect,
}) {}

const identifierMapper = (record: BaseRecord, eventType: EventType): string => {
  switch (eventType) {
    case EventType.SQS:
      return (record as SQSRecord).messageId;
    case EventType.KinesisDataStreams:
      return (record as KinesisStreamRecord).kinesis.sequenceNumber;
    case EventType.DynamoDBStreams:
      return (record as DynamoDBRecord).dynamodb?.SequenceNumber ?? "";
  }
};

export interface BatchProcessorOptions {
  eventType: EventType;
}

export const BatchProcessor = (options: BatchProcessorOptions) =>
  Layer.succeed(
    Processor,
    Processor.of({
      process: <Record extends BaseRecord, A, E, R>(
        event: { Records: Array<Record> },
        handler: (record: Record) => Effect.Effect<A, E, R>,
      ) =>
        Effect.gen(function*() {
          const effects = event.Records.map((record) =>
            handler(record).pipe(Effect.mapError((e) => new BatchProcessError({ record, cause: e })))
          );

          const results = yield* Effect.all(effects, { mode: "either" });

          const batchItemFailures = Array.filterMap(results, (result) => {
            if (Either.isLeft(result)) {
              return Option.some({
                itemIdentifier: identifierMapper(result.left.record as BaseRecord, options.eventType),
              });
            }

            return Option.none();
          });

          if (batchItemFailures.length === event.Records.length && event.Records.length > 0) {
            return yield* Effect.fail(new FullBatchError());
          }

          return { batchItemFailures };
        }),
    }),
  );
