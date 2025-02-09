import type {
  APICallRateForCustomerExceededFault,
  AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault,
  CacheClusterAlreadyExistsFault,
  CacheClusterNotFoundFault,
  CacheParameterGroupAlreadyExistsFault,
  CacheParameterGroupNotFoundFault,
  CacheParameterGroupQuotaExceededFault,
  CacheSecurityGroupAlreadyExistsFault,
  CacheSecurityGroupNotFoundFault,
  CacheSecurityGroupQuotaExceededFault,
  CacheSubnetGroupAlreadyExistsFault,
  CacheSubnetGroupInUse,
  CacheSubnetGroupNotFoundFault,
  CacheSubnetGroupQuotaExceededFault,
  CacheSubnetQuotaExceededFault,
  ClusterQuotaForCustomerExceededFault,
  DefaultUserAssociatedToUserGroupFault,
  DefaultUserRequired,
  DuplicateUserNameFault,
  GlobalReplicationGroupAlreadyExistsFault,
  GlobalReplicationGroupNotFoundFault,
  InsufficientCacheClusterCapacityFault,
  InvalidARNFault,
  InvalidCacheClusterStateFault,
  InvalidCacheParameterGroupStateFault,
  InvalidCacheSecurityGroupStateFault,
  InvalidCredentialsException,
  InvalidGlobalReplicationGroupStateFault,
  InvalidKMSKeyFault,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  InvalidReplicationGroupStateFault,
  InvalidServerlessCacheSnapshotStateFault,
  InvalidServerlessCacheStateFault,
  InvalidSnapshotStateFault,
  InvalidSubnet,
  InvalidUserGroupStateFault,
  InvalidUserStateFault,
  InvalidVPCNetworkStateFault,
  NodeGroupNotFoundFault,
  NodeGroupsPerReplicationGroupQuotaExceededFault,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NoOperationFault,
  ReplicationGroupAlreadyExistsFault,
  ReplicationGroupAlreadyUnderMigrationFault,
  ReplicationGroupNotFoundFault,
  ReplicationGroupNotUnderMigrationFault,
  ReservedCacheNodeAlreadyExistsFault,
  ReservedCacheNodeNotFoundFault,
  ReservedCacheNodeQuotaExceededFault,
  ReservedCacheNodesOfferingNotFoundFault,
  ServerlessCacheAlreadyExistsFault,
  ServerlessCacheNotFoundFault,
  ServerlessCacheQuotaForCustomerExceededFault,
  ServerlessCacheSnapshotAlreadyExistsFault,
  ServerlessCacheSnapshotNotFoundFault,
  ServerlessCacheSnapshotQuotaExceededFault,
  ServiceLinkedRoleNotFoundFault,
  ServiceUpdateNotFoundFault,
  SnapshotAlreadyExistsFault,
  SnapshotFeatureNotSupportedFault,
  SnapshotNotFoundFault,
  SnapshotQuotaExceededFault,
  SubnetInUse,
  SubnetNotAllowedFault,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TestFailoverNotAvailableFault,
  UserAlreadyExistsFault,
  UserGroupAlreadyExistsFault,
  UserGroupNotFoundFault,
  UserGroupQuotaExceededFault,
  UserNotFoundFault,
  UserQuotaExceededFault,
} from "@aws-sdk/client-elasticache";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "APICallRateForCustomerExceededFault",
  "AuthorizationAlreadyExistsFault",
  "AuthorizationNotFoundFault",
  "CacheClusterAlreadyExistsFault",
  "CacheClusterNotFoundFault",
  "CacheParameterGroupAlreadyExistsFault",
  "CacheParameterGroupNotFoundFault",
  "CacheParameterGroupQuotaExceededFault",
  "CacheSecurityGroupAlreadyExistsFault",
  "CacheSecurityGroupNotFoundFault",
  "CacheSecurityGroupQuotaExceededFault",
  "CacheSubnetGroupAlreadyExistsFault",
  "CacheSubnetGroupInUse",
  "CacheSubnetGroupNotFoundFault",
  "CacheSubnetGroupQuotaExceededFault",
  "CacheSubnetQuotaExceededFault",
  "ClusterQuotaForCustomerExceededFault",
  "DefaultUserAssociatedToUserGroupFault",
  "DefaultUserRequired",
  "DuplicateUserNameFault",
  "GlobalReplicationGroupAlreadyExistsFault",
  "GlobalReplicationGroupNotFoundFault",
  "InsufficientCacheClusterCapacityFault",
  "InvalidARNFault",
  "InvalidCacheClusterStateFault",
  "InvalidCacheParameterGroupStateFault",
  "InvalidCacheSecurityGroupStateFault",
  "InvalidCredentialsException",
  "InvalidGlobalReplicationGroupStateFault",
  "InvalidKMSKeyFault",
  "InvalidParameterCombinationException",
  "InvalidParameterValueException",
  "InvalidReplicationGroupStateFault",
  "InvalidServerlessCacheSnapshotStateFault",
  "InvalidServerlessCacheStateFault",
  "InvalidSnapshotStateFault",
  "InvalidSubnet",
  "InvalidUserGroupStateFault",
  "InvalidUserStateFault",
  "InvalidVPCNetworkStateFault",
  "NoOperationFault",
  "NodeGroupNotFoundFault",
  "NodeGroupsPerReplicationGroupQuotaExceededFault",
  "NodeQuotaForClusterExceededFault",
  "NodeQuotaForCustomerExceededFault",
  "ReplicationGroupAlreadyExistsFault",
  "ReplicationGroupAlreadyUnderMigrationFault",
  "ReplicationGroupNotFoundFault",
  "ReplicationGroupNotUnderMigrationFault",
  "ReservedCacheNodeAlreadyExistsFault",
  "ReservedCacheNodeNotFoundFault",
  "ReservedCacheNodeQuotaExceededFault",
  "ReservedCacheNodesOfferingNotFoundFault",
  "ServerlessCacheAlreadyExistsFault",
  "ServerlessCacheNotFoundFault",
  "ServerlessCacheQuotaForCustomerExceededFault",
  "ServerlessCacheSnapshotAlreadyExistsFault",
  "ServerlessCacheSnapshotNotFoundFault",
  "ServerlessCacheSnapshotQuotaExceededFault",
  "ServiceLinkedRoleNotFoundFault",
  "ServiceUpdateNotFoundFault",
  "SnapshotAlreadyExistsFault",
  "SnapshotFeatureNotSupportedFault",
  "SnapshotNotFoundFault",
  "SnapshotQuotaExceededFault",
  "SubnetInUse",
  "SubnetNotAllowedFault",
  "TagNotFoundFault",
  "TagQuotaPerResourceExceeded",
  "TestFailoverNotAvailableFault",
  "UserAlreadyExistsFault",
  "UserGroupAlreadyExistsFault",
  "UserGroupNotFoundFault",
  "UserGroupQuotaExceededFault",
  "UserNotFoundFault",
  "UserQuotaExceededFault",
] as const;

