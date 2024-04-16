/**
 * @since 1.0.0
 */
import {
  IAMServiceException,
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
  EnableMFADeviceCommand,
  type EnableMFADeviceCommandInput,
  type EnableMFADeviceCommandOutput,
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
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Effect, Layer, Record, Data } from "effect";
import {
  IAMServiceError,
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
  PasswordPolicyViolationError,
  PolicyEvaluationError,
  PolicyNotAttachableError,
  ReportGenerationLimitExceededError,
  ServiceFailureError,
  ServiceNotSupportedError,
  UnmodifiableEntityError,
  UnrecognizedPublicKeyEncodingError,
  SdkError,
  TaggedException,
} from "./Errors";
import { IAMClientInstance, IAMClientInstanceLayer } from "./IAMClientInstance";
import { DefaultIAMClientConfigLayer } from "./IAMClientInstanceConfig";

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
  DeleteServerCertificateCommand,
  DeleteServiceLinkedRoleCommand,
  DeleteServiceSpecificCredentialCommand,
  DeleteSigningCertificateCommand,
  DeleteSSHPublicKeyCommand,
  DeleteUserCommand,
  DeleteUserPermissionsBoundaryCommand,
  DeleteUserPolicyCommand,
  DeleteVirtualMFADeviceCommand,
  DetachGroupPolicyCommand,
  DetachRolePolicyCommand,
  DetachUserPolicyCommand,
  EnableMFADeviceCommand,
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
  GetServerCertificateCommand,
  GetServiceLastAccessedDetailsCommand,
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  GetServiceLinkedRoleDeletionStatusCommand,
  GetSSHPublicKeyCommand,
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
  ListInstanceProfilesCommand,
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfileTagsCommand,
  ListMFADevicesCommand,
  ListMFADeviceTagsCommand,
  ListOpenIDConnectProvidersCommand,
  ListOpenIDConnectProviderTagsCommand,
  ListPoliciesCommand,
  ListPoliciesGrantingServiceAccessCommand,
  ListPolicyTagsCommand,
  ListPolicyVersionsCommand,
  ListRolePoliciesCommand,
  ListRolesCommand,
  ListRoleTagsCommand,
  ListSAMLProvidersCommand,
  ListSAMLProviderTagsCommand,
  ListServerCertificatesCommand,
  ListServerCertificateTagsCommand,
  ListServiceSpecificCredentialsCommand,
  ListSigningCertificatesCommand,
  ListSSHPublicKeysCommand,
  ListUserPoliciesCommand,
  ListUsersCommand,
  ListUserTagsCommand,
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
  UpdateServerCertificateCommand,
  UpdateServiceSpecificCredentialCommand,
  UpdateSigningCertificateCommand,
  UpdateSSHPublicKeyCommand,
  UpdateUserCommand,
  UploadServerCertificateCommand,
  UploadSigningCertificateCommand,
  UploadSSHPublicKeyCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export type IAMService = {
  readonly _: unique symbol;

  /**
   * @see {@link AddClientIDToOpenIDConnectProviderCommand}
   */
  readonly addClientIDToOpenIDConnectProvider: (
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddClientIDToOpenIDConnectProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link AddRoleToInstanceProfileCommand}
   */
  readonly addRoleToInstanceProfile: (
    args: AddRoleToInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddRoleToInstanceProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link AddUserToGroupCommand}
   */
  readonly addUserToGroup: (
    args: AddUserToGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddUserToGroupCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link AttachGroupPolicyCommand}
   */
  readonly attachGroupPolicy: (
    args: AttachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AttachGroupPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
  >;

  /**
   * @see {@link AttachRolePolicyCommand}
   */
  readonly attachRolePolicy: (
    args: AttachRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AttachRolePolicyCommandOutput,
    | SdkError
    | IAMServiceError
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
  readonly attachUserPolicy: (
    args: AttachUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AttachUserPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
  >;

  /**
   * @see {@link ChangePasswordCommand}
   */
  readonly changePassword: (
    args: ChangePasswordCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ChangePasswordCommandOutput,
    | SdkError
    | IAMServiceError
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
  readonly createAccessKey: (
    args: CreateAccessKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateAccessKeyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateAccountAliasCommand}
   */
  readonly createAccountAlias: (
    args: CreateAccountAliasCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateAccountAliasCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateGroupCommand}
   */
  readonly createGroup: (
    args: CreateGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateGroupCommandOutput,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateInstanceProfileCommand}
   */
  readonly createInstanceProfile: (
    args: CreateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateInstanceProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateLoginProfileCommand}
   */
  readonly createLoginProfile: (
    args: CreateLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateLoginProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateOpenIDConnectProviderCommand}
   */
  readonly createOpenIDConnectProvider: (
    args: CreateOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateOpenIDConnectProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreatePolicyCommand}
   */
  readonly createPolicy: (
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreatePolicyCommandOutput,
    | SdkError
    | IAMServiceError
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
  readonly createPolicyVersion: (
    args: CreatePolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreatePolicyVersionCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateRoleCommand}
   */
  readonly createRole: (
    args: CreateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateRoleCommandOutput,
    | SdkError
    | IAMServiceError
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
  readonly createSAMLProvider: (
    args: CreateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateSAMLProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateServiceLinkedRoleCommand}
   */
  readonly createServiceLinkedRole: (
    args: CreateServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateServiceLinkedRoleCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link CreateServiceSpecificCredentialCommand}
   */
  readonly createServiceSpecificCredential: (
    args: CreateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateServiceSpecificCredentialCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceNotSupportedError
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  readonly createUser: (
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateUserCommandOutput,
    | SdkError
    | IAMServiceError
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
  readonly createVirtualMFADevice: (
    args: CreateVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVirtualMFADeviceCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeactivateMFADeviceCommand}
   */
  readonly deactivateMFADevice: (
    args: DeactivateMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeactivateMFADeviceCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteAccessKeyCommand}
   */
  readonly deleteAccessKey: (
    args: DeleteAccessKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteAccessKeyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteAccountAliasCommand}
   */
  readonly deleteAccountAlias: (
    args: DeleteAccountAliasCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteAccountAliasCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteAccountPasswordPolicyCommand}
   */
  readonly deleteAccountPasswordPolicy: (
    args: DeleteAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteAccountPasswordPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteGroupCommand}
   */
  readonly deleteGroup: (
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteGroupCommandOutput,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteGroupPolicyCommand}
   */
  readonly deleteGroupPolicy: (
    args: DeleteGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteGroupPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteInstanceProfileCommand}
   */
  readonly deleteInstanceProfile: (
    args: DeleteInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteInstanceProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteLoginProfileCommand}
   */
  readonly deleteLoginProfile: (
    args: DeleteLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteLoginProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteOpenIDConnectProviderCommand}
   */
  readonly deleteOpenIDConnectProvider: (
    args: DeleteOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteOpenIDConnectProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  readonly deletePolicy: (
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeletePolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeletePolicyVersionCommand}
   */
  readonly deletePolicyVersion: (
    args: DeletePolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeletePolicyVersionCommandOutput,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteRoleCommand}
   */
  readonly deleteRole: (
    args: DeleteRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteRoleCommandOutput,
    | SdkError
    | IAMServiceError
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
  readonly deleteRolePermissionsBoundary: (
    args: DeleteRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteRolePermissionsBoundaryCommandOutput,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link DeleteRolePolicyCommand}
   */
  readonly deleteRolePolicy: (
    args: DeleteRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteRolePolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link DeleteSAMLProviderCommand}
   */
  readonly deleteSAMLProvider: (
    args: DeleteSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteSAMLProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteServerCertificateCommand}
   */
  readonly deleteServerCertificate: (
    args: DeleteServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteServerCertificateCommandOutput,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteServiceLinkedRoleCommand}
   */
  readonly deleteServiceLinkedRole: (
    args: DeleteServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteServiceLinkedRoleCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteServiceSpecificCredentialCommand}
   */
  readonly deleteServiceSpecificCredential: (
    args: DeleteServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteServiceSpecificCredentialCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError
  >;

  /**
   * @see {@link DeleteSigningCertificateCommand}
   */
  readonly deleteSigningCertificate: (
    args: DeleteSigningCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteSigningCertificateCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteSSHPublicKeyCommand}
   */
  readonly deleteSSHPublicKey: (
    args: DeleteSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteSSHPublicKeyCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  readonly deleteUser: (
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteUserCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteUserPermissionsBoundaryCommand}
   */
  readonly deleteUserPermissionsBoundary: (
    args: DeleteUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteUserPermissionsBoundaryCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link DeleteUserPolicyCommand}
   */
  readonly deleteUserPolicy: (
    args: DeleteUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteUserPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DeleteVirtualMFADeviceCommand}
   */
  readonly deleteVirtualMFADevice: (
    args: DeleteVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVirtualMFADeviceCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DetachGroupPolicyCommand}
   */
  readonly detachGroupPolicy: (
    args: DetachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DetachGroupPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link DetachRolePolicyCommand}
   */
  readonly detachRolePolicy: (
    args: DetachRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DetachRolePolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link DetachUserPolicyCommand}
   */
  readonly detachUserPolicy: (
    args: DetachUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DetachUserPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link EnableMFADeviceCommand}
   */
  readonly enableMFADevice: (
    args: EnableMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableMFADeviceCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | EntityTemporarilyUnmodifiableError
    | InvalidAuthenticationCodeError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link GenerateCredentialReportCommand}
   */
  readonly generateCredentialReport: (
    args: GenerateCredentialReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GenerateCredentialReportCommandOutput,
    SdkError | IAMServiceError | LimitExceededError | ServiceFailureError
  >;

  /**
   * @see {@link GenerateOrganizationsAccessReportCommand}
   */
  readonly generateOrganizationsAccessReport: (
    args: GenerateOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GenerateOrganizationsAccessReportCommandOutput,
    SdkError | IAMServiceError | ReportGenerationLimitExceededError
  >;

  /**
   * @see {@link GenerateServiceLastAccessedDetailsCommand}
   */
  readonly generateServiceLastAccessedDetails: (
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GenerateServiceLastAccessedDetailsCommandOutput,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetAccessKeyLastUsedCommand}
   */
  readonly getAccessKeyLastUsed: (
    args: GetAccessKeyLastUsedCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetAccessKeyLastUsedCommandOutput,
    SdkError | IAMServiceError
  >;

  /**
   * @see {@link GetAccountAuthorizationDetailsCommand}
   */
  readonly getAccountAuthorizationDetails: (
    args: GetAccountAuthorizationDetailsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetAccountAuthorizationDetailsCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link GetAccountPasswordPolicyCommand}
   */
  readonly getAccountPasswordPolicy: (
    args: GetAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetAccountPasswordPolicyCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetAccountSummaryCommand}
   */
  readonly getAccountSummary: (
    args: GetAccountSummaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetAccountSummaryCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link GetContextKeysForCustomPolicyCommand}
   */
  readonly getContextKeysForCustomPolicy: (
    args: GetContextKeysForCustomPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetContextKeysForCustomPolicyCommandOutput,
    SdkError | IAMServiceError | InvalidInputError
  >;

  /**
   * @see {@link GetContextKeysForPrincipalPolicyCommand}
   */
  readonly getContextKeysForPrincipalPolicy: (
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetContextKeysForPrincipalPolicyCommandOutput,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetCredentialReportCommand}
   */
  readonly getCredentialReport: (
    args: GetCredentialReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetCredentialReportCommandOutput,
    | SdkError
    | IAMServiceError
    | CredentialReportExpiredError
    | CredentialReportNotPresentError
    | CredentialReportNotReadyError
    | ServiceFailureError
  >;

  /**
   * @see {@link GetGroupCommand}
   */
  readonly getGroup: (
    args: GetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetGroupCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetGroupPolicyCommand}
   */
  readonly getGroupPolicy: (
    args: GetGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetGroupPolicyCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetInstanceProfileCommand}
   */
  readonly getInstanceProfile: (
    args: GetInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetInstanceProfileCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetLoginProfileCommand}
   */
  readonly getLoginProfile: (
    args: GetLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetLoginProfileCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetMFADeviceCommand}
   */
  readonly getMFADevice: (
    args: GetMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetMFADeviceCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetOpenIDConnectProviderCommand}
   */
  readonly getOpenIDConnectProvider: (
    args: GetOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetOpenIDConnectProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link GetOrganizationsAccessReportCommand}
   */
  readonly getOrganizationsAccessReport: (
    args: GetOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetOrganizationsAccessReportCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError
  >;

  /**
   * @see {@link GetPolicyCommand}
   */
  readonly getPolicy: (
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link GetPolicyVersionCommand}
   */
  readonly getPolicyVersion: (
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetPolicyVersionCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link GetRoleCommand}
   */
  readonly getRole: (
    args: GetRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetRoleCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetRolePolicyCommand}
   */
  readonly getRolePolicy: (
    args: GetRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetRolePolicyCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetSAMLProviderCommand}
   */
  readonly getSAMLProvider: (
    args: GetSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetSAMLProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link GetServerCertificateCommand}
   */
  readonly getServerCertificate: (
    args: GetServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetServerCertificateCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsCommand}
   */
  readonly getServiceLastAccessedDetails: (
    args: GetServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetServiceLastAccessedDetailsCommandOutput,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommand}
   */
  readonly getServiceLastAccessedDetailsWithEntities: (
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link GetServiceLinkedRoleDeletionStatusCommand}
   */
  readonly getServiceLinkedRoleDeletionStatus: (
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetServiceLinkedRoleDeletionStatusCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link GetSSHPublicKeyCommand}
   */
  readonly getSSHPublicKey: (
    args: GetSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetSSHPublicKeyCommandOutput,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | UnrecognizedPublicKeyEncodingError
  >;

  /**
   * @see {@link GetUserCommand}
   */
  readonly getUser: (
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetUserCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link GetUserPolicyCommand}
   */
  readonly getUserPolicy: (
    args: GetUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetUserPolicyCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListAccessKeysCommand}
   */
  readonly listAccessKeys: (
    args: ListAccessKeysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListAccessKeysCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListAccountAliasesCommand}
   */
  readonly listAccountAliases: (
    args: ListAccountAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListAccountAliasesCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListAttachedGroupPoliciesCommand}
   */
  readonly listAttachedGroupPolicies: (
    args: ListAttachedGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListAttachedGroupPoliciesCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListAttachedRolePoliciesCommand}
   */
  readonly listAttachedRolePolicies: (
    args: ListAttachedRolePoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListAttachedRolePoliciesCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListAttachedUserPoliciesCommand}
   */
  readonly listAttachedUserPolicies: (
    args: ListAttachedUserPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListAttachedUserPoliciesCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListEntitiesForPolicyCommand}
   */
  readonly listEntitiesForPolicy: (
    args: ListEntitiesForPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListEntitiesForPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListGroupPoliciesCommand}
   */
  readonly listGroupPolicies: (
    args: ListGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListGroupPoliciesCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListGroupsCommand}
   */
  readonly listGroups: (
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListGroupsCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListGroupsForUserCommand}
   */
  readonly listGroupsForUser: (
    args: ListGroupsForUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListGroupsForUserCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListInstanceProfilesCommand}
   */
  readonly listInstanceProfiles: (
    args: ListInstanceProfilesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListInstanceProfilesCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListInstanceProfilesForRoleCommand}
   */
  readonly listInstanceProfilesForRole: (
    args: ListInstanceProfilesForRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListInstanceProfilesForRoleCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListInstanceProfileTagsCommand}
   */
  readonly listInstanceProfileTags: (
    args: ListInstanceProfileTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListInstanceProfileTagsCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListMFADevicesCommand}
   */
  readonly listMFADevices: (
    args: ListMFADevicesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListMFADevicesCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListMFADeviceTagsCommand}
   */
  readonly listMFADeviceTags: (
    args: ListMFADeviceTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListMFADeviceTagsCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListOpenIDConnectProvidersCommand}
   */
  readonly listOpenIDConnectProviders: (
    args: ListOpenIDConnectProvidersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListOpenIDConnectProvidersCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListOpenIDConnectProviderTagsCommand}
   */
  readonly listOpenIDConnectProviderTags: (
    args: ListOpenIDConnectProviderTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListOpenIDConnectProviderTagsCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListPoliciesCommand}
   */
  readonly listPolicies: (
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListPoliciesCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListPoliciesGrantingServiceAccessCommand}
   */
  readonly listPoliciesGrantingServiceAccess: (
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListPoliciesGrantingServiceAccessCommandOutput,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError
  >;

  /**
   * @see {@link ListPolicyTagsCommand}
   */
  readonly listPolicyTags: (
    args: ListPolicyTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListPolicyTagsCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  readonly listPolicyVersions: (
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListPolicyVersionsCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListRolePoliciesCommand}
   */
  readonly listRolePolicies: (
    args: ListRolePoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListRolePoliciesCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListRolesCommand}
   */
  readonly listRoles: (
    args: ListRolesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListRolesCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListRoleTagsCommand}
   */
  readonly listRoleTags: (
    args: ListRoleTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListRoleTagsCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListSAMLProvidersCommand}
   */
  readonly listSAMLProviders: (
    args: ListSAMLProvidersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListSAMLProvidersCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListSAMLProviderTagsCommand}
   */
  readonly listSAMLProviderTags: (
    args: ListSAMLProviderTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListSAMLProviderTagsCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ListServerCertificatesCommand}
   */
  readonly listServerCertificates: (
    args: ListServerCertificatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListServerCertificatesCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListServerCertificateTagsCommand}
   */
  readonly listServerCertificateTags: (
    args: ListServerCertificateTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListServerCertificateTagsCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListServiceSpecificCredentialsCommand}
   */
  readonly listServiceSpecificCredentials: (
    args: ListServiceSpecificCredentialsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListServiceSpecificCredentialsCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceNotSupportedError
  >;

  /**
   * @see {@link ListSigningCertificatesCommand}
   */
  readonly listSigningCertificates: (
    args: ListSigningCertificatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListSigningCertificatesCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListSSHPublicKeysCommand}
   */
  readonly listSSHPublicKeys: (
    args: ListSSHPublicKeysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListSSHPublicKeysCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError
  >;

  /**
   * @see {@link ListUserPoliciesCommand}
   */
  readonly listUserPolicies: (
    args: ListUserPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListUserPoliciesCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  readonly listUsers: (
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListUsersCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link ListUserTagsCommand}
   */
  readonly listUserTags: (
    args: ListUserTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListUserTagsCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError
  >;

  /**
   * @see {@link ListVirtualMFADevicesCommand}
   */
  readonly listVirtualMFADevices: (
    args: ListVirtualMFADevicesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListVirtualMFADevicesCommandOutput,
    SdkError | IAMServiceError
  >;

  /**
   * @see {@link PutGroupPolicyCommand}
   */
  readonly putGroupPolicy: (
    args: PutGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutGroupPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link PutRolePermissionsBoundaryCommand}
   */
  readonly putRolePermissionsBoundary: (
    args: PutRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutRolePermissionsBoundaryCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link PutRolePolicyCommand}
   */
  readonly putRolePolicy: (
    args: PutRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutRolePolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link PutUserPermissionsBoundaryCommand}
   */
  readonly putUserPermissionsBoundary: (
    args: PutUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutUserPermissionsBoundaryCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
  >;

  /**
   * @see {@link PutUserPolicyCommand}
   */
  readonly putUserPolicy: (
    args: PutUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutUserPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link RemoveClientIDFromOpenIDConnectProviderCommand}
   */
  readonly removeClientIDFromOpenIDConnectProvider: (
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveClientIDFromOpenIDConnectProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link RemoveRoleFromInstanceProfileCommand}
   */
  readonly removeRoleFromInstanceProfile: (
    args: RemoveRoleFromInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveRoleFromInstanceProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link RemoveUserFromGroupCommand}
   */
  readonly removeUserFromGroup: (
    args: RemoveUserFromGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemoveUserFromGroupCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link ResetServiceSpecificCredentialCommand}
   */
  readonly resetServiceSpecificCredential: (
    args: ResetServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetServiceSpecificCredentialCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError
  >;

  /**
   * @see {@link ResyncMFADeviceCommand}
   */
  readonly resyncMFADevice: (
    args: ResyncMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResyncMFADeviceCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidAuthenticationCodeError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link SetDefaultPolicyVersionCommand}
   */
  readonly setDefaultPolicyVersion: (
    args: SetDefaultPolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SetDefaultPolicyVersionCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link SetSecurityTokenServicePreferencesCommand}
   */
  readonly setSecurityTokenServicePreferences: (
    args: SetSecurityTokenServicePreferencesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SetSecurityTokenServicePreferencesCommandOutput,
    SdkError | IAMServiceError | ServiceFailureError
  >;

  /**
   * @see {@link SimulateCustomPolicyCommand}
   */
  readonly simulateCustomPolicy: (
    args: SimulateCustomPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SimulateCustomPolicyCommandOutput,
    SdkError | IAMServiceError | InvalidInputError | PolicyEvaluationError
  >;

  /**
   * @see {@link SimulatePrincipalPolicyCommand}
   */
  readonly simulatePrincipalPolicy: (
    args: SimulatePrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SimulatePrincipalPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | PolicyEvaluationError
  >;

  /**
   * @see {@link TagInstanceProfileCommand}
   */
  readonly tagInstanceProfile: (
    args: TagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagInstanceProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagMFADeviceCommand}
   */
  readonly tagMFADevice: (
    args: TagMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagMFADeviceCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagOpenIDConnectProviderCommand}
   */
  readonly tagOpenIDConnectProvider: (
    args: TagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagOpenIDConnectProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagPolicyCommand}
   */
  readonly tagPolicy: (
    args: TagPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagRoleCommand}
   */
  readonly tagRole: (
    args: TagRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagRoleCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagSAMLProviderCommand}
   */
  readonly tagSAMLProvider: (
    args: TagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagSAMLProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagServerCertificateCommand}
   */
  readonly tagServerCertificate: (
    args: TagServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagServerCertificateCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link TagUserCommand}
   */
  readonly tagUser: (
    args: TagUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagUserCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagInstanceProfileCommand}
   */
  readonly untagInstanceProfile: (
    args: UntagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagInstanceProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagMFADeviceCommand}
   */
  readonly untagMFADevice: (
    args: UntagMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagMFADeviceCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagOpenIDConnectProviderCommand}
   */
  readonly untagOpenIDConnectProvider: (
    args: UntagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagOpenIDConnectProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagPolicyCommand}
   */
  readonly untagPolicy: (
    args: UntagPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagRoleCommand}
   */
  readonly untagRole: (
    args: UntagRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagRoleCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagSAMLProviderCommand}
   */
  readonly untagSAMLProvider: (
    args: UntagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagSAMLProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagServerCertificateCommand}
   */
  readonly untagServerCertificate: (
    args: UntagServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagServerCertificateCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UntagUserCommand}
   */
  readonly untagUser: (
    args: UntagUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagUserCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateAccessKeyCommand}
   */
  readonly updateAccessKey: (
    args: UpdateAccessKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateAccessKeyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateAccountPasswordPolicyCommand}
   */
  readonly updateAccountPasswordPolicy: (
    args: UpdateAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateAccountPasswordPolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateAssumeRolePolicyCommand}
   */
  readonly updateAssumeRolePolicy: (
    args: UpdateAssumeRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateAssumeRolePolicyCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link UpdateGroupCommand}
   */
  readonly updateGroup: (
    args: UpdateGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateGroupCommandOutput,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateLoginProfileCommand}
   */
  readonly updateLoginProfile: (
    args: UpdateLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateLoginProfileCommandOutput,
    | SdkError
    | IAMServiceError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateOpenIDConnectProviderThumbprintCommand}
   */
  readonly updateOpenIDConnectProviderThumbprint: (
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateOpenIDConnectProviderThumbprintCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateRoleCommand}
   */
  readonly updateRole: (
    args: UpdateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateRoleCommandOutput,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link UpdateRoleDescriptionCommand}
   */
  readonly updateRoleDescription: (
    args: UpdateRoleDescriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateRoleDescriptionCommandOutput,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError
  >;

  /**
   * @see {@link UpdateSAMLProviderCommand}
   */
  readonly updateSAMLProvider: (
    args: UpdateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateSAMLProviderCommandOutput,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateServerCertificateCommand}
   */
  readonly updateServerCertificate: (
    args: UpdateServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateServerCertificateCommandOutput,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateServiceSpecificCredentialCommand}
   */
  readonly updateServiceSpecificCredential: (
    args: UpdateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateServiceSpecificCredentialCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError
  >;

  /**
   * @see {@link UpdateSigningCertificateCommand}
   */
  readonly updateSigningCertificate: (
    args: UpdateSigningCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateSigningCertificateCommandOutput,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UpdateSSHPublicKeyCommand}
   */
  readonly updateSSHPublicKey: (
    args: UpdateSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateSSHPublicKeyCommandOutput,
    SdkError | IAMServiceError | NoSuchEntityError
  >;

  /**
   * @see {@link UpdateUserCommand}
   */
  readonly updateUser: (
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateUserCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UploadServerCertificateCommand}
   */
  readonly uploadServerCertificate: (
    args: UploadServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UploadServerCertificateCommandOutput,
    | SdkError
    | IAMServiceError
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
  readonly uploadSigningCertificate: (
    args: UploadSigningCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UploadSigningCertificateCommandOutput,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | DuplicateCertificateError
    | EntityAlreadyExistsError
    | InvalidCertificateError
    | LimitExceededError
    | MalformedCertificateError
    | NoSuchEntityError
    | ServiceFailureError
  >;

  /**
   * @see {@link UploadSSHPublicKeyCommand}
   */
  readonly uploadSSHPublicKey: (
    args: UploadSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UploadSSHPublicKeyCommandOutput,
    | SdkError
    | IAMServiceError
    | DuplicateSSHPublicKeyError
    | InvalidPublicKeyError
    | LimitExceededError
    | NoSuchEntityError
    | UnrecognizedPublicKeyEncodingError
  >;
};

/**
 * @since 1.0.0
 * @category tags
 */
export const IAMService = Context.GenericTag<IAMService>(
  "@effect-aws/client-iam/IAMService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIAMService = Effect.gen(function* (_) {
  const client = yield* _(IAMClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof IAMServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<IAMServiceException>
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
  }, {}) as IAMService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseIAMServiceLayer = Layer.effect(IAMService, makeIAMService);

/**
 * @since 1.0.0
 * @category layers
 */
export const IAMServiceLayer = BaseIAMServiceLayer.pipe(
  Layer.provide(IAMClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIAMServiceLayer = IAMServiceLayer.pipe(
  Layer.provide(DefaultIAMClientConfigLayer),
);
