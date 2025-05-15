/**
 * @since 1.0.0
 */
import {
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
  type KMSClient,
  type KMSClientConfig,
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
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
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
  KeyUnavailableError,
  KMSInternalError,
  KMSInvalidMacError,
  KMSInvalidSignatureError,
  KMSInvalidStateError,
  LimitExceededError,
  MalformedPolicyDocumentError,
  NotFoundError,
  SdkError,
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
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./KMSClientInstance.js";
import * as KMSServiceConfig from "./KMSServiceConfig.js";

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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | DependencyTimeoutError | KMSInternalError | KMSInvalidStateError | NotFoundError
  >;

  /**
   * @see {@link DeleteCustomKeyStoreCommand}
   */
  deleteCustomKeyStore(
    args: DeleteCustomKeyStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomKeyStoreCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | CustomKeyStoreNotFoundError | InvalidMarkerError | KMSInternalError
  >;

  /**
   * @see {@link DescribeKeyCommand}
   */
  describeKey(
    args: DescribeKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeKeyCommandOutput,
    Cause.TimeoutException | SdkError | DependencyTimeoutError | InvalidArnError | KMSInternalError | NotFoundError
  >;

  /**
   * @see {@link DisableKeyCommand}
   */
  disableKey(
    args: DisableKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableKeyCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | CustomKeyStoreInvalidStateError | CustomKeyStoreNotFoundError | KMSInternalError
  >;

  /**
   * @see {@link EnableKeyCommand}
   */
  enableKey(
    args: EnableKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableKeyCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | DependencyTimeoutError | InvalidMarkerError | KMSInternalError
  >;

  /**
   * @see {@link ListResourceTagsCommand}
   */
  listResourceTags(
    args: ListResourceTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceTagsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | InvalidMarkerError | KMSInternalError | NotFoundError
  >;

  /**
   * @see {@link ListRetirableGrantsCommand}
   */
  listRetirableGrants(
    args: ListRetirableGrantsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRetirableGrantsCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
 * @category constructors
 */
export const makeKMSService = Effect.gen(function*() {
  const client = yield* Instance.KMSClientInstance;

  return yield* Service.fromClientAndCommands<KMSService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: KMSServiceConfig.toKMSClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class KMSService extends Effect.Tag("@effect-aws/client-kms/KMSService")<
  KMSService,
  KMSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeKMSService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: KMSService.Config) =>
    Layer.effect(this, makeKMSService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(KMSServiceConfig.setKMSServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: KMSClientConfig) => KMSClient,
  ) =>
    Layer.effect(this, makeKMSService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.KMSClientInstance,
          Effect.map(KMSServiceConfig.toKMSClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace KMSService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<KMSClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = KMSService$;
}
