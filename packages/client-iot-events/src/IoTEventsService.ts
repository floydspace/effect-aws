/**
 * @since 1.0.0
 */
import {
  CreateAlarmModelCommand,
  type CreateAlarmModelCommandInput,
  type CreateAlarmModelCommandOutput,
  CreateDetectorModelCommand,
  type CreateDetectorModelCommandInput,
  type CreateDetectorModelCommandOutput,
  CreateInputCommand,
  type CreateInputCommandInput,
  type CreateInputCommandOutput,
  DeleteAlarmModelCommand,
  type DeleteAlarmModelCommandInput,
  type DeleteAlarmModelCommandOutput,
  DeleteDetectorModelCommand,
  type DeleteDetectorModelCommandInput,
  type DeleteDetectorModelCommandOutput,
  DeleteInputCommand,
  type DeleteInputCommandInput,
  type DeleteInputCommandOutput,
  DescribeAlarmModelCommand,
  type DescribeAlarmModelCommandInput,
  type DescribeAlarmModelCommandOutput,
  DescribeDetectorModelAnalysisCommand,
  type DescribeDetectorModelAnalysisCommandInput,
  type DescribeDetectorModelAnalysisCommandOutput,
  DescribeDetectorModelCommand,
  type DescribeDetectorModelCommandInput,
  type DescribeDetectorModelCommandOutput,
  DescribeInputCommand,
  type DescribeInputCommandInput,
  type DescribeInputCommandOutput,
  DescribeLoggingOptionsCommand,
  type DescribeLoggingOptionsCommandInput,
  type DescribeLoggingOptionsCommandOutput,
  GetDetectorModelAnalysisResultsCommand,
  type GetDetectorModelAnalysisResultsCommandInput,
  type GetDetectorModelAnalysisResultsCommandOutput,
  type IoTEventsClient,
  type IoTEventsClientConfig,
  ListAlarmModelsCommand,
  type ListAlarmModelsCommandInput,
  type ListAlarmModelsCommandOutput,
  ListAlarmModelVersionsCommand,
  type ListAlarmModelVersionsCommandInput,
  type ListAlarmModelVersionsCommandOutput,
  ListDetectorModelsCommand,
  type ListDetectorModelsCommandInput,
  type ListDetectorModelsCommandOutput,
  ListDetectorModelVersionsCommand,
  type ListDetectorModelVersionsCommandInput,
  type ListDetectorModelVersionsCommandOutput,
  ListInputRoutingsCommand,
  type ListInputRoutingsCommandInput,
  type ListInputRoutingsCommandOutput,
  ListInputsCommand,
  type ListInputsCommandInput,
  type ListInputsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutLoggingOptionsCommand,
  type PutLoggingOptionsCommandInput,
  type PutLoggingOptionsCommandOutput,
  StartDetectorModelAnalysisCommand,
  type StartDetectorModelAnalysisCommandInput,
  type StartDetectorModelAnalysisCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAlarmModelCommand,
  type UpdateAlarmModelCommandInput,
  type UpdateAlarmModelCommandOutput,
  UpdateDetectorModelCommand,
  type UpdateDetectorModelCommandInput,
  type UpdateDetectorModelCommandOutput,
  UpdateInputCommand,
  type UpdateInputCommandInput,
  type UpdateInputCommandOutput,
} from "@aws-sdk/client-iot-events";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  InternalFailureError,
  InvalidRequestError,
  LimitExceededError,
  ResourceAlreadyExistsError,
  ResourceInUseError,
  ResourceNotFoundError,
  ServiceUnavailableError,
  ThrottlingError,
  UnsupportedOperationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./IoTEventsClientInstance.js";
import * as IoTEventsServiceConfig from "./IoTEventsServiceConfig.js";

