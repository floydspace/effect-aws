/**
 * @since 1.0.0
 */
import {
  ActivatePipelineCommand,
  type ActivatePipelineCommandInput,
  type ActivatePipelineCommandOutput,
  AddTagsCommand,
  type AddTagsCommandInput,
  type AddTagsCommandOutput,
  CreatePipelineCommand,
  type CreatePipelineCommandInput,
  type CreatePipelineCommandOutput,
  type DataPipelineClient,
  type DataPipelineClientConfig,
  DeactivatePipelineCommand,
  type DeactivatePipelineCommandInput,
  type DeactivatePipelineCommandOutput,
  DeletePipelineCommand,
  type DeletePipelineCommandInput,
  type DeletePipelineCommandOutput,
  DescribeObjectsCommand,
  type DescribeObjectsCommandInput,
  type DescribeObjectsCommandOutput,
  DescribePipelinesCommand,
  type DescribePipelinesCommandInput,
  type DescribePipelinesCommandOutput,
  EvaluateExpressionCommand,
  type EvaluateExpressionCommandInput,
  type EvaluateExpressionCommandOutput,
  GetPipelineDefinitionCommand,
  type GetPipelineDefinitionCommandInput,
  type GetPipelineDefinitionCommandOutput,
  ListPipelinesCommand,
  type ListPipelinesCommandInput,
  type ListPipelinesCommandOutput,
  PollForTaskCommand,
  type PollForTaskCommandInput,
  type PollForTaskCommandOutput,
  PutPipelineDefinitionCommand,
  type PutPipelineDefinitionCommandInput,
  type PutPipelineDefinitionCommandOutput,
  QueryObjectsCommand,
  type QueryObjectsCommandInput,
  type QueryObjectsCommandOutput,
  RemoveTagsCommand,
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  ReportTaskProgressCommand,
  type ReportTaskProgressCommandInput,
  type ReportTaskProgressCommandOutput,
  ReportTaskRunnerHeartbeatCommand,
  type ReportTaskRunnerHeartbeatCommandInput,
  type ReportTaskRunnerHeartbeatCommandOutput,
  SetStatusCommand,
  type SetStatusCommandInput,
  type SetStatusCommandOutput,
  SetTaskStatusCommand,
  type SetTaskStatusCommandInput,
  type SetTaskStatusCommandOutput,
  ValidatePipelineDefinitionCommand,
  type ValidatePipelineDefinitionCommandInput,
  type ValidatePipelineDefinitionCommandOutput,
} from "@aws-sdk/client-data-pipeline";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import * as Instance from "./DataPipelineClientInstance.js";
import * as DataPipelineServiceConfig from "./DataPipelineServiceConfig.js";
import type {
  InternalServiceError,
  InvalidRequestError,
  PipelineDeletedError,
  PipelineNotFoundError,
  SdkError,
  TaskNotFoundError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  ActivatePipelineCommand,
  AddTagsCommand,
  CreatePipelineCommand,
  DeactivatePipelineCommand,
  DeletePipelineCommand,
  DescribeObjectsCommand,
  DescribePipelinesCommand,
  EvaluateExpressionCommand,
  GetPipelineDefinitionCommand,
  ListPipelinesCommand,
  PollForTaskCommand,
  PutPipelineDefinitionCommand,
  QueryObjectsCommand,
  RemoveTagsCommand,
  ReportTaskProgressCommand,
  ReportTaskRunnerHeartbeatCommand,
  SetStatusCommand,
  SetTaskStatusCommand,
  ValidatePipelineDefinitionCommand,
};

interface DataPipelineService$ {
  readonly _: unique symbol;

  /**
   * @see {@link ActivatePipelineCommand}
   */
  activatePipeline(
    args: ActivatePipelineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ActivatePipelineCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link CreatePipelineCommand}
   */
  createPipeline(
    args: CreatePipelineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePipelineCommandOutput,
    Cause.TimeoutError | SdkError | InternalServiceError | InvalidRequestError
  >;

  /**
   * @see {@link DeactivatePipelineCommand}
   */
  deactivatePipeline(
    args: DeactivatePipelineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeactivatePipelineCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link DeletePipelineCommand}
   */
  deletePipeline(
    args: DeletePipelineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePipelineCommandOutput,
    Cause.TimeoutError | SdkError | InternalServiceError | InvalidRequestError | PipelineNotFoundError
  >;

  /**
   * @see {@link DescribeObjectsCommand}
   */
  describeObjects(
    args: DescribeObjectsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeObjectsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link DescribePipelinesCommand}
   */
  describePipelines(
    args: DescribePipelinesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePipelinesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link EvaluateExpressionCommand}
   */
  evaluateExpression(
    args: EvaluateExpressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EvaluateExpressionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
    | TaskNotFoundError
  >;

  /**
   * @see {@link GetPipelineDefinitionCommand}
   */
  getPipelineDefinition(
    args: GetPipelineDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPipelineDefinitionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link ListPipelinesCommand}
   */
  listPipelines(
    args: ListPipelinesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPipelinesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServiceError | InvalidRequestError
  >;

  /**
   * @see {@link PollForTaskCommand}
   */
  pollForTask(
    args: PollForTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PollForTaskCommandOutput,
    Cause.TimeoutError | SdkError | InternalServiceError | InvalidRequestError | TaskNotFoundError
  >;

  /**
   * @see {@link PutPipelineDefinitionCommand}
   */
  putPipelineDefinition(
    args: PutPipelineDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutPipelineDefinitionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link QueryObjectsCommand}
   */
  queryObjects(
    args: QueryObjectsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    QueryObjectsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link ReportTaskProgressCommand}
   */
  reportTaskProgress(
    args: ReportTaskProgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReportTaskProgressCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
    | TaskNotFoundError
  >;

  /**
   * @see {@link ReportTaskRunnerHeartbeatCommand}
   */
  reportTaskRunnerHeartbeat(
    args: ReportTaskRunnerHeartbeatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReportTaskRunnerHeartbeatCommandOutput,
    Cause.TimeoutError | SdkError | InternalServiceError | InvalidRequestError
  >;

  /**
   * @see {@link SetStatusCommand}
   */
  setStatus(
    args: SetStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetStatusCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;

  /**
   * @see {@link SetTaskStatusCommand}
   */
  setTaskStatus(
    args: SetTaskStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetTaskStatusCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
    | TaskNotFoundError
  >;

  /**
   * @see {@link ValidatePipelineDefinitionCommand}
   */
  validatePipelineDefinition(
    args: ValidatePipelineDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ValidatePipelineDefinitionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidRequestError
    | PipelineDeletedError
    | PipelineNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDataPipelineService = Effect.gen(function*() {
  const client = yield* Instance.DataPipelineClientInstance;

  return yield* Service.fromClientAndCommands<DataPipelineService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: DataPipelineServiceConfig.toDataPipelineClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class DataPipelineService extends ServiceMap.Service<
  DataPipelineService,
  DataPipelineService$
>()("@effect-aws/client-data-pipeline/DataPipelineService") {
  static readonly defaultLayer = Layer.effect(this, makeDataPipelineService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: DataPipelineService.Config) =>
    Layer.effect(this, makeDataPipelineService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(DataPipelineServiceConfig.setDataPipelineServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: DataPipelineClientConfig) => DataPipelineClient,
  ) =>
    Layer.effect(this, makeDataPipelineService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.DataPipelineClientInstance,
          Effect.map(DataPipelineServiceConfig.toDataPipelineClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace DataPipelineService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<DataPipelineClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = DataPipelineService$;
}
