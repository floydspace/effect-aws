/**
 * @since 1.0.0
 */
import {
  ElastiCacheServiceException as SdkElastiCacheServiceException,
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
  type AddTagsToResourceMessage,
  type TagListMessage,
  type AuthorizeCacheSecurityGroupIngressMessage,
  type AuthorizeCacheSecurityGroupIngressResult,
  type BatchApplyUpdateActionMessage,
  type UpdateActionResultsMessage,
  type BatchStopUpdateActionMessage,
  type CompleteMigrationMessage,
  type CompleteMigrationResponse,
  type CopyServerlessCacheSnapshotRequest,
  type CopyServerlessCacheSnapshotResponse,
  type CopySnapshotMessage,
  type CopySnapshotResult,
  type CreateCacheClusterMessage,
  type CreateCacheClusterResult,
  type CreateCacheParameterGroupMessage,
  type CreateCacheParameterGroupResult,
  type CreateCacheSecurityGroupMessage,
  type CreateCacheSecurityGroupResult,
  type CreateCacheSubnetGroupMessage,
  type CreateCacheSubnetGroupResult,
  type CreateGlobalReplicationGroupMessage,
  type CreateGlobalReplicationGroupResult,
  type CreateReplicationGroupMessage,
  type CreateReplicationGroupResult,
  type CreateServerlessCacheRequest,
  type CreateServerlessCacheResponse,
  type CreateServerlessCacheSnapshotRequest,
  type CreateServerlessCacheSnapshotResponse,
  type CreateSnapshotMessage,
  type CreateSnapshotResult,
  type CreateUserMessage,
  type User,
  type CreateUserGroupMessage,
  type UserGroup,
  type DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  type DecreaseNodeGroupsInGlobalReplicationGroupResult,
  type DecreaseReplicaCountMessage,
  type DecreaseReplicaCountResult,
  type DeleteCacheClusterMessage,
  type DeleteCacheClusterResult,
  type DeleteCacheParameterGroupMessage,
  type DeleteCacheSecurityGroupMessage,
  type DeleteCacheSubnetGroupMessage,
  type DeleteGlobalReplicationGroupMessage,
  type DeleteGlobalReplicationGroupResult,
  type DeleteReplicationGroupMessage,
  type DeleteReplicationGroupResult,
  type DeleteServerlessCacheRequest,
  type DeleteServerlessCacheResponse,
  type DeleteServerlessCacheSnapshotRequest,
  type DeleteServerlessCacheSnapshotResponse,
  type DeleteSnapshotMessage,
  type DeleteSnapshotResult,
  type DeleteUserMessage,
  type DeleteUserGroupMessage,
  type DescribeCacheClustersMessage,
  type CacheClusterMessage,
  type DescribeCacheEngineVersionsMessage,
  type CacheEngineVersionMessage,
  type DescribeCacheParameterGroupsMessage,
  type CacheParameterGroupsMessage,
  type DescribeCacheParametersMessage,
  type CacheParameterGroupDetails,
  type DescribeCacheSecurityGroupsMessage,
  type CacheSecurityGroupMessage,
  type DescribeCacheSubnetGroupsMessage,
  type CacheSubnetGroupMessage,
  type DescribeEngineDefaultParametersMessage,
  type DescribeEngineDefaultParametersResult,
  type DescribeEventsMessage,
  type EventsMessage,
  type DescribeGlobalReplicationGroupsMessage,
  type DescribeGlobalReplicationGroupsResult,
  type DescribeReplicationGroupsMessage,
  type ReplicationGroupMessage,
  type DescribeReservedCacheNodesMessage,
  type ReservedCacheNodeMessage,
  type DescribeReservedCacheNodesOfferingsMessage,
  type ReservedCacheNodesOfferingMessage,
  type DescribeServerlessCacheSnapshotsRequest,
  type DescribeServerlessCacheSnapshotsResponse,
  type DescribeServerlessCachesRequest,
  type DescribeServerlessCachesResponse,
  type DescribeServiceUpdatesMessage,
  type ServiceUpdatesMessage,
  type DescribeSnapshotsMessage,
  type DescribeSnapshotsListMessage,
  type DescribeUpdateActionsMessage,
  type UpdateActionsMessage,
  type DescribeUserGroupsMessage,
  type DescribeUserGroupsResult,
  type DescribeUsersMessage,
  type DescribeUsersResult,
  type DisassociateGlobalReplicationGroupMessage,
  type DisassociateGlobalReplicationGroupResult,
  type ExportServerlessCacheSnapshotRequest,
  type ExportServerlessCacheSnapshotResponse,
  type FailoverGlobalReplicationGroupMessage,
  type FailoverGlobalReplicationGroupResult,
  type IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  type IncreaseNodeGroupsInGlobalReplicationGroupResult,
  type IncreaseReplicaCountMessage,
  type IncreaseReplicaCountResult,
  type ListAllowedNodeTypeModificationsMessage,
  type AllowedNodeTypeModificationsMessage,
  type ListTagsForResourceMessage,
  type ModifyCacheClusterMessage,
  type ModifyCacheClusterResult,
  type ModifyCacheParameterGroupMessage,
  type CacheParameterGroupNameMessage,
  type ModifyCacheSubnetGroupMessage,
  type ModifyCacheSubnetGroupResult,
  type ModifyGlobalReplicationGroupMessage,
  type ModifyGlobalReplicationGroupResult,
  type ModifyReplicationGroupMessage,
  type ModifyReplicationGroupResult,
  type ModifyReplicationGroupShardConfigurationMessage,
  type ModifyReplicationGroupShardConfigurationResult,
  type ModifyServerlessCacheRequest,
  type ModifyServerlessCacheResponse,
  type ModifyUserMessage,
  type ModifyUserGroupMessage,
  type PurchaseReservedCacheNodesOfferingMessage,
  type PurchaseReservedCacheNodesOfferingResult,
  type RebalanceSlotsInGlobalReplicationGroupMessage,
  type RebalanceSlotsInGlobalReplicationGroupResult,
  type RebootCacheClusterMessage,
  type RebootCacheClusterResult,
  type RemoveTagsFromResourceMessage,
  type ResetCacheParameterGroupMessage,
  type RevokeCacheSecurityGroupIngressMessage,
  type RevokeCacheSecurityGroupIngressResult,
  type StartMigrationMessage,
  type StartMigrationResponse,
  type TestFailoverMessage,
  type TestFailoverResult,
  type TestMigrationMessage,
  type TestMigrationResponse,
} from "@aws-sdk/client-elasticache";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  ElastiCacheClientInstance,
  ElastiCacheClientInstanceLayer,
} from "./ElastiCacheClientInstance";
import { DefaultElastiCacheClientConfigLayer } from "./ElastiCacheClientInstanceConfig";
import {
  type CacheClusterNotFoundFault,
  type CacheParameterGroupNotFoundFault,
  type CacheSecurityGroupNotFoundFault,
  type CacheSubnetGroupNotFoundFault,
  type InvalidARNFault,
  type InvalidReplicationGroupStateFault,
  type InvalidServerlessCacheSnapshotStateFault,
  type InvalidServerlessCacheStateFault,
  type ReplicationGroupNotFoundFault,
  type ReservedCacheNodeNotFoundFault,
  type ServerlessCacheNotFoundFault,
  type ServerlessCacheSnapshotNotFoundFault,
  type SnapshotNotFoundFault,
  type TagQuotaPerResourceExceeded,
  type UserGroupNotFoundFault,
  type UserNotFoundFault,
  type AuthorizationAlreadyExistsFault,
  type InvalidCacheSecurityGroupStateFault,
  type InvalidParameterCombinationException,
  type InvalidParameterValueException,
  type ServiceUpdateNotFoundFault,
  type ReplicationGroupNotUnderMigrationFault,
  type ServerlessCacheSnapshotAlreadyExistsFault,
  type ServerlessCacheSnapshotQuotaExceededFault,
  type ServiceLinkedRoleNotFoundFault,
  type InvalidSnapshotStateFault,
  type SnapshotAlreadyExistsFault,
  type SnapshotQuotaExceededFault,
  type CacheClusterAlreadyExistsFault,
  type ClusterQuotaForCustomerExceededFault,
  type InsufficientCacheClusterCapacityFault,
  type InvalidVPCNetworkStateFault,
  type NodeQuotaForClusterExceededFault,
  type NodeQuotaForCustomerExceededFault,
  type CacheParameterGroupAlreadyExistsFault,
  type CacheParameterGroupQuotaExceededFault,
  type InvalidCacheParameterGroupStateFault,
  type CacheSecurityGroupAlreadyExistsFault,
  type CacheSecurityGroupQuotaExceededFault,
  type CacheSubnetGroupAlreadyExistsFault,
  type CacheSubnetGroupQuotaExceededFault,
  type CacheSubnetQuotaExceededFault,
  type InvalidSubnet,
  type SubnetNotAllowedFault,
  type GlobalReplicationGroupAlreadyExistsFault,
  type GlobalReplicationGroupNotFoundFault,
  type InvalidCacheClusterStateFault,
  type InvalidGlobalReplicationGroupStateFault,
  type InvalidUserGroupStateFault,
  type NodeGroupsPerReplicationGroupQuotaExceededFault,
  type ReplicationGroupAlreadyExistsFault,
  type InvalidCredentialsException,
  type ServerlessCacheAlreadyExistsFault,
  type ServerlessCacheQuotaForCustomerExceededFault,
  type SnapshotFeatureNotSupportedFault,
  type DuplicateUserNameFault,
  type UserAlreadyExistsFault,
  type UserQuotaExceededFault,
  type DefaultUserRequired,
  type UserGroupAlreadyExistsFault,
  type UserGroupQuotaExceededFault,
  type NoOperationFault,
  type CacheSubnetGroupInUse,
  type DefaultUserAssociatedToUserGroupFault,
  type InvalidUserStateFault,
  type ReservedCacheNodesOfferingNotFoundFault,
  type InvalidKMSKeyFault,
  type SubnetInUse,
  type ReservedCacheNodeAlreadyExistsFault,
  type ReservedCacheNodeQuotaExceededFault,
  type TagNotFoundFault,
  type AuthorizationNotFoundFault,
  type ReplicationGroupAlreadyUnderMigrationFault,
  type APICallRateForCustomerExceededFault,
  type NodeGroupNotFoundFault,
  type TestFailoverNotAvailableFault,
  type TaggedException,
  SdkError,
} from "./Errors";

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

