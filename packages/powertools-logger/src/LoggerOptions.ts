/**
 * @since 1.0.0
 */
import type { ConstructorOptions } from "@aws-lambda-powertools/logger/types";
import { Context, Layer } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class LoggerOptions extends Context.Tag(
  "@effect-aws/powertools-logger/LoggerOptions",
)<LoggerOptions, ConstructorOptions>() {}

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultLoggerOptionsLayer = Layer.succeed(LoggerOptions, {});
