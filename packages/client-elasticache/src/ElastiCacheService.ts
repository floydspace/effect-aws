/**
 * @since 1.0.0
 */
import {
  AddTagsToResourceCommand,
  type AddTagsToResourceCommandInput,
  type AddTagsToResourceCommandOutput,
  AuthorizeCacheSecurityGroupIngressCommand,
  type AuthorizeCacheSecurityGroupIngressCommandInput,
  type AuthorizeCacheSecurityGroupIngressCommandOutput,
  BatchApplyUpdateActionCommand,
  type BatchApplyUpdateActionCommandInput,
  type BatchApplyUpdateActionCommandOutput,
  BatchStopUpdateActionCommand,
  type BatchStopUpdateActionCommandInput,
  type BatchStopUpdateActionCommandOutput,
  CompleteMigrationCommand,
  type CompleteMigrationCommandInput,
  type CompleteMigrationCommandOutput,
  CopyServerlessCacheSnapshotCommand,
  type CopyServerlessCacheSnapshotCommandInput,
  type CopyServerlessCacheSnapshotCommandOutput,
  CopySnapshotCommand,
  type CopySnapshotCommandInput,
  type CopySnapshotCommandOutput,
  CreateCacheClusterCommand,
  type CreateCacheClusterCommandInput,
  type CreateCacheClusterCommandOutput,
  CreateCacheParameterGroupCommand,
  type CreateCacheParameterGroupCommandInput,
  type CreateCacheParameterGroupCommandOutput,
  CreateCacheSecurityGroupCommand,
  type CreateCacheSecurityGroupCommandInput,
  type CreateCacheSecurityGroupCommandOutput,
  CreateCacheSubnetGroupCommand,
  type CreateCacheSubnetGroupCommandInput,
  type CreateCacheSubnetGroupCommandOutput,
  CreateGlobalReplicationGroupCommand,
  type CreateGlobalReplicationGroupCommandInput,
  type CreateGlobalReplicationGroupCommandOutput,
  CreateReplicationGroupCommand,
  type CreateReplicationGroupCommandInput,
  type CreateReplicationGroupCommandOutput,
  CreateServerlessCacheCommand,
  type CreateServerlessCacheCommandInput,
  type CreateServerlessCacheCommandOutput,
  CreateServerlessCacheSnapshotCommand,
  type CreateServerlessCacheSnapshotCommandInput,
  type CreateServerlessCacheSnapshotCommandOutput,
  CreateSnapshotCommand,
  type CreateSnapshotCommandInput,
  type CreateSnapshotCommandOutput,
  CreateUserCommand,
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserGroupCommand,
  type CreateUserGroupCommandInput,
  type CreateUserGroupCommandOutput,
  DecreaseNodeGroupsInGlobalReplicationGroupCommand,
  type DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  type DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
  DecreaseReplicaCountCommand,
  type DecreaseReplicaCountCommandInput,
  type DecreaseReplicaCountCommandOutput,
  DeleteCacheClusterCommand,
  type DeleteCacheClusterCommandInput,
  type DeleteCacheClusterCommandOutput,
  DeleteCacheParameterGroupCommand,
  type DeleteCacheParameterGroupCommandInput,
  type DeleteCacheParameterGroupCommandOutput,
  DeleteCacheSecurityGroupCommand,
  type DeleteCacheSecurityGroupCommandInput,
  type DeleteCacheSecurityGroupCommandOutput,
  DeleteCacheSubnetGroupCommand,
  type DeleteCacheSubnetGroupCommandInput,
  type DeleteCacheSubnetGroupCommandOutput,
  DeleteGlobalReplicationGroupCommand,
  type DeleteGlobalReplicationGroupCommandInput,
  type DeleteGlobalReplicationGroupCommandOutput,
  DeleteReplicationGroupCommand,
  type DeleteReplicationGroupCommandInput,
  type DeleteReplicationGroupCommandOutput,
  DeleteServerlessCacheCommand,
  type DeleteServerlessCacheCommandInput,
  type DeleteServerlessCacheCommandOutput,
  DeleteServerlessCacheSnapshotCommand,
  type DeleteServerlessCacheSnapshotCommandInput,
  type DeleteServerlessCacheSnapshotCommandOutput,
  DeleteSnapshotCommand,
  type DeleteSnapshotCommandInput,
  type DeleteSnapshotCommandOutput,
  DeleteUserCommand,
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserGroupCommand,
  type DeleteUserGroupCommandInput,
  type DeleteUserGroupCommandOutput,
  DescribeCacheClustersCommand,
  type DescribeCacheClustersCommandInput,
  type DescribeCacheClustersCommandOutput,
  DescribeCacheEngineVersionsCommand,
  type DescribeCacheEngineVersionsCommandInput,
  type DescribeCacheEngineVersionsCommandOutput,
  DescribeCacheParameterGroupsCommand,
  type DescribeCacheParameterGroupsCommandInput,
  type DescribeCacheParameterGroupsCommandOutput,
  DescribeCacheParametersCommand,
  type DescribeCacheParametersCommandInput,
  type DescribeCacheParametersCommandOutput,
  DescribeCacheSecurityGroupsCommand,
  type DescribeCacheSecurityGroupsCommandInput,
  type DescribeCacheSecurityGroupsCommandOutput,
  DescribeCacheSubnetGroupsCommand,
  type DescribeCacheSubnetGroupsCommandInput,
  type DescribeCacheSubnetGroupsCommandOutput,
  DescribeEngineDefaultParametersCommand,
  type DescribeEngineDefaultParametersCommandInput,
  type DescribeEngineDefaultParametersCommandOutput,
  DescribeEventsCommand,
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeGlobalReplicationGroupsCommand,
  type DescribeGlobalReplicationGroupsCommandInput,
  type DescribeGlobalReplicationGroupsCommandOutput,
  DescribeReplicationGroupsCommand,
  type DescribeReplicationGroupsCommandInput,
  type DescribeReplicationGroupsCommandOutput,
  DescribeReservedCacheNodesCommand,
  type DescribeReservedCacheNodesCommandInput,
  type DescribeReservedCacheNodesCommandOutput,
  DescribeReservedCacheNodesOfferingsCommand,
  type DescribeReservedCacheNodesOfferingsCommandInput,
  type DescribeReservedCacheNodesOfferingsCommandOutput,
  DescribeServerlessCachesCommand,
  type DescribeServerlessCachesCommandInput,
  type DescribeServerlessCachesCommandOutput,
  DescribeServerlessCacheSnapshotsCommand,
  type DescribeServerlessCacheSnapshotsCommandInput,
  type DescribeServerlessCacheSnapshotsCommandOutput,
  DescribeServiceUpdatesCommand,
  type DescribeServiceUpdatesCommandInput,
  type DescribeServiceUpdatesCommandOutput,
  DescribeSnapshotsCommand,
  type DescribeSnapshotsCommandInput,
  type DescribeSnapshotsCommandOutput,
  DescribeUpdateActionsCommand,
  type DescribeUpdateActionsCommandInput,
  type DescribeUpdateActionsCommandOutput,
  DescribeUserGroupsCommand,
  type DescribeUserGroupsCommandInput,
  type DescribeUserGroupsCommandOutput,
  DescribeUsersCommand,
  type DescribeUsersCommandInput,
  type DescribeUsersCommandOutput,
  DisassociateGlobalReplicationGroupCommand,
  type DisassociateGlobalReplicationGroupCommandInput,
  type DisassociateGlobalReplicationGroupCommandOutput,
  type ElastiCacheClient,
  type ElastiCacheClientConfig,
  ExportServerlessCacheSnapshotCommand,
  type ExportServerlessCacheSnapshotCommandInput,
  type ExportServerlessCacheSnapshotCommandOutput,
  FailoverGlobalReplicationGroupCommand,
  type FailoverGlobalReplicationGroupCommandInput,
  type FailoverGlobalReplicationGroupCommandOutput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommand,
  type IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  type IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
  IncreaseReplicaCountCommand,
  type IncreaseReplicaCountCommandInput,
  type IncreaseReplicaCountCommandOutput,
  ListAllowedNodeTypeModificationsCommand,
  type ListAllowedNodeTypeModificationsCommandInput,
  type ListAllowedNodeTypeModificationsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ModifyCacheClusterCommand,
  type ModifyCacheClusterCommandInput,
  type ModifyCacheClusterCommandOutput,
  ModifyCacheParameterGroupCommand,
  type ModifyCacheParameterGroupCommandInput,
  type ModifyCacheParameterGroupCommandOutput,
  ModifyCacheSubnetGroupCommand,
  type ModifyCacheSubnetGroupCommandInput,
  type ModifyCacheSubnetGroupCommandOutput,
  ModifyGlobalReplicationGroupCommand,
  type ModifyGlobalReplicationGroupCommandInput,
  type ModifyGlobalReplicationGroupCommandOutput,
  ModifyReplicationGroupCommand,
  type ModifyReplicationGroupCommandInput,
  type ModifyReplicationGroupCommandOutput,
  ModifyReplicationGroupShardConfigurationCommand,
  type ModifyReplicationGroupShardConfigurationCommandInput,
  type ModifyReplicationGroupShardConfigurationCommandOutput,
  ModifyServerlessCacheCommand,
  type ModifyServerlessCacheCommandInput,
  type ModifyServerlessCacheCommandOutput,
  ModifyUserCommand,
  type ModifyUserCommandInput,
  type ModifyUserCommandOutput,
  ModifyUserGroupCommand,
  type ModifyUserGroupCommandInput,
  type ModifyUserGroupCommandOutput,
  PurchaseReservedCacheNodesOfferingCommand,
  type PurchaseReservedCacheNodesOfferingCommandInput,
  type PurchaseReservedCacheNodesOfferingCommandOutput,
  RebalanceSlotsInGlobalReplicationGroupCommand,
  type RebalanceSlotsInGlobalReplicationGroupCommandInput,
  type RebalanceSlotsInGlobalReplicationGroupCommandOutput,
  RebootCacheClusterCommand,
  type RebootCacheClusterCommandInput,
  type RebootCacheClusterCommandOutput,
  RemoveTagsFromResourceCommand,
  type RemoveTagsFromResourceCommandInput,
  type RemoveTagsFromResourceCommandOutput,
  ResetCacheParameterGroupCommand,
  type ResetCacheParameterGroupCommandInput,
  type ResetCacheParameterGroupCommandOutput,
  RevokeCacheSecurityGroupIngressCommand,
  type RevokeCacheSecurityGroupIngressCommandInput,
  type RevokeCacheSecurityGroupIngressCommandOutput,
  StartMigrationCommand,
  type StartMigrationCommandInput,
  type StartMigrationCommandOutput,
  TestFailoverCommand,
  type TestFailoverCommandInput,
  type TestFailoverCommandOutput,
  TestMigrationCommand,
  type TestMigrationCommandInput,
  type TestMigrationCommandOutput,
} from "@aws-sdk/client-elasticache";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./ElastiCacheClientInstance.js";
import * as ElastiCacheServiceConfig from "./ElastiCacheServiceConfig.js";
import type {
  APICallRateForCustomerExceededFaultError,
  AuthorizationAlreadyExistsFaultError,
  AuthorizationNotFoundFaultError,
  CacheClusterAlreadyExistsFaultError,
  CacheClusterNotFoundFaultError,
  CacheParameterGroupAlreadyExistsFaultError,
  CacheParameterGroupNotFoundFaultError,
  CacheParameterGroupQuotaExceededFaultError,
  CacheSecurityGroupAlreadyExistsFaultError,
  CacheSecurityGroupNotFoundFaultError,
  CacheSecurityGroupQuotaExceededFaultError,
  CacheSubnetGroupAlreadyExistsFaultError,
  CacheSubnetGroupInUseError,
  CacheSubnetGroupNotFoundFaultError,
  CacheSubnetGroupQuotaExceededFaultError,
  CacheSubnetQuotaExceededFaultError,
  ClusterQuotaForCustomerExceededFaultError,
  DefaultUserAssociatedToUserGroupFaultError,
  DefaultUserRequiredError,
  DuplicateUserNameFaultError,
  GlobalReplicationGroupAlreadyExistsFaultError,
  GlobalReplicationGroupNotFoundFaultError,
  InsufficientCacheClusterCapacityFaultError,
  InvalidARNFaultError,
  InvalidCacheClusterStateFaultError,
  InvalidCacheParameterGroupStateFaultError,
  InvalidCacheSecurityGroupStateFaultError,
  InvalidCredentialsError,
  InvalidGlobalReplicationGroupStateFaultError,
  InvalidKMSKeyFaultError,
  InvalidParameterCombinationError,
  InvalidParameterValueError,
  InvalidReplicationGroupStateFaultError,
  InvalidServerlessCacheSnapshotStateFaultError,
  InvalidServerlessCacheStateFaultError,
  InvalidSnapshotStateFaultError,
  InvalidSubnetError,
  InvalidUserGroupStateFaultError,
  InvalidUserStateFaultError,
  InvalidVPCNetworkStateFaultError,
  NodeGroupNotFoundFaultError,
  NodeGroupsPerReplicationGroupQuotaExceededFaultError,
  NodeQuotaForClusterExceededFaultError,
  NodeQuotaForCustomerExceededFaultError,
  NoOperationFaultError,
  ReplicationGroupAlreadyExistsFaultError,
  ReplicationGroupAlreadyUnderMigrationFaultError,
  ReplicationGroupNotFoundFaultError,
  ReplicationGroupNotUnderMigrationFaultError,
  ReservedCacheNodeAlreadyExistsFaultError,
  ReservedCacheNodeNotFoundFaultError,
  ReservedCacheNodeQuotaExceededFaultError,
  ReservedCacheNodesOfferingNotFoundFaultError,
  SdkError,
  ServerlessCacheAlreadyExistsFaultError,
  ServerlessCacheNotFoundFaultError,
  ServerlessCacheQuotaForCustomerExceededFaultError,
  ServerlessCacheSnapshotAlreadyExistsFaultError,
  ServerlessCacheSnapshotNotFoundFaultError,
  ServerlessCacheSnapshotQuotaExceededFaultError,
  ServiceLinkedRoleNotFoundFaultError,
  ServiceUpdateNotFoundFaultError,
  SnapshotAlreadyExistsFaultError,
  SnapshotFeatureNotSupportedFaultError,
  SnapshotNotFoundFaultError,
  SnapshotQuotaExceededFaultError,
  SubnetInUseError,
  SubnetNotAllowedFaultError,
  TagNotFoundFaultError,
  TagQuotaPerResourceExceededError,
  TestFailoverNotAvailableFaultError,
  UserAlreadyExistsFaultError,
  UserGroupAlreadyExistsFaultError,
  UserGroupNotFoundFaultError,
  UserGroupQuotaExceededFaultError,
  UserNotFoundFaultError,
  UserQuotaExceededFaultError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AddTagsToResourceCommand,
  AuthorizeCacheSecurityGroupIngressCommand,
  BatchApplyUpdateActionCommand,
  BatchStopUpdateActionCommand,
  CompleteMigrationCommand,
  CopyServerlessCacheSnapshotCommand,
  CopySnapshotCommand,
  CreateCacheClusterCommand,
  CreateCacheParameterGroupCommand,
  CreateCacheSecurityGroupCommand,
  CreateCacheSubnetGroupCommand,
  CreateGlobalReplicationGroupCommand,
  CreateReplicationGroupCommand,
  CreateServerlessCacheCommand,
  CreateServerlessCacheSnapshotCommand,
  CreateSnapshotCommand,
  CreateUserCommand,
  CreateUserGroupCommand,
  DecreaseNodeGroupsInGlobalReplicationGroupCommand,
  DecreaseReplicaCountCommand,
  DeleteCacheClusterCommand,
  DeleteCacheParameterGroupCommand,
  DeleteCacheSecurityGroupCommand,
  DeleteCacheSubnetGroupCommand,
  DeleteGlobalReplicationGroupCommand,
  DeleteReplicationGroupCommand,
  DeleteServerlessCacheCommand,
  DeleteServerlessCacheSnapshotCommand,
  DeleteSnapshotCommand,
  DeleteUserCommand,
  DeleteUserGroupCommand,
  DescribeCacheClustersCommand,
  DescribeCacheEngineVersionsCommand,
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParametersCommand,
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSubnetGroupsCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventsCommand,
  DescribeGlobalReplicationGroupsCommand,
  DescribeReplicationGroupsCommand,
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeServerlessCacheSnapshotsCommand,
  DescribeServerlessCachesCommand,
  DescribeServiceUpdatesCommand,
  DescribeSnapshotsCommand,
  DescribeUpdateActionsCommand,
  DescribeUserGroupsCommand,
  DescribeUsersCommand,
  DisassociateGlobalReplicationGroupCommand,
  ExportServerlessCacheSnapshotCommand,
  FailoverGlobalReplicationGroupCommand,
  IncreaseNodeGroupsInGlobalReplicationGroupCommand,
  IncreaseReplicaCountCommand,
  ListAllowedNodeTypeModificationsCommand,
  ListTagsForResourceCommand,
  ModifyCacheClusterCommand,
  ModifyCacheParameterGroupCommand,
  ModifyCacheSubnetGroupCommand,
  ModifyGlobalReplicationGroupCommand,
  ModifyReplicationGroupCommand,
  ModifyReplicationGroupShardConfigurationCommand,
  ModifyServerlessCacheCommand,
  ModifyUserCommand,
  ModifyUserGroupCommand,
  PurchaseReservedCacheNodesOfferingCommand,
  RebalanceSlotsInGlobalReplicationGroupCommand,
  RebootCacheClusterCommand,
  RemoveTagsFromResourceCommand,
  ResetCacheParameterGroupCommand,
  RevokeCacheSecurityGroupIngressCommand,
  StartMigrationCommand,
  TestFailoverCommand,
  TestMigrationCommand,
};

