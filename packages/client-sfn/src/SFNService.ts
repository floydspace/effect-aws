/**
 * @since 1.0.0
 */
import {
  SFNServiceException,
  CreateActivityCommand,
  type CreateActivityCommandInput,
  type CreateActivityCommandOutput,
  CreateStateMachineCommand,
  type CreateStateMachineCommandInput,
  type CreateStateMachineCommandOutput,
  CreateStateMachineAliasCommand,
  type CreateStateMachineAliasCommandInput,
  type CreateStateMachineAliasCommandOutput,
  DeleteActivityCommand,
  type DeleteActivityCommandInput,
  type DeleteActivityCommandOutput,
  DeleteStateMachineCommand,
  type DeleteStateMachineCommandInput,
  type DeleteStateMachineCommandOutput,
  DeleteStateMachineAliasCommand,
  type DeleteStateMachineAliasCommandInput,
  type DeleteStateMachineAliasCommandOutput,
  DeleteStateMachineVersionCommand,
  type DeleteStateMachineVersionCommandInput,
  type DeleteStateMachineVersionCommandOutput,
  DescribeActivityCommand,
  type DescribeActivityCommandInput,
  type DescribeActivityCommandOutput,
  DescribeExecutionCommand,
  type DescribeExecutionCommandInput,
  type DescribeExecutionCommandOutput,
  DescribeMapRunCommand,
  type DescribeMapRunCommandInput,
  type DescribeMapRunCommandOutput,
  DescribeStateMachineCommand,
  type DescribeStateMachineCommandInput,
  type DescribeStateMachineCommandOutput,
  DescribeStateMachineAliasCommand,
  type DescribeStateMachineAliasCommandInput,
  type DescribeStateMachineAliasCommandOutput,
  DescribeStateMachineForExecutionCommand,
  type DescribeStateMachineForExecutionCommandInput,
  type DescribeStateMachineForExecutionCommandOutput,
  GetActivityTaskCommand,
  type GetActivityTaskCommandInput,
  type GetActivityTaskCommandOutput,
  GetExecutionHistoryCommand,
  type GetExecutionHistoryCommandInput,
  type GetExecutionHistoryCommandOutput,
  ListActivitiesCommand,
  type ListActivitiesCommandInput,
  type ListActivitiesCommandOutput,
  ListExecutionsCommand,
  type ListExecutionsCommandInput,
  type ListExecutionsCommandOutput,
  ListMapRunsCommand,
  type ListMapRunsCommandInput,
  type ListMapRunsCommandOutput,
  ListStateMachineAliasesCommand,
  type ListStateMachineAliasesCommandInput,
  type ListStateMachineAliasesCommandOutput,
  ListStateMachineVersionsCommand,
  type ListStateMachineVersionsCommandInput,
  type ListStateMachineVersionsCommandOutput,
  ListStateMachinesCommand,
  type ListStateMachinesCommandInput,
  type ListStateMachinesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PublishStateMachineVersionCommand,
  type PublishStateMachineVersionCommandInput,
  type PublishStateMachineVersionCommandOutput,
  RedriveExecutionCommand,
  type RedriveExecutionCommandInput,
  type RedriveExecutionCommandOutput,
  SendTaskFailureCommand,
  type SendTaskFailureCommandInput,
  type SendTaskFailureCommandOutput,
  SendTaskHeartbeatCommand,
  type SendTaskHeartbeatCommandInput,
  type SendTaskHeartbeatCommandOutput,
  SendTaskSuccessCommand,
  type SendTaskSuccessCommandInput,
  type SendTaskSuccessCommandOutput,
  StartExecutionCommand,
  type StartExecutionCommandInput,
  type StartExecutionCommandOutput,
  StartSyncExecutionCommand,
  type StartSyncExecutionCommandInput,
  type StartSyncExecutionCommandOutput,
  StopExecutionCommand,
  type StopExecutionCommandInput,
  type StopExecutionCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestStateCommand,
  type TestStateCommandInput,
  type TestStateCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateMapRunCommand,
  type UpdateMapRunCommandInput,
  type UpdateMapRunCommandOutput,
  UpdateStateMachineCommand,
  type UpdateStateMachineCommandInput,
  type UpdateStateMachineCommandOutput,
  UpdateStateMachineAliasCommand,
  type UpdateStateMachineAliasCommandInput,
  type UpdateStateMachineAliasCommandOutput,
  ValidateStateMachineDefinitionCommand,
  type ValidateStateMachineDefinitionCommandInput,
  type ValidateStateMachineDefinitionCommandOutput,
} from "@aws-sdk/client-sfn";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  ActivityAlreadyExistsError,
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
  InvalidEncryptionConfigurationError,
  InvalidExecutionInputError,
  InvalidLoggingConfigurationError,
  InvalidNameError,
  InvalidOutputError,
  InvalidTokenError,
  InvalidTracingConfigurationError,
  KmsAccessDeniedError,
  KmsInvalidStateError,
  KmsThrottlingError,
  MissingRequiredParameterError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  StateMachineAlreadyExistsError,
  StateMachineDeletingError,
  StateMachineDoesNotExistError,
  StateMachineLimitExceededError,
  StateMachineTypeNotSupportedError,
  TaskDoesNotExistError,
  TaskTimedOutError,
  TooManyTagsError,
  ValidationError,
  SdkError,
  TaggedException,
} from "./Errors";
import { SFNClientInstance, SFNClientInstanceLayer } from "./SFNClientInstance";
import { DefaultSFNClientConfigLayer } from "./SFNClientInstanceConfig";

