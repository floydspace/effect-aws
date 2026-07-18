import type {
  AliasLimitExceededException,
  CallbackTimeoutException,
  CapacityProviderLimitExceededException,
  CodeArtifactUserDeletedException,
  CodeArtifactUserFailedException,
  CodeArtifactUserPendingException,
  CodeSigningConfigNotFoundException,
  CodeStorageExceededException,
  CodeVerificationFailedException,
  DurableExecutionAlreadyStartedException,
  EC2AccessDeniedException,
  EC2ThrottledException,
  EC2UnexpectedException,
  EFSIOException,
  EFSMountConnectivityException,
  EFSMountFailureException,
  EFSMountTimeoutException,
  ENILimitReachedException,
  ENINotReadyException,
  FunctionVersionsPerCapacityProviderLimitExceededException,
  InvalidCodeSignatureException,
  InvalidParameterValueException,
  InvalidRequestContentException,
  InvalidRuntimeException,
  InvalidSecurityGroupIDException,
  InvalidSubnetIDException,
  InvalidZipFileException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  ModeNotSupportedException,
  NoPublishedVersionException,
  PolicyLengthExceededException,
  PreconditionFailedException,
  ProvisionedConcurrencyConfigNotFoundException,
  PublicPolicyException,
  RecursiveInvocationException,
  RequestTooLargeException,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  S3FilesMountConnectivityException,
  S3FilesMountFailureException,
  S3FilesMountTimeoutException,
  SerializedRequestEntityTooLargeException,
  ServiceException,
  ServiceQuotaExceededException,
  SnapStartException,
  SnapStartNotReadyException,
  SnapStartRegenerationFailureException,
  SnapStartTimeoutException,
  SubnetIPAddressLimitReachedException,
  TooManyRequestsException,
  UnsupportedMediaTypeException,
} from "@aws-sdk/client-lambda";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "AliasLimitExceededException",
  "CallbackTimeoutException",
  "CapacityProviderLimitExceededException",
  "CodeArtifactUserDeletedException",
  "CodeArtifactUserFailedException",
  "CodeArtifactUserPendingException",
  "CodeSigningConfigNotFoundException",
  "CodeStorageExceededException",
  "CodeVerificationFailedException",
  "DurableExecutionAlreadyStartedException",
  "EC2AccessDeniedException",
  "EC2ThrottledException",
  "EC2UnexpectedException",
  "EFSIOException",
  "EFSMountConnectivityException",
  "EFSMountFailureException",
  "EFSMountTimeoutException",
  "ENILimitReachedException",
  "ENINotReadyException",
  "FunctionVersionsPerCapacityProviderLimitExceededException",
  "InvalidCodeSignatureException",
  "InvalidParameterValueException",
  "InvalidRequestContentException",
  "InvalidRuntimeException",
  "InvalidSecurityGroupIDException",
  "InvalidSubnetIDException",
  "InvalidZipFileException",
  "KMSAccessDeniedException",
  "KMSDisabledException",
  "KMSInvalidStateException",
  "KMSNotFoundException",
  "ModeNotSupportedException",
  "NoPublishedVersionException",
  "PolicyLengthExceededException",
  "PreconditionFailedException",
  "ProvisionedConcurrencyConfigNotFoundException",
  "PublicPolicyException",
  "RecursiveInvocationException",
  "RequestTooLargeException",
  "ResourceConflictException",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "ResourceNotReadyException",
  "S3FilesMountConnectivityException",
  "S3FilesMountFailureException",
  "S3FilesMountTimeoutException",
  "SerializedRequestEntityTooLargeException",
  "ServiceException",
  "ServiceQuotaExceededException",
  "SnapStartException",
  "SnapStartNotReadyException",
  "SnapStartRegenerationFailureException",
  "SnapStartTimeoutException",
  "SubnetIPAddressLimitReachedException",
  "TooManyRequestsException",
  "UnsupportedMediaTypeException",
] as const;

