import type {
  BatchEntryIdsNotDistinct,
  BatchRequestTooLong,
  EmptyBatchRequest,
  InvalidAddress,
  InvalidAttributeName,
  InvalidAttributeValue,
  InvalidBatchEntryId,
  InvalidIdFormat,
  InvalidMessageContents,
  InvalidSecurity,
  KmsAccessDenied,
  KmsDisabled,
  KmsInvalidKeyUsage,
  KmsInvalidState,
  KmsNotFound,
  KmsOptInRequired,
  KmsThrottled,
  MessageNotInflight,
  OverLimit,
  PurgeQueueInProgress,
  QueueDeletedRecently,
  QueueDoesNotExist,
  QueueNameExists,
  ReceiptHandleIsInvalid,
  RequestThrottled,
  ResourceNotFoundException,
  TooManyEntriesInBatchRequest,
  UnsupportedOperation,
} from "@aws-sdk/client-sqs";
import { Data } from "effect";

export const AllServiceErrors = [
  "BatchEntryIdsNotDistinct",
  "BatchRequestTooLong",
  "EmptyBatchRequest",
  "InvalidAddress",
  "InvalidAttributeName",
  "InvalidAttributeValue",
  "InvalidBatchEntryId",
  "InvalidIdFormat",
  "InvalidMessageContents",
  "InvalidSecurity",
  "KmsAccessDenied",
  "KmsDisabled",
  "KmsInvalidKeyUsage",
  "KmsInvalidState",
  "KmsNotFound",
  "KmsOptInRequired",
  "KmsThrottled",
  "MessageNotInflight",
  "OverLimit",
  "PurgeQueueInProgress",
  "QueueDeletedRecently",
  "QueueDoesNotExist",
  "QueueNameExists",
  "ReceiptHandleIsInvalid",
  "RequestThrottled",
  "ResourceNotFoundException",
  "TooManyEntriesInBatchRequest",
  "UnsupportedOperation",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type BatchEntryIdsNotDistinctError =
  TaggedException<BatchEntryIdsNotDistinct>;
export type BatchRequestTooLongError = TaggedException<BatchRequestTooLong>;
export type EmptyBatchRequestError = TaggedException<EmptyBatchRequest>;
export type InvalidAddressError = TaggedException<InvalidAddress>;
export type InvalidAttributeNameError = TaggedException<InvalidAttributeName>;
export type InvalidAttributeValueError = TaggedException<InvalidAttributeValue>;
export type InvalidBatchEntryIdError = TaggedException<InvalidBatchEntryId>;
export type InvalidIdFormatError = TaggedException<InvalidIdFormat>;
export type InvalidMessageContentsError =
  TaggedException<InvalidMessageContents>;
export type InvalidSecurityError = TaggedException<InvalidSecurity>;
export type KmsAccessDeniedError = TaggedException<KmsAccessDenied>;
export type KmsDisabledError = TaggedException<KmsDisabled>;
export type KmsInvalidKeyUsageError = TaggedException<KmsInvalidKeyUsage>;
export type KmsInvalidStateError = TaggedException<KmsInvalidState>;
export type KmsNotFoundError = TaggedException<KmsNotFound>;
export type KmsOptInRequiredError = TaggedException<KmsOptInRequired>;
export type KmsThrottledError = TaggedException<KmsThrottled>;
export type MessageNotInflightError = TaggedException<MessageNotInflight>;
export type OverLimitError = TaggedException<OverLimit>;
export type PurgeQueueInProgressError = TaggedException<PurgeQueueInProgress>;
export type QueueDeletedRecentlyError = TaggedException<QueueDeletedRecently>;
export type QueueDoesNotExistError = TaggedException<QueueDoesNotExist>;
export type QueueNameExistsError = TaggedException<QueueNameExists>;
export type ReceiptHandleIsInvalidError =
  TaggedException<ReceiptHandleIsInvalid>;
export type RequestThrottledError = TaggedException<RequestThrottled>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type TooManyEntriesInBatchRequestError =
  TaggedException<TooManyEntriesInBatchRequest>;
export type UnsupportedOperationError = TaggedException<UnsupportedOperation>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
