import type {
  AccessDeniedException,
  ConflictException,
  DataAlreadyAcceptedException,
  InvalidOperationException,
  InvalidParameterException,
  InvalidSequenceTokenException,
  LimitExceededException,
  MalformedQueryException,
  OperationAbortedException,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SessionStreamingException,
  SessionTimeoutException,
  ThrottlingException,
  TooManyTagsException,
  UnrecognizedClientException,
  ValidationException,
} from "@aws-sdk/client-cloudwatch-logs";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConflictException",
  "DataAlreadyAcceptedException",
  "InvalidOperationException",
  "InvalidParameterException",
  "InvalidSequenceTokenException",
  "LimitExceededException",
  "MalformedQueryException",
  "OperationAbortedException",
  "ResourceAlreadyExistsException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ServiceUnavailableException",
  "SessionStreamingException",
  "SessionTimeoutException",
  "ThrottlingException",
  "TooManyTagsException",
  "UnrecognizedClientException",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConflictError = TaggedException<ConflictException>;
export type DataAlreadyAcceptedError = TaggedException<DataAlreadyAcceptedException>;
export type InvalidOperationError = TaggedException<InvalidOperationException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidSequenceTokenError = TaggedException<InvalidSequenceTokenException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MalformedQueryError = TaggedException<MalformedQueryException>;
export type OperationAbortedError = TaggedException<OperationAbortedException>;
export type ResourceAlreadyExistsError = TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type SessionStreamingError = TaggedException<SessionStreamingException>;
export type SessionTimeoutError = TaggedException<SessionTimeoutException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type TooManyTagsError = TaggedException<TooManyTagsException>;
export type UnrecognizedClientError = TaggedException<UnrecognizedClientException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
