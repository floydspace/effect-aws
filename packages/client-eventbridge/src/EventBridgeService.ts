/**
 * @since 1.0.0
 */
import {
  EventBridgeServiceException,
  type EventBridgeClient,
  type EventBridgeClientConfig,
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
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  AccessDeniedError,
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
  ThrottlingError,
  SdkError,
  TaggedException,
} from "./Errors.js";
import {
  EventBridgeClientInstance,
  EventBridgeClientInstanceLayer,
} from "./EventBridgeClientInstance.js";
import {
  DefaultEventBridgeClientConfigLayer,
  makeDefaultEventBridgeClientInstanceConfig,
  EventBridgeClientInstanceConfig,
} from "./EventBridgeClientInstanceConfig.js";

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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectionCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEndpointCommandOutput,
    SdkError | InternalError | LimitExceededError | ResourceAlreadyExistsError
  >;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventBusCommandOutput,
    SdkError | ConcurrentModificationError | InternalError
  >;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeApiDestinationCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectionCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEndpointCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventBusCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventSourceCommandOutput,
    SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePartnerEventSourceCommandOutput,
    SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplayCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(
    args: DescribeRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRuleCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(
    args: DisableRuleCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListApiDestinationsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(
    args: ListArchivesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListArchivesCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListConnectionsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(
    args: ListEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListEndpointsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListEventBusesCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourcesCommandOutput,
    SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourceAccountsCommandOutput,
    SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourcesCommandOutput,
    SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(
    args: ListReplaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListReplaysCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRuleNamesByTargetCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRulesCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTargetsByRuleCommandOutput,
    SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<PutEventsCommandOutput, SdkError | InternalError>;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutPartnerEventsCommandOutput,
    SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(
    args: PutPermissionCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestEventPatternCommandOutput,
    SdkError | InternalError | InvalidEventPatternError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectionCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
 * @category constructors
 */
export const makeEventBridgeService = Effect.gen(function* (_) {
  const client = yield* _(EventBridgeClientInstance);

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
 * @category models
 */
export class EventBridgeService extends Effect.Tag(
  "@effect-aws/client-eventbridge/EventBridgeService",
)<EventBridgeService, EventBridgeService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeEventBridgeService,
  ).pipe(
    Layer.provide(EventBridgeClientInstanceLayer),
    Layer.provide(DefaultEventBridgeClientConfigLayer),
  );
  static readonly layer = (config: EventBridgeClientConfig) =>
    Layer.effect(this, makeEventBridgeService).pipe(
      Layer.provide(EventBridgeClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          EventBridgeClientInstanceConfig,
          makeDefaultEventBridgeClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: EventBridgeClientConfig) => EventBridgeClient,
  ) =>
    Layer.effect(this, makeEventBridgeService).pipe(
      Layer.provide(
        Layer.effect(
          EventBridgeClientInstance,
          Effect.map(makeDefaultEventBridgeClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias EventBridgeService
 */
export const EventBridge = EventBridgeService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use EventBridge.baseLayer instead
 */
export const BaseEventBridgeServiceLayer = Layer.effect(
  EventBridgeService,
  makeEventBridgeService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use EventBridge.layer instead
 */
export const EventBridgeServiceLayer = BaseEventBridgeServiceLayer.pipe(
  Layer.provide(EventBridgeClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use EventBridge.defaultLayer instead
 */
export const DefaultEventBridgeServiceLayer = EventBridgeService.defaultLayer;
