/**
 * @since 1.0.0
 */
import type { ConstructorOptions } from "@aws-lambda-powertools/logger/lib/types";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";

/**
 * @since 1.0.0
 * @category tags
 */
export interface LoggerOptions {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const LoggerOptions = Context.Tag<LoggerOptions, ConstructorOptions>(
  "@effect-aws/powertools-logger/LoggerOptions",
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultLoggerOptionsLayer = Layer.succeed(LoggerOptions, {});
