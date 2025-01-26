import type {
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
} from "@aws-sdk/client-cloudwatch-events";
import { Data } from "effect";

export const AllServiceErrors = [
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
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type IllegalStatusError = TaggedException<IllegalStatusException>;
export type InternalError = TaggedException<InternalException>;
export type InvalidEventPatternError = TaggedException<InvalidEventPatternException>;
export type InvalidStateError = TaggedException<InvalidStateException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ManagedRuleError = TaggedException<ManagedRuleException>;
export type OperationDisabledError = TaggedException<OperationDisabledException>;
export type PolicyLengthExceededError = TaggedException<PolicyLengthExceededException>;
export type ResourceAlreadyExistsError = TaggedException<ResourceAlreadyExistsException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
