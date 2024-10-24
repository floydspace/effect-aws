/**
 * @since 1.0.0
 */
import {
  SchedulerServiceException,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
} from "@aws-sdk/client-scheduler";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  ThrottlingError,
  ValidationError,
  SdkError,
  TaggedException,
} from "./Errors";
import {
  SchedulerClientInstance,
  SchedulerClientInstanceLayer,
} from "./SchedulerClientInstance";
import { DefaultSchedulerClientConfigLayer } from "./SchedulerClientInstanceConfig";

interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

interface SchedulerService$ {
  readonly _: unique symbol;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | SdkError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class SchedulerService extends Effect.Tag(
  "@effect-aws/client-scheduler/SchedulerService",
)<SchedulerService, SchedulerService$>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSchedulerService = Effect.gen(function* (_) {
  const client = yield* _(SchedulerClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (
            e instanceof SchedulerServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<SchedulerServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as SchedulerService$;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseSchedulerServiceLayer = Layer.effect(
  SchedulerService,
  makeSchedulerService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SchedulerServiceLayer = BaseSchedulerServiceLayer.pipe(
  Layer.provide(SchedulerClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSchedulerServiceLayer = SchedulerServiceLayer.pipe(
  Layer.provide(DefaultSchedulerClientConfigLayer),
);
