/**
 * @since 1.0.0
 */
import { Logger } from "@aws-lambda-powertools/logger";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
