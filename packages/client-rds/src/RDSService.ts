/**
 * @since 1.0.0
 */
import {
  RDSServiceException,
  AddRoleToDBClusterCommand,
  type AddRoleToDBClusterCommandInput,
  type AddRoleToDBClusterCommandOutput,
  AddRoleToDBInstanceCommand,
  type AddRoleToDBInstanceCommandInput,
  type AddRoleToDBInstanceCommandOutput,
  AddSourceIdentifierToSubscriptionCommand,
  type AddSourceIdentifierToSubscriptionCommandInput,
  type AddSourceIdentifierToSubscriptionCommandOutput,
  AddTagsToResourceCommand,
  type AddTagsToResourceCommandInput,
  type AddTagsToResourceCommandOutput,
  ApplyPendingMaintenanceActionCommand,
  type ApplyPendingMaintenanceActionCommandInput,
  type ApplyPendingMaintenanceActionCommandOutput,
  AuthorizeDBSecurityGroupIngressCommand,
  type AuthorizeDBSecurityGroupIngressCommandInput,
  type AuthorizeDBSecurityGroupIngressCommandOutput,
  BacktrackDBClusterCommand,
  type BacktrackDBClusterCommandInput,
  type BacktrackDBClusterCommandOutput,
  CancelExportTaskCommand,
  type CancelExportTaskCommandInput,
  type CancelExportTaskCommandOutput,
  CopyDBClusterParameterGroupCommand,
  type CopyDBClusterParameterGroupCommandInput,
  type CopyDBClusterParameterGroupCommandOutput,
  CopyDBClusterSnapshotCommand,
  type CopyDBClusterSnapshotCommandInput,
  type CopyDBClusterSnapshotCommandOutput,
  CopyDBParameterGroupCommand,
  type CopyDBParameterGroupCommandInput,
  type CopyDBParameterGroupCommandOutput,
  CopyDBSnapshotCommand,
  type CopyDBSnapshotCommandInput,
  type CopyDBSnapshotCommandOutput,
  CopyOptionGroupCommand,
  type CopyOptionGroupCommandInput,
  type CopyOptionGroupCommandOutput,
  CreateBlueGreenDeploymentCommand,
  type CreateBlueGreenDeploymentCommandInput,
  type CreateBlueGreenDeploymentCommandOutput,
  CreateCustomDBEngineVersionCommand,
  type CreateCustomDBEngineVersionCommandInput,
  type CreateCustomDBEngineVersionCommandOutput,
  CreateDBClusterCommand,
  type CreateDBClusterCommandInput,
  type CreateDBClusterCommandOutput,
  CreateDBClusterEndpointCommand,
  type CreateDBClusterEndpointCommandInput,
  type CreateDBClusterEndpointCommandOutput,
  CreateDBClusterParameterGroupCommand,
  type CreateDBClusterParameterGroupCommandInput,
  type CreateDBClusterParameterGroupCommandOutput,
  CreateDBClusterSnapshotCommand,
  type CreateDBClusterSnapshotCommandInput,
  type CreateDBClusterSnapshotCommandOutput,
  CreateDBInstanceCommand,
  type CreateDBInstanceCommandInput,
  type CreateDBInstanceCommandOutput,
  CreateDBInstanceReadReplicaCommand,
  type CreateDBInstanceReadReplicaCommandInput,
  type CreateDBInstanceReadReplicaCommandOutput,
  CreateDBParameterGroupCommand,
  type CreateDBParameterGroupCommandInput,
  type CreateDBParameterGroupCommandOutput,
  CreateDBProxyCommand,
  type CreateDBProxyCommandInput,
  type CreateDBProxyCommandOutput,
  CreateDBProxyEndpointCommand,
  type CreateDBProxyEndpointCommandInput,
  type CreateDBProxyEndpointCommandOutput,
  CreateDBSecurityGroupCommand,
  type CreateDBSecurityGroupCommandInput,
  type CreateDBSecurityGroupCommandOutput,
  CreateDBShardGroupCommand,
  type CreateDBShardGroupCommandInput,
  type CreateDBShardGroupCommandOutput,
  CreateDBSnapshotCommand,
  type CreateDBSnapshotCommandInput,
  type CreateDBSnapshotCommandOutput,
  CreateDBSubnetGroupCommand,
  type CreateDBSubnetGroupCommandInput,
  type CreateDBSubnetGroupCommandOutput,
  CreateEventSubscriptionCommand,
  type CreateEventSubscriptionCommandInput,
  type CreateEventSubscriptionCommandOutput,
  CreateGlobalClusterCommand,
  type CreateGlobalClusterCommandInput,
  type CreateGlobalClusterCommandOutput,
  CreateIntegrationCommand,
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateOptionGroupCommand,
  type CreateOptionGroupCommandInput,
  type CreateOptionGroupCommandOutput,
  CreateTenantDatabaseCommand,
  type CreateTenantDatabaseCommandInput,
  type CreateTenantDatabaseCommandOutput,
  DeleteBlueGreenDeploymentCommand,
  type DeleteBlueGreenDeploymentCommandInput,
  type DeleteBlueGreenDeploymentCommandOutput,
  DeleteCustomDBEngineVersionCommand,
  type DeleteCustomDBEngineVersionCommandInput,
  type DeleteCustomDBEngineVersionCommandOutput,
  DeleteDBClusterCommand,
  type DeleteDBClusterCommandInput,
  type DeleteDBClusterCommandOutput,
  DeleteDBClusterAutomatedBackupCommand,
  type DeleteDBClusterAutomatedBackupCommandInput,
  type DeleteDBClusterAutomatedBackupCommandOutput,
  DeleteDBClusterEndpointCommand,
  type DeleteDBClusterEndpointCommandInput,
  type DeleteDBClusterEndpointCommandOutput,
  DeleteDBClusterParameterGroupCommand,
  type DeleteDBClusterParameterGroupCommandInput,
  type DeleteDBClusterParameterGroupCommandOutput,
  DeleteDBClusterSnapshotCommand,
  type DeleteDBClusterSnapshotCommandInput,
  type DeleteDBClusterSnapshotCommandOutput,
  DeleteDBInstanceCommand,
  type DeleteDBInstanceCommandInput,
  type DeleteDBInstanceCommandOutput,
  DeleteDBInstanceAutomatedBackupCommand,
  type DeleteDBInstanceAutomatedBackupCommandInput,
  type DeleteDBInstanceAutomatedBackupCommandOutput,
  DeleteDBParameterGroupCommand,
  type DeleteDBParameterGroupCommandInput,
  type DeleteDBParameterGroupCommandOutput,
  DeleteDBProxyCommand,
  type DeleteDBProxyCommandInput,
  type DeleteDBProxyCommandOutput,
  DeleteDBProxyEndpointCommand,
  type DeleteDBProxyEndpointCommandInput,
  type DeleteDBProxyEndpointCommandOutput,
  DeleteDBSecurityGroupCommand,
  type DeleteDBSecurityGroupCommandInput,
  type DeleteDBSecurityGroupCommandOutput,
  DeleteDBShardGroupCommand,
  type DeleteDBShardGroupCommandInput,
  type DeleteDBShardGroupCommandOutput,
  DeleteDBSnapshotCommand,
  type DeleteDBSnapshotCommandInput,
  type DeleteDBSnapshotCommandOutput,
  DeleteDBSubnetGroupCommand,
  type DeleteDBSubnetGroupCommandInput,
  type DeleteDBSubnetGroupCommandOutput,
  DeleteEventSubscriptionCommand,
  type DeleteEventSubscriptionCommandInput,
  type DeleteEventSubscriptionCommandOutput,
  DeleteGlobalClusterCommand,
  type DeleteGlobalClusterCommandInput,
  type DeleteGlobalClusterCommandOutput,
  DeleteIntegrationCommand,
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteOptionGroupCommand,
  type DeleteOptionGroupCommandInput,
  type DeleteOptionGroupCommandOutput,
  DeleteTenantDatabaseCommand,
  type DeleteTenantDatabaseCommandInput,
  type DeleteTenantDatabaseCommandOutput,
  DeregisterDBProxyTargetsCommand,
  type DeregisterDBProxyTargetsCommandInput,
  type DeregisterDBProxyTargetsCommandOutput,
  DescribeAccountAttributesCommand,
  type DescribeAccountAttributesCommandInput,
  type DescribeAccountAttributesCommandOutput,
  DescribeBlueGreenDeploymentsCommand,
  type DescribeBlueGreenDeploymentsCommandInput,
  type DescribeBlueGreenDeploymentsCommandOutput,
  DescribeCertificatesCommand,
  type DescribeCertificatesCommandInput,
  type DescribeCertificatesCommandOutput,
  DescribeDBClusterAutomatedBackupsCommand,
  type DescribeDBClusterAutomatedBackupsCommandInput,
  type DescribeDBClusterAutomatedBackupsCommandOutput,
  DescribeDBClusterBacktracksCommand,
  type DescribeDBClusterBacktracksCommandInput,
  type DescribeDBClusterBacktracksCommandOutput,
  DescribeDBClusterEndpointsCommand,
  type DescribeDBClusterEndpointsCommandInput,
  type DescribeDBClusterEndpointsCommandOutput,
  DescribeDBClusterParameterGroupsCommand,
  type DescribeDBClusterParameterGroupsCommandInput,
  type DescribeDBClusterParameterGroupsCommandOutput,
  DescribeDBClusterParametersCommand,
  type DescribeDBClusterParametersCommandInput,
  type DescribeDBClusterParametersCommandOutput,
  DescribeDBClustersCommand,
  type DescribeDBClustersCommandInput,
  type DescribeDBClustersCommandOutput,
  DescribeDBClusterSnapshotAttributesCommand,
  type DescribeDBClusterSnapshotAttributesCommandInput,
  type DescribeDBClusterSnapshotAttributesCommandOutput,
  DescribeDBClusterSnapshotsCommand,
  type DescribeDBClusterSnapshotsCommandInput,
  type DescribeDBClusterSnapshotsCommandOutput,
  DescribeDBEngineVersionsCommand,
  type DescribeDBEngineVersionsCommandInput,
  type DescribeDBEngineVersionsCommandOutput,
  DescribeDBInstanceAutomatedBackupsCommand,
  type DescribeDBInstanceAutomatedBackupsCommandInput,
  type DescribeDBInstanceAutomatedBackupsCommandOutput,
  DescribeDBInstancesCommand,
  type DescribeDBInstancesCommandInput,
  type DescribeDBInstancesCommandOutput,
  DescribeDBLogFilesCommand,
  type DescribeDBLogFilesCommandInput,
  type DescribeDBLogFilesCommandOutput,
  DescribeDBParameterGroupsCommand,
  type DescribeDBParameterGroupsCommandInput,
  type DescribeDBParameterGroupsCommandOutput,
  DescribeDBParametersCommand,
  type DescribeDBParametersCommandInput,
  type DescribeDBParametersCommandOutput,
  DescribeDBProxiesCommand,
  type DescribeDBProxiesCommandInput,
  type DescribeDBProxiesCommandOutput,
  DescribeDBProxyEndpointsCommand,
  type DescribeDBProxyEndpointsCommandInput,
  type DescribeDBProxyEndpointsCommandOutput,
  DescribeDBProxyTargetGroupsCommand,
  type DescribeDBProxyTargetGroupsCommandInput,
  type DescribeDBProxyTargetGroupsCommandOutput,
  DescribeDBProxyTargetsCommand,
  type DescribeDBProxyTargetsCommandInput,
  type DescribeDBProxyTargetsCommandOutput,
  DescribeDBRecommendationsCommand,
  type DescribeDBRecommendationsCommandInput,
  type DescribeDBRecommendationsCommandOutput,
  DescribeDBSecurityGroupsCommand,
  type DescribeDBSecurityGroupsCommandInput,
  type DescribeDBSecurityGroupsCommandOutput,
  DescribeDBShardGroupsCommand,
  type DescribeDBShardGroupsCommandInput,
  type DescribeDBShardGroupsCommandOutput,
  DescribeDBSnapshotAttributesCommand,
  type DescribeDBSnapshotAttributesCommandInput,
  type DescribeDBSnapshotAttributesCommandOutput,
  DescribeDBSnapshotsCommand,
  type DescribeDBSnapshotsCommandInput,
  type DescribeDBSnapshotsCommandOutput,
  DescribeDBSnapshotTenantDatabasesCommand,
  type DescribeDBSnapshotTenantDatabasesCommandInput,
  type DescribeDBSnapshotTenantDatabasesCommandOutput,
  DescribeDBSubnetGroupsCommand,
  type DescribeDBSubnetGroupsCommandInput,
  type DescribeDBSubnetGroupsCommandOutput,
  DescribeEngineDefaultClusterParametersCommand,
  type DescribeEngineDefaultClusterParametersCommandInput,
  type DescribeEngineDefaultClusterParametersCommandOutput,
  DescribeEngineDefaultParametersCommand,
  type DescribeEngineDefaultParametersCommandInput,
  type DescribeEngineDefaultParametersCommandOutput,
  DescribeEventCategoriesCommand,
  type DescribeEventCategoriesCommandInput,
  type DescribeEventCategoriesCommandOutput,
  DescribeEventsCommand,
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventSubscriptionsCommand,
  type DescribeEventSubscriptionsCommandInput,
  type DescribeEventSubscriptionsCommandOutput,
  DescribeExportTasksCommand,
  type DescribeExportTasksCommandInput,
  type DescribeExportTasksCommandOutput,
  DescribeGlobalClustersCommand,
  type DescribeGlobalClustersCommandInput,
  type DescribeGlobalClustersCommandOutput,
  DescribeIntegrationsCommand,
  type DescribeIntegrationsCommandInput,
  type DescribeIntegrationsCommandOutput,
  DescribeOptionGroupOptionsCommand,
  type DescribeOptionGroupOptionsCommandInput,
  type DescribeOptionGroupOptionsCommandOutput,
  DescribeOptionGroupsCommand,
  type DescribeOptionGroupsCommandInput,
  type DescribeOptionGroupsCommandOutput,
  DescribeOrderableDBInstanceOptionsCommand,
  type DescribeOrderableDBInstanceOptionsCommandInput,
  type DescribeOrderableDBInstanceOptionsCommandOutput,
  DescribePendingMaintenanceActionsCommand,
  type DescribePendingMaintenanceActionsCommandInput,
  type DescribePendingMaintenanceActionsCommandOutput,
  DescribeReservedDBInstancesCommand,
  type DescribeReservedDBInstancesCommandInput,
  type DescribeReservedDBInstancesCommandOutput,
  DescribeReservedDBInstancesOfferingsCommand,
  type DescribeReservedDBInstancesOfferingsCommandInput,
  type DescribeReservedDBInstancesOfferingsCommandOutput,
  DescribeSourceRegionsCommand,
  type DescribeSourceRegionsCommandInput,
  type DescribeSourceRegionsCommandOutput,
  DescribeTenantDatabasesCommand,
  type DescribeTenantDatabasesCommandInput,
  type DescribeTenantDatabasesCommandOutput,
  DescribeValidDBInstanceModificationsCommand,
  type DescribeValidDBInstanceModificationsCommandInput,
  type DescribeValidDBInstanceModificationsCommandOutput,
  DisableHttpEndpointCommand,
  type DisableHttpEndpointCommandInput,
  type DisableHttpEndpointCommandOutput,
  DownloadDBLogFilePortionCommand,
  type DownloadDBLogFilePortionCommandInput,
  type DownloadDBLogFilePortionCommandOutput,
  EnableHttpEndpointCommand,
  type EnableHttpEndpointCommandInput,
  type EnableHttpEndpointCommandOutput,
  FailoverDBClusterCommand,
  type FailoverDBClusterCommandInput,
  type FailoverDBClusterCommandOutput,
  FailoverGlobalClusterCommand,
  type FailoverGlobalClusterCommandInput,
  type FailoverGlobalClusterCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ModifyActivityStreamCommand,
  type ModifyActivityStreamCommandInput,
  type ModifyActivityStreamCommandOutput,
  ModifyCertificatesCommand,
  type ModifyCertificatesCommandInput,
  type ModifyCertificatesCommandOutput,
  ModifyCurrentDBClusterCapacityCommand,
  type ModifyCurrentDBClusterCapacityCommandInput,
  type ModifyCurrentDBClusterCapacityCommandOutput,
  ModifyCustomDBEngineVersionCommand,
  type ModifyCustomDBEngineVersionCommandInput,
  type ModifyCustomDBEngineVersionCommandOutput,
  ModifyDBClusterCommand,
  type ModifyDBClusterCommandInput,
  type ModifyDBClusterCommandOutput,
  ModifyDBClusterEndpointCommand,
  type ModifyDBClusterEndpointCommandInput,
  type ModifyDBClusterEndpointCommandOutput,
  ModifyDBClusterParameterGroupCommand,
  type ModifyDBClusterParameterGroupCommandInput,
  type ModifyDBClusterParameterGroupCommandOutput,
  ModifyDBClusterSnapshotAttributeCommand,
  type ModifyDBClusterSnapshotAttributeCommandInput,
  type ModifyDBClusterSnapshotAttributeCommandOutput,
  ModifyDBInstanceCommand,
  type ModifyDBInstanceCommandInput,
  type ModifyDBInstanceCommandOutput,
  ModifyDBParameterGroupCommand,
  type ModifyDBParameterGroupCommandInput,
  type ModifyDBParameterGroupCommandOutput,
  ModifyDBProxyCommand,
  type ModifyDBProxyCommandInput,
  type ModifyDBProxyCommandOutput,
  ModifyDBProxyEndpointCommand,
  type ModifyDBProxyEndpointCommandInput,
  type ModifyDBProxyEndpointCommandOutput,
  ModifyDBProxyTargetGroupCommand,
  type ModifyDBProxyTargetGroupCommandInput,
  type ModifyDBProxyTargetGroupCommandOutput,
  ModifyDBRecommendationCommand,
  type ModifyDBRecommendationCommandInput,
  type ModifyDBRecommendationCommandOutput,
  ModifyDBShardGroupCommand,
  type ModifyDBShardGroupCommandInput,
  type ModifyDBShardGroupCommandOutput,
  ModifyDBSnapshotCommand,
  type ModifyDBSnapshotCommandInput,
  type ModifyDBSnapshotCommandOutput,
  ModifyDBSnapshotAttributeCommand,
  type ModifyDBSnapshotAttributeCommandInput,
  type ModifyDBSnapshotAttributeCommandOutput,
  ModifyDBSubnetGroupCommand,
  type ModifyDBSubnetGroupCommandInput,
  type ModifyDBSubnetGroupCommandOutput,
  ModifyEventSubscriptionCommand,
  type ModifyEventSubscriptionCommandInput,
  type ModifyEventSubscriptionCommandOutput,
  ModifyGlobalClusterCommand,
  type ModifyGlobalClusterCommandInput,
  type ModifyGlobalClusterCommandOutput,
  ModifyOptionGroupCommand,
  type ModifyOptionGroupCommandInput,
  type ModifyOptionGroupCommandOutput,
  ModifyTenantDatabaseCommand,
  type ModifyTenantDatabaseCommandInput,
  type ModifyTenantDatabaseCommandOutput,
  PromoteReadReplicaCommand,
  type PromoteReadReplicaCommandInput,
  type PromoteReadReplicaCommandOutput,
  PromoteReadReplicaDBClusterCommand,
  type PromoteReadReplicaDBClusterCommandInput,
  type PromoteReadReplicaDBClusterCommandOutput,
  PurchaseReservedDBInstancesOfferingCommand,
  type PurchaseReservedDBInstancesOfferingCommandInput,
  type PurchaseReservedDBInstancesOfferingCommandOutput,
  RebootDBClusterCommand,
  type RebootDBClusterCommandInput,
  type RebootDBClusterCommandOutput,
  RebootDBInstanceCommand,
  type RebootDBInstanceCommandInput,
  type RebootDBInstanceCommandOutput,
  RebootDBShardGroupCommand,
  type RebootDBShardGroupCommandInput,
  type RebootDBShardGroupCommandOutput,
  RegisterDBProxyTargetsCommand,
  type RegisterDBProxyTargetsCommandInput,
  type RegisterDBProxyTargetsCommandOutput,
  RemoveFromGlobalClusterCommand,
  type RemoveFromGlobalClusterCommandInput,
  type RemoveFromGlobalClusterCommandOutput,
  RemoveRoleFromDBClusterCommand,
  type RemoveRoleFromDBClusterCommandInput,
  type RemoveRoleFromDBClusterCommandOutput,
  RemoveRoleFromDBInstanceCommand,
  type RemoveRoleFromDBInstanceCommandInput,
  type RemoveRoleFromDBInstanceCommandOutput,
  RemoveSourceIdentifierFromSubscriptionCommand,
  type RemoveSourceIdentifierFromSubscriptionCommandInput,
  type RemoveSourceIdentifierFromSubscriptionCommandOutput,
  RemoveTagsFromResourceCommand,
  type RemoveTagsFromResourceCommandInput,
  type RemoveTagsFromResourceCommandOutput,
  ResetDBClusterParameterGroupCommand,
  type ResetDBClusterParameterGroupCommandInput,
  type ResetDBClusterParameterGroupCommandOutput,
  ResetDBParameterGroupCommand,
  type ResetDBParameterGroupCommandInput,
  type ResetDBParameterGroupCommandOutput,
  RestoreDBClusterFromS3Command,
  type RestoreDBClusterFromS3CommandInput,
  type RestoreDBClusterFromS3CommandOutput,
  RestoreDBClusterFromSnapshotCommand,
  type RestoreDBClusterFromSnapshotCommandInput,
  type RestoreDBClusterFromSnapshotCommandOutput,
  RestoreDBClusterToPointInTimeCommand,
  type RestoreDBClusterToPointInTimeCommandInput,
  type RestoreDBClusterToPointInTimeCommandOutput,
  RestoreDBInstanceFromDBSnapshotCommand,
  type RestoreDBInstanceFromDBSnapshotCommandInput,
  type RestoreDBInstanceFromDBSnapshotCommandOutput,
  RestoreDBInstanceFromS3Command,
  type RestoreDBInstanceFromS3CommandInput,
  type RestoreDBInstanceFromS3CommandOutput,
  RestoreDBInstanceToPointInTimeCommand,
  type RestoreDBInstanceToPointInTimeCommandInput,
  type RestoreDBInstanceToPointInTimeCommandOutput,
  RevokeDBSecurityGroupIngressCommand,
  type RevokeDBSecurityGroupIngressCommandInput,
  type RevokeDBSecurityGroupIngressCommandOutput,
  StartActivityStreamCommand,
  type StartActivityStreamCommandInput,
  type StartActivityStreamCommandOutput,
  StartDBClusterCommand,
  type StartDBClusterCommandInput,
  type StartDBClusterCommandOutput,
  StartDBInstanceCommand,
  type StartDBInstanceCommandInput,
  type StartDBInstanceCommandOutput,
  StartDBInstanceAutomatedBackupsReplicationCommand,
  type StartDBInstanceAutomatedBackupsReplicationCommandInput,
  type StartDBInstanceAutomatedBackupsReplicationCommandOutput,
  StartExportTaskCommand,
  type StartExportTaskCommandInput,
  type StartExportTaskCommandOutput,
  StopActivityStreamCommand,
  type StopActivityStreamCommandInput,
  type StopActivityStreamCommandOutput,
  StopDBClusterCommand,
  type StopDBClusterCommandInput,
  type StopDBClusterCommandOutput,
  StopDBInstanceCommand,
  type StopDBInstanceCommandInput,
  type StopDBInstanceCommandOutput,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  type StopDBInstanceAutomatedBackupsReplicationCommandInput,
  type StopDBInstanceAutomatedBackupsReplicationCommandOutput,
  SwitchoverBlueGreenDeploymentCommand,
  type SwitchoverBlueGreenDeploymentCommandInput,
  type SwitchoverBlueGreenDeploymentCommandOutput,
  SwitchoverGlobalClusterCommand,
  type SwitchoverGlobalClusterCommandInput,
  type SwitchoverGlobalClusterCommandOutput,
  SwitchoverReadReplicaCommand,
  type SwitchoverReadReplicaCommandInput,
  type SwitchoverReadReplicaCommandOutput,
} from "@aws-sdk/client-rds";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Effect, Layer, ReadonlyRecord, Data } from "effect";
import { RDSServiceError, SdkError, TaggedException } from "./Errors";
import { RDSClientInstance, RDSClientInstanceLayer } from "./RDSClientInstance";
import { DefaultRDSClientConfigLayer } from "./RDSClientInstanceConfig";

