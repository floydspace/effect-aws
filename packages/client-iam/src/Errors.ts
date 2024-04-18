import type {
  ConcurrentModificationException as SdkConcurrentModificationException,
  CredentialReportExpiredException as SdkCredentialReportExpiredException,
  CredentialReportNotPresentException as SdkCredentialReportNotPresentException,
  CredentialReportNotReadyException as SdkCredentialReportNotReadyException,
  DeleteConflictException as SdkDeleteConflictException,
  DuplicateCertificateException as SdkDuplicateCertificateException,
  DuplicateSSHPublicKeyException as SdkDuplicateSSHPublicKeyException,
  EntityAlreadyExistsException as SdkEntityAlreadyExistsException,
  EntityTemporarilyUnmodifiableException as SdkEntityTemporarilyUnmodifiableException,
  InvalidAuthenticationCodeException as SdkInvalidAuthenticationCodeException,
  InvalidCertificateException as SdkInvalidCertificateException,
  InvalidInputException as SdkInvalidInputException,
  InvalidPublicKeyException as SdkInvalidPublicKeyException,
  InvalidUserTypeException as SdkInvalidUserTypeException,
  KeyPairMismatchException as SdkKeyPairMismatchException,
  LimitExceededException as SdkLimitExceededException,
  MalformedCertificateException as SdkMalformedCertificateException,
  MalformedPolicyDocumentException as SdkMalformedPolicyDocumentException,
  NoSuchEntityException as SdkNoSuchEntityException,
  OpenIdIdpCommunicationErrorException as SdkOpenIdIdpCommunicationErrorException,
  PasswordPolicyViolationException as SdkPasswordPolicyViolationException,
  PolicyEvaluationException as SdkPolicyEvaluationException,
  PolicyNotAttachableException as SdkPolicyNotAttachableException,
  ReportGenerationLimitExceededException as SdkReportGenerationLimitExceededException,
  ServiceFailureException as SdkServiceFailureException,
  ServiceNotSupportedException as SdkServiceNotSupportedException,
  UnmodifiableEntityException as SdkUnmodifiableEntityException,
  UnrecognizedPublicKeyEncodingException as SdkUnrecognizedPublicKeyEncodingException,
} from "@aws-sdk/client-iam";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ConcurrentModificationException =
  TaggedException<SdkConcurrentModificationException>;
export type CredentialReportExpiredException =
  TaggedException<SdkCredentialReportExpiredException>;
export type CredentialReportNotPresentException =
  TaggedException<SdkCredentialReportNotPresentException>;
export type CredentialReportNotReadyException =
  TaggedException<SdkCredentialReportNotReadyException>;
export type DeleteConflictException =
  TaggedException<SdkDeleteConflictException>;
export type DuplicateCertificateException =
  TaggedException<SdkDuplicateCertificateException>;
export type DuplicateSSHPublicKeyException =
  TaggedException<SdkDuplicateSSHPublicKeyException>;
export type EntityAlreadyExistsException =
  TaggedException<SdkEntityAlreadyExistsException>;
export type EntityTemporarilyUnmodifiableException =
  TaggedException<SdkEntityTemporarilyUnmodifiableException>;
export type InvalidAuthenticationCodeException =
  TaggedException<SdkInvalidAuthenticationCodeException>;
export type InvalidCertificateException =
  TaggedException<SdkInvalidCertificateException>;
export type InvalidInputException = TaggedException<SdkInvalidInputException>;
export type InvalidPublicKeyException =
  TaggedException<SdkInvalidPublicKeyException>;
export type InvalidUserTypeException =
  TaggedException<SdkInvalidUserTypeException>;
export type KeyPairMismatchException =
  TaggedException<SdkKeyPairMismatchException>;
export type LimitExceededException = TaggedException<SdkLimitExceededException>;
export type MalformedCertificateException =
  TaggedException<SdkMalformedCertificateException>;
export type MalformedPolicyDocumentException =
  TaggedException<SdkMalformedPolicyDocumentException>;
export type NoSuchEntityException = TaggedException<SdkNoSuchEntityException>;
export type OpenIdIdpCommunicationErrorException =
  TaggedException<SdkOpenIdIdpCommunicationErrorException>;
export type PasswordPolicyViolationException =
  TaggedException<SdkPasswordPolicyViolationException>;
export type PolicyEvaluationException =
  TaggedException<SdkPolicyEvaluationException>;
export type PolicyNotAttachableException =
  TaggedException<SdkPolicyNotAttachableException>;
export type ReportGenerationLimitExceededException =
  TaggedException<SdkReportGenerationLimitExceededException>;
export type ServiceFailureException =
  TaggedException<SdkServiceFailureException>;
export type ServiceNotSupportedException =
  TaggedException<SdkServiceNotSupportedException>;
export type UnmodifiableEntityException =
  TaggedException<SdkUnmodifiableEntityException>;
export type UnrecognizedPublicKeyEncodingException =
  TaggedException<SdkUnrecognizedPublicKeyEncodingException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
