import type {
  AuthorizationErrorException as SdkAuthorizationErrorException,
  BatchEntryIdsNotDistinctException as SdkBatchEntryIdsNotDistinctException,
  BatchRequestTooLongException as SdkBatchRequestTooLongException,
  ConcurrentAccessException as SdkConcurrentAccessException,
  EmptyBatchRequestException as SdkEmptyBatchRequestException,
  EndpointDisabledException as SdkEndpointDisabledException,
  FilterPolicyLimitExceededException as SdkFilterPolicyLimitExceededException,
  InternalErrorException as SdkInternalErrorException,
  InvalidBatchEntryIdException as SdkInvalidBatchEntryIdException,
  InvalidParameterException as SdkInvalidParameterException,
  InvalidParameterValueException as SdkInvalidParameterValueException,
  InvalidSecurityException as SdkInvalidSecurityException,
  InvalidStateException as SdkInvalidStateException,
  KMSAccessDeniedException as SdkKMSAccessDeniedException,
  KMSDisabledException as SdkKMSDisabledException,
  KMSInvalidStateException as SdkKMSInvalidStateException,
  KMSNotFoundException as SdkKMSNotFoundException,
  KMSOptInRequired as SdkKMSOptInRequired,
  KMSThrottlingException as SdkKMSThrottlingException,
  NotFoundException as SdkNotFoundException,
  OptedOutException as SdkOptedOutException,
  PlatformApplicationDisabledException as SdkPlatformApplicationDisabledException,
  ReplayLimitExceededException as SdkReplayLimitExceededException,
  ResourceNotFoundException as SdkResourceNotFoundException,
  StaleTagException as SdkStaleTagException,
  SubscriptionLimitExceededException as SdkSubscriptionLimitExceededException,
  TagLimitExceededException as SdkTagLimitExceededException,
  TagPolicyException as SdkTagPolicyException,
  ThrottledException as SdkThrottledException,
  TooManyEntriesInBatchRequestException as SdkTooManyEntriesInBatchRequestException,
  TopicLimitExceededException as SdkTopicLimitExceededException,
  UserErrorException as SdkUserErrorException,
  ValidationException as SdkValidationException,
  VerificationException as SdkVerificationException,
} from "@aws-sdk/client-sns";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AuthorizationErrorException =
  TaggedException<SdkAuthorizationErrorException>;
export type BatchEntryIdsNotDistinctException =
  TaggedException<SdkBatchEntryIdsNotDistinctException>;
export type BatchRequestTooLongException =
  TaggedException<SdkBatchRequestTooLongException>;
export type ConcurrentAccessException =
  TaggedException<SdkConcurrentAccessException>;
export type EmptyBatchRequestException =
  TaggedException<SdkEmptyBatchRequestException>;
export type EndpointDisabledException =
  TaggedException<SdkEndpointDisabledException>;
export type FilterPolicyLimitExceededException =
  TaggedException<SdkFilterPolicyLimitExceededException>;
export type InternalErrorException = TaggedException<SdkInternalErrorException>;
export type InvalidBatchEntryIdException =
  TaggedException<SdkInvalidBatchEntryIdException>;
export type InvalidParameterException =
  TaggedException<SdkInvalidParameterException>;
export type InvalidParameterValueException =
  TaggedException<SdkInvalidParameterValueException>;
export type InvalidSecurityException =
  TaggedException<SdkInvalidSecurityException>;
export type InvalidStateException = TaggedException<SdkInvalidStateException>;
export type KMSAccessDeniedException =
  TaggedException<SdkKMSAccessDeniedException>;
export type KMSDisabledException = TaggedException<SdkKMSDisabledException>;
export type KMSInvalidStateException =
  TaggedException<SdkKMSInvalidStateException>;
export type KMSNotFoundException = TaggedException<SdkKMSNotFoundException>;
export type KMSOptInRequired = TaggedException<SdkKMSOptInRequired>;
export type KMSThrottlingException = TaggedException<SdkKMSThrottlingException>;
export type NotFoundException = TaggedException<SdkNotFoundException>;
export type OptedOutException = TaggedException<SdkOptedOutException>;
export type PlatformApplicationDisabledException =
  TaggedException<SdkPlatformApplicationDisabledException>;
export type ReplayLimitExceededException =
  TaggedException<SdkReplayLimitExceededException>;
export type ResourceNotFoundException =
  TaggedException<SdkResourceNotFoundException>;
export type StaleTagException = TaggedException<SdkStaleTagException>;
export type SubscriptionLimitExceededException =
  TaggedException<SdkSubscriptionLimitExceededException>;
export type TagLimitExceededException =
  TaggedException<SdkTagLimitExceededException>;
export type TagPolicyException = TaggedException<SdkTagPolicyException>;
export type ThrottledException = TaggedException<SdkThrottledException>;
export type TooManyEntriesInBatchRequestException =
  TaggedException<SdkTooManyEntriesInBatchRequestException>;
export type TopicLimitExceededException =
  TaggedException<SdkTopicLimitExceededException>;
export type UserErrorException = TaggedException<SdkUserErrorException>;
export type ValidationException = TaggedException<SdkValidationException>;
export type VerificationException = TaggedException<SdkVerificationException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
