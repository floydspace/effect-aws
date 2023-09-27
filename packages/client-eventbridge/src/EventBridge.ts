import {
  ActivateEventSourceCommand,
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
  CancelReplayCommand,
  CancelReplayCommandInput,
  CancelReplayCommandOutput,
  CreateApiDestinationCommand,
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
  CreateArchiveCommand,
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
  CreateEventBusCommand,
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput,
  CreatePartnerEventSourceCommand,
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
  DeactivateEventSourceCommand,
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
  DeauthorizeConnectionCommand,
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
  DeleteApiDestinationCommand,
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
  DeleteArchiveCommand,
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
  DeleteEventBusCommand,
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput,
  DeletePartnerEventSourceCommand,
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
  DeleteRuleCommand,
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput,
  DescribeApiDestinationCommand,
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
  DescribeArchiveCommand,
  DescribeArchiveCommandInput,
  DescribeArchiveCommandOutput,
  DescribeConnectionCommand,
  DescribeConnectionCommandInput,
  DescribeConnectionCommandOutput,
  DescribeEndpointCommand,
  DescribeEndpointCommandInput,
  DescribeEndpointCommandOutput,
  DescribeEventBusCommand,
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput,
  DescribeEventSourceCommand,
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
  DescribePartnerEventSourceCommand,
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
  DescribeReplayCommand,
  DescribeReplayCommandInput,
  DescribeReplayCommandOutput,
  DescribeRuleCommand,
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput,
  DisableRuleCommand,
  DisableRuleCommandInput,
  DisableRuleCommandOutput,
  EnableRuleCommand,
  EnableRuleCommandInput,
  EnableRuleCommandOutput,
  ListApiDestinationsCommand,
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
  ListArchivesCommand,
  ListArchivesCommandInput,
  ListArchivesCommandOutput,
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
  ListEventBusesCommand,
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput,
  ListEventSourcesCommand,
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
  ListPartnerEventSourcesCommand,
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
  ListReplaysCommand,
  ListReplaysCommandInput,
  ListReplaysCommandOutput,
  ListRuleNamesByTargetCommand,
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
  ListRulesCommand,
  ListRulesCommandInput,
  ListRulesCommandOutput,
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  ListTargetsByRuleCommand,
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
  PutEventsCommand,
  PutEventsCommandInput,
  PutEventsCommandOutput,
  PutPartnerEventsCommand,
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput,
  PutPermissionCommand,
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
  PutRuleCommand,
  PutRuleCommandInput,
  PutRuleCommandOutput,
  PutTargetsCommand,
  PutTargetsCommandInput,
  PutTargetsCommandOutput,
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
  RemoveTargetsCommand,
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
  StartReplayCommand,
  StartReplayCommandInput,
  StartReplayCommandOutput,
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput,
  TestEventPatternCommand,
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput,
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  UpdateApiDestinationCommand,
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
  UpdateArchiveCommand,
  UpdateArchiveCommandInput,
  UpdateArchiveCommandOutput,
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
  UpdateEndpointCommand,
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
} from "@aws-sdk/client-eventbridge";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import * as RR from "@effect/data/ReadonlyRecord";
import * as Effect from "@effect/io/Effect";
import {
  DefaultEventBridgeClientInstanceLayer,
  EventBridgeClientInstanceLayer,
  EventBridgeClientInstanceTag,
} from "./Context";

const commands = {
  ActivateEventSourceCommand,
  CancelReplayCommand,
  CreateApiDestinationCommand,
  CreateArchiveCommand,
  CreateConnectionCommand,
  CreateEndpointCommand,
  CreateEventBusCommand,
  CreatePartnerEventSourceCommand,
  DeactivateEventSourceCommand,
  DeauthorizeConnectionCommand,
  DeleteApiDestinationCommand,
  DeleteArchiveCommand,
  DeleteConnectionCommand,
  DeleteEndpointCommand,
  DeleteEventBusCommand,
  DeletePartnerEventSourceCommand,
  DeleteRuleCommand,
  DescribeApiDestinationCommand,
  DescribeArchiveCommand,
  DescribeConnectionCommand,
  DescribeEndpointCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribePartnerEventSourceCommand,
  DescribeReplayCommand,
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
  ListApiDestinationsCommand,
  ListArchivesCommand,
  ListConnectionsCommand,
  ListEndpointsCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourcesCommand,
  ListReplaysCommand,
  ListRuleNamesByTargetCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsByRuleCommand,
  PutEventsCommand,
  PutPartnerEventsCommand,
  PutPermissionCommand,
  PutRuleCommand,
  PutTargetsCommand,
  RemovePermissionCommand,
  RemoveTargetsCommand,
  StartReplayCommand,
  TagResourceCommand,
  TestEventPatternCommand,
  UntagResourceCommand,
  UpdateApiDestinationCommand,
  UpdateArchiveCommand,
  UpdateConnectionCommand,
  UpdateEndpointCommand,
};

