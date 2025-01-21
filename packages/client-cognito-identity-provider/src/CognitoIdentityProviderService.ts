/**
 * @since 1.0.0
 */
import {
  CognitoIdentityProviderServiceException,
  type CognitoIdentityProviderClient,
  type CognitoIdentityProviderClientConfig,
  AddCustomAttributesCommand,
  type AddCustomAttributesCommandInput,
  type AddCustomAttributesCommandOutput,
  AdminAddUserToGroupCommand,
  type AdminAddUserToGroupCommandInput,
  type AdminAddUserToGroupCommandOutput,
  AdminConfirmSignUpCommand,
  type AdminConfirmSignUpCommandInput,
  type AdminConfirmSignUpCommandOutput,
  AdminCreateUserCommand,
  type AdminCreateUserCommandInput,
  type AdminCreateUserCommandOutput,
  AdminDeleteUserCommand,
  type AdminDeleteUserCommandInput,
  type AdminDeleteUserCommandOutput,
  AdminDeleteUserAttributesCommand,
  type AdminDeleteUserAttributesCommandInput,
  type AdminDeleteUserAttributesCommandOutput,
  AdminDisableProviderForUserCommand,
  type AdminDisableProviderForUserCommandInput,
  type AdminDisableProviderForUserCommandOutput,
  AdminDisableUserCommand,
  type AdminDisableUserCommandInput,
  type AdminDisableUserCommandOutput,
  AdminEnableUserCommand,
  type AdminEnableUserCommandInput,
  type AdminEnableUserCommandOutput,
  AdminForgetDeviceCommand,
  type AdminForgetDeviceCommandInput,
  type AdminForgetDeviceCommandOutput,
  AdminGetDeviceCommand,
  type AdminGetDeviceCommandInput,
  type AdminGetDeviceCommandOutput,
  AdminGetUserCommand,
  type AdminGetUserCommandInput,
  type AdminGetUserCommandOutput,
  AdminInitiateAuthCommand,
  type AdminInitiateAuthCommandInput,
  type AdminInitiateAuthCommandOutput,
  AdminLinkProviderForUserCommand,
  type AdminLinkProviderForUserCommandInput,
  type AdminLinkProviderForUserCommandOutput,
  AdminListDevicesCommand,
  type AdminListDevicesCommandInput,
  type AdminListDevicesCommandOutput,
  AdminListGroupsForUserCommand,
  type AdminListGroupsForUserCommandInput,
  type AdminListGroupsForUserCommandOutput,
  AdminListUserAuthEventsCommand,
  type AdminListUserAuthEventsCommandInput,
  type AdminListUserAuthEventsCommandOutput,
  AdminRemoveUserFromGroupCommand,
  type AdminRemoveUserFromGroupCommandInput,
  type AdminRemoveUserFromGroupCommandOutput,
  AdminResetUserPasswordCommand,
  type AdminResetUserPasswordCommandInput,
  type AdminResetUserPasswordCommandOutput,
  AdminRespondToAuthChallengeCommand,
  type AdminRespondToAuthChallengeCommandInput,
  type AdminRespondToAuthChallengeCommandOutput,
  AdminSetUserMFAPreferenceCommand,
  type AdminSetUserMFAPreferenceCommandInput,
  type AdminSetUserMFAPreferenceCommandOutput,
  AdminSetUserPasswordCommand,
  type AdminSetUserPasswordCommandInput,
  type AdminSetUserPasswordCommandOutput,
  AdminSetUserSettingsCommand,
  type AdminSetUserSettingsCommandInput,
  type AdminSetUserSettingsCommandOutput,
  AdminUpdateAuthEventFeedbackCommand,
  type AdminUpdateAuthEventFeedbackCommandInput,
  type AdminUpdateAuthEventFeedbackCommandOutput,
  AdminUpdateDeviceStatusCommand,
  type AdminUpdateDeviceStatusCommandInput,
  type AdminUpdateDeviceStatusCommandOutput,
  AdminUpdateUserAttributesCommand,
  type AdminUpdateUserAttributesCommandInput,
  type AdminUpdateUserAttributesCommandOutput,
  AdminUserGlobalSignOutCommand,
  type AdminUserGlobalSignOutCommandInput,
  type AdminUserGlobalSignOutCommandOutput,
  AssociateSoftwareTokenCommand,
  type AssociateSoftwareTokenCommandInput,
  type AssociateSoftwareTokenCommandOutput,
  ChangePasswordCommand,
  type ChangePasswordCommandInput,
  type ChangePasswordCommandOutput,
  CompleteWebAuthnRegistrationCommand,
  type CompleteWebAuthnRegistrationCommandInput,
  type CompleteWebAuthnRegistrationCommandOutput,
  ConfirmDeviceCommand,
  type ConfirmDeviceCommandInput,
  type ConfirmDeviceCommandOutput,
  ConfirmForgotPasswordCommand,
  type ConfirmForgotPasswordCommandInput,
  type ConfirmForgotPasswordCommandOutput,
  ConfirmSignUpCommand,
  type ConfirmSignUpCommandInput,
  type ConfirmSignUpCommandOutput,
  CreateGroupCommand,
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateIdentityProviderCommand,
  type CreateIdentityProviderCommandInput,
  type CreateIdentityProviderCommandOutput,
  CreateManagedLoginBrandingCommand,
  type CreateManagedLoginBrandingCommandInput,
  type CreateManagedLoginBrandingCommandOutput,
  CreateResourceServerCommand,
  type CreateResourceServerCommandInput,
  type CreateResourceServerCommandOutput,
  CreateUserImportJobCommand,
  type CreateUserImportJobCommandInput,
  type CreateUserImportJobCommandOutput,
  CreateUserPoolCommand,
  type CreateUserPoolCommandInput,
  type CreateUserPoolCommandOutput,
  CreateUserPoolClientCommand,
  type CreateUserPoolClientCommandInput,
  type CreateUserPoolClientCommandOutput,
  CreateUserPoolDomainCommand,
  type CreateUserPoolDomainCommandInput,
  type CreateUserPoolDomainCommandOutput,
  DeleteGroupCommand,
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteIdentityProviderCommand,
  type DeleteIdentityProviderCommandInput,
  type DeleteIdentityProviderCommandOutput,
  DeleteManagedLoginBrandingCommand,
  type DeleteManagedLoginBrandingCommandInput,
  type DeleteManagedLoginBrandingCommandOutput,
  DeleteResourceServerCommand,
  type DeleteResourceServerCommandInput,
  type DeleteResourceServerCommandOutput,
  DeleteUserCommand,
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserAttributesCommand,
  type DeleteUserAttributesCommandInput,
  type DeleteUserAttributesCommandOutput,
  DeleteUserPoolCommand,
  type DeleteUserPoolCommandInput,
  type DeleteUserPoolCommandOutput,
  DeleteUserPoolClientCommand,
  type DeleteUserPoolClientCommandInput,
  type DeleteUserPoolClientCommandOutput,
  DeleteUserPoolDomainCommand,
  type DeleteUserPoolDomainCommandInput,
  type DeleteUserPoolDomainCommandOutput,
  DeleteWebAuthnCredentialCommand,
  type DeleteWebAuthnCredentialCommandInput,
  type DeleteWebAuthnCredentialCommandOutput,
  DescribeIdentityProviderCommand,
  type DescribeIdentityProviderCommandInput,
  type DescribeIdentityProviderCommandOutput,
  DescribeManagedLoginBrandingCommand,
  type DescribeManagedLoginBrandingCommandInput,
  type DescribeManagedLoginBrandingCommandOutput,
  DescribeManagedLoginBrandingByClientCommand,
  type DescribeManagedLoginBrandingByClientCommandInput,
  type DescribeManagedLoginBrandingByClientCommandOutput,
  DescribeResourceServerCommand,
  type DescribeResourceServerCommandInput,
  type DescribeResourceServerCommandOutput,
  DescribeRiskConfigurationCommand,
  type DescribeRiskConfigurationCommandInput,
  type DescribeRiskConfigurationCommandOutput,
  DescribeUserImportJobCommand,
  type DescribeUserImportJobCommandInput,
  type DescribeUserImportJobCommandOutput,
  DescribeUserPoolCommand,
  type DescribeUserPoolCommandInput,
  type DescribeUserPoolCommandOutput,
  DescribeUserPoolClientCommand,
  type DescribeUserPoolClientCommandInput,
  type DescribeUserPoolClientCommandOutput,
  DescribeUserPoolDomainCommand,
  type DescribeUserPoolDomainCommandInput,
  type DescribeUserPoolDomainCommandOutput,
  ForgetDeviceCommand,
  type ForgetDeviceCommandInput,
  type ForgetDeviceCommandOutput,
  ForgotPasswordCommand,
  type ForgotPasswordCommandInput,
  type ForgotPasswordCommandOutput,
  GetCSVHeaderCommand,
  type GetCSVHeaderCommandInput,
  type GetCSVHeaderCommandOutput,
  GetDeviceCommand,
  type GetDeviceCommandInput,
  type GetDeviceCommandOutput,
  GetGroupCommand,
  type GetGroupCommandInput,
  type GetGroupCommandOutput,
  GetIdentityProviderByIdentifierCommand,
  type GetIdentityProviderByIdentifierCommandInput,
  type GetIdentityProviderByIdentifierCommandOutput,
  GetLogDeliveryConfigurationCommand,
  type GetLogDeliveryConfigurationCommandInput,
  type GetLogDeliveryConfigurationCommandOutput,
  GetSigningCertificateCommand,
  type GetSigningCertificateCommandInput,
  type GetSigningCertificateCommandOutput,
  GetUICustomizationCommand,
  type GetUICustomizationCommandInput,
  type GetUICustomizationCommandOutput,
  GetUserCommand,
  type GetUserCommandInput,
  type GetUserCommandOutput,
  GetUserAttributeVerificationCodeCommand,
  type GetUserAttributeVerificationCodeCommandInput,
  type GetUserAttributeVerificationCodeCommandOutput,
  GetUserAuthFactorsCommand,
  type GetUserAuthFactorsCommandInput,
  type GetUserAuthFactorsCommandOutput,
  GetUserPoolMfaConfigCommand,
  type GetUserPoolMfaConfigCommandInput,
  type GetUserPoolMfaConfigCommandOutput,
  GlobalSignOutCommand,
  type GlobalSignOutCommandInput,
  type GlobalSignOutCommandOutput,
  InitiateAuthCommand,
  type InitiateAuthCommandInput,
  type InitiateAuthCommandOutput,
  ListDevicesCommand,
  type ListDevicesCommandInput,
  type ListDevicesCommandOutput,
  ListGroupsCommand,
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListIdentityProvidersCommand,
  type ListIdentityProvidersCommandInput,
  type ListIdentityProvidersCommandOutput,
  ListResourceServersCommand,
  type ListResourceServersCommandInput,
  type ListResourceServersCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListUserImportJobsCommand,
  type ListUserImportJobsCommandInput,
  type ListUserImportJobsCommandOutput,
  ListUserPoolClientsCommand,
  type ListUserPoolClientsCommandInput,
  type ListUserPoolClientsCommandOutput,
  ListUserPoolsCommand,
  type ListUserPoolsCommandInput,
  type ListUserPoolsCommandOutput,
  ListUsersCommand,
  type ListUsersCommandInput,
  type ListUsersCommandOutput,
  ListUsersInGroupCommand,
  type ListUsersInGroupCommandInput,
  type ListUsersInGroupCommandOutput,
  ListWebAuthnCredentialsCommand,
  type ListWebAuthnCredentialsCommandInput,
  type ListWebAuthnCredentialsCommandOutput,
  ResendConfirmationCodeCommand,
  type ResendConfirmationCodeCommandInput,
  type ResendConfirmationCodeCommandOutput,
  RespondToAuthChallengeCommand,
  type RespondToAuthChallengeCommandInput,
  type RespondToAuthChallengeCommandOutput,
  RevokeTokenCommand,
  type RevokeTokenCommandInput,
  type RevokeTokenCommandOutput,
  SetLogDeliveryConfigurationCommand,
  type SetLogDeliveryConfigurationCommandInput,
  type SetLogDeliveryConfigurationCommandOutput,
  SetRiskConfigurationCommand,
  type SetRiskConfigurationCommandInput,
  type SetRiskConfigurationCommandOutput,
  SetUICustomizationCommand,
  type SetUICustomizationCommandInput,
  type SetUICustomizationCommandOutput,
  SetUserMFAPreferenceCommand,
  type SetUserMFAPreferenceCommandInput,
  type SetUserMFAPreferenceCommandOutput,
  SetUserPoolMfaConfigCommand,
  type SetUserPoolMfaConfigCommandInput,
  type SetUserPoolMfaConfigCommandOutput,
  SetUserSettingsCommand,
  type SetUserSettingsCommandInput,
  type SetUserSettingsCommandOutput,
  SignUpCommand,
  type SignUpCommandInput,
  type SignUpCommandOutput,
  StartUserImportJobCommand,
  type StartUserImportJobCommandInput,
  type StartUserImportJobCommandOutput,
  StartWebAuthnRegistrationCommand,
  type StartWebAuthnRegistrationCommandInput,
  type StartWebAuthnRegistrationCommandOutput,
  StopUserImportJobCommand,
  type StopUserImportJobCommandInput,
  type StopUserImportJobCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAuthEventFeedbackCommand,
  type UpdateAuthEventFeedbackCommandInput,
  type UpdateAuthEventFeedbackCommandOutput,
  UpdateDeviceStatusCommand,
  type UpdateDeviceStatusCommandInput,
  type UpdateDeviceStatusCommandOutput,
  UpdateGroupCommand,
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateIdentityProviderCommand,
  type UpdateIdentityProviderCommandInput,
  type UpdateIdentityProviderCommandOutput,
  UpdateManagedLoginBrandingCommand,
  type UpdateManagedLoginBrandingCommandInput,
  type UpdateManagedLoginBrandingCommandOutput,
  UpdateResourceServerCommand,
  type UpdateResourceServerCommandInput,
  type UpdateResourceServerCommandOutput,
  UpdateUserAttributesCommand,
  type UpdateUserAttributesCommandInput,
  type UpdateUserAttributesCommandOutput,
  UpdateUserPoolCommand,
  type UpdateUserPoolCommandInput,
  type UpdateUserPoolCommandOutput,
  UpdateUserPoolClientCommand,
  type UpdateUserPoolClientCommandInput,
  type UpdateUserPoolClientCommandOutput,
  UpdateUserPoolDomainCommand,
  type UpdateUserPoolDomainCommandInput,
  type UpdateUserPoolDomainCommandOutput,
  VerifySoftwareTokenCommand,
  type VerifySoftwareTokenCommandInput,
  type VerifySoftwareTokenCommandOutput,
  VerifyUserAttributeCommand,
  type VerifyUserAttributeCommandInput,
  type VerifyUserAttributeCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";
import { Data, Effect, Layer, Record } from "effect";
import {
  CognitoIdentityProviderClientInstance,
  CognitoIdentityProviderClientInstanceLayer,
} from "./CognitoIdentityProviderClientInstance.js";
import {
  DefaultCognitoIdentityProviderClientConfigLayer,
  makeDefaultCognitoIdentityProviderClientInstanceConfig,
  CognitoIdentityProviderClientInstanceConfig,
} from "./CognitoIdentityProviderClientInstanceConfig.js";
import {
  AllServiceErrors,
  AliasExistsError,
  CodeDeliveryFailureError,
  CodeMismatchError,
  ConcurrentModificationError,
  DuplicateProviderError,
  EnableSoftwareTokenMFAError,
  ExpiredCodeError,
  FeatureUnavailableInTierError,
  ForbiddenError,
  GroupExistsError,
  InternalError,
  InvalidEmailRoleAccessPolicyError,
  InvalidLambdaResponseError,
  InvalidOAuthFlowError,
  InvalidParameterError,
  InvalidPasswordError,
  InvalidSmsRoleAccessPolicyError,
  InvalidSmsRoleTrustRelationshipError,
  InvalidUserPoolConfigurationError,
  LimitExceededError,
  MFAMethodNotFoundError,
  ManagedLoginBrandingExistsError,
  NotAuthorizedError,
  PasswordHistoryPolicyViolationError,
  PasswordResetRequiredError,
  PreconditionNotMetError,
  ResourceNotFoundError,
  ScopeDoesNotExistError,
  SoftwareTokenMFANotFoundError,
  TierChangeNotAllowedError,
  TooManyFailedAttemptsError,
  TooManyRequestsError,
  UnauthorizedError,
  UnexpectedLambdaError,
  UnsupportedIdentityProviderError,
  UnsupportedOperationError,
  UnsupportedTokenTypeError,
  UnsupportedUserStateError,
  UserImportInProgressError,
  UserLambdaValidationError,
  UserNotConfirmedError,
  UserNotFoundError,
  UserPoolAddOnNotEnabledError,
  UserPoolTaggingError,
  UsernameExistsError,
  WebAuthnChallengeNotFoundError,
  WebAuthnClientMismatchError,
  WebAuthnConfigurationMissingError,
  WebAuthnCredentialNotSupportedError,
  WebAuthnNotEnabledError,
  WebAuthnOriginNotAllowedError,
  WebAuthnRelyingPartyMismatchError,
  SdkError,
  TaggedException,
} from "./Errors.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  AddCustomAttributesCommand,
  AdminAddUserToGroupCommand,
  AdminConfirmSignUpCommand,
  AdminCreateUserCommand,
  AdminDeleteUserCommand,
  AdminDeleteUserAttributesCommand,
  AdminDisableProviderForUserCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  AdminForgetDeviceCommand,
  AdminGetDeviceCommand,
  AdminGetUserCommand,
  AdminInitiateAuthCommand,
  AdminLinkProviderForUserCommand,
  AdminListDevicesCommand,
  AdminListGroupsForUserCommand,
  AdminListUserAuthEventsCommand,
  AdminRemoveUserFromGroupCommand,
  AdminResetUserPasswordCommand,
  AdminRespondToAuthChallengeCommand,
  AdminSetUserMFAPreferenceCommand,
  AdminSetUserPasswordCommand,
  AdminSetUserSettingsCommand,
  AdminUpdateAuthEventFeedbackCommand,
  AdminUpdateDeviceStatusCommand,
  AdminUpdateUserAttributesCommand,
  AdminUserGlobalSignOutCommand,
  AssociateSoftwareTokenCommand,
  ChangePasswordCommand,
  CompleteWebAuthnRegistrationCommand,
  ConfirmDeviceCommand,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  CreateGroupCommand,
  CreateIdentityProviderCommand,
  CreateManagedLoginBrandingCommand,
  CreateResourceServerCommand,
  CreateUserImportJobCommand,
  CreateUserPoolCommand,
  CreateUserPoolClientCommand,
  CreateUserPoolDomainCommand,
  DeleteGroupCommand,
  DeleteIdentityProviderCommand,
  DeleteManagedLoginBrandingCommand,
  DeleteResourceServerCommand,
  DeleteUserCommand,
  DeleteUserAttributesCommand,
  DeleteUserPoolCommand,
  DeleteUserPoolClientCommand,
  DeleteUserPoolDomainCommand,
  DeleteWebAuthnCredentialCommand,
  DescribeIdentityProviderCommand,
  DescribeManagedLoginBrandingCommand,
  DescribeManagedLoginBrandingByClientCommand,
  DescribeResourceServerCommand,
  DescribeRiskConfigurationCommand,
  DescribeUserImportJobCommand,
  DescribeUserPoolCommand,
  DescribeUserPoolClientCommand,
  DescribeUserPoolDomainCommand,
  ForgetDeviceCommand,
  ForgotPasswordCommand,
  GetCSVHeaderCommand,
  GetDeviceCommand,
  GetGroupCommand,
  GetIdentityProviderByIdentifierCommand,
  GetLogDeliveryConfigurationCommand,
  GetSigningCertificateCommand,
  GetUICustomizationCommand,
  GetUserCommand,
  GetUserAttributeVerificationCodeCommand,
  GetUserAuthFactorsCommand,
  GetUserPoolMfaConfigCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  ListDevicesCommand,
  ListGroupsCommand,
  ListIdentityProvidersCommand,
  ListResourceServersCommand,
  ListTagsForResourceCommand,
  ListUserImportJobsCommand,
  ListUserPoolClientsCommand,
  ListUserPoolsCommand,
  ListUsersCommand,
  ListUsersInGroupCommand,
  ListWebAuthnCredentialsCommand,
  ResendConfirmationCodeCommand,
  RespondToAuthChallengeCommand,
  RevokeTokenCommand,
  SetLogDeliveryConfigurationCommand,
  SetRiskConfigurationCommand,
  SetUICustomizationCommand,
  SetUserMFAPreferenceCommand,
  SetUserPoolMfaConfigCommand,
  SetUserSettingsCommand,
  SignUpCommand,
  StartUserImportJobCommand,
  StartWebAuthnRegistrationCommand,
  StopUserImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAuthEventFeedbackCommand,
  UpdateDeviceStatusCommand,
  UpdateGroupCommand,
  UpdateIdentityProviderCommand,
  UpdateManagedLoginBrandingCommand,
  UpdateResourceServerCommand,
  UpdateUserAttributesCommand,
  UpdateUserPoolCommand,
  UpdateUserPoolClientCommand,
  UpdateUserPoolDomainCommand,
  VerifySoftwareTokenCommand,
  VerifyUserAttributeCommand,
};

