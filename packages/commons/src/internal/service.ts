import type { CommandImpl, SmithyResolvedConfiguration } from "@smithy/smithy-client";
import type { HandlerOptions, Logger, RequestHandler } from "@smithy/types";

export interface LoggerResolvedConfig {
  logger?: Logger;
}

export interface BaseResolvedConfig
  extends Required<LoggerResolvedConfig>, SmithyResolvedConfiguration<HandlerOptions>
{
  requestHandler: RequestHandler<any, any, any>;
}

export type CommandCtor<I> = new(input: I, ...args: Array<any>) => CommandImpl<I, any, BaseResolvedConfig>;
