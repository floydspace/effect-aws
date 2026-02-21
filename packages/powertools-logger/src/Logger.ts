/**
 * @since 1.0.0
 */
import type { Logger } from "@aws-lambda-powertools/logger";
import type {
  ConstructorOptions,
  LogAttributes,
  LogItemExtraInput,
  LogItemMessage,
} from "@aws-lambda-powertools/logger/types";
import type { LogLevel } from "effect";
import { Cause, Effect, Layer, Logger as Log, References, ServiceMap } from "effect";
import * as Instance from "./LoggerInstance.js";
import * as LoggerOptions from "./LoggerOptions.js";

const LogLevelThreshold = {
  TRACE: 6,
  DEBUG: 8,
  INFO: 12,
  WARN: 16,
  ERROR: 20,
  CRITICAL: 24,
  SILENT: 28,
} as const;

const MappedLogLevel: Record<LogLevel.LogLevel, typeof LogLevelThreshold[keyof typeof LogLevelThreshold]> = {
  All: LogLevelThreshold.TRACE,
  Trace: LogLevelThreshold.TRACE,
  Debug: LogLevelThreshold.DEBUG,
  Info: LogLevelThreshold.INFO,
  Warn: LogLevelThreshold.WARN,
  Error: LogLevelThreshold.ERROR,
  Fatal: LogLevelThreshold.CRITICAL,
  None: LogLevelThreshold.SILENT,
} as const;

const logExtraInput = ServiceMap.Reference<LogItemExtraInput>("@effect-aws/powertools-logger/logExtraInput", {
  defaultValue: () => [],
});

const processLog = (effect: (message: string) => Effect.Effect<void>) => {
  return (input: LogItemMessage, ...extraInput: Array<LogAttributes>) => {
    const message = typeof input === "string" ? input : input.message;

    const extraInputs = typeof input === "string" ? extraInput : [input, ...extraInput];

    return Effect.provideService(effect(message), logExtraInput, extraInputs);
  };
};

/**
 * Logs the specified message at the debug log level.
 * It prints a log item with level DEBUG.
 * @since 1.0.0
 * @category logging
 */
export const logDebug = processLog(Effect.logDebug);
/**
 * Logs the specified message at the info log level.
 * It prints a log item with level INFO.
 * @since 1.0.0
 * @category logging
 */
export const logInfo = processLog(Effect.logInfo);
/**
 * Logs the specified message at the warning log level.
 * It prints a log item with level WARN.
 * @since 1.0.0
 * @category logging
 */
export const logWarning = processLog(Effect.logWarning);
/**
 * Logs the specified message at the error log level.
 * It prints a log item with level ERROR.
 * @since 1.0.0
 * @category logging
 */
export const logError = processLog(Effect.logError);
/**
 * Logs the specified message at the fatal log level.
 * It prints a log item with level CRITICAL.
 * @since 1.0.0
 * @category logging
 */
export const logFatal = processLog(Effect.logFatal);
/**
 * Logs the specified message at the fatal log level.
 * It prints a log item with level CRITICAL.
 * @since 1.0.0
 * @category logging
 * @alias logFatal
 */
export const logCritical = processLog(Effect.logFatal);

/**
 * Formats the identifier of a `Fiber` by prefixing it with a hash tag.
 */
const formatFiberId = (fiberId: number) => `#${fiberId}`;

const isCauseEmpty = <E>(self: Cause.Cause<E>): self is Cause.Cause<never> => self.reasons.length === 0;

/**
 * @since 1.0.0
 * @category constructors
 */
const makeLoggerInstance = (logger: Logger) => {
  return Log.make<unknown, void>((options) => {
    const extraInputs = [
      ...ServiceMap.getReferenceUnsafe(options.fiber.services, logExtraInput),
    ];

    let message = options.message;
    if (Array.isArray(options.message)) {
      const [first, ...rest] = options.message;
      message = first;
      // eslint-disable-next-line no-restricted-syntax
      extraInputs.push(...rest);
    }

    // const nowMillis = options.date.getTime();

    extraInputs.push({
      fiber: formatFiberId(options.fiber.id),
      date: options.date.toISOString(),
      ...(isCauseEmpty(options.cause)
        ? {}
        : { cause: Cause.pretty(options.cause) }),
      // ...List.reduce(options.spans, {}, (acc, span) => ({
      //   ...acc,
      //   [span.label]: `${nowMillis - span.startTime}ms`,
      // })),
      // ...HashMap.reduce(options.annotations, {}, (acc, value, key) => ({
      //   ...acc,
      //   [key]: value,
      // })),
    });

    const unsafeLogger = logger as unknown as {
      processLogItem: (
        logLevel: number,
        input: LogItemMessage,
        extraInput: LogItemExtraInput,
      ) => void;
    };

    unsafeLogger.processLogItem(
      MappedLogLevel[options.logLevel],
      (message ?? {}) as LogItemMessage,
      extraInputs as LogItemExtraInput,
    );
  });
};

const PowerToolsLoggerEffect = Effect.map(Instance.LoggerInstance.asEffect(), makeLoggerInstance);
const PowerToolsLoggerLayer = Layer.merge(
  Log.layer([PowerToolsLoggerEffect]),
  Layer.succeed(References.MinimumLogLevel, "All"),
);

/**
 * Creates a logger layer implementation that uses the default AWS Lambda Powertools Logger instance.
 *
 * @since 1.0.0
 * @category layers
 */
export const defaultLayer = PowerToolsLoggerLayer.pipe(Layer.provide(Instance.layer));

/**
 * Creates a logger layer implementation that uses the AWS Lambda Powertools Logger instance configured with provided options.
 *
 * @since 1.0.0
 * @category layers
 */
export const layer = (options: ConstructorOptions) =>
  PowerToolsLoggerLayer.pipe(
    Layer.provide(Instance.layer),
    Layer.provide(LoggerOptions.setLoggerOptions(options)),
  );

/**
 * Creates a logger layer implementation that uses a provided AWS Lambda Powertools Logger instance.
 *
 * @since 1.0.0
 * @category layers
 */
export const baseLayer = (
  evaluate: (defaultOptions: ConstructorOptions) => Logger,
) =>
  PowerToolsLoggerLayer.pipe(
    Layer.provide(
      Layer.effect(
        Instance.LoggerInstance,
        Effect.map(LoggerOptions.getLoggerOptions, evaluate),
      ),
    ),
  );