interface ElastiCacheService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsToResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | CacheParameterGroupNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | CacheSubnetGroupNotFoundFaultError
    | InvalidARNFaultError
    | InvalidReplicationGroupStateFaultError
    | InvalidServerlessCacheSnapshotStateFaultError
    | InvalidServerlessCacheStateFaultError
    | ReplicationGroupNotFoundFaultError
    | ReservedCacheNodeNotFoundFaultError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
    | SnapshotNotFoundFaultError
    | TagQuotaPerResourceExceededError
    | UserGroupNotFoundFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link AuthorizeCacheSecurityGroupIngressCommand}
   */
  authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeCacheSecurityGroupIngressCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationAlreadyExistsFaultError
    | CacheSecurityGroupNotFoundFaultError
    | InvalidCacheSecurityGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link BatchApplyUpdateActionCommand}
   */
  batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchApplyUpdateActionCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ServiceUpdateNotFoundFaultError
  >;

  /**
   * @see {@link BatchStopUpdateActionCommand}
   */
  batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchStopUpdateActionCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ServiceUpdateNotFoundFaultError
  >;

  /**
   * @see {@link CompleteMigrationCommand}
   */
  completeMigration(
    args: CompleteMigrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CompleteMigrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidReplicationGroupStateFaultError
    | ReplicationGroupNotFoundFaultError
    | ReplicationGroupNotUnderMigrationFaultError
  >;

  /**
   * @see {@link CopyServerlessCacheSnapshotCommand}
   */
  copyServerlessCacheSnapshot(
    args: CopyServerlessCacheSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyServerlessCacheSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidServerlessCacheSnapshotStateFaultError
    | ServerlessCacheSnapshotAlreadyExistsFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
    | ServerlessCacheSnapshotQuotaExceededFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CopySnapshotCommand}
   */
  copySnapshot(
    args: CopySnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopySnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidSnapshotStateFaultError
    | SnapshotAlreadyExistsFaultError
    | SnapshotNotFoundFaultError
    | SnapshotQuotaExceededFaultError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CreateCacheClusterCommand}
   */
  createCacheCluster(
    args: CreateCacheClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterAlreadyExistsFaultError
    | CacheParameterGroupNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | CacheSubnetGroupNotFoundFaultError
    | ClusterQuotaForCustomerExceededFaultError
    | InsufficientCacheClusterCapacityFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | InvalidVPCNetworkStateFaultError
    | NodeQuotaForClusterExceededFaultError
    | NodeQuotaForCustomerExceededFaultError
    | ReplicationGroupNotFoundFaultError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CreateCacheParameterGroupCommand}
   */
  createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheParameterGroupAlreadyExistsFaultError
    | CacheParameterGroupQuotaExceededFaultError
    | InvalidCacheParameterGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CreateCacheSecurityGroupCommand}
   */
  createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheSecurityGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheSecurityGroupAlreadyExistsFaultError
    | CacheSecurityGroupQuotaExceededFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CreateCacheSubnetGroupCommand}
   */
  createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheSubnetGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheSubnetGroupAlreadyExistsFaultError
    | CacheSubnetGroupQuotaExceededFaultError
    | CacheSubnetQuotaExceededFaultError
    | InvalidSubnetError
    | SubnetNotAllowedFaultError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CreateGlobalReplicationGroupCommand}
   */
  createGlobalReplicationGroup(
    args: CreateGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupAlreadyExistsFaultError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | ReplicationGroupNotFoundFaultError
    | ServiceLinkedRoleNotFoundFaultError
  >;

  /**
   * @see {@link CreateReplicationGroupCommand}
   */
  createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | CacheParameterGroupNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | CacheSubnetGroupNotFoundFaultError
    | ClusterQuotaForCustomerExceededFaultError
    | GlobalReplicationGroupNotFoundFaultError
    | InsufficientCacheClusterCapacityFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidUserGroupStateFaultError
    | InvalidVPCNetworkStateFaultError
    | NodeGroupsPerReplicationGroupQuotaExceededFaultError
    | NodeQuotaForClusterExceededFaultError
    | NodeQuotaForCustomerExceededFaultError
    | ReplicationGroupAlreadyExistsFaultError
    | TagQuotaPerResourceExceededError
    | UserGroupNotFoundFaultError
  >;

  /**
   * @see {@link CreateServerlessCacheCommand}
   */
  createServerlessCache(
    args: CreateServerlessCacheCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateServerlessCacheCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidCredentialsError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidServerlessCacheStateFaultError
    | InvalidUserGroupStateFaultError
    | ServerlessCacheAlreadyExistsFaultError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheQuotaForCustomerExceededFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | TagQuotaPerResourceExceededError
    | UserGroupNotFoundFaultError
  >;

  /**
   * @see {@link CreateServerlessCacheSnapshotCommand}
   */
  createServerlessCacheSnapshot(
    args: CreateServerlessCacheSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateServerlessCacheSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidServerlessCacheStateFaultError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheSnapshotAlreadyExistsFaultError
    | ServerlessCacheSnapshotQuotaExceededFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | ReplicationGroupNotFoundFaultError
    | SnapshotAlreadyExistsFaultError
    | SnapshotFeatureNotSupportedFaultError
    | SnapshotQuotaExceededFaultError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DuplicateUserNameFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ServiceLinkedRoleNotFoundFaultError
    | TagQuotaPerResourceExceededError
    | UserAlreadyExistsFaultError
    | UserQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateUserGroupCommand}
   */
  createUserGroup(
    args: CreateUserGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DefaultUserRequiredError
    | DuplicateUserNameFaultError
    | InvalidParameterValueError
    | ServiceLinkedRoleNotFoundFaultError
    | TagQuotaPerResourceExceededError
    | UserGroupAlreadyExistsFaultError
    | UserGroupQuotaExceededFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  decreaseNodeGroupsInGlobalReplicationGroup(
    args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DecreaseReplicaCountCommand}
   */
  decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DecreaseReplicaCountCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClusterQuotaForCustomerExceededFaultError
    | InsufficientCacheClusterCapacityFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | InvalidVPCNetworkStateFaultError
    | NodeGroupsPerReplicationGroupQuotaExceededFaultError
    | NodeQuotaForCustomerExceededFaultError
    | NoOperationFaultError
    | ReplicationGroupNotFoundFaultError
    | ServiceLinkedRoleNotFoundFaultError
  >;

  /**
   * @see {@link DeleteCacheClusterCommand}
   */
  deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | SnapshotAlreadyExistsFaultError
    | SnapshotFeatureNotSupportedFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link DeleteCacheParameterGroupCommand}
   */
  deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheParameterGroupNotFoundFaultError
    | InvalidCacheParameterGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteCacheSecurityGroupCommand}
   */
  deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheSecurityGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheSecurityGroupNotFoundFaultError
    | InvalidCacheSecurityGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteCacheSubnetGroupCommand}
   */
  deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheSubnetGroupCommandOutput,
    Cause.TimeoutException | SdkError | CacheSubnetGroupInUseError | CacheSubnetGroupNotFoundFaultError
  >;

  /**
   * @see {@link DeleteGlobalReplicationGroupCommand}
   */
  deleteGlobalReplicationGroup(
    args: DeleteGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteReplicationGroupCommand}
   */
  deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | ReplicationGroupNotFoundFaultError
    | SnapshotAlreadyExistsFaultError
    | SnapshotFeatureNotSupportedFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link DeleteServerlessCacheCommand}
   */
  deleteServerlessCache(
    args: DeleteServerlessCacheCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServerlessCacheCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidCredentialsError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidServerlessCacheStateFaultError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheSnapshotAlreadyExistsFaultError
    | ServiceLinkedRoleNotFoundFaultError
  >;

  /**
   * @see {@link DeleteServerlessCacheSnapshotCommand}
   */
  deleteServerlessCacheSnapshot(
    args: DeleteServerlessCacheSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServerlessCacheSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterValueError
    | InvalidServerlessCacheSnapshotStateFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
    | ServiceLinkedRoleNotFoundFaultError
  >;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidSnapshotStateFaultError
    | SnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DefaultUserAssociatedToUserGroupFaultError
    | InvalidParameterValueError
    | InvalidUserStateFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link DeleteUserGroupCommand}
   */
  deleteUserGroup(
    args: DeleteUserGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterValueError
    | InvalidUserGroupStateFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | UserGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeCacheClustersCommand}
   */
  describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheClustersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheEngineVersionsCommand}
   */
  describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheEngineVersionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeCacheParameterGroupsCommand}
   */
  describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheParameterGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheParameterGroupNotFoundFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheParametersCommand}
   */
  describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheParametersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheParameterGroupNotFoundFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheSecurityGroupsCommand}
   */
  describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheSecurityGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheSecurityGroupNotFoundFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheSubnetGroupsCommand}
   */
  describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheSubnetGroupsCommandOutput,
    Cause.TimeoutException | SdkError | CacheSubnetGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEngineDefaultParametersCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterCombinationError | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterCombinationError | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeGlobalReplicationGroupsCommand}
   */
  describeGlobalReplicationGroups(
    args: DescribeGlobalReplicationGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalReplicationGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeReplicationGroupsCommand}
   */
  describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplicationGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ReplicationGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeReservedCacheNodesCommand}
   */
  describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedCacheNodesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ReservedCacheNodeNotFoundFaultError
  >;

  /**
   * @see {@link DescribeReservedCacheNodesOfferingsCommand}
   */
  describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedCacheNodesOfferingsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ReservedCacheNodesOfferingNotFoundFaultError
  >;

  /**
   * @see {@link DescribeServerlessCacheSnapshotsCommand}
   */
  describeServerlessCacheSnapshots(
    args: DescribeServerlessCacheSnapshotsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServerlessCacheSnapshotsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeServerlessCachesCommand}
   */
  describeServerlessCaches(
    args: DescribeServerlessCachesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServerlessCachesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ServerlessCacheNotFoundFaultError
  >;

  /**
   * @see {@link DescribeServiceUpdatesCommand}
   */
  describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceUpdatesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ServiceUpdateNotFoundFaultError
  >;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSnapshotsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | SnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeUpdateActionsCommand}
   */
  describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUpdateActionsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterCombinationError | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeUserGroupsCommand}
   */
  describeUserGroups(
    args: DescribeUserGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | ServiceLinkedRoleNotFoundFaultError
    | UserGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeUsersCommand}
   */
  describeUsers(
    args: DescribeUsersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUsersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | ServiceLinkedRoleNotFoundFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link DisassociateGlobalReplicationGroupCommand}
   */
  disassociateGlobalReplicationGroup(
    args: DisassociateGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ExportServerlessCacheSnapshotCommand}
   */
  exportServerlessCacheSnapshot(
    args: ExportServerlessCacheSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportServerlessCacheSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterValueError
    | InvalidServerlessCacheSnapshotStateFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
    | ServiceLinkedRoleNotFoundFaultError
  >;

  /**
   * @see {@link FailoverGlobalReplicationGroupCommand}
   */
  failoverGlobalReplicationGroup(
    args: FailoverGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    FailoverGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  increaseNodeGroupsInGlobalReplicationGroup(
    args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link IncreaseReplicaCountCommand}
   */
  increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    IncreaseReplicaCountCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClusterQuotaForCustomerExceededFaultError
    | InsufficientCacheClusterCapacityFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidKMSKeyFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | InvalidVPCNetworkStateFaultError
    | NodeGroupsPerReplicationGroupQuotaExceededFaultError
    | NodeQuotaForCustomerExceededFaultError
    | NoOperationFaultError
    | ReplicationGroupNotFoundFaultError
  >;

  /**
   * @see {@link ListAllowedNodeTypeModificationsCommand}
   */
  listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAllowedNodeTypeModificationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ReplicationGroupNotFoundFaultError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | CacheParameterGroupNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | CacheSubnetGroupNotFoundFaultError
    | InvalidARNFaultError
    | InvalidReplicationGroupStateFaultError
    | InvalidServerlessCacheSnapshotStateFaultError
    | InvalidServerlessCacheStateFaultError
    | ReplicationGroupNotFoundFaultError
    | ReservedCacheNodeNotFoundFaultError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
    | SnapshotNotFoundFaultError
    | UserGroupNotFoundFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link ModifyCacheClusterCommand}
   */
  modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | CacheParameterGroupNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | InsufficientCacheClusterCapacityFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidCacheSecurityGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidVPCNetworkStateFaultError
    | NodeQuotaForClusterExceededFaultError
    | NodeQuotaForCustomerExceededFaultError
  >;

  /**
   * @see {@link ModifyCacheParameterGroupCommand}
   */
  modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheParameterGroupNotFoundFaultError
    | InvalidCacheParameterGroupStateFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyCacheSubnetGroupCommand}
   */
  modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheSubnetGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheSubnetGroupNotFoundFaultError
    | CacheSubnetQuotaExceededFaultError
    | InvalidSubnetError
    | SubnetInUseError
    | SubnetNotAllowedFaultError
  >;

  /**
   * @see {@link ModifyGlobalReplicationGroupCommand}
   */
  modifyGlobalReplicationGroup(
    args: ModifyGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyReplicationGroupCommand}
   */
  modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | CacheParameterGroupNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | InsufficientCacheClusterCapacityFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidCacheSecurityGroupStateFaultError
    | InvalidKMSKeyFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | InvalidUserGroupStateFaultError
    | InvalidVPCNetworkStateFaultError
    | NodeQuotaForClusterExceededFaultError
    | NodeQuotaForCustomerExceededFaultError
    | ReplicationGroupNotFoundFaultError
    | UserGroupNotFoundFaultError
  >;

  /**
   * @see {@link ModifyReplicationGroupShardConfigurationCommand}
   */
  modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyReplicationGroupShardConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InsufficientCacheClusterCapacityFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidKMSKeyFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | InvalidVPCNetworkStateFaultError
    | NodeGroupsPerReplicationGroupQuotaExceededFaultError
    | NodeQuotaForCustomerExceededFaultError
    | ReplicationGroupNotFoundFaultError
  >;

  /**
   * @see {@link ModifyServerlessCacheCommand}
   */
  modifyServerlessCache(
    args: ModifyServerlessCacheCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyServerlessCacheCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidCredentialsError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidServerlessCacheStateFaultError
    | InvalidUserGroupStateFaultError
    | ServerlessCacheNotFoundFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | UserGroupNotFoundFaultError
  >;

  /**
   * @see {@link ModifyUserCommand}
   */
  modifyUser(
    args: ModifyUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyUserCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidUserStateFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link ModifyUserGroupCommand}
   */
  modifyUserGroup(
    args: ModifyUserGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyUserGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DefaultUserRequiredError
    | DuplicateUserNameFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidUserGroupStateFaultError
    | ServiceLinkedRoleNotFoundFaultError
    | UserGroupNotFoundFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link PurchaseReservedCacheNodesOfferingCommand}
   */
  purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedCacheNodesOfferingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ReservedCacheNodeAlreadyExistsFaultError
    | ReservedCacheNodeQuotaExceededFaultError
    | ReservedCacheNodesOfferingNotFoundFaultError
    | TagQuotaPerResourceExceededError
  >;

  /**
   * @see {@link RebalanceSlotsInGlobalReplicationGroupCommand}
   */
  rebalanceSlotsInGlobalReplicationGroup(
    args: RebalanceSlotsInGlobalReplicationGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebalanceSlotsInGlobalReplicationGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalReplicationGroupNotFoundFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link RebootCacheClusterCommand}
   */
  rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootCacheClusterCommandOutput,
    Cause.TimeoutException | SdkError | CacheClusterNotFoundFaultError | InvalidCacheClusterStateFaultError
  >;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsFromResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheClusterNotFoundFaultError
    | CacheParameterGroupNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | CacheSubnetGroupNotFoundFaultError
    | InvalidARNFaultError
    | InvalidReplicationGroupStateFaultError
    | InvalidServerlessCacheSnapshotStateFaultError
    | InvalidServerlessCacheStateFaultError
    | ReplicationGroupNotFoundFaultError
    | ReservedCacheNodeNotFoundFaultError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
    | SnapshotNotFoundFaultError
    | TagNotFoundFaultError
    | UserGroupNotFoundFaultError
    | UserNotFoundFaultError
  >;

  /**
   * @see {@link ResetCacheParameterGroupCommand}
   */
  resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetCacheParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CacheParameterGroupNotFoundFaultError
    | InvalidCacheParameterGroupStateFaultError
    | InvalidGlobalReplicationGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link RevokeCacheSecurityGroupIngressCommand}
   */
  revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeCacheSecurityGroupIngressCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | CacheSecurityGroupNotFoundFaultError
    | InvalidCacheSecurityGroupStateFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link StartMigrationCommand}
   */
  startMigration(
    args: StartMigrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMigrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | ReplicationGroupAlreadyUnderMigrationFaultError
    | ReplicationGroupNotFoundFaultError
  >;

  /**
   * @see {@link TestFailoverCommand}
   */
  testFailover(
    args: TestFailoverCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestFailoverCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | APICallRateForCustomerExceededFaultError
    | InvalidCacheClusterStateFaultError
    | InvalidKMSKeyFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | NodeGroupNotFoundFaultError
    | ReplicationGroupNotFoundFaultError
    | TestFailoverNotAvailableFaultError
  >;

  /**
   * @see {@link TestMigrationCommand}
   */
  testMigration(
    args: TestMigrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestMigrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | ReplicationGroupAlreadyUnderMigrationFaultError
    | ReplicationGroupNotFoundFaultError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeElastiCacheService = Effect.gen(function*() {
  const client = yield* Instance.ElastiCacheClientInstance;

  return yield* Service.fromClientAndCommands<ElastiCacheService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: ElastiCacheServiceConfig.toElastiCacheClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ElastiCacheService extends Effect.Tag("@effect-aws/client-elasticache/ElastiCacheService")<
  ElastiCacheService,
  ElastiCacheService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeElastiCacheService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: ElastiCacheService.Config) =>
    Layer.effect(this, makeElastiCacheService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(ElastiCacheServiceConfig.setElastiCacheServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ElastiCacheClientConfig) => ElastiCacheClient,
  ) =>
    Layer.effect(this, makeElastiCacheService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.ElastiCacheClientInstance,
          Effect.map(ElastiCacheServiceConfig.toElastiCacheClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ElastiCacheService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<ElastiCacheClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
