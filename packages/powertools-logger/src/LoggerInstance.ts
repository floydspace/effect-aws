/**
 * @since 1.0.0
 */
import { Logger } from "@aws-lambda-powertools/logger";
import { Effect, Layer, ServiceMap } from "effect";
import * as LoggerOptions from "./LoggerOptions.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class LoggerInstance extends ServiceMap.Service<LoggerInstance, Logger>()(
  "@effect-aws/powertools-logger/LoggerInstance",
) {}

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(
  LoggerInstance,
  Effect.map(LoggerOptions.getLoggerOptions, (options) => new Logger(options)),
);
