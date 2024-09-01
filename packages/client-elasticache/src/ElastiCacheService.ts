/**
 * @since 1.0.0
 */
import {
  ElastiCacheServiceException,
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
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Data, Effect, Layer, Record } from "effect";
import {
  ElastiCacheClientInstance,
  ElastiCacheClientInstanceLayer,
} from "./ElastiCacheClientInstance";
import { DefaultElastiCacheClientConfigLayer } from "./ElastiCacheClientInstanceConfig";
import {
  AllServiceErrors,
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
  NoOperationFaultError,
  NodeGroupNotFoundFaultError,
  NodeGroupsPerReplicationGroupQuotaExceededFaultError,
  NodeQuotaForClusterExceededFaultError,
  NodeQuotaForCustomerExceededFaultError,
  ReplicationGroupAlreadyExistsFaultError,
  ReplicationGroupAlreadyUnderMigrationFaultError,
  ReplicationGroupNotFoundFaultError,
  ReplicationGroupNotUnderMigrationFaultError,
  ReservedCacheNodeAlreadyExistsFaultError,
  ReservedCacheNodeNotFoundFaultError,
  ReservedCacheNodeQuotaExceededFaultError,
  ReservedCacheNodesOfferingNotFoundFaultError,
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
  SdkError,
  TaggedException,
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
  DescribeServerlessCachesCommand,
  DescribeServerlessCacheSnapshotsCommand,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsToResourceCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeCacheSecurityGroupIngressCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchApplyUpdateActionCommandOutput,
    SdkError | InvalidParameterValueError | ServiceUpdateNotFoundFaultError
  >;

  /**
   * @see {@link BatchStopUpdateActionCommand}
   */
  batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchStopUpdateActionCommandOutput,
    SdkError | InvalidParameterValueError | ServiceUpdateNotFoundFaultError
  >;

  /**
   * @see {@link CompleteMigrationCommand}
   */
  completeMigration(
    args: CompleteMigrationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CompleteMigrationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyServerlessCacheSnapshotCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopySnapshotCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheClusterCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheParameterGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheSecurityGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCacheSubnetGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateServerlessCacheCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateServerlessCacheSnapshotCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateSnapshotCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DecreaseReplicaCountCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheClusterCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheParameterGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheSecurityGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCacheSubnetGroupCommandOutput,
    SdkError | CacheSubnetGroupInUseError | CacheSubnetGroupNotFoundFaultError
  >;

  /**
   * @see {@link DeleteGlobalReplicationGroupCommand}
   */
  deleteGlobalReplicationGroup(
    args: DeleteGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServerlessCacheCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServerlessCacheSnapshotCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSnapshotCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheClustersCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeCacheEngineVersionsCommandOutput, SdkError>;

  /**
   * @see {@link DescribeCacheParameterGroupsCommand}
   */
  describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheParameterGroupsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheParametersCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheSecurityGroupsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCacheSubnetGroupsCommandOutput,
    SdkError | CacheSubnetGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEngineDefaultParametersCommandOutput,
    SdkError | InvalidParameterCombinationError | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventsCommandOutput,
    SdkError | InvalidParameterCombinationError | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeGlobalReplicationGroupsCommand}
   */
  describeGlobalReplicationGroups(
    args: DescribeGlobalReplicationGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalReplicationGroupsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplicationGroupsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedCacheNodesCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedCacheNodesOfferingsCommandOutput,
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ReservedCacheNodesOfferingNotFoundFaultError
  >;

  /**
   * @see {@link DescribeServerlessCachesCommand}
   */
  describeServerlessCaches(
    args: DescribeServerlessCachesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServerlessCachesCommandOutput,
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ServerlessCacheNotFoundFaultError
  >;

  /**
   * @see {@link DescribeServerlessCacheSnapshotsCommand}
   */
  describeServerlessCacheSnapshots(
    args: DescribeServerlessCacheSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServerlessCacheSnapshotsCommandOutput,
    | SdkError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | ServerlessCacheNotFoundFaultError
    | ServerlessCacheSnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeServiceUpdatesCommand}
   */
  describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceUpdatesCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSnapshotsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUpdateActionsCommandOutput,
    SdkError | InvalidParameterCombinationError | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeUserGroupsCommand}
   */
  describeUserGroups(
    args: DescribeUserGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserGroupsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUsersCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExportServerlessCacheSnapshotCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    FailoverGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    IncreaseReplicaCountCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAllowedNodeTypeModificationsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheClusterCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheParameterGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCacheSubnetGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyReplicationGroupShardConfigurationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyServerlessCacheCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyUserCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyUserGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedCacheNodesOfferingCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RebalanceSlotsInGlobalReplicationGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RebootCacheClusterCommandOutput,
    | SdkError
    | CacheClusterNotFoundFaultError
    | InvalidCacheClusterStateFaultError
  >;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsFromResourceCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ResetCacheParameterGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RevokeCacheSecurityGroupIngressCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartMigrationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestFailoverCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TestMigrationCommandOutput,
    | SdkError
    | InvalidParameterValueError
    | InvalidReplicationGroupStateFaultError
    | ReplicationGroupAlreadyUnderMigrationFaultError
    | ReplicationGroupNotFoundFaultError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class ElastiCacheService extends Effect.Tag(
  "@effect-aws/client-elasticache/ElastiCacheService",
)<ElastiCacheService, ElastiCacheService$>() {}

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
          if (
            e instanceof ElastiCacheServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<ElastiCacheServiceException>
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
  }, {}) as ElastiCacheService$;
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
