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
  ElastiCacheServiceException,
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
import { Context, Effect, Layer, Record, Data } from "effect";
import {
  ElastiCacheClientInstance,
  ElastiCacheClientInstanceLayer,
} from "./ElastiCacheClientInstance";
import { DefaultElastiCacheClientConfigLayer } from "./ElastiCacheClientInstanceConfig";
import {
  ElastiCacheServiceError,
  InvalidCredentialsError,
  InvalidParameterCombinationError,
  InvalidParameterValueError,
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

/**
 * @since 1.0.0
 * @category models
 */
export type ElastiCacheService = {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  readonly addTagsToResource: (
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddTagsToResourceCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link AuthorizeCacheSecurityGroupIngressCommand}
   */
  readonly authorizeCacheSecurityGroupIngress: (
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | AuthorizeCacheSecurityGroupIngressCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link BatchApplyUpdateActionCommand}
   */
  readonly batchApplyUpdateAction: (
    args: BatchApplyUpdateActionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | BatchApplyUpdateActionCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link BatchStopUpdateActionCommand}
   */
  readonly batchStopUpdateAction: (
    args: BatchStopUpdateActionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | BatchStopUpdateActionCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CompleteMigrationCommand}
   */
  readonly completeMigration: (
    args: CompleteMigrationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CompleteMigrationCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link CopyServerlessCacheSnapshotCommand}
   */
  readonly copyServerlessCacheSnapshot: (
    args: CopyServerlessCacheSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CopyServerlessCacheSnapshotCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CopySnapshotCommand}
   */
  readonly copySnapshot: (
    args: CopySnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CopySnapshotCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateCacheClusterCommand}
   */
  readonly createCacheCluster: (
    args: CreateCacheClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateCacheClusterCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateCacheParameterGroupCommand}
   */
  readonly createCacheParameterGroup: (
    args: CreateCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateCacheParameterGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateCacheSecurityGroupCommand}
   */
  readonly createCacheSecurityGroup: (
    args: CreateCacheSecurityGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateCacheSecurityGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateCacheSubnetGroupCommand}
   */
  readonly createCacheSubnetGroup: (
    args: CreateCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateCacheSubnetGroupCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link CreateGlobalReplicationGroupCommand}
   */
  readonly createGlobalReplicationGroup: (
    args: CreateGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateReplicationGroupCommand}
   */
  readonly createReplicationGroup: (
    args: CreateReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateServerlessCacheCommand}
   */
  readonly createServerlessCache: (
    args: CreateServerlessCacheCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateServerlessCacheCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidCredentialsError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateServerlessCacheSnapshotCommand}
   */
  readonly createServerlessCacheSnapshot: (
    args: CreateServerlessCacheSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateServerlessCacheSnapshotCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  readonly createSnapshot: (
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateSnapshotCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  readonly createUser: (
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateUserCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link CreateUserGroupCommand}
   */
  readonly createUserGroup: (
    args: CreateUserGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | CreateUserGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  readonly decreaseNodeGroupsInGlobalReplicationGroup: (
    args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DecreaseReplicaCountCommand}
   */
  readonly decreaseReplicaCount: (
    args: DecreaseReplicaCountCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DecreaseReplicaCountCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteCacheClusterCommand}
   */
  readonly deleteCacheCluster: (
    args: DeleteCacheClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteCacheClusterCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteCacheParameterGroupCommand}
   */
  readonly deleteCacheParameterGroup: (
    args: DeleteCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteCacheParameterGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteCacheSecurityGroupCommand}
   */
  readonly deleteCacheSecurityGroup: (
    args: DeleteCacheSecurityGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteCacheSecurityGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteCacheSubnetGroupCommand}
   */
  readonly deleteCacheSubnetGroup: (
    args: DeleteCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteCacheSubnetGroupCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link DeleteGlobalReplicationGroupCommand}
   */
  readonly deleteGlobalReplicationGroup: (
    args: DeleteGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteReplicationGroupCommand}
   */
  readonly deleteReplicationGroup: (
    args: DeleteReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteServerlessCacheCommand}
   */
  readonly deleteServerlessCache: (
    args: DeleteServerlessCacheCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteServerlessCacheCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidCredentialsError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteServerlessCacheSnapshotCommand}
   */
  readonly deleteServerlessCacheSnapshot: (
    args: DeleteServerlessCacheSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteServerlessCacheSnapshotCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  readonly deleteSnapshot: (
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteSnapshotCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  readonly deleteUser: (
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteUserCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteUserGroupCommand}
   */
  readonly deleteUserGroup: (
    args: DeleteUserGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DeleteUserGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheClustersCommand}
   */
  readonly describeCacheClusters: (
    args: DescribeCacheClustersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeCacheClustersCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheEngineVersionsCommand}
   */
  readonly describeCacheEngineVersions: (
    args: DescribeCacheEngineVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeCacheEngineVersionsCommandOutput
    | SdkError
    | ElastiCacheServiceError
  >;

  /**
   * @see {@link DescribeCacheParameterGroupsCommand}
   */
  readonly describeCacheParameterGroups: (
    args: DescribeCacheParameterGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeCacheParameterGroupsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheParametersCommand}
   */
  readonly describeCacheParameters: (
    args: DescribeCacheParametersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeCacheParametersCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheSecurityGroupsCommand}
   */
  readonly describeCacheSecurityGroups: (
    args: DescribeCacheSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeCacheSecurityGroupsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeCacheSubnetGroupsCommand}
   */
  readonly describeCacheSubnetGroups: (
    args: DescribeCacheSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCacheSubnetGroupsCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  readonly describeEngineDefaultParameters: (
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeEngineDefaultParametersCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  readonly describeEvents: (
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeEventsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeGlobalReplicationGroupsCommand}
   */
  readonly describeGlobalReplicationGroups: (
    args: DescribeGlobalReplicationGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeGlobalReplicationGroupsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeReplicationGroupsCommand}
   */
  readonly describeReplicationGroups: (
    args: DescribeReplicationGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeReplicationGroupsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeReservedCacheNodesCommand}
   */
  readonly describeReservedCacheNodes: (
    args: DescribeReservedCacheNodesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeReservedCacheNodesCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeReservedCacheNodesOfferingsCommand}
   */
  readonly describeReservedCacheNodesOfferings: (
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeReservedCacheNodesOfferingsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeServerlessCachesCommand}
   */
  readonly describeServerlessCaches: (
    args: DescribeServerlessCachesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeServerlessCachesCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeServerlessCacheSnapshotsCommand}
   */
  readonly describeServerlessCacheSnapshots: (
    args: DescribeServerlessCacheSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeServerlessCacheSnapshotsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeServiceUpdatesCommand}
   */
  readonly describeServiceUpdates: (
    args: DescribeServiceUpdatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeServiceUpdatesCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  readonly describeSnapshots: (
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeSnapshotsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeUpdateActionsCommand}
   */
  readonly describeUpdateActions: (
    args: DescribeUpdateActionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeUpdateActionsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeUserGroupsCommand}
   */
  readonly describeUserGroups: (
    args: DescribeUserGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeUserGroupsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
  >;

  /**
   * @see {@link DescribeUsersCommand}
   */
  readonly describeUsers: (
    args: DescribeUsersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DescribeUsersCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
  >;

  /**
   * @see {@link DisassociateGlobalReplicationGroupCommand}
   */
  readonly disassociateGlobalReplicationGroup: (
    args: DisassociateGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | DisassociateGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ExportServerlessCacheSnapshotCommand}
   */
  readonly exportServerlessCacheSnapshot: (
    args: ExportServerlessCacheSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ExportServerlessCacheSnapshotCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link FailoverGlobalReplicationGroupCommand}
   */
  readonly failoverGlobalReplicationGroup: (
    args: FailoverGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | FailoverGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  readonly increaseNodeGroupsInGlobalReplicationGroup: (
    args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link IncreaseReplicaCountCommand}
   */
  readonly increaseReplicaCount: (
    args: IncreaseReplicaCountCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | IncreaseReplicaCountCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ListAllowedNodeTypeModificationsCommand}
   */
  readonly listAllowedNodeTypeModifications: (
    args: ListAllowedNodeTypeModificationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ListAllowedNodeTypeModificationsCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  readonly listTagsForResource: (
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListTagsForResourceCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link ModifyCacheClusterCommand}
   */
  readonly modifyCacheCluster: (
    args: ModifyCacheClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyCacheClusterCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyCacheParameterGroupCommand}
   */
  readonly modifyCacheParameterGroup: (
    args: ModifyCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyCacheParameterGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyCacheSubnetGroupCommand}
   */
  readonly modifyCacheSubnetGroup: (
    args: ModifyCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyCacheSubnetGroupCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link ModifyGlobalReplicationGroupCommand}
   */
  readonly modifyGlobalReplicationGroup: (
    args: ModifyGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyReplicationGroupCommand}
   */
  readonly modifyReplicationGroup: (
    args: ModifyReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyReplicationGroupShardConfigurationCommand}
   */
  readonly modifyReplicationGroupShardConfiguration: (
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyReplicationGroupShardConfigurationCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyServerlessCacheCommand}
   */
  readonly modifyServerlessCache: (
    args: ModifyServerlessCacheCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyServerlessCacheCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidCredentialsError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyUserCommand}
   */
  readonly modifyUser: (
    args: ModifyUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyUserCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link ModifyUserGroupCommand}
   */
  readonly modifyUserGroup: (
    args: ModifyUserGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ModifyUserGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link PurchaseReservedCacheNodesOfferingCommand}
   */
  readonly purchaseReservedCacheNodesOffering: (
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | PurchaseReservedCacheNodesOfferingCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link RebalanceSlotsInGlobalReplicationGroupCommand}
   */
  readonly rebalanceSlotsInGlobalReplicationGroup: (
    args: RebalanceSlotsInGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | RebalanceSlotsInGlobalReplicationGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link RebootCacheClusterCommand}
   */
  readonly rebootCacheCluster: (
    args: RebootCacheClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RebootCacheClusterCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  readonly removeTagsFromResource: (
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveTagsFromResourceCommandOutput | SdkError | ElastiCacheServiceError
  >;

  /**
   * @see {@link ResetCacheParameterGroupCommand}
   */
  readonly resetCacheParameterGroup: (
    args: ResetCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | ResetCacheParameterGroupCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link RevokeCacheSecurityGroupIngressCommand}
   */
  readonly revokeCacheSecurityGroupIngress: (
    args: RevokeCacheSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | RevokeCacheSecurityGroupIngressCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link StartMigrationCommand}
   */
  readonly startMigration: (
    args: StartMigrationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | StartMigrationCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link TestFailoverCommand}
   */
  readonly testFailover: (
    args: TestFailoverCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | TestFailoverCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link TestMigrationCommand}
   */
  readonly testMigration: (
    args: TestMigrationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    | TestMigrationCommandOutput
    | SdkError
    | ElastiCacheServiceError
    | InvalidParameterValueError
  >;
};

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
          if (e instanceof ElastiCacheServiceException) {
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
