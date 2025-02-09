import type {
  ConflictException,
  InternalServerException,
  OcuLimitExceededException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ValidationException,
} from "@aws-sdk/client-opensearchserverless";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "ConflictException",
  "InternalServerException",
  "OcuLimitExceededException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ValidationException",
] as const;

export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type OcuLimitExceededError = TaggedException<OcuLimitExceededException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
