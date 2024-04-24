import type {
  APICallRateForCustomerExceededFault as SdkAPICallRateForCustomerExceededFault,
  AuthorizationAlreadyExistsFault as SdkAuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault as SdkAuthorizationNotFoundFault,
  CacheClusterAlreadyExistsFault as SdkCacheClusterAlreadyExistsFault,
  CacheClusterNotFoundFault as SdkCacheClusterNotFoundFault,
  CacheParameterGroupAlreadyExistsFault as SdkCacheParameterGroupAlreadyExistsFault,
  CacheParameterGroupNotFoundFault as SdkCacheParameterGroupNotFoundFault,
  CacheParameterGroupQuotaExceededFault as SdkCacheParameterGroupQuotaExceededFault,
  CacheSecurityGroupAlreadyExistsFault as SdkCacheSecurityGroupAlreadyExistsFault,
  CacheSecurityGroupNotFoundFault as SdkCacheSecurityGroupNotFoundFault,
  CacheSecurityGroupQuotaExceededFault as SdkCacheSecurityGroupQuotaExceededFault,
  CacheSubnetGroupAlreadyExistsFault as SdkCacheSubnetGroupAlreadyExistsFault,
  CacheSubnetGroupInUse as SdkCacheSubnetGroupInUse,
  CacheSubnetGroupNotFoundFault as SdkCacheSubnetGroupNotFoundFault,
  CacheSubnetGroupQuotaExceededFault as SdkCacheSubnetGroupQuotaExceededFault,
  CacheSubnetQuotaExceededFault as SdkCacheSubnetQuotaExceededFault,
  ClusterQuotaForCustomerExceededFault as SdkClusterQuotaForCustomerExceededFault,
  DefaultUserAssociatedToUserGroupFault as SdkDefaultUserAssociatedToUserGroupFault,
  DefaultUserRequired as SdkDefaultUserRequired,
  DuplicateUserNameFault as SdkDuplicateUserNameFault,
  GlobalReplicationGroupAlreadyExistsFault as SdkGlobalReplicationGroupAlreadyExistsFault,
  GlobalReplicationGroupNotFoundFault as SdkGlobalReplicationGroupNotFoundFault,
  InsufficientCacheClusterCapacityFault as SdkInsufficientCacheClusterCapacityFault,
  InvalidARNFault as SdkInvalidARNFault,
  InvalidCacheClusterStateFault as SdkInvalidCacheClusterStateFault,
  InvalidCacheParameterGroupStateFault as SdkInvalidCacheParameterGroupStateFault,
  InvalidCacheSecurityGroupStateFault as SdkInvalidCacheSecurityGroupStateFault,
  InvalidCredentialsException as SdkInvalidCredentialsException,
  InvalidGlobalReplicationGroupStateFault as SdkInvalidGlobalReplicationGroupStateFault,
  InvalidKMSKeyFault as SdkInvalidKMSKeyFault,
  InvalidParameterCombinationException as SdkInvalidParameterCombinationException,
  InvalidParameterValueException as SdkInvalidParameterValueException,
  InvalidReplicationGroupStateFault as SdkInvalidReplicationGroupStateFault,
  InvalidServerlessCacheSnapshotStateFault as SdkInvalidServerlessCacheSnapshotStateFault,
  InvalidServerlessCacheStateFault as SdkInvalidServerlessCacheStateFault,
  InvalidSnapshotStateFault as SdkInvalidSnapshotStateFault,
  InvalidSubnet as SdkInvalidSubnet,
  InvalidUserGroupStateFault as SdkInvalidUserGroupStateFault,
  InvalidUserStateFault as SdkInvalidUserStateFault,
  InvalidVPCNetworkStateFault as SdkInvalidVPCNetworkStateFault,
  NoOperationFault as SdkNoOperationFault,
  NodeGroupNotFoundFault as SdkNodeGroupNotFoundFault,
  NodeGroupsPerReplicationGroupQuotaExceededFault as SdkNodeGroupsPerReplicationGroupQuotaExceededFault,
  NodeQuotaForClusterExceededFault as SdkNodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault as SdkNodeQuotaForCustomerExceededFault,
  ReplicationGroupAlreadyExistsFault as SdkReplicationGroupAlreadyExistsFault,
  ReplicationGroupAlreadyUnderMigrationFault as SdkReplicationGroupAlreadyUnderMigrationFault,
  ReplicationGroupNotFoundFault as SdkReplicationGroupNotFoundFault,
  ReplicationGroupNotUnderMigrationFault as SdkReplicationGroupNotUnderMigrationFault,
  ReservedCacheNodeAlreadyExistsFault as SdkReservedCacheNodeAlreadyExistsFault,
  ReservedCacheNodeNotFoundFault as SdkReservedCacheNodeNotFoundFault,
  ReservedCacheNodeQuotaExceededFault as SdkReservedCacheNodeQuotaExceededFault,
  ReservedCacheNodesOfferingNotFoundFault as SdkReservedCacheNodesOfferingNotFoundFault,
  ServerlessCacheAlreadyExistsFault as SdkServerlessCacheAlreadyExistsFault,
  ServerlessCacheNotFoundFault as SdkServerlessCacheNotFoundFault,
  ServerlessCacheQuotaForCustomerExceededFault as SdkServerlessCacheQuotaForCustomerExceededFault,
  ServerlessCacheSnapshotAlreadyExistsFault as SdkServerlessCacheSnapshotAlreadyExistsFault,
  ServerlessCacheSnapshotNotFoundFault as SdkServerlessCacheSnapshotNotFoundFault,
  ServerlessCacheSnapshotQuotaExceededFault as SdkServerlessCacheSnapshotQuotaExceededFault,
  ServiceLinkedRoleNotFoundFault as SdkServiceLinkedRoleNotFoundFault,
  ServiceUpdateNotFoundFault as SdkServiceUpdateNotFoundFault,
  SnapshotAlreadyExistsFault as SdkSnapshotAlreadyExistsFault,
  SnapshotFeatureNotSupportedFault as SdkSnapshotFeatureNotSupportedFault,
  SnapshotNotFoundFault as SdkSnapshotNotFoundFault,
  SnapshotQuotaExceededFault as SdkSnapshotQuotaExceededFault,
  SubnetInUse as SdkSubnetInUse,
  SubnetNotAllowedFault as SdkSubnetNotAllowedFault,
  TagNotFoundFault as SdkTagNotFoundFault,
  TagQuotaPerResourceExceeded as SdkTagQuotaPerResourceExceeded,
  TestFailoverNotAvailableFault as SdkTestFailoverNotAvailableFault,
  UserAlreadyExistsFault as SdkUserAlreadyExistsFault,
  UserGroupAlreadyExistsFault as SdkUserGroupAlreadyExistsFault,
  UserGroupNotFoundFault as SdkUserGroupNotFoundFault,
  UserGroupQuotaExceededFault as SdkUserGroupQuotaExceededFault,
  UserNotFoundFault as SdkUserNotFoundFault,
  UserQuotaExceededFault as SdkUserQuotaExceededFault,
} from "@aws-sdk/client-elasticache";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type APICallRateForCustomerExceededFault =
  TaggedException<SdkAPICallRateForCustomerExceededFault>;
