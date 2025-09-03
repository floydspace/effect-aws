import { Effect } from "effect";
import type { BaseRecord } from "./constants.js";
import { Processor } from "./processor.js";

export const processPartialResponse = <Record extends BaseRecord, A, E, R>(
  event: { Records: Array<Record> },
  recordHandler: (record: Record) => Effect.Effect<A, E, R>,
) =>
  Effect.gen(function*() {
    const processor = yield* Processor;
    return yield* processor.process(event, recordHandler);
  });
