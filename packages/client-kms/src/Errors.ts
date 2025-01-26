import type {
  AlreadyExistsException,
  CloudHsmClusterInUseException,
  CloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterNotActiveException,
  CloudHsmClusterNotFoundException,
  CloudHsmClusterNotRelatedException,
  ConflictException,
  CustomKeyStoreHasCMKsException,
  CustomKeyStoreInvalidStateException,
  CustomKeyStoreNameInUseException,
  CustomKeyStoreNotFoundException,
  DependencyTimeoutException,
  DisabledException,
  DryRunOperationException,
  ExpiredImportTokenException,
  IncorrectKeyException,
  IncorrectKeyMaterialException,
  IncorrectTrustAnchorException,
  InvalidAliasNameException,
  InvalidArnException,
  InvalidCiphertextException,
  InvalidGrantIdException,
  InvalidGrantTokenException,
  InvalidImportTokenException,
  InvalidKeyUsageException,
  InvalidMarkerException,
  KeyUnavailableException,
  KMSInternalException,
  KMSInvalidMacException,
  KMSInvalidSignatureException,
  KMSInvalidStateException,
  LimitExceededException,
  MalformedPolicyDocumentException,
  NotFoundException,
  TagException,
  UnsupportedOperationException,
  XksKeyAlreadyInUseException,
  XksKeyInvalidConfigurationException,
  XksKeyNotFoundException,
  XksProxyIncorrectAuthenticationCredentialException,
  XksProxyInvalidConfigurationException,
  XksProxyInvalidResponseException,
  XksProxyUriEndpointInUseException,
  XksProxyUriInUseException,
  XksProxyUriUnreachableException,
  XksProxyVpcEndpointServiceInUseException,
  XksProxyVpcEndpointServiceInvalidConfigurationException,
  XksProxyVpcEndpointServiceNotFoundException,
} from "@aws-sdk/client-kms";
import { Data } from "effect";

