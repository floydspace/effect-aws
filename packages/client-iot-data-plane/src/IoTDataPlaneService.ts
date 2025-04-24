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
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  ConflictError,
  InternalFailureError,
  InvalidRequestError,
  MethodNotAllowedError,
  RequestEntityTooLargeError,
  ResourceNotFoundError,
  ServiceUnavailableError,
  ThrottlingError,
  UnauthorizedError,
  UnsupportedDocumentEncodingError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./IoTDataPlaneClientInstance.js";
import * as IoTDataPlaneServiceConfig from "./IoTDataPlaneServiceConfig.js";

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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MethodNotAllowedError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateThingShadowCommand}
   */
  updateThingShadow(
    args: UpdateThingShadowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateThingShadowCommandOutput,
    | Cause.TimeoutException
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
export const makeIoTDataPlaneService = Effect.gen(function*() {
  const client = yield* Instance.IoTDataPlaneClientInstance;

  return yield* Service.fromClientAndCommands<IoTDataPlaneService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: IoTDataPlaneServiceConfig.toIoTDataPlaneClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class IoTDataPlaneService extends Effect.Tag("@effect-aws/client-iot-data-plane/IoTDataPlaneService")<
  IoTDataPlaneService,
  IoTDataPlaneService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeIoTDataPlaneService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: IoTDataPlaneService.Config) =>
    Layer.effect(this, makeIoTDataPlaneService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(IoTDataPlaneServiceConfig.setIoTDataPlaneServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTDataPlaneClientConfig) => IoTDataPlaneClient,
  ) =>
    Layer.effect(this, makeIoTDataPlaneService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.IoTDataPlaneClientInstance,
          Effect.map(IoTDataPlaneServiceConfig.toIoTDataPlaneClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace IoTDataPlaneService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<IoTDataPlaneClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
