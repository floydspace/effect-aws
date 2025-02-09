import type {
  AccessDeniedException,
  AccountHasOngoingImportException,
  AccountNotFoundException,
  AccountNotRegisteredException,
  AccountRegisteredException,
  CannotDelegateManagementAccountException,
  ChannelAlreadyExistsException,
  ChannelARNInvalidException,
  ChannelExistsForEDSException,
  ChannelMaxLimitExceededException,
  ChannelNotFoundException,
  CloudTrailAccessNotEnabledException,
  CloudTrailARNInvalidException,
  CloudTrailInvalidClientTokenIdException,
  CloudWatchLogsDeliveryUnavailableException,
  ConcurrentModificationException,
  ConflictException,
  DelegatedAdminAccountLimitExceededException,
  EventDataStoreAlreadyExistsException,
  EventDataStoreARNInvalidException,
  EventDataStoreFederationEnabledException,
  EventDataStoreHasOngoingImportException,
  EventDataStoreMaxLimitExceededException,
  EventDataStoreNotFoundException,
  EventDataStoreTerminationProtectedException,
  GenerateResponseException,
  ImportNotFoundException,
  InactiveEventDataStoreException,
  InactiveQueryException,
  InsightNotEnabledException,
  InsufficientDependencyServiceAccessPermissionException,
  InsufficientEncryptionPolicyException,
  InsufficientS3BucketPolicyException,
  InsufficientSnsTopicPolicyException,
  InvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsRoleArnException,
  InvalidDateRangeException,
  InvalidEventCategoryException,
  InvalidEventDataStoreCategoryException,
  InvalidEventDataStoreStatusException,
  InvalidEventSelectorsException,
  InvalidHomeRegionException,
  InvalidImportSourceException,
  InvalidInsightSelectorsException,
  InvalidKmsKeyIdException,
  InvalidLookupAttributesException,
  InvalidMaxResultsException,
  InvalidNextTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidQueryStatementException,
  InvalidQueryStatusException,
  InvalidS3BucketNameException,
  InvalidS3PrefixException,
  InvalidSnsTopicNameException,
  InvalidSourceException,
  InvalidTagParameterException,
  InvalidTimeRangeException,
  InvalidTokenException,
  InvalidTrailNameException,
  KmsException,
  KmsKeyDisabledException,
  KmsKeyNotFoundException,
  MaxConcurrentQueriesException,
  MaximumNumberOfTrailsExceededException,
  NoManagementAccountSLRExistsException,
  NotOrganizationManagementAccountException,
  NotOrganizationMasterAccountException,
  OperationNotPermittedException,
  OrganizationNotInAllFeaturesModeException,
  OrganizationsNotInUseException,
  QueryIdNotFoundException,
  ResourceARNNotValidException,
  ResourceNotFoundException,
  ResourcePolicyNotFoundException,
  ResourcePolicyNotValidException,
  ResourceTypeNotSupportedException,
  S3BucketDoesNotExistException,
  ServiceQuotaExceededException,
  TagsLimitExceededException,
  ThrottlingException,
  TrailAlreadyExistsException,
  TrailNotFoundException,
  TrailNotProvidedException,
  UnsupportedOperationException,
} from "@aws-sdk/client-cloudtrail";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "AccountHasOngoingImportException",
  "AccountNotFoundException",
  "AccountNotRegisteredException",
  "AccountRegisteredException",
  "CannotDelegateManagementAccountException",
  "ChannelARNInvalidException",
  "ChannelAlreadyExistsException",
  "ChannelExistsForEDSException",
  "ChannelMaxLimitExceededException",
  "ChannelNotFoundException",
  "CloudTrailARNInvalidException",
  "CloudTrailAccessNotEnabledException",
  "CloudTrailInvalidClientTokenIdException",
  "CloudWatchLogsDeliveryUnavailableException",
  "ConcurrentModificationException",
  "ConflictException",
  "DelegatedAdminAccountLimitExceededException",
  "EventDataStoreARNInvalidException",
  "EventDataStoreAlreadyExistsException",
  "EventDataStoreFederationEnabledException",
  "EventDataStoreHasOngoingImportException",
  "EventDataStoreMaxLimitExceededException",
  "EventDataStoreNotFoundException",
  "EventDataStoreTerminationProtectedException",
  "GenerateResponseException",
  "ImportNotFoundException",
  "InactiveEventDataStoreException",
  "InactiveQueryException",
  "InsightNotEnabledException",
  "InsufficientDependencyServiceAccessPermissionException",
  "InsufficientEncryptionPolicyException",
  "InsufficientS3BucketPolicyException",
  "InsufficientSnsTopicPolicyException",
  "InvalidCloudWatchLogsLogGroupArnException",
  "InvalidCloudWatchLogsRoleArnException",
  "InvalidDateRangeException",
  "InvalidEventCategoryException",
  "InvalidEventDataStoreCategoryException",
  "InvalidEventDataStoreStatusException",
  "InvalidEventSelectorsException",
  "InvalidHomeRegionException",
  "InvalidImportSourceException",
  "InvalidInsightSelectorsException",
  "InvalidKmsKeyIdException",
  "InvalidLookupAttributesException",
  "InvalidMaxResultsException",
  "InvalidNextTokenException",
  "InvalidParameterCombinationException",
  "InvalidParameterException",
  "InvalidQueryStatementException",
  "InvalidQueryStatusException",
  "InvalidS3BucketNameException",
  "InvalidS3PrefixException",
  "InvalidSnsTopicNameException",
  "InvalidSourceException",
  "InvalidTagParameterException",
  "InvalidTimeRangeException",
  "InvalidTokenException",
  "InvalidTrailNameException",
  "KmsException",
  "KmsKeyDisabledException",
  "KmsKeyNotFoundException",
  "MaxConcurrentQueriesException",
  "MaximumNumberOfTrailsExceededException",
  "NoManagementAccountSLRExistsException",
  "NotOrganizationManagementAccountException",
  "NotOrganizationMasterAccountException",
  "OperationNotPermittedException",
  "OrganizationNotInAllFeaturesModeException",
  "OrganizationsNotInUseException",
  "QueryIdNotFoundException",
  "ResourceARNNotValidException",
  "ResourceNotFoundException",
  "ResourcePolicyNotFoundException",
  "ResourcePolicyNotValidException",
  "ResourceTypeNotSupportedException",
  "S3BucketDoesNotExistException",
  "ServiceQuotaExceededException",
  "TagsLimitExceededException",
  "ThrottlingException",
  "TrailAlreadyExistsException",
  "TrailNotFoundException",
  "TrailNotProvidedException",
  "UnsupportedOperationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type AccountHasOngoingImportError = TaggedException<AccountHasOngoingImportException>;
