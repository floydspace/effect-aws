import type {
  CertificateValidationException,
  ConflictException,
  InternalServerException,
  InvalidRequestException,
  InvalidStateTransitionException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  TerminalStateException,
  ThrottlingException,
  ValidationException,
} from "@aws-sdk/client-iot-jobs-data-plane";
import { Data } from "effect";

export const AllServiceErrors = [
  "CertificateValidationException",
  "ConflictException",
  "InternalServerException",
  "InvalidRequestException",
  "InvalidStateTransitionException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ServiceUnavailableException",
  "TerminalStateException",
  "ThrottlingException",
  "ValidationException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type CertificateValidationError =
  TaggedException<CertificateValidationException>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type InvalidStateTransitionError =
  TaggedException<InvalidStateTransitionException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError =
  TaggedException<ServiceQuotaExceededException>;
export type ServiceUnavailableError =
  TaggedException<ServiceUnavailableException>;
export type TerminalStateError = TaggedException<TerminalStateException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
