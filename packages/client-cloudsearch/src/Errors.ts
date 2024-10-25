import type {
  BaseException,
  DisabledOperationException,
  InternalException,
  InvalidTypeException,
  LimitExceededException,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ValidationException,
} from "@aws-sdk/client-cloudsearch";
import { Data } from "effect";

export const AllServiceErrors = [
  "BaseException",
  "DisabledOperationException",
  "InternalException",
  "InvalidTypeException",
  "LimitExceededException",
  "ResourceAlreadyExistsException",
  "ResourceNotFoundException",
  "ValidationException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type BaseError = TaggedException<BaseException>;
export type DisabledOperationError =
  TaggedException<DisabledOperationException>;
export type InternalError = TaggedException<InternalException>;
export type InvalidTypeError = TaggedException<InvalidTypeException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ResourceAlreadyExistsError =
  TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