export type APICallRateForCustomerExceededFaultError = TaggedException<APICallRateForCustomerExceededFault>;
export type AuthorizationAlreadyExistsFaultError = TaggedException<AuthorizationAlreadyExistsFault>;
export type AuthorizationNotFoundFaultError = TaggedException<AuthorizationNotFoundFault>;
export type CacheClusterAlreadyExistsFaultError = TaggedException<CacheClusterAlreadyExistsFault>;
export type CacheClusterNotFoundFaultError = TaggedException<CacheClusterNotFoundFault>;
export type CacheParameterGroupAlreadyExistsFaultError = TaggedException<CacheParameterGroupAlreadyExistsFault>;
export type CacheParameterGroupNotFoundFaultError = TaggedException<CacheParameterGroupNotFoundFault>;
export type CacheParameterGroupQuotaExceededFaultError = TaggedException<CacheParameterGroupQuotaExceededFault>;
export type CacheSecurityGroupAlreadyExistsFaultError = TaggedException<CacheSecurityGroupAlreadyExistsFault>;
export type CacheSecurityGroupNotFoundFaultError = TaggedException<CacheSecurityGroupNotFoundFault>;
export type CacheSecurityGroupQuotaExceededFaultError = TaggedException<CacheSecurityGroupQuotaExceededFault>;
export type CacheSubnetGroupAlreadyExistsFaultError = TaggedException<CacheSubnetGroupAlreadyExistsFault>;
export type CacheSubnetGroupInUseError = TaggedException<CacheSubnetGroupInUse>;
export type CacheSubnetGroupNotFoundFaultError = TaggedException<CacheSubnetGroupNotFoundFault>;
export type CacheSubnetGroupQuotaExceededFaultError = TaggedException<CacheSubnetGroupQuotaExceededFault>;
export type CacheSubnetQuotaExceededFaultError = TaggedException<CacheSubnetQuotaExceededFault>;
export type ClusterQuotaForCustomerExceededFaultError = TaggedException<ClusterQuotaForCustomerExceededFault>;
export type DefaultUserAssociatedToUserGroupFaultError = TaggedException<DefaultUserAssociatedToUserGroupFault>;
export type DefaultUserRequiredError = TaggedException<DefaultUserRequired>;
export type DuplicateUserNameFaultError = TaggedException<DuplicateUserNameFault>;
export type GlobalReplicationGroupAlreadyExistsFaultError = TaggedException<GlobalReplicationGroupAlreadyExistsFault>;
export type GlobalReplicationGroupNotFoundFaultError = TaggedException<GlobalReplicationGroupNotFoundFault>;
export type InsufficientCacheClusterCapacityFaultError = TaggedException<InsufficientCacheClusterCapacityFault>;
export type InvalidARNFaultError = TaggedException<InvalidARNFault>;
export type InvalidCacheClusterStateFaultError = TaggedException<InvalidCacheClusterStateFault>;
export type InvalidCacheParameterGroupStateFaultError = TaggedException<InvalidCacheParameterGroupStateFault>;
export type InvalidCacheSecurityGroupStateFaultError = TaggedException<InvalidCacheSecurityGroupStateFault>;
export type InvalidCredentialsError = TaggedException<InvalidCredentialsException>;
export type InvalidGlobalReplicationGroupStateFaultError = TaggedException<InvalidGlobalReplicationGroupStateFault>;
export type InvalidKMSKeyFaultError = TaggedException<InvalidKMSKeyFault>;
export type InvalidParameterCombinationError = TaggedException<InvalidParameterCombinationException>;
export type InvalidParameterValueError = TaggedException<InvalidParameterValueException>;
export type InvalidReplicationGroupStateFaultError = TaggedException<InvalidReplicationGroupStateFault>;
export type InvalidServerlessCacheSnapshotStateFaultError = TaggedException<InvalidServerlessCacheSnapshotStateFault>;
export type InvalidServerlessCacheStateFaultError = TaggedException<InvalidServerlessCacheStateFault>;
export type InvalidSnapshotStateFaultError = TaggedException<InvalidSnapshotStateFault>;
export type InvalidSubnetError = TaggedException<InvalidSubnet>;
export type InvalidUserGroupStateFaultError = TaggedException<InvalidUserGroupStateFault>;
export type InvalidUserStateFaultError = TaggedException<InvalidUserStateFault>;
export type InvalidVPCNetworkStateFaultError = TaggedException<InvalidVPCNetworkStateFault>;
export type NoOperationFaultError = TaggedException<NoOperationFault>;
export type NodeGroupNotFoundFaultError = TaggedException<NodeGroupNotFoundFault>;
export type NodeGroupsPerReplicationGroupQuotaExceededFaultError = TaggedException<
  NodeGroupsPerReplicationGroupQuotaExceededFault