export type AuthorizationAlreadyExistsFault =
  TaggedException<SdkAuthorizationAlreadyExistsFault>;
export type AuthorizationNotFoundFault =
  TaggedException<SdkAuthorizationNotFoundFault>;
export type CacheClusterAlreadyExistsFault =
  TaggedException<SdkCacheClusterAlreadyExistsFault>;
export type CacheClusterNotFoundFault =
  TaggedException<SdkCacheClusterNotFoundFault>;
export type CacheParameterGroupAlreadyExistsFault =
  TaggedException<SdkCacheParameterGroupAlreadyExistsFault>;
export type CacheParameterGroupNotFoundFault =
  TaggedException<SdkCacheParameterGroupNotFoundFault>;
export type CacheParameterGroupQuotaExceededFault =
  TaggedException<SdkCacheParameterGroupQuotaExceededFault>;
export type CacheSecurityGroupAlreadyExistsFault =
  TaggedException<SdkCacheSecurityGroupAlreadyExistsFault>;
export type CacheSecurityGroupNotFoundFault =
  TaggedException<SdkCacheSecurityGroupNotFoundFault>;
export type CacheSecurityGroupQuotaExceededFault =
  TaggedException<SdkCacheSecurityGroupQuotaExceededFault>;
export type CacheSubnetGroupAlreadyExistsFault =
  TaggedException<SdkCacheSubnetGroupAlreadyExistsFault>;
