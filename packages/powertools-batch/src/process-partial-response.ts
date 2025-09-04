/**
 * @since 1.0.0
 */
import { Effect } from "effect";
import type { BaseRecord } from "./constants.js";
import { Processor } from "./processor.js";

/**
 * @param event - The Lambda event
 * @param recordHandler - The handler for processing each record
 * @returns The partial response
 * @since 1.0.0
 */
export const processPartialResponse = <Record extends BaseRecord, A, E, R>(
  event: { Records: Array<Record> },
  recordHandler: (record: Record) => Effect.Effect<A, E, R>,
) =>
  Effect.gen(function*() {
    const processor = yield* Processor;
    return yield* processor.process(event, recordHandler);
  });
