import type {
  AccessDeniedException,
  ExpiredIteratorException,
  ExpiredNextTokenException,
  InternalFailureException,
  InvalidArgumentException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  LimitExceededException,
  ProvisionedThroughputExceededException,
  ResourceInUseException,
  ResourceNotFoundException,
  ValidationException,
} from "@aws-sdk/client-kinesis";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ExpiredIteratorException",
  "ExpiredNextTokenException",
  "InternalFailureException",
  "InvalidArgumentException",
  "KMSAccessDeniedException",
  "KMSDisabledException",
  "KMSInvalidStateException",
  "KMSNotFoundException",
  "KMSOptInRequired",
  "KMSThrottlingException",
  "LimitExceededException",
  "ProvisionedThroughputExceededException",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ExpiredIteratorError = TaggedException<ExpiredIteratorException>;
export type ExpiredNextTokenError = TaggedException<ExpiredNextTokenException>;
export type InternalFailureError = TaggedException<InternalFailureException>;
export type InvalidArgumentError = TaggedException<InvalidArgumentException>;
export type KMSAccessDeniedError = TaggedException<KMSAccessDeniedException>;
export type KMSDisabledError = TaggedException<KMSDisabledException>;
export type KMSInvalidStateError = TaggedException<KMSInvalidStateException>;
export type KMSNotFoundError = TaggedException<KMSNotFoundException>;
export type KMSOptInRequiredError = TaggedException<KMSOptInRequired>;
export type KMSThrottlingError = TaggedException<KMSThrottlingException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ProvisionedThroughputExceededError = TaggedException<ProvisionedThroughputExceededException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
