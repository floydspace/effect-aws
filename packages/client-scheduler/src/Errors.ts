import type {
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "@aws-sdk/client-scheduler";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "ConflictException",
  "InternalServerException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ThrottlingException",
  "ValidationException",
] as const;

export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
