/**
 * @since 1.0.0
 */
import {
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
  AdminDeleteUserAttributesCommand,
  type AdminDeleteUserAttributesCommandInput,
  type AdminDeleteUserAttributesCommandOutput,
  AdminDeleteUserCommand,
  type AdminDeleteUserCommandInput,
  type AdminDeleteUserCommandOutput,
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
  type CognitoIdentityProviderClient,
  type CognitoIdentityProviderClientConfig,
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
  CreateTermsCommand,
  type CreateTermsCommandInput,
  type CreateTermsCommandOutput,
  CreateUserImportJobCommand,
  type CreateUserImportJobCommandInput,
  type CreateUserImportJobCommandOutput,
  CreateUserPoolClientCommand,
  type CreateUserPoolClientCommandInput,
  type CreateUserPoolClientCommandOutput,
  CreateUserPoolCommand,
  type CreateUserPoolCommandInput,
  type CreateUserPoolCommandOutput,
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
  DeleteTermsCommand,
  type DeleteTermsCommandInput,
  type DeleteTermsCommandOutput,
  DeleteUserAttributesCommand,
  type DeleteUserAttributesCommandInput,
  type DeleteUserAttributesCommandOutput,
  DeleteUserCommand,
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserPoolClientCommand,
  type DeleteUserPoolClientCommandInput,
  type DeleteUserPoolClientCommandOutput,
  DeleteUserPoolCommand,
  type DeleteUserPoolCommandInput,
  type DeleteUserPoolCommandOutput,
  DeleteUserPoolDomainCommand,
  type DeleteUserPoolDomainCommandInput,
  type DeleteUserPoolDomainCommandOutput,
  DeleteWebAuthnCredentialCommand,
  type DeleteWebAuthnCredentialCommandInput,
  type DeleteWebAuthnCredentialCommandOutput,
  DescribeIdentityProviderCommand,
  type DescribeIdentityProviderCommandInput,
  type DescribeIdentityProviderCommandOutput,
  DescribeManagedLoginBrandingByClientCommand,
  type DescribeManagedLoginBrandingByClientCommandInput,
  type DescribeManagedLoginBrandingByClientCommandOutput,
  DescribeManagedLoginBrandingCommand,
  type DescribeManagedLoginBrandingCommandInput,
  type DescribeManagedLoginBrandingCommandOutput,
  DescribeResourceServerCommand,
  type DescribeResourceServerCommandInput,
  type DescribeResourceServerCommandOutput,
  DescribeRiskConfigurationCommand,
  type DescribeRiskConfigurationCommandInput,
  type DescribeRiskConfigurationCommandOutput,
  DescribeTermsCommand,
  type DescribeTermsCommandInput,
  type DescribeTermsCommandOutput,
  DescribeUserImportJobCommand,
  type DescribeUserImportJobCommandInput,
  type DescribeUserImportJobCommandOutput,
  DescribeUserPoolClientCommand,
  type DescribeUserPoolClientCommandInput,
  type DescribeUserPoolClientCommandOutput,
  DescribeUserPoolCommand,
  type DescribeUserPoolCommandInput,
  type DescribeUserPoolCommandOutput,
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
  GetTokensFromRefreshTokenCommand,
  type GetTokensFromRefreshTokenCommandInput,
  type GetTokensFromRefreshTokenCommandOutput,
  GetUICustomizationCommand,
  type GetUICustomizationCommandInput,
  type GetUICustomizationCommandOutput,
  GetUserAttributeVerificationCodeCommand,
  type GetUserAttributeVerificationCodeCommandInput,
  type GetUserAttributeVerificationCodeCommandOutput,
  GetUserAuthFactorsCommand,
  type GetUserAuthFactorsCommandInput,
  type GetUserAuthFactorsCommandOutput,
  GetUserCommand,
  type GetUserCommandInput,
  type GetUserCommandOutput,
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
  ListTermsCommand,
  type ListTermsCommandInput,
  type ListTermsCommandOutput,
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
  UpdateTermsCommand,
  type UpdateTermsCommandInput,
  type UpdateTermsCommandOutput,
  UpdateUserAttributesCommand,
  type UpdateUserAttributesCommandInput,
  type UpdateUserAttributesCommandOutput,
  UpdateUserPoolClientCommand,
  type UpdateUserPoolClientCommandInput,
  type UpdateUserPoolClientCommandOutput,
  UpdateUserPoolCommand,
  type UpdateUserPoolCommandInput,
  type UpdateUserPoolCommandOutput,
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
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./CognitoIdentityProviderClientInstance.js";
import * as CognitoIdentityProviderServiceConfig from "./CognitoIdentityProviderServiceConfig.js";
import type {
  AliasExistsError,
  CodeDeliveryFailureError,
  CodeMismatchError,
  ConcurrentModificationError,
  DeviceKeyExistsError,
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
  ManagedLoginBrandingExistsError,
  MFAMethodNotFoundError,
  NotAuthorizedError,
  PasswordHistoryPolicyViolationError,
  PasswordResetRequiredError,
  PreconditionNotMetError,
  RefreshTokenReuseError,
  ResourceNotFoundError,
  ScopeDoesNotExistError,
  SdkError,
  SoftwareTokenMFANotFoundError,
  TermsExistsError,
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
  UsernameExistsError,
  UserNotConfirmedError,
  UserNotFoundError,
  UserPoolAddOnNotEnabledError,
  UserPoolTaggingError,
  WebAuthnChallengeNotFoundError,
  WebAuthnClientMismatchError,
  WebAuthnConfigurationMissingError,
  WebAuthnCredentialNotSupportedError,
  WebAuthnNotEnabledError,
  WebAuthnOriginNotAllowedError,
  WebAuthnRelyingPartyMismatchError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

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
  CreateTermsCommand,
  CreateUserImportJobCommand,
  CreateUserPoolCommand,
  CreateUserPoolClientCommand,
  CreateUserPoolDomainCommand,
  DeleteGroupCommand,
  DeleteIdentityProviderCommand,
  DeleteManagedLoginBrandingCommand,
  DeleteResourceServerCommand,
  DeleteTermsCommand,
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
  DescribeTermsCommand,
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
  GetTokensFromRefreshTokenCommand,
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
  ListTermsCommand,
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
  UpdateTermsCommand,
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | UnsupportedOperationError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | DeviceKeyExistsError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateTermsCommand}
   */
  createTerms(
    args: CreateTermsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTermsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TermsExistsError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | FeatureUnavailableInTierError
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
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteTermsCommand}
   */
  deleteTerms(
    args: DeleteTermsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTermsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
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
    | Cause.TimeoutException
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeIdentityProviderCommand}
   */
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIdentityProviderCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UserPoolAddOnNotEnabledError
  >;

  /**
   * @see {@link DescribeTermsCommand}
   */
  describeTerms(
    args: DescribeTermsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTermsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeUserImportJobCommand}
   */
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserImportJobCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | InternalError | InvalidParameterError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetTokensFromRefreshTokenCommand}
   */
  getTokensFromRefreshToken(
    args: GetTokensFromRefreshTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTokensFromRefreshTokenCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidLambdaResponseError
    | InvalidParameterError
    | NotAuthorizedError
    | RefreshTokenReuseError
    | ResourceNotFoundError
    | TooManyRequestsError
    | UnexpectedLambdaError
    | UserLambdaValidationError
    | UserNotFoundError
  >;

  /**
   * @see {@link GetUICustomizationCommand}
   */
  getUICustomization(
    args: GetUICustomizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUICustomizationCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | UnsupportedOperationError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListTermsCommand}
   */
  listTerms(
    args: ListTermsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTermsCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | ForbiddenError
    | InternalError
    | InvalidParameterError
    | LimitExceededError
    | NotAuthorizedError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ResendConfirmationCodeCommand}
   */
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResendConfirmationCodeCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateTermsCommand}
   */
  updateTerms(
    args: UpdateTermsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTermsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidParameterError
    | NotAuthorizedError
    | ResourceNotFoundError
    | TermsExistsError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | FeatureUnavailableInTierError
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
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
export const makeCognitoIdentityProviderService = Effect.gen(function*() {
  const client = yield* Instance.CognitoIdentityProviderClientInstance;

  return yield* Service.fromClientAndCommands<CognitoIdentityProviderService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CognitoIdentityProviderServiceConfig.toCognitoIdentityProviderClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CognitoIdentityProviderService
  extends Effect.Tag("@effect-aws/client-cognito-identity-provider/CognitoIdentityProviderService")<
    CognitoIdentityProviderService,
    CognitoIdentityProviderService$
  >()
{
  static readonly defaultLayer = Layer.effect(this, makeCognitoIdentityProviderService).pipe(
    Layer.provide(Instance.layer),
  );
  static readonly layer = (config: CognitoIdentityProviderService.Config) =>
    Layer.effect(this, makeCognitoIdentityProviderService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(CognitoIdentityProviderServiceConfig.setCognitoIdentityProviderServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CognitoIdentityProviderClientConfig) => CognitoIdentityProviderClient,
  ) =>
    Layer.effect(this, makeCognitoIdentityProviderService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CognitoIdentityProviderClientInstance,
          Effect.map(CognitoIdentityProviderServiceConfig.toCognitoIdentityProviderClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CognitoIdentityProviderService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CognitoIdentityProviderClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = CognitoIdentityProviderService$;
}
