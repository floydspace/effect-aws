import { it } from "@effect/vitest";
import { Effect, Logger, LogLevel } from "effect";
import { beforeEach, describe, expect, vi } from "vitest";
import { mockHandlerOutput } from "./fixtures/TestClientInstance.js";
import { TestService } from "./fixtures/TestService.js";

const mockLogFn = vi.fn();
const mockLogger = Logger.make(mockLogFn);

describe("Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.effect(
    "should print info logs by default",
    () =>
      Effect.gen(function*() {
        const result = yield* TestService.use((n) => n.test({}));

        expect(result).toEqual(mockHandlerOutput.output);
        expect(mockLogFn).toHaveBeenCalledOnce();
        expect(mockLogFn).toHaveBeenCalledWith(
          expect.objectContaining({
            message: [{
              clientName: "",
              commandName: "",
              input: {},
              output: {},
              metadata: expect.anything(),
            }],
            logLevel: "Info",
          }),
        );
      }).pipe(
        Effect.provide(TestService.layer({ logger: true })),
        Effect.provide(Logger.layer([mockLogger])),
      ),
  );

  it.effect(
    "should not print info logs if log level set to warning",
    () =>
      Effect.gen(function*() {
        const result = yield* TestService.use((n) => n.test({}));

        expect(result).toEqual(mockHandlerOutput.output);
        expect(mockLogFn).not.toHaveBeenCalled();
      }).pipe(
        Effect.provide(TestService.layer({ logger: true })),
        Effect.provide(Logger.layer([Logger.make((options) => {
          if (LogLevel.isGreaterThanOrEqualTo(options.logLevel, "Warn")) {
            mockLogFn(options);
          }
        })])),
      ),
  );

  it.effect(
    "should not print any logs if logger is disabled",
    () =>
      Effect.gen(function*() {
        const result = yield* TestService.use((n) => n.test({}));

        expect(result).toEqual(mockHandlerOutput.output);
        expect(mockLogFn).not.toHaveBeenCalled();
      }).pipe(
        Effect.provide(TestService.layer({})),
        Effect.provide(Logger.layer([mockLogger])),
      ),
  );
});