/**
 * @since 1.4.1
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

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
  ListStateMachineVersionsCommand,
  ListStateMachinesCommand,
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
  ValidateStateMachineDefinitionCommand,
};

interface SFNService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateActivityCommand}
   */
  createActivity(
    args: CreateActivityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateActivityCommandOutput,
    | SdkError
    | ActivityAlreadyExistsError
    | ActivityLimitExceededError
    | InvalidEncryptionConfigurationError
    | InvalidNameError
    | KmsAccessDeniedError
    | KmsThrottlingError
    | TooManyTagsError
  >;

  /**
   * @see {@link CreateStateMachineCommand}
   */
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStateMachineCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidEncryptionConfigurationError
    | InvalidLoggingConfigurationError
    | InvalidNameError
    | InvalidTracingConfigurationError
    | KmsAccessDeniedError
    | KmsThrottlingError
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<DeleteActivityCommandOutput, SdkError | InvalidArnError>;

  /**
   * @see {@link DeleteStateMachineCommand}
   */
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineCommandOutput,
    SdkError | InvalidArnError | ValidationError
  >;

  /**
   * @see {@link DeleteStateMachineAliasCommand}
   */
  deleteStateMachineAlias(
    args: DeleteStateMachineAliasCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineVersionCommandOutput,
    SdkError | ConflictError | InvalidArnError | ValidationError
  >;

  /**
   * @see {@link DescribeActivityCommand}
   */
  describeActivity(
    args: DescribeActivityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeActivityCommandOutput,
    SdkError | ActivityDoesNotExistError | InvalidArnError
  >;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExecutionCommandOutput,
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link DescribeMapRunCommand}
   */
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMapRunCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeStateMachineCommand}
   */
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineCommandOutput,
    | SdkError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | StateMachineDoesNotExistError
  >;

  /**
   * @see {@link DescribeStateMachineAliasCommand}
   */
  describeStateMachineAlias(
    args: DescribeStateMachineAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineAliasCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeStateMachineForExecutionCommand}
   */
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineForExecutionCommandOutput,
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link GetActivityTaskCommand}
   */
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetActivityTaskCommandOutput,
    | SdkError
    | ActivityDoesNotExistError
    | ActivityWorkerLimitExceededError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link GetExecutionHistoryCommand}
   */
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetExecutionHistoryCommandOutput,
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | InvalidTokenError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link ListActivitiesCommand}
   */
  listActivities(
    args: ListActivitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListActivitiesCommandOutput, SdkError | InvalidTokenError>;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMapRunsCommandOutput,
    SdkError | ExecutionDoesNotExistError | InvalidArnError | InvalidTokenError
  >;

  /**
   * @see {@link ListStateMachineAliasesCommand}
   */
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    options?: HttpHandlerOptions,
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
   * @see {@link ListStateMachineVersionsCommand}
   */
  listStateMachineVersions(
    args: ListStateMachineVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachineVersionsCommandOutput,
    SdkError | InvalidArnError | InvalidTokenError | ValidationError
  >;

  /**
   * @see {@link ListStateMachinesCommand}
   */
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachinesCommandOutput,
    SdkError | InvalidTokenError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError
  >;

  /**
   * @see {@link PublishStateMachineVersionCommand}
   */
  publishStateMachineVersion(
    args: PublishStateMachineVersionCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RedriveExecutionCommandOutput,
    | SdkError
    | ExecutionDoesNotExistError
    | ExecutionLimitExceededError
    | ExecutionNotRedrivableError
    | InvalidArnError
    | ValidationError
  >;

  /**
   * @see {@link SendTaskFailureCommand}
   */
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskFailureCommandOutput,
    | SdkError
    | InvalidTokenError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | TaskDoesNotExistError
    | TaskTimedOutError
  >;

  /**
   * @see {@link SendTaskHeartbeatCommand}
   */
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskHeartbeatCommandOutput,
    SdkError | InvalidTokenError | TaskDoesNotExistError | TaskTimedOutError
  >;

  /**
   * @see {@link SendTaskSuccessCommand}
   */
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskSuccessCommandOutput,
    | SdkError
    | InvalidOutputError
    | InvalidTokenError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | TaskDoesNotExistError
    | TaskTimedOutError
  >;

  /**
   * @see {@link StartExecutionCommand}
   */
  startExecution(
    args: StartExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartExecutionCommandOutput,
    | SdkError
    | ExecutionAlreadyExistsError
    | ExecutionLimitExceededError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError
  >;

  /**
   * @see {@link StartSyncExecutionCommand}
   */
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartSyncExecutionCommandOutput,
    | SdkError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | StateMachineTypeNotSupportedError
  >;

  /**
   * @see {@link StopExecutionCommand}
   */
  stopExecution(
    args: StopExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopExecutionCommandOutput,
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
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
    SdkError | InvalidArnError | ResourceNotFoundError | TooManyTagsError
  >;

  /**
   * @see {@link TestStateCommand}
   */
  testState(
    args: TestStateCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateMapRunCommand}
   */
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMapRunCommandOutput,
    SdkError | InvalidArnError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateStateMachineCommand}
   */
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStateMachineCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidEncryptionConfigurationError
    | InvalidLoggingConfigurationError
    | InvalidTracingConfigurationError
    | KmsAccessDeniedError
    | KmsThrottlingError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStateMachineAliasCommandOutput,
    | SdkError
    | ConflictError
    | InvalidArnError
    | ResourceNotFoundError
    | StateMachineDeletingError
    | ValidationError
  >;

  /**
   * @see {@link ValidateStateMachineDefinitionCommand}
   */
  validateStateMachineDefinition(
    args: ValidateStateMachineDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ValidateStateMachineDefinitionCommandOutput,
    SdkError | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class SFNService extends Effect.Tag("@effect-aws/client-sfn/SFNService")<
  SFNService,
  SFNService$
>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSFNService = Effect.gen(function* (_) {
  const client = yield* _(SFNClientInstance);

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
            e instanceof SFNServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
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
  }, {}) as SFNService$;
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
