/**
 * @since 1.0.0
 */
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
import { Cause, Context, Effect, Layer, ReadonlyRecord } from "effect";
import {
  DefaultEventBridgeClientInstanceLayer,
  EventBridgeClientInstance,
  EventBridgeClientInstanceLayer,
} from "./EventBridgeClientInstance";
import { DefaultEventBridgeClientConfigLayer } from "./EventBridgeClientInstanceConfig";

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

/**
 * @since 1.0.0
 * @category models
 */
export interface EventBridgeService {
  readonly _: unique symbol;

  /**
   * @see {@link ActivateEventSourceCommand}
   */
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ActivateEventSourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CancelReplayCommand}
   */
  cancelReplay(
    args: CancelReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelReplayCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateApiDestinationCommand}
   */
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateApiDestinationCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(
    args: CreateArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateArchiveCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateConnectionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateEndpointCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateEventBusCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreatePartnerEventSourceCommand}
   */
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePartnerEventSourceCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeactivateEventSourceCommand}
   */
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeactivateEventSourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeauthorizeConnectionCommand}
   */
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeauthorizeConnectionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteApiDestinationCommand}
   */
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteApiDestinationCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteArchiveCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteConnectionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteEndpointCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteEventBusCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeletePartnerEventSourceCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteRuleCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribeApiDestinationCommand}
   */
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeApiDestinationCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeArchiveCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribeConnectionCommand}
   */
  describeConnection(
    args: DescribeConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeConnectionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeEndpointCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeEventBusCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeEventSourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePartnerEventSourceCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeReplayCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(
    args: DescribeRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeRuleCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(
    args: DisableRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableRuleCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link EnableRuleCommand}
   */
  enableRule(
    args: EnableRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableRuleCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListApiDestinationsCommand}
   */
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListApiDestinationsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(
    args: ListArchivesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListArchivesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListConnectionsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(
    args: ListEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListEndpointsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListEventBusesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListEventSourcesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourceAccountsCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourcesCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(
    args: ListReplaysCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListReplaysCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListRuleNamesByTargetCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListRulesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListTagsForResourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListTargetsByRuleCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutEventsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutPartnerEventsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(
    args: PutPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutPermissionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PutRuleCommand}
   */
  putRule(
    args: PutRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutRuleCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PutTargetsCommand}
   */
  putTargets(
    args: PutTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutTargetsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RemovePermissionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link RemoveTargetsCommand}
   */
  removeTargets(
    args: RemoveTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RemoveTargetsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link StartReplayCommand}
   */
  startReplay(
    args: StartReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<StartReplayCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<TagResourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link TestEventPatternCommand}
   */
  testEventPattern(
    args: TestEventPatternCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<TestEventPatternCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UntagResourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UpdateApiDestinationCommand}
   */
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateApiDestinationCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(
    args: UpdateArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateArchiveCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateConnectionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateEndpointCommandOutput, Cause.UnknownException>;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const EventBridgeService = Context.GenericTag<EventBridgeService>(
  "@effect-aws/client-eventbridge/EventBridgeService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeEventBridgeService = Effect.gen(function* (_) {
  const client = yield* _(EventBridgeClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
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

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseEventBridgeServiceLayer = Layer.effect(
  EventBridgeService,
  makeEventBridgeService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const EventBridgeServiceLayer = BaseEventBridgeServiceLayer.pipe(
  Layer.provide(EventBridgeClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultEventBridgeServiceLayer = EventBridgeServiceLayer.pipe(
  Layer.provide(DefaultEventBridgeClientConfigLayer),
);

// -------------------- Danger Zone --------------------

/**
 * @since 0.1.0
 * @deprecated
 */
export const BaseEventBridgeServiceEffect = makeEventBridgeService;

/**
 * @since 0.1.0
 * @deprecated
 */
export const EventBridgeServiceEffect = BaseEventBridgeServiceEffect.pipe(
  Effect.provide(EventBridgeClientInstanceLayer),
);

/**
 * @since 0.1.0
 * @deprecated
 */
export const DefaultEventBridgeServiceEffect =
  BaseEventBridgeServiceEffect.pipe(
    Effect.provide(DefaultEventBridgeClientInstanceLayer),
  );
