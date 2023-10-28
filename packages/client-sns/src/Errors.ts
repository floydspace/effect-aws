import type {
  AuthorizationErrorException,
  BatchEntryIdsNotDistinctException,
  BatchRequestTooLongException,
  ConcurrentAccessException,
  EmptyBatchRequestException,
  EndpointDisabledException,
  FilterPolicyLimitExceededException,
  InternalErrorException,
  InvalidBatchEntryIdException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidSecurityException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  NotFoundException,
  OptedOutException,
  PlatformApplicationDisabledException,
  ResourceNotFoundException,
  StaleTagException,
  SubscriptionLimitExceededException,
  TagLimitExceededException,
  TagPolicyException,
  ThrottledException,
  TooManyEntriesInBatchRequestException,
  TopicLimitExceededException,
  UserErrorException,
  ValidationException,
  VerificationException,
} from "@aws-sdk/client-sns";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = Data.Case &
  T & { readonly _tag: T["name"] };

export type AuthorizationError = TaggedException<AuthorizationErrorException>;
export type BatchEntryIdsNotDistinctError =
  TaggedException<BatchEntryIdsNotDistinctException>;
export type BatchRequestTooLongError =
  TaggedException<BatchRequestTooLongException>;
export type ConcurrentAccessError = TaggedException<ConcurrentAccessException>;
export type EmptyBatchRequestError =
  TaggedException<EmptyBatchRequestException>;
export type EndpointDisabledError = TaggedException<EndpointDisabledException>;
export type FilterPolicyLimitExceededError =
  TaggedException<FilterPolicyLimitExceededException>;
export type InternalError = TaggedException<InternalErrorException>;
export type InvalidBatchEntryIdError =
  TaggedException<InvalidBatchEntryIdException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidParameterValueError =
  TaggedException<InvalidParameterValueException>;
export type InvalidSecurityError = TaggedException<InvalidSecurityException>;
export type KMSAccessDeniedError = TaggedException<KMSAccessDeniedException>;
export type KMSDisabledError = TaggedException<KMSDisabledException>;
export type KMSInvalidStateError = TaggedException<KMSInvalidStateException>;
export type KMSNotFoundError = TaggedException<KMSNotFoundException>;
export type KMSOptInRequiredError = TaggedException<KMSOptInRequired>;
export type KMSThrottlingError = TaggedException<KMSThrottlingException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type OptedOutError = TaggedException<OptedOutException>;
export type PlatformApplicationDisabledError =
  TaggedException<PlatformApplicationDisabledException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type StaleTagError = TaggedException<StaleTagException>;
export type SubscriptionLimitExceededError =
  TaggedException<SubscriptionLimitExceededException>;
export type TagLimitExceededError = TaggedException<TagLimitExceededException>;
export type TagPolicyError = TaggedException<TagPolicyException>;
export type ThrottledError = TaggedException<ThrottledException>;
export type TooManyEntriesInBatchRequestError =
  TaggedException<TooManyEntriesInBatchRequestException>;
export type TopicLimitExceededError =
  TaggedException<TopicLimitExceededException>;
export type UserError = TaggedException<UserErrorException>;
export type ValidationError = TaggedException<ValidationException>;
export type VerificationError = TaggedException<VerificationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
