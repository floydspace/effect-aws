import type {
  LogItemExtraInput,
  LogItemMessage,
} from "@aws-lambda-powertools/logger/lib/types";
import * as Context from "@effect/data/Context";
import * as HashMap from "@effect/data/HashMap";
import * as List from "@effect/data/List";
import * as Cause from "@effect/io/Cause";
import * as Effect from "@effect/io/Effect";
import * as FiberId from "@effect/io/FiberId";
import * as FiberRef from "@effect/io/FiberRef";
import * as FiberRefs from "@effect/io/FiberRefs";
import * as Log from "@effect/io/Logger";

export interface Logger {
  trace?: (message: any, ...content: any[]) => void;
  debug: (message: any, ...content: any[]) => void;
  info: (message: any, ...content: any[]) => void;
  warn: (message: any, ...content: any[]) => void;
  error: (message: any, ...content: any[]) => void;
}

export const LoggerInstanceTag = Context.Tag<Logger>(
  "@effect-aws/Powertools/Logger",
);

const logExtraInput = FiberRef.unsafeMake<LogItemExtraInput>([]);

const processLog = (
  effect: (message: string) => Effect.Effect<never, never, void>,
) => {
  return (input: LogItemMessage, ...extraInput: LogItemExtraInput) => {
    const message = typeof input === "string" ? input : input.message;

    const extraInputs =
      typeof input === "string" ? extraInput : [input, ...extraInput];

    return Effect.locally(effect(message), logExtraInput, extraInputs);
  };
};

/**
 * Logs the specified message at the debug log level.
 * It prints a log item with level DEBUG.
 */
export const logDebug = processLog(Effect.logDebug);
/**
 * Logs the specified message at the info log level.
 * It prints a log item with level INFO.
 */
export const logInfo = processLog(Effect.logInfo);
/**
 * Logs the specified message at the warning log level.
 * It prints a log item with level WARN.
 */
export const logWarning = processLog(Effect.logWarning);
/**
 * Logs the specified message at the error log level.
 * It prints a log item with level ERROR.
 */
export const logError = processLog(Effect.logError);
/**
 * Logs the specified message at the fatal log level.
 * It prints a log item with level CRITICAL.
 */
export const logFatal = processLog(Effect.logFatal);
/**
 * Logs the specified message at the fatal log level.
 * It prints a log item with level CRITICAL.
 * @alias logFatal
 */
export const logCritical = processLog(Effect.logFatal);

export const powerToolsImpl = (logger: Logger) => {
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

    (logger as any).processLogItem(
      options.logLevel.label === "FATAL" ? "CRITICAL" : options.logLevel.label,
      options.message,
      extraInputs,
    );
  });
};

/**
 * Creates a logger effect layer implementation that uses the AWS Lambda Powertools Logger.
 */
export const PowerToolsImpl = Log.replaceEffect(
  Log.defaultLogger,
  LoggerInstanceTag.pipe(Effect.map(powerToolsImpl)),
);
