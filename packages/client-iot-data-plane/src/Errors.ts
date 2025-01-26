import type {
  ConflictException,
  InternalFailureException,
  InvalidRequestException,
  MethodNotAllowedException,
  RequestEntityTooLargeException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  UnauthorizedException,
  UnsupportedDocumentEncodingException,
} from "@aws-sdk/client-iot-data-plane";
import { Data } from "effect";

export const AllServiceErrors = [
  "ConflictException",
  "InternalFailureException",
  "InvalidRequestException",
  "MethodNotAllowedException",
  "RequestEntityTooLargeException",
  "ResourceNotFoundException",
  "ServiceUnavailableException",
  "ThrottlingException",
  "UnauthorizedException",
  "UnsupportedDocumentEncodingException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConflictError = TaggedException<ConflictException>;
export type InternalFailureError = TaggedException<InternalFailureException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type MethodNotAllowedError = TaggedException<MethodNotAllowedException>;
export type RequestEntityTooLargeError = TaggedException<RequestEntityTooLargeException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type UnsupportedDocumentEncodingError = TaggedException<UnsupportedDocumentEncodingException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
