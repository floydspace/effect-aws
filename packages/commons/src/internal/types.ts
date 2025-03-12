import type { CommandImpl, SmithyResolvedConfiguration } from "@smithy/smithy-client";
import type { HandlerOptions, Logger, RequestHandler } from "@smithy/types";

/**
 * @internal
 */
export interface LoggerResolvedConfig {
  logger?: Logger;
}

/**
 * @internal
 */
export interface BaseResolvedConfig
  extends Required<LoggerResolvedConfig>, SmithyResolvedConfiguration<HandlerOptions>
{
  requestHandler: RequestHandler<any, any, any>;
}

/**
 * @internal
 */
export type CommandCtor<I> = new(input: I, ...args: Array<any>) => CommandImpl<I, any, BaseResolvedConfig>;
