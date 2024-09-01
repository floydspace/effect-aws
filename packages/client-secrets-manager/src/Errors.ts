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
import * as Data from "effect/Data";

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
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type DecryptionError = TaggedException<DecryptionFailure>;
export type EncryptionError = TaggedException<EncryptionFailure>;
export type InternalServiceError = TaggedException<InternalServiceException>;
export type InvalidNextTokenError = TaggedException<InvalidNextTokenException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MalformedPolicyDocumentError =
  TaggedException<MalformedPolicyDocumentException>;
export type PreconditionNotMetError =
  TaggedException<PreconditionNotMetException>;
export type PublicPolicyError = TaggedException<PublicPolicyException>;
export type ResourceExistsError = TaggedException<ResourceExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
