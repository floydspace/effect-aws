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
import type { TaggedException } from "@effect-aws/commons";

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
] as const;

export type InternalFailureError = TaggedException<InternalFailureException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ResourceAlreadyExistsError = TaggedException<ResourceAlreadyExistsException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type UnsupportedOperationError = TaggedException<UnsupportedOperationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