export interface EventBridgeService {
  /**
   * @see {@link ActivateEventSourceCommand}
   */
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ActivateEventSourceCommandOutput>;

  /**
   * @see {@link CancelReplayCommand}
   */
  cancelReplay(
    args: CancelReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CancelReplayCommandOutput>;

  /**
   * @see {@link CreateApiDestinationCommand}
   */
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateApiDestinationCommandOutput>;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(
    args: CreateArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateArchiveCommandOutput>;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateConnectionCommandOutput>;

  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateEndpointCommandOutput>;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateEventBusCommandOutput>;

  /**
   * @see {@link CreatePartnerEventSourceCommand}
   */
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreatePartnerEventSourceCommandOutput>;

  /**
   * @see {@link DeactivateEventSourceCommand}
   */
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeactivateEventSourceCommandOutput>;

  /**
   * @see {@link DeauthorizeConnectionCommand}
   */
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeauthorizeConnectionCommandOutput>;

  /**
   * @see {@link DeleteApiDestinationCommand}
   */
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteApiDestinationCommandOutput>;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteArchiveCommandOutput>;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteConnectionCommandOutput>;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteEndpointCommandOutput>;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteEventBusCommandOutput>;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeletePartnerEventSourceCommandOutput>;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteRuleCommandOutput>;

  /**
   * @see {@link DescribeApiDestinationCommand}
   */
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeApiDestinationCommandOutput>;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeArchiveCommandOutput>;

  /**
   * @see {@link DescribeConnectionCommand}
   */
  describeConnection(
    args: DescribeConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeConnectionCommandOutput>;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeEndpointCommandOutput>;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeEventBusCommandOutput>;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeEventSourceCommandOutput>;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribePartnerEventSourceCommandOutput>;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeReplayCommandOutput>;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(
    args: DescribeRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeRuleCommandOutput>;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(
    args: DisableRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DisableRuleCommandOutput>;

  /**
   * @see {@link EnableRuleCommand}
   */
  enableRule(
    args: EnableRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, EnableRuleCommandOutput>;

  /**
   * @see {@link ListApiDestinationsCommand}
   */
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListApiDestinationsCommandOutput>;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(
    args: ListArchivesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListArchivesCommandOutput>;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListConnectionsCommandOutput>;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(
    args: ListEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListEndpointsCommandOutput>;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListEventBusesCommandOutput>;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListEventSourcesCommandOutput>;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListPartnerEventSourceAccountsCommandOutput>;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListPartnerEventSourcesCommandOutput>;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(
    args: ListReplaysCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListReplaysCommandOutput>;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListRuleNamesByTargetCommandOutput>;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListRulesCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListTargetsByRuleCommandOutput>;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutEventsCommandOutput>;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutPartnerEventsCommandOutput>;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(
    args: PutPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutPermissionCommandOutput>;

  /**
   * @see {@link PutRuleCommand}
   */
  putRule(
    args: PutRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutRuleCommandOutput>;

  /**
   * @see {@link PutTargetsCommand}
   */
  putTargets(
    args: PutTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutTargetsCommandOutput>;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RemovePermissionCommandOutput>;

  /**
   * @see {@link RemoveTargetsCommand}
   */
  removeTargets(
    args: RemoveTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RemoveTargetsCommandOutput>;

  /**
   * @see {@link StartReplayCommand}
   */
  startReplay(
    args: StartReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, StartReplayCommandOutput>;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TagResourceCommandOutput>;

  /**
   * @see {@link TestEventPatternCommand}
   */
  testEventPattern(
    args: TestEventPatternCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TestEventPatternCommandOutput>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UntagResourceCommandOutput>;

  /**
   * @see {@link UpdateApiDestinationCommand}
   */
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateApiDestinationCommandOutput>;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(
    args: UpdateArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateArchiveCommandOutput>;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateConnectionCommandOutput>;

  /**
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateEndpointCommandOutput>;
}

export const BaseEventBridgeServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(EventBridgeClientInstanceTag);

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
  }, {}) as EventBridgeService;
});

export const EventBridgeServiceEffect = BaseEventBridgeServiceEffect.pipe(
  Effect.provideLayer(EventBridgeClientInstanceLayer),
);

export const DefaultEventBridgeServiceEffect =
  BaseEventBridgeServiceEffect.pipe(
    Effect.provideLayer(DefaultEventBridgeClientInstanceLayer),
  );
