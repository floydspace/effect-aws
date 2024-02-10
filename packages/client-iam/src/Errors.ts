import type {
  ConcurrentModificationException,
  CredentialReportExpiredException,
  CredentialReportNotPresentException,
  CredentialReportNotReadyException,
  DeleteConflictException,
  DuplicateCertificateException,
  DuplicateSSHPublicKeyException,
  EntityAlreadyExistsException,
  EntityTemporarilyUnmodifiableException,
  IAMServiceException,
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
  PasswordPolicyViolationException,
  PolicyEvaluationException,
  PolicyNotAttachableException,
  ReportGenerationLimitExceededException,
  ServiceFailureException,
  ServiceNotSupportedException,
  UnmodifiableEntityException,
  UnrecognizedPublicKeyEncodingException,
} from "@aws-sdk/client-iam";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type InvalidInputError = TaggedException<InvalidInputException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type NoSuchEntityError = TaggedException<NoSuchEntityException>;
export type ServiceFailureError = TaggedException<ServiceFailureException>;
export type EntityAlreadyExistsError =
  TaggedException<EntityAlreadyExistsException>;
export type UnmodifiableEntityError =
  TaggedException<UnmodifiableEntityException>;
export type PolicyNotAttachableError =
  TaggedException<PolicyNotAttachableException>;
export type EntityTemporarilyUnmodifiableError =
  TaggedException<EntityTemporarilyUnmodifiableException>;
export type InvalidUserTypeError = TaggedException<InvalidUserTypeException>;
export type PasswordPolicyViolationError =
  TaggedException<PasswordPolicyViolationException>;
export type ConcurrentModificationError =
  TaggedException<ConcurrentModificationException>;
export type MalformedPolicyDocumentError =
  TaggedException<MalformedPolicyDocumentException>;
export type ServiceNotSupportedError =
  TaggedException<ServiceNotSupportedException>;
export type DeleteConflictError = TaggedException<DeleteConflictException>;
export type InvalidAuthenticationCodeError =
  TaggedException<InvalidAuthenticationCodeException>;
export type ReportGenerationLimitExceededError =
  TaggedException<ReportGenerationLimitExceededException>;
export type CredentialReportExpiredError =
  TaggedException<CredentialReportExpiredException>;
export type CredentialReportNotPresentError =
  TaggedException<CredentialReportNotPresentException>;
export type CredentialReportNotReadyError =
  TaggedException<CredentialReportNotReadyException>;
export type UnrecognizedPublicKeyEncodingError =
  TaggedException<UnrecognizedPublicKeyEncodingException>;
export type PolicyEvaluationError = TaggedException<PolicyEvaluationException>;
export type KeyPairMismatchError = TaggedException<KeyPairMismatchException>;
export type MalformedCertificateError =
  TaggedException<MalformedCertificateException>;
export type DuplicateCertificateError =
  TaggedException<DuplicateCertificateException>;
export type InvalidCertificateError =
  TaggedException<InvalidCertificateException>;
export type DuplicateSSHPublicKeyError =
  TaggedException<DuplicateSSHPublicKeyException>;
export type InvalidPublicKeyError = TaggedException<InvalidPublicKeyException>;

export type IAMServiceError = TaggedException<
  IAMServiceException & { name: "IAMServiceError" }
>;
export const IAMServiceError = Data.tagged<IAMServiceError>("IAMServiceError");
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
