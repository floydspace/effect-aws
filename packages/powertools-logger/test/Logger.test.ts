import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger";
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Logger from "../src";

describe("Logger", () => {
  let log: jest.SpyInstance;

  beforeEach(() => {
    log = jest.spyOn(LoggerCtor.prototype as any, "processLogItem");
  });

  afterEach(() => {
    log.mockClear();
  });

  it("default", async () => {
    const program = pipe(
      Logger.logInfo("Info message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logInfo("Native effect info message")),
    );

    await pipe(
      program,
      Effect.provideLayer(Logger.DefaultPowerToolsLoggerLayer),
      Effect.runPromise,
    );

    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(
      1,
      12, // INFO
      "Info message with log meta",
      [
        { foo: "bar" },
        { fiber: expect.any(String), timestamp: expect.any(String) },
      ],
    );
    expect(log).toHaveBeenNthCalledWith(
      2,
      12, // INFO
      "Native effect info message",
      [{ fiber: expect.any(String), timestamp: expect.any(String) }],
    );
  });

  it("configurable", async () => {
    const program = pipe(
      Logger.logDebug("Debug message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logDebug("Native effect debug message")),
    );

    await pipe(
      program,
      Effect.provideLayer(Logger.PowerToolsLoggerLayer),
      Effect.provideService(
        Logger.LoggerOptionsTag,
        new Logger.LoggerOptions({ logLevel: "DEBUG" }),
      ),
      Effect.runPromise,
    );

    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(
      1,
      8, // DEBUG
      "Debug message with log meta",
      [
        { foo: "bar" },
        { fiber: expect.any(String), timestamp: expect.any(String) },
      ],
    );
    expect(log).toHaveBeenNthCalledWith(
      2,
      8, // DEBUG
      "Native effect debug message",
      [{ fiber: expect.any(String), timestamp: expect.any(String) }],
    );
  });

  it("base", async () => {
    const program = pipe(
      Logger.logError("Error message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logError("Native effect error message")),
    );

    await pipe(
      program,
      Effect.provideLayer(Logger.BasePowerToolsLoggerLayer),
      Effect.provideService(
        Logger.LoggerInstanceTag,
        new LoggerCtor({ logLevel: "ERROR" }),
      ),
      Effect.runPromise,
    );

    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(
      1,
      20, // ERROR
      "Error message with log meta",
      [
        { foo: "bar" },
        { fiber: expect.any(String), timestamp: expect.any(String) },
      ],
    );
    expect(log).toHaveBeenNthCalledWith(
      2,
      20, // ERROR
      "Native effect error message",
      [{ fiber: expect.any(String), timestamp: expect.any(String) }],
    );
  });
});