/**
 * @since 1.0.0
 * @category models
 */
export interface ElastiCacheService {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagListMessage,
    | SdkError
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link AuthorizeCacheSecurityGroupIngressCommand}
   */
  authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeCacheSecurityGroupIngressResult,
    | SdkError
    | AuthorizationAlreadyExistsFault
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link BatchApplyUpdateActionCommand}
   */
  batchApplyUpdateAction(
    args: BatchApplyUpdateActionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateActionResultsMessage,
    SdkError | InvalidParameterValueException | ServiceUpdateNotFoundFault
  >;

  /**
   * @see {@link BatchStopUpdateActionCommand}
   */
  batchStopUpdateAction(
    args: BatchStopUpdateActionMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateActionResultsMessage,
    SdkError | InvalidParameterValueException | ServiceUpdateNotFoundFault
  >;

  /**
   * @see {@link CompleteMigrationCommand}
   */
  completeMigration(
    args: CompleteMigrationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CompleteMigrationResponse,
    | SdkError
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | ReplicationGroupNotUnderMigrationFault
  >;

  /**
   * @see {@link CopyServerlessCacheSnapshotCommand}
   */
  copyServerlessCacheSnapshot(
    args: CopyServerlessCacheSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyServerlessCacheSnapshotResponse,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServerlessCacheSnapshotQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CopySnapshotCommand}
   */
  copySnapshot(
    args: CopySnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopySnapshotResult,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | SnapshotAlreadyExistsFault
    | SnapshotNotFoundFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CreateCacheClusterCommand}
   */
  createCacheCluster(
    args: CreateCacheClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheClusterResult,
    | SdkError
    | CacheClusterAlreadyExistsFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CreateCacheParameterGroupCommand}
   */
  createCacheParameterGroup(
    args: CreateCacheParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheParameterGroupResult,
    | SdkError
    | CacheParameterGroupAlreadyExistsFault
    | CacheParameterGroupQuotaExceededFault
    | InvalidCacheParameterGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CreateCacheSecurityGroupCommand}
   */
  createCacheSecurityGroup(
    args: CreateCacheSecurityGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheSecurityGroupResult,
    | SdkError
    | CacheSecurityGroupAlreadyExistsFault
    | CacheSecurityGroupQuotaExceededFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CreateCacheSubnetGroupCommand}
   */
  createCacheSubnetGroup(
    args: CreateCacheSubnetGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheSubnetGroupResult,
    | SdkError
    | CacheSubnetGroupAlreadyExistsFault
    | CacheSubnetGroupQuotaExceededFault
    | CacheSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetNotAllowedFault
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CreateGlobalReplicationGroupCommand}
   */
  createGlobalReplicationGroup(
    args: CreateGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupAlreadyExistsFault
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
  >;

  /**
   * @see {@link CreateReplicationGroupCommand}
   */
  createReplicationGroup(
    args: CreateReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateReplicationGroupResult,
    | SdkError
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | ClusterQuotaForCustomerExceededFault
    | GlobalReplicationGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupAlreadyExistsFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
  >;

  /**
   * @see {@link CreateServerlessCacheCommand}
   */
  createServerlessCache(
    args: CreateServerlessCacheRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateServerlessCacheResponse,
    | SdkError
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | InvalidUserGroupStateFault
    | ServerlessCacheAlreadyExistsFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheQuotaForCustomerExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupNotFoundFault
  >;

  /**
   * @see {@link CreateServerlessCacheSnapshotCommand}
   */
  createServerlessCacheSnapshot(
    args: CreateServerlessCacheSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateServerlessCacheSnapshotResponse,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServerlessCacheSnapshotQuotaExceededFault
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateSnapshotResult,
    | SdkError
    | CacheClusterNotFoundFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    User,
    | SdkError
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserAlreadyExistsFault
    | UserQuotaExceededFault
  >;

  /**
   * @see {@link CreateUserGroupCommand}
   */
  createUserGroup(
    args: CreateUserGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UserGroup,
    | SdkError
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterValueException
    | ServiceLinkedRoleNotFoundFault
    | TagQuotaPerResourceExceeded
    | UserGroupAlreadyExistsFault
    | UserGroupQuotaExceededFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  decreaseNodeGroupsInGlobalReplicationGroup(
    args: DecreaseNodeGroupsInGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DecreaseNodeGroupsInGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DecreaseReplicaCountCommand}
   */
  decreaseReplicaCount(
    args: DecreaseReplicaCountMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DecreaseReplicaCountResult,
    | SdkError
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ReplicationGroupNotFoundFault
    | ServiceLinkedRoleNotFoundFault
  >;

  /**
   * @see {@link DeleteCacheClusterCommand}
   */
  deleteCacheCluster(
    args: DeleteCacheClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheClusterResult,
    | SdkError
    | CacheClusterNotFoundFault
    | InvalidCacheClusterStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link DeleteCacheParameterGroupCommand}
   */
  deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DeleteCacheSecurityGroupCommand}
   */
  deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DeleteCacheSubnetGroupCommand}
   */
  deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | CacheSubnetGroupInUse | CacheSubnetGroupNotFoundFault
  >;

  /**
   * @see {@link DeleteGlobalReplicationGroupCommand}
   */
  deleteGlobalReplicationGroup(
    args: DeleteGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DeleteReplicationGroupCommand}
   */
  deleteReplicationGroup(
    args: DeleteReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteReplicationGroupResult,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupNotFoundFault
    | SnapshotAlreadyExistsFault
    | SnapshotFeatureNotSupportedFault
    | SnapshotQuotaExceededFault
  >;

  /**
   * @see {@link DeleteServerlessCacheCommand}
   */
  deleteServerlessCache(
    args: DeleteServerlessCacheRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServerlessCacheResponse,
    | SdkError
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotAlreadyExistsFault
    | ServiceLinkedRoleNotFoundFault
  >;

  /**
   * @see {@link DeleteServerlessCacheSnapshotCommand}
   */
  deleteServerlessCacheSnapshot(
    args: DeleteServerlessCacheSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServerlessCacheSnapshotResponse,
    | SdkError
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServiceLinkedRoleNotFoundFault
  >;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSnapshotResult,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidSnapshotStateFault
    | SnapshotNotFoundFault
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    User,
    | SdkError
    | DefaultUserAssociatedToUserGroupFault
    | InvalidParameterValueException
    | InvalidUserStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link DeleteUserGroupCommand}
   */
  deleteUserGroup(
    args: DeleteUserGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UserGroup,
    | SdkError
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeCacheClustersCommand}
   */
  describeCacheClusters(
    args: DescribeCacheClustersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CacheClusterMessage,
    | SdkError
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeCacheEngineVersionsCommand}
   */
  describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CacheEngineVersionMessage, SdkError>;

  /**
   * @see {@link DescribeCacheParameterGroupsCommand}
   */
  describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CacheParameterGroupsMessage,
    | SdkError
    | CacheParameterGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeCacheParametersCommand}
   */
  describeCacheParameters(
    args: DescribeCacheParametersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CacheParameterGroupDetails,
    | SdkError
    | CacheParameterGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeCacheSecurityGroupsCommand}
   */
  describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CacheSecurityGroupMessage,
    | SdkError
    | CacheSecurityGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeCacheSubnetGroupsCommand}
   */
  describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CacheSubnetGroupMessage,
    SdkError | CacheSubnetGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEngineDefaultParametersResult,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EventsMessage,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeGlobalReplicationGroupsCommand}
   */
  describeGlobalReplicationGroups(
    args: DescribeGlobalReplicationGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalReplicationGroupsResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeReplicationGroupsCommand}
   */
  describeReplicationGroups(
    args: DescribeReplicationGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReplicationGroupMessage,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReplicationGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeReservedCacheNodesCommand}
   */
  describeReservedCacheNodes(
    args: DescribeReservedCacheNodesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReservedCacheNodeMessage,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodeNotFoundFault
  >;

  /**
   * @see {@link DescribeReservedCacheNodesOfferingsCommand}
   */
  describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReservedCacheNodesOfferingMessage,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodesOfferingNotFoundFault
  >;

  /**
   * @see {@link DescribeServerlessCacheSnapshotsCommand}
   */
  describeServerlessCacheSnapshots(
    args: DescribeServerlessCacheSnapshotsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServerlessCacheSnapshotsResponse,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
  >;

  /**
   * @see {@link DescribeServerlessCachesCommand}
   */
  describeServerlessCaches(
    args: DescribeServerlessCachesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServerlessCachesResponse,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServerlessCacheNotFoundFault
  >;

  /**
   * @see {@link DescribeServiceUpdatesCommand}
   */
  describeServiceUpdates(
    args: DescribeServiceUpdatesMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ServiceUpdatesMessage,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ServiceUpdateNotFoundFault
  >;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(
    args: DescribeSnapshotsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSnapshotsListMessage,
    | SdkError
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | SnapshotNotFoundFault
  >;

  /**
   * @see {@link DescribeUpdateActionsCommand}
   */
  describeUpdateActions(
    args: DescribeUpdateActionsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateActionsMessage,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link DescribeUserGroupsCommand}
   */
  describeUserGroups(
    args: DescribeUserGroupsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserGroupsResult,
    | SdkError
    | InvalidParameterCombinationException
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
  >;

  /**
   * @see {@link DescribeUsersCommand}
   */
  describeUsers(
    args: DescribeUsersMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUsersResult,
    | SdkError
    | InvalidParameterCombinationException
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link DisassociateGlobalReplicationGroupCommand}
   */
  disassociateGlobalReplicationGroup(
    args: DisassociateGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link ExportServerlessCacheSnapshotCommand}
   */
  exportServerlessCacheSnapshot(
    args: ExportServerlessCacheSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExportServerlessCacheSnapshotResponse,
    | SdkError
    | InvalidParameterValueException
    | InvalidServerlessCacheSnapshotStateFault
    | ServerlessCacheSnapshotNotFoundFault
    | ServiceLinkedRoleNotFoundFault
  >;

  /**
   * @see {@link FailoverGlobalReplicationGroupCommand}
   */
  failoverGlobalReplicationGroup(
    args: FailoverGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    FailoverGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  increaseNodeGroupsInGlobalReplicationGroup(
    args: IncreaseNodeGroupsInGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    IncreaseNodeGroupsInGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
  >;

  /**
   * @see {@link IncreaseReplicaCountCommand}
   */
  increaseReplicaCount(
    args: IncreaseReplicaCountMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    IncreaseReplicaCountResult,
    | SdkError
    | ClusterQuotaForCustomerExceededFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | NoOperationFault
    | ReplicationGroupNotFoundFault
  >;

  /**
   * @see {@link ListAllowedNodeTypeModificationsCommand}
   */
  listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AllowedNodeTypeModificationsMessage,
    | SdkError
    | CacheClusterNotFoundFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReplicationGroupNotFoundFault
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagListMessage,
    | SdkError
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link ModifyCacheClusterCommand}
   */
  modifyCacheCluster(
    args: ModifyCacheClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheClusterResult,
    | SdkError
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
  >;

  /**
   * @see {@link ModifyCacheParameterGroupCommand}
   */
  modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CacheParameterGroupNameMessage,
    | SdkError
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link ModifyCacheSubnetGroupCommand}
   */
  modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheSubnetGroupResult,
    | SdkError
    | CacheSubnetGroupNotFoundFault
    | CacheSubnetQuotaExceededFault
    | InvalidSubnet
    | SubnetInUse
    | SubnetNotAllowedFault
  >;

  /**
   * @see {@link ModifyGlobalReplicationGroupCommand}
   */
  modifyGlobalReplicationGroup(
    args: ModifyGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
  >;

  /**
   * @see {@link ModifyReplicationGroupCommand}
   */
  modifyReplicationGroup(
    args: ModifyReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyReplicationGroupResult,
    | SdkError
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidUserGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeQuotaForClusterExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
    | UserGroupNotFoundFault
  >;

  /**
   * @see {@link ModifyReplicationGroupShardConfigurationCommand}
   */
  modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyReplicationGroupShardConfigurationResult,
    | SdkError
    | InsufficientCacheClusterCapacityFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | InvalidVPCNetworkStateFault
    | NodeGroupsPerReplicationGroupQuotaExceededFault
    | NodeQuotaForCustomerExceededFault
    | ReplicationGroupNotFoundFault
  >;

  /**
   * @see {@link ModifyServerlessCacheCommand}
   */
  modifyServerlessCache(
    args: ModifyServerlessCacheRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyServerlessCacheResponse,
    | SdkError
    | InvalidCredentialsException
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidServerlessCacheStateFault
    | InvalidUserGroupStateFault
    | ServerlessCacheNotFoundFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
  >;

  /**
   * @see {@link ModifyUserCommand}
   */
  modifyUser(
    args: ModifyUserMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    User,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link ModifyUserGroupCommand}
   */
  modifyUserGroup(
    args: ModifyUserGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UserGroup,
    | SdkError
    | DefaultUserRequired
    | DuplicateUserNameFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidUserGroupStateFault
    | ServiceLinkedRoleNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link PurchaseReservedCacheNodesOfferingCommand}
   */
  purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedCacheNodesOfferingResult,
    | SdkError
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | ReservedCacheNodeAlreadyExistsFault
    | ReservedCacheNodeQuotaExceededFault
    | ReservedCacheNodesOfferingNotFoundFault
    | TagQuotaPerResourceExceeded
  >;

  /**
   * @see {@link RebalanceSlotsInGlobalReplicationGroupCommand}
   */
  rebalanceSlotsInGlobalReplicationGroup(
    args: RebalanceSlotsInGlobalReplicationGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RebalanceSlotsInGlobalReplicationGroupResult,
    | SdkError
    | GlobalReplicationGroupNotFoundFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterValueException
  >;

  /**
   * @see {@link RebootCacheClusterCommand}
   */
  rebootCacheCluster(
    args: RebootCacheClusterMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RebootCacheClusterResult,
    SdkError | CacheClusterNotFoundFault | InvalidCacheClusterStateFault
  >;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagListMessage,
    | SdkError
    | CacheClusterNotFoundFault
    | CacheParameterGroupNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | CacheSubnetGroupNotFoundFault
    | InvalidARNFault
    | InvalidReplicationGroupStateFault
    | InvalidServerlessCacheSnapshotStateFault
    | InvalidServerlessCacheStateFault
    | ReplicationGroupNotFoundFault
    | ReservedCacheNodeNotFoundFault
    | ServerlessCacheNotFoundFault
    | ServerlessCacheSnapshotNotFoundFault
    | SnapshotNotFoundFault
    | TagNotFoundFault
    | UserGroupNotFoundFault
    | UserNotFoundFault
  >;

  /**
   * @see {@link ResetCacheParameterGroupCommand}
   */
  resetCacheParameterGroup(
    args: ResetCacheParameterGroupMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CacheParameterGroupNameMessage,
    | SdkError
    | CacheParameterGroupNotFoundFault
    | InvalidCacheParameterGroupStateFault
    | InvalidGlobalReplicationGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link RevokeCacheSecurityGroupIngressCommand}
   */
  revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RevokeCacheSecurityGroupIngressResult,
    | SdkError
    | AuthorizationNotFoundFault
    | CacheSecurityGroupNotFoundFault
    | InvalidCacheSecurityGroupStateFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
  >;

  /**
   * @see {@link StartMigrationCommand}
   */
  startMigration(
    args: StartMigrationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartMigrationResponse,
    | SdkError
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupAlreadyUnderMigrationFault
    | ReplicationGroupNotFoundFault
  >;

  /**
   * @see {@link TestFailoverCommand}
   */
  testFailover(
    args: TestFailoverMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestFailoverResult,
    | SdkError
    | APICallRateForCustomerExceededFault
    | InvalidCacheClusterStateFault
    | InvalidKMSKeyFault
    | InvalidParameterCombinationException
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | NodeGroupNotFoundFault
    | ReplicationGroupNotFoundFault
    | TestFailoverNotAvailableFault
  >;

  /**
   * @see {@link TestMigrationCommand}
   */
  testMigration(
    args: TestMigrationMessage,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestMigrationResponse,
    | SdkError
    | InvalidParameterValueException
    | InvalidReplicationGroupStateFault
    | ReplicationGroupAlreadyUnderMigrationFault
    | ReplicationGroupNotFoundFault
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const ElastiCacheService = Context.GenericTag<ElastiCacheService>(
  "@effect-aws/client-elasticache/ElastiCacheService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeElastiCacheService = Effect.gen(function* (_) {
  const client = yield* _(ElastiCacheClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkElastiCacheServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkElastiCacheServiceException>
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
  }, {}) as ElastiCacheService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseElastiCacheServiceLayer = Layer.effect(
  ElastiCacheService,
  makeElastiCacheService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ElastiCacheServiceLayer = BaseElastiCacheServiceLayer.pipe(
  Layer.provide(ElastiCacheClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultElastiCacheServiceLayer = ElastiCacheServiceLayer.pipe(
  Layer.provide(DefaultElastiCacheClientConfigLayer),
);
