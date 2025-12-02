import type {
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  AuthorizationQuotaExceededFault,
  BackupPolicyNotFoundFault,
  BlueGreenDeploymentAlreadyExistsFault,
  BlueGreenDeploymentNotFoundFault,
  CertificateNotFoundFault,
  CreateCustomDBEngineVersionFault,
  CustomAvailabilityZoneNotFoundFault,
  CustomDBEngineVersionAlreadyExistsFault,
  CustomDBEngineVersionNotFoundFault,
  CustomDBEngineVersionQuotaExceededFault,
  DBClusterAlreadyExistsFault,
  DBClusterAutomatedBackupNotFoundFault,
  DBClusterAutomatedBackupQuotaExceededFault,
  DBClusterBacktrackNotFoundFault,
  DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointNotFoundFault,
  DBClusterEndpointQuotaExceededFault,
  DBClusterNotFoundFault,
  DBClusterParameterGroupNotFoundFault,
  DBClusterQuotaExceededFault,
  DBClusterRoleAlreadyExistsFault,
  DBClusterRoleNotFoundFault,
  DBClusterRoleQuotaExceededFault,
  DBClusterSnapshotAlreadyExistsFault,
  DBClusterSnapshotNotFoundFault,
  DBInstanceAlreadyExistsFault,
  DBInstanceAutomatedBackupNotFoundFault,
  DBInstanceAutomatedBackupQuotaExceededFault,
  DBInstanceNotFoundFault,
  DBInstanceNotReadyFault,
  DBInstanceRoleAlreadyExistsFault,
  DBInstanceRoleNotFoundFault,
  DBInstanceRoleQuotaExceededFault,
  DBLogFileNotFoundFault,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupNotFoundFault,
  DBParameterGroupQuotaExceededFault,
  DBProxyAlreadyExistsFault,
  DBProxyEndpointAlreadyExistsFault,
  DBProxyEndpointNotFoundFault,
  DBProxyEndpointQuotaExceededFault,
  DBProxyNotFoundFault,
  DBProxyQuotaExceededFault,
  DBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetGroupNotFoundFault,
  DBProxyTargetNotFoundFault,
  DBSecurityGroupAlreadyExistsFault,
  DBSecurityGroupNotFoundFault,
  DBSecurityGroupNotSupportedFault,
  DBSecurityGroupQuotaExceededFault,
  DBShardGroupAlreadyExistsFault,
  DBShardGroupNotFoundFault,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotNotFoundFault,
  DBSnapshotTenantDatabaseNotFoundFault,
  DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupNotAllowedFault,
  DBSubnetGroupNotFoundFault,
  DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault,
  DBUpgradeDependencyFailureFault,
  DomainNotFoundFault,
  Ec2ImagePropertiesNotSupportedFault,
  EventSubscriptionQuotaExceededFault,
  ExportTaskAlreadyExistsFault,
  ExportTaskNotFoundFault,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault,
  IamRoleMissingPermissionsFault,
  IamRoleNotFoundFault,
  InstanceQuotaExceededFault,
  InsufficientAvailableIPsInSubnetFault,
  InsufficientDBClusterCapacityFault,
  InsufficientDBInstanceCapacityFault,
  InsufficientStorageClusterCapacityFault,
  IntegrationAlreadyExistsFault,
  IntegrationConflictOperationFault,
  IntegrationNotFoundFault,
  IntegrationQuotaExceededFault,
  InvalidBlueGreenDeploymentStateFault,
  InvalidCustomDBEngineVersionStateFault,
  InvalidDBClusterAutomatedBackupStateFault,
  InvalidDBClusterCapacityFault,
  InvalidDBClusterEndpointStateFault,
  InvalidDBClusterSnapshotStateFault,
  InvalidDBClusterStateFault,
  InvalidDBInstanceAutomatedBackupStateFault,
  InvalidDBInstanceStateFault,
  InvalidDBParameterGroupStateFault,
  InvalidDBProxyEndpointStateFault,
  InvalidDBProxyStateFault,
  InvalidDBSecurityGroupStateFault,
  InvalidDBShardGroupStateFault,
  InvalidDBSnapshotStateFault,
  InvalidDBSubnetGroupFault,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault,
  InvalidEventSubscriptionStateFault,
  InvalidExportOnlyFault,
  InvalidExportSourceStateFault,
  InvalidExportTaskStateFault,
  InvalidGlobalClusterStateFault,
  InvalidIntegrationStateFault,
  InvalidOptionGroupStateFault,
  InvalidResourceStateFault,
  InvalidRestoreFault,
  InvalidS3BucketFault,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  KMSKeyNotAccessibleFault,
  MaxDBShardGroupLimitReached,
  NetworkTypeNotSupported,
  OptionGroupAlreadyExistsFault,
  OptionGroupNotFoundFault,
  OptionGroupQuotaExceededFault,
  PointInTimeRestoreNotEnabledFault,
  ProvisionedIopsNotAvailableInAZFault,
  ReservedDBInstanceAlreadyExistsFault,
  ReservedDBInstanceNotFoundFault,
  ReservedDBInstanceQuotaExceededFault,
  ReservedDBInstancesOfferingNotFoundFault,
  ResourceNotFoundFault,
  SharedSnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  SNSTopicArnNotFoundFault,
  SourceClusterNotSupportedFault,
  SourceDatabaseNotSupportedFault,
  SourceNotFoundFault,
  StorageQuotaExceededFault,
  StorageTypeNotAvailableFault,
  StorageTypeNotSupportedFault,
  SubnetAlreadyInUse,
  SubscriptionAlreadyExistFault,
  SubscriptionCategoryNotFoundFault,
  SubscriptionNotFoundFault,
  TenantDatabaseAlreadyExistsFault,
  TenantDatabaseNotFoundFault,
  TenantDatabaseQuotaExceededFault,
  UnsupportedDBEngineVersionFault,
  VpcEncryptionControlViolationException,
} from "@aws-sdk/client-rds";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AuthorizationAlreadyExistsFault",
  "AuthorizationNotFoundFault",
  "AuthorizationQuotaExceededFault",
  "BackupPolicyNotFoundFault",
  "BlueGreenDeploymentAlreadyExistsFault",
  "BlueGreenDeploymentNotFoundFault",
  "CertificateNotFoundFault",
  "CreateCustomDBEngineVersionFault",
  "CustomAvailabilityZoneNotFoundFault",
  "CustomDBEngineVersionAlreadyExistsFault",
  "CustomDBEngineVersionNotFoundFault",
  "CustomDBEngineVersionQuotaExceededFault",
  "DBClusterAlreadyExistsFault",
  "DBClusterAutomatedBackupNotFoundFault",
  "DBClusterAutomatedBackupQuotaExceededFault",
  "DBClusterBacktrackNotFoundFault",
  "DBClusterEndpointAlreadyExistsFault",
  "DBClusterEndpointNotFoundFault",
  "DBClusterEndpointQuotaExceededFault",
  "DBClusterNotFoundFault",
  "DBClusterParameterGroupNotFoundFault",
  "DBClusterQuotaExceededFault",
  "DBClusterRoleAlreadyExistsFault",
  "DBClusterRoleNotFoundFault",
  "DBClusterRoleQuotaExceededFault",
  "DBClusterSnapshotAlreadyExistsFault",
  "DBClusterSnapshotNotFoundFault",
  "DBInstanceAlreadyExistsFault",
  "DBInstanceAutomatedBackupNotFoundFault",
  "DBInstanceAutomatedBackupQuotaExceededFault",
  "DBInstanceNotFoundFault",
  "DBInstanceNotReadyFault",
  "DBInstanceRoleAlreadyExistsFault",
  "DBInstanceRoleNotFoundFault",
  "DBInstanceRoleQuotaExceededFault",
  "DBLogFileNotFoundFault",
  "DBParameterGroupAlreadyExistsFault",
  "DBParameterGroupNotFoundFault",
  "DBParameterGroupQuotaExceededFault",
  "DBProxyAlreadyExistsFault",
  "DBProxyEndpointAlreadyExistsFault",
  "DBProxyEndpointNotFoundFault",
  "DBProxyEndpointQuotaExceededFault",
  "DBProxyNotFoundFault",
  "DBProxyQuotaExceededFault",
  "DBProxyTargetAlreadyRegisteredFault",
  "DBProxyTargetGroupNotFoundFault",
  "DBProxyTargetNotFoundFault",
  "DBSecurityGroupAlreadyExistsFault",
  "DBSecurityGroupNotFoundFault",
  "DBSecurityGroupNotSupportedFault",
  "DBSecurityGroupQuotaExceededFault",
  "DBShardGroupAlreadyExistsFault",
  "DBShardGroupNotFoundFault",
  "DBSnapshotAlreadyExistsFault",
  "DBSnapshotNotFoundFault",
  "DBSnapshotTenantDatabaseNotFoundFault",
  "DBSubnetGroupAlreadyExistsFault",
  "DBSubnetGroupDoesNotCoverEnoughAZs",
  "DBSubnetGroupNotAllowedFault",
  "DBSubnetGroupNotFoundFault",
  "DBSubnetGroupQuotaExceededFault",
  "DBSubnetQuotaExceededFault",
  "DBUpgradeDependencyFailureFault",
  "DomainNotFoundFault",
  "Ec2ImagePropertiesNotSupportedFault",
  "EventSubscriptionQuotaExceededFault",
  "ExportTaskAlreadyExistsFault",
  "ExportTaskNotFoundFault",
  "GlobalClusterAlreadyExistsFault",
  "GlobalClusterNotFoundFault",
  "GlobalClusterQuotaExceededFault",
  "IamRoleMissingPermissionsFault",
  "IamRoleNotFoundFault",
  "InstanceQuotaExceededFault",
  "InsufficientAvailableIPsInSubnetFault",
  "InsufficientDBClusterCapacityFault",
  "InsufficientDBInstanceCapacityFault",
  "InsufficientStorageClusterCapacityFault",
  "IntegrationAlreadyExistsFault",
  "IntegrationConflictOperationFault",
  "IntegrationNotFoundFault",
  "IntegrationQuotaExceededFault",
  "InvalidBlueGreenDeploymentStateFault",
  "InvalidCustomDBEngineVersionStateFault",
  "InvalidDBClusterAutomatedBackupStateFault",
  "InvalidDBClusterCapacityFault",
  "InvalidDBClusterEndpointStateFault",
  "InvalidDBClusterSnapshotStateFault",
  "InvalidDBClusterStateFault",
  "InvalidDBInstanceAutomatedBackupStateFault",
  "InvalidDBInstanceStateFault",
  "InvalidDBParameterGroupStateFault",
  "InvalidDBProxyEndpointStateFault",
  "InvalidDBProxyStateFault",
  "InvalidDBSecurityGroupStateFault",
  "InvalidDBShardGroupStateFault",
  "InvalidDBSnapshotStateFault",
  "InvalidDBSubnetGroupFault",
  "InvalidDBSubnetGroupStateFault",
  "InvalidDBSubnetStateFault",
  "InvalidEventSubscriptionStateFault",
  "InvalidExportOnlyFault",
  "InvalidExportSourceStateFault",
  "InvalidExportTaskStateFault",
  "InvalidGlobalClusterStateFault",
  "InvalidIntegrationStateFault",
  "InvalidOptionGroupStateFault",
  "InvalidResourceStateFault",
  "InvalidRestoreFault",
  "InvalidS3BucketFault",
  "InvalidSubnet",
  "InvalidVPCNetworkStateFault",
  "KMSKeyNotAccessibleFault",
  "MaxDBShardGroupLimitReached",
  "NetworkTypeNotSupported",
  "OptionGroupAlreadyExistsFault",
  "OptionGroupNotFoundFault",
  "OptionGroupQuotaExceededFault",
  "PointInTimeRestoreNotEnabledFault",
  "ProvisionedIopsNotAvailableInAZFault",
  "ReservedDBInstanceAlreadyExistsFault",
  "ReservedDBInstanceNotFoundFault",
  "ReservedDBInstanceQuotaExceededFault",
  "ReservedDBInstancesOfferingNotFoundFault",
  "ResourceNotFoundFault",
  "SNSInvalidTopicFault",
  "SNSNoAuthorizationFault",
  "SNSTopicArnNotFoundFault",
  "SharedSnapshotQuotaExceededFault",
  "SnapshotQuotaExceededFault",
  "SourceClusterNotSupportedFault",
  "SourceDatabaseNotSupportedFault",
  "SourceNotFoundFault",
  "StorageQuotaExceededFault",
  "StorageTypeNotAvailableFault",
  "StorageTypeNotSupportedFault",
  "SubnetAlreadyInUse",
  "SubscriptionAlreadyExistFault",
  "SubscriptionCategoryNotFoundFault",
  "SubscriptionNotFoundFault",
  "TenantDatabaseAlreadyExistsFault",
  "TenantDatabaseNotFoundFault",
  "TenantDatabaseQuotaExceededFault",
  "UnsupportedDBEngineVersionFault",
  "VpcEncryptionControlViolationException",
] as const;

