import type {
  AccessDeniedException,
  AccessDeniedForDependencyException,
  AccountAlreadyClosedException,
  AccountAlreadyRegisteredException,
  AccountNotFoundException,
  AccountNotRegisteredException,
  AccountOwnerNotVerifiedException,
  AlreadyInOrganizationException,
  AWSOrganizationsNotInUseException,
  ChildNotFoundException,
  ConcurrentModificationException,
  ConflictException,
  ConstraintViolationException,
  CreateAccountStatusNotFoundException,
  DestinationParentNotFoundException,
  DuplicateAccountException,
  DuplicateHandshakeException,
  DuplicateOrganizationalUnitException,
  DuplicatePolicyAttachmentException,
  DuplicatePolicyException,
  EffectivePolicyNotFoundException,
  FinalizingOrganizationException,
  HandshakeAlreadyInStateException,
  HandshakeConstraintViolationException,
  HandshakeNotFoundException,
  InvalidHandshakeTransitionException,
  InvalidInputException,
  InvalidResponsibilityTransferTransitionException,
  MalformedPolicyDocumentException,
  MasterCannotLeaveOrganizationException,
  OrganizationalUnitNotEmptyException,
  OrganizationalUnitNotFoundException,
  OrganizationNotEmptyException,
  ParentNotFoundException,
  PolicyChangesInProgressException,
  PolicyInUseException,
  PolicyNotAttachedException,
  PolicyNotFoundException,
  PolicyTypeAlreadyEnabledException,
  PolicyTypeNotAvailableForOrganizationException,
  PolicyTypeNotEnabledException,
  ResourcePolicyNotFoundException,
  ResponsibilityTransferAlreadyInStatusException,
  ResponsibilityTransferNotFoundException,
  RootNotFoundException,
  ServiceException,
  SourceParentNotFoundException,
  TargetNotFoundException,
  TooManyRequestsException,
  UnsupportedAPIEndpointException,
} from "@aws-sdk/client-organizations";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AWSOrganizationsNotInUseException",
  "AccessDeniedException",
  "AccessDeniedForDependencyException",
  "AccountAlreadyClosedException",
  "AccountAlreadyRegisteredException",
  "AccountNotFoundException",
  "AccountNotRegisteredException",
  "AccountOwnerNotVerifiedException",
  "AlreadyInOrganizationException",
  "ChildNotFoundException",
  "ConcurrentModificationException",
  "ConflictException",
  "ConstraintViolationException",
  "CreateAccountStatusNotFoundException",
  "DestinationParentNotFoundException",
  "DuplicateAccountException",
  "DuplicateHandshakeException",
  "DuplicateOrganizationalUnitException",
  "DuplicatePolicyAttachmentException",
  "DuplicatePolicyException",
  "EffectivePolicyNotFoundException",
  "FinalizingOrganizationException",
  "HandshakeAlreadyInStateException",
  "HandshakeConstraintViolationException",
  "HandshakeNotFoundException",
  "InvalidHandshakeTransitionException",
  "InvalidInputException",
  "InvalidResponsibilityTransferTransitionException",
  "MalformedPolicyDocumentException",
  "MasterCannotLeaveOrganizationException",
  "OrganizationNotEmptyException",
  "OrganizationalUnitNotEmptyException",
  "OrganizationalUnitNotFoundException",
  "ParentNotFoundException",
  "PolicyChangesInProgressException",
  "PolicyInUseException",
  "PolicyNotAttachedException",
  "PolicyNotFoundException",
  "PolicyTypeAlreadyEnabledException",
  "PolicyTypeNotAvailableForOrganizationException",
  "PolicyTypeNotEnabledException",
  "ResourcePolicyNotFoundException",
  "ResponsibilityTransferAlreadyInStatusException",
  "ResponsibilityTransferNotFoundException",
  "RootNotFoundException",
  "ServiceException",
  "SourceParentNotFoundException",
  "TargetNotFoundException",
  "TooManyRequestsException",
  "UnsupportedAPIEndpointException",
] as const;

