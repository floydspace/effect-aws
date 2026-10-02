import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger";
import { Logger } from "@effect-aws/powertools-logger";
import { it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as TestClock from "effect/testing/TestClock";
import type { MockInstance } from "vitest";
import { afterEach, beforeEach, describe, expect, vi } from "vitest";

describe("Logger", () => {
  let log: ReturnType<typeof vi.spyOn>;
  let stdout: MockInstance<typeof process.stdout.write>;

  beforeEach(() => {
    log = vi.spyOn(LoggerCtor.prototype as any, "processLogItem");
    stdout = vi.spyOn(process.stdout, "write");
  });

  afterEach(() => {
    log.mockClear();
    stdout.mockClear();
  });

  it.effect("default", () =>
    Effect.gen(function*() {
      yield* TestClock.setTime(new Date("2025-04-09").getTime());

      yield* Logger.logInfo("Info message with log meta", { foo: "bar" });
      yield* Effect.logInfo("Native effect info message", { baz: "qux" });

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
      expect(stdout).toHaveBeenCalledTimes(2);
      expect(JSON.parse(stdout.mock.calls[0][0] as string)).toStrictEqual({
        level: "INFO",
        message: "Info message with log meta",
        sampling_rate: 0,
        service: "service_undefined",
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        fiber: expect.stringMatching(/^#\d+$/),
        date: "2025-04-09T00:00:00.000Z",
        foo: "bar",
      });
      expect(JSON.parse(stdout.mock.calls[1][0] as string)).toStrictEqual({
        level: "INFO",
        message: "Native effect info message",
        sampling_rate: 0,
        service: "service_undefined",
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        fiber: expect.stringMatching(/^#\d+$/),
        date: "2025-04-09T00:00:00.000Z",
        baz: "qux",
      });
    }).pipe(Effect.provide(Logger.defaultLayer)));

  it.effect("configurable", () =>
    Effect.gen(function*() {
      yield* TestClock.setTime(new Date("2025-04-09").getTime());

      yield* Logger.logDebug("Debug message with log meta", { foo: "bar" });
      yield* Effect.logDebug("Native effect debug message", { baz: "qux" });

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
      expect(stdout).toHaveBeenCalledTimes(2);
      expect(JSON.parse(stdout.mock.calls[0][0] as string)).toStrictEqual({
        level: "DEBUG",
        message: "Debug message with log meta",
        sampling_rate: 0,
        service: "service_undefined",
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        fiber: expect.stringMatching(/^#\d+$/),
        date: "2025-04-09T00:00:00.000Z",
        foo: "bar",
      });
      expect(JSON.parse(stdout.mock.calls[1][0] as string)).toStrictEqual({
        level: "DEBUG",
        message: "Native effect debug message",
        sampling_rate: 0,
        service: "service_undefined",
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        fiber: expect.stringMatching(/^#\d+$/),
        date: "2025-04-09T00:00:00.000Z",
        baz: "qux",
      });
    }).pipe(Effect.provide(Logger.layer({ logLevel: "DEBUG" }))));

  it.effect("base", () =>
    Effect.gen(function*() {
      yield* TestClock.setTime(new Date("2025-04-09").getTime());
      const stderr = vi.spyOn(process.stderr, "write");

      yield* Logger.logError("Error message with log meta", { foo: "bar" });
      yield* Effect.logError("Native effect error message", { baz: "qux" });

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
      expect(stderr).toHaveBeenCalledTimes(2);
      expect(JSON.parse(stderr.mock.calls[0][0] as string)).toStrictEqual({
        level: "ERROR",
        message: "Error message with log meta",
        sampling_rate: 0,
        service: "service_undefined",
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        fiber: expect.stringMatching(/^#\d+$/),
        date: "2025-04-09T00:00:00.000Z",
        foo: "bar",
      });
      expect(JSON.parse(stderr.mock.calls[1][0] as string)).toStrictEqual({
        level: "ERROR",
        message: "Native effect error message",
        sampling_rate: 0,
        service: "service_undefined",
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        fiber: expect.stringMatching(/^#\d+$/),
        date: "2025-04-09T00:00:00.000Z",
        baz: "qux",
      });
    }).pipe(Effect.provide(Logger.baseLayer(() => new LoggerCtor({ logLevel: "ERROR" })))));

  it.effect("should not fail when message in undefined", () =>
    Effect.gen(function*() {
      yield* TestClock.setTime(new Date("2025-04-09").getTime());

      yield* Effect.log();

      expect(log).toHaveBeenCalledOnce();
      expect(log).toHaveBeenCalledWith(
        12, // INFO
        {},
        [{ fiber: expect.any(String), date: expect.any(String) }],
      );
      expect(stdout).toHaveBeenCalledOnce();
      expect(JSON.parse(stdout.mock.lastCall![0] as string)).toStrictEqual({
        level: "INFO",
        sampling_rate: 0,
        service: "service_undefined",
        timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        fiber: expect.stringMatching(/^#\d+$/),
        date: "2025-04-09T00:00:00.000Z",
      });
    }).pipe(Effect.provide(Logger.defaultLayer)));
});
