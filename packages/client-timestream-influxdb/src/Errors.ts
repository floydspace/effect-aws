import type {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "@aws-sdk/client-timestream-influxdb";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConflictException",
  "InternalServerException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ThrottlingException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
