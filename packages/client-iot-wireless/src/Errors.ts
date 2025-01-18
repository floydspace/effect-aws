import type {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  TooManyTagsException,
  ValidationException,
} from "@aws-sdk/client-iot-wireless";
import { Data } from "effect";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConflictException",
  "InternalServerException",
  "ResourceNotFoundException",
  "ThrottlingException",
  "TooManyTagsException",
  "ValidationException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type TooManyTagsError = TaggedException<TooManyTagsException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
