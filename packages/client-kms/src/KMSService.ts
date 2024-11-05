/**
 * @since 1.0.0
 */
import {
  KMSServiceException,
  CancelKeyDeletionCommand,
  type CancelKeyDeletionCommandInput,
  type CancelKeyDeletionCommandOutput,
  ConnectCustomKeyStoreCommand,
  type ConnectCustomKeyStoreCommandInput,
  type ConnectCustomKeyStoreCommandOutput,
  CreateAliasCommand,
  type CreateAliasCommandInput,
  type CreateAliasCommandOutput,
  CreateCustomKeyStoreCommand,
  type CreateCustomKeyStoreCommandInput,
  type CreateCustomKeyStoreCommandOutput,
  CreateGrantCommand,
  type CreateGrantCommandInput,
  type CreateGrantCommandOutput,
  CreateKeyCommand,
  type CreateKeyCommandInput,
  type CreateKeyCommandOutput,
  DecryptCommand,
  type DecryptCommandInput,
  type DecryptCommandOutput,
  DeleteAliasCommand,
  type DeleteAliasCommandInput,
  type DeleteAliasCommandOutput,
  DeleteCustomKeyStoreCommand,
  type DeleteCustomKeyStoreCommandInput,
  type DeleteCustomKeyStoreCommandOutput,
  DeleteImportedKeyMaterialCommand,
  type DeleteImportedKeyMaterialCommandInput,
  type DeleteImportedKeyMaterialCommandOutput,
  DeriveSharedSecretCommand,
  type DeriveSharedSecretCommandInput,
  type DeriveSharedSecretCommandOutput,
  DescribeCustomKeyStoresCommand,
  type DescribeCustomKeyStoresCommandInput,
  type DescribeCustomKeyStoresCommandOutput,
  DescribeKeyCommand,
  type DescribeKeyCommandInput,
  type DescribeKeyCommandOutput,
  DisableKeyCommand,
  type DisableKeyCommandInput,
  type DisableKeyCommandOutput,
  DisableKeyRotationCommand,
  type DisableKeyRotationCommandInput,
  type DisableKeyRotationCommandOutput,
  DisconnectCustomKeyStoreCommand,
  type DisconnectCustomKeyStoreCommandInput,
  type DisconnectCustomKeyStoreCommandOutput,
  EnableKeyCommand,
  type EnableKeyCommandInput,
  type EnableKeyCommandOutput,
  EnableKeyRotationCommand,
  type EnableKeyRotationCommandInput,
  type EnableKeyRotationCommandOutput,
  EncryptCommand,
  type EncryptCommandInput,
  type EncryptCommandOutput,
  GenerateDataKeyCommand,
  type GenerateDataKeyCommandInput,
  type GenerateDataKeyCommandOutput,
  GenerateDataKeyPairCommand,
  type GenerateDataKeyPairCommandInput,
  type GenerateDataKeyPairCommandOutput,
  GenerateDataKeyPairWithoutPlaintextCommand,
  type GenerateDataKeyPairWithoutPlaintextCommandInput,
  type GenerateDataKeyPairWithoutPlaintextCommandOutput,
  GenerateDataKeyWithoutPlaintextCommand,
  type GenerateDataKeyWithoutPlaintextCommandInput,
  type GenerateDataKeyWithoutPlaintextCommandOutput,
  GenerateMacCommand,
  type GenerateMacCommandInput,
  type GenerateMacCommandOutput,
  GenerateRandomCommand,
  type GenerateRandomCommandInput,
  type GenerateRandomCommandOutput,
  GetKeyPolicyCommand,
  type GetKeyPolicyCommandInput,
  type GetKeyPolicyCommandOutput,
  GetKeyRotationStatusCommand,
  type GetKeyRotationStatusCommandInput,
  type GetKeyRotationStatusCommandOutput,
  GetParametersForImportCommand,
  type GetParametersForImportCommandInput,
  type GetParametersForImportCommandOutput,
  GetPublicKeyCommand,
  type GetPublicKeyCommandInput,
  type GetPublicKeyCommandOutput,
  ImportKeyMaterialCommand,
  type ImportKeyMaterialCommandInput,
  type ImportKeyMaterialCommandOutput,
  ListAliasesCommand,
  type ListAliasesCommandInput,
  type ListAliasesCommandOutput,
  ListGrantsCommand,
  type ListGrantsCommandInput,
  type ListGrantsCommandOutput,
  ListKeyPoliciesCommand,
  type ListKeyPoliciesCommandInput,
  type ListKeyPoliciesCommandOutput,
  ListKeyRotationsCommand,
  type ListKeyRotationsCommandInput,
  type ListKeyRotationsCommandOutput,
  ListKeysCommand,
  type ListKeysCommandInput,
  type ListKeysCommandOutput,
  ListResourceTagsCommand,
  type ListResourceTagsCommandInput,
  type ListResourceTagsCommandOutput,
  ListRetirableGrantsCommand,
  type ListRetirableGrantsCommandInput,
  type ListRetirableGrantsCommandOutput,
  PutKeyPolicyCommand,
  type PutKeyPolicyCommandInput,
  type PutKeyPolicyCommandOutput,
  ReEncryptCommand,
  type ReEncryptCommandInput,
  type ReEncryptCommandOutput,
  ReplicateKeyCommand,
  type ReplicateKeyCommandInput,
  type ReplicateKeyCommandOutput,
  RetireGrantCommand,
  type RetireGrantCommandInput,
  type RetireGrantCommandOutput,
  RevokeGrantCommand,
  type RevokeGrantCommandInput,
  type RevokeGrantCommandOutput,
  RotateKeyOnDemandCommand,
  type RotateKeyOnDemandCommandInput,
  type RotateKeyOnDemandCommandOutput,
  ScheduleKeyDeletionCommand,
  type ScheduleKeyDeletionCommandInput,
  type ScheduleKeyDeletionCommandOutput,
  SignCommand,
  type SignCommandInput,
  type SignCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAliasCommand,
  type UpdateAliasCommandInput,
  type UpdateAliasCommandOutput,
  UpdateCustomKeyStoreCommand,
  type UpdateCustomKeyStoreCommandInput,
  type UpdateCustomKeyStoreCommandOutput,
  UpdateKeyDescriptionCommand,
  type UpdateKeyDescriptionCommandInput,
  type UpdateKeyDescriptionCommandOutput,
  UpdatePrimaryRegionCommand,
  type UpdatePrimaryRegionCommandInput,
  type UpdatePrimaryRegionCommandOutput,
  VerifyCommand,
  type VerifyCommandInput,
  type VerifyCommandOutput,
  VerifyMacCommand,
  type VerifyMacCommandInput,
  type VerifyMacCommandOutput,
} from "@aws-sdk/client-kms";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  AlreadyExistsError,
  CloudHsmClusterInUseError,
  CloudHsmClusterInvalidConfigurationError,
  CloudHsmClusterNotActiveError,
  CloudHsmClusterNotFoundError,
  CloudHsmClusterNotRelatedError,
  ConflictError,
  CustomKeyStoreHasCMKsError,
  CustomKeyStoreInvalidStateError,
  CustomKeyStoreNameInUseError,
  CustomKeyStoreNotFoundError,
  DependencyTimeoutError,
  DisabledError,
  DryRunOperationError,
  ExpiredImportTokenError,
  IncorrectKeyError,
  IncorrectKeyMaterialError,
  IncorrectTrustAnchorError,
  InvalidAliasNameError,
  InvalidArnError,
  InvalidCiphertextError,
  InvalidGrantIdError,
  InvalidGrantTokenError,
  InvalidImportTokenError,
  InvalidKeyUsageError,
  InvalidMarkerError,
  KMSInternalError,
  KMSInvalidMacError,
  KMSInvalidSignatureError,
  KMSInvalidStateError,
  KeyUnavailableError,
  LimitExceededError,
  MalformedPolicyDocumentError,
  NotFoundError,
  TagError,
  UnsupportedOperationError,
  XksKeyAlreadyInUseError,
  XksKeyInvalidConfigurationError,
  XksKeyNotFoundError,
  XksProxyIncorrectAuthenticationCredentialError,
  XksProxyInvalidConfigurationError,
  XksProxyInvalidResponseError,
  XksProxyUriEndpointInUseError,
  XksProxyUriInUseError,
  XksProxyUriUnreachableError,
  XksProxyVpcEndpointServiceInUseError,
  XksProxyVpcEndpointServiceInvalidConfigurationError,
  XksProxyVpcEndpointServiceNotFoundError,
  SdkError,
  TaggedException,
} from "./Errors";
import { KMSClientInstance, KMSClientInstanceLayer } from "./KMSClientInstance";
import { DefaultKMSClientConfigLayer } from "./KMSClientInstanceConfig";

