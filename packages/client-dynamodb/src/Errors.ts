import {
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
  ProvisionedThroughputExceededException,
  ReplicaAlreadyExistsException,
  ReplicaNotFoundException,
  RequestLimitExceeded as RequestLimitExceededException,
  ResourceInUseException,
  ResourceNotFoundException,
  TableAlreadyExistsException,
  TableInUseException,
  TableNotFoundException,
  TransactionCanceledException,
  TransactionConflictException,
  TransactionInProgressException,
} from "@aws-sdk/client-dynamodb";
import * as Data from "@effect/data/Data";

export type TaggedException<T extends { name: string }> = Data.Case &
  T & { readonly _tag: T["name"] };

export type BackupInUseError = TaggedException<BackupInUseException>;
export type BackupNotFoundError = TaggedException<BackupNotFoundException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type RequestLimitExceededError =
  TaggedException<RequestLimitExceededException>;
export type InvalidEndpointError = TaggedException<InvalidEndpointException>;
export type ProvisionedThroughputExceededError =
  TaggedException<ProvisionedThroughputExceededException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ItemCollectionSizeLimitExceededError =
  TaggedException<ItemCollectionSizeLimitExceededException>;
export type ContinuousBackupsUnavailableError =
  TaggedException<ContinuousBackupsUnavailableException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type TableInUseError = TaggedException<TableInUseException>;
export type TableNotFoundError = TaggedException<TableNotFoundException>;
export type GlobalTableAlreadyExistsError =
  TaggedException<GlobalTableAlreadyExistsException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type TransactionConflictError =
  TaggedException<TransactionConflictException>;
export type ExportNotFoundError = TaggedException<ExportNotFoundException>;
export type GlobalTableNotFoundError =
  TaggedException<GlobalTableNotFoundException>;
export type ImportNotFoundError = TaggedException<ImportNotFoundException>;
export type DuplicateItemError = TaggedException<DuplicateItemException>;
export type IdempotentParameterMismatchError =
  TaggedException<IdempotentParameterMismatchException>;
export type TransactionInProgressError =
  TaggedException<TransactionInProgressException>;
export type ExportConflictError = TaggedException<ExportConflictException>;
export type InvalidExportTimeError =
  TaggedException<InvalidExportTimeException>;
export type PointInTimeRecoveryUnavailableError =
  TaggedException<PointInTimeRecoveryUnavailableException>;
export type ImportConflictError = TaggedException<ImportConflictException>;
export type TableAlreadyExistsError =
  TaggedException<TableAlreadyExistsException>;
export type InvalidRestoreTimeError =
  TaggedException<InvalidRestoreTimeException>;
export type ReplicaAlreadyExistsError =
  TaggedException<ReplicaAlreadyExistsException>;
export type ReplicaNotFoundError = TaggedException<ReplicaNotFoundException>;
export type IndexNotFoundError = TaggedException<IndexNotFoundException>;
export type ConditionalCheckFailedError =
  TaggedException<ConditionalCheckFailedException>;
export type TransactionCanceledError =
  TaggedException<TransactionCanceledException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
