import type {
  AccessDeniedException,
  AttributeLimitExceededException,
  BlockedException,
  ClientException,
  ClusterContainsCapacityProviderException,
  ClusterContainsContainerInstancesException,
  ClusterContainsServicesException,
  ClusterContainsTasksException,
  ClusterNotFoundException,
  ConflictException,
  InvalidParameterException,
  LimitExceededException,
  MissingVersionException,
  NamespaceNotFoundException,
  NoUpdateAvailableException,
  PlatformTaskDefinitionIncompatibilityException,
  PlatformUnknownException,
  ResourceInUseException,
  ResourceNotFoundException,
  ServerException,
  ServiceDeploymentNotFoundException,
  ServiceNotActiveException,
  ServiceNotFoundException,
  TargetNotConnectedException,
  TargetNotFoundException,
  TaskSetNotFoundException,
  UnsupportedFeatureException,
  UpdateInProgressException,
} from "@aws-sdk/client-ecs";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "AttributeLimitExceededException",
  "BlockedException",
  "ClientException",
  "ClusterContainsCapacityProviderException",
  "ClusterContainsContainerInstancesException",
  "ClusterContainsServicesException",
  "ClusterContainsTasksException",
  "ClusterNotFoundException",
  "ConflictException",
  "InvalidParameterException",
  "LimitExceededException",
  "MissingVersionException",
  "NamespaceNotFoundException",
  "NoUpdateAvailableException",
  "PlatformTaskDefinitionIncompatibilityException",
  "PlatformUnknownException",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "ServerException",
  "ServiceDeploymentNotFoundException",
  "ServiceNotActiveException",
  "ServiceNotFoundException",
  "TargetNotConnectedException",
  "TargetNotFoundException",
  "TaskSetNotFoundException",
  "UnsupportedFeatureException",
  "UpdateInProgressException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type AttributeLimitExceededError = TaggedException<AttributeLimitExceededException>;
export type BlockedError = TaggedException<BlockedException>;
export type ClientError = TaggedException<ClientException>;
export type ClusterContainsCapacityProviderError = TaggedException<ClusterContainsCapacityProviderException>;
export type ClusterContainsContainerInstancesError = TaggedException<ClusterContainsContainerInstancesException>;
export type ClusterContainsServicesError = TaggedException<ClusterContainsServicesException>;
export type ClusterContainsTasksError = TaggedException<ClusterContainsTasksException>;
export type ClusterNotFoundError = TaggedException<ClusterNotFoundException>;
export type ConflictError = TaggedException<ConflictException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MissingVersionError = TaggedException<MissingVersionException>;
export type NamespaceNotFoundError = TaggedException<NamespaceNotFoundException>;
export type NoUpdateAvailableError = TaggedException<NoUpdateAvailableException>;
export type PlatformTaskDefinitionIncompatibilityError = TaggedException<
  PlatformTaskDefinitionIncompatibilityException
>;
export type PlatformUnknownError = TaggedException<PlatformUnknownException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServerError = TaggedException<ServerException>;
export type ServiceDeploymentNotFoundError = TaggedException<ServiceDeploymentNotFoundException>;
export type ServiceNotActiveError = TaggedException<ServiceNotActiveException>;
export type ServiceNotFoundError = TaggedException<ServiceNotFoundException>;
export type TargetNotConnectedError = TaggedException<TargetNotConnectedException>;
export type TargetNotFoundError = TaggedException<TargetNotFoundException>;
export type TaskSetNotFoundError = TaggedException<TaskSetNotFoundException>;
export type UnsupportedFeatureError = TaggedException<UnsupportedFeatureException>;
export type UpdateInProgressError = TaggedException<UpdateInProgressException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