export type AuthorizationAlreadyExistsFaultError = TaggedException<AuthorizationAlreadyExistsFault>;
export type AuthorizationNotFoundFaultError = TaggedException<AuthorizationNotFoundFault>;
export type AuthorizationQuotaExceededFaultError = TaggedException<AuthorizationQuotaExceededFault>;
export type BackupPolicyNotFoundFaultError = TaggedException<BackupPolicyNotFoundFault>;
export type BlueGreenDeploymentAlreadyExistsFaultError = TaggedException<BlueGreenDeploymentAlreadyExistsFault>;
export type BlueGreenDeploymentNotFoundFaultError = TaggedException<BlueGreenDeploymentNotFoundFault>;
export type CertificateNotFoundFaultError = TaggedException<CertificateNotFoundFault>;
export type CreateCustomDBEngineVersionFaultError = TaggedException<CreateCustomDBEngineVersionFault>;
export type CustomAvailabilityZoneNotFoundFaultError = TaggedException<CustomAvailabilityZoneNotFoundFault>;
export type CustomDBEngineVersionAlreadyExistsFaultError = TaggedException<CustomDBEngineVersionAlreadyExistsFault>;
export type CustomDBEngineVersionNotFoundFaultError = TaggedException<CustomDBEngineVersionNotFoundFault>;
export type CustomDBEngineVersionQuotaExceededFaultError = TaggedException<CustomDBEngineVersionQuotaExceededFault>;
export type DBClusterAlreadyExistsFaultError = TaggedException<DBClusterAlreadyExistsFault>;
export type DBClusterAutomatedBackupNotFoundFaultError = TaggedException<DBClusterAutomatedBackupNotFoundFault>;
export type DBClusterAutomatedBackupQuotaExceededFaultError = TaggedException<
  DBClusterAutomatedBackupQuotaExceededFault