export type AccountNotFoundError = TaggedException<AccountNotFoundException>;
export type AccountNotRegisteredError = TaggedException<AccountNotRegisteredException>;
export type AccountRegisteredError = TaggedException<AccountRegisteredException>;
export type CannotDelegateManagementAccountError = TaggedException<CannotDelegateManagementAccountException>;
export type ChannelARNInvalidError = TaggedException<ChannelARNInvalidException>;
export type ChannelAlreadyExistsError = TaggedException<ChannelAlreadyExistsException>;
export type ChannelExistsForEDSError = TaggedException<ChannelExistsForEDSException>;
export type ChannelMaxLimitExceededError = TaggedException<ChannelMaxLimitExceededException>;
export type ChannelNotFoundError = TaggedException<ChannelNotFoundException>;
export type CloudTrailARNInvalidError = TaggedException<CloudTrailARNInvalidException>;
export type CloudTrailAccessNotEnabledError = TaggedException<CloudTrailAccessNotEnabledException>;
export type CloudTrailInvalidClientTokenIdError = TaggedException<CloudTrailInvalidClientTokenIdException>;
export type CloudWatchLogsDeliveryUnavailableError = TaggedException<CloudWatchLogsDeliveryUnavailableException>;
export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type ConflictError = TaggedException<ConflictException>;
export type DelegatedAdminAccountLimitExceededError = TaggedException<DelegatedAdminAccountLimitExceededException>;
export type EventDataStoreARNInvalidError = TaggedException<EventDataStoreARNInvalidException>;
export type EventDataStoreAlreadyExistsError = TaggedException<EventDataStoreAlreadyExistsException>;
export type EventDataStoreFederationEnabledError = TaggedException<EventDataStoreFederationEnabledException>;
export type EventDataStoreHasOngoingImportError = TaggedException<EventDataStoreHasOngoingImportException>;
export type EventDataStoreMaxLimitExceededError = TaggedException<EventDataStoreMaxLimitExceededException>;
export type EventDataStoreNotFoundError = TaggedException<EventDataStoreNotFoundException>;
export type EventDataStoreTerminationProtectedError = TaggedException<EventDataStoreTerminationProtectedException>;
export type GenerateResponseError = TaggedException<GenerateResponseException>;
export type ImportNotFoundError = TaggedException<ImportNotFoundException>;
export type InactiveEventDataStoreError = TaggedException<InactiveEventDataStoreException>;
export type InactiveQueryError = TaggedException<InactiveQueryException>;
export type InsightNotEnabledError = TaggedException<InsightNotEnabledException>;
export type InsufficientDependencyServiceAccessPermissionError = TaggedException<
  InsufficientDependencyServiceAccessPermissionException
