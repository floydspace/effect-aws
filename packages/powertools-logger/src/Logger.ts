/**
 * @since 1.0.0
 */
import { Logger } from "@aws-lambda-powertools/logger";
import type {
  LogAttributes,
  LogItemExtraInput,
  LogItemMessage,
} from "@aws-lambda-powertools/logger/lib/types";
import {
  Cause,
  Effect,
  FiberId,
  FiberRef,
  FiberRefs,
  HashMap,
  Layer,
  List,
  Logger as Log,
  LogLevel,
} from "effect";
import { LoggerInstance, LoggerInstanceLayer } from "./LoggerInstance";
import { DefaultLoggerOptionsLayer } from "./LoggerOptions";

const logExtraInput = FiberRef.unsafeMake<LogItemExtraInput>([]);

const processLog = (
  effect: (message: string) => Effect.Effect<never, never, void>,
) => {
  return (input: LogItemMessage, ...extraInput: LogAttributes[]) => {
    const message = typeof input === "string" ? input : input.message;

    const extraInputs =
      typeof input === "string" ? extraInput : [input, ...extraInput];

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
    const [...extraInputs] = FiberRefs.getOrDefault(
      options.context,
      logExtraInput,
    );

    const nowMillis = options.date.getTime();

    extraInputs.push({
      fiber: FiberId.threadName(options.fiberId),
      timestamp: options.date.toISOString(),
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

    const unsafeLogger = logger as any;

    unsafeLogger.processLogItem(
      unsafeLogger.logLevelThresholds[
        options.logLevel.label === "FATAL" ? "CRITICAL" : options.logLevel.label
      ],
      options.message,
      extraInputs,
    );
  });
};

const PowerToolsLoggerEffect = Effect.map(LoggerInstance, makeLoggerInstance);

/**
 * Creates a logger layer implementation that uses the AWS Lambda Powertools Logger instance provided by implementation layer.
 *
 * @since 1.0.0
 * @category layers
 */
export const BasePowerToolsLoggerLayer = Layer.merge(
  Log.replaceEffect(Log.defaultLogger, PowerToolsLoggerEffect),
  Log.minimumLogLevel(LogLevel.All),
);

/**
 * Creates a logger layer implementation that uses the AWS Lambda Powertools Logger instance configured by logger options layer.
 *
 * @since 1.0.0
 * @category layers
 */
export const PowerToolsLoggerLayer = BasePowerToolsLoggerLayer.pipe(
  Layer.provide(LoggerInstanceLayer),
);

/**
 * Creates a logger layer implementation that uses the default AWS Lambda Powertools Logger instance.
 *
 * @since 1.0.0
 * @category layers
 */
export const DefaultPowerToolsLoggerLayer = PowerToolsLoggerLayer.pipe(
  Layer.provide(DefaultLoggerOptionsLayer),
);