>;
export type NodeQuotaForClusterExceededFaultError = TaggedException<NodeQuotaForClusterExceededFault>;
export type NodeQuotaForCustomerExceededFaultError = TaggedException<NodeQuotaForCustomerExceededFault>;
export type ReplicationGroupAlreadyExistsFaultError = TaggedException<ReplicationGroupAlreadyExistsFault>;
export type ReplicationGroupAlreadyUnderMigrationFaultError = TaggedException<
  ReplicationGroupAlreadyUnderMigrationFault
>;
export type ReplicationGroupNotFoundFaultError = TaggedException<ReplicationGroupNotFoundFault>;
export type ReplicationGroupNotUnderMigrationFaultError = TaggedException<ReplicationGroupNotUnderMigrationFault>;
export type ReservedCacheNodeAlreadyExistsFaultError = TaggedException<ReservedCacheNodeAlreadyExistsFault>;
export type ReservedCacheNodeNotFoundFaultError = TaggedException<ReservedCacheNodeNotFoundFault>;
export type ReservedCacheNodeQuotaExceededFaultError = TaggedException<ReservedCacheNodeQuotaExceededFault>;
export type ReservedCacheNodesOfferingNotFoundFaultError = TaggedException<ReservedCacheNodesOfferingNotFoundFault>;
export type ServerlessCacheAlreadyExistsFaultError = TaggedException<ServerlessCacheAlreadyExistsFault>;
export type ServerlessCacheNotFoundFaultError = TaggedException<ServerlessCacheNotFoundFault>;
export type ServerlessCacheQuotaForCustomerExceededFaultError = TaggedException<
  ServerlessCacheQuotaForCustomerExceededFault
