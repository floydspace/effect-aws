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
import { Context, Effect, Layer, ReadonlyRecord, Data } from "effect";
import {
  ConcurrentModificationError,
  CredentialReportExpiredError,
  CredentialReportNotPresentError,
  CredentialReportNotReadyError,
  DeleteConflictError,
  DuplicateCertificateError,
  DuplicateSSHPublicKeyError,
  EntityAlreadyExistsError,
  EntityTemporarilyUnmodifiableError,
  IAMServiceError,
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
  SdkError,
  ServiceFailureError,
  ServiceNotSupportedError,
  TaggedException,
  UnmodifiableEntityError,
  UnrecognizedPublicKeyEncodingError,
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
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    AddClientIDToOpenIDConnectProviderCommandOutput
  >;

  /**
   * @see {@link AddRoleToInstanceProfileCommand}
   */
  readonly addRoleToInstanceProfile: (
    args: AddRoleToInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    AddRoleToInstanceProfileCommandOutput
  >;

  /**
   * @see {@link AddUserToGroupCommand}
   */
  readonly addUserToGroup: (
    args: AddUserToGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    AddUserToGroupCommandOutput
  >;

  /**
   * @see {@link AttachGroupPolicyCommand}
   */
  readonly attachGroupPolicy: (
    args: AttachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError,
    AttachGroupPolicyCommandOutput
  >;

  /**
   * @see {@link AttachRolePolicyCommand}
   */
  readonly attachRolePolicy: (
    args: AttachRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
    | UnmodifiableEntityError,
    AttachRolePolicyCommandOutput
  >;

  /**
   * @see {@link AttachUserPolicyCommand}
   */
  readonly attachUserPolicy: (
    args: AttachUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError,
    AttachUserPolicyCommandOutput
  >;

  /**
   * @see {@link ChangePasswordCommand}
   */
  readonly changePassword: (
    args: ChangePasswordCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityTemporarilyUnmodifiableError
    | InvalidUserTypeError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError,
    ChangePasswordCommandOutput
  >;

  /**
   * @see {@link CreateAccessKeyCommand}
   */
  readonly createAccessKey: (
    args: CreateAccessKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    CreateAccessKeyCommandOutput
  >;

  /**
   * @see {@link CreateAccountAliasCommand}
   */
  readonly createAccountAlias: (
    args: CreateAccountAliasCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | LimitExceededError
    | ServiceFailureError,
    CreateAccountAliasCommandOutput
  >;

  /**
   * @see {@link CreateGroupCommand}
   */
  readonly createGroup: (
    args: CreateGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    CreateGroupCommandOutput
  >;

  /**
   * @see {@link CreateInstanceProfileCommand}
   */
  readonly createInstanceProfile: (
    args: CreateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError,
    CreateInstanceProfileCommandOutput
  >;

  /**
   * @see {@link CreateLoginProfileCommand}
   */
  readonly createLoginProfile: (
    args: CreateLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError,
    CreateLoginProfileCommandOutput
  >;

  /**
   * @see {@link CreateOpenIDConnectProviderCommand}
   */
  readonly createOpenIDConnectProvider: (
    args: CreateOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError,
    CreateOpenIDConnectProviderCommandOutput
  >;

  /**
   * @see {@link CreatePolicyCommand}
   */
  readonly createPolicy: (
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | ServiceFailureError,
    CreatePolicyCommandOutput
  >;

  /**
   * @see {@link CreatePolicyVersionCommand}
   */
  readonly createPolicyVersion: (
    args: CreatePolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError,
    CreatePolicyVersionCommandOutput
  >;

  /**
   * @see {@link CreateRoleCommand}
   */
  readonly createRole: (
    args: CreateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | ServiceFailureError,
    CreateRoleCommandOutput
  >;

  /**
   * @see {@link CreateSAMLProviderCommand}
   */
  readonly createSAMLProvider: (
    args: CreateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError,
    CreateSAMLProviderCommandOutput
  >;

  /**
   * @see {@link CreateServiceLinkedRoleCommand}
   */
  readonly createServiceLinkedRole: (
    args: CreateServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    CreateServiceLinkedRoleCommandOutput
  >;

  /**
   * @see {@link CreateServiceSpecificCredentialCommand}
   */
  readonly createServiceSpecificCredential: (
    args: CreateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceNotSupportedError,
    CreateServiceSpecificCredentialCommandOutput
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  readonly createUser: (
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    CreateUserCommandOutput
  >;

  /**
   * @see {@link CreateVirtualMFADeviceCommand}
   */
  readonly createVirtualMFADevice: (
    args: CreateVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | LimitExceededError
    | ServiceFailureError,
    CreateVirtualMFADeviceCommandOutput
  >;

  /**
   * @see {@link DeactivateMFADeviceCommand}
   */
  readonly deactivateMFADevice: (
    args: DeactivateMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeactivateMFADeviceCommandOutput
  >;

  /**
   * @see {@link DeleteAccessKeyCommand}
   */
  readonly deleteAccessKey: (
    args: DeleteAccessKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteAccessKeyCommandOutput
  >;

  /**
   * @see {@link DeleteAccountAliasCommand}
   */
  readonly deleteAccountAlias: (
    args: DeleteAccountAliasCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteAccountAliasCommandOutput
  >;

  /**
   * @see {@link DeleteAccountPasswordPolicyCommand}
   */
  readonly deleteAccountPasswordPolicy: (
    args: DeleteAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteAccountPasswordPolicyCommandOutput
  >;

  /**
   * @see {@link DeleteGroupCommand}
   */
  readonly deleteGroup: (
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteGroupCommandOutput
  >;

  /**
   * @see {@link DeleteGroupPolicyCommand}
   */
  readonly deleteGroupPolicy: (
    args: DeleteGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteGroupPolicyCommandOutput
  >;

  /**
   * @see {@link DeleteInstanceProfileCommand}
   */
  readonly deleteInstanceProfile: (
    args: DeleteInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteInstanceProfileCommandOutput
  >;

  /**
   * @see {@link DeleteLoginProfileCommand}
   */
  readonly deleteLoginProfile: (
    args: DeleteLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteLoginProfileCommandOutput
  >;

  /**
   * @see {@link DeleteOpenIDConnectProviderCommand}
   */
  readonly deleteOpenIDConnectProvider: (
    args: DeleteOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteOpenIDConnectProviderCommandOutput
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  readonly deletePolicy: (
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeletePolicyCommandOutput
  >;

  /**
   * @see {@link DeletePolicyVersionCommand}
   */
  readonly deletePolicyVersion: (
    args: DeletePolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeletePolicyVersionCommandOutput
  >;

  /**
   * @see {@link DeleteRoleCommand}
   */
  readonly deleteRole: (
    args: DeleteRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    DeleteRoleCommandOutput
  >;

  /**
   * @see {@link DeleteRolePermissionsBoundaryCommand}
   */
  readonly deleteRolePermissionsBoundary: (
    args: DeleteRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    DeleteRolePermissionsBoundaryCommandOutput
  >;

  /**
   * @see {@link DeleteRolePolicyCommand}
   */
  readonly deleteRolePolicy: (
    args: DeleteRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    DeleteRolePolicyCommandOutput
  >;

  /**
   * @see {@link DeleteSAMLProviderCommand}
   */
  readonly deleteSAMLProvider: (
    args: DeleteSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteSAMLProviderCommandOutput
  >;

  /**
   * @see {@link DeleteServerCertificateCommand}
   */
  readonly deleteServerCertificate: (
    args: DeleteServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteServerCertificateCommandOutput
  >;

  /**
   * @see {@link DeleteServiceLinkedRoleCommand}
   */
  readonly deleteServiceLinkedRole: (
    args: DeleteServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteServiceLinkedRoleCommandOutput
  >;

  /**
   * @see {@link DeleteServiceSpecificCredentialCommand}
   */
  readonly deleteServiceSpecificCredential: (
    args: DeleteServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError,
    DeleteServiceSpecificCredentialCommandOutput
  >;

  /**
   * @see {@link DeleteSigningCertificateCommand}
   */
  readonly deleteSigningCertificate: (
    args: DeleteSigningCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteSigningCertificateCommandOutput
  >;

  /**
   * @see {@link DeleteSSHPublicKeyCommand}
   */
  readonly deleteSSHPublicKey: (
    args: DeleteSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError,
    DeleteSSHPublicKeyCommandOutput
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  readonly deleteUser: (
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteUserCommandOutput
  >;

  /**
   * @see {@link DeleteUserPermissionsBoundaryCommand}
   */
  readonly deleteUserPermissionsBoundary: (
    args: DeleteUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    DeleteUserPermissionsBoundaryCommandOutput
  >;

  /**
   * @see {@link DeleteUserPolicyCommand}
   */
  readonly deleteUserPolicy: (
    args: DeleteUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteUserPolicyCommandOutput
  >;

  /**
   * @see {@link DeleteVirtualMFADeviceCommand}
   */
  readonly deleteVirtualMFADevice: (
    args: DeleteVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | DeleteConflictError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DeleteVirtualMFADeviceCommandOutput
  >;

  /**
   * @see {@link DetachGroupPolicyCommand}
   */
  readonly detachGroupPolicy: (
    args: DetachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DetachGroupPolicyCommandOutput
  >;

  /**
   * @see {@link DetachRolePolicyCommand}
   */
  readonly detachRolePolicy: (
    args: DetachRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    DetachRolePolicyCommandOutput
  >;

  /**
   * @see {@link DetachUserPolicyCommand}
   */
  readonly detachUserPolicy: (
    args: DetachUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    DetachUserPolicyCommandOutput
  >;

  /**
   * @see {@link EnableMFADeviceCommand}
   */
  readonly enableMFADevice: (
    args: EnableMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | EntityTemporarilyUnmodifiableError
    | InvalidAuthenticationCodeError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    EnableMFADeviceCommandOutput
  >;

  /**
   * @see {@link GenerateCredentialReportCommand}
   */
  readonly generateCredentialReport: (
    args: GenerateCredentialReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | LimitExceededError | ServiceFailureError,
    GenerateCredentialReportCommandOutput
  >;

  /**
   * @see {@link GenerateOrganizationsAccessReportCommand}
   */
  readonly generateOrganizationsAccessReport: (
    args: GenerateOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ReportGenerationLimitExceededError,
    GenerateOrganizationsAccessReportCommandOutput
  >;

  /**
   * @see {@link GenerateServiceLastAccessedDetailsCommand}
   */
  readonly generateServiceLastAccessedDetails: (
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError,
    GenerateServiceLastAccessedDetailsCommandOutput
  >;

  /**
   * @see {@link GetAccessKeyLastUsedCommand}
   */
  readonly getAccessKeyLastUsed: (
    args: GetAccessKeyLastUsedCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError,
    GetAccessKeyLastUsedCommandOutput
  >;

  /**
   * @see {@link GetAccountAuthorizationDetailsCommand}
   */
  readonly getAccountAuthorizationDetails: (
    args: GetAccountAuthorizationDetailsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    GetAccountAuthorizationDetailsCommandOutput
  >;

  /**
   * @see {@link GetAccountPasswordPolicyCommand}
   */
  readonly getAccountPasswordPolicy: (
    args: GetAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetAccountPasswordPolicyCommandOutput
  >;

  /**
   * @see {@link GetAccountSummaryCommand}
   */
  readonly getAccountSummary: (
    args: GetAccountSummaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    GetAccountSummaryCommandOutput
  >;

  /**
   * @see {@link GetContextKeysForCustomPolicyCommand}
   */
  readonly getContextKeysForCustomPolicy: (
    args: GetContextKeysForCustomPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | InvalidInputError,
    GetContextKeysForCustomPolicyCommandOutput
  >;

  /**
   * @see {@link GetContextKeysForPrincipalPolicyCommand}
   */
  readonly getContextKeysForPrincipalPolicy: (
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError,
    GetContextKeysForPrincipalPolicyCommandOutput
  >;

  /**
   * @see {@link GetCredentialReportCommand}
   */
  readonly getCredentialReport: (
    args: GetCredentialReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | CredentialReportExpiredError
    | CredentialReportNotPresentError
    | CredentialReportNotReadyError
    | ServiceFailureError,
    GetCredentialReportCommandOutput
  >;

  /**
   * @see {@link GetGroupCommand}
   */
  readonly getGroup: (
    args: GetGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetGroupCommandOutput
  >;

  /**
   * @see {@link GetGroupPolicyCommand}
   */
  readonly getGroupPolicy: (
    args: GetGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetGroupPolicyCommandOutput
  >;

  /**
   * @see {@link GetInstanceProfileCommand}
   */
  readonly getInstanceProfile: (
    args: GetInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetInstanceProfileCommandOutput
  >;

  /**
   * @see {@link GetLoginProfileCommand}
   */
  readonly getLoginProfile: (
    args: GetLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetLoginProfileCommandOutput
  >;

  /**
   * @see {@link GetMFADeviceCommand}
   */
  readonly getMFADevice: (
    args: GetMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetMFADeviceCommandOutput
  >;

  /**
   * @see {@link GetOpenIDConnectProviderCommand}
   */
  readonly getOpenIDConnectProvider: (
    args: GetOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    GetOpenIDConnectProviderCommandOutput
  >;

  /**
   * @see {@link GetOrganizationsAccessReportCommand}
   */
  readonly getOrganizationsAccessReport: (
    args: GetOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError,
    GetOrganizationsAccessReportCommandOutput
  >;

  /**
   * @see {@link GetPolicyCommand}
   */
  readonly getPolicy: (
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    GetPolicyCommandOutput
  >;

  /**
   * @see {@link GetPolicyVersionCommand}
   */
  readonly getPolicyVersion: (
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    GetPolicyVersionCommandOutput
  >;

  /**
   * @see {@link GetRoleCommand}
   */
  readonly getRole: (
    args: GetRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetRoleCommandOutput
  >;

  /**
   * @see {@link GetRolePolicyCommand}
   */
  readonly getRolePolicy: (
    args: GetRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetRolePolicyCommandOutput
  >;

  /**
   * @see {@link GetSAMLProviderCommand}
   */
  readonly getSAMLProvider: (
    args: GetSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    GetSAMLProviderCommandOutput
  >;

  /**
   * @see {@link GetServerCertificateCommand}
   */
  readonly getServerCertificate: (
    args: GetServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetServerCertificateCommandOutput
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsCommand}
   */
  readonly getServiceLastAccessedDetails: (
    args: GetServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError,
    GetServiceLastAccessedDetailsCommandOutput
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommand}
   */
  readonly getServiceLastAccessedDetailsWithEntities: (
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError,
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  >;

  /**
   * @see {@link GetServiceLinkedRoleDeletionStatusCommand}
   */
  readonly getServiceLinkedRoleDeletionStatus: (
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    GetServiceLinkedRoleDeletionStatusCommandOutput
  >;

  /**
   * @see {@link GetSSHPublicKeyCommand}
   */
  readonly getSSHPublicKey: (
    args: GetSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | UnrecognizedPublicKeyEncodingError,
    GetSSHPublicKeyCommandOutput
  >;

  /**
   * @see {@link GetUserCommand}
   */
  readonly getUser: (
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetUserCommandOutput
  >;

  /**
   * @see {@link GetUserPolicyCommand}
   */
  readonly getUserPolicy: (
    args: GetUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    GetUserPolicyCommandOutput
  >;

  /**
   * @see {@link ListAccessKeysCommand}
   */
  readonly listAccessKeys: (
    args: ListAccessKeysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListAccessKeysCommandOutput
  >;

  /**
   * @see {@link ListAccountAliasesCommand}
   */
  readonly listAccountAliases: (
    args: ListAccountAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListAccountAliasesCommandOutput
  >;

  /**
   * @see {@link ListAttachedGroupPoliciesCommand}
   */
  readonly listAttachedGroupPolicies: (
    args: ListAttachedGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListAttachedGroupPoliciesCommandOutput
  >;

  /**
   * @see {@link ListAttachedRolePoliciesCommand}
   */
  readonly listAttachedRolePolicies: (
    args: ListAttachedRolePoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListAttachedRolePoliciesCommandOutput
  >;

  /**
   * @see {@link ListAttachedUserPoliciesCommand}
   */
  readonly listAttachedUserPolicies: (
    args: ListAttachedUserPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListAttachedUserPoliciesCommandOutput
  >;

  /**
   * @see {@link ListEntitiesForPolicyCommand}
   */
  readonly listEntitiesForPolicy: (
    args: ListEntitiesForPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListEntitiesForPolicyCommandOutput
  >;

  /**
   * @see {@link ListGroupPoliciesCommand}
   */
  readonly listGroupPolicies: (
    args: ListGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListGroupPoliciesCommandOutput
  >;

  /**
   * @see {@link ListGroupsCommand}
   */
  readonly listGroups: (
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListGroupsCommandOutput
  >;

  /**
   * @see {@link ListGroupsForUserCommand}
   */
  readonly listGroupsForUser: (
    args: ListGroupsForUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListGroupsForUserCommandOutput
  >;

  /**
   * @see {@link ListInstanceProfilesCommand}
   */
  readonly listInstanceProfiles: (
    args: ListInstanceProfilesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListInstanceProfilesCommandOutput
  >;

  /**
   * @see {@link ListInstanceProfilesForRoleCommand}
   */
  readonly listInstanceProfilesForRole: (
    args: ListInstanceProfilesForRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListInstanceProfilesForRoleCommandOutput
  >;

  /**
   * @see {@link ListInstanceProfileTagsCommand}
   */
  readonly listInstanceProfileTags: (
    args: ListInstanceProfileTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListInstanceProfileTagsCommandOutput
  >;

  /**
   * @see {@link ListMFADevicesCommand}
   */
  readonly listMFADevices: (
    args: ListMFADevicesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListMFADevicesCommandOutput
  >;

  /**
   * @see {@link ListMFADeviceTagsCommand}
   */
  readonly listMFADeviceTags: (
    args: ListMFADeviceTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListMFADeviceTagsCommandOutput
  >;

  /**
   * @see {@link ListOpenIDConnectProvidersCommand}
   */
  readonly listOpenIDConnectProviders: (
    args: ListOpenIDConnectProvidersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListOpenIDConnectProvidersCommandOutput
  >;

  /**
   * @see {@link ListOpenIDConnectProviderTagsCommand}
   */
  readonly listOpenIDConnectProviderTags: (
    args: ListOpenIDConnectProviderTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListOpenIDConnectProviderTagsCommandOutput
  >;

  /**
   * @see {@link ListPoliciesCommand}
   */
  readonly listPolicies: (
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListPoliciesCommandOutput
  >;

  /**
   * @see {@link ListPoliciesGrantingServiceAccessCommand}
   */
  readonly listPoliciesGrantingServiceAccess: (
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | InvalidInputError | NoSuchEntityError,
    ListPoliciesGrantingServiceAccessCommandOutput
  >;

  /**
   * @see {@link ListPolicyTagsCommand}
   */
  readonly listPolicyTags: (
    args: ListPolicyTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListPolicyTagsCommandOutput
  >;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  readonly listPolicyVersions: (
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListPolicyVersionsCommandOutput
  >;

  /**
   * @see {@link ListRolePoliciesCommand}
   */
  readonly listRolePolicies: (
    args: ListRolePoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListRolePoliciesCommandOutput
  >;

  /**
   * @see {@link ListRolesCommand}
   */
  readonly listRoles: (
    args: ListRolesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListRolesCommandOutput
  >;

  /**
   * @see {@link ListRoleTagsCommand}
   */
  readonly listRoleTags: (
    args: ListRoleTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListRoleTagsCommandOutput
  >;

  /**
   * @see {@link ListSAMLProvidersCommand}
   */
  readonly listSAMLProviders: (
    args: ListSAMLProvidersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListSAMLProvidersCommandOutput
  >;

  /**
   * @see {@link ListSAMLProviderTagsCommand}
   */
  readonly listSAMLProviderTags: (
    args: ListSAMLProviderTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    ListSAMLProviderTagsCommandOutput
  >;

  /**
   * @see {@link ListServerCertificatesCommand}
   */
  readonly listServerCertificates: (
    args: ListServerCertificatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListServerCertificatesCommandOutput
  >;

  /**
   * @see {@link ListServerCertificateTagsCommand}
   */
  readonly listServerCertificateTags: (
    args: ListServerCertificateTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListServerCertificateTagsCommandOutput
  >;

  /**
   * @see {@link ListServiceSpecificCredentialsCommand}
   */
  readonly listServiceSpecificCredentials: (
    args: ListServiceSpecificCredentialsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceNotSupportedError,
    ListServiceSpecificCredentialsCommandOutput
  >;

  /**
   * @see {@link ListSigningCertificatesCommand}
   */
  readonly listSigningCertificates: (
    args: ListSigningCertificatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListSigningCertificatesCommandOutput
  >;

  /**
   * @see {@link ListSSHPublicKeysCommand}
   */
  readonly listSSHPublicKeys: (
    args: ListSSHPublicKeysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError,
    ListSSHPublicKeysCommandOutput
  >;

  /**
   * @see {@link ListUserPoliciesCommand}
   */
  readonly listUserPolicies: (
    args: ListUserPoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListUserPoliciesCommandOutput
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  readonly listUsers: (
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    ListUsersCommandOutput
  >;

  /**
   * @see {@link ListUserTagsCommand}
   */
  readonly listUserTags: (
    args: ListUserTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError | ServiceFailureError,
    ListUserTagsCommandOutput
  >;

  /**
   * @see {@link ListVirtualMFADevicesCommand}
   */
  readonly listVirtualMFADevices: (
    args: ListVirtualMFADevicesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError,
    ListVirtualMFADevicesCommandOutput
  >;

  /**
   * @see {@link PutGroupPolicyCommand}
   */
  readonly putGroupPolicy: (
    args: PutGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError,
    PutGroupPolicyCommandOutput
  >;

  /**
   * @see {@link PutRolePermissionsBoundaryCommand}
   */
  readonly putRolePermissionsBoundary: (
    args: PutRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError
    | UnmodifiableEntityError,
    PutRolePermissionsBoundaryCommandOutput
  >;

  /**
   * @see {@link PutRolePolicyCommand}
   */
  readonly putRolePolicy: (
    args: PutRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    PutRolePolicyCommandOutput
  >;

  /**
   * @see {@link PutUserPermissionsBoundaryCommand}
   */
  readonly putUserPermissionsBoundary: (
    args: PutUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | PolicyNotAttachableError
    | ServiceFailureError,
    PutUserPermissionsBoundaryCommandOutput
  >;

  /**
   * @see {@link PutUserPolicyCommand}
   */
  readonly putUserPolicy: (
    args: PutUserPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError,
    PutUserPolicyCommandOutput
  >;

  /**
   * @see {@link RemoveClientIDFromOpenIDConnectProviderCommand}
   */
  readonly removeClientIDFromOpenIDConnectProvider: (
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    RemoveClientIDFromOpenIDConnectProviderCommandOutput
  >;

  /**
   * @see {@link RemoveRoleFromInstanceProfileCommand}
   */
  readonly removeRoleFromInstanceProfile: (
    args: RemoveRoleFromInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    RemoveRoleFromInstanceProfileCommandOutput
  >;

  /**
   * @see {@link RemoveUserFromGroupCommand}
   */
  readonly removeUserFromGroup: (
    args: RemoveUserFromGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    RemoveUserFromGroupCommandOutput
  >;

  /**
   * @see {@link ResetServiceSpecificCredentialCommand}
   */
  readonly resetServiceSpecificCredential: (
    args: ResetServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError,
    ResetServiceSpecificCredentialCommandOutput
  >;

  /**
   * @see {@link ResyncMFADeviceCommand}
   */
  readonly resyncMFADevice: (
    args: ResyncMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidAuthenticationCodeError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    ResyncMFADeviceCommandOutput
  >;

  /**
   * @see {@link SetDefaultPolicyVersionCommand}
   */
  readonly setDefaultPolicyVersion: (
    args: SetDefaultPolicyVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    SetDefaultPolicyVersionCommandOutput
  >;

  /**
   * @see {@link SetSecurityTokenServicePreferencesCommand}
   */
  readonly setSecurityTokenServicePreferences: (
    args: SetSecurityTokenServicePreferencesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | ServiceFailureError,
    SetSecurityTokenServicePreferencesCommandOutput
  >;

  /**
   * @see {@link SimulateCustomPolicyCommand}
   */
  readonly simulateCustomPolicy: (
    args: SimulateCustomPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | InvalidInputError | PolicyEvaluationError,
    SimulateCustomPolicyCommandOutput
  >;

  /**
   * @see {@link SimulatePrincipalPolicyCommand}
   */
  readonly simulatePrincipalPolicy: (
    args: SimulatePrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | PolicyEvaluationError,
    SimulatePrincipalPolicyCommandOutput
  >;

  /**
   * @see {@link TagInstanceProfileCommand}
   */
  readonly tagInstanceProfile: (
    args: TagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagInstanceProfileCommandOutput
  >;

  /**
   * @see {@link TagMFADeviceCommand}
   */
  readonly tagMFADevice: (
    args: TagMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagMFADeviceCommandOutput
  >;

  /**
   * @see {@link TagOpenIDConnectProviderCommand}
   */
  readonly tagOpenIDConnectProvider: (
    args: TagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagOpenIDConnectProviderCommandOutput
  >;

  /**
   * @see {@link TagPolicyCommand}
   */
  readonly tagPolicy: (
    args: TagPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagPolicyCommandOutput
  >;

  /**
   * @see {@link TagRoleCommand}
   */
  readonly tagRole: (
    args: TagRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagRoleCommandOutput
  >;

  /**
   * @see {@link TagSAMLProviderCommand}
   */
  readonly tagSAMLProvider: (
    args: TagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagSAMLProviderCommandOutput
  >;

  /**
   * @see {@link TagServerCertificateCommand}
   */
  readonly tagServerCertificate: (
    args: TagServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagServerCertificateCommandOutput
  >;

  /**
   * @see {@link TagUserCommand}
   */
  readonly tagUser: (
    args: TagUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    TagUserCommandOutput
  >;

  /**
   * @see {@link UntagInstanceProfileCommand}
   */
  readonly untagInstanceProfile: (
    args: UntagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagInstanceProfileCommandOutput
  >;

  /**
   * @see {@link UntagMFADeviceCommand}
   */
  readonly untagMFADevice: (
    args: UntagMFADeviceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagMFADeviceCommandOutput
  >;

  /**
   * @see {@link UntagOpenIDConnectProviderCommand}
   */
  readonly untagOpenIDConnectProvider: (
    args: UntagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagOpenIDConnectProviderCommandOutput
  >;

  /**
   * @see {@link UntagPolicyCommand}
   */
  readonly untagPolicy: (
    args: UntagPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagPolicyCommandOutput
  >;

  /**
   * @see {@link UntagRoleCommand}
   */
  readonly untagRole: (
    args: UntagRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagRoleCommandOutput
  >;

  /**
   * @see {@link UntagSAMLProviderCommand}
   */
  readonly untagSAMLProvider: (
    args: UntagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagSAMLProviderCommandOutput
  >;

  /**
   * @see {@link UntagServerCertificateCommand}
   */
  readonly untagServerCertificate: (
    args: UntagServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagServerCertificateCommandOutput
  >;

  /**
   * @see {@link UntagUserCommand}
   */
  readonly untagUser: (
    args: UntagUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | NoSuchEntityError
    | ServiceFailureError,
    UntagUserCommandOutput
  >;

  /**
   * @see {@link UpdateAccessKeyCommand}
   */
  readonly updateAccessKey: (
    args: UpdateAccessKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateAccessKeyCommandOutput
  >;

  /**
   * @see {@link UpdateAccountPasswordPolicyCommand}
   */
  readonly updateAccountPasswordPolicy: (
    args: UpdateAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateAccountPasswordPolicyCommandOutput
  >;

  /**
   * @see {@link UpdateAssumeRolePolicyCommand}
   */
  readonly updateAssumeRolePolicy: (
    args: UpdateAssumeRolePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    UpdateAssumeRolePolicyCommandOutput
  >;

  /**
   * @see {@link UpdateGroupCommand}
   */
  readonly updateGroup: (
    args: UpdateGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateGroupCommandOutput
  >;

  /**
   * @see {@link UpdateLoginProfileCommand}
   */
  readonly updateLoginProfile: (
    args: UpdateLoginProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | PasswordPolicyViolationError
    | ServiceFailureError,
    UpdateLoginProfileCommandOutput
  >;

  /**
   * @see {@link UpdateOpenIDConnectProviderThumbprintCommand}
   */
  readonly updateOpenIDConnectProviderThumbprint: (
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateOpenIDConnectProviderThumbprintCommandOutput
  >;

  /**
   * @see {@link UpdateRoleCommand}
   */
  readonly updateRole: (
    args: UpdateRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    UpdateRoleCommandOutput
  >;

  /**
   * @see {@link UpdateRoleDescriptionCommand}
   */
  readonly updateRoleDescription: (
    args: UpdateRoleDescriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | NoSuchEntityError
    | ServiceFailureError
    | UnmodifiableEntityError,
    UpdateRoleDescriptionCommandOutput
  >;

  /**
   * @see {@link UpdateSAMLProviderCommand}
   */
  readonly updateSAMLProvider: (
    args: UpdateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | InvalidInputError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateSAMLProviderCommandOutput
  >;

  /**
   * @see {@link UpdateServerCertificateCommand}
   */
  readonly updateServerCertificate: (
    args: UpdateServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | EntityAlreadyExistsError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateServerCertificateCommandOutput
  >;

  /**
   * @see {@link UpdateServiceSpecificCredentialCommand}
   */
  readonly updateServiceSpecificCredential: (
    args: UpdateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError,
    UpdateServiceSpecificCredentialCommandOutput
  >;

  /**
   * @see {@link UpdateSigningCertificateCommand}
   */
  readonly updateSigningCertificate: (
    args: UpdateSigningCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateSigningCertificateCommandOutput
  >;

  /**
   * @see {@link UpdateSSHPublicKeyCommand}
   */
  readonly updateSSHPublicKey: (
    args: UpdateSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | IAMServiceError | NoSuchEntityError,
    UpdateSSHPublicKeyCommandOutput
  >;

  /**
   * @see {@link UpdateUserCommand}
   */
  readonly updateUser: (
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | EntityTemporarilyUnmodifiableError
    | LimitExceededError
    | NoSuchEntityError
    | ServiceFailureError,
    UpdateUserCommandOutput
  >;

  /**
   * @see {@link UploadServerCertificateCommand}
   */
  readonly uploadServerCertificate: (
    args: UploadServerCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | EntityAlreadyExistsError
    | InvalidInputError
    | KeyPairMismatchError
    | LimitExceededError
    | MalformedCertificateError
    | ServiceFailureError,
    UploadServerCertificateCommandOutput
  >;

  /**
   * @see {@link UploadSigningCertificateCommand}
   */
  readonly uploadSigningCertificate: (
    args: UploadSigningCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | ConcurrentModificationError
    | DuplicateCertificateError
    | EntityAlreadyExistsError
    | InvalidCertificateError
    | LimitExceededError
    | MalformedCertificateError
    | NoSuchEntityError
    | ServiceFailureError,
    UploadSigningCertificateCommandOutput
  >;

  /**
   * @see {@link UploadSSHPublicKeyCommand}
   */
  readonly uploadSSHPublicKey: (
    args: UploadSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    | SdkError
    | IAMServiceError
    | DuplicateSSHPublicKeyError
    | InvalidPublicKeyError
    | LimitExceededError
    | NoSuchEntityError
    | UnrecognizedPublicKeyEncodingError,
    UploadSSHPublicKeyCommandOutput
  >;
};

/**
 * @since 1.0.0
 * @category tags
 */
export const IAMService = Context.Tag<IAMService>(
  Symbol.for("@effect-aws/client-iam/IAMService"),
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIAMService = Effect.gen(function* (_) {
  const client = yield* _(IAMClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
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
