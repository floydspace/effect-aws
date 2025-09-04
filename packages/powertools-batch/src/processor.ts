/**
 * @since 1.0.0
 */
import { Context, Schema } from "effect";
import type { Effect } from "effect";
import type { BaseRecord } from "./constants.js";

/**
 * The error thrown when a full batch is encountered.
 * @since 1.0.0
 */
export class FullBatchError extends Schema.TaggedError<FullBatchError>()("FullBatchError", {}) {}

/**
 * The processor context.
 * @since 1.0.0
 */
export class Processor extends Context.Tag("@effect-aws/powertools-batch/Processor")<
  Processor,
  {
    readonly process: <Record extends BaseRecord, A, E, R>(
      event: { Records: Array<Record> },
      handler: (record: Record) => Effect.Effect<A, E, R>,
    ) => Effect.Effect<{ batchItemFailures: Array<{ itemIdentifier: string }> }, FullBatchError, R>;
  }
>() {}