interface CognitoIdentityProviderService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddCustomAttributesCommand}
   */
  addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddCustomAttributesCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserImportInProgressError
  >;

  /**
   * @see {@link AdminAddUserToGroupCommand}
   */
  adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminAddUserToGroupCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminConfirmSignUpCommand}
   */
  adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminConfirmSignUpCommandOutput,
    | SdkError
    | InternalError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyFailedAttemptsError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminCreateUserCommand}
   */
  adminCreateUser(
    args: AdminCreateUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminCreateUserCommandOutput,
    | SdkError
    | CodeDeliveryFailureError
    | InternalError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidPasswordError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | NotAuthorizedError
    | PreconditionNotMetError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UnsupportedUserStateError
    | UserLambdaValidationError
    | UsernameExistsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminDeleteUserCommand}
   */
  adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminDeleteUserCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminDeleteUserAttributesCommand}
   */
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminDeleteUserAttributesCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminDisableProviderForUserCommand}
   */
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminDisableProviderForUserCommandOutput,
    | SdkError
    | AliasExistsError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminDisableUserCommand}
   */
  adminDisableUser(
    args: AdminDisableUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminDisableUserCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminEnableUserCommand}
   */
  adminEnableUser(
    args: AdminEnableUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminEnableUserCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminForgetDeviceCommand}
   */
  adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminForgetDeviceCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminGetDeviceCommand}
   */
  adminGetDevice(
    args: AdminGetDeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminGetDeviceCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link AdminGetUserCommand}
   */
  adminGetUser(
    args: AdminGetUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminGetUserCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminInitiateAuthCommand}
   */
  adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminInitiateAuthCommandOutput,
    | SdkError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | InvalidUserPoolConfigurationError
    | MFAMethodNotFoundError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminLinkProviderForUserCommand}
   */
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminLinkProviderForUserCommandOutput,
    | SdkError
    | AliasExistsError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminListDevicesCommand}
   */
  adminListDevices(
    args: AdminListDevicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminListDevicesCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link AdminListGroupsForUserCommand}
   */
  adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminListGroupsForUserCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminListUserAuthEventsCommand}
   */
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminListUserAuthEventsCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
    | UserPoolAddOnNotEnabledError
  >;

  /**
   * @see {@link AdminRemoveUserFromGroupCommand}
   */
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminRemoveUserFromGroupCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminResetUserPasswordCommand}
   */
  adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminResetUserPasswordCommandOutput,
    | SdkError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminRespondToAuthChallengeCommand}
   */
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminRespondToAuthChallengeCommandOutput,
    | SdkError
    | AliasExistsError
    | CodeMismatchError
    | ExpiredCodeError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidPasswordError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | InvalidUserPoolConfigurationError
    | MFAMethodNotFoundError
    | NotAuthorizedError
    | PasswordHistoryPolicyViolationError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | SoftwareTokenMFANotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminSetUserMFAPreferenceCommand}
   */
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminSetUserMFAPreferenceCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminSetUserPasswordCommand}
   */
  adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminSetUserPasswordCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | InvalidPasswordError
    | NotAuthorizedError
    | PasswordHistoryPolicyViolationError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminSetUserSettingsCommand}
   */
  adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminSetUserSettingsCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminUpdateAuthEventFeedbackCommand}
   */
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminUpdateAuthEventFeedbackCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
    | UserPoolAddOnNotEnabledError
  >;

  /**
   * @see {@link AdminUpdateDeviceStatusCommand}
   */
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminUpdateDeviceStatusCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminUpdateUserAttributesCommand}
   */
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminUpdateUserAttributesCommandOutput,
    | SdkError
    | AliasExistsError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotFoundError
  >;

  /**
   * @see {@link AdminUserGlobalSignOutCommand}
   */
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdminUserGlobalSignOutCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
  >;

  /**
   * @see {@link AssociateSoftwareTokenCommand}
   */
  associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateSoftwareTokenCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | SoftwareTokenMFANotFoundError
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
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | InvalidPasswordError
    | LimitExceededError
    | NotAuthorizedError
    | PasswordHistoryPolicyViolationError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link CompleteWebAuthnRegistrationCommand}
   */
  completeWebAuthnRegistration(
    args: CompleteWebAuthnRegistrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CompleteWebAuthnRegistrationCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | TooManyRequestsError
    | WebAuthnChallengeNotFoundError
    | WebAuthnClientMismatchError
    | WebAuthnCredentialNotSupportedError
    | WebAuthnNotEnabledError
    | WebAuthnOriginNotAllowedError
    | WebAuthnRelyingPartyMismatchError
  >;

  /**
   * @see {@link ConfirmDeviceCommand}
   */
  confirmDevice(
    args: ConfirmDeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmDeviceCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidPasswordError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UsernameExistsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link ConfirmForgotPasswordCommand}
   */
  confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmForgotPasswordCommandOutput,
    | SdkError
    | CodeMismatchError
    | ExpiredCodeError
    | ForbiddenError
    | InternalError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidPasswordError
    | LimitExceededError
    | NotAuthorizedError
    | PasswordHistoryPolicyViolationError
    | ResourceNotFoundError
    | TooManyFailedAttemptsError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link ConfirmSignUpCommand}
   */
  confirmSignUp(
    args: ConfirmSignUpCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmSignUpCommandOutput,
    | SdkError
    | AliasExistsError
    | CodeMismatchError
    | ExpiredCodeError
    | ForbiddenError
    | InternalError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyFailedAttemptsError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotFoundError
  >;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGroupCommandOutput,
    | SdkError
    | GroupExistsError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateIdentityProviderCommand}
   */
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIdentityProviderCommandOutput,
    | SdkError
    | DuplicateProviderError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateManagedLoginBrandingCommand}
   */
  createManagedLoginBranding(
    args: CreateManagedLoginBrandingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateManagedLoginBrandingCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | ManagedLoginBrandingExistsError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateResourceServerCommand}
   */
  createResourceServer(
    args: CreateResourceServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateResourceServerCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateUserImportJobCommand}
   */
  createUserImportJob(
    args: CreateUserImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserImportJobCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | PreconditionNotMetError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateUserPoolCommand}
   */
  createUserPool(
    args: CreateUserPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserPoolCommandOutput,
    | SdkError
    | FeatureUnavailableInTierError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | LimitExceededError
    | NotAuthorizedError
    | TierChangeNotAllowedError
    | TooManyRequestsError
    | UserPoolTaggingError
  >;

  /**
   * @see {@link CreateUserPoolClientCommand}
   */
  createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserPoolClientCommandOutput,
    | SdkError
    | InternalError
    | InvalidOAuthFlowError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | ScopeDoesNotExistError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateUserPoolDomainCommand}
   */
  createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserPoolDomainCommandOutput,
    | SdkError
    | FeatureUnavailableInTierError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGroupCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteIdentityProviderCommand}
   */
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIdentityProviderCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnsupportedIdentityProviderError
  >;

  /**
   * @see {@link DeleteManagedLoginBrandingCommand}
   */
  deleteManagedLoginBranding(
    args: DeleteManagedLoginBrandingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteManagedLoginBrandingCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteResourceServerCommand}
   */
  deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourceServerCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
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
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link DeleteUserAttributesCommand}
   */
  deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserAttributesCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link DeleteUserPoolCommand}
   */
  deleteUserPool(
    args: DeleteUserPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserPoolCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserImportInProgressError
  >;

  /**
   * @see {@link DeleteUserPoolClientCommand}
   */
  deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserPoolClientCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteUserPoolDomainCommand}
   */
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserPoolDomainCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteWebAuthnCredentialCommand}
   */
  deleteWebAuthnCredential(
    args: DeleteWebAuthnCredentialCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteWebAuthnCredentialCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeIdentityProviderCommand}
   */
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIdentityProviderCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeManagedLoginBrandingCommand}
   */
  describeManagedLoginBranding(
    args: DescribeManagedLoginBrandingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeManagedLoginBrandingCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeManagedLoginBrandingByClientCommand}
   */
  describeManagedLoginBrandingByClient(
    args: DescribeManagedLoginBrandingByClientCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeManagedLoginBrandingByClientCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeResourceServerCommand}
   */
  describeResourceServer(
    args: DescribeResourceServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeResourceServerCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeRiskConfigurationCommand}
   */
  describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRiskConfigurationCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserPoolAddOnNotEnabledError
  >;

  /**
   * @see {@link DescribeUserImportJobCommand}
   */
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserImportJobCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeUserPoolCommand}
   */
  describeUserPool(
    args: DescribeUserPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserPoolCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserPoolTaggingError
  >;

  /**
   * @see {@link DescribeUserPoolClientCommand}
   */
  describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserPoolClientCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeUserPoolDomainCommand}
   */
  describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserPoolDomainCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ForgetDeviceCommand}
   */
  forgetDevice(
    args: ForgetDeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ForgetDeviceCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link ForgotPasswordCommand}
   */
  forgotPassword(
    args: ForgotPasswordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ForgotPasswordCommandOutput,
    | SdkError
    | CodeDeliveryFailureError
    | ForbiddenError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotFoundError
  >;

  /**
   * @see {@link GetCSVHeaderCommand}
   */
  getCSVHeader(
    args: GetCSVHeaderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCSVHeaderCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(
    args: GetDeviceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeviceCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(
    args: GetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGroupCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetIdentityProviderByIdentifierCommand}
   */
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIdentityProviderByIdentifierCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetLogDeliveryConfigurationCommand}
   */
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogDeliveryConfigurationCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetSigningCertificateCommand}
   */
  getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSigningCertificateCommandOutput,
    SdkError | InternalError | InvalidParameterError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetUICustomizationCommand}
   */
  getUICustomization(
    args: GetUICustomizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUICustomizationCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link GetUserAttributeVerificationCodeCommand}
   */
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserAttributeVerificationCodeCommandOutput,
    | SdkError
    | CodeDeliveryFailureError
    | ForbiddenError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | LimitExceededError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link GetUserAuthFactorsCommand}
   */
  getUserAuthFactors(
    args: GetUserAuthFactorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserAuthFactorsCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link GetUserPoolMfaConfigCommand}
   */
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserPoolMfaConfigCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GlobalSignOutCommand}
   */
  globalSignOut(
    args: GlobalSignOutCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GlobalSignOutCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
  >;

  /**
   * @see {@link InitiateAuthCommand}
   */
  initiateAuth(
    args: InitiateAuthCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InitiateAuthCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(
    args: ListDevicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDevicesCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGroupsCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListIdentityProvidersCommand}
   */
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIdentityProvidersCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListResourceServersCommand}
   */
  listResourceServers(
    args: ListResourceServersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceServersCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListUserImportJobsCommand}
   */
  listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUserImportJobsCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListUserPoolClientsCommand}
   */
  listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUserPoolClientsCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListUserPoolsCommand}
   */
  listUserPools(
    args: ListUserPoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUserPoolsCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUsersCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListUsersInGroupCommand}
   */
  listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUsersInGroupCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListWebAuthnCredentialsCommand}
   */
  listWebAuthnCredentials(
    args: ListWebAuthnCredentialsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListWebAuthnCredentialsCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
  >;

  /**
   * @see {@link ResendConfirmationCodeCommand}
   */
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResendConfirmationCodeCommandOutput,
    | SdkError
    | CodeDeliveryFailureError
    | ForbiddenError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotFoundError
  >;

  /**
   * @see {@link RespondToAuthChallengeCommand}
   */
  respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RespondToAuthChallengeCommandOutput,
    | SdkError
    | AliasExistsError
    | CodeMismatchError
    | ExpiredCodeError
    | ForbiddenError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidPasswordError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | InvalidUserPoolConfigurationError
    | MFAMethodNotFoundError
    | NotAuthorizedError
    | PasswordHistoryPolicyViolationError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | SoftwareTokenMFANotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link RevokeTokenCommand}
   */
  revokeToken(
    args: RevokeTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeTokenCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | TooManyRequestsError
    | UnauthorizedError
    | UnsupportedOperationError
    | UnsupportedTokenTypeError
  >;

  /**
   * @see {@link SetLogDeliveryConfigurationCommand}
   */
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetLogDeliveryConfigurationCommandOutput,
    | SdkError
    | FeatureUnavailableInTierError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link SetRiskConfigurationCommand}
   */
  setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetRiskConfigurationCommandOutput,
    | SdkError
    | CodeDeliveryFailureError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserPoolAddOnNotEnabledError
  >;

  /**
   * @see {@link SetUICustomizationCommand}
   */
  setUICustomization(
    args: SetUICustomizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetUICustomizationCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link SetUserMFAPreferenceCommand}
   */
  setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetUserMFAPreferenceCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link SetUserPoolMfaConfigCommand}
   */
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetUserPoolMfaConfigCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | FeatureUnavailableInTierError
    | InternalError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link SetUserSettingsCommand}
   */
  setUserSettings(
    args: SetUserSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetUserSettingsCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link SignUpCommand}
   */
  signUp(
    args: SignUpCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SignUpCommandOutput,
    | SdkError
    | CodeDeliveryFailureError
    | ForbiddenError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidPasswordError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UsernameExistsError
  >;

  /**
   * @see {@link StartUserImportJobCommand}
   */
  startUserImportJob(
    args: StartUserImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartUserImportJobCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PreconditionNotMetError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link StartWebAuthnRegistrationCommand}
   */
  startWebAuthnRegistration(
    args: StartWebAuthnRegistrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartWebAuthnRegistrationCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | TooManyRequestsError
    | WebAuthnConfigurationMissingError
    | WebAuthnNotEnabledError
  >;

  /**
   * @see {@link StopUserImportJobCommand}
   */
  stopUserImportJob(
    args: StopUserImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopUserImportJobCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | PreconditionNotMetError
    | ResourceNotFoundError
    | TooManyRequestsError
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
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
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
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateAuthEventFeedbackCommand}
   */
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAuthEventFeedbackCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotFoundError
    | UserPoolAddOnNotEnabledError
  >;

  /**
   * @see {@link UpdateDeviceStatusCommand}
   */
  updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeviceStatusCommandOutput,
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGroupCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateIdentityProviderCommand}
   */
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIdentityProviderCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnsupportedIdentityProviderError
  >;

  /**
   * @see {@link UpdateManagedLoginBrandingCommand}
   */
  updateManagedLoginBranding(
    args: UpdateManagedLoginBrandingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateManagedLoginBrandingCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateResourceServerCommand}
   */
  updateResourceServer(
    args: UpdateResourceServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateResourceServerCommandOutput,
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateUserAttributesCommand}
   */
  updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserAttributesCommandOutput,
    | SdkError
    | AliasExistsError
    | CodeDeliveryFailureError
    | CodeMismatchError
    | ExpiredCodeError
    | ForbiddenError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link UpdateUserPoolCommand}
   */
  updateUserPool(
    args: UpdateUserPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserPoolCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | FeatureUnavailableInTierError
    | InternalError
    | InvalidEmailRoleAccessPolicyError
    | InvalidParameterError
    | InvalidSmsRoleAccessPolicyError
    | InvalidSmsRoleTrustRelationshipError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TierChangeNotAllowedError
    | TooManyRequestsError
    | UserImportInProgressError
    | UserPoolTaggingError
  >;

  /**
   * @see {@link UpdateUserPoolClientCommand}
   */
  updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserPoolClientCommandOutput,
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidOAuthFlowError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | ScopeDoesNotExistError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateUserPoolDomainCommand}
   */
  updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserPoolDomainCommandOutput,
    | SdkError
    | FeatureUnavailableInTierError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link VerifySoftwareTokenCommand}
   */
  verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifySoftwareTokenCommandOutput,
    | SdkError
    | CodeMismatchError
    | EnableSoftwareTokenMFAError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | InvalidUserPoolConfigurationError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | SoftwareTokenMFANotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;

  /**
   * @see {@link VerifyUserAttributeCommand}
   */
  verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyUserAttributeCommandOutput,
    | SdkError
    | AliasExistsError
    | CodeMismatchError
    | ExpiredCodeError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | PasswordResetRequiredError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserNotConfirmedError
    | UserNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCognitoIdentityProviderService = Effect.gen(function* (_) {
  const client = yield* _(CognitoIdentityProviderClientInstance);

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
            e instanceof CognitoIdentityProviderServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<CognitoIdentityProviderServiceException>
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
  }, {}) as CognitoIdentityProviderService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class CognitoIdentityProviderService extends Effect.Tag(
  "@effect-aws/client-cognito-identity-provider/CognitoIdentityProviderService",
)<CognitoIdentityProviderService, CognitoIdentityProviderService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeCognitoIdentityProviderService,
  ).pipe(
    Layer.provide(CognitoIdentityProviderClientInstanceLayer),
    Layer.provide(DefaultCognitoIdentityProviderClientConfigLayer),
  );
  static readonly layer = (config: CognitoIdentityProviderClientConfig) =>
    Layer.effect(this, makeCognitoIdentityProviderService).pipe(
      Layer.provide(CognitoIdentityProviderClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          CognitoIdentityProviderClientInstanceConfig,
          makeDefaultCognitoIdentityProviderClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (
      defaultConfig: CognitoIdentityProviderClientConfig,
    ) => CognitoIdentityProviderClient,
  ) =>
    Layer.effect(this, makeCognitoIdentityProviderService).pipe(
      Layer.provide(
        Layer.effect(
          CognitoIdentityProviderClientInstance,
          Effect.map(
            makeDefaultCognitoIdentityProviderClientInstanceConfig,
            evaluate,
          ),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias CognitoIdentityProviderService
 */
export const CognitoIdentityProvider = CognitoIdentityProviderService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CognitoIdentityProvider.baseLayer instead
 */
export const BaseCognitoIdentityProviderServiceLayer = Layer.effect(
  CognitoIdentityProviderService,
  makeCognitoIdentityProviderService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CognitoIdentityProvider.layer instead
 */
export const CognitoIdentityProviderServiceLayer =
  BaseCognitoIdentityProviderServiceLayer.pipe(
    Layer.provide(CognitoIdentityProviderClientInstanceLayer),
  );

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CognitoIdentityProvider.defaultLayer instead
 */
export const DefaultCognitoIdentityProviderServiceLayer =
  CognitoIdentityProviderService.defaultLayer;
