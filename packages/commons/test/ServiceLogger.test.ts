import { ServiceLogger } from "@effect-aws/commons";
import { it } from "@effect/vitest";
import { Effect, Layer, Logger, LogLevel } from "effect";
import { beforeEach, describe, expect, vi } from "vitest";

const mockLogFn = vi.fn();
const mockLogger = Logger.replace(Logger.defaultLogger, Logger.make(mockLogFn)).pipe(
  Layer.provide(Logger.minimumLogLevel(LogLevel.All)),
);

describe("ServiceLogger.toClientLogger", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.effect("should convert defaultServiceLogger to Logger and call info method", () =>
    Effect.gen(function*() {
      const serviceLogger = ServiceLogger.defaultServiceLogger;
      const clientLogger = yield* ServiceLogger.toClientLogger(serviceLogger).pipe(Effect.provide(mockLogger));

      clientLogger.info("test message");

      expect(mockLogFn).toHaveBeenCalledOnce();
      expect(mockLogFn).toHaveBeenCalledWith(
        expect.objectContaining({ message: ["test message"], logLevel: LogLevel.Info }),
      );
    }));

  it.effect("should convert defaultServiceLogger to Logger and call error method", () =>
    Effect.gen(function*() {
      const serviceLogger = ServiceLogger.defaultServiceLogger;
      const clientLogger = yield* ServiceLogger.toClientLogger(serviceLogger).pipe(Effect.provide(mockLogger));

      clientLogger.error("error message");

      expect(mockLogFn).toHaveBeenCalledOnce();
      expect(mockLogFn).toHaveBeenCalledWith(
        expect.objectContaining({ message: ["error message"], logLevel: LogLevel.Error }),
      );
    }));

  it.effect("should convert ServiceLogger to Logger and remap info method to debug log", () =>
    Effect.gen(function*() {
      const serviceLogger = ServiceLogger.make({
        debug: Effect.logDebug,
        info: Effect.logDebug,
        error: Effect.logError,
        warn: Effect.logWarning,
      });
      const clientLogger = yield* ServiceLogger.toClientLogger(serviceLogger).pipe(Effect.provide(mockLogger));

      clientLogger.info("debug message");

      expect(mockLogFn).toHaveBeenCalledOnce();
      expect(mockLogFn).toHaveBeenCalledWith(
        expect.objectContaining({ message: ["debug message"], logLevel: LogLevel.Debug }),
      );
    }));
});
