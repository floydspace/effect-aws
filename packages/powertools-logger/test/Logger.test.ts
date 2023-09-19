import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger";
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Logger from "../src";

describe("Logger", () => {
  it("default", async () => {
    const program = pipe(
      Logger.logInfo("Info message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logInfo("Native effect info message")),
    );

    await pipe(
      program,
      Effect.provideLayer(Logger.PowerToolsDefaultLoggerLayer),
      Effect.runPromise,
    );
  });

  it("custom", async () => {
    const program = pipe(
      Logger.logDebug("Debug message with log meta", { foo: "bar" }),
      Effect.tap(() => Effect.logDebug("Native effect debug message")),
    );

    await pipe(
      program,
      Effect.provideLayer(Logger.PowerToolsLoggerLayer),
      Effect.provideService(
        Logger.LoggerInstanceTag,
        new LoggerCtor({ logLevel: "DEBUG" }),
      ),
      Effect.runPromise,
    );
  });
});