const commands = {
  CreateAlarmModelCommand,
  CreateDetectorModelCommand,
  CreateInputCommand,
  DeleteAlarmModelCommand,
  DeleteDetectorModelCommand,
  DeleteInputCommand,
  DescribeAlarmModelCommand,
  DescribeDetectorModelCommand,
  DescribeDetectorModelAnalysisCommand,
  DescribeInputCommand,
  DescribeLoggingOptionsCommand,
  GetDetectorModelAnalysisResultsCommand,
  ListAlarmModelVersionsCommand,
  ListAlarmModelsCommand,
  ListDetectorModelVersionsCommand,
  ListDetectorModelsCommand,
  ListInputRoutingsCommand,
  ListInputsCommand,
  ListTagsForResourceCommand,
  PutLoggingOptionsCommand,
  StartDetectorModelAnalysisCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAlarmModelCommand,
  UpdateDetectorModelCommand,
  UpdateInputCommand,
};

interface IoTEventsService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateAlarmModelCommand}
   */
  createAlarmModel(
    args: CreateAlarmModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAlarmModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceInUseError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateDetectorModelCommand}
   */
  createDetectorModel(
    args: CreateDetectorModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDetectorModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceInUseError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateInputCommand}
   */
  createInput(
    args: CreateInputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInputCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteAlarmModelCommand}
   */
  deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAlarmModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteDetectorModelCommand}
   */
  deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDetectorModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteInputCommand}
   */
  deleteInput(
    args: DeleteInputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInputCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeAlarmModelCommand}
   */
  describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeDetectorModelCommand}
   */
  describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDetectorModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeDetectorModelAnalysisCommand}
   */
  describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDetectorModelAnalysisCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeInputCommand}
   */
  describeInput(
    args: DescribeInputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInputCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeLoggingOptionsCommand}
   */
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLoggingOptionsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetDetectorModelAnalysisResultsCommand}
   */
  getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDetectorModelAnalysisResultsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListAlarmModelVersionsCommand}
   */
  listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAlarmModelVersionsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListAlarmModelsCommand}
   */
  listAlarmModels(
    args: ListAlarmModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAlarmModelsCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link ListDetectorModelVersionsCommand}
   */
  listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDetectorModelVersionsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListDetectorModelsCommand}
   */
  listDetectorModels(
    args: ListDetectorModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDetectorModelsCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link ListInputRoutingsCommand}
   */
  listInputRoutings(
    args: ListInputRoutingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInputRoutingsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListInputsCommand}
   */
  listInputs(
    args: ListInputsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInputsCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ServiceUnavailableError | ThrottlingError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ResourceInUseError | ResourceNotFoundError | ThrottlingError
  >;

  /**
   * @see {@link PutLoggingOptionsCommand}
   */
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutLoggingOptionsCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceInUseError
    | ServiceUnavailableError
    | ThrottlingError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StartDetectorModelAnalysisCommand}
   */
  startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDetectorModelAnalysisCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ServiceUnavailableError
    | ThrottlingError
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
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    SdkError | InternalFailureError | InvalidRequestError | ResourceInUseError | ResourceNotFoundError | ThrottlingError
  >;

  /**
   * @see {@link UpdateAlarmModelCommand}
   */
  updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAlarmModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateDetectorModelCommand}
   */
  updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDetectorModelCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateInputCommand}
   */
  updateInput(
    args: UpdateInputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateInputCommandOutput,
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTEventsService = Effect.gen(function*() {
  const client = yield* Instance.IoTEventsClientInstance;

  return Service.fromClientAndCommands<IoTEventsService$>(client, commands, AllServiceErrors);
});

/**
 * @since 1.0.0
 * @category models
 */
export class IoTEventsService extends Effect.Tag("@effect-aws/client-iot-events/IoTEventsService")<
  IoTEventsService,
  IoTEventsService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeIoTEventsService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: IoTEventsService.Config) =>
    Layer.effect(this, makeIoTEventsService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(IoTEventsServiceConfig.setIoTEventsServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTEventsClientConfig) => IoTEventsClient,
  ) =>
    Layer.effect(this, makeIoTEventsService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.IoTEventsClientInstance,
          Effect.map(IoTEventsServiceConfig.toIoTEventsClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace IoTEventsService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<IoTEventsClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