>;
export type DBClusterBacktrackNotFoundFaultError = TaggedException<DBClusterBacktrackNotFoundFault>;
export type DBClusterEndpointAlreadyExistsFaultError = TaggedException<DBClusterEndpointAlreadyExistsFault>;
export type DBClusterEndpointNotFoundFaultError = TaggedException<DBClusterEndpointNotFoundFault>;
export type DBClusterEndpointQuotaExceededFaultError = TaggedException<DBClusterEndpointQuotaExceededFault>;
export type DBClusterNotFoundFaultError = TaggedException<DBClusterNotFoundFault>;
export type DBClusterParameterGroupNotFoundFaultError = TaggedException<DBClusterParameterGroupNotFoundFault>;
export type DBClusterQuotaExceededFaultError = TaggedException<DBClusterQuotaExceededFault>;
export type DBClusterRoleAlreadyExistsFaultError = TaggedException<DBClusterRoleAlreadyExistsFault>;
export type DBClusterRoleNotFoundFaultError = TaggedException<DBClusterRoleNotFoundFault>;
export type DBClusterRoleQuotaExceededFaultError = TaggedException<DBClusterRoleQuotaExceededFault>;
export type DBClusterSnapshotAlreadyExistsFaultError = TaggedException<DBClusterSnapshotAlreadyExistsFault>;
export type DBClusterSnapshotNotFoundFaultError = TaggedException<DBClusterSnapshotNotFoundFault>;
export type DBInstanceAlreadyExistsFaultError = TaggedException<DBInstanceAlreadyExistsFault>;
export type DBInstanceAutomatedBackupNotFoundFaultError = TaggedException<DBInstanceAutomatedBackupNotFoundFault>;
export type DBInstanceAutomatedBackupQuotaExceededFaultError = TaggedException<
  DBInstanceAutomatedBackupQuotaExceededFault
