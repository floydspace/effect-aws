/**
 * @since 1.0.0
 */
import {
  DeleteThingShadowCommand,
  type DeleteThingShadowCommandInput,
  type DeleteThingShadowCommandOutput,
  GetRetainedMessageCommand,
  type GetRetainedMessageCommandInput,
  type GetRetainedMessageCommandOutput,
  GetThingShadowCommand,
  type GetThingShadowCommandInput,
  type GetThingShadowCommandOutput,
  type IoTDataPlaneClient,
  type IoTDataPlaneClientConfig,
  IoTDataPlaneServiceException,
  ListNamedShadowsForThingCommand,
  type ListNamedShadowsForThingCommandInput,
  type ListNamedShadowsForThingCommandOutput,
  ListRetainedMessagesCommand,
  type ListRetainedMessagesCommandInput,
  type ListRetainedMessagesCommandOutput,
  PublishCommand,
  type PublishCommandInput,
  type PublishCommandOutput,
  UpdateThingShadowCommand,
  type UpdateThingShadowCommandInput,
  type UpdateThingShadowCommandOutput,
} from "@aws-sdk/client-iot-data-plane";
import { Data, Effect, Layer, Record } from "effect";
import type {
  ConflictError,
  InternalFailureError,
  InvalidRequestError,
  MethodNotAllowedError,
  RequestEntityTooLargeError,
  ResourceNotFoundError,
  ServiceUnavailableError,
  TaggedException,
  ThrottlingError,
  UnauthorizedError,
  UnsupportedDocumentEncodingError,
} from "./Errors.js";
import { AllServiceErrors, SdkError } from "./Errors.js";
import { IoTDataPlaneClientInstance, IoTDataPlaneClientInstanceLayer } from "./IoTDataPlaneClientInstance.js";
import {
  DefaultIoTDataPlaneClientConfigLayer,
  IoTDataPlaneClientInstanceConfig,
  makeDefaultIoTDataPlaneClientInstanceConfig,
} from "./IoTDataPlaneClientInstanceConfig.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  DeleteThingShadowCommand,
  GetRetainedMessageCommand,
  GetThingShadowCommand,
  ListNamedShadowsForThingCommand,
  ListRetainedMessagesCommand,
  PublishCommand,
  UpdateThingShadowCommand,
};

interface IoTDataPlaneService$ {
  readonly _: unique symbol;

  /**
   * @see {@link DeleteThingShadowCommand}
   */
  deleteThingShadow(
    args: DeleteThingShadowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteThingShadowCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MethodNotAllowedError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | UnsupportedDocumentEncodingError
  >;

  /**
   * @see {@link GetRetainedMessageCommand}
   */
  getRetainedMessage(
    args: GetRetainedMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRetainedMessageCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MethodNotAllowedError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetThingShadowCommand}
   */
  getThingShadow(
    args: GetThingShadowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetThingShadowCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MethodNotAllowedError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | UnsupportedDocumentEncodingError
  >;

  /**
   * @see {@link ListNamedShadowsForThingCommand}
   */
  listNamedShadowsForThing(
    args: ListNamedShadowsForThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNamedShadowsForThingCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MethodNotAllowedError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListRetainedMessagesCommand}
   */
  listRetainedMessages(
    args: ListRetainedMessagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRetainedMessagesCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MethodNotAllowedError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | MethodNotAllowedError | ThrottlingError | UnauthorizedError
  >;

  /**
   * @see {@link UpdateThingShadowCommand}
   */
  updateThingShadow(
    args: UpdateThingShadowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateThingShadowCommandOutput,
    | SdkError
    | ConflictError
    | InternalFailureError
    | InvalidRequestError
    | MethodNotAllowedError
    | RequestEntityTooLargeError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | UnsupportedDocumentEncodingError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTDataPlaneService = Effect.gen(function*(_) {
  const client = yield* _(IoTDataPlaneClientInstance);

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
          if (e instanceof IoTDataPlaneServiceException && AllServiceErrors.includes(e.name)) {
            const ServiceException = Data.tagged<
              TaggedException<IoTDataPlaneServiceException>
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
  }, {}) as IoTDataPlaneService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class IoTDataPlaneService extends Effect.Tag("@effect-aws/client-iot-data-plane/IoTDataPlaneService")<
  IoTDataPlaneService,
  IoTDataPlaneService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeIoTDataPlaneService).pipe(
    Layer.provide(IoTDataPlaneClientInstanceLayer),
    Layer.provide(DefaultIoTDataPlaneClientConfigLayer),
  );
  static readonly layer = (config: IoTDataPlaneClientConfig) =>
    Layer.effect(this, makeIoTDataPlaneService).pipe(
      Layer.provide(IoTDataPlaneClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          IoTDataPlaneClientInstanceConfig,
          makeDefaultIoTDataPlaneClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTDataPlaneClientConfig) => IoTDataPlaneClient,
  ) =>
    Layer.effect(this, makeIoTDataPlaneService).pipe(
      Layer.provide(
        Layer.effect(
          IoTDataPlaneClientInstance,
          Effect.map(makeDefaultIoTDataPlaneClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias IoTDataPlaneService
 */
export const IoTDataPlane = IoTDataPlaneService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTDataPlane.baseLayer instead
 */
export const BaseIoTDataPlaneServiceLayer = Layer.effect(
  IoTDataPlaneService,
  makeIoTDataPlaneService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTDataPlane.layer instead
 */
export const IoTDataPlaneServiceLayer = BaseIoTDataPlaneServiceLayer.pipe(
  Layer.provide(IoTDataPlaneClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTDataPlane.defaultLayer instead
 */
export const DefaultIoTDataPlaneServiceLayer = IoTDataPlaneService.defaultLayer;
