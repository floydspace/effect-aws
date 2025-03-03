import type {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ModelErrorException,
  ModelNotReadyException,
  ModelStreamErrorException,
  ModelTimeoutException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  ThrottlingException,
  ValidationException,
} from "@aws-sdk/client-bedrock-runtime";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConflictException",
  "InternalServerException",
  "ModelErrorException",
  "ModelNotReadyException",
  "ModelStreamErrorException",
  "ModelTimeoutException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ServiceUnavailableException",
  "ThrottlingException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ModelError = TaggedException<ModelErrorException>;
export type ModelNotReadyError = TaggedException<ModelNotReadyException>;
export type ModelStreamError = TaggedException<ModelStreamErrorException>;
export type ModelTimeoutError = TaggedException<ModelTimeoutException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
