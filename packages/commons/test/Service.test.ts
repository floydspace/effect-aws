import { it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Logger from "effect/Logger";
import * as LogLevel from "effect/LogLevel";
import { beforeEach, describe, expect, vi } from "vitest";
import { mockHandlerOutput, TestClient } from "./fixtures/TestClientInstance.js";
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
    "should abort the request when the caller's abortSignal fires after the effect completes",
    () =>
      Effect.gen(function*() {
        const sendSpy = vi.spyOn(TestClient.prototype, "send");
        const controller = new AbortController();

        yield* TestService.use((n) => n.test({}, { abortSignal: controller.signal }));

        const sendOptions = sendSpy.mock.calls[0][1] as { abortSignal?: AbortSignal } | undefined;
        expect(sendOptions?.abortSignal?.aborted).toBe(false);

        controller.abort("stop");

        expect(sendOptions?.abortSignal?.aborted).toBe(true);
        expect(sendOptions?.abortSignal?.reason).toBe("stop");
        sendSpy.mockRestore();
      }).pipe(Effect.provide(TestService.layer({}))),
  );

  it.effect(
    "should abort the request when a legacy onabort-style signal fires",
    () =>
      Effect.gen(function*() {
        const sendSpy = vi.spyOn(TestClient.prototype, "send");
        const legacySignal: { aborted: boolean; onabort: (() => void) | null } = { aborted: false, onabort: null };

        yield* TestService.use((n) => n.test({}, { abortSignal: legacySignal }));

        const sendOptions = sendSpy.mock.calls[0][1] as { abortSignal?: AbortSignal } | undefined;
        expect(sendOptions?.abortSignal?.aborted).toBe(false);

        legacySignal.aborted = true;
        legacySignal.onabort?.();

        expect(sendOptions?.abortSignal?.aborted).toBe(true);
        sendSpy.mockRestore();
      }).pipe(Effect.provide(TestService.layer({}))),
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
