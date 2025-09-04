import { LambdaHandler } from "@effect-aws/lambda";
import type { KinesisStreamEvent, KinesisStreamRecord } from "aws-lambda";
import { Effect } from "effect";
import { BatchProcessor, EventType, processPartialResponse } from "../src/index.js";

const recordHandler = (record: KinesisStreamRecord) =>
  Effect.gen(function*() {
    return yield* Effect.logInfo(`Processing record: ${record.kinesis.data}`);
  });

const HandlerLive = BatchProcessor({ eventType: EventType.KinesisDataStreams });

export const handler = LambdaHandler.make({
  handler: (event: KinesisStreamEvent) => processPartialResponse(event, recordHandler),
  layer: HandlerLive,
});
