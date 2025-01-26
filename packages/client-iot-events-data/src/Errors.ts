import type {
  InternalFailureException,
  InvalidRequestException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
} from "@aws-sdk/client-iot-events-data";
import { Data } from "effect";

export const AllServiceErrors = [
  "InternalFailureException",
  "InvalidRequestException",
  "ResourceNotFoundException",
  "ServiceUnavailableException",
  "ThrottlingException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type InternalFailureError = TaggedException<InternalFailureException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
