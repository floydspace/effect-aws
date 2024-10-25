import type {
  AliasExistsException,
  CodeDeliveryFailureException,
  CodeMismatchException,
  ConcurrentModificationException,
  DuplicateProviderException,
  EnableSoftwareTokenMFAException,
  ExpiredCodeException,
  ForbiddenException,
  GroupExistsException,
  InternalErrorException,
  InvalidEmailRoleAccessPolicyException,
  InvalidLambdaResponseException,
  InvalidOAuthFlowException,
  InvalidParameterException,
  InvalidPasswordException,
  InvalidSmsRoleAccessPolicyException,
  InvalidSmsRoleTrustRelationshipException,
  InvalidUserPoolConfigurationException,
  LimitExceededException,
  MFAMethodNotFoundException,
  NotAuthorizedException,
  PasswordHistoryPolicyViolationException,
  PasswordResetRequiredException,
  PreconditionNotMetException,
  ResourceNotFoundException,
  ScopeDoesNotExistException,
  SoftwareTokenMFANotFoundException,
  TooManyFailedAttemptsException,
  TooManyRequestsException,
  UnauthorizedException,
  UnexpectedLambdaException,
  UnsupportedIdentityProviderException,
  UnsupportedOperationException,
  UnsupportedTokenTypeException,
  UnsupportedUserStateException,
  UserImportInProgressException,
  UserLambdaValidationException,
  UserNotConfirmedException,
  UserNotFoundException,
  UserPoolAddOnNotEnabledException,
  UserPoolTaggingException,
  UsernameExistsException,
} from "@aws-sdk/client-cognito-identity-provider";
import { Data } from "effect";

export const AllServiceErrors = [
  "AliasExistsException",
  "CodeDeliveryFailureException",
  "CodeMismatchException",
  "ConcurrentModificationException",
  "DuplicateProviderException",
  "EnableSoftwareTokenMFAException",
  "ExpiredCodeException",
  "ForbiddenException",
  "GroupExistsException",
  "InternalErrorException",
  "InvalidEmailRoleAccessPolicyException",
  "InvalidLambdaResponseException",
  "InvalidOAuthFlowException",
  "InvalidParameterException",
  "InvalidPasswordException",
  "InvalidSmsRoleAccessPolicyException",
  "InvalidSmsRoleTrustRelationshipException",
  "InvalidUserPoolConfigurationException",
  "LimitExceededException",
  "MFAMethodNotFoundException",
  "NotAuthorizedException",
  "PasswordHistoryPolicyViolationException",
  "PasswordResetRequiredException",
  "PreconditionNotMetException",
  "ResourceNotFoundException",
  "ScopeDoesNotExistException",
  "SoftwareTokenMFANotFoundException",
  "TooManyFailedAttemptsException",
  "TooManyRequestsException",
  "UnauthorizedException",
  "UnexpectedLambdaException",
  "UnsupportedIdentityProviderException",
  "UnsupportedOperationException",
  "UnsupportedTokenTypeException",
  "UnsupportedUserStateException",
  "UserImportInProgressException",
  "UserLambdaValidationException",
  "UserNotConfirmedException",
  "UserNotFoundException",
  "UserPoolAddOnNotEnabledException",
  "UserPoolTaggingException",
  "UsernameExistsException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AliasExistsError = TaggedException<AliasExistsException>;
export type CodeDeliveryFailureError =
  TaggedException<CodeDeliveryFailureException>;
export type CodeMismatchError = TaggedException<CodeMismatchException>;
export type ConcurrentModificationError =
  TaggedException<ConcurrentModificationException>;
export type DuplicateProviderError =
  TaggedException<DuplicateProviderException>;
export type EnableSoftwareTokenMFAError =
  TaggedException<EnableSoftwareTokenMFAException>;
export type ExpiredCodeError = TaggedException<ExpiredCodeException>;
export type ForbiddenError = TaggedException<ForbiddenException>;
export type GroupExistsError = TaggedException<GroupExistsException>;
export type InternalError = TaggedException<InternalErrorException>;
export type InvalidEmailRoleAccessPolicyError =
  TaggedException<InvalidEmailRoleAccessPolicyException>;
export type InvalidLambdaResponseError =
  TaggedException<InvalidLambdaResponseException>;
export type InvalidOAuthFlowError = TaggedException<InvalidOAuthFlowException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidPasswordError = TaggedException<InvalidPasswordException>;
export type InvalidSmsRoleAccessPolicyError =
  TaggedException<InvalidSmsRoleAccessPolicyException>;
export type InvalidSmsRoleTrustRelationshipError =
  TaggedException<InvalidSmsRoleTrustRelationshipException>;
export type InvalidUserPoolConfigurationError =
  TaggedException<InvalidUserPoolConfigurationException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MFAMethodNotFoundError =
  TaggedException<MFAMethodNotFoundException>;
export type NotAuthorizedError = TaggedException<NotAuthorizedException>;
export type PasswordHistoryPolicyViolationError =
  TaggedException<PasswordHistoryPolicyViolationException>;
export type PasswordResetRequiredError =
  TaggedException<PasswordResetRequiredException>;
export type PreconditionNotMetError =
  TaggedException<PreconditionNotMetException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ScopeDoesNotExistError =
  TaggedException<ScopeDoesNotExistException>;
export type SoftwareTokenMFANotFoundError =
  TaggedException<SoftwareTokenMFANotFoundException>;
export type TooManyFailedAttemptsError =
  TaggedException<TooManyFailedAttemptsException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type UnexpectedLambdaError = TaggedException<UnexpectedLambdaException>;
export type UnsupportedIdentityProviderError =
  TaggedException<UnsupportedIdentityProviderException>;
export type UnsupportedOperationError =
  TaggedException<UnsupportedOperationException>;
export type UnsupportedTokenTypeError =
  TaggedException<UnsupportedTokenTypeException>;
export type UnsupportedUserStateError =
  TaggedException<UnsupportedUserStateException>;
export type UserImportInProgressError =
  TaggedException<UserImportInProgressException>;
export type UserLambdaValidationError =
  TaggedException<UserLambdaValidationException>;
export type UserNotConfirmedError = TaggedException<UserNotConfirmedException>;
export type UserNotFoundError = TaggedException<UserNotFoundException>;
export type UserPoolAddOnNotEnabledError =
  TaggedException<UserPoolAddOnNotEnabledException>;
export type UserPoolTaggingError = TaggedException<UserPoolTaggingException>;
export type UsernameExistsError = TaggedException<UsernameExistsException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
