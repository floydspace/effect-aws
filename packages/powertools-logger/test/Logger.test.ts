import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger";
import { Logger } from "@effect-aws/powertools-logger";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("Logger", () => {
  let log: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    log = vi.spyOn(LoggerCtor.prototype as any, "processLogItem");
  });

  afterEach(() => {
    log.mockClear();
  });

  it("default", async () => {
    const program = pipe(
      Logger.logInfo("Info message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logInfo("Native effect info message", { baz: "qux" })),
    );

    await pipe(
      program,
      Effect.provide(Logger.defaultLayer),
      Effect.runPromise,
    );

    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(
      1,
      12, // INFO
      "Info message with log meta",
      [
        { foo: "bar" },
        { fiber: expect.any(String), date: expect.any(String) },
      ],
    );
    expect(log).toHaveBeenNthCalledWith(
      2,
      12, // INFO
      "Native effect info message",
      [
        { baz: "qux" },
        { fiber: expect.any(String), date: expect.any(String) },
      ],
    );
  });

  it("configurable", async () => {
    const program = pipe(
      Logger.logDebug("Debug message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logDebug("Native effect debug message", { baz: "qux" })),
    );

    await pipe(
      program,
      Effect.provide(Logger.layer({ logLevel: "DEBUG" })),
      Effect.runPromise,
    );

    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(
      1,
      8, // DEBUG
      "Debug message with log meta",
      [
        { foo: "bar" },
        { fiber: expect.any(String), date: expect.any(String) },
      ],
    );
    expect(log).toHaveBeenNthCalledWith(
      2,
      8, // DEBUG
      "Native effect debug message",
      [
        { baz: "qux" },
        { fiber: expect.any(String), date: expect.any(String) },
      ],
    );
  });

  it("base", async () => {
    const program = pipe(
      Logger.logError("Error message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logError("Native effect error message", { baz: "qux" })),
    );

    await pipe(
      program,
      Effect.provide(Logger.baseLayer(() => new LoggerCtor({ logLevel: "ERROR" }))),
      Effect.runPromise,
    );

    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(
      1,
      20, // ERROR
      "Error message with log meta",
      [
        { foo: "bar" },
        { fiber: expect.any(String), date: expect.any(String) },
      ],
    );
    expect(log).toHaveBeenNthCalledWith(
      2,
      20, // ERROR
      "Native effect error message",
      [
        { baz: "qux" },
        { fiber: expect.any(String), date: expect.any(String) },
      ],
    );
  });
});