export type CacheSubnetGroupInUse = TaggedException<SdkCacheSubnetGroupInUse>;
export type CacheSubnetGroupNotFoundFault =
  TaggedException<SdkCacheSubnetGroupNotFoundFault>;
export type CacheSubnetGroupQuotaExceededFault =
  TaggedException<SdkCacheSubnetGroupQuotaExceededFault>;
export type CacheSubnetQuotaExceededFault =
  TaggedException<SdkCacheSubnetQuotaExceededFault>;
export type ClusterQuotaForCustomerExceededFault =
  TaggedException<SdkClusterQuotaForCustomerExceededFault>;
export type DefaultUserAssociatedToUserGroupFault =
  TaggedException<SdkDefaultUserAssociatedToUserGroupFault>;
export type DefaultUserRequired = TaggedException<SdkDefaultUserRequired>;
export type DuplicateUserNameFault = TaggedException<SdkDuplicateUserNameFault>;
export type GlobalReplicationGroupAlreadyExistsFault =
  TaggedException<SdkGlobalReplicationGroupAlreadyExistsFault>;
export type GlobalReplicationGroupNotFoundFault =
  TaggedException<SdkGlobalReplicationGroupNotFoundFault>;
export type InsufficientCacheClusterCapacityFault =
  TaggedException<SdkInsufficientCacheClusterCapacityFault>;
export type InvalidARNFault = TaggedException<SdkInvalidARNFault>;
export type InvalidCacheClusterStateFault =
  TaggedException<SdkInvalidCacheClusterStateFault>;
export type InvalidCacheParameterGroupStateFault =
  TaggedException<SdkInvalidCacheParameterGroupStateFault>;
export type InvalidCacheSecurityGroupStateFault =
  TaggedException<SdkInvalidCacheSecurityGroupStateFault>;
export type InvalidCredentialsException =
  TaggedException<SdkInvalidCredentialsException>;
export type InvalidGlobalReplicationGroupStateFault =
  TaggedException<SdkInvalidGlobalReplicationGroupStateFault>;
export type InvalidKMSKeyFault = TaggedException<SdkInvalidKMSKeyFault>;
export type InvalidParameterCombinationException =
  TaggedException<SdkInvalidParameterCombinationException>;
export type InvalidParameterValueException =
  TaggedException<SdkInvalidParameterValueException>;
export type InvalidReplicationGroupStateFault =
  TaggedException<SdkInvalidReplicationGroupStateFault>;
export type InvalidServerlessCacheSnapshotStateFault =
  TaggedException<SdkInvalidServerlessCacheSnapshotStateFault>;
export type InvalidServerlessCacheStateFault =
  TaggedException<SdkInvalidServerlessCacheStateFault>;
export type InvalidSnapshotStateFault =
  TaggedException<SdkInvalidSnapshotStateFault>;
export type InvalidSubnet = TaggedException<SdkInvalidSubnet>;
export type InvalidUserGroupStateFault =
  TaggedException<SdkInvalidUserGroupStateFault>;
export type InvalidUserStateFault = TaggedException<SdkInvalidUserStateFault>;
export type InvalidVPCNetworkStateFault =
  TaggedException<SdkInvalidVPCNetworkStateFault>;
export type NoOperationFault = TaggedException<SdkNoOperationFault>;
export type NodeGroupNotFoundFault = TaggedException<SdkNodeGroupNotFoundFault>;
export type NodeGroupsPerReplicationGroupQuotaExceededFault =
  TaggedException<SdkNodeGroupsPerReplicationGroupQuotaExceededFault>;
