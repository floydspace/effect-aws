/**
 * @since 0.1.0
 */
import { type CommandImpl, ServiceException } from "@smithy/smithy-client";
import type { Client } from "@smithy/types";
import type { Array } from "effect";
import { Data, Effect, Record, String } from "effect";
import type { TaggedException } from "./Errors.js";
import { SdkError } from "./Errors.js";
import type { HttpHandlerOptions } from "./Types.js";

type CommandCtor<I> = new(input: I) => CommandImpl<I, any, any>;

/**
 * @since 0.1.0
 * @category errors
 */
export const catchServiceExceptions = (errorTags?: Array.NonEmptyReadonlyArray<string>) => (e: unknown) => {
  if (e instanceof ServiceException && (!errorTags || errorTags.includes(e.name))) {
    const ServiceException = Data.tagged<TaggedException<ServiceException>>(e.name);

    return ServiceException({ ...e, message: e.message, stack: e.stack });
  }
  if (e instanceof Error) {
    return SdkError({ ...e, name: "SdkError", message: e.message, stack: e.stack });
  }
  throw e;
};

/**
 * @since 0.1.0
 * @category constructors
 */
export const makeServiceFn = (
  client: Client<any, any, any>,
  CommandCtor: CommandCtor<any>,
  errorTags?: Array.NonEmptyReadonlyArray<string>,
) => {
  return (args: any, options?: HttpHandlerOptions) =>
    Effect.tryPromise({
      try: (abortSignal) => client.send(new CommandCtor(args), { ...(options ?? {}), abortSignal }),
      catch: catchServiceExceptions(errorTags),
    });
};

/**
 * @since 0.1.0
 * @category constructors
 */
export const fromCommandsAndServiceFn = <Service>(
  commands: Record<string, CommandCtor<any>>,
  serviceFnMaker: (CommandCtor: CommandCtor<any>) => ReturnType<typeof makeServiceFn>,
): Service =>
  Record.mapEntries(commands, (CommandCtor, command) => {
    const serviceFnName = String.uncapitalize(command).replace(/Command$/, "");
    return [serviceFnName, serviceFnMaker(CommandCtor)];
  }) as Service;

/**
 * @since 0.1.0
 * @category constructors
 */
export const fromClientAndCommands = <Service>(
  client: Client<any, any, any>,
  commands: Record<string, CommandCtor<any>>,
  errorTags?: Array.NonEmptyReadonlyArray<string>,
): Service => fromCommandsAndServiceFn(commands, (CommandCtor) => makeServiceFn(client, CommandCtor, errorTags));