/**
 * @since 1.0.1
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  CancelKeyDeletionCommand,
  ConnectCustomKeyStoreCommand,
  CreateAliasCommand,
  CreateCustomKeyStoreCommand,
  CreateGrantCommand,
  CreateKeyCommand,
  DecryptCommand,
  DeleteAliasCommand,
  DeleteCustomKeyStoreCommand,
  DeleteImportedKeyMaterialCommand,
  DeriveSharedSecretCommand,
  DescribeCustomKeyStoresCommand,
  DescribeKeyCommand,
  DisableKeyCommand,
  DisableKeyRotationCommand,
  DisconnectCustomKeyStoreCommand,
  EnableKeyCommand,
  EnableKeyRotationCommand,
  EncryptCommand,
  GenerateDataKeyCommand,
  GenerateDataKeyPairCommand,
  GenerateDataKeyPairWithoutPlaintextCommand,
  GenerateDataKeyWithoutPlaintextCommand,
  GenerateMacCommand,
  GenerateRandomCommand,
  GetKeyPolicyCommand,
  GetKeyRotationStatusCommand,
  GetParametersForImportCommand,
  GetPublicKeyCommand,
  ImportKeyMaterialCommand,
  ListAliasesCommand,
  ListGrantsCommand,
  ListKeyPoliciesCommand,
  ListKeyRotationsCommand,
  ListKeysCommand,
  ListResourceTagsCommand,
  ListRetirableGrantsCommand,
  PutKeyPolicyCommand,
  ReEncryptCommand,
  ReplicateKeyCommand,
  RetireGrantCommand,
  RevokeGrantCommand,
  RotateKeyOnDemandCommand,
  ScheduleKeyDeletionCommand,
  SignCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCustomKeyStoreCommand,
  UpdateKeyDescriptionCommand,
  UpdatePrimaryRegionCommand,
  VerifyCommand,
  VerifyMacCommand,
};

interface KMSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CancelKeyDeletionCommand}
   */
  cancelKeyDeletion(
    args: CancelKeyDeletionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelKeyDeletionCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link ConnectCustomKeyStoreCommand}
   */
  connectCustomKeyStore(
    args: ConnectCustomKeyStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConnectCustomKeyStoreCommandOutput,
    | SdkError
    | CloudHsmClusterInvalidConfigurationError
    | CloudHsmClusterNotActiveError
    | CustomKeyStoreInvalidStateError
    | CustomKeyStoreNotFoundError
    | KMSInternalError
  >;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAliasCommandOutput,
    | SdkError
    | AlreadyExistsError
    | DependencyTimeoutError
    | InvalidAliasNameError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | NotFoundError
  >;

  /**
   * @see {@link CreateCustomKeyStoreCommand}
   */
  createCustomKeyStore(
    args: CreateCustomKeyStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomKeyStoreCommandOutput,
    | SdkError
    | CloudHsmClusterInUseError
    | CloudHsmClusterInvalidConfigurationError
    | CloudHsmClusterNotActiveError
    | CloudHsmClusterNotFoundError
    | CustomKeyStoreNameInUseError
    | IncorrectTrustAnchorError
    | KMSInternalError
    | LimitExceededError
    | XksProxyIncorrectAuthenticationCredentialError
    | XksProxyInvalidConfigurationError
    | XksProxyInvalidResponseError
    | XksProxyUriEndpointInUseError
    | XksProxyUriInUseError
    | XksProxyUriUnreachableError
    | XksProxyVpcEndpointServiceInUseError
    | XksProxyVpcEndpointServiceInvalidConfigurationError
    | XksProxyVpcEndpointServiceNotFoundError
  >;

  /**
   * @see {@link CreateGrantCommand}
   */
  createGrant(
    args: CreateGrantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGrantCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidArnError
    | InvalidGrantTokenError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | NotFoundError
  >;

  /**
   * @see {@link CreateKeyCommand}
   */
  createKey(
    args: CreateKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateKeyCommandOutput,
    | SdkError
    | CloudHsmClusterInvalidConfigurationError
    | CustomKeyStoreInvalidStateError
    | CustomKeyStoreNotFoundError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | TagError
    | UnsupportedOperationError
    | XksKeyAlreadyInUseError
    | XksKeyInvalidConfigurationError
    | XksKeyNotFoundError
  >;

  /**
   * @see {@link DecryptCommand}
   */
  decrypt(
    args: DecryptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DecryptCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | IncorrectKeyError
    | InvalidCiphertextError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(
    args: DeleteAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAliasCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link DeleteCustomKeyStoreCommand}
   */
  deleteCustomKeyStore(
    args: DeleteCustomKeyStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomKeyStoreCommandOutput,
    | SdkError
    | CustomKeyStoreHasCMKsError
    | CustomKeyStoreInvalidStateError
    | CustomKeyStoreNotFoundError
    | KMSInternalError
  >;

  /**
   * @see {@link DeleteImportedKeyMaterialCommand}
   */
  deleteImportedKeyMaterial(
    args: DeleteImportedKeyMaterialCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteImportedKeyMaterialCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeriveSharedSecretCommand}
   */
  deriveSharedSecret(
    args: DeriveSharedSecretCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeriveSharedSecretCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link DescribeCustomKeyStoresCommand}
   */
  describeCustomKeyStores(
    args: DescribeCustomKeyStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCustomKeyStoresCommandOutput,
    | SdkError
    | CustomKeyStoreNotFoundError
    | InvalidMarkerError
    | KMSInternalError
  >;

  /**
   * @see {@link DescribeKeyCommand}
   */
  describeKey(
    args: DescribeKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeKeyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | NotFoundError
  >;

  /**
   * @see {@link DisableKeyCommand}
   */
  disableKey(
    args: DisableKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableKeyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link DisableKeyRotationCommand}
   */
  disableKeyRotation(
    args: DisableKeyRotationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableKeyRotationCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DisconnectCustomKeyStoreCommand}
   */
  disconnectCustomKeyStore(
    args: DisconnectCustomKeyStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisconnectCustomKeyStoreCommandOutput,
    | SdkError
    | CustomKeyStoreInvalidStateError
    | CustomKeyStoreNotFoundError
    | KMSInternalError
  >;

  /**
   * @see {@link EnableKeyCommand}
   */
  enableKey(
    args: EnableKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableKeyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | NotFoundError
  >;

  /**
   * @see {@link EnableKeyRotationCommand}
   */
  enableKeyRotation(
    args: EnableKeyRotationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableKeyRotationCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link EncryptCommand}
   */
  encrypt(
    args: EncryptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EncryptCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link GenerateDataKeyCommand}
   */
  generateDataKey(
    args: GenerateDataKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link GenerateDataKeyPairCommand}
   */
  generateDataKeyPair(
    args: GenerateDataKeyPairCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyPairCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GenerateDataKeyPairWithoutPlaintextCommand}
   */
  generateDataKeyPairWithoutPlaintext(
    args: GenerateDataKeyPairWithoutPlaintextCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyPairWithoutPlaintextCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GenerateDataKeyWithoutPlaintextCommand}
   */
  generateDataKeyWithoutPlaintext(
    args: GenerateDataKeyWithoutPlaintextCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateDataKeyWithoutPlaintextCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link GenerateMacCommand}
   */
  generateMac(
    args: GenerateMacCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateMacCommandOutput,
    | SdkError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link GenerateRandomCommand}
   */
  generateRandom(
    args: GenerateRandomCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateRandomCommandOutput,
    | SdkError
    | CustomKeyStoreInvalidStateError
    | CustomKeyStoreNotFoundError
    | DependencyTimeoutError
    | KMSInternalError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetKeyPolicyCommand}
   */
  getKeyPolicy(
    args: GetKeyPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetKeyPolicyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link GetKeyRotationStatusCommand}
   */
  getKeyRotationStatus(
    args: GetKeyRotationStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetKeyRotationStatusCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetParametersForImportCommand}
   */
  getParametersForImport(
    args: GetParametersForImportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetParametersForImportCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetPublicKeyCommand}
   */
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPublicKeyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | InvalidArnError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ImportKeyMaterialCommand}
   */
  importKeyMaterial(
    args: ImportKeyMaterialCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportKeyMaterialCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | ExpiredImportTokenError
    | IncorrectKeyMaterialError
    | InvalidArnError
    | InvalidCiphertextError
    | InvalidImportTokenError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(
    args: ListAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAliasesCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | InvalidMarkerError
    | KMSInternalError
    | NotFoundError
  >;

  /**
   * @see {@link ListGrantsCommand}
   */
  listGrants(
    args: ListGrantsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGrantsCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | InvalidGrantIdError
    | InvalidMarkerError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link ListKeyPoliciesCommand}
   */
  listKeyPolicies(
    args: ListKeyPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKeyPoliciesCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link ListKeyRotationsCommand}
   */
  listKeyRotations(
    args: ListKeyRotationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKeyRotationsCommandOutput,
    | SdkError
    | InvalidArnError
    | InvalidMarkerError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListKeysCommand}
   */
  listKeys(
    args: ListKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKeysCommandOutput,
    SdkError | DependencyTimeoutError | InvalidMarkerError | KMSInternalError
  >;

  /**
   * @see {@link ListResourceTagsCommand}
   */
  listResourceTags(
    args: ListResourceTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceTagsCommandOutput,
    | SdkError
    | InvalidArnError
    | InvalidMarkerError
    | KMSInternalError
    | NotFoundError
  >;

  /**
   * @see {@link ListRetirableGrantsCommand}
   */
  listRetirableGrants(
    args: ListRetirableGrantsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRetirableGrantsCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | InvalidMarkerError
    | KMSInternalError
    | NotFoundError
  >;

  /**
   * @see {@link PutKeyPolicyCommand}
   */
  putKeyPolicy(
    args: PutKeyPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutKeyPolicyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ReEncryptCommand}
   */
  reEncrypt(
    args: ReEncryptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReEncryptCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | IncorrectKeyError
    | InvalidCiphertextError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link ReplicateKeyCommand}
   */
  replicateKey(
    args: ReplicateKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplicateKeyCommandOutput,
    | SdkError
    | AlreadyExistsError
    | DisabledError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NotFoundError
    | TagError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link RetireGrantCommand}
   */
  retireGrant(
    args: RetireGrantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RetireGrantCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DryRunOperationError
    | InvalidArnError
    | InvalidGrantIdError
    | InvalidGrantTokenError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link RevokeGrantCommand}
   */
  revokeGrant(
    args: RevokeGrantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeGrantCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DryRunOperationError
    | InvalidArnError
    | InvalidGrantIdError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link RotateKeyOnDemandCommand}
   */
  rotateKeyOnDemand(
    args: RotateKeyOnDemandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RotateKeyOnDemandCommandOutput,
    | SdkError
    | ConflictError
    | DependencyTimeoutError
    | DisabledError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ScheduleKeyDeletionCommand}
   */
  scheduleKeyDeletion(
    args: ScheduleKeyDeletionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ScheduleKeyDeletionCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link SignCommand}
   */
  sign(
    args: SignCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SignCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | NotFoundError
    | TagError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | SdkError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | TagError
  >;

  /**
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(
    args: UpdateAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAliasCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | KMSInternalError
    | KMSInvalidStateError
    | LimitExceededError
    | NotFoundError
  >;

  /**
   * @see {@link UpdateCustomKeyStoreCommand}
   */
  updateCustomKeyStore(
    args: UpdateCustomKeyStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCustomKeyStoreCommandOutput,
    | SdkError
    | CloudHsmClusterInvalidConfigurationError
    | CloudHsmClusterNotActiveError
    | CloudHsmClusterNotFoundError
    | CloudHsmClusterNotRelatedError
    | CustomKeyStoreInvalidStateError
    | CustomKeyStoreNameInUseError
    | CustomKeyStoreNotFoundError
    | KMSInternalError
    | XksProxyIncorrectAuthenticationCredentialError
    | XksProxyInvalidConfigurationError
    | XksProxyInvalidResponseError
    | XksProxyUriEndpointInUseError
    | XksProxyUriInUseError
    | XksProxyUriUnreachableError
    | XksProxyVpcEndpointServiceInUseError
    | XksProxyVpcEndpointServiceInvalidConfigurationError
    | XksProxyVpcEndpointServiceNotFoundError
  >;

  /**
   * @see {@link UpdateKeyDescriptionCommand}
   */
  updateKeyDescription(
    args: UpdateKeyDescriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateKeyDescriptionCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link UpdatePrimaryRegionCommand}
   */
  updatePrimaryRegion(
    args: UpdatePrimaryRegionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePrimaryRegionCommandOutput,
    | SdkError
    | DisabledError
    | InvalidArnError
    | KMSInternalError
    | KMSInvalidStateError
    | NotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link VerifyCommand}
   */
  verify(
    args: VerifyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyCommandOutput,
    | SdkError
    | DependencyTimeoutError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidSignatureError
    | KMSInvalidStateError
    | NotFoundError
  >;

  /**
   * @see {@link VerifyMacCommand}
   */
  verifyMac(
    args: VerifyMacCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyMacCommandOutput,
    | SdkError
    | DisabledError
    | DryRunOperationError
    | InvalidGrantTokenError
    | InvalidKeyUsageError
    | KeyUnavailableError
    | KMSInternalError
    | KMSInvalidMacError
    | KMSInvalidStateError
    | NotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class KMSService extends Effect.Tag("@effect-aws/client-kms/KMSService")<
  KMSService,
  KMSService$
>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKMSService = Effect.gen(function* (_) {
  const client = yield* _(KMSClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (
            e instanceof KMSServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<KMSServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as KMSService$;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseKMSServiceLayer = Layer.effect(KMSService, makeKMSService);

/**
 * @since 1.0.0
 * @category layers
 */
export const KMSServiceLayer = BaseKMSServiceLayer.pipe(
  Layer.provide(KMSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultKMSServiceLayer = KMSServiceLayer.pipe(
  Layer.provide(DefaultKMSClientConfigLayer),
);
