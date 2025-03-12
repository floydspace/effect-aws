/**
 * @since 1.0.0
 */
import {
  ApplyGuardrailCommand,
  type ApplyGuardrailCommandInput,
  type ApplyGuardrailCommandOutput,
  type BedrockRuntimeClient,
  type BedrockRuntimeClientConfig,
  ConverseCommand,
  type ConverseCommandInput,
  type ConverseCommandOutput,
  ConverseStreamCommand,
  type ConverseStreamCommandInput,
  type ConverseStreamCommandOutput,
  GetAsyncInvokeCommand,
  type GetAsyncInvokeCommandInput,
  type GetAsyncInvokeCommandOutput,
  InvokeModelCommand,
  type InvokeModelCommandInput,
  type InvokeModelCommandOutput,
  InvokeModelWithResponseStreamCommand,
  type InvokeModelWithResponseStreamCommandInput,
  type InvokeModelWithResponseStreamCommandOutput,
  ListAsyncInvokesCommand,
  type ListAsyncInvokesCommandInput,
  type ListAsyncInvokesCommandOutput,
  StartAsyncInvokeCommand,
  type StartAsyncInvokeCommandInput,
  type StartAsyncInvokeCommandOutput,
} from "@aws-sdk/client-bedrock-runtime";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import * as Instance from "./BedrockRuntimeClientInstance.js";
import * as BedrockRuntimeServiceConfig from "./BedrockRuntimeServiceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  ModelError,
  ModelNotReadyError,
  ModelStreamError,
  ModelTimeoutError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ServiceUnavailableError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  ApplyGuardrailCommand,
  ConverseCommand,
  ConverseStreamCommand,
  GetAsyncInvokeCommand,
  InvokeModelCommand,
  InvokeModelWithResponseStreamCommand,
  ListAsyncInvokesCommand,
  StartAsyncInvokeCommand,
};

interface BedrockRuntimeService$ {
  readonly _: unique symbol;

  /**
   * @see {@link ApplyGuardrailCommand}
   */
  applyGuardrail(
    args: ApplyGuardrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ApplyGuardrailCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ConverseCommand}
   */
  converse(
    args: ConverseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConverseCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ModelError
    | ModelNotReadyError
    | ModelTimeoutError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ConverseStreamCommand}
   */
  converseStream(
    args: ConverseStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConverseStreamCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ModelError
    | ModelNotReadyError
    | ModelTimeoutError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAsyncInvokeCommand}
   */
  getAsyncInvoke(
    args: GetAsyncInvokeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAsyncInvokeCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link InvokeModelCommand}
   */
  invokeModel(
    args: InvokeModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeModelCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ModelError
    | ModelNotReadyError
    | ModelTimeoutError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link InvokeModelWithResponseStreamCommand}
   */
  invokeModelWithResponseStream(
    args: InvokeModelWithResponseStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeModelWithResponseStreamCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ModelError
    | ModelNotReadyError
    | ModelStreamError
    | ModelTimeoutError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAsyncInvokesCommand}
   */
  listAsyncInvokes(
    args: ListAsyncInvokesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAsyncInvokesCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link StartAsyncInvokeCommand}
   */
  startAsyncInvoke(
    args: StartAsyncInvokeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartAsyncInvokeCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeBedrockRuntimeService = Effect.gen(function*() {
  const client = yield* Instance.BedrockRuntimeClientInstance;

  return Service.fromClientAndCommands<BedrockRuntimeService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: BedrockRuntimeServiceConfig.toBedrockRuntimeClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class BedrockRuntimeService extends Effect.Tag("@effect-aws/client-bedrock-runtime/BedrockRuntimeService")<
  BedrockRuntimeService,
  BedrockRuntimeService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeBedrockRuntimeService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: BedrockRuntimeService.Config) =>
    Layer.effect(this, makeBedrockRuntimeService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(BedrockRuntimeServiceConfig.setBedrockRuntimeServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: BedrockRuntimeClientConfig) => BedrockRuntimeClient,
  ) =>
    Layer.effect(this, makeBedrockRuntimeService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.BedrockRuntimeClientInstance,
          Effect.map(BedrockRuntimeServiceConfig.toBedrockRuntimeClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace BedrockRuntimeService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<BedrockRuntimeClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
