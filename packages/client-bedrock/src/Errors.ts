import type {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  ThrottlingException,
  TooManyTagsException,
  ValidationException,
} from "@aws-sdk/client-bedrock";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConflictException",
  "InternalServerException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ServiceUnavailableException",
  "ThrottlingException",
  "TooManyTagsException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type TooManyTagsError = TaggedException<TooManyTagsException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
