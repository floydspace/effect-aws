/**
 * @since 1.0.0
 */
import {
  AddClientIDToOpenIDConnectProviderCommand,
  type AddClientIDToOpenIDConnectProviderCommandInput,
  type AddClientIDToOpenIDConnectProviderCommandOutput,
  AddRoleToInstanceProfileCommand,
  type AddRoleToInstanceProfileCommandInput,
  type AddRoleToInstanceProfileCommandOutput,
  AddUserToGroupCommand,
  type AddUserToGroupCommandInput,
  type AddUserToGroupCommandOutput,
  AttachGroupPolicyCommand,
  type AttachGroupPolicyCommandInput,
  type AttachGroupPolicyCommandOutput,
  AttachRolePolicyCommand,
  type AttachRolePolicyCommandInput,
  type AttachRolePolicyCommandOutput,
  AttachUserPolicyCommand,
  type AttachUserPolicyCommandInput,
  type AttachUserPolicyCommandOutput,
  ChangePasswordCommand,
  type ChangePasswordCommandInput,
  type ChangePasswordCommandOutput,
  CreateAccessKeyCommand,
  type CreateAccessKeyCommandInput,
  type CreateAccessKeyCommandOutput,
  CreateAccountAliasCommand,
  type CreateAccountAliasCommandInput,
  type CreateAccountAliasCommandOutput,
  CreateGroupCommand,
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateInstanceProfileCommand,
  type CreateInstanceProfileCommandInput,
  type CreateInstanceProfileCommandOutput,
  CreateLoginProfileCommand,
  type CreateLoginProfileCommandInput,
  type CreateLoginProfileCommandOutput,
  CreateOpenIDConnectProviderCommand,
  type CreateOpenIDConnectProviderCommandInput,
  type CreateOpenIDConnectProviderCommandOutput,
  CreatePolicyCommand,
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  CreatePolicyVersionCommand,
  type CreatePolicyVersionCommandInput,
  type CreatePolicyVersionCommandOutput,
  CreateRoleCommand,
  type CreateRoleCommandInput,
  type CreateRoleCommandOutput,
  CreateSAMLProviderCommand,
  type CreateSAMLProviderCommandInput,
  type CreateSAMLProviderCommandOutput,
  CreateServiceLinkedRoleCommand,
  type CreateServiceLinkedRoleCommandInput,
  type CreateServiceLinkedRoleCommandOutput,
  CreateServiceSpecificCredentialCommand,
  type CreateServiceSpecificCredentialCommandInput,
  type CreateServiceSpecificCredentialCommandOutput,
  CreateUserCommand,
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateVirtualMFADeviceCommand,
  type CreateVirtualMFADeviceCommandInput,
  type CreateVirtualMFADeviceCommandOutput,
  DeactivateMFADeviceCommand,
  type DeactivateMFADeviceCommandInput,
  type DeactivateMFADeviceCommandOutput,
  DeleteAccessKeyCommand,
  type DeleteAccessKeyCommandInput,
  type DeleteAccessKeyCommandOutput,
  DeleteAccountAliasCommand,
  type DeleteAccountAliasCommandInput,
  type DeleteAccountAliasCommandOutput,
  DeleteAccountPasswordPolicyCommand,
  type DeleteAccountPasswordPolicyCommandInput,
  type DeleteAccountPasswordPolicyCommandOutput,
  DeleteGroupCommand,
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupPolicyCommand,
  type DeleteGroupPolicyCommandInput,
  type DeleteGroupPolicyCommandOutput,
  DeleteInstanceProfileCommand,
  type DeleteInstanceProfileCommandInput,
  type DeleteInstanceProfileCommandOutput,
  DeleteLoginProfileCommand,
  type DeleteLoginProfileCommandInput,
  type DeleteLoginProfileCommandOutput,
  DeleteOpenIDConnectProviderCommand,
  type DeleteOpenIDConnectProviderCommandInput,
  type DeleteOpenIDConnectProviderCommandOutput,
  DeletePolicyCommand,
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyVersionCommand,
  type DeletePolicyVersionCommandInput,
  type DeletePolicyVersionCommandOutput,
  DeleteRoleCommand,
  type DeleteRoleCommandInput,
  type DeleteRoleCommandOutput,
  DeleteRolePermissionsBoundaryCommand,
  type DeleteRolePermissionsBoundaryCommandInput,
  type DeleteRolePermissionsBoundaryCommandOutput,
  DeleteRolePolicyCommand,
  type DeleteRolePolicyCommandInput,
  type DeleteRolePolicyCommandOutput,
  DeleteSAMLProviderCommand,
  type DeleteSAMLProviderCommandInput,
  type DeleteSAMLProviderCommandOutput,
  DeleteServerCertificateCommand,
  type DeleteServerCertificateCommandInput,
  type DeleteServerCertificateCommandOutput,
  DeleteServiceLinkedRoleCommand,
  type DeleteServiceLinkedRoleCommandInput,
  type DeleteServiceLinkedRoleCommandOutput,
  DeleteServiceSpecificCredentialCommand,
  type DeleteServiceSpecificCredentialCommandInput,
  type DeleteServiceSpecificCredentialCommandOutput,
  DeleteSigningCertificateCommand,
  type DeleteSigningCertificateCommandInput,
  type DeleteSigningCertificateCommandOutput,
  DeleteSSHPublicKeyCommand,
  type DeleteSSHPublicKeyCommandInput,
  type DeleteSSHPublicKeyCommandOutput,
  DeleteUserCommand,
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserPermissionsBoundaryCommand,
  type DeleteUserPermissionsBoundaryCommandInput,
  type DeleteUserPermissionsBoundaryCommandOutput,
  DeleteUserPolicyCommand,
  type DeleteUserPolicyCommandInput,
  type DeleteUserPolicyCommandOutput,
  DeleteVirtualMFADeviceCommand,
  type DeleteVirtualMFADeviceCommandInput,
  type DeleteVirtualMFADeviceCommandOutput,
  DetachGroupPolicyCommand,
  type DetachGroupPolicyCommandInput,
  type DetachGroupPolicyCommandOutput,
  DetachRolePolicyCommand,
  type DetachRolePolicyCommandInput,
  type DetachRolePolicyCommandOutput,
  DetachUserPolicyCommand,
  type DetachUserPolicyCommandInput,
  type DetachUserPolicyCommandOutput,
  DisableOrganizationsRootCredentialsManagementCommand,
  type DisableOrganizationsRootCredentialsManagementCommandInput,
  type DisableOrganizationsRootCredentialsManagementCommandOutput,
  DisableOrganizationsRootSessionsCommand,
  type DisableOrganizationsRootSessionsCommandInput,
  type DisableOrganizationsRootSessionsCommandOutput,
  EnableMFADeviceCommand,
  type EnableMFADeviceCommandInput,
  type EnableMFADeviceCommandOutput,
  EnableOrganizationsRootCredentialsManagementCommand,
  type EnableOrganizationsRootCredentialsManagementCommandInput,
  type EnableOrganizationsRootCredentialsManagementCommandOutput,
  EnableOrganizationsRootSessionsCommand,
  type EnableOrganizationsRootSessionsCommandInput,
  type EnableOrganizationsRootSessionsCommandOutput,
  GenerateCredentialReportCommand,
  type GenerateCredentialReportCommandInput,
  type GenerateCredentialReportCommandOutput,
  GenerateOrganizationsAccessReportCommand,
  type GenerateOrganizationsAccessReportCommandInput,
  type GenerateOrganizationsAccessReportCommandOutput,
  GenerateServiceLastAccessedDetailsCommand,
  type GenerateServiceLastAccessedDetailsCommandInput,
  type GenerateServiceLastAccessedDetailsCommandOutput,
  GetAccessKeyLastUsedCommand,
  type GetAccessKeyLastUsedCommandInput,
  type GetAccessKeyLastUsedCommandOutput,
  GetAccountAuthorizationDetailsCommand,
  type GetAccountAuthorizationDetailsCommandInput,
  type GetAccountAuthorizationDetailsCommandOutput,
  GetAccountPasswordPolicyCommand,
  type GetAccountPasswordPolicyCommandInput,
  type GetAccountPasswordPolicyCommandOutput,
  GetAccountSummaryCommand,
  type GetAccountSummaryCommandInput,
  type GetAccountSummaryCommandOutput,
  GetContextKeysForCustomPolicyCommand,
  type GetContextKeysForCustomPolicyCommandInput,
  type GetContextKeysForCustomPolicyCommandOutput,
  GetContextKeysForPrincipalPolicyCommand,
  type GetContextKeysForPrincipalPolicyCommandInput,
  type GetContextKeysForPrincipalPolicyCommandOutput,
  GetCredentialReportCommand,
  type GetCredentialReportCommandInput,
  type GetCredentialReportCommandOutput,
  GetGroupCommand,
  type GetGroupCommandInput,
  type GetGroupCommandOutput,
  GetGroupPolicyCommand,
  type GetGroupPolicyCommandInput,
  type GetGroupPolicyCommandOutput,
  GetInstanceProfileCommand,
  type GetInstanceProfileCommandInput,
  type GetInstanceProfileCommandOutput,
  GetLoginProfileCommand,
  type GetLoginProfileCommandInput,
  type GetLoginProfileCommandOutput,
  GetMFADeviceCommand,
  type GetMFADeviceCommandInput,
  type GetMFADeviceCommandOutput,
  GetOpenIDConnectProviderCommand,
  type GetOpenIDConnectProviderCommandInput,
  type GetOpenIDConnectProviderCommandOutput,
  GetOrganizationsAccessReportCommand,
  type GetOrganizationsAccessReportCommandInput,
  type GetOrganizationsAccessReportCommandOutput,
  GetPolicyCommand,
  type GetPolicyCommandInput,
  type GetPolicyCommandOutput,
  GetPolicyVersionCommand,
  type GetPolicyVersionCommandInput,
  type GetPolicyVersionCommandOutput,
  GetRoleCommand,
  type GetRoleCommandInput,
  type GetRoleCommandOutput,
  GetRolePolicyCommand,
  type GetRolePolicyCommandInput,
  type GetRolePolicyCommandOutput,
  GetSAMLProviderCommand,
  type GetSAMLProviderCommandInput,
  type GetSAMLProviderCommandOutput,
  GetServerCertificateCommand,
  type GetServerCertificateCommandInput,
  type GetServerCertificateCommandOutput,
  GetServiceLastAccessedDetailsCommand,
  type GetServiceLastAccessedDetailsCommandInput,
  type GetServiceLastAccessedDetailsCommandOutput,
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  type GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  type GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
  GetServiceLinkedRoleDeletionStatusCommand,
  type GetServiceLinkedRoleDeletionStatusCommandInput,
  type GetServiceLinkedRoleDeletionStatusCommandOutput,
  GetSSHPublicKeyCommand,
  type GetSSHPublicKeyCommandInput,
  type GetSSHPublicKeyCommandOutput,
  GetUserCommand,
  type GetUserCommandInput,
  type GetUserCommandOutput,
  GetUserPolicyCommand,
  type GetUserPolicyCommandInput,
  type GetUserPolicyCommandOutput,
  type IAMClient,
  type IAMClientConfig,
  ListAccessKeysCommand,
  type ListAccessKeysCommandInput,
  type ListAccessKeysCommandOutput,
  ListAccountAliasesCommand,
  type ListAccountAliasesCommandInput,
  type ListAccountAliasesCommandOutput,
  ListAttachedGroupPoliciesCommand,
  type ListAttachedGroupPoliciesCommandInput,
  type ListAttachedGroupPoliciesCommandOutput,
  ListAttachedRolePoliciesCommand,
  type ListAttachedRolePoliciesCommandInput,
  type ListAttachedRolePoliciesCommandOutput,
  ListAttachedUserPoliciesCommand,
  type ListAttachedUserPoliciesCommandInput,
  type ListAttachedUserPoliciesCommandOutput,
  ListEntitiesForPolicyCommand,
  type ListEntitiesForPolicyCommandInput,
  type ListEntitiesForPolicyCommandOutput,
  ListGroupPoliciesCommand,
  type ListGroupPoliciesCommandInput,
  type ListGroupPoliciesCommandOutput,
  ListGroupsCommand,
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListGroupsForUserCommand,
  type ListGroupsForUserCommandInput,
  type ListGroupsForUserCommandOutput,
  ListInstanceProfilesCommand,
  type ListInstanceProfilesCommandInput,
  type ListInstanceProfilesCommandOutput,
  ListInstanceProfilesForRoleCommand,
  type ListInstanceProfilesForRoleCommandInput,
  type ListInstanceProfilesForRoleCommandOutput,
  ListInstanceProfileTagsCommand,
  type ListInstanceProfileTagsCommandInput,
  type ListInstanceProfileTagsCommandOutput,
  ListMFADevicesCommand,
  type ListMFADevicesCommandInput,
  type ListMFADevicesCommandOutput,
  ListMFADeviceTagsCommand,
  type ListMFADeviceTagsCommandInput,
  type ListMFADeviceTagsCommandOutput,
  ListOpenIDConnectProvidersCommand,
  type ListOpenIDConnectProvidersCommandInput,
  type ListOpenIDConnectProvidersCommandOutput,
  ListOpenIDConnectProviderTagsCommand,
  type ListOpenIDConnectProviderTagsCommandInput,
  type ListOpenIDConnectProviderTagsCommandOutput,
  ListOrganizationsFeaturesCommand,
  type ListOrganizationsFeaturesCommandInput,
  type ListOrganizationsFeaturesCommandOutput,
  ListPoliciesCommand,
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPoliciesGrantingServiceAccessCommand,
  type ListPoliciesGrantingServiceAccessCommandInput,
  type ListPoliciesGrantingServiceAccessCommandOutput,
  ListPolicyTagsCommand,
  type ListPolicyTagsCommandInput,
  type ListPolicyTagsCommandOutput,
  ListPolicyVersionsCommand,
  type ListPolicyVersionsCommandInput,
  type ListPolicyVersionsCommandOutput,
  ListRolePoliciesCommand,
  type ListRolePoliciesCommandInput,
  type ListRolePoliciesCommandOutput,
  ListRolesCommand,
  type ListRolesCommandInput,
  type ListRolesCommandOutput,
  ListRoleTagsCommand,
  type ListRoleTagsCommandInput,
  type ListRoleTagsCommandOutput,
  ListSAMLProvidersCommand,
  type ListSAMLProvidersCommandInput,
  type ListSAMLProvidersCommandOutput,
  ListSAMLProviderTagsCommand,
  type ListSAMLProviderTagsCommandInput,
  type ListSAMLProviderTagsCommandOutput,
  ListServerCertificatesCommand,
  type ListServerCertificatesCommandInput,
  type ListServerCertificatesCommandOutput,
  ListServerCertificateTagsCommand,
  type ListServerCertificateTagsCommandInput,
  type ListServerCertificateTagsCommandOutput,
  ListServiceSpecificCredentialsCommand,
  type ListServiceSpecificCredentialsCommandInput,
  type ListServiceSpecificCredentialsCommandOutput,
  ListSigningCertificatesCommand,
  type ListSigningCertificatesCommandInput,
  type ListSigningCertificatesCommandOutput,
  ListSSHPublicKeysCommand,
  type ListSSHPublicKeysCommandInput,
  type ListSSHPublicKeysCommandOutput,
  ListUserPoliciesCommand,
  type ListUserPoliciesCommandInput,
  type ListUserPoliciesCommandOutput,
  ListUsersCommand,
  type ListUsersCommandInput,
  type ListUsersCommandOutput,
  ListUserTagsCommand,
  type ListUserTagsCommandInput,
  type ListUserTagsCommandOutput,
  ListVirtualMFADevicesCommand,
  type ListVirtualMFADevicesCommandInput,
  type ListVirtualMFADevicesCommandOutput,
  PutGroupPolicyCommand,
  type PutGroupPolicyCommandInput,
  type PutGroupPolicyCommandOutput,
  PutRolePermissionsBoundaryCommand,
  type PutRolePermissionsBoundaryCommandInput,
  type PutRolePermissionsBoundaryCommandOutput,
  PutRolePolicyCommand,
  type PutRolePolicyCommandInput,
  type PutRolePolicyCommandOutput,
  PutUserPermissionsBoundaryCommand,
  type PutUserPermissionsBoundaryCommandInput,
  type PutUserPermissionsBoundaryCommandOutput,
  PutUserPolicyCommand,
  type PutUserPolicyCommandInput,
  type PutUserPolicyCommandOutput,
  RemoveClientIDFromOpenIDConnectProviderCommand,
  type RemoveClientIDFromOpenIDConnectProviderCommandInput,
  type RemoveClientIDFromOpenIDConnectProviderCommandOutput,
  RemoveRoleFromInstanceProfileCommand,
  type RemoveRoleFromInstanceProfileCommandInput,
  type RemoveRoleFromInstanceProfileCommandOutput,
  RemoveUserFromGroupCommand,
  type RemoveUserFromGroupCommandInput,
  type RemoveUserFromGroupCommandOutput,
  ResetServiceSpecificCredentialCommand,
  type ResetServiceSpecificCredentialCommandInput,
  type ResetServiceSpecificCredentialCommandOutput,
  ResyncMFADeviceCommand,
  type ResyncMFADeviceCommandInput,
  type ResyncMFADeviceCommandOutput,
  SetDefaultPolicyVersionCommand,
  type SetDefaultPolicyVersionCommandInput,
  type SetDefaultPolicyVersionCommandOutput,
  SetSecurityTokenServicePreferencesCommand,
  type SetSecurityTokenServicePreferencesCommandInput,
  type SetSecurityTokenServicePreferencesCommandOutput,
  SimulateCustomPolicyCommand,
  type SimulateCustomPolicyCommandInput,
  type SimulateCustomPolicyCommandOutput,
  SimulatePrincipalPolicyCommand,
  type SimulatePrincipalPolicyCommandInput,
  type SimulatePrincipalPolicyCommandOutput,
  TagInstanceProfileCommand,
  type TagInstanceProfileCommandInput,
  type TagInstanceProfileCommandOutput,
  TagMFADeviceCommand,
  type TagMFADeviceCommandInput,
  type TagMFADeviceCommandOutput,
  TagOpenIDConnectProviderCommand,
  type TagOpenIDConnectProviderCommandInput,
  type TagOpenIDConnectProviderCommandOutput,
  TagPolicyCommand,
  type TagPolicyCommandInput,
  type TagPolicyCommandOutput,
  TagRoleCommand,
  type TagRoleCommandInput,
  type TagRoleCommandOutput,
  TagSAMLProviderCommand,
  type TagSAMLProviderCommandInput,
  type TagSAMLProviderCommandOutput,
  TagServerCertificateCommand,
  type TagServerCertificateCommandInput,
  type TagServerCertificateCommandOutput,
  TagUserCommand,
  type TagUserCommandInput,
  type TagUserCommandOutput,
  UntagInstanceProfileCommand,
  type UntagInstanceProfileCommandInput,
  type UntagInstanceProfileCommandOutput,
  UntagMFADeviceCommand,
  type UntagMFADeviceCommandInput,
  type UntagMFADeviceCommandOutput,
  UntagOpenIDConnectProviderCommand,
  type UntagOpenIDConnectProviderCommandInput,
  type UntagOpenIDConnectProviderCommandOutput,
  UntagPolicyCommand,
  type UntagPolicyCommandInput,
  type UntagPolicyCommandOutput,
  UntagRoleCommand,
  type UntagRoleCommandInput,
  type UntagRoleCommandOutput,
  UntagSAMLProviderCommand,
  type UntagSAMLProviderCommandInput,
  type UntagSAMLProviderCommandOutput,
  UntagServerCertificateCommand,
  type UntagServerCertificateCommandInput,
  type UntagServerCertificateCommandOutput,
  UntagUserCommand,
  type UntagUserCommandInput,
  type UntagUserCommandOutput,
  UpdateAccessKeyCommand,
  type UpdateAccessKeyCommandInput,
  type UpdateAccessKeyCommandOutput,
  UpdateAccountPasswordPolicyCommand,
  type UpdateAccountPasswordPolicyCommandInput,
  type UpdateAccountPasswordPolicyCommandOutput,
  UpdateAssumeRolePolicyCommand,
  type UpdateAssumeRolePolicyCommandInput,
  type UpdateAssumeRolePolicyCommandOutput,
  UpdateGroupCommand,
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateLoginProfileCommand,
  type UpdateLoginProfileCommandInput,
  type UpdateLoginProfileCommandOutput,
  UpdateOpenIDConnectProviderThumbprintCommand,
  type UpdateOpenIDConnectProviderThumbprintCommandInput,
  type UpdateOpenIDConnectProviderThumbprintCommandOutput,
  UpdateRoleCommand,
  type UpdateRoleCommandInput,
  type UpdateRoleCommandOutput,
  UpdateRoleDescriptionCommand,
  type UpdateRoleDescriptionCommandInput,
  type UpdateRoleDescriptionCommandOutput,
  UpdateSAMLProviderCommand,
  type UpdateSAMLProviderCommandInput,
  type UpdateSAMLProviderCommandOutput,
  UpdateServerCertificateCommand,
  type UpdateServerCertificateCommandInput,
  type UpdateServerCertificateCommandOutput,
  UpdateServiceSpecificCredentialCommand,
  type UpdateServiceSpecificCredentialCommandInput,
  type UpdateServiceSpecificCredentialCommandOutput,
  UpdateSigningCertificateCommand,
  type UpdateSigningCertificateCommandInput,
  type UpdateSigningCertificateCommandOutput,
  UpdateSSHPublicKeyCommand,
  type UpdateSSHPublicKeyCommandInput,
  type UpdateSSHPublicKeyCommandOutput,
  UpdateUserCommand,
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UploadServerCertificateCommand,
  type UploadServerCertificateCommandInput,
  type UploadServerCertificateCommandOutput,
  UploadSigningCertificateCommand,
  type UploadSigningCertificateCommandInput,
  type UploadSigningCertificateCommandOutput,
  UploadSSHPublicKeyCommand,
  type UploadSSHPublicKeyCommandInput,
  type UploadSSHPublicKeyCommandOutput,
} from "@aws-sdk/client-iam";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  AccountNotManagementOrDelegatedAdministratorError,
  CallerIsNotManagementAccountError,
  ConcurrentModificationError,
  CredentialReportExpiredError,
  CredentialReportNotPresentError,
  CredentialReportNotReadyError,
  DeleteConflictError,
  DuplicateCertificateError,
  DuplicateSSHPublicKeyError,
  EntityAlreadyExistsError,
  EntityTemporarilyUnmodifiableError,
  InvalidAuthenticationCodeError,
  InvalidCertificateError,
  InvalidInputError,
  InvalidPublicKeyError,
  InvalidUserTypeError,
  KeyPairMismatchError,
  LimitExceededError,
  MalformedCertificateError,
  MalformedPolicyDocumentError,
  NoSuchEntityError,
  OpenIdIdpCommunicationError,
  OrganizationNotFoundError,
  OrganizationNotInAllFeaturesModeError,
  PasswordPolicyViolationError,
  PolicyEvaluationError,
  PolicyNotAttachableError,
  ReportGenerationLimitExceededError,
  ServiceAccessNotEnabledError,
  ServiceFailureError,
  ServiceNotSupportedError,
  UnmodifiableEntityError,
  UnrecognizedPublicKeyEncodingError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./IAMClientInstance.js";