export const AllServiceErrors = [
  "AlreadyExistsException",
  "CloudHsmClusterInUseException",
  "CloudHsmClusterInvalidConfigurationException",
  "CloudHsmClusterNotActiveException",
  "CloudHsmClusterNotFoundException",
  "CloudHsmClusterNotRelatedException",
  "ConflictException",
  "CustomKeyStoreHasCMKsException",
  "CustomKeyStoreInvalidStateException",
  "CustomKeyStoreNameInUseException",
  "CustomKeyStoreNotFoundException",
  "DependencyTimeoutException",
  "DisabledException",
  "DryRunOperationException",
  "ExpiredImportTokenException",
  "IncorrectKeyException",
  "IncorrectKeyMaterialException",
  "IncorrectTrustAnchorException",
  "InvalidAliasNameException",
  "InvalidArnException",
  "InvalidCiphertextException",
  "InvalidGrantIdException",
  "InvalidGrantTokenException",
  "InvalidImportTokenException",
  "InvalidKeyUsageException",
  "InvalidMarkerException",
  "KMSInternalException",
  "KMSInvalidMacException",
  "KMSInvalidSignatureException",
  "KMSInvalidStateException",
  "KeyUnavailableException",
  "LimitExceededException",
  "MalformedPolicyDocumentException",
  "NotFoundException",
  "TagException",
  "UnsupportedOperationException",
  "XksKeyAlreadyInUseException",
  "XksKeyInvalidConfigurationException",
  "XksKeyNotFoundException",
  "XksProxyIncorrectAuthenticationCredentialException",
  "XksProxyInvalidConfigurationException",
  "XksProxyInvalidResponseException",
  "XksProxyUriEndpointInUseException",
  "XksProxyUriInUseException",
  "XksProxyUriUnreachableException",
  "XksProxyVpcEndpointServiceInUseException",
  "XksProxyVpcEndpointServiceInvalidConfigurationException",
  "XksProxyVpcEndpointServiceNotFoundException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AlreadyExistsError = TaggedException<AlreadyExistsException>;
export type CloudHsmClusterInUseError = TaggedException<CloudHsmClusterInUseException>;
export type CloudHsmClusterInvalidConfigurationError = TaggedException<CloudHsmClusterInvalidConfigurationException>;
export type CloudHsmClusterNotActiveError = TaggedException<CloudHsmClusterNotActiveException>;
export type CloudHsmClusterNotFoundError = TaggedException<CloudHsmClusterNotFoundException>;
export type CloudHsmClusterNotRelatedError = TaggedException<CloudHsmClusterNotRelatedException>;
export type ConflictError = TaggedException<ConflictException>;
export type CustomKeyStoreHasCMKsError = TaggedException<CustomKeyStoreHasCMKsException>;
export type CustomKeyStoreInvalidStateError = TaggedException<CustomKeyStoreInvalidStateException>;
export type CustomKeyStoreNameInUseError = TaggedException<CustomKeyStoreNameInUseException>;
export type CustomKeyStoreNotFoundError = TaggedException<CustomKeyStoreNotFoundException>;
export type DependencyTimeoutError = TaggedException<DependencyTimeoutException>;
export type DisabledError = TaggedException<DisabledException>;
export type DryRunOperationError = TaggedException<DryRunOperationException>;
export type ExpiredImportTokenError = TaggedException<ExpiredImportTokenException>;
export type IncorrectKeyError = TaggedException<IncorrectKeyException>;
export type IncorrectKeyMaterialError = TaggedException<IncorrectKeyMaterialException>;
export type IncorrectTrustAnchorError = TaggedException<IncorrectTrustAnchorException>;
export type InvalidAliasNameError = TaggedException<InvalidAliasNameException>;
export type InvalidArnError = TaggedException<InvalidArnException>;
export type InvalidCiphertextError = TaggedException<InvalidCiphertextException>;
export type InvalidGrantIdError = TaggedException<InvalidGrantIdException>;
export type InvalidGrantTokenError = TaggedException<InvalidGrantTokenException>;
export type InvalidImportTokenError = TaggedException<InvalidImportTokenException>;
export type InvalidKeyUsageError = TaggedException<InvalidKeyUsageException>;
export type InvalidMarkerError = TaggedException<InvalidMarkerException>;
export type KMSInternalError = TaggedException<KMSInternalException>;
export type KMSInvalidMacError = TaggedException<KMSInvalidMacException>;
export type KMSInvalidSignatureError = TaggedException<KMSInvalidSignatureException>;
export type KMSInvalidStateError = TaggedException<KMSInvalidStateException>;
export type KeyUnavailableError = TaggedException<KeyUnavailableException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MalformedPolicyDocumentError = TaggedException<MalformedPolicyDocumentException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type TagError = TaggedException<TagException>;
export type UnsupportedOperationError = TaggedException<UnsupportedOperationException>;
export type XksKeyAlreadyInUseError = TaggedException<XksKeyAlreadyInUseException>;
export type XksKeyInvalidConfigurationError = TaggedException<XksKeyInvalidConfigurationException>;
export type XksKeyNotFoundError = TaggedException<XksKeyNotFoundException>;
export type XksProxyIncorrectAuthenticationCredentialError = TaggedException<
  XksProxyIncorrectAuthenticationCredentialException
>;
export type XksProxyInvalidConfigurationError = TaggedException<XksProxyInvalidConfigurationException>;
export type XksProxyInvalidResponseError = TaggedException<XksProxyInvalidResponseException>;
export type XksProxyUriEndpointInUseError = TaggedException<XksProxyUriEndpointInUseException>;
export type XksProxyUriInUseError = TaggedException<XksProxyUriInUseException>;
export type XksProxyUriUnreachableError = TaggedException<XksProxyUriUnreachableException>;
export type XksProxyVpcEndpointServiceInUseError = TaggedException<XksProxyVpcEndpointServiceInUseException>;
export type XksProxyVpcEndpointServiceInvalidConfigurationError = TaggedException<
  XksProxyVpcEndpointServiceInvalidConfigurationException
>;
export type XksProxyVpcEndpointServiceNotFoundError = TaggedException<XksProxyVpcEndpointServiceNotFoundException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