export type NodeQuotaForClusterExceededFault =
  TaggedException<SdkNodeQuotaForClusterExceededFault>;
export type NodeQuotaForCustomerExceededFault =
  TaggedException<SdkNodeQuotaForCustomerExceededFault>;
export type ReplicationGroupAlreadyExistsFault =
  TaggedException<SdkReplicationGroupAlreadyExistsFault>;
export type ReplicationGroupAlreadyUnderMigrationFault =
  TaggedException<SdkReplicationGroupAlreadyUnderMigrationFault>;
export type ReplicationGroupNotFoundFault =
  TaggedException<SdkReplicationGroupNotFoundFault>;
export type ReplicationGroupNotUnderMigrationFault =
  TaggedException<SdkReplicationGroupNotUnderMigrationFault>;
export type ReservedCacheNodeAlreadyExistsFault =
  TaggedException<SdkReservedCacheNodeAlreadyExistsFault>;
export type ReservedCacheNodeNotFoundFault =
  TaggedException<SdkReservedCacheNodeNotFoundFault>;
export type ReservedCacheNodeQuotaExceededFault =
  TaggedException<SdkReservedCacheNodeQuotaExceededFault>;
export type ReservedCacheNodesOfferingNotFoundFault =
  TaggedException<SdkReservedCacheNodesOfferingNotFoundFault>;
export type ServerlessCacheAlreadyExistsFault =
  TaggedException<SdkServerlessCacheAlreadyExistsFault>;
export type ServerlessCacheNotFoundFault =
  TaggedException<SdkServerlessCacheNotFoundFault>;
export type ServerlessCacheQuotaForCustomerExceededFault =
  TaggedException<SdkServerlessCacheQuotaForCustomerExceededFault>;
export type ServerlessCacheSnapshotAlreadyExistsFault =
  TaggedException<SdkServerlessCacheSnapshotAlreadyExistsFault>;
export type ServerlessCacheSnapshotNotFoundFault =
  TaggedException<SdkServerlessCacheSnapshotNotFoundFault>;
export type ServerlessCacheSnapshotQuotaExceededFault =
  TaggedException<SdkServerlessCacheSnapshotQuotaExceededFault>;
export type ServiceLinkedRoleNotFoundFault =
  TaggedException<SdkServiceLinkedRoleNotFoundFault>;
export type ServiceUpdateNotFoundFault =
  TaggedException<SdkServiceUpdateNotFoundFault>;
export type SnapshotAlreadyExistsFault =
  TaggedException<SdkSnapshotAlreadyExistsFault>;
export type SnapshotFeatureNotSupportedFault =
  TaggedException<SdkSnapshotFeatureNotSupportedFault>;
export type SnapshotNotFoundFault = TaggedException<SdkSnapshotNotFoundFault>;
export type SnapshotQuotaExceededFault =
  TaggedException<SdkSnapshotQuotaExceededFault>;
export type SubnetInUse = TaggedException<SdkSubnetInUse>;
export type SubnetNotAllowedFault = TaggedException<SdkSubnetNotAllowedFault>;
export type TagNotFoundFault = TaggedException<SdkTagNotFoundFault>;
export type TagQuotaPerResourceExceeded =
  TaggedException<SdkTagQuotaPerResourceExceeded>;
export type TestFailoverNotAvailableFault =
  TaggedException<SdkTestFailoverNotAvailableFault>;
export type UserAlreadyExistsFault = TaggedException<SdkUserAlreadyExistsFault>;
export type UserGroupAlreadyExistsFault =
  TaggedException<SdkUserGroupAlreadyExistsFault>;
export type UserGroupNotFoundFault = TaggedException<SdkUserGroupNotFoundFault>;
export type UserGroupQuotaExceededFault =
  TaggedException<SdkUserGroupQuotaExceededFault>;
export type UserNotFoundFault = TaggedException<SdkUserNotFoundFault>;
export type UserQuotaExceededFault = TaggedException<SdkUserQuotaExceededFault>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
