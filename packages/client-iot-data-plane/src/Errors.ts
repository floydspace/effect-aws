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
import type { TaggedException } from "@effect-aws/commons";

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
] as const;

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