export type AWSOrganizationsNotInUseError = TaggedException<AWSOrganizationsNotInUseException>;
export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type AccessDeniedForDependencyError = TaggedException<AccessDeniedForDependencyException>;
export type AccountAlreadyClosedError = TaggedException<AccountAlreadyClosedException>;
export type AccountAlreadyRegisteredError = TaggedException<AccountAlreadyRegisteredException>;
export type AccountNotFoundError = TaggedException<AccountNotFoundException>;
export type AccountNotRegisteredError = TaggedException<AccountNotRegisteredException>;
export type AccountOwnerNotVerifiedError = TaggedException<AccountOwnerNotVerifiedException>;
export type AlreadyInOrganizationError = TaggedException<AlreadyInOrganizationException>;
export type ChildNotFoundError = TaggedException<ChildNotFoundException>;
export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type ConflictError = TaggedException<ConflictException>;
export type ConstraintViolationError = TaggedException<ConstraintViolationException>;
export type CreateAccountStatusNotFoundError = TaggedException<CreateAccountStatusNotFoundException>;
export type DestinationParentNotFoundError = TaggedException<DestinationParentNotFoundException>;
export type DuplicateAccountError = TaggedException<DuplicateAccountException>;
export type DuplicateHandshakeError = TaggedException<DuplicateHandshakeException>;
export type DuplicateOrganizationalUnitError = TaggedException<DuplicateOrganizationalUnitException>;
export type DuplicatePolicyAttachmentError = TaggedException<DuplicatePolicyAttachmentException>;
export type DuplicatePolicyError = TaggedException<DuplicatePolicyException>;
export type EffectivePolicyNotFoundError = TaggedException<EffectivePolicyNotFoundException>;
export type FinalizingOrganizationError = TaggedException<FinalizingOrganizationException>;
export type HandshakeAlreadyInStateError = TaggedException<HandshakeAlreadyInStateException>;
export type HandshakeConstraintViolationError = TaggedException<HandshakeConstraintViolationException>;
export type HandshakeNotFoundError = TaggedException<HandshakeNotFoundException>;
export type InvalidHandshakeTransitionError = TaggedException<InvalidHandshakeTransitionException>;
export type InvalidInputError = TaggedException<InvalidInputException>;
export type InvalidResponsibilityTransferTransitionError = TaggedException<
  InvalidResponsibilityTransferTransitionException
>;
export type MalformedPolicyDocumentError = TaggedException<MalformedPolicyDocumentException>;
export type MasterCannotLeaveOrganizationError = TaggedException<MasterCannotLeaveOrganizationException>;
export type OrganizationNotEmptyError = TaggedException<OrganizationNotEmptyException>;
export type OrganizationalUnitNotEmptyError = TaggedException<OrganizationalUnitNotEmptyException>;
export type OrganizationalUnitNotFoundError = TaggedException<OrganizationalUnitNotFoundException>;
export type ParentNotFoundError = TaggedException<ParentNotFoundException>;
export type PolicyChangesInProgressError = TaggedException<PolicyChangesInProgressException>;
export type PolicyInUseError = TaggedException<PolicyInUseException>;
export type PolicyNotAttachedError = TaggedException<PolicyNotAttachedException>;
export type PolicyNotFoundError = TaggedException<PolicyNotFoundException>;
export type PolicyTypeAlreadyEnabledError = TaggedException<PolicyTypeAlreadyEnabledException>;
export type PolicyTypeNotAvailableForOrganizationError = TaggedException<
  PolicyTypeNotAvailableForOrganizationException
>;
export type PolicyTypeNotEnabledError = TaggedException<PolicyTypeNotEnabledException>;
export type ResourcePolicyNotFoundError = TaggedException<ResourcePolicyNotFoundException>;
export type ResponsibilityTransferAlreadyInStatusError = TaggedException<
  ResponsibilityTransferAlreadyInStatusException
>;
export type ResponsibilityTransferNotFoundError = TaggedException<ResponsibilityTransferNotFoundException>;
export type RootNotFoundError = TaggedException<RootNotFoundException>;
export type ServiceError = TaggedException<ServiceException>;
export type SourceParentNotFoundError = TaggedException<SourceParentNotFoundException>;
export type TargetNotFoundError = TaggedException<TargetNotFoundException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type UnsupportedAPIEndpointError = TaggedException<UnsupportedAPIEndpointException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
