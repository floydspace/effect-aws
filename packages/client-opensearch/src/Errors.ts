import type {
  AccessDeniedException,
  BaseException,
  ConflictException,
  DependencyFailureException,
  DisabledOperationException,
  InternalException,
  InvalidPaginationTokenException,
  InvalidTypeException,
  LimitExceededException,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  SlotNotAvailableException,
  ValidationException,
} from "@aws-sdk/client-opensearch";
import { Data } from "effect";

export const AllServiceErrors = [
  "AccessDeniedException",
  "BaseException",
  "ConflictException",
  "DependencyFailureException",
  "DisabledOperationException",
  "InternalException",
  "InvalidPaginationTokenException",
  "InvalidTypeException",
  "LimitExceededException",
  "ResourceAlreadyExistsException",
  "ResourceNotFoundException",
  "SlotNotAvailableException",
  "ValidationException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type BaseError = TaggedException<BaseException>;
export type ConflictError = TaggedException<ConflictException>;
export type DependencyFailureError = TaggedException<DependencyFailureException>;
export type DisabledOperationError = TaggedException<DisabledOperationException>;
export type InternalError = TaggedException<InternalException>;
export type InvalidPaginationTokenError = TaggedException<InvalidPaginationTokenException>;
export type InvalidTypeError = TaggedException<InvalidTypeException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ResourceAlreadyExistsError = TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type SlotNotAvailableError = TaggedException<SlotNotAvailableException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
