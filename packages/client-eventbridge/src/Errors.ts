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
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

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
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
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
export type ThrottlingError = TaggedException<ThrottlingException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
