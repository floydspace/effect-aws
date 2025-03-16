/**
 * @since 1.0.0
 */
import { Logger } from "@aws-lambda-powertools/logger";
import { Context, Effect, Layer } from "effect";
import * as LoggerOptions from "./LoggerOptions.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class LoggerInstance extends Context.Tag(
  "@effect-aws/powertools-logger/LoggerInstance",
)<LoggerInstance, Logger>() {}

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(
  LoggerInstance,
  Effect.map(LoggerOptions.getLoggerOptions, (options) => new Logger(options)),
);
