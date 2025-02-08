import type {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  TooManyRequestsException,
  ValidationException,
} from "@aws-sdk/client-account";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConflictException",
  "InternalServerException",
  "ResourceNotFoundException",
  "TooManyRequestsException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
