import type {
  AccessDeniedException,
  ConcurrentModificationException,
  IllegalStatusException,
  InternalException,
  InvalidEventPatternException,
  InvalidStateException,
  LimitExceededException,
  ManagedRuleException,
  OperationDisabledException,
  PolicyLengthExceededException,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ThrottlingException,
} from "@aws-sdk/client-eventbridge";
import { Data } from "effect";

export const AllServiceErrors = [
  "AccessDeniedException",
  "ConcurrentModificationException",
  "IllegalStatusException",
  "InternalException",
  "InvalidEventPatternException",
  "InvalidStateException",
  "LimitExceededException",
  "ManagedRuleException",
  "OperationDisabledException",
  "PolicyLengthExceededException",
  "ResourceAlreadyExistsException",
  "ResourceNotFoundException",
  "ThrottlingException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type ConcurrentModificationError =
  TaggedException<ConcurrentModificationException>;
export type IllegalStatusError = TaggedException<IllegalStatusException>;
export type InternalError = TaggedException<InternalException>;
export type InvalidEventPatternError =
  TaggedException<InvalidEventPatternException>;
export type InvalidStateError = TaggedException<InvalidStateException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ManagedRuleError = TaggedException<ManagedRuleException>;
export type OperationDisabledError =
  TaggedException<OperationDisabledException>;
export type PolicyLengthExceededError =
  TaggedException<PolicyLengthExceededException>;
export type ResourceAlreadyExistsError =
  TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ThrottlingError = TaggedException<ThrottlingException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
