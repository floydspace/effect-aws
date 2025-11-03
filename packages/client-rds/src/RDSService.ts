/**
 * @since 1.0.0
 */
import {
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
  DeleteDBClusterAutomatedBackupCommand,
  type DeleteDBClusterAutomatedBackupCommandInput,
  type DeleteDBClusterAutomatedBackupCommandOutput,
  DeleteDBClusterCommand,
  type DeleteDBClusterCommandInput,
  type DeleteDBClusterCommandOutput,
  DeleteDBClusterEndpointCommand,
  type DeleteDBClusterEndpointCommandInput,
  type DeleteDBClusterEndpointCommandOutput,
  DeleteDBClusterParameterGroupCommand,
  type DeleteDBClusterParameterGroupCommandInput,
  type DeleteDBClusterParameterGroupCommandOutput,
  DeleteDBClusterSnapshotCommand,
  type DeleteDBClusterSnapshotCommandInput,
  type DeleteDBClusterSnapshotCommandOutput,
  DeleteDBInstanceAutomatedBackupCommand,
  type DeleteDBInstanceAutomatedBackupCommandInput,
  type DeleteDBInstanceAutomatedBackupCommandOutput,
  DeleteDBInstanceCommand,
  type DeleteDBInstanceCommandInput,
  type DeleteDBInstanceCommandOutput,
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
  DescribeDBMajorEngineVersionsCommand,
  type DescribeDBMajorEngineVersionsCommandInput,
  type DescribeDBMajorEngineVersionsCommandOutput,
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
  ModifyDBSnapshotAttributeCommand,
  type ModifyDBSnapshotAttributeCommandInput,
  type ModifyDBSnapshotAttributeCommandOutput,
  ModifyDBSnapshotCommand,
  type ModifyDBSnapshotCommandInput,
  type ModifyDBSnapshotCommandOutput,
  ModifyDBSubnetGroupCommand,
  type ModifyDBSubnetGroupCommandInput,
  type ModifyDBSubnetGroupCommandOutput,
  ModifyEventSubscriptionCommand,
  type ModifyEventSubscriptionCommandInput,
  type ModifyEventSubscriptionCommandOutput,
  ModifyGlobalClusterCommand,
  type ModifyGlobalClusterCommandInput,
  type ModifyGlobalClusterCommandOutput,
  ModifyIntegrationCommand,
  type ModifyIntegrationCommandInput,
  type ModifyIntegrationCommandOutput,
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
  type RDSClient,
  type RDSClientConfig,
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
  StartDBInstanceAutomatedBackupsReplicationCommand,
  type StartDBInstanceAutomatedBackupsReplicationCommandInput,
  type StartDBInstanceAutomatedBackupsReplicationCommandOutput,
  StartDBInstanceCommand,
  type StartDBInstanceCommandInput,
  type StartDBInstanceCommandOutput,
  StartExportTaskCommand,
  type StartExportTaskCommandInput,
  type StartExportTaskCommandOutput,
  StopActivityStreamCommand,
  type StopActivityStreamCommandInput,
  type StopActivityStreamCommandOutput,
  StopDBClusterCommand,
  type StopDBClusterCommandInput,
  type StopDBClusterCommandOutput,
  StopDBInstanceAutomatedBackupsReplicationCommand,
  type StopDBInstanceAutomatedBackupsReplicationCommandInput,
  type StopDBInstanceAutomatedBackupsReplicationCommandOutput,
  StopDBInstanceCommand,
  type StopDBInstanceCommandInput,
  type StopDBInstanceCommandOutput,
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
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  AuthorizationAlreadyExistsFaultError,
  AuthorizationNotFoundFaultError,
  AuthorizationQuotaExceededFaultError,
  BackupPolicyNotFoundFaultError,
  BlueGreenDeploymentAlreadyExistsFaultError,
  BlueGreenDeploymentNotFoundFaultError,
  CertificateNotFoundFaultError,
  CreateCustomDBEngineVersionFaultError,
  CustomAvailabilityZoneNotFoundFaultError,
  CustomDBEngineVersionAlreadyExistsFaultError,
  CustomDBEngineVersionNotFoundFaultError,
  CustomDBEngineVersionQuotaExceededFaultError,
  DBClusterAlreadyExistsFaultError,
  DBClusterAutomatedBackupNotFoundFaultError,
  DBClusterAutomatedBackupQuotaExceededFaultError,
  DBClusterBacktrackNotFoundFaultError,
  DBClusterEndpointAlreadyExistsFaultError,
  DBClusterEndpointNotFoundFaultError,
  DBClusterEndpointQuotaExceededFaultError,
  DBClusterNotFoundFaultError,
  DBClusterParameterGroupNotFoundFaultError,
  DBClusterQuotaExceededFaultError,
  DBClusterRoleAlreadyExistsFaultError,
  DBClusterRoleNotFoundFaultError,
  DBClusterRoleQuotaExceededFaultError,
  DBClusterSnapshotAlreadyExistsFaultError,
  DBClusterSnapshotNotFoundFaultError,
  DBInstanceAlreadyExistsFaultError,
  DBInstanceAutomatedBackupNotFoundFaultError,
  DBInstanceAutomatedBackupQuotaExceededFaultError,
  DBInstanceNotFoundFaultError,
  DBInstanceNotReadyFaultError,
  DBInstanceRoleAlreadyExistsFaultError,
  DBInstanceRoleNotFoundFaultError,
  DBInstanceRoleQuotaExceededFaultError,
  DBLogFileNotFoundFaultError,
  DBParameterGroupAlreadyExistsFaultError,
  DBParameterGroupNotFoundFaultError,
  DBParameterGroupQuotaExceededFaultError,
  DBProxyAlreadyExistsFaultError,
  DBProxyEndpointAlreadyExistsFaultError,
  DBProxyEndpointNotFoundFaultError,
  DBProxyEndpointQuotaExceededFaultError,
  DBProxyNotFoundFaultError,
  DBProxyQuotaExceededFaultError,
  DBProxyTargetAlreadyRegisteredFaultError,
  DBProxyTargetGroupNotFoundFaultError,
  DBProxyTargetNotFoundFaultError,
  DBSecurityGroupAlreadyExistsFaultError,
  DBSecurityGroupNotFoundFaultError,
  DBSecurityGroupNotSupportedFaultError,
  DBSecurityGroupQuotaExceededFaultError,
  DBShardGroupAlreadyExistsFaultError,
  DBShardGroupNotFoundFaultError,
  DBSnapshotAlreadyExistsFaultError,
  DBSnapshotNotFoundFaultError,
  DBSnapshotTenantDatabaseNotFoundFaultError,
  DBSubnetGroupAlreadyExistsFaultError,
  DBSubnetGroupDoesNotCoverEnoughAZsError,
  DBSubnetGroupNotAllowedFaultError,
  DBSubnetGroupNotFoundFaultError,
  DBSubnetGroupQuotaExceededFaultError,
  DBSubnetQuotaExceededFaultError,
  DBUpgradeDependencyFailureFaultError,
  DomainNotFoundFaultError,
  Ec2ImagePropertiesNotSupportedFaultError,
  EventSubscriptionQuotaExceededFaultError,
  ExportTaskAlreadyExistsFaultError,
  ExportTaskNotFoundFaultError,
  GlobalClusterAlreadyExistsFaultError,
  GlobalClusterNotFoundFaultError,
  GlobalClusterQuotaExceededFaultError,
  IamRoleMissingPermissionsFaultError,
  IamRoleNotFoundFaultError,
  InstanceQuotaExceededFaultError,
  InsufficientAvailableIPsInSubnetFaultError,
  InsufficientDBClusterCapacityFaultError,
  InsufficientDBInstanceCapacityFaultError,
  InsufficientStorageClusterCapacityFaultError,
  IntegrationAlreadyExistsFaultError,
  IntegrationConflictOperationFaultError,
  IntegrationNotFoundFaultError,
  IntegrationQuotaExceededFaultError,
  InvalidBlueGreenDeploymentStateFaultError,
  InvalidCustomDBEngineVersionStateFaultError,
  InvalidDBClusterAutomatedBackupStateFaultError,
  InvalidDBClusterCapacityFaultError,
  InvalidDBClusterEndpointStateFaultError,
  InvalidDBClusterSnapshotStateFaultError,
  InvalidDBClusterStateFaultError,
  InvalidDBInstanceAutomatedBackupStateFaultError,
  InvalidDBInstanceStateFaultError,
  InvalidDBParameterGroupStateFaultError,
  InvalidDBProxyEndpointStateFaultError,
  InvalidDBProxyStateFaultError,
  InvalidDBSecurityGroupStateFaultError,
  InvalidDBShardGroupStateFaultError,
  InvalidDBSnapshotStateFaultError,
  InvalidDBSubnetGroupFaultError,
  InvalidDBSubnetGroupStateFaultError,
  InvalidDBSubnetStateFaultError,
  InvalidEventSubscriptionStateFaultError,
  InvalidExportOnlyFaultError,
  InvalidExportSourceStateFaultError,
  InvalidExportTaskStateFaultError,
  InvalidGlobalClusterStateFaultError,
  InvalidIntegrationStateFaultError,
  InvalidOptionGroupStateFaultError,
  InvalidResourceStateFaultError,
  InvalidRestoreFaultError,
  InvalidS3BucketFaultError,
  InvalidSubnetError,
  InvalidVPCNetworkStateFaultError,
  KMSKeyNotAccessibleFaultError,
  MaxDBShardGroupLimitReachedError,
  NetworkTypeNotSupportedError,
  OptionGroupAlreadyExistsFaultError,
  OptionGroupNotFoundFaultError,
  OptionGroupQuotaExceededFaultError,
  PointInTimeRestoreNotEnabledFaultError,
  ProvisionedIopsNotAvailableInAZFaultError,
  ReservedDBInstanceAlreadyExistsFaultError,
  ReservedDBInstanceNotFoundFaultError,
  ReservedDBInstanceQuotaExceededFaultError,
  ReservedDBInstancesOfferingNotFoundFaultError,
  ResourceNotFoundFaultError,
  SdkError,
  SharedSnapshotQuotaExceededFaultError,
  SnapshotQuotaExceededFaultError,
  SNSInvalidTopicFaultError,
  SNSNoAuthorizationFaultError,
  SNSTopicArnNotFoundFaultError,
  SourceClusterNotSupportedFaultError,
  SourceDatabaseNotSupportedFaultError,
  SourceNotFoundFaultError,
  StorageQuotaExceededFaultError,
  StorageTypeNotAvailableFaultError,
  StorageTypeNotSupportedFaultError,
  SubnetAlreadyInUseError,
  SubscriptionAlreadyExistFaultError,
  SubscriptionCategoryNotFoundFaultError,
  SubscriptionNotFoundFaultError,
  TenantDatabaseAlreadyExistsFaultError,
  TenantDatabaseNotFoundFaultError,
  TenantDatabaseQuotaExceededFaultError,
  UnsupportedDBEngineVersionFaultError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./RDSClientInstance.js";
import * as RDSServiceConfig from "./RDSServiceConfig.js";

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
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClustersCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstancesCommand,
  DescribeDBLogFilesCommand,
  DescribeDBMajorEngineVersionsCommand,
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
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSnapshotsCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventSubscriptionsCommand,
  DescribeEventsCommand,
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
  ModifyIntegrationCommand,
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

interface RDSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddRoleToDBClusterCommand}
   */
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddRoleToDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBClusterRoleAlreadyExistsFaultError
    | DBClusterRoleQuotaExceededFaultError
    | InvalidDBClusterStateFaultError
  >;

  /**
   * @see {@link AddRoleToDBInstanceCommand}
   */
  addRoleToDBInstance(
    args: AddRoleToDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddRoleToDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | DBInstanceRoleAlreadyExistsFaultError
    | DBInstanceRoleQuotaExceededFaultError
    | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link AddSourceIdentifierToSubscriptionCommand}
   */
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddSourceIdentifierToSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | SourceNotFoundFaultError | SubscriptionNotFoundFaultError
  >;

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
    | BlueGreenDeploymentNotFoundFaultError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | DBProxyEndpointNotFoundFaultError
    | DBProxyNotFoundFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | DBShardGroupNotFoundFaultError
    | DBSnapshotNotFoundFaultError
    | DBSnapshotTenantDatabaseNotFoundFaultError
    | IntegrationNotFoundFaultError
    | InvalidDBClusterEndpointStateFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | TenantDatabaseNotFoundFaultError
  >;

  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ApplyPendingMaintenanceActionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link AuthorizeDBSecurityGroupIngressCommand}
   */
  authorizeDBSecurityGroupIngress(
    args: AuthorizeDBSecurityGroupIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeDBSecurityGroupIngressCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationAlreadyExistsFaultError
    | AuthorizationQuotaExceededFaultError
    | DBSecurityGroupNotFoundFaultError
    | InvalidDBSecurityGroupStateFaultError
  >;

  /**
   * @see {@link BacktrackDBClusterCommand}
   */
  backtrackDBCluster(
    args: BacktrackDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BacktrackDBClusterCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterNotFoundFaultError | InvalidDBClusterStateFaultError
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelExportTaskCommandOutput,
    Cause.TimeoutException | SdkError | ExportTaskNotFoundFaultError | InvalidExportTaskStateFaultError
  >;

  /**
   * @see {@link CopyDBClusterParameterGroupCommand}
   */
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBClusterParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBParameterGroupAlreadyExistsFaultError
    | DBParameterGroupNotFoundFaultError
    | DBParameterGroupQuotaExceededFaultError
  >;

  /**
   * @see {@link CopyDBClusterSnapshotCommand}
   */
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBClusterSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterSnapshotAlreadyExistsFaultError
    | DBClusterSnapshotNotFoundFaultError
    | InvalidDBClusterSnapshotStateFaultError
    | InvalidDBClusterStateFaultError
    | KMSKeyNotAccessibleFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link CopyDBParameterGroupCommand}
   */
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBParameterGroupAlreadyExistsFaultError
    | DBParameterGroupNotFoundFaultError
    | DBParameterGroupQuotaExceededFaultError
  >;

  /**
   * @see {@link CopyDBSnapshotCommand}
   */
  copyDBSnapshot(
    args: CopyDBSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyDBSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CustomAvailabilityZoneNotFoundFaultError
    | DBSnapshotAlreadyExistsFaultError
    | DBSnapshotNotFoundFaultError
    | InvalidDBSnapshotStateFaultError
    | KMSKeyNotAccessibleFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link CopyOptionGroupCommand}
   */
  copyOptionGroup(
    args: CopyOptionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyOptionGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | OptionGroupAlreadyExistsFaultError
    | OptionGroupNotFoundFaultError
    | OptionGroupQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateBlueGreenDeploymentCommand}
   */
  createBlueGreenDeployment(
    args: CreateBlueGreenDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBlueGreenDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BlueGreenDeploymentAlreadyExistsFaultError
    | DBClusterNotFoundFaultError
    | DBClusterParameterGroupNotFoundFaultError
    | DBClusterQuotaExceededFaultError
    | DBInstanceNotFoundFaultError
    | DBParameterGroupNotFoundFaultError
    | InstanceQuotaExceededFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | SourceClusterNotSupportedFaultError
    | SourceDatabaseNotSupportedFaultError
    | StorageQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateCustomDBEngineVersionCommand}
   */
  createCustomDBEngineVersion(
    args: CreateCustomDBEngineVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomDBEngineVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CreateCustomDBEngineVersionFaultError
    | CustomDBEngineVersionAlreadyExistsFaultError
    | CustomDBEngineVersionNotFoundFaultError
    | CustomDBEngineVersionQuotaExceededFaultError
    | Ec2ImagePropertiesNotSupportedFaultError
    | InvalidCustomDBEngineVersionStateFaultError
    | KMSKeyNotAccessibleFaultError
  >;

  /**
   * @see {@link CreateDBClusterCommand}
   */
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterAlreadyExistsFaultError
    | DBClusterNotFoundFaultError
    | DBClusterParameterGroupNotFoundFaultError
    | DBClusterQuotaExceededFaultError
    | DBInstanceNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | GlobalClusterNotFoundFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InsufficientStorageClusterCapacityFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBSubnetGroupFaultError
    | InvalidDBSubnetGroupStateFaultError
    | InvalidGlobalClusterStateFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
  >;

  /**
   * @see {@link CreateDBClusterEndpointCommand}
   */
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBClusterEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterEndpointAlreadyExistsFaultError
    | DBClusterEndpointQuotaExceededFaultError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link CreateDBClusterParameterGroupCommand}
   */
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBClusterParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBParameterGroupAlreadyExistsFaultError
    | DBParameterGroupQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateDBClusterSnapshotCommand}
   */
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBClusterSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBClusterSnapshotAlreadyExistsFaultError
    | InvalidDBClusterSnapshotStateFaultError
    | InvalidDBClusterStateFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateDBInstanceCommand}
   */
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | BackupPolicyNotFoundFaultError
    | CertificateNotFoundFaultError
    | DBClusterNotFoundFaultError
    | DBInstanceAlreadyExistsFaultError
    | DBParameterGroupNotFoundFaultError
    | DBSecurityGroupNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InstanceQuotaExceededFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InvalidDBClusterStateFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | ProvisionedIopsNotAvailableInAZFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
    | TenantDatabaseQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateDBInstanceReadReplicaCommand}
   */
  createDBInstanceReadReplica(
    args: CreateDBInstanceReadReplicaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBInstanceReadReplicaCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateNotFoundFaultError
    | DBClusterNotFoundFaultError
    | DBInstanceAlreadyExistsFaultError
    | DBInstanceNotFoundFaultError
    | DBParameterGroupNotFoundFaultError
    | DBSecurityGroupNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotAllowedFaultError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InstanceQuotaExceededFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBSubnetGroupFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | ProvisionedIopsNotAvailableInAZFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
    | TenantDatabaseQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateDBParameterGroupCommand}
   */
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBParameterGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBParameterGroupAlreadyExistsFaultError
    | DBParameterGroupQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateDBProxyCommand}
   */
  createDBProxy(
    args: CreateDBProxyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBProxyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyAlreadyExistsFaultError
    | DBProxyQuotaExceededFaultError
    | InvalidSubnetError
  >;

  /**
   * @see {@link CreateDBProxyEndpointCommand}
   */
  createDBProxyEndpoint(
    args: CreateDBProxyEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBProxyEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyEndpointAlreadyExistsFaultError
    | DBProxyEndpointQuotaExceededFaultError
    | DBProxyNotFoundFaultError
    | InvalidDBProxyStateFaultError
    | InvalidSubnetError
  >;

  /**
   * @see {@link CreateDBSecurityGroupCommand}
   */
  createDBSecurityGroup(
    args: CreateDBSecurityGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBSecurityGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBSecurityGroupAlreadyExistsFaultError
    | DBSecurityGroupNotSupportedFaultError
    | DBSecurityGroupQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateDBShardGroupCommand}
   */
  createDBShardGroup(
    args: CreateDBShardGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBShardGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBShardGroupAlreadyExistsFaultError
    | InvalidDBClusterStateFaultError
    | InvalidVPCNetworkStateFaultError
    | MaxDBShardGroupLimitReachedError
    | NetworkTypeNotSupportedError
    | UnsupportedDBEngineVersionFaultError
  >;

  /**
   * @see {@link CreateDBSnapshotCommand}
   */
  createDBSnapshot(
    args: CreateDBSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | DBSnapshotAlreadyExistsFaultError
    | InvalidDBInstanceStateFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateDBSubnetGroupCommand}
   */
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDBSubnetGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBSubnetGroupAlreadyExistsFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupQuotaExceededFaultError
    | DBSubnetQuotaExceededFaultError
    | InvalidSubnetError
  >;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventSubscriptionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EventSubscriptionQuotaExceededFaultError
    | SNSInvalidTopicFaultError
    | SNSNoAuthorizationFaultError
    | SNSTopicArnNotFoundFaultError
    | SourceNotFoundFaultError
    | SubscriptionAlreadyExistFaultError
    | SubscriptionCategoryNotFoundFaultError
  >;

  /**
   * @see {@link CreateGlobalClusterCommand}
   */
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlobalClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | GlobalClusterAlreadyExistsFaultError
    | GlobalClusterQuotaExceededFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBShardGroupStateFaultError
    | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | IntegrationAlreadyExistsFaultError
    | IntegrationConflictOperationFaultError
    | IntegrationQuotaExceededFaultError
    | KMSKeyNotAccessibleFaultError
  >;

  /**
   * @see {@link CreateOptionGroupCommand}
   */
  createOptionGroup(
    args: CreateOptionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOptionGroupCommandOutput,
    Cause.TimeoutException | SdkError | OptionGroupAlreadyExistsFaultError | OptionGroupQuotaExceededFaultError
  >;

  /**
   * @see {@link CreateTenantDatabaseCommand}
   */
  createTenantDatabase(
    args: CreateTenantDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTenantDatabaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | InvalidDBInstanceStateFaultError
    | KMSKeyNotAccessibleFaultError
    | TenantDatabaseAlreadyExistsFaultError
    | TenantDatabaseQuotaExceededFaultError
  >;

  /**
   * @see {@link DeleteBlueGreenDeploymentCommand}
   */
  deleteBlueGreenDeployment(
    args: DeleteBlueGreenDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBlueGreenDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BlueGreenDeploymentNotFoundFaultError
    | InvalidBlueGreenDeploymentStateFaultError
  >;

  /**
   * @see {@link DeleteCustomDBEngineVersionCommand}
   */
  deleteCustomDBEngineVersion(
    args: DeleteCustomDBEngineVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomDBEngineVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CustomDBEngineVersionNotFoundFaultError
    | InvalidCustomDBEngineVersionStateFaultError
  >;

  /**
   * @see {@link DeleteDBClusterCommand}
   */
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterAutomatedBackupQuotaExceededFaultError
    | DBClusterNotFoundFaultError
    | DBClusterSnapshotAlreadyExistsFaultError
    | InvalidDBClusterSnapshotStateFaultError
    | InvalidDBClusterStateFaultError
    | InvalidGlobalClusterStateFaultError
    | KMSKeyNotAccessibleFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link DeleteDBClusterAutomatedBackupCommand}
   */
  deleteDBClusterAutomatedBackup(
    args: DeleteDBClusterAutomatedBackupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterAutomatedBackupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterAutomatedBackupNotFoundFaultError
    | InvalidDBClusterAutomatedBackupStateFaultError
  >;

  /**
   * @see {@link DeleteDBClusterEndpointCommand}
   */
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterEndpointNotFoundFaultError
    | InvalidDBClusterEndpointStateFaultError
    | InvalidDBClusterStateFaultError
  >;

  /**
   * @see {@link DeleteDBClusterParameterGroupCommand}
   */
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterParameterGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError | InvalidDBParameterGroupStateFaultError
  >;

  /**
   * @see {@link DeleteDBClusterSnapshotCommand}
   */
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBClusterSnapshotCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterSnapshotNotFoundFaultError | InvalidDBClusterSnapshotStateFaultError
  >;

  /**
   * @see {@link DeleteDBInstanceCommand}
   */
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceAutomatedBackupQuotaExceededFaultError
    | DBInstanceNotFoundFaultError
    | DBSnapshotAlreadyExistsFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | KMSKeyNotAccessibleFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link DeleteDBInstanceAutomatedBackupCommand}
   */
  deleteDBInstanceAutomatedBackup(
    args: DeleteDBInstanceAutomatedBackupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBInstanceAutomatedBackupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceAutomatedBackupNotFoundFaultError
    | InvalidDBInstanceAutomatedBackupStateFaultError
  >;

  /**
   * @see {@link DeleteDBParameterGroupCommand}
   */
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBParameterGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError | InvalidDBParameterGroupStateFaultError
  >;

  /**
   * @see {@link DeleteDBProxyCommand}
   */
  deleteDBProxy(
    args: DeleteDBProxyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBProxyCommandOutput,
    Cause.TimeoutException | SdkError | DBProxyNotFoundFaultError | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link DeleteDBProxyEndpointCommand}
   */
  deleteDBProxyEndpoint(
    args: DeleteDBProxyEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBProxyEndpointCommandOutput,
    Cause.TimeoutException | SdkError | DBProxyEndpointNotFoundFaultError | InvalidDBProxyEndpointStateFaultError
  >;

  /**
   * @see {@link DeleteDBSecurityGroupCommand}
   */
  deleteDBSecurityGroup(
    args: DeleteDBSecurityGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBSecurityGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBSecurityGroupNotFoundFaultError | InvalidDBSecurityGroupStateFaultError
  >;

  /**
   * @see {@link DeleteDBShardGroupCommand}
   */
  deleteDBShardGroup(
    args: DeleteDBShardGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBShardGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBShardGroupNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBShardGroupStateFaultError
  >;

  /**
   * @see {@link DeleteDBSnapshotCommand}
   */
  deleteDBSnapshot(
    args: DeleteDBSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBSnapshotCommandOutput,
    Cause.TimeoutException | SdkError | DBSnapshotNotFoundFaultError | InvalidDBSnapshotStateFaultError
  >;

  /**
   * @see {@link DeleteDBSubnetGroupCommand}
   */
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDBSubnetGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBSubnetGroupNotFoundFaultError
    | InvalidDBSubnetGroupStateFaultError
    | InvalidDBSubnetStateFaultError
  >;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | InvalidEventSubscriptionStateFaultError | SubscriptionNotFoundFaultError
  >;

  /**
   * @see {@link DeleteGlobalClusterCommand}
   */
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGlobalClusterCommandOutput,
    Cause.TimeoutException | SdkError | GlobalClusterNotFoundFaultError | InvalidGlobalClusterStateFaultError
  >;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IntegrationConflictOperationFaultError
    | IntegrationNotFoundFaultError
    | InvalidIntegrationStateFaultError
  >;

  /**
   * @see {@link DeleteOptionGroupCommand}
   */
  deleteOptionGroup(
    args: DeleteOptionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOptionGroupCommandOutput,
    Cause.TimeoutException | SdkError | InvalidOptionGroupStateFaultError | OptionGroupNotFoundFaultError
  >;

  /**
   * @see {@link DeleteTenantDatabaseCommand}
   */
  deleteTenantDatabase(
    args: DeleteTenantDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTenantDatabaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | DBSnapshotAlreadyExistsFaultError
    | InvalidDBInstanceStateFaultError
    | TenantDatabaseNotFoundFaultError
  >;

  /**
   * @see {@link DeregisterDBProxyTargetsCommand}
   */
  deregisterDBProxyTargets(
    args: DeregisterDBProxyTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterDBProxyTargetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyNotFoundFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | DBProxyTargetNotFoundFaultError
    | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountAttributesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeBlueGreenDeploymentsCommand}
   */
  describeBlueGreenDeployments(
    args: DescribeBlueGreenDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBlueGreenDeploymentsCommandOutput,
    Cause.TimeoutException | SdkError | BlueGreenDeploymentNotFoundFaultError
  >;

  /**
   * @see {@link DescribeCertificatesCommand}
   */
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCertificatesCommandOutput,
    Cause.TimeoutException | SdkError | CertificateNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClusterAutomatedBackupsCommand}
   */
  describeDBClusterAutomatedBackups(
    args: DescribeDBClusterAutomatedBackupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterAutomatedBackupsCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterAutomatedBackupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClusterBacktracksCommand}
   */
  describeDBClusterBacktracks(
    args: DescribeDBClusterBacktracksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterBacktracksCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterBacktrackNotFoundFaultError | DBClusterNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   */
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   */
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterParameterGroupsCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   */
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterParametersCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClusterSnapshotAttributesCommand}
   */
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterSnapshotAttributesCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterSnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   */
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClusterSnapshotsCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterSnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBClustersCommand}
   */
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBClustersCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   */
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBEngineVersionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeDBInstanceAutomatedBackupsCommand}
   */
  describeDBInstanceAutomatedBackups(
    args: DescribeDBInstanceAutomatedBackupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBInstanceAutomatedBackupsCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceAutomatedBackupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBInstancesCommand}
   */
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBInstancesCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBLogFilesCommand}
   */
  describeDBLogFiles(
    args: DescribeDBLogFilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBLogFilesCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceNotFoundFaultError | DBInstanceNotReadyFaultError
  >;

  /**
   * @see {@link DescribeDBMajorEngineVersionsCommand}
   */
  describeDBMajorEngineVersions(
    args: DescribeDBMajorEngineVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBMajorEngineVersionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   */
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBParameterGroupsCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBParametersCommand}
   */
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBParametersCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBProxiesCommand}
   */
  describeDBProxies(
    args: DescribeDBProxiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBProxiesCommandOutput,
    Cause.TimeoutException | SdkError | DBProxyNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBProxyEndpointsCommand}
   */
  describeDBProxyEndpoints(
    args: DescribeDBProxyEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBProxyEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | DBProxyEndpointNotFoundFaultError | DBProxyNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBProxyTargetGroupsCommand}
   */
  describeDBProxyTargetGroups(
    args: DescribeDBProxyTargetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBProxyTargetGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyNotFoundFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link DescribeDBProxyTargetsCommand}
   */
  describeDBProxyTargets(
    args: DescribeDBProxyTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBProxyTargetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyNotFoundFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | DBProxyTargetNotFoundFaultError
    | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link DescribeDBRecommendationsCommand}
   */
  describeDBRecommendations(
    args: DescribeDBRecommendationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBRecommendationsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeDBSecurityGroupsCommand}
   */
  describeDBSecurityGroups(
    args: DescribeDBSecurityGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBSecurityGroupsCommandOutput,
    Cause.TimeoutException | SdkError | DBSecurityGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBShardGroupsCommand}
   */
  describeDBShardGroups(
    args: DescribeDBShardGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBShardGroupsCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterNotFoundFaultError | DBShardGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBSnapshotAttributesCommand}
   */
  describeDBSnapshotAttributes(
    args: DescribeDBSnapshotAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBSnapshotAttributesCommandOutput,
    Cause.TimeoutException | SdkError | DBSnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBSnapshotTenantDatabasesCommand}
   */
  describeDBSnapshotTenantDatabases(
    args: DescribeDBSnapshotTenantDatabasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBSnapshotTenantDatabasesCommandOutput,
    Cause.TimeoutException | SdkError | DBSnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBSnapshotsCommand}
   */
  describeDBSnapshots(
    args: DescribeDBSnapshotsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBSnapshotsCommandOutput,
    Cause.TimeoutException | SdkError | DBSnapshotNotFoundFaultError
  >;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   */
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDBSubnetGroupsCommandOutput,
    Cause.TimeoutException | SdkError | DBSubnetGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   */
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEngineDefaultClusterParametersCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEngineDefaultParametersCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventCategoriesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventSubscriptionsCommandOutput,
    Cause.TimeoutException | SdkError | SubscriptionNotFoundFaultError
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportTasksCommandOutput,
    Cause.TimeoutException | SdkError | ExportTaskNotFoundFaultError
  >;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   */
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalClustersCommandOutput,
    Cause.TimeoutException | SdkError | GlobalClusterNotFoundFaultError
  >;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIntegrationsCommandOutput,
    Cause.TimeoutException | SdkError | IntegrationNotFoundFaultError
  >;

  /**
   * @see {@link DescribeOptionGroupOptionsCommand}
   */
  describeOptionGroupOptions(
    args: DescribeOptionGroupOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOptionGroupOptionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeOptionGroupsCommand}
   */
  describeOptionGroups(
    args: DescribeOptionGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOptionGroupsCommandOutput,
    Cause.TimeoutException | SdkError | OptionGroupNotFoundFaultError
  >;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   */
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOrderableDBInstanceOptionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePendingMaintenanceActionsCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link DescribeReservedDBInstancesCommand}
   */
  describeReservedDBInstances(
    args: DescribeReservedDBInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedDBInstancesCommandOutput,
    Cause.TimeoutException | SdkError | ReservedDBInstanceNotFoundFaultError
  >;

  /**
   * @see {@link DescribeReservedDBInstancesOfferingsCommand}
   */
  describeReservedDBInstancesOfferings(
    args: DescribeReservedDBInstancesOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedDBInstancesOfferingsCommandOutput,
    Cause.TimeoutException | SdkError | ReservedDBInstancesOfferingNotFoundFaultError
  >;

  /**
   * @see {@link DescribeSourceRegionsCommand}
   */
  describeSourceRegions(
    args: DescribeSourceRegionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSourceRegionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeTenantDatabasesCommand}
   */
  describeTenantDatabases(
    args: DescribeTenantDatabasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTenantDatabasesCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceNotFoundFaultError
  >;

  /**
   * @see {@link DescribeValidDBInstanceModificationsCommand}
   */
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeValidDBInstanceModificationsCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceNotFoundFaultError | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link DisableHttpEndpointCommand}
   */
  disableHttpEndpoint(
    args: DisableHttpEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableHttpEndpointCommandOutput,
    Cause.TimeoutException | SdkError | InvalidResourceStateFaultError | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link DownloadDBLogFilePortionCommand}
   */
  downloadDBLogFilePortion(
    args: DownloadDBLogFilePortionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DownloadDBLogFilePortionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | DBInstanceNotReadyFaultError
    | DBLogFileNotFoundFaultError
  >;

  /**
   * @see {@link EnableHttpEndpointCommand}
   */
  enableHttpEndpoint(
    args: EnableHttpEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableHttpEndpointCommandOutput,
    Cause.TimeoutException | SdkError | InvalidResourceStateFaultError | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link FailoverDBClusterCommand}
   */
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    FailoverDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link FailoverGlobalClusterCommand}
   */
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    FailoverGlobalClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | GlobalClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidGlobalClusterStateFaultError
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
    | BlueGreenDeploymentNotFoundFaultError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | DBProxyEndpointNotFoundFaultError
    | DBProxyNotFoundFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | DBShardGroupNotFoundFaultError
    | DBSnapshotNotFoundFaultError
    | DBSnapshotTenantDatabaseNotFoundFaultError
    | IntegrationNotFoundFaultError
    | TenantDatabaseNotFoundFaultError
  >;

  /**
   * @see {@link ModifyActivityStreamCommand}
   */
  modifyActivityStream(
    args: ModifyActivityStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyActivityStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | InvalidDBInstanceStateFaultError
    | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link ModifyCertificatesCommand}
   */
  modifyCertificates(
    args: ModifyCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCertificatesCommandOutput,
    Cause.TimeoutException | SdkError | CertificateNotFoundFaultError
  >;

  /**
   * @see {@link ModifyCurrentDBClusterCapacityCommand}
   */
  modifyCurrentDBClusterCapacity(
    args: ModifyCurrentDBClusterCapacityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCurrentDBClusterCapacityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | InvalidDBClusterCapacityFaultError
    | InvalidDBClusterStateFaultError
  >;

  /**
   * @see {@link ModifyCustomDBEngineVersionCommand}
   */
  modifyCustomDBEngineVersion(
    args: ModifyCustomDBEngineVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCustomDBEngineVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CustomDBEngineVersionNotFoundFaultError
    | InvalidCustomDBEngineVersionStateFaultError
  >;

  /**
   * @see {@link ModifyDBClusterCommand}
   */
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterAlreadyExistsFaultError
    | DBClusterNotFoundFaultError
    | DBClusterParameterGroupNotFoundFaultError
    | DBInstanceAlreadyExistsFaultError
    | DBParameterGroupNotFoundFaultError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBSecurityGroupStateFaultError
    | InvalidDBSubnetGroupStateFaultError
    | InvalidGlobalClusterStateFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotAvailableFaultError
    | StorageTypeNotSupportedFaultError
  >;

  /**
   * @see {@link ModifyDBClusterEndpointCommand}
   */
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBClusterEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterEndpointNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | InvalidDBClusterEndpointStateFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link ModifyDBClusterParameterGroupCommand}
   */
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBClusterParameterGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError | InvalidDBParameterGroupStateFaultError
  >;

  /**
   * @see {@link ModifyDBClusterSnapshotAttributeCommand}
   */
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBClusterSnapshotAttributeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterSnapshotNotFoundFaultError
    | InvalidDBClusterSnapshotStateFaultError
    | SharedSnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link ModifyDBInstanceCommand}
   */
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | BackupPolicyNotFoundFaultError
    | CertificateNotFoundFaultError
    | DBInstanceAlreadyExistsFaultError
    | DBInstanceNotFoundFaultError
    | DBParameterGroupNotFoundFaultError
    | DBSecurityGroupNotFoundFaultError
    | DBUpgradeDependencyFailureFaultError
    | DomainNotFoundFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBSecurityGroupStateFaultError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | ProvisionedIopsNotAvailableInAZFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
    | TenantDatabaseQuotaExceededFaultError
  >;

  /**
   * @see {@link ModifyDBParameterGroupCommand}
   */
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBParameterGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError | InvalidDBParameterGroupStateFaultError
  >;

  /**
   * @see {@link ModifyDBProxyCommand}
   */
  modifyDBProxy(
    args: ModifyDBProxyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBProxyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyAlreadyExistsFaultError
    | DBProxyNotFoundFaultError
    | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link ModifyDBProxyEndpointCommand}
   */
  modifyDBProxyEndpoint(
    args: ModifyDBProxyEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBProxyEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyEndpointAlreadyExistsFaultError
    | DBProxyEndpointNotFoundFaultError
    | InvalidDBProxyEndpointStateFaultError
    | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link ModifyDBProxyTargetGroupCommand}
   */
  modifyDBProxyTargetGroup(
    args: ModifyDBProxyTargetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBProxyTargetGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBProxyNotFoundFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link ModifyDBRecommendationCommand}
   */
  modifyDBRecommendation(
    args: ModifyDBRecommendationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBRecommendationCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ModifyDBShardGroupCommand}
   */
  modifyDBShardGroup(
    args: ModifyDBShardGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBShardGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBShardGroupAlreadyExistsFaultError
    | DBShardGroupNotFoundFaultError
    | InvalidDBClusterStateFaultError
  >;

  /**
   * @see {@link ModifyDBSnapshotCommand}
   */
  modifyDBSnapshot(
    args: ModifyDBSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBSnapshotNotFoundFaultError
    | InvalidDBSnapshotStateFaultError
    | KMSKeyNotAccessibleFaultError
  >;

  /**
   * @see {@link ModifyDBSnapshotAttributeCommand}
   */
  modifyDBSnapshotAttribute(
    args: ModifyDBSnapshotAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBSnapshotAttributeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBSnapshotNotFoundFaultError
    | InvalidDBSnapshotStateFaultError
    | SharedSnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link ModifyDBSubnetGroupCommand}
   */
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDBSubnetGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | DBSubnetQuotaExceededFaultError
    | InvalidDBSubnetGroupStateFaultError
    | InvalidSubnetError
    | SubnetAlreadyInUseError
  >;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyEventSubscriptionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EventSubscriptionQuotaExceededFaultError
    | SNSInvalidTopicFaultError
    | SNSNoAuthorizationFaultError
    | SNSTopicArnNotFoundFaultError
    | SubscriptionCategoryNotFoundFaultError
    | SubscriptionNotFoundFaultError
  >;

  /**
   * @see {@link ModifyGlobalClusterCommand}
   */
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyGlobalClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlobalClusterAlreadyExistsFaultError
    | GlobalClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidGlobalClusterStateFaultError
  >;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IntegrationConflictOperationFaultError
    | IntegrationNotFoundFaultError
    | InvalidIntegrationStateFaultError
  >;

  /**
   * @see {@link ModifyOptionGroupCommand}
   */
  modifyOptionGroup(
    args: ModifyOptionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyOptionGroupCommandOutput,
    Cause.TimeoutException | SdkError | InvalidOptionGroupStateFaultError | OptionGroupNotFoundFaultError
  >;

  /**
   * @see {@link ModifyTenantDatabaseCommand}
   */
  modifyTenantDatabase(
    args: ModifyTenantDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTenantDatabaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | InvalidDBInstanceStateFaultError
    | KMSKeyNotAccessibleFaultError
    | TenantDatabaseAlreadyExistsFaultError
    | TenantDatabaseNotFoundFaultError
  >;

  /**
   * @see {@link PromoteReadReplicaCommand}
   */
  promoteReadReplica(
    args: PromoteReadReplicaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PromoteReadReplicaCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceNotFoundFaultError | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link PromoteReadReplicaDBClusterCommand}
   */
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PromoteReadReplicaDBClusterCommandOutput,
    Cause.TimeoutException | SdkError | DBClusterNotFoundFaultError | InvalidDBClusterStateFaultError
  >;

  /**
   * @see {@link PurchaseReservedDBInstancesOfferingCommand}
   */
  purchaseReservedDBInstancesOffering(
    args: PurchaseReservedDBInstancesOfferingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedDBInstancesOfferingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ReservedDBInstanceAlreadyExistsFaultError
    | ReservedDBInstanceQuotaExceededFaultError
    | ReservedDBInstancesOfferingNotFoundFaultError
  >;

  /**
   * @see {@link RebootDBClusterCommand}
   */
  rebootDBCluster(
    args: RebootDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link RebootDBInstanceCommand}
   */
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | InvalidDBInstanceStateFaultError
    | KMSKeyNotAccessibleFaultError
  >;

  /**
   * @see {@link RebootDBShardGroupCommand}
   */
  rebootDBShardGroup(
    args: RebootDBShardGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootDBShardGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBShardGroupNotFoundFaultError | InvalidDBShardGroupStateFaultError
  >;

  /**
   * @see {@link RegisterDBProxyTargetsCommand}
   */
  registerDBProxyTargets(
    args: RegisterDBProxyTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterDBProxyTargetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | DBProxyNotFoundFaultError
    | DBProxyTargetAlreadyRegisteredFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | InsufficientAvailableIPsInSubnetFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBProxyStateFaultError
  >;

  /**
   * @see {@link RemoveFromGlobalClusterCommand}
   */
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveFromGlobalClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | GlobalClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidGlobalClusterStateFaultError
  >;

  /**
   * @see {@link RemoveRoleFromDBClusterCommand}
   */
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveRoleFromDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBClusterRoleNotFoundFaultError
    | InvalidDBClusterStateFaultError
  >;

  /**
   * @see {@link RemoveRoleFromDBInstanceCommand}
   */
  removeRoleFromDBInstance(
    args: RemoveRoleFromDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveRoleFromDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | DBInstanceRoleNotFoundFaultError
    | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link RemoveSourceIdentifierFromSubscriptionCommand}
   */
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveSourceIdentifierFromSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | SourceNotFoundFaultError | SubscriptionNotFoundFaultError
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
    | BlueGreenDeploymentNotFoundFaultError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | DBProxyEndpointNotFoundFaultError
    | DBProxyNotFoundFaultError
    | DBProxyTargetGroupNotFoundFaultError
    | DBShardGroupNotFoundFaultError
    | DBSnapshotNotFoundFaultError
    | DBSnapshotTenantDatabaseNotFoundFaultError
    | IntegrationNotFoundFaultError
    | InvalidDBClusterEndpointStateFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | TenantDatabaseNotFoundFaultError
  >;

  /**
   * @see {@link ResetDBClusterParameterGroupCommand}
   */
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetDBClusterParameterGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError | InvalidDBParameterGroupStateFaultError
  >;

  /**
   * @see {@link ResetDBParameterGroupCommand}
   */
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetDBParameterGroupCommandOutput,
    Cause.TimeoutException | SdkError | DBParameterGroupNotFoundFaultError | InvalidDBParameterGroupStateFaultError
  >;

  /**
   * @see {@link RestoreDBClusterFromS3Command}
   */
  restoreDBClusterFromS3(
    args: RestoreDBClusterFromS3CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBClusterFromS3CommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterAlreadyExistsFaultError
    | DBClusterNotFoundFaultError
    | DBClusterParameterGroupNotFoundFaultError
    | DBClusterQuotaExceededFaultError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InsufficientStorageClusterCapacityFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBSubnetGroupStateFaultError
    | InvalidS3BucketFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
  >;

  /**
   * @see {@link RestoreDBClusterFromSnapshotCommand}
   */
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBClusterFromSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterAlreadyExistsFaultError
    | DBClusterParameterGroupNotFoundFaultError
    | DBClusterQuotaExceededFaultError
    | DBClusterSnapshotNotFoundFaultError
    | DBSnapshotNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InsufficientDBClusterCapacityFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InsufficientStorageClusterCapacityFaultError
    | InvalidDBClusterSnapshotStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBSnapshotStateFaultError
    | InvalidRestoreFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
  >;

  /**
   * @see {@link RestoreDBClusterToPointInTimeCommand}
   */
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBClusterToPointInTimeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterAlreadyExistsFaultError
    | DBClusterAutomatedBackupNotFoundFaultError
    | DBClusterNotFoundFaultError
    | DBClusterParameterGroupNotFoundFaultError
    | DBClusterQuotaExceededFaultError
    | DBClusterSnapshotNotFoundFaultError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InsufficientDBClusterCapacityFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InsufficientStorageClusterCapacityFaultError
    | InvalidDBClusterSnapshotStateFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBSnapshotStateFaultError
    | InvalidRestoreFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
  >;

  /**
   * @see {@link RestoreDBInstanceFromDBSnapshotCommand}
   */
  restoreDBInstanceFromDBSnapshot(
    args: RestoreDBInstanceFromDBSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBInstanceFromDBSnapshotCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | BackupPolicyNotFoundFaultError
    | CertificateNotFoundFaultError
    | DBClusterSnapshotNotFoundFaultError
    | DBInstanceAlreadyExistsFaultError
    | DBParameterGroupNotFoundFaultError
    | DBSecurityGroupNotFoundFaultError
    | DBSnapshotNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InstanceQuotaExceededFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InvalidDBSnapshotStateFaultError
    | InvalidRestoreFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | ProvisionedIopsNotAvailableInAZFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
    | TenantDatabaseQuotaExceededFaultError
  >;

  /**
   * @see {@link RestoreDBInstanceFromS3Command}
   */
  restoreDBInstanceFromS3(
    args: RestoreDBInstanceFromS3CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBInstanceFromS3CommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | BackupPolicyNotFoundFaultError
    | CertificateNotFoundFaultError
    | DBInstanceAlreadyExistsFaultError
    | DBParameterGroupNotFoundFaultError
    | DBSecurityGroupNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | InstanceQuotaExceededFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InvalidS3BucketFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | ProvisionedIopsNotAvailableInAZFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
  >;

  /**
   * @see {@link RestoreDBInstanceToPointInTimeCommand}
   */
  restoreDBInstanceToPointInTime(
    args: RestoreDBInstanceToPointInTimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreDBInstanceToPointInTimeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | BackupPolicyNotFoundFaultError
    | CertificateNotFoundFaultError
    | DBInstanceAlreadyExistsFaultError
    | DBInstanceAutomatedBackupNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | DBParameterGroupNotFoundFaultError
    | DBSecurityGroupNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | DomainNotFoundFaultError
    | InstanceQuotaExceededFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidRestoreFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
    | NetworkTypeNotSupportedError
    | OptionGroupNotFoundFaultError
    | PointInTimeRestoreNotEnabledFaultError
    | ProvisionedIopsNotAvailableInAZFaultError
    | StorageQuotaExceededFaultError
    | StorageTypeNotSupportedFaultError
    | TenantDatabaseQuotaExceededFaultError
  >;

  /**
   * @see {@link RevokeDBSecurityGroupIngressCommand}
   */
  revokeDBSecurityGroupIngress(
    args: RevokeDBSecurityGroupIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeDBSecurityGroupIngressCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | DBSecurityGroupNotFoundFaultError
    | InvalidDBSecurityGroupStateFaultError
  >;

  /**
   * @see {@link StartActivityStreamCommand}
   */
  startActivityStream(
    args: StartActivityStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartActivityStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | KMSKeyNotAccessibleFaultError
    | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link StartDBClusterCommand}
   */
  startDBCluster(
    args: StartDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBShardGroupStateFaultError
    | KMSKeyNotAccessibleFaultError
  >;

  /**
   * @see {@link StartDBInstanceCommand}
   */
  startDBInstance(
    args: StartDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AuthorizationNotFoundFaultError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | DBSubnetGroupDoesNotCoverEnoughAZsError
    | DBSubnetGroupNotFoundFaultError
    | InsufficientDBInstanceCapacityFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidSubnetError
    | InvalidVPCNetworkStateFaultError
    | KMSKeyNotAccessibleFaultError
  >;

  /**
   * @see {@link StartDBInstanceAutomatedBackupsReplicationCommand}
   */
  startDBInstanceAutomatedBackupsReplication(
    args: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDBInstanceAutomatedBackupsReplicationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceAutomatedBackupQuotaExceededFaultError
    | DBInstanceNotFoundFaultError
    | InvalidDBInstanceAutomatedBackupStateFaultError
    | InvalidDBInstanceStateFaultError
    | KMSKeyNotAccessibleFaultError
    | StorageTypeNotSupportedFaultError
  >;

  /**
   * @see {@link StartExportTaskCommand}
   */
  startExportTask(
    args: StartExportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartExportTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBClusterSnapshotNotFoundFaultError
    | DBSnapshotNotFoundFaultError
    | ExportTaskAlreadyExistsFaultError
    | IamRoleMissingPermissionsFaultError
    | IamRoleNotFoundFaultError
    | InvalidExportOnlyFaultError
    | InvalidExportSourceStateFaultError
    | InvalidS3BucketFaultError
    | KMSKeyNotAccessibleFaultError
  >;

  /**
   * @see {@link StopActivityStreamCommand}
   */
  stopActivityStream(
    args: StopActivityStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopActivityStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | DBInstanceNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | ResourceNotFoundFaultError
  >;

  /**
   * @see {@link StopDBClusterCommand}
   */
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopDBClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | InvalidDBShardGroupStateFaultError
  >;

  /**
   * @see {@link StopDBInstanceCommand}
   */
  stopDBInstance(
    args: StopDBInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopDBInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBInstanceNotFoundFaultError
    | DBSnapshotAlreadyExistsFaultError
    | InvalidDBClusterStateFaultError
    | InvalidDBInstanceStateFaultError
    | SnapshotQuotaExceededFaultError
  >;

  /**
   * @see {@link StopDBInstanceAutomatedBackupsReplicationCommand}
   */
  stopDBInstanceAutomatedBackupsReplication(
    args: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopDBInstanceAutomatedBackupsReplicationCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceNotFoundFaultError | InvalidDBInstanceStateFaultError
  >;

  /**
   * @see {@link SwitchoverBlueGreenDeploymentCommand}
   */
  switchoverBlueGreenDeployment(
    args: SwitchoverBlueGreenDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SwitchoverBlueGreenDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BlueGreenDeploymentNotFoundFaultError
    | InvalidBlueGreenDeploymentStateFaultError
  >;

  /**
   * @see {@link SwitchoverGlobalClusterCommand}
   */
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SwitchoverGlobalClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DBClusterNotFoundFaultError
    | GlobalClusterNotFoundFaultError
    | InvalidDBClusterStateFaultError
    | InvalidGlobalClusterStateFaultError
  >;

  /**
   * @see {@link SwitchoverReadReplicaCommand}
   */
  switchoverReadReplica(
    args: SwitchoverReadReplicaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SwitchoverReadReplicaCommandOutput,
    Cause.TimeoutException | SdkError | DBInstanceNotFoundFaultError | InvalidDBInstanceStateFaultError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeRDSService = Effect.gen(function*() {
  const client = yield* Instance.RDSClientInstance;

  return yield* Service.fromClientAndCommands<RDSService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: RDSServiceConfig.toRDSClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class RDSService extends Effect.Tag("@effect-aws/client-rds/RDSService")<
  RDSService,
  RDSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeRDSService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: RDSService.Config) =>
    Layer.effect(this, makeRDSService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(RDSServiceConfig.setRDSServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: RDSClientConfig) => RDSClient,
  ) =>
    Layer.effect(this, makeRDSService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.RDSClientInstance,
          Effect.map(RDSServiceConfig.toRDSClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace RDSService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<RDSClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = RDSService$;
}
