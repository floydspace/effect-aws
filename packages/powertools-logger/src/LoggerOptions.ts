/**
 * @since 1.0.0
 */
import type { ConstructorOptions } from "@aws-lambda-powertools/logger/types";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";

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