export type AliasLimitExceededError = TaggedException<AliasLimitExceededException>;
export type CallbackTimeoutError = TaggedException<CallbackTimeoutException>;
export type CapacityProviderLimitExceededError = TaggedException<CapacityProviderLimitExceededException>;
export type CodeArtifactUserDeletedError = TaggedException<CodeArtifactUserDeletedException>;
export type CodeArtifactUserFailedError = TaggedException<CodeArtifactUserFailedException>;
export type CodeArtifactUserPendingError = TaggedException<CodeArtifactUserPendingException>;
export type CodeSigningConfigNotFoundError = TaggedException<CodeSigningConfigNotFoundException>;
export type CodeStorageExceededError = TaggedException<CodeStorageExceededException>;
export type CodeVerificationFailedError = TaggedException<CodeVerificationFailedException>;
export type DurableExecutionAlreadyStartedError = TaggedException<DurableExecutionAlreadyStartedException>;
export type EC2AccessDeniedError = TaggedException<EC2AccessDeniedException>;
export type EC2ThrottledError = TaggedException<EC2ThrottledException>;
export type EC2UnexpectedError = TaggedException<EC2UnexpectedException>;
export type EFSIOError = TaggedException<EFSIOException>;
export type EFSMountConnectivityError = TaggedException<EFSMountConnectivityException>;
export type EFSMountFailureError = TaggedException<EFSMountFailureException>;
export type EFSMountTimeoutError = TaggedException<EFSMountTimeoutException>;
export type ENILimitReachedError = TaggedException<ENILimitReachedException>;
export type ENINotReadyError = TaggedException<ENINotReadyException>;
export type FunctionVersionsPerCapacityProviderLimitExceededError = TaggedException<
  FunctionVersionsPerCapacityProviderLimitExceededException
>;
export type InvalidCodeSignatureError = TaggedException<InvalidCodeSignatureException>;
export type InvalidParameterValueError = TaggedException<InvalidParameterValueException>;
export type InvalidRequestContentError = TaggedException<InvalidRequestContentException>;
export type InvalidRuntimeError = TaggedException<InvalidRuntimeException>;
export type InvalidSecurityGroupIDError = TaggedException<InvalidSecurityGroupIDException>;
export type InvalidSubnetIDError = TaggedException<InvalidSubnetIDException>;
export type InvalidZipFileError = TaggedException<InvalidZipFileException>;
export type KMSAccessDeniedError = TaggedException<KMSAccessDeniedException>;
export type KMSDisabledError = TaggedException<KMSDisabledException>;
export type KMSInvalidStateError = TaggedException<KMSInvalidStateException>;
export type KMSNotFoundError = TaggedException<KMSNotFoundException>;
export type ModeNotSupportedError = TaggedException<ModeNotSupportedException>;
export type NoPublishedVersionError = TaggedException<NoPublishedVersionException>;
export type PolicyLengthExceededError = TaggedException<PolicyLengthExceededException>;
export type PreconditionFailedError = TaggedException<PreconditionFailedException>;
export type ProvisionedConcurrencyConfigNotFoundError = TaggedException<ProvisionedConcurrencyConfigNotFoundException>;
export type PublicPolicyError = TaggedException<PublicPolicyException>;
export type RecursiveInvocationError = TaggedException<RecursiveInvocationException>;
export type RequestTooLargeError = TaggedException<RequestTooLargeException>;
export type ResourceConflictError = TaggedException<ResourceConflictException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ResourceNotReadyError = TaggedException<ResourceNotReadyException>;
export type S3FilesMountConnectivityError = TaggedException<S3FilesMountConnectivityException>;
export type S3FilesMountFailureError = TaggedException<S3FilesMountFailureException>;
export type S3FilesMountTimeoutError = TaggedException<S3FilesMountTimeoutException>;
export type SerializedRequestEntityTooLargeError = TaggedException<SerializedRequestEntityTooLargeException>;
export type ServiceError = TaggedException<ServiceException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type SnapStartError = TaggedException<SnapStartException>;
export type SnapStartNotReadyError = TaggedException<SnapStartNotReadyException>;
export type SnapStartRegenerationFailureError = TaggedException<SnapStartRegenerationFailureException>;
export type SnapStartTimeoutError = TaggedException<SnapStartTimeoutException>;
export type SubnetIPAddressLimitReachedError = TaggedException<SubnetIPAddressLimitReachedException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type UnsupportedMediaTypeError = TaggedException<UnsupportedMediaTypeException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
