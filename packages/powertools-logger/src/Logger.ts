import { Logger } from "@aws-lambda-powertools/logger";
import type {
  LogAttributes,
  LogItemExtraInput,
  LogItemMessage,
} from "@aws-lambda-powertools/logger/lib/types";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as FiberId from "effect/FiberId";
import * as FiberRef from "effect/FiberRef";
import * as FiberRefs from "effect/FiberRefs";
import * as HashMap from "effect/HashMap";
import * as Layer from "effect/Layer";
import * as List from "effect/List";
import * as Log from "effect/Logger";
import * as LogLevel from "effect/LogLevel";
import {
  DefaultLoggerOptionsLayer,
  LoggerInstanceLayer,
  LoggerInstanceTag,
} from "./Context";

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

const powerToolsImpl = (logger: Logger) => {
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

const PowerToolsLoggerEffect = LoggerInstanceTag.pipe(
  Effect.map(powerToolsImpl),
);

/**
 * Creates a logger layer implementation that uses the AWS Lambda Powertools Logger instance provided by implementation layer.
 */
export const BasePowerToolsLoggerLayer = Layer.merge(
  Log.replaceEffect(Log.defaultLogger, PowerToolsLoggerEffect),
  Log.minimumLogLevel(LogLevel.All),
);

/**
 * Creates a logger layer implementation that uses the AWS Lambda Powertools Logger instance configured by logger options layer.
 */
export const PowerToolsLoggerLayer = BasePowerToolsLoggerLayer.pipe(
  Layer.provide(LoggerInstanceLayer),
);

/**
 * Creates a logger layer implementation that uses the default AWS Lambda Powertools Logger instance.
 */
export const DefaultPowerToolsLoggerLayer = PowerToolsLoggerLayer.pipe(
  Layer.provide(DefaultLoggerOptionsLayer),
);
