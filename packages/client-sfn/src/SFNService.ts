/**
 * @since 1.0.0
 */
import {
  CreateActivityCommand,
  CreateActivityCommandInput,
  CreateActivityCommandOutput,
  CreateStateMachineAliasCommand,
  CreateStateMachineAliasCommandInput,
  CreateStateMachineAliasCommandOutput,
  CreateStateMachineCommand,
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
  DeleteActivityCommand,
  DeleteActivityCommandInput,
  DeleteActivityCommandOutput,
  DeleteStateMachineAliasCommand,
  DeleteStateMachineAliasCommandInput,
  DeleteStateMachineAliasCommandOutput,
  DeleteStateMachineCommand,
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput,
  DeleteStateMachineVersionCommand,
  DeleteStateMachineVersionCommandInput,
  DeleteStateMachineVersionCommandOutput,
  DescribeActivityCommand,
  DescribeActivityCommandInput,
  DescribeActivityCommandOutput,
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
  DescribeMapRunCommand,
  DescribeMapRunCommandInput,
  DescribeMapRunCommandOutput,
  DescribeStateMachineAliasCommand,
  DescribeStateMachineAliasCommandInput,
  DescribeStateMachineAliasCommandOutput,
  DescribeStateMachineCommand,
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
  DescribeStateMachineForExecutionCommand,
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
  GetActivityTaskCommand,
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput,
  GetExecutionHistoryCommand,
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
  ListActivitiesCommand,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
  ListMapRunsCommand,
  ListMapRunsCommandInput,
  ListMapRunsCommandOutput,
  ListStateMachineAliasesCommand,
  ListStateMachineAliasesCommandInput,
  ListStateMachineAliasesCommandOutput,
  ListStateMachineVersionsCommand,
  ListStateMachineVersionsCommandInput,
  ListStateMachineVersionsCommandOutput,
  ListStateMachinesCommand,
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput,
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  PublishStateMachineVersionCommand,
  PublishStateMachineVersionCommandInput,
  PublishStateMachineVersionCommandOutput,
  RedriveExecutionCommand,
  RedriveExecutionCommandInput,
  RedriveExecutionCommandOutput,
  SFNServiceException,
  SendTaskFailureCommand,
  SendTaskFailureCommandInput,
  SendTaskFailureCommandOutput,
  SendTaskHeartbeatCommand,
  SendTaskHeartbeatCommandInput,
  SendTaskHeartbeatCommandOutput,
  SendTaskSuccessCommand,
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput,
  StartExecutionCommand,
  StartExecutionCommandInput,
  StartExecutionCommandOutput,
  StartSyncExecutionCommand,
  StartSyncExecutionCommandInput,
  StartSyncExecutionCommandOutput,
  StopExecutionCommand,
  StopExecutionCommandInput,
  StopExecutionCommandOutput,
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput,
  TestStateCommand,
  TestStateCommandInput,
  TestStateCommandOutput,
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  UpdateMapRunCommand,
  UpdateMapRunCommandInput,
  UpdateMapRunCommandOutput,
  UpdateStateMachineAliasCommand,
  UpdateStateMachineAliasCommandInput,
  UpdateStateMachineAliasCommandOutput,
  UpdateStateMachineCommand,
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
} from "@aws-sdk/client-sfn";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  ActivityDoesNotExistError,
  ActivityLimitExceededError,
  ActivityWorkerLimitExceededError,
  ConflictError,
  ExecutionAlreadyExistsError,
  ExecutionDoesNotExistError,
  ExecutionLimitExceededError,
  ExecutionNotRedrivableError,
  InvalidArnError,
  InvalidDefinitionError,
  InvalidExecutionInputError,
  InvalidLoggingConfigurationError,
  InvalidNameError,
  InvalidOutputError,
  InvalidTokenError,
  InvalidTracingConfigurationError,
  MissingRequiredParameterError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  StateMachineAlreadyExistsError,
  StateMachineDeletingError,
  StateMachineDoesNotExistError,
  StateMachineLimitExceededError,
  StateMachineTypeNotSupportedError,
  TaggedException,
  TaskDoesNotExistError,
  TaskTimedOutError,
  TooManyTagsError,
  ValidationError,
} from "./Errors";
import { SFNClientInstance, SFNClientInstanceLayer } from "./SFNClientInstance";
import { DefaultSFNClientConfigLayer } from "./SFNClientInstanceConfig";

