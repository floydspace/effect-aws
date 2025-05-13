import type {
  DecryptionFailure,
  EncryptionFailure,
  InternalServiceError as InternalServiceException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidRequestException,
  LimitExceededException,
  MalformedPolicyDocumentException,
  PreconditionNotMetException,
  PublicPolicyException,
  ResourceExistsException,
  ResourceNotFoundException,
} from "@aws-sdk/client-secrets-manager";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "DecryptionFailure",
  "EncryptionFailure",
  "InternalServiceError",
  "InvalidNextTokenException",
  "InvalidParameterException",
  "InvalidRequestException",
  "LimitExceededException",
  "MalformedPolicyDocumentException",
  "PreconditionNotMetException",
  "PublicPolicyException",
  "ResourceExistsException",
  "ResourceNotFoundException",
] as const;

export type DecryptionError = TaggedException<DecryptionFailure>;
export type EncryptionError = TaggedException<EncryptionFailure>;
export type InternalServiceError = TaggedException<InternalServiceException>;
export type InvalidNextTokenError = TaggedException<InvalidNextTokenException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MalformedPolicyDocumentError = TaggedException<MalformedPolicyDocumentException>;
export type PreconditionNotMetError = TaggedException<PreconditionNotMetException>;
export type PublicPolicyError = TaggedException<PublicPolicyException>;
export type ResourceExistsError = TaggedException<ResourceExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