>;
export type DBInstanceNotFoundFaultError = TaggedException<DBInstanceNotFoundFault>;
export type DBInstanceNotReadyFaultError = TaggedException<DBInstanceNotReadyFault>;
export type DBInstanceRoleAlreadyExistsFaultError = TaggedException<DBInstanceRoleAlreadyExistsFault>;
export type DBInstanceRoleNotFoundFaultError = TaggedException<DBInstanceRoleNotFoundFault>;
export type DBInstanceRoleQuotaExceededFaultError = TaggedException<DBInstanceRoleQuotaExceededFault>;
export type DBLogFileNotFoundFaultError = TaggedException<DBLogFileNotFoundFault>;
export type DBParameterGroupAlreadyExistsFaultError = TaggedException<DBParameterGroupAlreadyExistsFault>;
export type DBParameterGroupNotFoundFaultError = TaggedException<DBParameterGroupNotFoundFault>;
export type DBParameterGroupQuotaExceededFaultError = TaggedException<DBParameterGroupQuotaExceededFault>;
export type DBProxyAlreadyExistsFaultError = TaggedException<DBProxyAlreadyExistsFault>;
export type DBProxyEndpointAlreadyExistsFaultError = TaggedException<DBProxyEndpointAlreadyExistsFault>;
export type DBProxyEndpointNotFoundFaultError = TaggedException<DBProxyEndpointNotFoundFault>;
export type DBProxyEndpointQuotaExceededFaultError = TaggedException<DBProxyEndpointQuotaExceededFault>;
export type DBProxyNotFoundFaultError = TaggedException<DBProxyNotFoundFault>;
export type DBProxyQuotaExceededFaultError = TaggedException<DBProxyQuotaExceededFault>;
export type DBProxyTargetAlreadyRegisteredFaultError = TaggedException<DBProxyTargetAlreadyRegisteredFault>;
export type DBProxyTargetGroupNotFoundFaultError = TaggedException<DBProxyTargetGroupNotFoundFault>;
export type DBProxyTargetNotFoundFaultError = TaggedException<DBProxyTargetNotFoundFault>;
export type DBSecurityGroupAlreadyExistsFaultError = TaggedException<DBSecurityGroupAlreadyExistsFault>;
export type DBSecurityGroupNotFoundFaultError = TaggedException<DBSecurityGroupNotFoundFault>;
export type DBSecurityGroupNotSupportedFaultError = TaggedException<DBSecurityGroupNotSupportedFault>;
export type DBSecurityGroupQuotaExceededFaultError = TaggedException<DBSecurityGroupQuotaExceededFault>;
export type DBShardGroupAlreadyExistsFaultError = TaggedException<DBShardGroupAlreadyExistsFault>;
export type DBShardGroupNotFoundFaultError = TaggedException<DBShardGroupNotFoundFault>;
export type DBSnapshotAlreadyExistsFaultError = TaggedException<DBSnapshotAlreadyExistsFault>;
export type DBSnapshotNotFoundFaultError = TaggedException<DBSnapshotNotFoundFault>;
export type DBSnapshotTenantDatabaseNotFoundFaultError = TaggedException<DBSnapshotTenantDatabaseNotFoundFault>;
export type DBSubnetGroupAlreadyExistsFaultError = TaggedException<DBSubnetGroupAlreadyExistsFault>;
export type DBSubnetGroupDoesNotCoverEnoughAZsError = TaggedException<DBSubnetGroupDoesNotCoverEnoughAZs>;
export type DBSubnetGroupNotAllowedFaultError = TaggedException<DBSubnetGroupNotAllowedFault>;
export type DBSubnetGroupNotFoundFaultError = TaggedException<DBSubnetGroupNotFoundFault>;
export type DBSubnetGroupQuotaExceededFaultError = TaggedException<DBSubnetGroupQuotaExceededFault>;
export type DBSubnetQuotaExceededFaultError = TaggedException<DBSubnetQuotaExceededFault>;
export type DBUpgradeDependencyFailureFaultError = TaggedException<DBUpgradeDependencyFailureFault>;
export type DomainNotFoundFaultError = TaggedException<DomainNotFoundFault>;
export type Ec2ImagePropertiesNotSupportedFaultError = TaggedException<Ec2ImagePropertiesNotSupportedFault>;
export type EventSubscriptionQuotaExceededFaultError = TaggedException<EventSubscriptionQuotaExceededFault>;
export type ExportTaskAlreadyExistsFaultError = TaggedException<ExportTaskAlreadyExistsFault>;
export type ExportTaskNotFoundFaultError = TaggedException<ExportTaskNotFoundFault>;
export type GlobalClusterAlreadyExistsFaultError = TaggedException<GlobalClusterAlreadyExistsFault>;
export type GlobalClusterNotFoundFaultError = TaggedException<GlobalClusterNotFoundFault>;
export type GlobalClusterQuotaExceededFaultError = TaggedException<GlobalClusterQuotaExceededFault>;
export type IamRoleMissingPermissionsFaultError = TaggedException<IamRoleMissingPermissionsFault>;
export type IamRoleNotFoundFaultError = TaggedException<IamRoleNotFoundFault>;
export type InstanceQuotaExceededFaultError = TaggedException<InstanceQuotaExceededFault>;
export type InsufficientAvailableIPsInSubnetFaultError = TaggedException<InsufficientAvailableIPsInSubnetFault>;
export type InsufficientDBClusterCapacityFaultError = TaggedException<InsufficientDBClusterCapacityFault>;
export type InsufficientDBInstanceCapacityFaultError = TaggedException<InsufficientDBInstanceCapacityFault>;
export type InsufficientStorageClusterCapacityFaultError = TaggedException<InsufficientStorageClusterCapacityFault>;
export type IntegrationAlreadyExistsFaultError = TaggedException<IntegrationAlreadyExistsFault>;
export type IntegrationConflictOperationFaultError = TaggedException<IntegrationConflictOperationFault>;
export type IntegrationNotFoundFaultError = TaggedException<IntegrationNotFoundFault>;
export type IntegrationQuotaExceededFaultError = TaggedException<IntegrationQuotaExceededFault>;
export type InvalidBlueGreenDeploymentStateFaultError = TaggedException<InvalidBlueGreenDeploymentStateFault>;
export type InvalidCustomDBEngineVersionStateFaultError = TaggedException<InvalidCustomDBEngineVersionStateFault>;
export type InvalidDBClusterAutomatedBackupStateFaultError = TaggedException<InvalidDBClusterAutomatedBackupStateFault>;
export type InvalidDBClusterCapacityFaultError = TaggedException<InvalidDBClusterCapacityFault>;
export type InvalidDBClusterEndpointStateFaultError = TaggedException<InvalidDBClusterEndpointStateFault>;
export type InvalidDBClusterSnapshotStateFaultError = TaggedException<InvalidDBClusterSnapshotStateFault>;
export type InvalidDBClusterStateFaultError = TaggedException<InvalidDBClusterStateFault>;
export type InvalidDBInstanceAutomatedBackupStateFaultError = TaggedException<
  InvalidDBInstanceAutomatedBackupStateFault