>;
export type InsufficientEncryptionPolicyError = TaggedException<InsufficientEncryptionPolicyException>;
export type InsufficientS3BucketPolicyError = TaggedException<InsufficientS3BucketPolicyException>;
export type InsufficientSnsTopicPolicyError = TaggedException<InsufficientSnsTopicPolicyException>;
export type InvalidCloudWatchLogsLogGroupArnError = TaggedException<InvalidCloudWatchLogsLogGroupArnException>;
export type InvalidCloudWatchLogsRoleArnError = TaggedException<InvalidCloudWatchLogsRoleArnException>;
export type InvalidDateRangeError = TaggedException<InvalidDateRangeException>;
export type InvalidEventCategoryError = TaggedException<InvalidEventCategoryException>;
export type InvalidEventDataStoreCategoryError = TaggedException<InvalidEventDataStoreCategoryException>;
export type InvalidEventDataStoreStatusError = TaggedException<InvalidEventDataStoreStatusException>;
export type InvalidEventSelectorsError = TaggedException<InvalidEventSelectorsException>;
export type InvalidHomeRegionError = TaggedException<InvalidHomeRegionException>;
export type InvalidImportSourceError = TaggedException<InvalidImportSourceException>;
export type InvalidInsightSelectorsError = TaggedException<InvalidInsightSelectorsException>;
export type InvalidKmsKeyIdError = TaggedException<InvalidKmsKeyIdException>;
export type InvalidLookupAttributesError = TaggedException<InvalidLookupAttributesException>;
export type InvalidMaxResultsError = TaggedException<InvalidMaxResultsException>;
export type InvalidNextTokenError = TaggedException<InvalidNextTokenException>;
export type InvalidParameterCombinationError = TaggedException<InvalidParameterCombinationException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidQueryStatementError = TaggedException<InvalidQueryStatementException>;
export type InvalidQueryStatusError = TaggedException<InvalidQueryStatusException>;
export type InvalidS3BucketNameError = TaggedException<InvalidS3BucketNameException>;
export type InvalidS3PrefixError = TaggedException<InvalidS3PrefixException>;
export type InvalidSnsTopicNameError = TaggedException<InvalidSnsTopicNameException>;
export type InvalidSourceError = TaggedException<InvalidSourceException>;
export type InvalidTagParameterError = TaggedException<InvalidTagParameterException>;
export type InvalidTimeRangeError = TaggedException<InvalidTimeRangeException>;
export type InvalidTokenError = TaggedException<InvalidTokenException>;
export type InvalidTrailNameError = TaggedException<InvalidTrailNameException>;
export type KmsError = TaggedException<KmsException>;
export type KmsKeyDisabledError = TaggedException<KmsKeyDisabledException>;
export type KmsKeyNotFoundError = TaggedException<KmsKeyNotFoundException>;
export type MaxConcurrentQueriesError = TaggedException<MaxConcurrentQueriesException>;
export type MaximumNumberOfTrailsExceededError = TaggedException<MaximumNumberOfTrailsExceededException>;
export type NoManagementAccountSLRExistsError = TaggedException<NoManagementAccountSLRExistsException>;
export type NotOrganizationManagementAccountError = TaggedException<NotOrganizationManagementAccountException>;
export type NotOrganizationMasterAccountError = TaggedException<NotOrganizationMasterAccountException>;
export type OperationNotPermittedError = TaggedException<OperationNotPermittedException>;
export type OrganizationNotInAllFeaturesModeError = TaggedException<OrganizationNotInAllFeaturesModeException>;
export type OrganizationsNotInUseError = TaggedException<OrganizationsNotInUseException>;
export type QueryIdNotFoundError = TaggedException<QueryIdNotFoundException>;
export type ResourceARNNotValidError = TaggedException<ResourceARNNotValidException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ResourcePolicyNotFoundError = TaggedException<ResourcePolicyNotFoundException>;
export type ResourcePolicyNotValidError = TaggedException<ResourcePolicyNotValidException>;
export type ResourceTypeNotSupportedError = TaggedException<ResourceTypeNotSupportedException>;
export type S3BucketDoesNotExistError = TaggedException<S3BucketDoesNotExistException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type TagsLimitExceededError = TaggedException<TagsLimitExceededException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type TrailAlreadyExistsError = TaggedException<TrailAlreadyExistsException>;
export type TrailNotFoundError = TaggedException<TrailNotFoundException>;
export type TrailNotProvidedError = TaggedException<TrailNotProvidedException>;
export type UnsupportedOperationError = TaggedException<UnsupportedOperationException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
