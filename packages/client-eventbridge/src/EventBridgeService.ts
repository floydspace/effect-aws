/**
 * @since 1.0.0
 */
import {
  EventBridgeServiceException,
  ActivateEventSourceCommand,
  type ActivateEventSourceCommandInput,
  type ActivateEventSourceCommandOutput,
  CancelReplayCommand,
  type CancelReplayCommandInput,
  type CancelReplayCommandOutput,
  CreateApiDestinationCommand,
  type CreateApiDestinationCommandInput,
  type CreateApiDestinationCommandOutput,
  CreateArchiveCommand,
  type CreateArchiveCommandInput,
  type CreateArchiveCommandOutput,
  CreateConnectionCommand,
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateEndpointCommand,
  type CreateEndpointCommandInput,
  type CreateEndpointCommandOutput,
  CreateEventBusCommand,
  type CreateEventBusCommandInput,
  type CreateEventBusCommandOutput,
  CreatePartnerEventSourceCommand,
  type CreatePartnerEventSourceCommandInput,
  type CreatePartnerEventSourceCommandOutput,
  DeactivateEventSourceCommand,
  type DeactivateEventSourceCommandInput,
  type DeactivateEventSourceCommandOutput,
  DeauthorizeConnectionCommand,
  type DeauthorizeConnectionCommandInput,
  type DeauthorizeConnectionCommandOutput,
  DeleteApiDestinationCommand,
  type DeleteApiDestinationCommandInput,
  type DeleteApiDestinationCommandOutput,
  DeleteArchiveCommand,
  type DeleteArchiveCommandInput,
  type DeleteArchiveCommandOutput,
  DeleteConnectionCommand,
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteEndpointCommand,
  type DeleteEndpointCommandInput,
  type DeleteEndpointCommandOutput,
  DeleteEventBusCommand,
  type DeleteEventBusCommandInput,
  type DeleteEventBusCommandOutput,
  DeletePartnerEventSourceCommand,
  type DeletePartnerEventSourceCommandInput,
  type DeletePartnerEventSourceCommandOutput,
  DeleteRuleCommand,
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DescribeApiDestinationCommand,
  type DescribeApiDestinationCommandInput,
  type DescribeApiDestinationCommandOutput,
  DescribeArchiveCommand,
  type DescribeArchiveCommandInput,
  type DescribeArchiveCommandOutput,
  DescribeConnectionCommand,
  type DescribeConnectionCommandInput,
  type DescribeConnectionCommandOutput,
  DescribeEndpointCommand,
  type DescribeEndpointCommandInput,
  type DescribeEndpointCommandOutput,
  DescribeEventBusCommand,
  type DescribeEventBusCommandInput,
  type DescribeEventBusCommandOutput,
  DescribeEventSourceCommand,
  type DescribeEventSourceCommandInput,
  type DescribeEventSourceCommandOutput,
  DescribePartnerEventSourceCommand,
  type DescribePartnerEventSourceCommandInput,
  type DescribePartnerEventSourceCommandOutput,
  DescribeReplayCommand,
  type DescribeReplayCommandInput,
  type DescribeReplayCommandOutput,
  DescribeRuleCommand,
  type DescribeRuleCommandInput,
  type DescribeRuleCommandOutput,
  DisableRuleCommand,
  type DisableRuleCommandInput,
  type DisableRuleCommandOutput,
  EnableRuleCommand,
  type EnableRuleCommandInput,
  type EnableRuleCommandOutput,
  ListApiDestinationsCommand,
  type ListApiDestinationsCommandInput,
  type ListApiDestinationsCommandOutput,
  ListArchivesCommand,
  type ListArchivesCommandInput,
  type ListArchivesCommandOutput,
  ListConnectionsCommand,
  type ListConnectionsCommandInput,
  type ListConnectionsCommandOutput,
  ListEndpointsCommand,
  type ListEndpointsCommandInput,
  type ListEndpointsCommandOutput,
  ListEventBusesCommand,
  type ListEventBusesCommandInput,
  type ListEventBusesCommandOutput,
  ListEventSourcesCommand,
  type ListEventSourcesCommandInput,
  type ListEventSourcesCommandOutput,
  ListPartnerEventSourceAccountsCommand,
  type ListPartnerEventSourceAccountsCommandInput,
  type ListPartnerEventSourceAccountsCommandOutput,
  ListPartnerEventSourcesCommand,
  type ListPartnerEventSourcesCommandInput,
  type ListPartnerEventSourcesCommandOutput,
  ListReplaysCommand,
  type ListReplaysCommandInput,
  type ListReplaysCommandOutput,
  ListRuleNamesByTargetCommand,
  type ListRuleNamesByTargetCommandInput,
  type ListRuleNamesByTargetCommandOutput,
  ListRulesCommand,
  type ListRulesCommandInput,
  type ListRulesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTargetsByRuleCommand,
  type ListTargetsByRuleCommandInput,
  type ListTargetsByRuleCommandOutput,
  PutEventsCommand,
  type PutEventsCommandInput,
  type PutEventsCommandOutput,
  PutPartnerEventsCommand,
  type PutPartnerEventsCommandInput,
  type PutPartnerEventsCommandOutput,
  PutPermissionCommand,
  type PutPermissionCommandInput,
  type PutPermissionCommandOutput,
  PutRuleCommand,
  type PutRuleCommandInput,
  type PutRuleCommandOutput,
  PutTargetsCommand,
  type PutTargetsCommandInput,
  type PutTargetsCommandOutput,
  RemovePermissionCommand,
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  RemoveTargetsCommand,
  type RemoveTargetsCommandInput,
  type RemoveTargetsCommandOutput,
  StartReplayCommand,
  type StartReplayCommandInput,
  type StartReplayCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestEventPatternCommand,
  type TestEventPatternCommandInput,
  type TestEventPatternCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateApiDestinationCommand,
  type UpdateApiDestinationCommandInput,
  type UpdateApiDestinationCommandOutput,
  UpdateArchiveCommand,
  type UpdateArchiveCommandInput,
  type UpdateArchiveCommandOutput,
  UpdateConnectionCommand,
  type UpdateConnectionCommandInput,
  type UpdateConnectionCommandOutput,
  UpdateEndpointCommand,
  type UpdateEndpointCommandInput,
  type UpdateEndpointCommandOutput,
  UpdateEventBusCommand,
  type UpdateEventBusCommandInput,
  type UpdateEventBusCommandOutput,
} from "@aws-sdk/client-eventbridge";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  ConcurrentModificationError,
  IllegalStatusError,
  InternalError,
  InvalidEventPatternError,
  InvalidStateError,
  LimitExceededError,
  ManagedRuleError,
  OperationDisabledError,
  PolicyLengthExceededError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
  SdkError,
  TaggedException,
} from "./Errors";
import {
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
  UpdateEventBusCommand,
};