>;
export type ServerlessCacheSnapshotAlreadyExistsFaultError = TaggedException<ServerlessCacheSnapshotAlreadyExistsFault>;
export type ServerlessCacheSnapshotNotFoundFaultError = TaggedException<ServerlessCacheSnapshotNotFoundFault>;
export type ServerlessCacheSnapshotQuotaExceededFaultError = TaggedException<ServerlessCacheSnapshotQuotaExceededFault>;
export type ServiceLinkedRoleNotFoundFaultError = TaggedException<ServiceLinkedRoleNotFoundFault>;
export type ServiceUpdateNotFoundFaultError = TaggedException<ServiceUpdateNotFoundFault>;
export type SnapshotAlreadyExistsFaultError = TaggedException<SnapshotAlreadyExistsFault>;
export type SnapshotFeatureNotSupportedFaultError = TaggedException<SnapshotFeatureNotSupportedFault>;
export type SnapshotNotFoundFaultError = TaggedException<SnapshotNotFoundFault>;
export type SnapshotQuotaExceededFaultError = TaggedException<SnapshotQuotaExceededFault>;
export type SubnetInUseError = TaggedException<SubnetInUse>;
export type SubnetNotAllowedFaultError = TaggedException<SubnetNotAllowedFault>;
export type TagNotFoundFaultError = TaggedException<TagNotFoundFault>;
export type TagQuotaPerResourceExceededError = TaggedException<TagQuotaPerResourceExceeded>;
export type TestFailoverNotAvailableFaultError = TaggedException<TestFailoverNotAvailableFault>;
export type UserAlreadyExistsFaultError = TaggedException<UserAlreadyExistsFault>;
export type UserGroupAlreadyExistsFaultError = TaggedException<UserGroupAlreadyExistsFault>;
export type UserGroupNotFoundFaultError = TaggedException<UserGroupNotFoundFault>;
export type UserGroupQuotaExceededFaultError = TaggedException<UserGroupQuotaExceededFault>;
export type UserNotFoundFaultError = TaggedException<UserNotFoundFault>;
export type UserQuotaExceededFaultError = TaggedException<UserQuotaExceededFault>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
