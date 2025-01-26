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
  IoTJobsDataPlaneServiceException,
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
import { Data, Effect, Layer, Record } from "effect";
import { AllServiceErrors, SdkError } from "./Errors.js";
import type {
  CertificateValidationError,
  ConflictError,
  InternalServerError,
  InvalidRequestError,
  InvalidStateTransitionError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ServiceUnavailableError,
  TaggedException,
  TerminalStateError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import {
  IoTJobsDataPlaneClientInstance,
  IoTJobsDataPlaneClientInstanceLayer,
} from "./IoTJobsDataPlaneClientInstance.js";
import {
  DefaultIoTJobsDataPlaneClientConfigLayer,
  IoTJobsDataPlaneClientInstanceConfig,
  makeDefaultIoTJobsDataPlaneClientInstanceConfig,
} from "./IoTJobsDataPlaneClientInstanceConfig.js";

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
export const makeIoTJobsDataPlaneService = Effect.gen(function*(_) {
  const client = yield* _(IoTJobsDataPlaneClientInstance);

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
          if (e instanceof IoTJobsDataPlaneServiceException && AllServiceErrors.includes(e.name)) {
            const ServiceException = Data.tagged<
              TaggedException<IoTJobsDataPlaneServiceException>
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
  }, {}) as IoTJobsDataPlaneService$;
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
  static readonly defaultLayer = Layer.effect(this, makeIoTJobsDataPlaneService).pipe(
    Layer.provide(IoTJobsDataPlaneClientInstanceLayer),
    Layer.provide(DefaultIoTJobsDataPlaneClientConfigLayer),
  );
  static readonly layer = (config: IoTJobsDataPlaneClientConfig) =>
    Layer.effect(this, makeIoTJobsDataPlaneService).pipe(
      Layer.provide(IoTJobsDataPlaneClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          IoTJobsDataPlaneClientInstanceConfig,
          makeDefaultIoTJobsDataPlaneClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTJobsDataPlaneClientConfig) => IoTJobsDataPlaneClient,
  ) =>
    Layer.effect(this, makeIoTJobsDataPlaneService).pipe(
      Layer.provide(
        Layer.effect(
          IoTJobsDataPlaneClientInstance,
          Effect.map(makeDefaultIoTJobsDataPlaneClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias IoTJobsDataPlaneService
 */
export const IoTJobsDataPlane = IoTJobsDataPlaneService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTJobsDataPlane.baseLayer instead
 */
export const BaseIoTJobsDataPlaneServiceLayer = Layer.effect(
  IoTJobsDataPlaneService,
  makeIoTJobsDataPlaneService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTJobsDataPlane.layer instead
 */
export const IoTJobsDataPlaneServiceLayer = BaseIoTJobsDataPlaneServiceLayer.pipe(
  Layer.provide(IoTJobsDataPlaneClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use IoTJobsDataPlane.defaultLayer instead
 */
export const DefaultIoTJobsDataPlaneServiceLayer = IoTJobsDataPlaneService.defaultLayer;
