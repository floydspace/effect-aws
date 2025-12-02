import type {
  AccountNotManagementOrDelegatedAdministratorException,
  CallerIsNotManagementAccountException,
  ConcurrentModificationException,
  CredentialReportExpiredException,
  CredentialReportNotPresentException,
  CredentialReportNotReadyException,
  DeleteConflictException,
  DuplicateCertificateException,
  DuplicateSSHPublicKeyException,
  EntityAlreadyExistsException,
  EntityTemporarilyUnmodifiableException,
  FeatureDisabledException,
  FeatureEnabledException,
  InvalidAuthenticationCodeException,
  InvalidCertificateException,
  InvalidInputException,
  InvalidPublicKeyException,
  InvalidUserTypeException,
  KeyPairMismatchException,
  LimitExceededException,
  MalformedCertificateException,
  MalformedPolicyDocumentException,
  NoSuchEntityException,
  OpenIdIdpCommunicationErrorException,
  OrganizationNotFoundException,
  OrganizationNotInAllFeaturesModeException,
  PasswordPolicyViolationException,
  PolicyEvaluationException,
  PolicyNotAttachableException,
  ReportGenerationLimitExceededException,
  ServiceAccessNotEnabledException,
  ServiceFailureException,
  ServiceNotSupportedException,
  UnmodifiableEntityException,
  UnrecognizedPublicKeyEncodingException,
} from "@aws-sdk/client-iam";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccountNotManagementOrDelegatedAdministratorException",
  "CallerIsNotManagementAccountException",
  "ConcurrentModificationException",
  "CredentialReportExpiredException",
  "CredentialReportNotPresentException",
  "CredentialReportNotReadyException",
  "DeleteConflictException",
  "DuplicateCertificateException",
  "DuplicateSSHPublicKeyException",
  "EntityAlreadyExistsException",
  "EntityTemporarilyUnmodifiableException",
  "FeatureDisabledException",
  "FeatureEnabledException",
  "InvalidAuthenticationCodeException",
  "InvalidCertificateException",
  "InvalidInputException",
  "InvalidPublicKeyException",
  "InvalidUserTypeException",
  "KeyPairMismatchException",
  "LimitExceededException",
  "MalformedCertificateException",
  "MalformedPolicyDocumentException",
  "NoSuchEntityException",
  "OpenIdIdpCommunicationErrorException",
  "OrganizationNotFoundException",
  "OrganizationNotInAllFeaturesModeException",
  "PasswordPolicyViolationException",
  "PolicyEvaluationException",
  "PolicyNotAttachableException",
  "ReportGenerationLimitExceededException",
  "ServiceAccessNotEnabledException",
  "ServiceFailureException",
  "ServiceNotSupportedException",
  "UnmodifiableEntityException",
  "UnrecognizedPublicKeyEncodingException",
] as const;

export type AccountNotManagementOrDelegatedAdministratorError = TaggedException<
  AccountNotManagementOrDelegatedAdministratorException
>;
export type CallerIsNotManagementAccountError = TaggedException<CallerIsNotManagementAccountException>;
export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type CredentialReportExpiredError = TaggedException<CredentialReportExpiredException>;
export type CredentialReportNotPresentError = TaggedException<CredentialReportNotPresentException>;
export type CredentialReportNotReadyError = TaggedException<CredentialReportNotReadyException>;
export type DeleteConflictError = TaggedException<DeleteConflictException>;
export type DuplicateCertificateError = TaggedException<DuplicateCertificateException>;
export type DuplicateSSHPublicKeyError = TaggedException<DuplicateSSHPublicKeyException>;
export type EntityAlreadyExistsError = TaggedException<EntityAlreadyExistsException>;
export type EntityTemporarilyUnmodifiableError = TaggedException<EntityTemporarilyUnmodifiableException>;
export type FeatureDisabledError = TaggedException<FeatureDisabledException>;
export type FeatureEnabledError = TaggedException<FeatureEnabledException>;
export type InvalidAuthenticationCodeError = TaggedException<InvalidAuthenticationCodeException>;
export type InvalidCertificateError = TaggedException<InvalidCertificateException>;
export type InvalidInputError = TaggedException<InvalidInputException>;
export type InvalidPublicKeyError = TaggedException<InvalidPublicKeyException>;
export type InvalidUserTypeError = TaggedException<InvalidUserTypeException>;
export type KeyPairMismatchError = TaggedException<KeyPairMismatchException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MalformedCertificateError = TaggedException<MalformedCertificateException>;
export type MalformedPolicyDocumentError = TaggedException<MalformedPolicyDocumentException>;
export type NoSuchEntityError = TaggedException<NoSuchEntityException>;
export type OpenIdIdpCommunicationError = TaggedException<OpenIdIdpCommunicationErrorException>;
export type OrganizationNotFoundError = TaggedException<OrganizationNotFoundException>;
export type OrganizationNotInAllFeaturesModeError = TaggedException<OrganizationNotInAllFeaturesModeException>;
export type PasswordPolicyViolationError = TaggedException<PasswordPolicyViolationException>;
export type PolicyEvaluationError = TaggedException<PolicyEvaluationException>;
export type PolicyNotAttachableError = TaggedException<PolicyNotAttachableException>;
export type ReportGenerationLimitExceededError = TaggedException<ReportGenerationLimitExceededException>;
export type ServiceAccessNotEnabledError = TaggedException<ServiceAccessNotEnabledException>;
export type ServiceFailureError = TaggedException<ServiceFailureException>;
export type ServiceNotSupportedError = TaggedException<ServiceNotSupportedException>;
export type UnmodifiableEntityError = TaggedException<UnmodifiableEntityException>;
export type UnrecognizedPublicKeyEncodingError = TaggedException<UnrecognizedPublicKeyEncodingException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
