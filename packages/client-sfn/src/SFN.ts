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
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as RR from "effect/ReadonlyRecord";
import {
  DefaultSFNClientInstanceLayer,
  SFNClientInstanceLayer,
  SFNClientInstanceTag,
} from "./Context";
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

export interface SFNService {
  /**
   * @see {@link CreateActivityCommand}
   */
  createActivity(
    args: CreateActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ActivityLimitExceededError | InvalidNameError | TooManyTagsError,
    CreateActivityCommandOutput
  >;
  /**
   * @see {@link CreateStateMachineCommand}
   */
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
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
    | ValidationError,
    CreateStateMachineCommandOutput
  >;
  /**
   * @see {@link CreateStateMachineAliasCommand}
   */
  createStateMachineAlias(
    args: CreateStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidNameError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | ValidationError,
    CreateStateMachineAliasCommandOutput
  >;
  /**
   * @see {@link DeleteActivityCommand}
   */
  deleteActivity(
    args: DeleteActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError,
    DeleteActivityCommandOutput
  >;
  /**
   * @see {@link DeleteStateMachineCommand}
   */
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | ValidationError,
    DeleteStateMachineCommandOutput
  >;
  /**
   * @see {@link DeleteStateMachineAliasCommand}
   */
  deleteStateMachineAlias(
    args: DeleteStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConflictError
    | InvalidArnError
    | ResourceNotFoundError
    | ValidationError,
    DeleteStateMachineAliasCommandOutput
  >;
  /**
   * @see {@link DeleteStateMachineVersionCommand}
   */
  deleteStateMachineVersion(
    args: DeleteStateMachineVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ConflictError | InvalidArnError | ValidationError,
    DeleteStateMachineVersionCommandOutput
  >;
  /**
   * @see {@link DescribeActivityCommand}
   */
  describeActivity(
    args: DescribeActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ActivityDoesNotExistError | InvalidArnError,
    DescribeActivityCommandOutput
  >;
  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ExecutionDoesNotExistError | InvalidArnError,
    DescribeExecutionCommandOutput
  >;
  /**
   * @see {@link DescribeMapRunCommand}
   */
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | ResourceNotFoundError,
    DescribeMapRunCommandOutput
  >;
  /**
   * @see {@link DescribeStateMachineCommand}
   */
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | StateMachineDoesNotExistError,
    DescribeStateMachineCommandOutput
  >;
  /**
   * @see {@link DescribeStateMachineAliasCommand}
   */
  describeStateMachineAlias(
    args: DescribeStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | ResourceNotFoundError | ValidationError,
    DescribeStateMachineAliasCommandOutput
  >;
  /**
   * @see {@link DescribeStateMachineForExecutionCommand}
   */
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ExecutionDoesNotExistError | InvalidArnError,
    DescribeStateMachineForExecutionCommandOutput
  >;
  /**
   * @see {@link GetActivityTaskCommand}
   */
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ActivityDoesNotExistError
    | ActivityWorkerLimitExceededError
    | InvalidArnError,
    GetActivityTaskCommandOutput
  >;
  /**
   * @see {@link GetExecutionHistoryCommand}
   */
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ExecutionDoesNotExistError | InvalidArnError | InvalidTokenError,
    GetExecutionHistoryCommandOutput
  >;
  /**
   * @see {@link ListActivitiesCommand}
   */
  listActivities(
    args: ListActivitiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidTokenError,
    ListActivitiesCommandOutput
  >;
  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InvalidArnError
    | InvalidTokenError
    | ResourceNotFoundError
    | StateMachineDoesNotExistError
    | StateMachineTypeNotSupportedError
    | ValidationError,
    ListExecutionsCommandOutput
  >;
  /**
   * @see {@link ListMapRunsCommand}
   */
  listMapRuns(
    args: ListMapRunsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ExecutionDoesNotExistError | InvalidArnError | InvalidTokenError,
    ListMapRunsCommandOutput
  >;
  /**
   * @see {@link ListStateMachineAliasesCommand}
   */
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InvalidArnError
    | InvalidTokenError
    | ResourceNotFoundError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError,
    ListStateMachineAliasesCommandOutput
  >;
  /**
   * @see {@link ListStateMachinesCommand}
   */
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidTokenError,
    ListStateMachinesCommandOutput
  >;
  /**
   * @see {@link ListStateMachineVersionsCommand}
   */
  listStateMachineVersions(
    args: ListStateMachineVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | InvalidTokenError | ValidationError,
    ListStateMachineVersionsCommandOutput
  >;
  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | ResourceNotFoundError,
    ListTagsForResourceCommandOutput
  >;
  /**
   * @see {@link PublishStateMachineVersionCommand}
   */
  publishStateMachineVersion(
    args: PublishStateMachineVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConflictError
    | InvalidArnError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError,
    PublishStateMachineVersionCommandOutput
  >;
  /**
   * @see {@link RedriveExecutionCommand}
   */
  redriveExecution(
    args: RedriveExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ExecutionDoesNotExistError
    | ExecutionLimitExceededError
    | ExecutionNotRedrivableError
    | InvalidArnError,
    RedriveExecutionCommandOutput
  >;
  /**
   * @see {@link SendTaskFailureCommand}
   */
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidTokenError | TaskDoesNotExistError | TaskTimedOutError,
    SendTaskFailureCommandOutput
  >;
  /**
   * @see {@link SendTaskHeartbeatCommand}
   */
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidTokenError | TaskDoesNotExistError | TaskTimedOutError,
    SendTaskHeartbeatCommandOutput
  >;
  /**
   * @see {@link SendTaskSuccessCommand}
   */
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InvalidOutputError
    | InvalidTokenError
    | TaskDoesNotExistError
    | TaskTimedOutError,
    SendTaskSuccessCommandOutput
  >;
  /**
   * @see {@link StartExecutionCommand}
   */
  startExecution(
    args: StartExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ExecutionAlreadyExistsError
    | ExecutionLimitExceededError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError,
    StartExecutionCommandOutput
  >;
  /**
   * @see {@link StartSyncExecutionCommand}
   */
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | StateMachineTypeNotSupportedError,
    StartSyncExecutionCommandOutput
  >;
  /**
   * @see {@link StopExecutionCommand}
   */
  stopExecution(
    args: StopExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ExecutionDoesNotExistError | InvalidArnError | ValidationError,
    StopExecutionCommandOutput
  >;
  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | ResourceNotFoundError | TooManyTagsError,
    TagResourceCommandOutput
  >;
  /**
   * @see {@link TestStateCommand}
   */
  testState(
    args: TestStateCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidExecutionInputError
    | ValidationError,
    TestStateCommandOutput
  >;
  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | ResourceNotFoundError,
    UntagResourceCommandOutput
  >;
  /**
   * @see {@link UpdateMapRunCommand}
   */
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InvalidArnError | ResourceNotFoundError | ValidationError,
    UpdateMapRunCommandOutput
  >;
  /**
   * @see {@link UpdateStateMachineCommand}
   */
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
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
    | ValidationError,
    UpdateStateMachineCommandOutput
  >;
  /**
   * @see {@link UpdateStateMachineAliasCommand}
   */
  updateStateMachineAlias(
    args: UpdateStateMachineAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConflictError
    | InvalidArnError
    | ResourceNotFoundError
    | StateMachineDeletingError
    | ValidationError,
    UpdateStateMachineAliasCommandOutput
  >;
}

export const BaseSFNServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(SFNClientInstanceTag);

  return RR.toEntries(commands).reduce((acc, [command]) => {
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

export const SFNServiceEffect = BaseSFNServiceEffect.pipe(
  Effect.provide(SFNClientInstanceLayer),
);

export const DefaultSFNServiceEffect = BaseSFNServiceEffect.pipe(
  Effect.provide(DefaultSFNClientInstanceLayer),
);
