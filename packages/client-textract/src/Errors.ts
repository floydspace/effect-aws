import type {
  AccessDeniedException,
  BadDocumentException,
  ConflictException,
  DocumentTooLargeException,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  InternalServerError as InternalServerException,
  InvalidJobIdException,
  InvalidKMSKeyException,
  InvalidParameterException,
  InvalidS3ObjectException,
  LimitExceededException,
  ProvisionedThroughputExceededException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  UnsupportedDocumentException,
  ValidationException,
} from "@aws-sdk/client-textract";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "BadDocumentException",
  "ConflictException",
  "DocumentTooLargeException",
  "HumanLoopQuotaExceededException",
  "IdempotentParameterMismatchException",
  "InternalServerError",
  "InvalidJobIdException",
  "InvalidKMSKeyException",
  "InvalidParameterException",
  "InvalidS3ObjectException",
  "LimitExceededException",
  "ProvisionedThroughputExceededException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ThrottlingException",
  "UnsupportedDocumentException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type BadDocumentError = TaggedException<BadDocumentException>;
export type ConflictError = TaggedException<ConflictException>;
export type DocumentTooLargeError = TaggedException<DocumentTooLargeException>;
export type HumanLoopQuotaExceededError = TaggedException<HumanLoopQuotaExceededException>;
export type IdempotentParameterMismatchError = TaggedException<IdempotentParameterMismatchException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type InvalidJobIdError = TaggedException<InvalidJobIdException>;
export type InvalidKMSKeyError = TaggedException<InvalidKMSKeyException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidS3ObjectError = TaggedException<InvalidS3ObjectException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ProvisionedThroughputExceededError = TaggedException<ProvisionedThroughputExceededException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type UnsupportedDocumentError = TaggedException<UnsupportedDocumentException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
