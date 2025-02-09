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
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "BaseException",
  "DisabledOperationException",
  "InternalException",
  "InvalidTypeException",
  "LimitExceededException",
  "ResourceAlreadyExistsException",
  "ResourceNotFoundException",
  "ValidationException",
] as const;

export type BaseError = TaggedException<BaseException>;
export type DisabledOperationError = TaggedException<DisabledOperationException>;
export type InternalError = TaggedException<InternalException>;
export type InvalidTypeError = TaggedException<InvalidTypeException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ResourceAlreadyExistsError = TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
