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
import { Cause, Effect, FiberId, FiberRef, FiberRefs, HashMap, Layer, List, Logger as Log, LogLevel } from "effect";
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

const MappedLogLevel = {
  [LogLevel.All.label]: LogLevelThreshold.TRACE,
  [LogLevel.Trace.label]: LogLevelThreshold.TRACE,
  [LogLevel.Debug.label]: LogLevelThreshold.DEBUG,
  [LogLevel.Info.label]: LogLevelThreshold.INFO,
  [LogLevel.Warning.label]: LogLevelThreshold.WARN,
  [LogLevel.Error.label]: LogLevelThreshold.ERROR,
  [LogLevel.Fatal.label]: LogLevelThreshold.CRITICAL,
  [LogLevel.None.label]: LogLevelThreshold.SILENT,
} as const;

const logExtraInput = FiberRef.unsafeMake<LogItemExtraInput>([]);

const processLog = (effect: (message: string) => Effect.Effect<void>) => {
  return (input: LogItemMessage, ...extraInput: Array<LogAttributes>) => {
    const message = typeof input === "string" ? input : input.message;

    const extraInputs = typeof input === "string" ? extraInput : [input, ...extraInput];

    return Effect.locally(effect(message), logExtraInput, extraInputs);
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
 * @since 1.0.0
 * @category constructors
 */
const makeLoggerInstance = (logger: Logger) => {
  return Log.make<unknown, void>((options) => {
    const extraInputs = [
      ...FiberRefs.getOrDefault(options.context, logExtraInput),
    ];

    let message = options.message;
    if (Array.isArray(options.message)) {
      const [first, ...rest] = options.message;
      message = first;
      // eslint-disable-next-line no-restricted-syntax
      extraInputs.push(...rest);
    }

    const nowMillis = options.date.getTime();

    extraInputs.push({
      fiber: FiberId.threadName(options.fiberId),
      date: options.date.toISOString(),
      ...(Cause.isEmpty(options.cause)
        ? {}
        : { cause: Cause.pretty(options.cause) }),
      ...List.reduce(options.spans, {}, (acc, span) => ({
        ...acc,
        [span.label]: `${nowMillis - span.startTime}ms`,
      })),
      ...HashMap.reduce(options.annotations, {}, (acc, value, key) => ({
        ...acc,
        [key]: value,
      })),
    });

    const unsafeLogger = logger as unknown as {
      processLogItem: (
        logLevel: number,
        input: LogItemMessage,
        extraInput: LogItemExtraInput,
      ) => void;
    };

    unsafeLogger.processLogItem(
      MappedLogLevel[options.logLevel.label],
      message as LogItemMessage,
      extraInputs as LogItemExtraInput,
    );
  });
};

const PowerToolsLoggerEffect = Effect.map(Instance.LoggerInstance, makeLoggerInstance);
const PowerToolsLoggerLayer = Layer.merge(
  Log.replaceEffect(Log.defaultLogger, PowerToolsLoggerEffect),
  Log.minimumLogLevel(LogLevel.All),
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