>;
export type InvalidDBInstanceStateFaultError = TaggedException<InvalidDBInstanceStateFault>;
export type InvalidDBParameterGroupStateFaultError = TaggedException<InvalidDBParameterGroupStateFault>;
export type InvalidDBProxyEndpointStateFaultError = TaggedException<InvalidDBProxyEndpointStateFault>;
export type InvalidDBProxyStateFaultError = TaggedException<InvalidDBProxyStateFault>;
export type InvalidDBSecurityGroupStateFaultError = TaggedException<InvalidDBSecurityGroupStateFault>;
export type InvalidDBShardGroupStateFaultError = TaggedException<InvalidDBShardGroupStateFault>;
export type InvalidDBSnapshotStateFaultError = TaggedException<InvalidDBSnapshotStateFault>;
export type InvalidDBSubnetGroupFaultError = TaggedException<InvalidDBSubnetGroupFault>;
export type InvalidDBSubnetGroupStateFaultError = TaggedException<InvalidDBSubnetGroupStateFault>;
export type InvalidDBSubnetStateFaultError = TaggedException<InvalidDBSubnetStateFault>;
export type InvalidEventSubscriptionStateFaultError = TaggedException<InvalidEventSubscriptionStateFault>;
export type InvalidExportOnlyFaultError = TaggedException<InvalidExportOnlyFault>;
export type InvalidExportSourceStateFaultError = TaggedException<InvalidExportSourceStateFault>;
export type InvalidExportTaskStateFaultError = TaggedException<InvalidExportTaskStateFault>;
export type InvalidGlobalClusterStateFaultError = TaggedException<InvalidGlobalClusterStateFault>;
export type InvalidIntegrationStateFaultError = TaggedException<InvalidIntegrationStateFault>;
export type InvalidOptionGroupStateFaultError = TaggedException<InvalidOptionGroupStateFault>;
export type InvalidResourceStateFaultError = TaggedException<InvalidResourceStateFault>;
export type InvalidRestoreFaultError = TaggedException<InvalidRestoreFault>;
export type InvalidS3BucketFaultError = TaggedException<InvalidS3BucketFault>;
export type InvalidSubnetError = TaggedException<InvalidSubnet>;
export type InvalidVPCNetworkStateFaultError = TaggedException<InvalidVPCNetworkStateFault>;
export type KMSKeyNotAccessibleFaultError = TaggedException<KMSKeyNotAccessibleFault>;
export type MaxDBShardGroupLimitReachedError = TaggedException<MaxDBShardGroupLimitReached>;
export type NetworkTypeNotSupportedError = TaggedException<NetworkTypeNotSupported>;
export type OptionGroupAlreadyExistsFaultError = TaggedException<OptionGroupAlreadyExistsFault>;
export type OptionGroupNotFoundFaultError = TaggedException<OptionGroupNotFoundFault>;
export type OptionGroupQuotaExceededFaultError = TaggedException<OptionGroupQuotaExceededFault>;
export type PointInTimeRestoreNotEnabledFaultError = TaggedException<PointInTimeRestoreNotEnabledFault>;
export type ProvisionedIopsNotAvailableInAZFaultError = TaggedException<ProvisionedIopsNotAvailableInAZFault>;
export type ReservedDBInstanceAlreadyExistsFaultError = TaggedException<ReservedDBInstanceAlreadyExistsFault>;
export type ReservedDBInstanceNotFoundFaultError = TaggedException<ReservedDBInstanceNotFoundFault>;
export type ReservedDBInstanceQuotaExceededFaultError = TaggedException<ReservedDBInstanceQuotaExceededFault>;
export type ReservedDBInstancesOfferingNotFoundFaultError = TaggedException<ReservedDBInstancesOfferingNotFoundFault>;
export type ResourceNotFoundFaultError = TaggedException<ResourceNotFoundFault>;
export type SNSInvalidTopicFaultError = TaggedException<SNSInvalidTopicFault>;
export type SNSNoAuthorizationFaultError = TaggedException<SNSNoAuthorizationFault>;
export type SNSTopicArnNotFoundFaultError = TaggedException<SNSTopicArnNotFoundFault>;
export type SharedSnapshotQuotaExceededFaultError = TaggedException<SharedSnapshotQuotaExceededFault>;
export type SnapshotQuotaExceededFaultError = TaggedException<SnapshotQuotaExceededFault>;
export type SourceClusterNotSupportedFaultError = TaggedException<SourceClusterNotSupportedFault>;
export type SourceDatabaseNotSupportedFaultError = TaggedException<SourceDatabaseNotSupportedFault>;
export type SourceNotFoundFaultError = TaggedException<SourceNotFoundFault>;
export type StorageQuotaExceededFaultError = TaggedException<StorageQuotaExceededFault>;
export type StorageTypeNotAvailableFaultError = TaggedException<StorageTypeNotAvailableFault>;
export type StorageTypeNotSupportedFaultError = TaggedException<StorageTypeNotSupportedFault>;
export type SubnetAlreadyInUseError = TaggedException<SubnetAlreadyInUse>;
export type SubscriptionAlreadyExistFaultError = TaggedException<SubscriptionAlreadyExistFault>;
export type SubscriptionCategoryNotFoundFaultError = TaggedException<SubscriptionCategoryNotFoundFault>;
export type SubscriptionNotFoundFaultError = TaggedException<SubscriptionNotFoundFault>;
export type TenantDatabaseAlreadyExistsFaultError = TaggedException<TenantDatabaseAlreadyExistsFault>;
export type TenantDatabaseNotFoundFaultError = TaggedException<TenantDatabaseNotFoundFault>;
export type TenantDatabaseQuotaExceededFaultError = TaggedException<TenantDatabaseQuotaExceededFault>;
export type UnsupportedDBEngineVersionFaultError = TaggedException<UnsupportedDBEngineVersionFault>;
export type VpcEncryptionControlViolationError = TaggedException<VpcEncryptionControlViolationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
