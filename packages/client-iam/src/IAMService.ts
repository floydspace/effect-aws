/**
 * @since 1.0.0
 */
import {
  IAMServiceException as SdkIAMServiceException,
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
  type AddClientIDToOpenIDConnectProviderRequest,
  type AddRoleToInstanceProfileRequest,
  type AddUserToGroupRequest,
  type AttachGroupPolicyRequest,
  type AttachRolePolicyRequest,
  type AttachUserPolicyRequest,
  type ChangePasswordRequest,
  type CreateAccessKeyRequest,
  type CreateAccessKeyResponse,
  type CreateAccountAliasRequest,
  type CreateGroupRequest,
  type CreateGroupResponse,
  type CreateInstanceProfileRequest,
  type CreateInstanceProfileResponse,
  type CreateLoginProfileRequest,
  type CreateLoginProfileResponse,
  type CreateOpenIDConnectProviderRequest,
  type CreateOpenIDConnectProviderResponse,
  type CreatePolicyRequest,
  type CreatePolicyResponse,
  type CreatePolicyVersionRequest,
  type CreatePolicyVersionResponse,
  type CreateRoleRequest,
  type CreateRoleResponse,
  type CreateSAMLProviderRequest,
  type CreateSAMLProviderResponse,
  type CreateServiceLinkedRoleRequest,
  type CreateServiceLinkedRoleResponse,
  type CreateServiceSpecificCredentialRequest,
  type CreateServiceSpecificCredentialResponse,
  type CreateUserRequest,
  type CreateUserResponse,
  type CreateVirtualMFADeviceRequest,
  type CreateVirtualMFADeviceResponse,
  type DeactivateMFADeviceRequest,
  type DeleteAccessKeyRequest,
  type DeleteAccountAliasRequest,
  type DeleteGroupRequest,
  type DeleteGroupPolicyRequest,
  type DeleteInstanceProfileRequest,
  type DeleteLoginProfileRequest,
  type DeleteOpenIDConnectProviderRequest,
  type DeletePolicyRequest,
  type DeletePolicyVersionRequest,
  type DeleteRoleRequest,
  type DeleteRolePermissionsBoundaryRequest,
  type DeleteRolePolicyRequest,
  type DeleteSAMLProviderRequest,
  type DeleteSSHPublicKeyRequest,
  type DeleteServerCertificateRequest,
  type DeleteServiceLinkedRoleRequest,
  type DeleteServiceLinkedRoleResponse,
  type DeleteServiceSpecificCredentialRequest,
  type DeleteSigningCertificateRequest,
  type DeleteUserRequest,
  type DeleteUserPermissionsBoundaryRequest,
  type DeleteUserPolicyRequest,
  type DeleteVirtualMFADeviceRequest,
  type DetachGroupPolicyRequest,
  type DetachRolePolicyRequest,
  type DetachUserPolicyRequest,
  type EnableMFADeviceRequest,
  type GenerateCredentialReportResponse,
  type GenerateOrganizationsAccessReportRequest,
  type GenerateOrganizationsAccessReportResponse,
  type GenerateServiceLastAccessedDetailsRequest,
  type GenerateServiceLastAccessedDetailsResponse,
  type GetAccessKeyLastUsedRequest,
  type GetAccessKeyLastUsedResponse,
  type GetAccountAuthorizationDetailsRequest,
  type GetAccountAuthorizationDetailsResponse,
  type GetAccountPasswordPolicyResponse,
  type GetAccountSummaryResponse,
  type GetContextKeysForCustomPolicyRequest,
  type GetContextKeysForPolicyResponse,
  type GetContextKeysForPrincipalPolicyRequest,
  type GetCredentialReportResponse,
  type GetGroupRequest,
  type GetGroupResponse,
  type GetGroupPolicyRequest,
  type GetGroupPolicyResponse,
  type GetInstanceProfileRequest,
  type GetInstanceProfileResponse,
  type GetLoginProfileRequest,
  type GetLoginProfileResponse,
  type GetMFADeviceRequest,
  type GetMFADeviceResponse,
  type GetOpenIDConnectProviderRequest,
  type GetOpenIDConnectProviderResponse,
  type GetOrganizationsAccessReportRequest,
  type GetOrganizationsAccessReportResponse,
  type GetPolicyRequest,
  type GetPolicyResponse,
  type GetPolicyVersionRequest,
  type GetPolicyVersionResponse,
  type GetRoleRequest,
  type GetRoleResponse,
  type GetRolePolicyRequest,
  type GetRolePolicyResponse,
  type GetSAMLProviderRequest,
  type GetSAMLProviderResponse,
  type GetSSHPublicKeyRequest,
  type GetSSHPublicKeyResponse,
  type GetServerCertificateRequest,
  type GetServerCertificateResponse,
  type GetServiceLastAccessedDetailsRequest,
  type GetServiceLastAccessedDetailsResponse,
  type GetServiceLastAccessedDetailsWithEntitiesRequest,
  type GetServiceLastAccessedDetailsWithEntitiesResponse,
  type GetServiceLinkedRoleDeletionStatusRequest,
  type GetServiceLinkedRoleDeletionStatusResponse,
  type GetUserRequest,
  type GetUserResponse,
  type GetUserPolicyRequest,
  type GetUserPolicyResponse,
  type ListAccessKeysRequest,
  type ListAccessKeysResponse,
  type ListAccountAliasesRequest,
  type ListAccountAliasesResponse,
  type ListAttachedGroupPoliciesRequest,
  type ListAttachedGroupPoliciesResponse,
  type ListAttachedRolePoliciesRequest,
  type ListAttachedRolePoliciesResponse,
  type ListAttachedUserPoliciesRequest,
  type ListAttachedUserPoliciesResponse,
  type ListEntitiesForPolicyRequest,
  type ListEntitiesForPolicyResponse,
  type ListGroupPoliciesRequest,
  type ListGroupPoliciesResponse,
  type ListGroupsRequest,
  type ListGroupsResponse,
  type ListGroupsForUserRequest,
  type ListGroupsForUserResponse,
  type ListInstanceProfileTagsRequest,
  type ListInstanceProfileTagsResponse,
  type ListInstanceProfilesRequest,
  type ListInstanceProfilesResponse,
  type ListInstanceProfilesForRoleRequest,
  type ListInstanceProfilesForRoleResponse,
  type ListMFADeviceTagsRequest,
  type ListMFADeviceTagsResponse,
  type ListMFADevicesRequest,
  type ListMFADevicesResponse,
  type ListOpenIDConnectProviderTagsRequest,
  type ListOpenIDConnectProviderTagsResponse,
  type ListOpenIDConnectProvidersRequest,
  type ListOpenIDConnectProvidersResponse,
  type ListPoliciesRequest,
  type ListPoliciesResponse,
  type ListPoliciesGrantingServiceAccessRequest,
  type ListPoliciesGrantingServiceAccessResponse,
  type ListPolicyTagsRequest,
  type ListPolicyTagsResponse,
  type ListPolicyVersionsRequest,
  type ListPolicyVersionsResponse,
  type ListRolePoliciesRequest,
  type ListRolePoliciesResponse,
  type ListRoleTagsRequest,
  type ListRoleTagsResponse,
  type ListRolesRequest,
  type ListRolesResponse,
  type ListSAMLProviderTagsRequest,
  type ListSAMLProviderTagsResponse,
  type ListSAMLProvidersRequest,
  type ListSAMLProvidersResponse,
  type ListSSHPublicKeysRequest,
  type ListSSHPublicKeysResponse,
  type ListServerCertificateTagsRequest,
  type ListServerCertificateTagsResponse,
  type ListServerCertificatesRequest,
  type ListServerCertificatesResponse,
  type ListServiceSpecificCredentialsRequest,
  type ListServiceSpecificCredentialsResponse,
  type ListSigningCertificatesRequest,
  type ListSigningCertificatesResponse,
  type ListUserPoliciesRequest,
  type ListUserPoliciesResponse,
  type ListUserTagsRequest,
  type ListUserTagsResponse,
  type ListUsersRequest,
  type ListUsersResponse,
  type ListVirtualMFADevicesRequest,
  type ListVirtualMFADevicesResponse,
  type PutGroupPolicyRequest,
  type PutRolePermissionsBoundaryRequest,
  type PutRolePolicyRequest,
  type PutUserPermissionsBoundaryRequest,
  type PutUserPolicyRequest,
  type RemoveClientIDFromOpenIDConnectProviderRequest,
  type RemoveRoleFromInstanceProfileRequest,
  type RemoveUserFromGroupRequest,
  type ResetServiceSpecificCredentialRequest,
  type ResetServiceSpecificCredentialResponse,
  type ResyncMFADeviceRequest,
  type SetDefaultPolicyVersionRequest,
  type SetSecurityTokenServicePreferencesRequest,
  type SimulateCustomPolicyRequest,
  type SimulatePolicyResponse,
  type SimulatePrincipalPolicyRequest,
  type TagInstanceProfileRequest,
  type TagMFADeviceRequest,
  type TagOpenIDConnectProviderRequest,
  type TagPolicyRequest,
  type TagRoleRequest,
  type TagSAMLProviderRequest,
  type TagServerCertificateRequest,
  type TagUserRequest,
  type UntagInstanceProfileRequest,
  type UntagMFADeviceRequest,
  type UntagOpenIDConnectProviderRequest,
  type UntagPolicyRequest,
  type UntagRoleRequest,
  type UntagSAMLProviderRequest,
  type UntagServerCertificateRequest,
  type UntagUserRequest,
  type UpdateAccessKeyRequest,
  type UpdateAccountPasswordPolicyRequest,
  type UpdateAssumeRolePolicyRequest,
  type UpdateGroupRequest,
  type UpdateLoginProfileRequest,
  type UpdateOpenIDConnectProviderThumbprintRequest,
  type UpdateRoleRequest,
  type UpdateRoleResponse,
  type UpdateRoleDescriptionRequest,
  type UpdateRoleDescriptionResponse,
  type UpdateSAMLProviderRequest,
  type UpdateSAMLProviderResponse,
  type UpdateSSHPublicKeyRequest,
  type UpdateServerCertificateRequest,
  type UpdateServiceSpecificCredentialRequest,
  type UpdateSigningCertificateRequest,
  type UpdateUserRequest,
  type UploadSSHPublicKeyRequest,
  type UploadSSHPublicKeyResponse,
  type UploadServerCertificateRequest,
  type UploadServerCertificateResponse,
  type UploadSigningCertificateRequest,
  type UploadSigningCertificateResponse,
} from "@aws-sdk/client-iam";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type InvalidInputException,
  type LimitExceededException,
  type NoSuchEntityException,
  type ServiceFailureException,
  type EntityAlreadyExistsException,
  type UnmodifiableEntityException,
  type PolicyNotAttachableException,
  type EntityTemporarilyUnmodifiableException,
  type InvalidUserTypeException,
  type PasswordPolicyViolationException,
  type ConcurrentModificationException,
  type OpenIdIdpCommunicationErrorException,
  type MalformedPolicyDocumentException,
  type ServiceNotSupportedException,
  type DeleteConflictException,
  type InvalidAuthenticationCodeException,
  type ReportGenerationLimitExceededException,
  type CredentialReportExpiredException,
  type CredentialReportNotPresentException,
  type CredentialReportNotReadyException,
  type UnrecognizedPublicKeyEncodingException,
  type PolicyEvaluationException,
  type DuplicateSSHPublicKeyException,
  type InvalidPublicKeyException,
  type KeyPairMismatchException,
  type MalformedCertificateException,
  type DuplicateCertificateException,
  type InvalidCertificateException,
  type TaggedException,
  SdkError,
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

