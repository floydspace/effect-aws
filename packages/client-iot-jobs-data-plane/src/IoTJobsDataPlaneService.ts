/**
 * @since 1.0.0
 */
import {
  DescribeJobExecutionCommand,
  type DescribeJobExecutionCommandInput,
  type DescribeJobExecutionCommandOutput,
  GetPendingJobExecutionsCommand,
  type GetPendingJobExecutionsCommandInput,
  type GetPendingJobExecutionsCommandOutput,
  type IoTJobsDataPlaneClient,
  type IoTJobsDataPlaneClientConfig,
  StartCommandExecutionCommand,
  type StartCommandExecutionCommandInput,
  type StartCommandExecutionCommandOutput,
  StartNextPendingJobExecutionCommand,
  type StartNextPendingJobExecutionCommandInput,
  type StartNextPendingJobExecutionCommandOutput,
  UpdateJobExecutionCommand,
  type UpdateJobExecutionCommandInput,
  type UpdateJobExecutionCommandOutput,
} from "@aws-sdk/client-iot-jobs-data-plane";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  CertificateValidationError,
  ConflictError,
  InternalServerError,
  InvalidRequestError,
  InvalidStateTransitionError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ServiceUnavailableError,
  TerminalStateError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./IoTJobsDataPlaneClientInstance.js";
import * as IoTJobsDataPlaneServiceConfig from "./IoTJobsDataPlaneServiceConfig.js";

const commands = {
  DescribeJobExecutionCommand,
  GetPendingJobExecutionsCommand,
  StartCommandExecutionCommand,
  StartNextPendingJobExecutionCommand,
  UpdateJobExecutionCommand,
};

interface IoTJobsDataPlaneService$ {
  readonly _: unique symbol;

  /**
   * @see {@link DescribeJobExecutionCommand}
   */
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeJobExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateValidationError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | TerminalStateError
    | ThrottlingError
  >;

  /**
   * @see {@link GetPendingJobExecutionsCommand}
   */
  getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPendingJobExecutionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateValidationError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link StartCommandExecutionCommand}
   */
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartCommandExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StartNextPendingJobExecutionCommand}
   */
  startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartNextPendingJobExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateValidationError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateJobExecutionCommand}
   */
  updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateJobExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateValidationError
    | InvalidRequestError
    | InvalidStateTransitionError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTJobsDataPlaneService = Effect.gen(function*() {
  const client = yield* Instance.IoTJobsDataPlaneClientInstance;

  return yield* Service.fromClientAndCommands<IoTJobsDataPlaneService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: IoTJobsDataPlaneServiceConfig.toIoTJobsDataPlaneClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class IoTJobsDataPlaneService
  extends Effect.Tag("@effect-aws/client-iot-jobs-data-plane/IoTJobsDataPlaneService")<
    IoTJobsDataPlaneService,
    IoTJobsDataPlaneService$
  >()
{
  static readonly defaultLayer = Layer.effect(this, makeIoTJobsDataPlaneService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: IoTJobsDataPlaneService.Config) =>
    Layer.effect(this, makeIoTJobsDataPlaneService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(IoTJobsDataPlaneServiceConfig.setIoTJobsDataPlaneServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTJobsDataPlaneClientConfig) => IoTJobsDataPlaneClient,
  ) =>
    Layer.effect(this, makeIoTJobsDataPlaneService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.IoTJobsDataPlaneClientInstance,
          Effect.map(IoTJobsDataPlaneServiceConfig.toIoTJobsDataPlaneClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace IoTJobsDataPlaneService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<IoTJobsDataPlaneClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
