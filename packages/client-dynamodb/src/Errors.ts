import type {
  BackupInUseException,
  BackupNotFoundException,
  ConditionalCheckFailedException,
  ContinuousBackupsUnavailableException,
  DuplicateItemException,
  ExportConflictException,
  ExportNotFoundException,
  GlobalTableAlreadyExistsException,
  GlobalTableNotFoundException,
  IdempotentParameterMismatchException,
  ImportConflictException,
  ImportNotFoundException,
  IndexNotFoundException,
  InternalServerError as InternalServerException,
  InvalidEndpointException,
  InvalidExportTimeException,
  InvalidRestoreTimeException,
  ItemCollectionSizeLimitExceededException,
  LimitExceededException,
  PointInTimeRecoveryUnavailableException,
  PolicyNotFoundException,
  ProvisionedThroughputExceededException,
  ReplicaAlreadyExistsException,
  ReplicaNotFoundException,
  RequestLimitExceeded,
  ResourceInUseException,
  ResourceNotFoundException,
  TableAlreadyExistsException,
  TableInUseException,
  TableNotFoundException,
  TransactionCanceledException,
  TransactionConflictException,
  TransactionInProgressException,
} from "@aws-sdk/client-dynamodb";
import * as Data from "effect/Data";

export const AllServiceErrors = [
  "BackupInUseException",
  "BackupNotFoundException",
  "ConditionalCheckFailedException",
  "ContinuousBackupsUnavailableException",
  "DuplicateItemException",
  "ExportConflictException",
  "ExportNotFoundException",
  "GlobalTableAlreadyExistsException",
  "GlobalTableNotFoundException",
  "IdempotentParameterMismatchException",
  "ImportConflictException",
  "ImportNotFoundException",
  "IndexNotFoundException",
  "InternalServerError",
  "InvalidEndpointException",
  "InvalidExportTimeException",
  "InvalidRestoreTimeException",
  "ItemCollectionSizeLimitExceededException",
  "LimitExceededException",
  "PointInTimeRecoveryUnavailableException",
  "PolicyNotFoundException",
  "ProvisionedThroughputExceededException",
  "ReplicaAlreadyExistsException",
  "ReplicaNotFoundException",
  "RequestLimitExceeded",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "TableAlreadyExistsException",
  "TableInUseException",
  "TableNotFoundException",
  "TransactionCanceledException",
  "TransactionConflictException",
  "TransactionInProgressException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type BackupInUseError = TaggedException<BackupInUseException>;
export type BackupNotFoundError = TaggedException<BackupNotFoundException>;
export type ConditionalCheckFailedError =
  TaggedException<ConditionalCheckFailedException>;
export type ContinuousBackupsUnavailableError =
  TaggedException<ContinuousBackupsUnavailableException>;
export type DuplicateItemError = TaggedException<DuplicateItemException>;
export type ExportConflictError = TaggedException<ExportConflictException>;
export type ExportNotFoundError = TaggedException<ExportNotFoundException>;
export type GlobalTableAlreadyExistsError =
  TaggedException<GlobalTableAlreadyExistsException>;
export type GlobalTableNotFoundError =
  TaggedException<GlobalTableNotFoundException>;
export type IdempotentParameterMismatchError =
  TaggedException<IdempotentParameterMismatchException>;
export type ImportConflictError = TaggedException<ImportConflictException>;
export type ImportNotFoundError = TaggedException<ImportNotFoundException>;
export type IndexNotFoundError = TaggedException<IndexNotFoundException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type InvalidEndpointError = TaggedException<InvalidEndpointException>;
export type InvalidExportTimeError =
  TaggedException<InvalidExportTimeException>;
export type InvalidRestoreTimeError =
  TaggedException<InvalidRestoreTimeException>;
export type ItemCollectionSizeLimitExceededError =
  TaggedException<ItemCollectionSizeLimitExceededException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type PointInTimeRecoveryUnavailableError =
  TaggedException<PointInTimeRecoveryUnavailableException>;
export type PolicyNotFoundError = TaggedException<PolicyNotFoundException>;
export type ProvisionedThroughputExceededError =
  TaggedException<ProvisionedThroughputExceededException>;
export type ReplicaAlreadyExistsError =
  TaggedException<ReplicaAlreadyExistsException>;
export type ReplicaNotFoundError = TaggedException<ReplicaNotFoundException>;
export type RequestLimitExceededError = TaggedException<RequestLimitExceeded>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type TableAlreadyExistsError =
  TaggedException<TableAlreadyExistsException>;
export type TableInUseError = TaggedException<TableInUseException>;
export type TableNotFoundError = TaggedException<TableNotFoundException>;
export type TransactionCanceledError =
  TaggedException<TransactionCanceledException>;
export type TransactionConflictError =
  TaggedException<TransactionConflictException>;
export type TransactionInProgressError =
  TaggedException<TransactionInProgressException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
