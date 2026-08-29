import type {
  AccessDeniedException,
  ConcurrentModificationException,
  ConflictException,
  DecryptionFailure,
  EncryptionFailure,
  InternalServerException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  RetryableConflictException,
  ServiceException,
  ServiceQuotaExceededException,
  SubscriptionRequiredException,
  ThrottledException,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
} from "@aws-sdk/client-bedrock-agentcore-control";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConcurrentModificationException",
  "ConflictException",
  "DecryptionFailure",
  "EncryptionFailure",
  "InternalServerException",
  "ResourceLimitExceededException",
  "ResourceNotFoundException",
  "RetryableConflictException",
  "ServiceException",
  "ServiceQuotaExceededException",
  "SubscriptionRequiredException",
  "ThrottledException",
  "ThrottlingException",
  "UnauthorizedException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type ConflictError = TaggedException<ConflictException>;
export type DecryptionError = TaggedException<DecryptionFailure>;
export type EncryptionError = TaggedException<EncryptionFailure>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ResourceLimitExceededError = TaggedException<ResourceLimitExceededException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type RetryableConflictError = TaggedException<RetryableConflictException>;
export type ServiceError = TaggedException<ServiceException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type SubscriptionRequiredError = TaggedException<SubscriptionRequiredException>;
export type ThrottledError = TaggedException<ThrottledException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