interface EventBridgeService$ {
  readonly _: unique symbol;

  /**
   * @see {@link ActivateEventSourceCommand}
   */
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ActivateEventSourceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidStateError
    | OperationDisabledError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CancelReplayCommand}
   */
  cancelReplay(
    args: CancelReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelReplayCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | IllegalStatusError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateApiDestinationCommand}
   */
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateApiDestinationCommandOutput,
    | SdkError
    | InternalError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(
    args: CreateArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateArchiveCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectionCommandOutput,
    SdkError | InternalError | LimitExceededError | ResourceAlreadyExistsError
  >;

  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateEndpointCommandOutput,
    SdkError | InternalError | LimitExceededError | ResourceAlreadyExistsError
  >;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventBusCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidStateError
    | LimitExceededError
    | OperationDisabledError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreatePartnerEventSourceCommand}
   */
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePartnerEventSourceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | OperationDisabledError
    | ResourceAlreadyExistsError
  >;

  /**
   * @see {@link DeactivateEventSourceCommand}
   */
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeactivateEventSourceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidStateError
    | OperationDisabledError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeauthorizeConnectionCommand}
   */
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeauthorizeConnectionCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteApiDestinationCommand}
   */
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApiDestinationCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteArchiveCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEndpointCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventBusCommandOutput,
    SdkError | ConcurrentModificationError | InternalError
  >;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeletePartnerEventSourceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | OperationDisabledError
  >;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRuleCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeApiDestinationCommand}
   */
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeApiDestinationCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeArchiveCommandOutput,
    | SdkError
    | InternalError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeConnectionCommand}
   */
  describeConnection(
    args: DescribeConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectionCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEndpointCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventBusCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventSourceCommandOutput,
    SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePartnerEventSourceCommandOutput,
    SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplayCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(
    args: DescribeRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRuleCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(
    args: DisableRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisableRuleCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link EnableRuleCommand}
   */
  enableRule(
    args: EnableRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnableRuleCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListApiDestinationsCommand}
   */
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListApiDestinationsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(
    args: ListArchivesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListArchivesCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListConnectionsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(
    args: ListEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListEndpointsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListEventBusesCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourcesCommandOutput,
    SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourceAccountsCommandOutput,
    SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourcesCommandOutput,
    SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(
    args: ListReplaysCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListReplaysCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListRuleNamesByTargetCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListRulesCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTargetsByRuleCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutEventsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutPartnerEventsCommandOutput,
    SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(
    args: PutPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutPermissionCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | OperationDisabledError
    | PolicyLengthExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutRuleCommand}
   */
  putRule(
    args: PutRuleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutRuleCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutTargetsCommand}
   */
  putTargets(
    args: PutTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutTargetsCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemovePermissionCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | OperationDisabledError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RemoveTargetsCommand}
   */
  removeTargets(
    args: RemoveTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTargetsCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link StartReplayCommand}
   */
  startReplay(
    args: StartReplayCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartReplayCommandOutput,
    | SdkError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TestEventPatternCommand}
   */
  testEventPattern(
    args: TestEventPatternCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestEventPatternCommandOutput,
    SdkError | InternalError | InvalidEventPatternError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateApiDestinationCommand}
   */
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApiDestinationCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(
    args: UpdateArchiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateArchiveCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectionCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEndpointCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateEventBusCommand}
   */
  updateEventBus(
    args: UpdateEventBusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventBusCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | OperationDisabledError
    | ResourceNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class EventBridgeService extends Effect.Tag(
  "@effect-aws/client-eventbridge/EventBridgeService",
)<EventBridgeService, EventBridgeService$>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeEventBridgeService = Effect.gen(function* (_) {
  const client = yield* _(EventBridgeClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (
            e instanceof EventBridgeServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<EventBridgeServiceException>
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
  }, {}) as EventBridgeService$;
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
