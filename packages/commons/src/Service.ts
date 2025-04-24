/**
 * @since 0.1.0
 */
import { ServiceException } from "@smithy/smithy-client";
import type { Client, MiddlewareStack } from "@smithy/types";
import type { Array } from "effect";
import { Cause, Data, Effect, Option, Record, Runtime, Scope, String } from "effect";
import type { TaggedException } from "./Errors.js";
import { SdkError } from "./Errors.js";
import * as HttpHandler from "./HttpHandler.js";
import type { RuntimeOptions } from "./internal/httpHandler.js";
import type { BaseResolvedConfig, CommandCtor, LoggerResolvedConfig } from "./internal/service.js";
import type { HttpHandlerOptions } from "./Types.js";

type ServiceFnOptions = {
  errorTags?: Array.NonEmptyReadonlyArray<string>;
  resolveClientConfig: Effect.Effect<LoggerResolvedConfig>;
};

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
    if (Runtime.isFiberFailure(e) && Cause.isFailType(e[Runtime.FiberFailureCauseId])) {
      return e[Runtime.FiberFailureCauseId].error;
    }
    if (e.name === "TimeoutError") {
      return new Cause.TimeoutException(e.message);
    }
    return SdkError({ ...e, name: "SdkError", message: e.message, stack: e.stack });
  }
  throw e;
};

/**
 * @since 0.1.0
 * @category constructors
 */
export const makeServiceFn = (
  client: Client<any, any, BaseResolvedConfig>,
  CommandCtor: CommandCtor<any>,
  fnOptions: ServiceFnOptions,
) => {
  return (args: any, options?: HttpHandlerOptions) =>
    Effect.gen(function*() {
      const config = yield* fnOptions.resolveClientConfig;
      const runtime = yield* Effect.runtime();

      return yield* Effect.acquireUseRelease(
        Scope.make(),
        (scope) =>
          Effect.tryPromise({
            try: (abortSignal) =>
              client.send(new CommandCtor(args, config, { runtime, scope }), { ...(options ?? {}), abortSignal }),
            catch: catchServiceExceptions(fnOptions.errorTags),
          }),
        Scope.close,
      );
    });
};

/**
 * @since 0.1.0
 * @category constructors
 */
export const fromCommandsAndServiceFn = <Service>(
  commands: Record<string, CommandCtor<any>>,
  serviceFnMaker: (CommandCtor: CommandCtor<any>) => ReturnType<typeof makeServiceFn>,
): Effect.Effect<Service> =>
  Effect.gen(function*() {
    const maybeRequestHandler = yield* Effect.serviceOption(HttpHandler.RequestHandler);

    return Record.mapEntries(commands, (CommandCtor, command) => {
      const ExtendedCommand = class extends CommandCtor {
        constructor(
          args: any,
          private config: LoggerResolvedConfig,
          private runtimeOptions: RuntimeOptions,
        ) {
          super(args);
        }

        resolveMiddleware(
          stack: MiddlewareStack<any, any>,
          configuration: BaseResolvedConfig,
          options: any,
        ) {
          return super.resolveMiddleware(stack, {
            ...configuration,
            ...(this.config.logger ? { logger: this.config.logger } : {}),
            ...(Option.isSome(maybeRequestHandler)
              ? { requestHandler: HttpHandler.toClientRequestHandler(maybeRequestHandler.value, this.runtimeOptions) }
              : {}),
          }, options);
        }
      };

      const serviceFnName = String.uncapitalize(command).replace(/Command$/, "");
      return [serviceFnName, serviceFnMaker(ExtendedCommand)];
    }) as Service;
  });

/**
 * @since 0.1.0
 * @category constructors
 */
export const fromClientAndCommands = <Service>(
  client: Client<any, any, BaseResolvedConfig>,
  commands: Record<string, CommandCtor<any>>,
  options: ServiceFnOptions,
): Effect.Effect<Service> =>
  fromCommandsAndServiceFn(commands, (CommandCtor) => makeServiceFn(client, CommandCtor, options));
