import type {
  AccessDeniedException,
  ConflictException,
  DuplicateIdException,
  InternalServerException,
  InvalidInputException,
  ResourceNotFoundException,
  RetryableConflictException,
  RuntimeClientError as RuntimeClientException,
  ServiceException,
  ServiceQuotaExceededException,
  ThrottledException,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
} from "@aws-sdk/client-bedrock-agentcore";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConflictException",
  "DuplicateIdException",
  "InternalServerException",
  "InvalidInputException",
  "ResourceNotFoundException",
  "RetryableConflictException",
  "RuntimeClientError",
  "ServiceException",
  "ServiceQuotaExceededException",
  "ThrottledException",
  "ThrottlingException",
  "UnauthorizedException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConflictError = TaggedException<ConflictException>;
export type DuplicateIdError = TaggedException<DuplicateIdException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type InvalidInputError = TaggedException<InvalidInputException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type RetryableConflictError = TaggedException<RetryableConflictException>;
export type RuntimeClientError = TaggedException<RuntimeClientException>;
export type ServiceError = TaggedException<ServiceException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ThrottledError = TaggedException<ThrottledException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
