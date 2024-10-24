import type { ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException } from "@aws-sdk/client-scheduler";
import { Data } from "effect";

export const AllServiceErrors = ["ConflictException", "InternalServerException", "ResourceNotFoundException", "ServiceQuotaExceededException", "ThrottlingException", "ValidationException"];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
