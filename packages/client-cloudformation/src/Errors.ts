import type {
  AlreadyExistsException,
  CFNRegistryException,
  ChangeSetNotFoundException,
  ConcurrentResourcesLimitExceededException,
  CreatedButModifiedException,
  GeneratedTemplateNotFoundException,
  HookResultNotFoundException,
  InsufficientCapabilitiesException,
  InvalidChangeSetStatusException,
  InvalidOperationException,
  InvalidStateTransitionException,
  LimitExceededException,
  NameAlreadyExistsException,
  OperationIdAlreadyExistsException,
  OperationInProgressException,
  OperationNotFoundException,
  OperationStatusCheckFailedException,
  ResourceScanInProgressException,
  ResourceScanLimitExceededException,
  ResourceScanNotFoundException,
  StackInstanceNotFoundException,
  StackNotFoundException,
  StackRefactorNotFoundException,
  StackSetNotEmptyException,
  StackSetNotFoundException,
  StaleRequestException,
  TokenAlreadyExistsException,
  TypeConfigurationNotFoundException,
  TypeNotFoundException,
} from "@aws-sdk/client-cloudformation";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AlreadyExistsException",
  "CFNRegistryException",
  "ChangeSetNotFoundException",
  "ConcurrentResourcesLimitExceededException",
  "CreatedButModifiedException",
  "GeneratedTemplateNotFoundException",
  "HookResultNotFoundException",
  "InsufficientCapabilitiesException",
  "InvalidChangeSetStatusException",
  "InvalidOperationException",
  "InvalidStateTransitionException",
  "LimitExceededException",
  "NameAlreadyExistsException",
  "OperationIdAlreadyExistsException",
  "OperationInProgressException",
  "OperationNotFoundException",
  "OperationStatusCheckFailedException",
  "ResourceScanInProgressException",
  "ResourceScanLimitExceededException",
  "ResourceScanNotFoundException",
  "StackInstanceNotFoundException",
  "StackNotFoundException",
  "StackRefactorNotFoundException",
  "StackSetNotEmptyException",
  "StackSetNotFoundException",
  "StaleRequestException",
  "TokenAlreadyExistsException",
  "TypeConfigurationNotFoundException",
  "TypeNotFoundException",
] as const;

export type AlreadyExistsError = TaggedException<AlreadyExistsException>;
export type CFNRegistryError = TaggedException<CFNRegistryException>;
export type ChangeSetNotFoundError = TaggedException<ChangeSetNotFoundException>;
export type ConcurrentResourcesLimitExceededError = TaggedException<ConcurrentResourcesLimitExceededException>;
export type CreatedButModifiedError = TaggedException<CreatedButModifiedException>;
export type GeneratedTemplateNotFoundError = TaggedException<GeneratedTemplateNotFoundException>;
export type HookResultNotFoundError = TaggedException<HookResultNotFoundException>;
export type InsufficientCapabilitiesError = TaggedException<InsufficientCapabilitiesException>;
export type InvalidChangeSetStatusError = TaggedException<InvalidChangeSetStatusException>;
export type InvalidOperationError = TaggedException<InvalidOperationException>;
export type InvalidStateTransitionError = TaggedException<InvalidStateTransitionException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type NameAlreadyExistsError = TaggedException<NameAlreadyExistsException>;
export type OperationIdAlreadyExistsError = TaggedException<OperationIdAlreadyExistsException>;
export type OperationInProgressError = TaggedException<OperationInProgressException>;
export type OperationNotFoundError = TaggedException<OperationNotFoundException>;
export type OperationStatusCheckFailedError = TaggedException<OperationStatusCheckFailedException>;
export type ResourceScanInProgressError = TaggedException<ResourceScanInProgressException>;
export type ResourceScanLimitExceededError = TaggedException<ResourceScanLimitExceededException>;
export type ResourceScanNotFoundError = TaggedException<ResourceScanNotFoundException>;
export type StackInstanceNotFoundError = TaggedException<StackInstanceNotFoundException>;
export type StackNotFoundError = TaggedException<StackNotFoundException>;
export type StackRefactorNotFoundError = TaggedException<StackRefactorNotFoundException>;
export type StackSetNotEmptyError = TaggedException<StackSetNotEmptyException>;
export type StackSetNotFoundError = TaggedException<StackSetNotFoundException>;
export type StaleRequestError = TaggedException<StaleRequestException>;
export type TokenAlreadyExistsError = TaggedException<TokenAlreadyExistsException>;
export type TypeConfigurationNotFoundError = TaggedException<TypeConfigurationNotFoundException>;
export type TypeNotFoundError = TaggedException<TypeNotFoundException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
