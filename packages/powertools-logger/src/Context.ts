import { Logger } from "@aws-lambda-powertools/logger";
import { ConstructorOptions } from "@aws-lambda-powertools/logger/lib/types";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

export class LoggerOptions extends Data.TaggedClass(
  "LoggerOptions",
)<ConstructorOptions> {}

export const LoggerOptionsTag = Context.Tag<LoggerOptions>(
  "@effect-aws/PowerToolsLogger/Options",
);

export const DefaultLoggerOptionsLayer = Layer.succeed(
  LoggerOptionsTag,
  new LoggerOptions({}),
);

export const LoggerInstanceTag = Context.Tag<Logger>(
  "@effect-aws/PowerToolsLogger/Instance",
);

export const LoggerInstanceLayer = Layer.effect(
  LoggerInstanceTag,
  LoggerOptionsTag.pipe(Effect.map((options) => new Logger(options))),
);

export const DefaultLoggerInstanceLayer = Layer.provide(
  DefaultLoggerOptionsLayer,
  LoggerInstanceLayer,
);