/**
 * @since 1.0.0
 * @category models
 */
export interface IAMService {
  readonly _: unique symbol;

  /**
   * @see {@link AddClientIDToOpenIDConnectProviderCommand}
   */
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link AddRoleToInstanceProfileCommand}
   */
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link AddUserToGroupCommand}
   */
  addUserToGroup(
    args: AddUserToGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link AttachGroupPolicyCommand}
   */
  attachGroupPolicy(
    args: AttachGroupPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
  >;

  /**
   * @see {@link AttachRolePolicyCommand}
   */
  attachRolePolicy(
    args: AttachRolePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link AttachUserPolicyCommand}
   */
  attachUserPolicy(
    args: AttachUserPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
  >;

  /**
   * @see {@link ChangePasswordCommand}
   */
  changePassword(
    args: ChangePasswordRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | EntityTemporarilyUnmodifiableException
    | InvalidUserTypeException
    | LimitExceededException
    | NoSuchEntityException
    | PasswordPolicyViolationException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateAccessKeyCommand}
   */
  createAccessKey(
    args: CreateAccessKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccessKeyResponse,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateAccountAliasCommand}
   */
  createAccountAlias(
    args: CreateAccountAliasRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | LimitExceededException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateGroupResponse,
    | SdkError
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateInstanceProfileCommand}
   */
  createInstanceProfile(
    args: CreateInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateInstanceProfileResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateLoginProfileCommand}
   */
  createLoginProfile(
    args: CreateLoginProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateLoginProfileResponse,
    | SdkError
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | PasswordPolicyViolationException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateOpenIDConnectProviderCommand}
   */
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateOpenIDConnectProviderResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | OpenIdIdpCommunicationErrorException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreatePolicyVersionCommand}
   */
  createPolicyVersion(
    args: CreatePolicyVersionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyVersionResponse,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateRoleCommand}
   */
  createRole(
    args: CreateRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateRoleResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateSAMLProviderCommand}
   */
  createSAMLProvider(
    args: CreateSAMLProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateSAMLProviderResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateServiceLinkedRoleCommand}
   */
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateServiceLinkedRoleResponse,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateServiceSpecificCredentialCommand}
   */
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateServiceSpecificCredentialResponse,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceNotSupportedException
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link CreateVirtualMFADeviceCommand}
   */
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateVirtualMFADeviceResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | LimitExceededException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeactivateMFADeviceCommand}
   */
  deactivateMFADevice(
    args: DeactivateMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteAccessKeyCommand}
   */
  deleteAccessKey(
    args: DeleteAccessKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteAccountAliasCommand}
   */
  deleteAccountAlias(
    args: DeleteAccountAliasRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteAccountPasswordPolicyCommand}
   */
  deleteAccountPasswordPolicy(
    args: {},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteGroupPolicyCommand}
   */
  deleteGroupPolicy(
    args: DeleteGroupPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteInstanceProfileCommand}
   */
  deleteInstanceProfile(
    args: DeleteInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteLoginProfileCommand}
   */
  deleteLoginProfile(
    args: DeleteLoginProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteOpenIDConnectProviderCommand}
   */
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DeleteConflictException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeletePolicyVersionCommand}
   */
  deletePolicyVersion(
    args: DeletePolicyVersionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DeleteConflictException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteRoleCommand}
   */
  deleteRole(
    args: DeleteRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link DeleteRolePermissionsBoundaryCommand}
   */
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link DeleteRolePolicyCommand}
   */
  deleteRolePolicy(
    args: DeleteRolePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link DeleteSAMLProviderCommand}
   */
  deleteSAMLProvider(
    args: DeleteSAMLProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteSSHPublicKeyCommand}
   */
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | NoSuchEntityException>;

  /**
   * @see {@link DeleteServerCertificateCommand}
   */
  deleteServerCertificate(
    args: DeleteServerCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteServiceLinkedRoleCommand}
   */
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServiceLinkedRoleResponse,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteServiceSpecificCredentialCommand}
   */
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | NoSuchEntityException>;

  /**
   * @see {@link DeleteSigningCertificateCommand}
   */
  deleteSigningCertificate(
    args: DeleteSigningCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteUserPermissionsBoundaryCommand}
   */
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link DeleteUserPolicyCommand}
   */
  deleteUserPolicy(
    args: DeleteUserPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DeleteVirtualMFADeviceCommand}
   */
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | DeleteConflictException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DetachGroupPolicyCommand}
   */
  detachGroupPolicy(
    args: DetachGroupPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link DetachRolePolicyCommand}
   */
  detachRolePolicy(
    args: DetachRolePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link DetachUserPolicyCommand}
   */
  detachUserPolicy(
    args: DetachUserPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link EnableMFADeviceCommand}
   */
  enableMFADevice(
    args: EnableMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | EntityTemporarilyUnmodifiableException
    | InvalidAuthenticationCodeException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link GenerateCredentialReportCommand}
   */
  generateCredentialReport(
    args: {},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateCredentialReportResponse,
    SdkError | LimitExceededException | ServiceFailureException
  >;

  /**
   * @see {@link GenerateOrganizationsAccessReportCommand}
   */
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateOrganizationsAccessReportResponse,
    SdkError | ReportGenerationLimitExceededException
  >;

  /**
   * @see {@link GenerateServiceLastAccessedDetailsCommand}
   */
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GenerateServiceLastAccessedDetailsResponse,
    SdkError | InvalidInputException | NoSuchEntityException
  >;

  /**
   * @see {@link GetAccessKeyLastUsedCommand}
   */
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetAccessKeyLastUsedResponse, SdkError>;

  /**
   * @see {@link GetAccountAuthorizationDetailsCommand}
   */
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountAuthorizationDetailsResponse,
    SdkError | ServiceFailureException
  >;

  /**
   * @see {@link GetAccountPasswordPolicyCommand}
   */
  getAccountPasswordPolicy(
    args: {},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountPasswordPolicyResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetAccountSummaryCommand}
   */
  getAccountSummary(
    args: {},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSummaryResponse,
    SdkError | ServiceFailureException
  >;

  /**
   * @see {@link GetContextKeysForCustomPolicyCommand}
   */
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetContextKeysForPolicyResponse,
    SdkError | InvalidInputException
  >;

  /**
   * @see {@link GetContextKeysForPrincipalPolicyCommand}
   */
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetContextKeysForPolicyResponse,
    SdkError | InvalidInputException | NoSuchEntityException
  >;

  /**
   * @see {@link GetCredentialReportCommand}
   */
  getCredentialReport(
    args: {},
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetCredentialReportResponse,
    | SdkError
    | CredentialReportExpiredException
    | CredentialReportNotPresentException
    | CredentialReportNotReadyException
    | ServiceFailureException
  >;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(
    args: GetGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetGroupResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetGroupPolicyCommand}
   */
  getGroupPolicy(
    args: GetGroupPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetGroupPolicyResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetInstanceProfileCommand}
   */
  getInstanceProfile(
    args: GetInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetInstanceProfileResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetLoginProfileCommand}
   */
  getLoginProfile(
    args: GetLoginProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetLoginProfileResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetMFADeviceCommand}
   */
  getMFADevice(
    args: GetMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMFADeviceResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetOpenIDConnectProviderCommand}
   */
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetOpenIDConnectProviderResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link GetOrganizationsAccessReportCommand}
   */
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetOrganizationsAccessReportResponse,
    SdkError | NoSuchEntityException
  >;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link GetPolicyVersionCommand}
   */
  getPolicyVersion(
    args: GetPolicyVersionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyVersionResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link GetRoleCommand}
   */
  getRole(
    args: GetRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetRoleResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetRolePolicyCommand}
   */
  getRolePolicy(
    args: GetRolePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetRolePolicyResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetSAMLProviderCommand}
   */
  getSAMLProvider(
    args: GetSAMLProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSAMLProviderResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link GetSSHPublicKeyCommand}
   */
  getSSHPublicKey(
    args: GetSSHPublicKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSSHPublicKeyResponse,
    SdkError | NoSuchEntityException | UnrecognizedPublicKeyEncodingException
  >;

  /**
   * @see {@link GetServerCertificateCommand}
   */
  getServerCertificate(
    args: GetServerCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetServerCertificateResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsCommand}
   */
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceLastAccessedDetailsResponse,
    SdkError | InvalidInputException | NoSuchEntityException
  >;

  /**
   * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommand}
   */
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceLastAccessedDetailsWithEntitiesResponse,
    SdkError | InvalidInputException | NoSuchEntityException
  >;

  /**
   * @see {@link GetServiceLinkedRoleDeletionStatusCommand}
   */
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceLinkedRoleDeletionStatusResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUserResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link GetUserPolicyCommand}
   */
  getUserPolicy(
    args: GetUserPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetUserPolicyResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListAccessKeysCommand}
   */
  listAccessKeys(
    args: ListAccessKeysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAccessKeysResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListAccountAliasesCommand}
   */
  listAccountAliases(
    args: ListAccountAliasesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAccountAliasesResponse,
    SdkError | ServiceFailureException
  >;

  /**
   * @see {@link ListAttachedGroupPoliciesCommand}
   */
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAttachedGroupPoliciesResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListAttachedRolePoliciesCommand}
   */
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAttachedRolePoliciesResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListAttachedUserPoliciesCommand}
   */
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAttachedUserPoliciesResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListEntitiesForPolicyCommand}
   */
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListEntitiesForPolicyResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListGroupPoliciesCommand}
   */
  listGroupPolicies(
    args: ListGroupPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListGroupPoliciesResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListGroupsResponse, SdkError | ServiceFailureException>;

  /**
   * @see {@link ListGroupsForUserCommand}
   */
  listGroupsForUser(
    args: ListGroupsForUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListGroupsForUserResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListInstanceProfileTagsCommand}
   */
  listInstanceProfileTags(
    args: ListInstanceProfileTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceProfileTagsResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListInstanceProfilesCommand}
   */
  listInstanceProfiles(
    args: ListInstanceProfilesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceProfilesResponse,
    SdkError | ServiceFailureException
  >;

  /**
   * @see {@link ListInstanceProfilesForRoleCommand}
   */
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceProfilesForRoleResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListMFADeviceTagsCommand}
   */
  listMFADeviceTags(
    args: ListMFADeviceTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListMFADeviceTagsResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListMFADevicesCommand}
   */
  listMFADevices(
    args: ListMFADevicesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListMFADevicesResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListOpenIDConnectProviderTagsCommand}
   */
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListOpenIDConnectProviderTagsResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListOpenIDConnectProvidersCommand}
   */
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListOpenIDConnectProvidersResponse,
    SdkError | ServiceFailureException
  >;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(
    args: ListPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListPoliciesResponse, SdkError | ServiceFailureException>;

  /**
   * @see {@link ListPoliciesGrantingServiceAccessCommand}
   */
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPoliciesGrantingServiceAccessResponse,
    SdkError | InvalidInputException | NoSuchEntityException
  >;

  /**
   * @see {@link ListPolicyTagsCommand}
   */
  listPolicyTags(
    args: ListPolicyTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyTagsResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  listPolicyVersions(
    args: ListPolicyVersionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyVersionsResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListRolePoliciesCommand}
   */
  listRolePolicies(
    args: ListRolePoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListRolePoliciesResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListRoleTagsCommand}
   */
  listRoleTags(
    args: ListRoleTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListRoleTagsResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListRolesCommand}
   */
  listRoles(
    args: ListRolesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListRolesResponse, SdkError | ServiceFailureException>;

  /**
   * @see {@link ListSAMLProviderTagsCommand}
   */
  listSAMLProviderTags(
    args: ListSAMLProviderTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSAMLProviderTagsResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ListSAMLProvidersCommand}
   */
  listSAMLProviders(
    args: ListSAMLProvidersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSAMLProvidersResponse,
    SdkError | ServiceFailureException
  >;

  /**
   * @see {@link ListSSHPublicKeysCommand}
   */
  listSSHPublicKeys(
    args: ListSSHPublicKeysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListSSHPublicKeysResponse, SdkError | NoSuchEntityException>;

  /**
   * @see {@link ListServerCertificateTagsCommand}
   */
  listServerCertificateTags(
    args: ListServerCertificateTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListServerCertificateTagsResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListServerCertificatesCommand}
   */
  listServerCertificates(
    args: ListServerCertificatesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListServerCertificatesResponse,
    SdkError | ServiceFailureException
  >;

  /**
   * @see {@link ListServiceSpecificCredentialsCommand}
   */
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListServiceSpecificCredentialsResponse,
    SdkError | NoSuchEntityException | ServiceNotSupportedException
  >;

  /**
   * @see {@link ListSigningCertificatesCommand}
   */
  listSigningCertificates(
    args: ListSigningCertificatesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSigningCertificatesResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListUserPoliciesCommand}
   */
  listUserPolicies(
    args: ListUserPoliciesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListUserPoliciesResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListUserTagsCommand}
   */
  listUserTags(
    args: ListUserTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListUserTagsResponse,
    SdkError | NoSuchEntityException | ServiceFailureException
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListUsersResponse, SdkError | ServiceFailureException>;

  /**
   * @see {@link ListVirtualMFADevicesCommand}
   */
  listVirtualMFADevices(
    args: ListVirtualMFADevicesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListVirtualMFADevicesResponse, SdkError>;

  /**
   * @see {@link PutGroupPolicyCommand}
   */
  putGroupPolicy(
    args: PutGroupPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link PutRolePermissionsBoundaryCommand}
   */
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link PutRolePolicyCommand}
   */
  putRolePolicy(
    args: PutRolePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link PutUserPermissionsBoundaryCommand}
   */
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | PolicyNotAttachableException
    | ServiceFailureException
  >;

  /**
   * @see {@link PutUserPolicyCommand}
   */
  putUserPolicy(
    args: PutUserPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link RemoveClientIDFromOpenIDConnectProviderCommand}
   */
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link RemoveRoleFromInstanceProfileCommand}
   */
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link RemoveUserFromGroupCommand}
   */
  removeUserFromGroup(
    args: RemoveUserFromGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link ResetServiceSpecificCredentialCommand}
   */
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ResetServiceSpecificCredentialResponse,
    SdkError | NoSuchEntityException
  >;

  /**
   * @see {@link ResyncMFADeviceCommand}
   */
  resyncMFADevice(
    args: ResyncMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidAuthenticationCodeException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link SetDefaultPolicyVersionCommand}
   */
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link SetSecurityTokenServicePreferencesCommand}
   */
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | ServiceFailureException>;

  /**
   * @see {@link SimulateCustomPolicyCommand}
   */
  simulateCustomPolicy(
    args: SimulateCustomPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SimulatePolicyResponse,
    SdkError | InvalidInputException | PolicyEvaluationException
  >;

  /**
   * @see {@link SimulatePrincipalPolicyCommand}
   */
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SimulatePolicyResponse,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | PolicyEvaluationException
  >;

  /**
   * @see {@link TagInstanceProfileCommand}
   */
  tagInstanceProfile(
    args: TagInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link TagMFADeviceCommand}
   */
  tagMFADevice(
    args: TagMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link TagOpenIDConnectProviderCommand}
   */
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link TagPolicyCommand}
   */
  tagPolicy(
    args: TagPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link TagRoleCommand}
   */
  tagRole(
    args: TagRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link TagSAMLProviderCommand}
   */
  tagSAMLProvider(
    args: TagSAMLProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link TagServerCertificateCommand}
   */
  tagServerCertificate(
    args: TagServerCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link TagUserCommand}
   */
  tagUser(
    args: TagUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagInstanceProfileCommand}
   */
  untagInstanceProfile(
    args: UntagInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagMFADeviceCommand}
   */
  untagMFADevice(
    args: UntagMFADeviceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagOpenIDConnectProviderCommand}
   */
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagPolicyCommand}
   */
  untagPolicy(
    args: UntagPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagRoleCommand}
   */
  untagRole(
    args: UntagRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagSAMLProviderCommand}
   */
  untagSAMLProvider(
    args: UntagSAMLProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagServerCertificateCommand}
   */
  untagServerCertificate(
    args: UntagServerCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UntagUserCommand}
   */
  untagUser(
    args: UntagUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateAccessKeyCommand}
   */
  updateAccessKey(
    args: UpdateAccessKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateAccountPasswordPolicyCommand}
   */
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateAssumeRolePolicyCommand}
   */
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | MalformedPolicyDocumentException
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateLoginProfileCommand}
   */
  updateLoginProfile(
    args: UpdateLoginProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | PasswordPolicyViolationException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateOpenIDConnectProviderThumbprintCommand}
   */
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | InvalidInputException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateRoleCommand}
   */
  updateRole(
    args: UpdateRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRoleResponse,
    | SdkError
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link UpdateRoleDescriptionCommand}
   */
  updateRoleDescription(
    args: UpdateRoleDescriptionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRoleDescriptionResponse,
    | SdkError
    | NoSuchEntityException
    | ServiceFailureException
    | UnmodifiableEntityException
  >;

  /**
   * @see {@link UpdateSAMLProviderCommand}
   */
  updateSAMLProvider(
    args: UpdateSAMLProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSAMLProviderResponse,
    | SdkError
    | InvalidInputException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateSSHPublicKeyCommand}
   */
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | NoSuchEntityException>;

  /**
   * @see {@link UpdateServerCertificateCommand}
   */
  updateServerCertificate(
    args: UpdateServerCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | EntityAlreadyExistsException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateServiceSpecificCredentialCommand}
   */
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError | NoSuchEntityException>;

  /**
   * @see {@link UpdateSigningCertificateCommand}
   */
  updateSigningCertificate(
    args: UpdateSigningCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | EntityTemporarilyUnmodifiableException
    | LimitExceededException
    | NoSuchEntityException
    | ServiceFailureException
  >;

  /**
   * @see {@link UploadSSHPublicKeyCommand}
   */
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UploadSSHPublicKeyResponse,
    | SdkError
    | DuplicateSSHPublicKeyException
    | InvalidPublicKeyException
    | LimitExceededException
    | NoSuchEntityException
    | UnrecognizedPublicKeyEncodingException
  >;

  /**
   * @see {@link UploadServerCertificateCommand}
   */
  uploadServerCertificate(
    args: UploadServerCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UploadServerCertificateResponse,
    | SdkError
    | ConcurrentModificationException
    | EntityAlreadyExistsException
    | InvalidInputException
    | KeyPairMismatchException
    | LimitExceededException
    | MalformedCertificateException
    | ServiceFailureException
  >;

  /**
   * @see {@link UploadSigningCertificateCommand}
   */
  uploadSigningCertificate(
    args: UploadSigningCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UploadSigningCertificateResponse,
    | SdkError
    | ConcurrentModificationException
    | DuplicateCertificateException
    | EntityAlreadyExistsException
    | InvalidCertificateException
    | LimitExceededException
    | MalformedCertificateException
    | NoSuchEntityException
    | ServiceFailureException
  >;
}

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
          if (e instanceof SdkIAMServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkIAMServiceException>
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
