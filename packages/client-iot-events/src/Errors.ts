import type {
  InternalFailureException,
  InvalidRequestException,
  LimitExceededException,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  UnsupportedOperationException,
} from "@aws-sdk/client-iot-events";
import { Data } from "effect";

export const AllServiceErrors = [
  "InternalFailureException",
  "InvalidRequestException",
  "LimitExceededException",
  "ResourceAlreadyExistsException",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "ServiceUnavailableException",
  "ThrottlingException",
  "UnsupportedOperationException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type InternalFailureError = TaggedException<InternalFailureException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ResourceAlreadyExistsError =
  TaggedException<ResourceAlreadyExistsException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceUnavailableError =
  TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type UnsupportedOperationError =
  TaggedException<UnsupportedOperationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