import * as IAMServiceConfig from "./IAMServiceConfig.js";

const commands = {
  AddClientIDToOpenIDConnectProviderCommand,
  AddRoleToInstanceProfileCommand,
  AddUserToGroupCommand,
  AttachGroupPolicyCommand,
  AttachRolePolicyCommand,
  AttachUserPolicyCommand,
  ChangePasswordCommand,
  CreateAccessKeyCommand,
  CreateAccountAliasCommand,
  CreateGroupCommand,
  CreateInstanceProfileCommand,
  CreateLoginProfileCommand,
  CreateOpenIDConnectProviderCommand,
  CreatePolicyCommand,
  CreatePolicyVersionCommand,
  CreateRoleCommand,
  CreateSAMLProviderCommand,
  CreateServiceLinkedRoleCommand,
  CreateServiceSpecificCredentialCommand,
  CreateUserCommand,
  CreateVirtualMFADeviceCommand,
  DeactivateMFADeviceCommand,
  DeleteAccessKeyCommand,
  DeleteAccountAliasCommand,
  DeleteAccountPasswordPolicyCommand,
  DeleteGroupCommand,
  DeleteGroupPolicyCommand,
  DeleteInstanceProfileCommand,
  DeleteLoginProfileCommand,
  DeleteOpenIDConnectProviderCommand,
  DeletePolicyCommand,
  DeletePolicyVersionCommand,
  DeleteRoleCommand,
  DeleteRolePermissionsBoundaryCommand,
  DeleteRolePolicyCommand,
  DeleteSAMLProviderCommand,
  DeleteSSHPublicKeyCommand,
  DeleteServerCertificateCommand,
  DeleteServiceLinkedRoleCommand,
  DeleteServiceSpecificCredentialCommand,
  DeleteSigningCertificateCommand,
  DeleteUserCommand,
  DeleteUserPermissionsBoundaryCommand,
  DeleteUserPolicyCommand,
  DeleteVirtualMFADeviceCommand,
  DetachGroupPolicyCommand,
  DetachRolePolicyCommand,
  DetachUserPolicyCommand,
  DisableOrganizationsRootCredentialsManagementCommand,
  DisableOrganizationsRootSessionsCommand,
  EnableMFADeviceCommand,
  EnableOrganizationsRootCredentialsManagementCommand,
  EnableOrganizationsRootSessionsCommand,
  GenerateCredentialReportCommand,
  GenerateOrganizationsAccessReportCommand,
  GenerateServiceLastAccessedDetailsCommand,
  GetAccessKeyLastUsedCommand,
  GetAccountAuthorizationDetailsCommand,
  GetAccountPasswordPolicyCommand,
  GetAccountSummaryCommand,
  GetContextKeysForCustomPolicyCommand,
  GetContextKeysForPrincipalPolicyCommand,
  GetCredentialReportCommand,
  GetGroupCommand,
  GetGroupPolicyCommand,
  GetInstanceProfileCommand,
  GetLoginProfileCommand,
  GetMFADeviceCommand,
  GetOpenIDConnectProviderCommand,
  GetOrganizationsAccessReportCommand,
  GetPolicyCommand,
  GetPolicyVersionCommand,
  GetRoleCommand,
  GetRolePolicyCommand,
  GetSAMLProviderCommand,
  GetSSHPublicKeyCommand,
  GetServerCertificateCommand,
  GetServiceLastAccessedDetailsCommand,
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  GetServiceLinkedRoleDeletionStatusCommand,
  GetUserCommand,
  GetUserPolicyCommand,
  ListAccessKeysCommand,
  ListAccountAliasesCommand,
  ListAttachedGroupPoliciesCommand,
  ListAttachedRolePoliciesCommand,
  ListAttachedUserPoliciesCommand,
  ListEntitiesForPolicyCommand,
  ListGroupPoliciesCommand,
  ListGroupsCommand,
  ListGroupsForUserCommand,
  ListInstanceProfileTagsCommand,
  ListInstanceProfilesCommand,
  ListInstanceProfilesForRoleCommand,
  ListMFADeviceTagsCommand,
  ListMFADevicesCommand,
  ListOpenIDConnectProviderTagsCommand,
  ListOpenIDConnectProvidersCommand,
  ListOrganizationsFeaturesCommand,
  ListPoliciesCommand,
  ListPoliciesGrantingServiceAccessCommand,
  ListPolicyTagsCommand,
  ListPolicyVersionsCommand,
  ListRolePoliciesCommand,
  ListRoleTagsCommand,
  ListRolesCommand,
  ListSAMLProviderTagsCommand,
  ListSAMLProvidersCommand,
  ListSSHPublicKeysCommand,
  ListServerCertificateTagsCommand,
  ListServerCertificatesCommand,
  ListServiceSpecificCredentialsCommand,
  ListSigningCertificatesCommand,
  ListUserPoliciesCommand,
  ListUserTagsCommand,
  ListUsersCommand,
  ListVirtualMFADevicesCommand,
  PutGroupPolicyCommand,
  PutRolePermissionsBoundaryCommand,
  PutRolePolicyCommand,
  PutUserPermissionsBoundaryCommand,
  PutUserPolicyCommand,
  RemoveClientIDFromOpenIDConnectProviderCommand,
  RemoveRoleFromInstanceProfileCommand,
  RemoveUserFromGroupCommand,
  ResetServiceSpecificCredentialCommand,
  ResyncMFADeviceCommand,
  SetDefaultPolicyVersionCommand,
  SetSecurityTokenServicePreferencesCommand,
  SimulateCustomPolicyCommand,
  SimulatePrincipalPolicyCommand,
  TagInstanceProfileCommand,
  TagMFADeviceCommand,
  TagOpenIDConnectProviderCommand,
  TagPolicyCommand,
  TagRoleCommand,
  TagSAMLProviderCommand,
  TagServerCertificateCommand,
  TagUserCommand,
  UntagInstanceProfileCommand,
  UntagMFADeviceCommand,
  UntagOpenIDConnectProviderCommand,
  UntagPolicyCommand,
  UntagRoleCommand,
  UntagSAMLProviderCommand,
  UntagServerCertificateCommand,
  UntagUserCommand,
  UpdateAccessKeyCommand,
  UpdateAccountPasswordPolicyCommand,
  UpdateAssumeRolePolicyCommand,
  UpdateGroupCommand,
  UpdateLoginProfileCommand,
  UpdateOpenIDConnectProviderThumbprintCommand,
  UpdateRoleCommand,
  UpdateRoleDescriptionCommand,
  UpdateSAMLProviderCommand,
  UpdateSSHPublicKeyCommand,
  UpdateServerCertificateCommand,
  UpdateServiceSpecificCredentialCommand,
  UpdateSigningCertificateCommand,
  UpdateUserCommand,
  UploadSSHPublicKeyCommand,
  UploadServerCertificateCommand,
  UploadSigningCertificateCommand,
};

