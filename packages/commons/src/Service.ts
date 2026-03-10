/**
 * @since 0.1.0
 */
import type { CommandImpl, SmithyResolvedConfiguration } from "@smithy/smithy-client";
import { ServiceException } from "@smithy/smithy-client";
import type {
  Client,
  HandlerOptions,
  Logger,
  MiddlewareStack,
  PaginationConfiguration,
  Paginator,
  RequestHandler,
} from "@smithy/types";
import type * as Array from "effect/Array";
import * as Cause from "effect/Cause";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import * as Option from "effect/Option";
import * as Record from "effect/Record";
import * as Runtime from "effect/Runtime";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as String from "effect/String";
import type { TaggedException } from "./Errors.js";
import { SdkError } from "./Errors.js";
import * as HttpHandler from "./HttpHandler.js";
import type { RuntimeOptions } from "./internal/httpHandler.js";
import type { HttpHandlerOptions } from "./Types.js";

/**
 * @since 0.3.0
 * @category models
 */
export interface LoggerResolvedConfig {
  logger?: Logger;
}

/**
 * @since 0.3.0
 * @category models
 */
export interface BaseResolvedConfig
  extends Required<LoggerResolvedConfig>, SmithyResolvedConfiguration<HandlerOptions>
{
  requestHandler: RequestHandler<any, any, any>;
}

/**
 * @since 0.3.0
 * @category models
 */
export type CommandCtor<I> = new(input: I, ...args: Array<any>) => CommandImpl<I, any, BaseResolvedConfig>;

/**
 * @since 0.4.0
 * @category models
 */
export type PaginatorCtor<I> = (config: PaginationConfiguration, input: I, ...args: Array<any>) => Paginator<any>;

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
 * @since 0.4.0
 * @category constructors
 */
export const makeServiceStreamFn = (
  client: Client<any, any, BaseResolvedConfig>,
  paginateFn: PaginatorCtor<any>,
  fnOptions: ServiceFnOptions,
) => {
  return (args: any, options?: HttpHandlerOptions) => {
    const paginator = paginateFn({ client }, args, options);

    return Stream.fromAsyncIterable(
      paginator,
      catchServiceExceptions(fnOptions.errorTags),
    );
  };
};

/**
 * @since 0.1.0
 * @category constructors
 */
export const fromCommandsAndServiceFn = <Service>(
  commands: Record<string, CommandCtor<any>>,
  serviceFnMaker: (CommandCtor: CommandCtor<any>) => ReturnType<typeof makeServiceFn>,
  paginators?: Record<string, PaginatorCtor<any>>,
  streamFnMaker?: (paginateFn: PaginatorCtor<any>) => ReturnType<typeof makeServiceStreamFn>,
): Effect.Effect<Service> =>
  Effect.gen(function*() {
    const maybeRequestHandler = yield* Effect.serviceOption(HttpHandler.RequestHandler);

    const effectCommands = pipe(
      commands,
      Record.filter(Boolean),
      Record.mapEntries((CommandCtor, command) => {
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
      }),
    ) as Service;

    const streamCommands = paginators ?
      pipe(
        paginators,
        Record.filter(Boolean),
        Record.mapEntries((paginateFn, command) => {
          const serviceFnName = String.uncapitalize(command.replace(/^paginate/, "")) + "Stream";
          return [serviceFnName, streamFnMaker?.(paginateFn)];
        }),
      )
      : {};

    return { ...effectCommands, ...streamCommands } as Service;
  });

/**
 * @since 0.1.0
 * @category constructors
 */
export const fromClientAndCommands = <Service>(
  client: Client<any, any, BaseResolvedConfig>,
  commands: Record<string, CommandCtor<any>>,
  options: ServiceFnOptions,
  paginators?: Record<string, PaginatorCtor<any>>,
): Effect.Effect<Service> =>
  fromCommandsAndServiceFn(
    commands,
    (CommandCtor) => makeServiceFn(client, CommandCtor, options),
    paginators,
    (paginateFn) => makeServiceStreamFn(client, paginateFn, options),
  );
