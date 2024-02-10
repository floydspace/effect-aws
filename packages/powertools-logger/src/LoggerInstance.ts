/**
 * @since 1.0.0
 */
import { Logger } from "@aws-lambda-powertools/logger";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { DefaultLoggerOptionsLayer, LoggerOptions } from "./LoggerOptions";

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
export const LoggerInstanceLayer = Layer.effect(
  LoggerInstance,
  Effect.map(LoggerOptions, (options) => new Logger(options)),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultLoggerInstanceLayer = Layer.provide(
  DefaultLoggerOptionsLayer,
  LoggerInstanceLayer,
);
