/**
 * @since 1.0.0
 */
import { type CommandImpl, ServiceException } from "@smithy/smithy-client";
import type { Client } from "@smithy/types";
import { Data, Effect, Record, String } from "effect";
import type { TaggedException } from "./Errors.js";
import { SdkError } from "./Errors.js";
import type { HttpHandlerOptions } from "./Types.js";

type CommandCtor = new<I>(input: I) => CommandImpl<I, any, any>;

const makeServiceFn = (client: Client<any, any, any>, CommandCtor: CommandCtor, errorTags: ReadonlyArray<string>) => {
  return (args: any, options?: HttpHandlerOptions) =>
    Effect.tryPromise({
      try: (abortSignal) => client.send(new CommandCtor(args), { ...(options ?? {}), abortSignal }),
      catch: (e) => {
        if (e instanceof ServiceException && errorTags.includes(e.name)) {
          const ServiceException = Data.tagged<TaggedException<ServiceException>>(e.name);

          return ServiceException({ ...e, message: e.message, stack: e.stack });
        }
        if (e instanceof Error) {
          return SdkError({ ...e, name: "SdkError", message: e.message, stack: e.stack });
        }
        throw e;
      },
    });
};

/**
 * @since 1.0.0
 * @category constructors
 */
export const fromClientAndCommands = <Service>(
  client: Client<any, any, any>,
  commands: Record<string, CommandCtor>,
  errorTags: ReadonlyArray<string>,
): Service =>
  Record.mapEntries(commands, (CommandCtor, command) => {
    const serviceFnName = String.uncapitalize(command).replace(/Command$/, "");
    return [serviceFnName, makeServiceFn(client, CommandCtor, errorTags)];
  }) as Service;
