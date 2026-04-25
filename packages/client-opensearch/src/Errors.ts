import type {
  AccessDeniedException,
  BaseException,
  ConflictException,
  DependencyFailureException,
  DisabledOperationException,
  InternalException,
  InvalidPaginationTokenException,
  InvalidTypeException,
  LimitExceededException,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SlotNotAvailableException,
  ThrottlingException,
  ValidationException,
} from "@aws-sdk/client-opensearch";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "AccessDeniedException",
  "BaseException",
  "ConflictException",
  "DependencyFailureException",
  "DisabledOperationException",
  "InternalException",
  "InvalidPaginationTokenException",
  "InvalidTypeException",
  "LimitExceededException",
  "ResourceAlreadyExistsException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "SlotNotAvailableException",
  "ThrottlingException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type BaseError = TaggedException<BaseException>;
export type ConflictError = TaggedException<ConflictException>;
export type DependencyFailureError = TaggedException<DependencyFailureException>;
export type DisabledOperationError = TaggedException<DisabledOperationException>;
export type InternalError = TaggedException<InternalException>;
export type InvalidPaginationTokenError = TaggedException<InvalidPaginationTokenException>;
export type InvalidTypeError = TaggedException<InvalidTypeException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ResourceAlreadyExistsError = TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type SlotNotAvailableError = TaggedException<SlotNotAvailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
