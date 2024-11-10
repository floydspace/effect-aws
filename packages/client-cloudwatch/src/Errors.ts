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
import { Data } from "effect";

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
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConcurrentModificationError =
  TaggedException<ConcurrentModificationException>;
export type DashboardInvalidInputError =
  TaggedException<DashboardInvalidInputException>;
export type DashboardNotFoundError =
  TaggedException<DashboardNotFoundException>;
export type InternalServiceFaultError = TaggedException<InternalServiceFault>;
export type InvalidFormatFaultError = TaggedException<InvalidFormatFault>;
export type InvalidNextTokenError = TaggedException<InvalidNextToken>;
export type InvalidParameterCombinationError =
  TaggedException<InvalidParameterCombinationException>;
export type InvalidParameterValueError =
  TaggedException<InvalidParameterValueException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type LimitExceededFaultError = TaggedException<LimitExceededFault>;
export type MissingRequiredParameterError =
  TaggedException<MissingRequiredParameterException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFound>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
