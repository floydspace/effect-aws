import type {
  ConflictException,
  InternalServerException,
  OcuLimitExceededException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ValidationException,
} from "@aws-sdk/client-opensearchserverless";
import { Data } from "effect";

export const AllServiceErrors = [
  "ConflictException",
  "InternalServerException",
  "OcuLimitExceededException",
  "ResourceNotFoundException",
  "ServiceQuotaExceededException",
  "ValidationException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type OcuLimitExceededError = TaggedException<OcuLimitExceededException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