const commands = {
  CreateActivityCommand,
  CreateStateMachineCommand,
  CreateStateMachineAliasCommand,
  DeleteActivityCommand,
  DeleteStateMachineCommand,
  DeleteStateMachineAliasCommand,
  DeleteStateMachineVersionCommand,
  DescribeActivityCommand,
  DescribeExecutionCommand,
  DescribeMapRunCommand,
  DescribeStateMachineCommand,
  DescribeStateMachineAliasCommand,
  DescribeStateMachineForExecutionCommand,
  GetActivityTaskCommand,
  GetExecutionHistoryCommand,
  ListActivitiesCommand,
  ListExecutionsCommand,
  ListMapRunsCommand,
  ListStateMachineAliasesCommand,
  ListStateMachinesCommand,
  ListStateMachineVersionsCommand,
  ListTagsForResourceCommand,
  PublishStateMachineVersionCommand,
  RedriveExecutionCommand,
  SendTaskFailureCommand,
  SendTaskHeartbeatCommand,
  SendTaskSuccessCommand,
  StartExecutionCommand,
  StartSyncExecutionCommand,
  StopExecutionCommand,
  TagResourceCommand,
  TestStateCommand,
  UntagResourceCommand,
  UpdateMapRunCommand,
  UpdateStateMachineCommand,
  UpdateStateMachineAliasCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface SFNService {
  readonly _: unique symbol;

  /**
   * @see {@link CreateActivityCommand}
   */
  createActivity(
    args: CreateActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateActivityCommandOutput,
    SdkError | ActivityLimitExceededError | InvalidNameError | TooManyTagsError
  >;
  /**
   * @see {@link CreateStateMachineCommand}
   */
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateStateMachineCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidLoggingConfigurationError
    | InvalidNameError
    | InvalidTracingConfigurationError
    | StateMachineAlreadyExistsError
    | StateMachineDeletingError
    | StateMachineLimitExceededError
    | StateMachineTypeNotSupportedError
    | TooManyTagsError
    | ValidationError
  >;
  /**
   * @see {@link CreateStateMachineAliasCommand}
   */
  createStateMachineAlias(
    args: CreateStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateStateMachineAliasCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidNameError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | ValidationError
  >;
  /**
   * @see {@link DeleteActivityCommand}
   */
  deleteActivity(
    args: DeleteActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteActivityCommandOutput, SdkError | InvalidArnError>;
  /**
   * @see {@link DeleteStateMachineCommand}
   */
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineCommandOutput,
    SdkError | InvalidArnError | ValidationError
  >;
  /**
   * @see {@link DeleteStateMachineAliasCommand}
   */
  deleteStateMachineAlias(
    args: DeleteStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineAliasCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | ResourceNotFoundError
    | ValidationError
  >;
  /**
   * @see {@link DeleteStateMachineVersionCommand}
   */
  deleteStateMachineVersion(
    args: DeleteStateMachineVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineVersionCommandOutput,
    SdkError | ConflictError | InvalidArnError | ValidationError
  >;
  /**
   * @see {@link DescribeActivityCommand}
   */
  describeActivity(
    args: DescribeActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeActivityCommandOutput,
    SdkError | ActivityDoesNotExistError | InvalidArnError
  >;
  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExecutionCommandOutput,
    SdkError | ExecutionDoesNotExistError | InvalidArnError
  >;
  /**
   * @see {@link DescribeMapRunCommand}
   */
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMapRunCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError
  >;
  /**
   * @see {@link DescribeStateMachineCommand}
   */
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineCommandOutput,
    SdkError | InvalidArnError | StateMachineDoesNotExistError
  >;
  /**
   * @see {@link DescribeStateMachineAliasCommand}
   */
  describeStateMachineAlias(
    args: DescribeStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineAliasCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError | ValidationError
  >;
  /**
   * @see {@link DescribeStateMachineForExecutionCommand}
   */
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineForExecutionCommandOutput,
    SdkError | ExecutionDoesNotExistError | InvalidArnError
  >;
  /**
   * @see {@link GetActivityTaskCommand}
   */
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetActivityTaskCommandOutput,
    | SdkError
    | ActivityDoesNotExistError
    | ActivityWorkerLimitExceededError
    | InvalidArnError
  >;
  /**
   * @see {@link GetExecutionHistoryCommand}
   */
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetExecutionHistoryCommandOutput,
    SdkError | ExecutionDoesNotExistError | InvalidArnError | InvalidTokenError
  >;
  /**
   * @see {@link ListActivitiesCommand}
   */
  listActivities(
    args: ListActivitiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListActivitiesCommandOutput, SdkError | InvalidTokenError>;
  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListExecutionsCommandOutput,
    | SdkError
    | InvalidArnError
    | InvalidTokenError
    | ResourceNotFoundError
    | StateMachineDoesNotExistError
    | StateMachineTypeNotSupportedError
    | ValidationError
  >;
  /**
   * @see {@link ListMapRunsCommand}
   */
  listMapRuns(
    args: ListMapRunsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListMapRunsCommandOutput,
    SdkError | ExecutionDoesNotExistError | InvalidArnError | InvalidTokenError
  >;
  /**
   * @see {@link ListStateMachineAliasesCommand}
   */
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachineAliasesCommandOutput,
    | SdkError
    | InvalidArnError
    | InvalidTokenError
    | ResourceNotFoundError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
  >;
  /**
   * @see {@link ListStateMachinesCommand}
   */
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachinesCommandOutput,
    SdkError | InvalidTokenError
  >;
  /**
   * @see {@link ListStateMachineVersionsCommand}
   */
  listStateMachineVersions(
    args: ListStateMachineVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachineVersionsCommandOutput,
    SdkError | InvalidArnError | InvalidTokenError | ValidationError
  >;
  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError
  >;
  /**
   * @see {@link PublishStateMachineVersionCommand}
   */
  publishStateMachineVersion(
    args: PublishStateMachineVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PublishStateMachineVersionCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError
  >;
  /**
   * @see {@link RedriveExecutionCommand}
   */
  redriveExecution(
    args: RedriveExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RedriveExecutionCommandOutput,
    | SdkError
    | ExecutionDoesNotExistError
    | ExecutionLimitExceededError
    | ExecutionNotRedrivableError
    | InvalidArnError
  >;
  /**
   * @see {@link SendTaskFailureCommand}
   */
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskFailureCommandOutput,
    SdkError | InvalidTokenError | TaskDoesNotExistError | TaskTimedOutError
  >;
  /**
   * @see {@link SendTaskHeartbeatCommand}
   */
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskHeartbeatCommandOutput,
    SdkError | InvalidTokenError | TaskDoesNotExistError | TaskTimedOutError
  >;
  /**
   * @see {@link SendTaskSuccessCommand}
   */
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskSuccessCommandOutput,
    | SdkError
    | InvalidOutputError
    | InvalidTokenError
    | TaskDoesNotExistError
    | TaskTimedOutError
  >;
  /**
   * @see {@link StartExecutionCommand}
   */
  startExecution(
    args: StartExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartExecutionCommandOutput,
    | SdkError
    | ExecutionAlreadyExistsError
    | ExecutionLimitExceededError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError
  >;
  /**
   * @see {@link StartSyncExecutionCommand}
   */
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartSyncExecutionCommandOutput,
    | SdkError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | StateMachineTypeNotSupportedError
  >;
  /**
   * @see {@link StopExecutionCommand}
   */
  stopExecution(
    args: StopExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopExecutionCommandOutput,
    SdkError | ExecutionDoesNotExistError | InvalidArnError | ValidationError
  >;
  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError | TooManyTagsError
  >;
  /**
   * @see {@link TestStateCommand}
   */
  testState(
    args: TestStateCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestStateCommandOutput,
    | SdkError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidExecutionInputError
    | ValidationError
  >;
  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError
  >;
  /**
   * @see {@link UpdateMapRunCommand}
   */
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMapRunCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError | ValidationError
  >;
  /**
   * @see {@link UpdateStateMachineCommand}
   */
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStateMachineCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidLoggingConfigurationError
    | InvalidTracingConfigurationError
    | MissingRequiredParameterError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError
  >;
  /**
   * @see {@link UpdateStateMachineAliasCommand}
   */
  updateStateMachineAlias(
    args: UpdateStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStateMachineAliasCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | ResourceNotFoundError
    | StateMachineDeletingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const SFNService = Context.GenericTag<SFNService>(
  "@effect-aws/client-sfn/SFNService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSFNService = Effect.gen(function* (_) {
  const client = yield* _(SFNClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SFNServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SFNServiceException>
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
  }, {}) as SFNService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseSFNServiceLayer = Layer.effect(SFNService, makeSFNService);

/**
 * @since 1.0.0
 * @category layers
 */
export const SFNServiceLayer = BaseSFNServiceLayer.pipe(
  Layer.provide(SFNClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSFNServiceLayer = SFNServiceLayer.pipe(
  Layer.provide(DefaultSFNClientConfigLayer),
);
