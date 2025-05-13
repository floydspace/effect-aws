import type {
  CertificateConflictException,
  CertificateStateException,
  CertificateValidationException,
  ConflictException,
  ConflictingResourceUpdateException,
  DeleteConflictException,
  IndexNotReadyException,
  InternalException,
  InternalFailureException,
  InternalServerException,
  InvalidAggregationException,
  InvalidQueryException,
  InvalidRequestException,
  InvalidResponseException,
  InvalidStateTransitionException,
  LimitExceededException,
  MalformedPolicyException,
  NotConfiguredException,
  RegistrationCodeValidationException,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ResourceRegistrationFailureException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SqlParseException,
  TaskAlreadyExistsException,
  ThrottlingException,
  TransferAlreadyCompletedException,
  TransferConflictException,
  UnauthorizedException,
  ValidationException,
  VersionConflictException,
  VersionsLimitExceededException,
} from "@aws-sdk/client-iot";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "CertificateConflictException",
  "CertificateStateException",
  "CertificateValidationException",
  "ConflictException",
  "ConflictingResourceUpdateException",
  "DeleteConflictException",
  "IndexNotReadyException",
  "InternalException",
  "InternalFailureException",
  "InternalServerException",
  "InvalidAggregationException",
  "InvalidQueryException",
  "InvalidRequestException",
  "InvalidResponseException",
  "InvalidStateTransitionException",
  "LimitExceededException",
  "MalformedPolicyException",
  "NotConfiguredException",
  "RegistrationCodeValidationException",
  "ResourceAlreadyExistsException",
  "ResourceNotFoundException",
  "ResourceRegistrationFailureException",
  "ServiceQuotaExceededException",
  "ServiceUnavailableException",
  "SqlParseException",
  "TaskAlreadyExistsException",
  "ThrottlingException",
  "TransferAlreadyCompletedException",
  "TransferConflictException",
  "UnauthorizedException",
  "ValidationException",
  "VersionConflictException",
  "VersionsLimitExceededException",
] as const;

export type CertificateConflictError = TaggedException<CertificateConflictException>;
export type CertificateStateError = TaggedException<CertificateStateException>;
export type CertificateValidationError = TaggedException<CertificateValidationException>;
export type ConflictError = TaggedException<ConflictException>;
export type ConflictingResourceUpdateError = TaggedException<ConflictingResourceUpdateException>;
export type DeleteConflictError = TaggedException<DeleteConflictException>;
export type IndexNotReadyError = TaggedException<IndexNotReadyException>;
export type InternalError = TaggedException<InternalException>;
export type InternalFailureError = TaggedException<InternalFailureException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type InvalidAggregationError = TaggedException<InvalidAggregationException>;
export type InvalidQueryError = TaggedException<InvalidQueryException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type InvalidResponseError = TaggedException<InvalidResponseException>;
export type InvalidStateTransitionError = TaggedException<InvalidStateTransitionException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MalformedPolicyError = TaggedException<MalformedPolicyException>;
export type NotConfiguredError = TaggedException<NotConfiguredException>;
export type RegistrationCodeValidationError = TaggedException<RegistrationCodeValidationException>;
export type ResourceAlreadyExistsError = TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ResourceRegistrationFailureError = TaggedException<ResourceRegistrationFailureException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type SqlParseError = TaggedException<SqlParseException>;
export type TaskAlreadyExistsError = TaggedException<TaskAlreadyExistsException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type TransferAlreadyCompletedError = TaggedException<TransferAlreadyCompletedException>;
export type TransferConflictError = TaggedException<TransferConflictException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type ValidationError = TaggedException<ValidationException>;
export type VersionConflictError = TaggedException<VersionConflictException>;
export type VersionsLimitExceededError = TaggedException<VersionsLimitExceededException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
