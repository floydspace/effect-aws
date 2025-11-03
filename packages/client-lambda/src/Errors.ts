import type {
  CodeSigningConfigNotFoundException,
  CodeStorageExceededException,
  CodeVerificationFailedException,
  EC2AccessDeniedException,
  EC2ThrottledException,
  EC2UnexpectedException,
  EFSIOException,
  EFSMountConnectivityException,
  EFSMountFailureException,
  EFSMountTimeoutException,
  ENILimitReachedException,
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
  PolicyLengthExceededException,
  PreconditionFailedException,
  ProvisionedConcurrencyConfigNotFoundException,
  RecursiveInvocationException,
  RequestTooLargeException,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  SerializedRequestEntityTooLargeException,
  ServiceException,
  SnapStartException,
  SnapStartNotReadyException,
  SnapStartTimeoutException,
  SubnetIPAddressLimitReachedException,
  TooManyRequestsException,
  UnsupportedMediaTypeException,
} from "@aws-sdk/client-lambda";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "CodeSigningConfigNotFoundException",
  "CodeStorageExceededException",
  "CodeVerificationFailedException",
  "EC2AccessDeniedException",
  "EC2ThrottledException",
  "EC2UnexpectedException",
  "EFSIOException",
  "EFSMountConnectivityException",
  "EFSMountFailureException",
  "EFSMountTimeoutException",
  "ENILimitReachedException",
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
  "PolicyLengthExceededException",
  "PreconditionFailedException",
  "ProvisionedConcurrencyConfigNotFoundException",
  "RecursiveInvocationException",
  "RequestTooLargeException",
  "ResourceConflictException",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "ResourceNotReadyException",
  "SerializedRequestEntityTooLargeException",
  "ServiceException",
  "SnapStartException",
  "SnapStartNotReadyException",
  "SnapStartTimeoutException",
  "SubnetIPAddressLimitReachedException",
  "TooManyRequestsException",
  "UnsupportedMediaTypeException",
] as const;

export type CodeSigningConfigNotFoundError = TaggedException<CodeSigningConfigNotFoundException>;
export type CodeStorageExceededError = TaggedException<CodeStorageExceededException>;
export type CodeVerificationFailedError = TaggedException<CodeVerificationFailedException>;
export type EC2AccessDeniedError = TaggedException<EC2AccessDeniedException>;
export type EC2ThrottledError = TaggedException<EC2ThrottledException>;
export type EC2UnexpectedError = TaggedException<EC2UnexpectedException>;
export type EFSIOError = TaggedException<EFSIOException>;
export type EFSMountConnectivityError = TaggedException<EFSMountConnectivityException>;
export type EFSMountFailureError = TaggedException<EFSMountFailureException>;
export type EFSMountTimeoutError = TaggedException<EFSMountTimeoutException>;
export type ENILimitReachedError = TaggedException<ENILimitReachedException>;
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
export type PolicyLengthExceededError = TaggedException<PolicyLengthExceededException>;
export type PreconditionFailedError = TaggedException<PreconditionFailedException>;
export type ProvisionedConcurrencyConfigNotFoundError = TaggedException<ProvisionedConcurrencyConfigNotFoundException>;
export type RecursiveInvocationError = TaggedException<RecursiveInvocationException>;
export type RequestTooLargeError = TaggedException<RequestTooLargeException>;
export type ResourceConflictError = TaggedException<ResourceConflictException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ResourceNotReadyError = TaggedException<ResourceNotReadyException>;
export type SerializedRequestEntityTooLargeError = TaggedException<SerializedRequestEntityTooLargeException>;
export type ServiceError = TaggedException<ServiceException>;
export type SnapStartError = TaggedException<SnapStartException>;
export type SnapStartNotReadyError = TaggedException<SnapStartNotReadyException>;
export type SnapStartTimeoutError = TaggedException<SnapStartTimeoutException>;
export type SubnetIPAddressLimitReachedError = TaggedException<SubnetIPAddressLimitReachedException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type UnsupportedMediaTypeError = TaggedException<UnsupportedMediaTypeException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
