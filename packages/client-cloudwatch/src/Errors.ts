import type {
  ConcurrentModificationException,
  DashboardInvalidInputError as DashboardInvalidInputException,
  DashboardNotFoundError as DashboardNotFoundException,
  InternalServiceFault,
  InvalidFormatFault,
  InvalidNextToken,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  LimitExceededException,
  LimitExceededFault,
  MissingRequiredParameterException,
  ResourceNotFound,
  ResourceNotFoundException,
} from "@aws-sdk/client-cloudwatch";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "ConcurrentModificationException",
  "DashboardInvalidInputError",
  "DashboardNotFoundError",
  "InternalServiceFault",
  "InvalidFormatFault",
  "InvalidNextToken",
  "InvalidParameterCombinationException",
  "InvalidParameterValueException",
  "LimitExceededException",
  "LimitExceededFault",
  "MissingRequiredParameterException",
  "ResourceNotFound",
  "ResourceNotFoundException",
] as const;

export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type DashboardInvalidInputError = TaggedException<DashboardInvalidInputException>;
export type DashboardNotFoundError = TaggedException<DashboardNotFoundException>;
export type InternalServiceFaultError = TaggedException<InternalServiceFault>;
export type InvalidFormatFaultError = TaggedException<InvalidFormatFault>;
export type InvalidNextTokenError = TaggedException<InvalidNextToken>;
export type InvalidParameterCombinationError = TaggedException<InvalidParameterCombinationException>;
export type InvalidParameterValueError = TaggedException<InvalidParameterValueException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type LimitExceededFaultError = TaggedException<LimitExceededFault>;
export type MissingRequiredParameterError = TaggedException<MissingRequiredParameterException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFound>;
export type ResourceNotFoundExceptionError = TaggedException<ResourceNotFoundException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
