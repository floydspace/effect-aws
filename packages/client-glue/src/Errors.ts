import type {
  AccessDeniedException,
  AlreadyExistsException,
  ColumnStatisticsTaskNotRunningException,
  ColumnStatisticsTaskRunningException,
  ColumnStatisticsTaskStoppingException,
  ConcurrentModificationException,
  ConcurrentRunsExceededException,
  ConditionCheckFailureException,
  ConflictException,
  CrawlerNotRunningException,
  CrawlerRunningException,
  CrawlerStoppingException,
  EntityNotFoundException,
  FederatedResourceAlreadyExistsException,
  FederationSourceException,
  FederationSourceRetryableException,
  GlueEncryptionException,
  IdempotentParameterMismatchException,
  IllegalBlueprintStateException,
  IllegalSessionStateException,
  IllegalWorkflowStateException,
  IntegrationConflictOperationFault,
  IntegrationNotFoundFault,
  IntegrationQuotaExceededFault,
  InternalServerException,
  InternalServiceException,
  InvalidInputException,
  InvalidIntegrationStateFault,
  InvalidStateException,
  KMSKeyNotAccessibleFault,
  MLTransformNotReadyException,
  NoScheduleException,
  OperationNotSupportedException,
  OperationTimeoutException,
  PermissionTypeMismatchException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  ResourceNumberLimitExceededException,
  SchedulerNotRunningException,
  SchedulerRunningException,
  SchedulerTransitioningException,
  TargetResourceNotFound,
  ThrottlingException,
  ValidationException,
  VersionMismatchException,
} from "@aws-sdk/client-glue";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "AlreadyExistsException",
  "ColumnStatisticsTaskNotRunningException",
  "ColumnStatisticsTaskRunningException",
  "ColumnStatisticsTaskStoppingException",
  "ConcurrentModificationException",
  "ConcurrentRunsExceededException",
  "ConditionCheckFailureException",
  "ConflictException",
  "CrawlerNotRunningException",
  "CrawlerRunningException",
  "CrawlerStoppingException",
  "EntityNotFoundException",
  "FederatedResourceAlreadyExistsException",
  "FederationSourceException",
  "FederationSourceRetryableException",
  "GlueEncryptionException",
  "IdempotentParameterMismatchException",
  "IllegalBlueprintStateException",
  "IllegalSessionStateException",
  "IllegalWorkflowStateException",
  "IntegrationConflictOperationFault",
  "IntegrationNotFoundFault",
  "IntegrationQuotaExceededFault",
  "InternalServerException",
  "InternalServiceException",
  "InvalidInputException",
  "InvalidIntegrationStateFault",
  "InvalidStateException",
  "KMSKeyNotAccessibleFault",
  "MLTransformNotReadyException",
  "NoScheduleException",
  "OperationNotSupportedException",
  "OperationTimeoutException",
  "PermissionTypeMismatchException",
  "ResourceNotFoundException",
  "ResourceNotReadyException",
  "ResourceNumberLimitExceededException",
  "SchedulerNotRunningException",
  "SchedulerRunningException",
  "SchedulerTransitioningException",
  "TargetResourceNotFound",
  "ThrottlingException",
  "ValidationException",
  "VersionMismatchException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type AlreadyExistsError = TaggedException<AlreadyExistsException>;
export type ColumnStatisticsTaskNotRunningError = TaggedException<ColumnStatisticsTaskNotRunningException>;
export type ColumnStatisticsTaskRunningError = TaggedException<ColumnStatisticsTaskRunningException>;
export type ColumnStatisticsTaskStoppingError = TaggedException<ColumnStatisticsTaskStoppingException>;
export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type ConcurrentRunsExceededError = TaggedException<ConcurrentRunsExceededException>;
export type ConditionCheckFailureError = TaggedException<ConditionCheckFailureException>;
export type ConflictError = TaggedException<ConflictException>;
export type CrawlerNotRunningError = TaggedException<CrawlerNotRunningException>;
export type CrawlerRunningError = TaggedException<CrawlerRunningException>;
export type CrawlerStoppingError = TaggedException<CrawlerStoppingException>;
export type EntityNotFoundError = TaggedException<EntityNotFoundException>;
export type FederatedResourceAlreadyExistsError = TaggedException<FederatedResourceAlreadyExistsException>;
export type FederationSourceError = TaggedException<FederationSourceException>;
export type FederationSourceRetryableError = TaggedException<FederationSourceRetryableException>;
export type GlueEncryptionError = TaggedException<GlueEncryptionException>;
export type IdempotentParameterMismatchError = TaggedException<IdempotentParameterMismatchException>;
export type IllegalBlueprintStateError = TaggedException<IllegalBlueprintStateException>;
export type IllegalSessionStateError = TaggedException<IllegalSessionStateException>;
export type IllegalWorkflowStateError = TaggedException<IllegalWorkflowStateException>;
export type IntegrationConflictOperationFaultError = TaggedException<IntegrationConflictOperationFault>;
export type IntegrationNotFoundFaultError = TaggedException<IntegrationNotFoundFault>;
export type IntegrationQuotaExceededFaultError = TaggedException<IntegrationQuotaExceededFault>;
export type InternalServerError = TaggedException<InternalServerException>;
export type InternalServiceError = TaggedException<InternalServiceException>;
export type InvalidInputError = TaggedException<InvalidInputException>;
export type InvalidIntegrationStateFaultError = TaggedException<InvalidIntegrationStateFault>;
export type InvalidStateError = TaggedException<InvalidStateException>;
export type KMSKeyNotAccessibleFaultError = TaggedException<KMSKeyNotAccessibleFault>;
export type MLTransformNotReadyError = TaggedException<MLTransformNotReadyException>;
export type NoScheduleError = TaggedException<NoScheduleException>;
export type OperationNotSupportedError = TaggedException<OperationNotSupportedException>;
export type OperationTimeoutError = TaggedException<OperationTimeoutException>;
export type PermissionTypeMismatchError = TaggedException<PermissionTypeMismatchException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ResourceNotReadyError = TaggedException<ResourceNotReadyException>;
export type ResourceNumberLimitExceededError = TaggedException<ResourceNumberLimitExceededException>;
export type SchedulerNotRunningError = TaggedException<SchedulerNotRunningException>;
export type SchedulerRunningError = TaggedException<SchedulerRunningException>;
export type SchedulerTransitioningError = TaggedException<SchedulerTransitioningException>;
export type TargetResourceNotFoundError = TaggedException<TargetResourceNotFound>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;
export type VersionMismatchError = TaggedException<VersionMismatchException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