const commands = {
  AddRoleToDBClusterCommand,
  AddRoleToDBInstanceCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  AuthorizeDBSecurityGroupIngressCommand,
  BacktrackDBClusterCommand,
  CancelExportTaskCommand,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CopyDBSnapshotCommand,
  CopyOptionGroupCommand,
  CreateBlueGreenDeploymentCommand,
  CreateCustomDBEngineVersionCommand,
  CreateDBClusterCommand,
  CreateDBClusterEndpointCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBInstanceReadReplicaCommand,
  CreateDBParameterGroupCommand,
  CreateDBProxyCommand,
  CreateDBProxyEndpointCommand,
  CreateDBSecurityGroupCommand,
  CreateDBShardGroupCommand,
  CreateDBSnapshotCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  CreateIntegrationCommand,
  CreateOptionGroupCommand,
  CreateTenantDatabaseCommand,
  DeleteBlueGreenDeploymentCommand,
  DeleteCustomDBEngineVersionCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterAutomatedBackupCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBInstanceAutomatedBackupCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBProxyCommand,
  DeleteDBProxyEndpointCommand,
  DeleteDBSecurityGroupCommand,
  DeleteDBShardGroupCommand,
  DeleteDBSnapshotCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DeleteIntegrationCommand,
  DeleteOptionGroupCommand,
  DeleteTenantDatabaseCommand,
  DeregisterDBProxyTargetsCommand,
  DescribeAccountAttributesCommand,
  DescribeBlueGreenDeploymentsCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterAutomatedBackupsCommand,
  DescribeDBClusterBacktracksCommand,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClustersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstancesCommand,
  DescribeDBLogFilesCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBProxiesCommand,
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetsCommand,
  DescribeDBRecommendationsCommand,
  DescribeDBSecurityGroupsCommand,
  DescribeDBShardGroupsCommand,
  DescribeDBSnapshotAttributesCommand,
  DescribeDBSnapshotsCommand,
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventsCommand,
  DescribeEventSubscriptionsCommand,
  DescribeExportTasksCommand,
  DescribeGlobalClustersCommand,
  DescribeIntegrationsCommand,
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupsCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeSourceRegionsCommand,
  DescribeTenantDatabasesCommand,
  DescribeValidDBInstanceModificationsCommand,
  DisableHttpEndpointCommand,
  DownloadDBLogFilePortionCommand,
  EnableHttpEndpointCommand,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  ListTagsForResourceCommand,
  ModifyActivityStreamCommand,
  ModifyCertificatesCommand,
  ModifyCurrentDBClusterCapacityCommand,
  ModifyCustomDBEngineVersionCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBParameterGroupCommand,
  ModifyDBProxyCommand,
  ModifyDBProxyEndpointCommand,
  ModifyDBProxyTargetGroupCommand,
  ModifyDBRecommendationCommand,
  ModifyDBShardGroupCommand,
  ModifyDBSnapshotCommand,
  ModifyDBSnapshotAttributeCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  ModifyOptionGroupCommand,
  ModifyTenantDatabaseCommand,
  PromoteReadReplicaCommand,
  PromoteReadReplicaDBClusterCommand,
  PurchaseReservedDBInstancesOfferingCommand,
  RebootDBClusterCommand,
  RebootDBInstanceCommand,
  RebootDBShardGroupCommand,
  RegisterDBProxyTargetsCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBInstanceCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  RestoreDBClusterFromS3Command,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBInstanceFromDBSnapshotCommand,
  RestoreDBInstanceFromS3Command,
  RestoreDBInstanceToPointInTimeCommand,
  RevokeDBSecurityGroupIngressCommand,
  StartActivityStreamCommand,
  StartDBClusterCommand,
  StartDBInstanceCommand,
  StartDBInstanceAutomatedBackupsReplicationCommand,
  StartExportTaskCommand,
  StopActivityStreamCommand,
  StopDBClusterCommand,
  StopDBInstanceCommand,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  SwitchoverBlueGreenDeploymentCommand,
  SwitchoverGlobalClusterCommand,
  SwitchoverReadReplicaCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export type RDSService = {
  readonly _: unique symbol;

  /**
   * @see {@link AddRoleToDBClusterCommand}
   */
  readonly addRoleToDBCluster: (
    args: AddRoleToDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddRoleToDBClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link AddRoleToDBInstanceCommand}
   */
  readonly addRoleToDBInstance: (
    args: AddRoleToDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddRoleToDBInstanceCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link AddSourceIdentifierToSubscriptionCommand}
   */
  readonly addSourceIdentifierToSubscription: (
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddSourceIdentifierToSubscriptionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  readonly addTagsToResource: (
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddTagsToResourceCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  readonly applyPendingMaintenanceAction: (
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ApplyPendingMaintenanceActionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link AuthorizeDBSecurityGroupIngressCommand}
   */
  readonly authorizeDBSecurityGroupIngress: (
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AuthorizeDBSecurityGroupIngressCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link BacktrackDBClusterCommand}
   */
  readonly backtrackDBCluster: (
    args: BacktrackDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    BacktrackDBClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  readonly cancelExportTask: (
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CancelExportTaskCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link CopyDBClusterParameterGroupCommand}
   */
  readonly copyDBClusterParameterGroup: (
    args: CopyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CopyDBClusterParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CopyDBClusterSnapshotCommand}
   */
  readonly copyDBClusterSnapshot: (
    args: CopyDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CopyDBClusterSnapshotCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CopyDBParameterGroupCommand}
   */
  readonly copyDBParameterGroup: (
    args: CopyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CopyDBParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CopyDBSnapshotCommand}
   */
  readonly copyDBSnapshot: (
    args: CopyDBSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CopyDBSnapshotCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link CopyOptionGroupCommand}
   */
  readonly copyOptionGroup: (
    args: CopyOptionGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CopyOptionGroupCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link CreateBlueGreenDeploymentCommand}
   */
  readonly createBlueGreenDeployment: (
    args: CreateBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateBlueGreenDeploymentCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateCustomDBEngineVersionCommand}
   */
  readonly createCustomDBEngineVersion: (
    args: CreateCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateCustomDBEngineVersionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBClusterCommand}
   */
  readonly createDBCluster: (
    args: CreateDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateDBClusterCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link CreateDBClusterEndpointCommand}
   */
  readonly createDBClusterEndpoint: (
    args: CreateDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBClusterEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBClusterParameterGroupCommand}
   */
  readonly createDBClusterParameterGroup: (
    args: CreateDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBClusterParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBClusterSnapshotCommand}
   */
  readonly createDBClusterSnapshot: (
    args: CreateDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBClusterSnapshotCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBInstanceCommand}
   */
  readonly createDBInstance: (
    args: CreateDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateDBInstanceCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link CreateDBInstanceReadReplicaCommand}
   */
  readonly createDBInstanceReadReplica: (
    args: CreateDBInstanceReadReplicaCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBInstanceReadReplicaCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBParameterGroupCommand}
   */
  readonly createDBParameterGroup: (
    args: CreateDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBProxyCommand}
   */
  readonly createDBProxy: (
    args: CreateDBProxyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateDBProxyCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link CreateDBProxyEndpointCommand}
   */
  readonly createDBProxyEndpoint: (
    args: CreateDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBProxyEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBSecurityGroupCommand}
   */
  readonly createDBSecurityGroup: (
    args: CreateDBSecurityGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBSecurityGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBShardGroupCommand}
   */
  readonly createDBShardGroup: (
    args: CreateDBShardGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBShardGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateDBSnapshotCommand}
   */
  readonly createDBSnapshot: (
    args: CreateDBSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateDBSnapshotCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link CreateDBSubnetGroupCommand}
   */
  readonly createDBSubnetGroup: (
    args: CreateDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDBSubnetGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  readonly createEventSubscription: (
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateEventSubscriptionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateGlobalClusterCommand}
   */
  readonly createGlobalCluster: (
    args: CreateGlobalClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateGlobalClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  readonly createIntegration: (
    args: CreateIntegrationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateIntegrationCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateOptionGroupCommand}
   */
  readonly createOptionGroup: (
    args: CreateOptionGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateOptionGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link CreateTenantDatabaseCommand}
   */
  readonly createTenantDatabase: (
    args: CreateTenantDatabaseCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTenantDatabaseCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteBlueGreenDeploymentCommand}
   */
  readonly deleteBlueGreenDeployment: (
    args: DeleteBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBlueGreenDeploymentCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteCustomDBEngineVersionCommand}
   */
  readonly deleteCustomDBEngineVersion: (
    args: DeleteCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteCustomDBEngineVersionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBClusterCommand}
   */
  readonly deleteDBCluster: (
    args: DeleteDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteDBClusterCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link DeleteDBClusterAutomatedBackupCommand}
   */
  readonly deleteDBClusterAutomatedBackup: (
    args: DeleteDBClusterAutomatedBackupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBClusterAutomatedBackupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBClusterEndpointCommand}
   */
  readonly deleteDBClusterEndpoint: (
    args: DeleteDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBClusterEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBClusterParameterGroupCommand}
   */
  readonly deleteDBClusterParameterGroup: (
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBClusterParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBClusterSnapshotCommand}
   */
  readonly deleteDBClusterSnapshot: (
    args: DeleteDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBClusterSnapshotCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBInstanceCommand}
   */
  readonly deleteDBInstance: (
    args: DeleteDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteDBInstanceCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link DeleteDBInstanceAutomatedBackupCommand}
   */
  readonly deleteDBInstanceAutomatedBackup: (
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBInstanceAutomatedBackupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBParameterGroupCommand}
   */
  readonly deleteDBParameterGroup: (
    args: DeleteDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBProxyCommand}
   */
  readonly deleteDBProxy: (
    args: DeleteDBProxyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteDBProxyCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link DeleteDBProxyEndpointCommand}
   */
  readonly deleteDBProxyEndpoint: (
    args: DeleteDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBProxyEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBSecurityGroupCommand}
   */
  readonly deleteDBSecurityGroup: (
    args: DeleteDBSecurityGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBSecurityGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBShardGroupCommand}
   */
  readonly deleteDBShardGroup: (
    args: DeleteDBShardGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBShardGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteDBSnapshotCommand}
   */
  readonly deleteDBSnapshot: (
    args: DeleteDBSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteDBSnapshotCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link DeleteDBSubnetGroupCommand}
   */
  readonly deleteDBSubnetGroup: (
    args: DeleteDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDBSubnetGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  readonly deleteEventSubscription: (
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteEventSubscriptionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteGlobalClusterCommand}
   */
  readonly deleteGlobalCluster: (
    args: DeleteGlobalClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteGlobalClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  readonly deleteIntegration: (
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteIntegrationCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteOptionGroupCommand}
   */
  readonly deleteOptionGroup: (
    args: DeleteOptionGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteOptionGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeleteTenantDatabaseCommand}
   */
  readonly deleteTenantDatabase: (
    args: DeleteTenantDatabaseCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTenantDatabaseCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DeregisterDBProxyTargetsCommand}
   */
  readonly deregisterDBProxyTargets: (
    args: DeregisterDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeregisterDBProxyTargetsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  readonly describeAccountAttributes: (
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAccountAttributesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeBlueGreenDeploymentsCommand}
   */
  readonly describeBlueGreenDeployments: (
    args: DescribeBlueGreenDeploymentsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeBlueGreenDeploymentsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeCertificatesCommand}
   */
  readonly describeCertificates: (
    args: DescribeCertificatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCertificatesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClusterAutomatedBackupsCommand}
   */
  readonly describeDBClusterAutomatedBackups: (
    args: DescribeDBClusterAutomatedBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClusterAutomatedBackupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClusterBacktracksCommand}
   */
  readonly describeDBClusterBacktracks: (
    args: DescribeDBClusterBacktracksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClusterBacktracksCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   */
  readonly describeDBClusterEndpoints: (
    args: DescribeDBClusterEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClusterEndpointsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   */
  readonly describeDBClusterParameterGroups: (
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClusterParameterGroupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   */
  readonly describeDBClusterParameters: (
    args: DescribeDBClusterParametersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClusterParametersCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClustersCommand}
   */
  readonly describeDBClusters: (
    args: DescribeDBClustersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClustersCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClusterSnapshotAttributesCommand}
   */
  readonly describeDBClusterSnapshotAttributes: (
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClusterSnapshotAttributesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   */
  readonly describeDBClusterSnapshots: (
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBClusterSnapshotsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   */
  readonly describeDBEngineVersions: (
    args: DescribeDBEngineVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBEngineVersionsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBInstanceAutomatedBackupsCommand}
   */
  readonly describeDBInstanceAutomatedBackups: (
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBInstanceAutomatedBackupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBInstancesCommand}
   */
  readonly describeDBInstances: (
    args: DescribeDBInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBInstancesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBLogFilesCommand}
   */
  readonly describeDBLogFiles: (
    args: DescribeDBLogFilesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBLogFilesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   */
  readonly describeDBParameterGroups: (
    args: DescribeDBParameterGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBParameterGroupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBParametersCommand}
   */
  readonly describeDBParameters: (
    args: DescribeDBParametersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBParametersCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBProxiesCommand}
   */
  readonly describeDBProxies: (
    args: DescribeDBProxiesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBProxiesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBProxyEndpointsCommand}
   */
  readonly describeDBProxyEndpoints: (
    args: DescribeDBProxyEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBProxyEndpointsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBProxyTargetGroupsCommand}
   */
  readonly describeDBProxyTargetGroups: (
    args: DescribeDBProxyTargetGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBProxyTargetGroupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBProxyTargetsCommand}
   */
  readonly describeDBProxyTargets: (
    args: DescribeDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBProxyTargetsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBRecommendationsCommand}
   */
  readonly describeDBRecommendations: (
    args: DescribeDBRecommendationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBRecommendationsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBSecurityGroupsCommand}
   */
  readonly describeDBSecurityGroups: (
    args: DescribeDBSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBSecurityGroupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBShardGroupsCommand}
   */
  readonly describeDBShardGroups: (
    args: DescribeDBShardGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBShardGroupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBSnapshotAttributesCommand}
   */
  readonly describeDBSnapshotAttributes: (
    args: DescribeDBSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBSnapshotAttributesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   */
  readonly describeDBSnapshots: (
    args: DescribeDBSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBSnapshotsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBSnapshotTenantDatabasesCommand}
   */
  readonly describeDBSnapshotTenantDatabases: (
    args: DescribeDBSnapshotTenantDatabasesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBSnapshotTenantDatabasesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   */
  readonly describeDBSubnetGroups: (
    args: DescribeDBSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDBSubnetGroupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   */
  readonly describeEngineDefaultClusterParameters: (
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeEngineDefaultClusterParametersCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  readonly describeEngineDefaultParameters: (
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeEngineDefaultParametersCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  readonly describeEventCategories: (
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeEventCategoriesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  readonly describeEvents: (
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeEventsCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  readonly describeEventSubscriptions: (
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeEventSubscriptionsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  readonly describeExportTasks: (
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeExportTasksCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   */
  readonly describeGlobalClusters: (
    args: DescribeGlobalClustersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeGlobalClustersCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  readonly describeIntegrations: (
    args: DescribeIntegrationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIntegrationsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeOptionGroupOptionsCommand}
   */
  readonly describeOptionGroupOptions: (
    args: DescribeOptionGroupOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeOptionGroupOptionsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeOptionGroupsCommand}
   */
  readonly describeOptionGroups: (
    args: DescribeOptionGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeOptionGroupsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   */
  readonly describeOrderableDBInstanceOptions: (
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeOrderableDBInstanceOptionsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  readonly describePendingMaintenanceActions: (
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribePendingMaintenanceActionsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeReservedDBInstancesCommand}
   */
  readonly describeReservedDBInstances: (
    args: DescribeReservedDBInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeReservedDBInstancesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeReservedDBInstancesOfferingsCommand}
   */
  readonly describeReservedDBInstancesOfferings: (
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeReservedDBInstancesOfferingsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeSourceRegionsCommand}
   */
  readonly describeSourceRegions: (
    args: DescribeSourceRegionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSourceRegionsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeTenantDatabasesCommand}
   */
  readonly describeTenantDatabases: (
    args: DescribeTenantDatabasesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTenantDatabasesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DescribeValidDBInstanceModificationsCommand}
   */
  readonly describeValidDBInstanceModifications: (
    args: DescribeValidDBInstanceModificationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeValidDBInstanceModificationsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DisableHttpEndpointCommand}
   */
  readonly disableHttpEndpoint: (
    args: DisableHttpEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableHttpEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link DownloadDBLogFilePortionCommand}
   */
  readonly downloadDBLogFilePortion: (
    args: DownloadDBLogFilePortionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DownloadDBLogFilePortionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link EnableHttpEndpointCommand}
   */
  readonly enableHttpEndpoint: (
    args: EnableHttpEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableHttpEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link FailoverDBClusterCommand}
   */
  readonly failoverDBCluster: (
    args: FailoverDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    FailoverDBClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link FailoverGlobalClusterCommand}
   */
  readonly failoverGlobalCluster: (
    args: FailoverGlobalClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    FailoverGlobalClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  readonly listTagsForResource: (
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyActivityStreamCommand}
   */
  readonly modifyActivityStream: (
    args: ModifyActivityStreamCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyActivityStreamCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyCertificatesCommand}
   */
  readonly modifyCertificates: (
    args: ModifyCertificatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyCertificatesCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyCurrentDBClusterCapacityCommand}
   */
  readonly modifyCurrentDBClusterCapacity: (
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyCurrentDBClusterCapacityCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyCustomDBEngineVersionCommand}
   */
  readonly modifyCustomDBEngineVersion: (
    args: ModifyCustomDBEngineVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyCustomDBEngineVersionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBClusterCommand}
   */
  readonly modifyDBCluster: (
    args: ModifyDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyDBClusterCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link ModifyDBClusterEndpointCommand}
   */
  readonly modifyDBClusterEndpoint: (
    args: ModifyDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBClusterEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBClusterParameterGroupCommand}
   */
  readonly modifyDBClusterParameterGroup: (
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBClusterParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBClusterSnapshotAttributeCommand}
   */
  readonly modifyDBClusterSnapshotAttribute: (
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBClusterSnapshotAttributeCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBInstanceCommand}
   */
  readonly modifyDBInstance: (
    args: ModifyDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyDBInstanceCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link ModifyDBParameterGroupCommand}
   */
  readonly modifyDBParameterGroup: (
    args: ModifyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBProxyCommand}
   */
  readonly modifyDBProxy: (
    args: ModifyDBProxyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyDBProxyCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link ModifyDBProxyEndpointCommand}
   */
  readonly modifyDBProxyEndpoint: (
    args: ModifyDBProxyEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBProxyEndpointCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBProxyTargetGroupCommand}
   */
  readonly modifyDBProxyTargetGroup: (
    args: ModifyDBProxyTargetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBProxyTargetGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBRecommendationCommand}
   */
  readonly modifyDBRecommendation: (
    args: ModifyDBRecommendationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBRecommendationCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBShardGroupCommand}
   */
  readonly modifyDBShardGroup: (
    args: ModifyDBShardGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBShardGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBSnapshotCommand}
   */
  readonly modifyDBSnapshot: (
    args: ModifyDBSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyDBSnapshotCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link ModifyDBSnapshotAttributeCommand}
   */
  readonly modifyDBSnapshotAttribute: (
    args: ModifyDBSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBSnapshotAttributeCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyDBSubnetGroupCommand}
   */
  readonly modifyDBSubnetGroup: (
    args: ModifyDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDBSubnetGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  readonly modifyEventSubscription: (
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyEventSubscriptionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyGlobalClusterCommand}
   */
  readonly modifyGlobalCluster: (
    args: ModifyGlobalClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyGlobalClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyOptionGroupCommand}
   */
  readonly modifyOptionGroup: (
    args: ModifyOptionGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyOptionGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ModifyTenantDatabaseCommand}
   */
  readonly modifyTenantDatabase: (
    args: ModifyTenantDatabaseCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyTenantDatabaseCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link PromoteReadReplicaCommand}
   */
  readonly promoteReadReplica: (
    args: PromoteReadReplicaCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PromoteReadReplicaCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link PromoteReadReplicaDBClusterCommand}
   */
  readonly promoteReadReplicaDBCluster: (
    args: PromoteReadReplicaDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PromoteReadReplicaDBClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link PurchaseReservedDBInstancesOfferingCommand}
   */
  readonly purchaseReservedDBInstancesOffering: (
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PurchaseReservedDBInstancesOfferingCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RebootDBClusterCommand}
   */
  readonly rebootDBCluster: (
    args: RebootDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<RebootDBClusterCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link RebootDBInstanceCommand}
   */
  readonly rebootDBInstance: (
    args: RebootDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<RebootDBInstanceCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link RebootDBShardGroupCommand}
   */
  readonly rebootDBShardGroup: (
    args: RebootDBShardGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RebootDBShardGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RegisterDBProxyTargetsCommand}
   */
  readonly registerDBProxyTargets: (
    args: RegisterDBProxyTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RegisterDBProxyTargetsCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RemoveFromGlobalClusterCommand}
   */
  readonly removeFromGlobalCluster: (
    args: RemoveFromGlobalClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveFromGlobalClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RemoveRoleFromDBClusterCommand}
   */
  readonly removeRoleFromDBCluster: (
    args: RemoveRoleFromDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveRoleFromDBClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RemoveRoleFromDBInstanceCommand}
   */
  readonly removeRoleFromDBInstance: (
    args: RemoveRoleFromDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveRoleFromDBInstanceCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RemoveSourceIdentifierFromSubscriptionCommand}
   */
  readonly removeSourceIdentifierFromSubscription: (
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveSourceIdentifierFromSubscriptionCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  readonly removeTagsFromResource: (
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveTagsFromResourceCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ResetDBClusterParameterGroupCommand}
   */
  readonly resetDBClusterParameterGroup: (
    args: ResetDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetDBClusterParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link ResetDBParameterGroupCommand}
   */
  readonly resetDBParameterGroup: (
    args: ResetDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetDBParameterGroupCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RestoreDBClusterFromS3Command}
   */
  readonly restoreDBClusterFromS3: (
    args: RestoreDBClusterFromS3CommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreDBClusterFromS3CommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RestoreDBClusterFromSnapshotCommand}
   */
  readonly restoreDBClusterFromSnapshot: (
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreDBClusterFromSnapshotCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RestoreDBClusterToPointInTimeCommand}
   */
  readonly restoreDBClusterToPointInTime: (
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreDBClusterToPointInTimeCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RestoreDBInstanceFromDBSnapshotCommand}
   */
  readonly restoreDBInstanceFromDBSnapshot: (
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreDBInstanceFromDBSnapshotCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RestoreDBInstanceFromS3Command}
   */
  readonly restoreDBInstanceFromS3: (
    args: RestoreDBInstanceFromS3CommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreDBInstanceFromS3CommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RestoreDBInstanceToPointInTimeCommand}
   */
  readonly restoreDBInstanceToPointInTime: (
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreDBInstanceToPointInTimeCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link RevokeDBSecurityGroupIngressCommand}
   */
  readonly revokeDBSecurityGroupIngress: (
    args: RevokeDBSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RevokeDBSecurityGroupIngressCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link StartActivityStreamCommand}
   */
  readonly startActivityStream: (
    args: StartActivityStreamCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StartActivityStreamCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link StartDBClusterCommand}
   */
  readonly startDBCluster: (
    args: StartDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<StartDBClusterCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link StartDBInstanceCommand}
   */
  readonly startDBInstance: (
    args: StartDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<StartDBInstanceCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link StartDBInstanceAutomatedBackupsReplicationCommand}
   */
  readonly startDBInstanceAutomatedBackupsReplication: (
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StartDBInstanceAutomatedBackupsReplicationCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link StartExportTaskCommand}
   */
  readonly startExportTask: (
    args: StartExportTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<StartExportTaskCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link StopActivityStreamCommand}
   */
  readonly stopActivityStream: (
    args: StopActivityStreamCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StopActivityStreamCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link StopDBClusterCommand}
   */
  readonly stopDBCluster: (
    args: StopDBClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<StopDBClusterCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link StopDBInstanceCommand}
   */
  readonly stopDBInstance: (
    args: StopDBInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<StopDBInstanceCommandOutput, SdkError | RDSServiceError>;

  /**
   * @see {@link StopDBInstanceAutomatedBackupsReplicationCommand}
   */
  readonly stopDBInstanceAutomatedBackupsReplication: (
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StopDBInstanceAutomatedBackupsReplicationCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link SwitchoverBlueGreenDeploymentCommand}
   */
  readonly switchoverBlueGreenDeployment: (
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SwitchoverBlueGreenDeploymentCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link SwitchoverGlobalClusterCommand}
   */
  readonly switchoverGlobalCluster: (
    args: SwitchoverGlobalClusterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SwitchoverGlobalClusterCommandOutput,
    SdkError | RDSServiceError
  >;

  /**
   * @see {@link SwitchoverReadReplicaCommand}
   */
  readonly switchoverReadReplica: (
    args: SwitchoverReadReplicaCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SwitchoverReadReplicaCommandOutput,
    SdkError | RDSServiceError
  >;
};

/**
 * @since 1.0.0
 * @category tags
 */
export const RDSService = Context.GenericTag<RDSService>(
  "@effect-aws/client-rds/RDSService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeRDSService = Effect.gen(function* (_) {
  const client = yield* _(RDSClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof RDSServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<RDSServiceException>
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
  }, {}) as RDSService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseRDSServiceLayer = Layer.effect(RDSService, makeRDSService);

/**
 * @since 1.0.0
 * @category layers
 */
export const RDSServiceLayer = BaseRDSServiceLayer.pipe(
  Layer.provide(RDSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultRDSServiceLayer = RDSServiceLayer.pipe(
  Layer.provide(DefaultRDSClientConfigLayer),
);
