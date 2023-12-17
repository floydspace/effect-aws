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
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as RR from "effect/ReadonlyRecord";
import {
  DefaultSFNClientInstanceLayer,
  SFNClientInstanceLayer,
  SFNClientInstanceTag,
} from "./Context";

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
  ): Effect.Effect<never, Cause.UnknownException, CreateActivityCommandOutput>;
  /**
   * @see {@link CreateStateMachineCommand}
   */
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
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
    Cause.UnknownException,
    CreateStateMachineAliasCommandOutput
  >;
  /**
   * @see {@link DeleteActivityCommand}
   */
  deleteActivity(
    args: DeleteActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, DeleteActivityCommandOutput>;
  /**
   * @see {@link DeleteStateMachineCommand}
   */
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
    DescribeExecutionCommandOutput
  >;
  /**
   * @see {@link DescribeMapRunCommand}
   */
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, DescribeMapRunCommandOutput>;
  /**
   * @see {@link DescribeStateMachineCommand}
   */
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
    DescribeStateMachineForExecutionCommandOutput
  >;
  /**
   * @see {@link GetActivityTaskCommand}
   */
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, GetActivityTaskCommandOutput>;
  /**
   * @see {@link GetExecutionHistoryCommand}
   */
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetExecutionHistoryCommandOutput
  >;
  /**
   * @see {@link ListActivitiesCommand}
   */
  listActivities(
    args: ListActivitiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, ListActivitiesCommandOutput>;
  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, ListExecutionsCommandOutput>;
  /**
   * @see {@link ListMapRunsCommand}
   */
  listMapRuns(
    args: ListMapRunsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, ListMapRunsCommandOutput>;
  /**
   * @see {@link ListStateMachineAliasesCommand}
   */
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
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
    Cause.UnknownException,
    RedriveExecutionCommandOutput
  >;
  /**
   * @see {@link SendTaskFailureCommand}
   */
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, SendTaskFailureCommandOutput>;
  /**
   * @see {@link SendTaskHeartbeatCommand}
   */
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    SendTaskHeartbeatCommandOutput
  >;
  /**
   * @see {@link SendTaskSuccessCommand}
   */
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, SendTaskSuccessCommandOutput>;
  /**
   * @see {@link StartExecutionCommand}
   */
  startExecution(
    args: StartExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, StartExecutionCommandOutput>;
  /**
   * @see {@link StartSyncExecutionCommand}
   */
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    StartSyncExecutionCommandOutput
  >;
  /**
   * @see {@link StopExecutionCommand}
   */
  stopExecution(
    args: StopExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, StopExecutionCommandOutput>;
  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, TagResourceCommandOutput>;
  /**
   * @see {@link TestStateCommand}
   */
  testState(
    args: TestStateCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, TestStateCommandOutput>;
  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, UntagResourceCommandOutput>;
  /**
   * @see {@link UpdateMapRunCommand}
   */
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, UpdateMapRunCommandOutput>;
  /**
   * @see {@link UpdateStateMachineCommand}
   */
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
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
    Cause.UnknownException,
    UpdateStateMachineAliasCommandOutput
  >;
}

export const BaseSFNServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(SFNClientInstanceTag);

  return RR.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise(() =>
        client.send(new CommandCtor(args), options ?? {}),
      );
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