interface IAMService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddClientIDToOpenIDConnectProviderCommand}
   */
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddClientIDToOpenIDConnectProviderCommandOutput,
    SdkError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link AddRoleToInstanceProfileCommand}
   */
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddRoleToInstanceProfileCommandOutput,
    | SdkError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link AddUserToGroupCommand}
   */
  addUserToGroup(
    args: AddUserToGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddUserToGroupCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link AttachGroupPolicyCommand}
   */
  attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachGroupPolicyCommandOutput,
    | SdkError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
  >;

  /**
   * @see {@link AttachRolePolicyCommand}
   */
  attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachRolePolicyCommandOutput,
    | SdkError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link AttachUserPolicyCommand}
   */
  attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachUserPolicyCommandOutput,
    | SdkError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
  >;

  /**
   * @see {@link ChangePasswordCommand}
   */
  changePassword(
    args: ChangePasswordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ChangePasswordCommandOutput,
    | SdkError
    | EntityTemporarilyUnmodifiableError
    | InvalidUserTypeError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateAccessKeyCommand}
   */
  createAccessKey(
    args: CreateAccessKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccessKeyCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link CreateAccountAliasCommand}
   */
  createAccountAlias(
    args: CreateAccountAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccountAliasCommandOutput,
    SdkError | ConcurrentModificationError | EntityAlreadyExistsError | LimitExceededError | ServiceFailureError
  >;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGroupCommandOutput,
    SdkError | EntityAlreadyExistsError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link CreateInstanceProfileCommand}
   */
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInstanceProfileCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateLoginProfileCommand}
   */
  createLoginProfile(
    args: CreateLoginProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLoginProfileCommandOutput,
    | SdkError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateOpenIDConnectProviderCommand}
   */
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOpenIDConnectProviderCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | OpenIdIdpCommunicationError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreatePolicyVersionCommand}
   */
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyVersionCommandOutput,
    | SdkError
    | InvalidInputError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateRoleCommand}
   */
  createRole(
    args: CreateRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRoleCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateSAMLProviderCommand}
   */
  createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSAMLProviderCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateServiceLinkedRoleCommand}
   */
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateServiceLinkedRoleCommandOutput,
    SdkError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link CreateServiceSpecificCredentialCommand}
   */
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateServiceSpecificCredentialCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceNotSupportedError
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateVirtualMFADeviceCommand}
   */
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVirtualMFADeviceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeactivateMFADeviceCommand}
   */
  deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeactivateMFADeviceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteAccessKeyCommand}
   */
  deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccessKeyCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteAccountAliasCommand}
   */
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccountAliasCommandOutput,
    SdkError | ConcurrentModificationError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteAccountPasswordPolicyCommand}
   */
  deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccountPasswordPolicyCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGroupCommandOutput,
    SdkError | DeleteConflictError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteGroupPolicyCommand}
   */
  deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGroupPolicyCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteInstanceProfileCommand}
   */
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInstanceProfileCommandOutput,
    SdkError | DeleteConflictError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteLoginProfileCommand}
   */
  deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLoginProfileCommandOutput,
    SdkError | EntityTemporarilyUnmodifiableError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteOpenIDConnectProviderCommand}
   */
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOpenIDConnectProviderCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyCommandOutput,
    SdkError | DeleteConflictError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeletePolicyVersionCommand}
   */
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyVersionCommandOutput,
    SdkError | DeleteConflictError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteRoleCommand}
   */
  deleteRole(
    args: DeleteRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRoleCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link DeleteRolePermissionsBoundaryCommand}
   */
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRolePermissionsBoundaryCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError | UnmodifiableEntityError
  >;

  /**
   * @see {@link DeleteRolePolicyCommand}
   */
  deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRolePolicyCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError | UnmodifiableEntityError
  >;

  /**
   * @see {@link DeleteSAMLProviderCommand}
   */
  deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSAMLProviderCommandOutput,
    SdkError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteSSHPublicKeyCommand}
   */
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSSHPublicKeyCommandOutput,
    SdkError | NoSuchEntityError
  >;

  /**
   * @see {@link DeleteServerCertificateCommand}
   */
  deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServerCertificateCommandOutput,
    SdkError | DeleteConflictError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteServiceLinkedRoleCommand}
   */
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServiceLinkedRoleCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteServiceSpecificCredentialCommand}
   */
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServiceSpecificCredentialCommandOutput,
    SdkError | NoSuchEntityError
  >;

  /**
   * @see {@link DeleteSigningCertificateCommand}
   */
  deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSigningCertificateCommandOutput,
    SdkError | ConcurrentModificationError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteUserPermissionsBoundaryCommand}
   */
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserPermissionsBoundaryCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteUserPolicyCommand}
   */
  deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserPolicyCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteVirtualMFADeviceCommand}
   */
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVirtualMFADeviceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DetachGroupPolicyCommand}
   */
  detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachGroupPolicyCommandOutput,
    SdkError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DetachRolePolicyCommand}
   */
  detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachRolePolicyCommandOutput,
    | SdkError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link DetachUserPolicyCommand}
   */
  detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachUserPolicyCommandOutput,
    SdkError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DisableOrganizationsRootCredentialsManagementCommand}
   */
  disableOrganizationsRootCredentialsManagement(
    args: DisableOrganizationsRootCredentialsManagementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableOrganizationsRootCredentialsManagementCommandOutput,
    | SdkError
    | AccountNotManagementOrDelegatedAdministratorError
    | OrganizationNotFoundError
    | OrganizationNotInAllFeaturesModeError
    | ServiceAccessNotEnabledError
  >;

  /**
   * @see {@link DisableOrganizationsRootSessionsCommand}
   */
  disableOrganizationsRootSessions(
    args: DisableOrganizationsRootSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableOrganizationsRootSessionsCommandOutput,
    | SdkError
    | AccountNotManagementOrDelegatedAdministratorError
    | OrganizationNotFoundError
    | OrganizationNotInAllFeaturesModeError
    | ServiceAccessNotEnabledError
  >;

  /**
   * @see {@link EnableMFADeviceCommand}
   */
  enableMFADevice(
    args: EnableMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableMFADeviceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | EntityTemporarilyUnmodifiableError
    | InvalidAuthenticationCodeError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link EnableOrganizationsRootCredentialsManagementCommand}
   */
  enableOrganizationsRootCredentialsManagement(
    args: EnableOrganizationsRootCredentialsManagementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableOrganizationsRootCredentialsManagementCommandOutput,
    | SdkError
    | AccountNotManagementOrDelegatedAdministratorError
    | CallerIsNotManagementAccountError
    | OrganizationNotFoundError
    | OrganizationNotInAllFeaturesModeError
    | ServiceAccessNotEnabledError
  >;

  /**
   * @see {@link EnableOrganizationsRootSessionsCommand}
   */
  enableOrganizationsRootSessions(
    args: EnableOrganizationsRootSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableOrganizationsRootSessionsCommandOutput,
    | SdkError
    | AccountNotManagementOrDelegatedAdministratorError
    | CallerIsNotManagementAccountError
    | OrganizationNotFoundError
    | OrganizationNotInAllFeaturesModeError
    | ServiceAccessNotEnabledError
  >;

  /**
   * @see {@link GenerateCredentialReportCommand}
   */
  generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateCredentialReportCommandOutput,
    SdkError | LimitExceededError | ServiceFailureError
  >;

  /**
   * @see {@link GenerateOrganizationsAccessReportCommand}
   */
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateOrganizationsAccessReportCommandOutput,
    SdkError | ReportGenerationLimitExceededError
  >;

  /**
   * @see {@link GenerateServiceLastAccessedDetailsCommand}
   */
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateServiceLastAccessedDetailsCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetAccessKeyLastUsedCommand}
   */
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccessKeyLastUsedCommandOutput,
    SdkError
  >;

  /**
   * @see {@link GetAccountAuthorizationDetailsCommand}
   */
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountAuthorizationDetailsCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link GetAccountPasswordPolicyCommand}
   */
  getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountPasswordPolicyCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetAccountSummaryCommand}
   */
  getAccountSummary(
    args: GetAccountSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSummaryCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link GetContextKeysForCustomPolicyCommand}
   */
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContextKeysForCustomPolicyCommandOutput,
    SdkError | InvalidInputError
  >;

  /**
   * @see {@link GetContextKeysForPrincipalPolicyCommand}
   */
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContextKeysForPrincipalPolicyCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetCredentialReportCommand}
   */
  getCredentialReport(
    args: GetCredentialReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCredentialReportCommandOutput,
    | SdkError
    | CredentialReportExpiredError
    | CredentialReportNotPresentError
    | CredentialReportNotReadyError
    | ServiceFailureError
  >;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(
    args: GetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGroupCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetGroupPolicyCommand}
   */
  getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGroupPolicyCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetInstanceProfileCommand}
   */
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInstanceProfileCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetLoginProfileCommand}
   */
  getLoginProfile(
    args: GetLoginProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLoginProfileCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetMFADeviceCommand}
   */
  getMFADevice(
    args: GetMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMFADeviceCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetOpenIDConnectProviderCommand}
   */
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOpenIDConnectProviderCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetOrganizationsAccessReportCommand}
   */
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOrganizationsAccessReportCommandOutput,
    SdkError | NoSuchEntityError
  >;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetPolicyVersionCommand}
   */
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyVersionCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetRoleCommand}
   */
  getRole(
    args: GetRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRoleCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetRolePolicyCommand}
   */
  getRolePolicy(
    args: GetRolePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRolePolicyCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetSAMLProviderCommand}
   */
  getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSAMLProviderCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetSSHPublicKeyCommand}
   */
  getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSSHPublicKeyCommandOutput,
    SdkError | NoSuchEntityError | UnrecognizedPublicKeyEncodingError
  >;

  /**
   * @see {@link GetServerCertificateCommand}
   */
  getServerCertificate(
    args: GetServerCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetServerCertificateCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsCommand}
   */
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceLastAccessedDetailsCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommand}
   */
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetServiceLinkedRoleDeletionStatusCommand}
   */
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceLinkedRoleDeletionStatusCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetUserPolicyCommand}
   */
  getUserPolicy(
    args: GetUserPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserPolicyCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListAccessKeysCommand}
   */
  listAccessKeys(
    args: ListAccessKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccessKeysCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListAccountAliasesCommand}
   */
  listAccountAliases(
    args: ListAccountAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccountAliasesCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListAttachedGroupPoliciesCommand}
   */
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAttachedGroupPoliciesCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListAttachedRolePoliciesCommand}
   */
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAttachedRolePoliciesCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListAttachedUserPoliciesCommand}
   */
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAttachedUserPoliciesCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListEntitiesForPolicyCommand}
   */
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEntitiesForPolicyCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListGroupPoliciesCommand}
   */
  listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGroupPoliciesCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGroupsCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListGroupsForUserCommand}
   */
  listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGroupsForUserCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListInstanceProfileTagsCommand}
   */
  listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceProfileTagsCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListInstanceProfilesCommand}
   */
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceProfilesCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListInstanceProfilesForRoleCommand}
   */
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceProfilesForRoleCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListMFADeviceTagsCommand}
   */
  listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMFADeviceTagsCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListMFADevicesCommand}
   */
  listMFADevices(
    args: ListMFADevicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMFADevicesCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListOpenIDConnectProviderTagsCommand}
   */
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOpenIDConnectProviderTagsCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListOpenIDConnectProvidersCommand}
   */
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOpenIDConnectProvidersCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListOrganizationsFeaturesCommand}
   */
  listOrganizationsFeatures(
    args: ListOrganizationsFeaturesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOrganizationsFeaturesCommandOutput,
    | SdkError
    | AccountNotManagementOrDelegatedAdministratorError
    | OrganizationNotFoundError
    | OrganizationNotInAllFeaturesModeError
    | ServiceAccessNotEnabledError
  >;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPoliciesCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListPoliciesGrantingServiceAccessCommand}
   */
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPoliciesGrantingServiceAccessCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link ListPolicyTagsCommand}
   */
  listPolicyTags(
    args: ListPolicyTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyTagsCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyVersionsCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListRolePoliciesCommand}
   */
  listRolePolicies(
    args: ListRolePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRolePoliciesCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListRoleTagsCommand}
   */
  listRoleTags(
    args: ListRoleTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRoleTagsCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListRolesCommand}
   */
  listRoles(
    args: ListRolesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRolesCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListSAMLProviderTagsCommand}
   */
  listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSAMLProviderTagsCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListSAMLProvidersCommand}
   */
  listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSAMLProvidersCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListSSHPublicKeysCommand}
   */
  listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSSHPublicKeysCommandOutput,
    SdkError | NoSuchEntityError
  >;

  /**
   * @see {@link ListServerCertificateTagsCommand}
   */
  listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServerCertificateTagsCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListServerCertificatesCommand}
   */
  listServerCertificates(
    args: ListServerCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServerCertificatesCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListServiceSpecificCredentialsCommand}
   */
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServiceSpecificCredentialsCommandOutput,
    SdkError | NoSuchEntityError | ServiceNotSupportedError
  >;

  /**
   * @see {@link ListSigningCertificatesCommand}
   */
  listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSigningCertificatesCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListUserPoliciesCommand}
   */
  listUserPolicies(
    args: ListUserPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUserPoliciesCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListUserTagsCommand}
   */
  listUserTags(
    args: ListUserTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUserTagsCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUsersCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link ListVirtualMFADevicesCommand}
   */
  listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVirtualMFADevicesCommandOutput,
    SdkError
  >;

  /**
   * @see {@link PutGroupPolicyCommand}
   */
  putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutGroupPolicyCommandOutput,
    SdkError | LimitExceededError | MalformedPolicyDocumentError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link PutRolePermissionsBoundaryCommand}
   */
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRolePermissionsBoundaryCommandOutput,
    | SdkError
    | InvalidInputError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link PutRolePolicyCommand}
   */
  putRolePolicy(
    args: PutRolePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRolePolicyCommandOutput,
    | SdkError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link PutUserPermissionsBoundaryCommand}
   */
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutUserPermissionsBoundaryCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | PolicyNotAttachableError | ServiceFailureError
  >;

  /**
   * @see {@link PutUserPolicyCommand}
   */
  putUserPolicy(
    args: PutUserPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutUserPolicyCommandOutput,
    SdkError | LimitExceededError | MalformedPolicyDocumentError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link RemoveClientIDFromOpenIDConnectProviderCommand}
   */
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveClientIDFromOpenIDConnectProviderCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link RemoveRoleFromInstanceProfileCommand}
   */
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveRoleFromInstanceProfileCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError | UnmodifiableEntityError
  >;

  /**
   * @see {@link RemoveUserFromGroupCommand}
   */
  removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveUserFromGroupCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ResetServiceSpecificCredentialCommand}
   */
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetServiceSpecificCredentialCommandOutput,
    SdkError | NoSuchEntityError
  >;

  /**
   * @see {@link ResyncMFADeviceCommand}
   */
  resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResyncMFADeviceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidAuthenticationCodeError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link SetDefaultPolicyVersionCommand}
   */
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetDefaultPolicyVersionCommandOutput,
    SdkError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link SetSecurityTokenServicePreferencesCommand}
   */
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetSecurityTokenServicePreferencesCommandOutput,
    SdkError | ServiceFailureError
  >;

  /**
   * @see {@link SimulateCustomPolicyCommand}
   */
  simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SimulateCustomPolicyCommandOutput,
    SdkError | InvalidInputError | PolicyEvaluationError
  >;

  /**
   * @see {@link SimulatePrincipalPolicyCommand}
   */
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SimulatePrincipalPolicyCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | PolicyEvaluationError
  >;

  /**
   * @see {@link TagInstanceProfileCommand}
   */
  tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagInstanceProfileCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagMFADeviceCommand}
   */
  tagMFADevice(
    args: TagMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagMFADeviceCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagOpenIDConnectProviderCommand}
   */
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagOpenIDConnectProviderCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagPolicyCommand}
   */
  tagPolicy(
    args: TagPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagPolicyCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagRoleCommand}
   */
  tagRole(
    args: TagRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagRoleCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagSAMLProviderCommand}
   */
  tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagSAMLProviderCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagServerCertificateCommand}
   */
  tagServerCertificate(
    args: TagServerCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagServerCertificateCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagUserCommand}
   */
  tagUser(
    args: TagUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagUserCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagInstanceProfileCommand}
   */
  untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagInstanceProfileCommandOutput,
    SdkError | ConcurrentModificationError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UntagMFADeviceCommand}
   */
  untagMFADevice(
    args: UntagMFADeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagMFADeviceCommandOutput,
    SdkError | ConcurrentModificationError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UntagOpenIDConnectProviderCommand}
   */
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagOpenIDConnectProviderCommandOutput,
    SdkError | ConcurrentModificationError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UntagPolicyCommand}
   */
  untagPolicy(
    args: UntagPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagPolicyCommandOutput,
    SdkError | ConcurrentModificationError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UntagRoleCommand}
   */
  untagRole(
    args: UntagRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagRoleCommandOutput,
    SdkError | ConcurrentModificationError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UntagSAMLProviderCommand}
   */
  untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagSAMLProviderCommandOutput,
    SdkError | ConcurrentModificationError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UntagServerCertificateCommand}
   */
  untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagServerCertificateCommandOutput,
    SdkError | ConcurrentModificationError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UntagUserCommand}
   */
  untagUser(
    args: UntagUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagUserCommandOutput,
    SdkError | ConcurrentModificationError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateAccessKeyCommand}
   */
  updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccessKeyCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateAccountPasswordPolicyCommand}
   */
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountPasswordPolicyCommandOutput,
    SdkError | LimitExceededError | MalformedPolicyDocumentError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateAssumeRolePolicyCommand}
   */
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAssumeRolePolicyCommandOutput,
    | SdkError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGroupCommandOutput,
    SdkError | EntityAlreadyExistsError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateLoginProfileCommand}
   */
  updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateLoginProfileCommandOutput,
    | SdkError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateOpenIDConnectProviderThumbprintCommand}
   */
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOpenIDConnectProviderThumbprintCommandOutput,
    SdkError | InvalidInputError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateRoleCommand}
   */
  updateRole(
    args: UpdateRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRoleCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError | UnmodifiableEntityError
  >;

  /**
   * @see {@link UpdateRoleDescriptionCommand}
   */
  updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRoleDescriptionCommandOutput,
    SdkError | NoSuchEntityError | ServiceFailureError | UnmodifiableEntityError
  >;

  /**
   * @see {@link UpdateSAMLProviderCommand}
   */
  updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSAMLProviderCommandOutput,
    SdkError | InvalidInputError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateSSHPublicKeyCommand}
   */
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSSHPublicKeyCommandOutput,
    SdkError | NoSuchEntityError
  >;

  /**
   * @see {@link UpdateServerCertificateCommand}
   */
  updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServerCertificateCommandOutput,
    SdkError | EntityAlreadyExistsError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateServiceSpecificCredentialCommand}
   */
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceSpecificCredentialCommandOutput,
    SdkError | NoSuchEntityError
  >;

  /**
   * @see {@link UpdateSigningCertificateCommand}
   */
  updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSigningCertificateCommandOutput,
    SdkError | LimitExceededError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UploadSSHPublicKeyCommand}
   */
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UploadSSHPublicKeyCommandOutput,
    | SdkError
    | DuplicateSSHPublicKeyError
    | InvalidPublicKeyError
    | LimitExceededError
    | NoSuchEntityError
    | UnrecognizedPublicKeyEncodingError
  >;

  /**
   * @see {@link UploadServerCertificateCommand}
   */
  uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UploadServerCertificateCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | KeyPairMismatchError
    | LimitExceededError
    | MalformedCertificateError
    | ServiceFailureError
  >;

  /**
   * @see {@link UploadSigningCertificateCommand}
   */
  uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UploadSigningCertificateCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | DuplicateCertificateError
    | EntityAlreadyExistsError
    | InvalidCertificateError
    | LimitExceededError
    | MalformedCertificateError
    | NoSuchEntityError
    | ServiceFailureError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIAMService = Effect.gen(function*() {
  const client = yield* Instance.IAMClientInstance;

  return Service.fromClientAndCommands<IAMService$>(client, commands, AllServiceErrors);
});

/**
 * @since 1.0.0
 * @category models
 */
export class IAMService extends Effect.Tag("@effect-aws/client-iam/IAMService")<
  IAMService,
  IAMService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeIAMService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: IAMService.Config) =>
    Layer.effect(this, makeIAMService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(IAMServiceConfig.setIAMServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IAMClientConfig) => IAMClient,
  ) =>
    Layer.effect(this, makeIAMService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.IAMClientInstance,
          Effect.map(IAMServiceConfig.toIAMClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace IAMService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<IAMClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
