import type {
  AccessDeniedException,
  ChannelNotBroadcasting,
  ConflictException,
  InternalServerException,
  PendingVerification,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  StreamUnavailable,
  ThrottlingException,
  ValidationException,
} from "@aws-sdk/client-ivs";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ChannelNotBroadcasting",
  "ConflictException",
  "InternalServerException",
  "PendingVerification",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "StreamUnavailable",
  "ThrottlingException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ChannelNotBroadcastingError = TaggedException<ChannelNotBroadcasting>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type PendingVerificationError = TaggedException<PendingVerification>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type StreamUnavailableError = TaggedException<StreamUnavailable>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
