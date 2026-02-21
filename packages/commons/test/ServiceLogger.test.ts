import { ServiceLogger } from "@effect-aws/commons";
import { it } from "@effect/vitest";
import { Effect, Logger } from "effect";
import { beforeEach, describe, expect, vi } from "vitest";

const mockLogFn = vi.fn();
const mockLogger = Logger.make(mockLogFn);

describe("ServiceLogger.toClientLogger", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.effect("should convert defaultServiceLogger to Logger and call info method", () =>
    Effect.gen(function*() {
      const serviceLogger = ServiceLogger.defaultServiceLogger;
      const clientLogger = yield* ServiceLogger.toClientLogger(serviceLogger).pipe(
        Effect.provide(Logger.layer([mockLogger])),
      );

      clientLogger.info("test message");

      expect(mockLogFn).toHaveBeenCalledOnce();
      expect(mockLogFn).toHaveBeenCalledWith(
        expect.objectContaining({ message: ["test message"], logLevel: "Info" }),
      );
    }));

  it.effect("should convert defaultServiceLogger to Logger and call error method", () =>
    Effect.gen(function*() {
      const serviceLogger = ServiceLogger.defaultServiceLogger;
      const clientLogger = yield* ServiceLogger.toClientLogger(serviceLogger).pipe(
        Effect.provide(Logger.layer([mockLogger])),
      );

      clientLogger.error("error message");

      expect(mockLogFn).toHaveBeenCalledOnce();
      expect(mockLogFn).toHaveBeenCalledWith(
        expect.objectContaining({ message: ["error message"], logLevel: "Error" }),
      );
    }));

  it.effect("should convert ServiceLogger to Logger and remap info method to debug log", () =>
    Effect.gen(function*() {
      const serviceLogger = ServiceLogger.make({
        debug: Effect.logDebug,
        info: Effect.logWarning,
        error: Effect.logError,
        warn: Effect.logWarning,
      });
      const clientLogger = yield* ServiceLogger.toClientLogger(serviceLogger).pipe(
        Effect.provide(Logger.layer([mockLogger])),
      );

      clientLogger.info("debug message");

      expect(mockLogFn).toHaveBeenCalledOnce();
      expect(mockLogFn).toHaveBeenCalledWith(
        expect.objectContaining({ message: ["debug message"], logLevel: "Warn" }),
      );
    }));
});
