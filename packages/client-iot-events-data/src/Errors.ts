import type {
  InternalFailureException,
  InvalidRequestException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
} from "@aws-sdk/client-iot-events-data";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "InternalFailureException",
  "InvalidRequestException",
  "ResourceNotFoundException",
  "ServiceUnavailableException",
  "ThrottlingException",
] as const;

export type InternalFailureError = TaggedException<InternalFailureException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
