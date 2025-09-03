import { Context, Schema } from "effect";
import type { Effect } from "effect";
import type { BaseRecord } from "./constants.js";

export class FullBatchError extends Schema.TaggedError<FullBatchError>()("FullBatchError", {}) {}

export class Processor extends Context.Tag("@effect-aws/powertools-batch/Processor")<
  Processor,
  {
    readonly process: <Record extends BaseRecord, A, E, R>(
      event: { Records: Array<Record> },
      handler: (record: Record) => Effect.Effect<A, E, R>,
    ) => Effect.Effect<{ batchItemFailures: Array<{ itemIdentifier: string }> }, FullBatchError, R>;
  }
>() {}
