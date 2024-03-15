/**
 * @since 1.0.0
 */
import {
  DynamoDBServiceException,
  BatchExecuteStatementCommand,
  type BatchExecuteStatementCommandInput,
  type BatchExecuteStatementCommandOutput,
  BatchGetItemCommand,
  type BatchGetItemCommandInput,
  type BatchGetItemCommandOutput,
  BatchWriteItemCommand,
  type BatchWriteItemCommandInput,
  type BatchWriteItemCommandOutput,
  CreateBackupCommand,
  type CreateBackupCommandInput,
  type CreateBackupCommandOutput,
  CreateGlobalTableCommand,
  type CreateGlobalTableCommandInput,
  type CreateGlobalTableCommandOutput,
  CreateTableCommand,
  type CreateTableCommandInput,
  type CreateTableCommandOutput,
  DeleteBackupCommand,
  type DeleteBackupCommandInput,
  type DeleteBackupCommandOutput,
  DeleteItemCommand,
  type DeleteItemCommandInput,
  type DeleteItemCommandOutput,
  DeleteTableCommand,
  type DeleteTableCommandInput,
  type DeleteTableCommandOutput,
  DescribeBackupCommand,
  type DescribeBackupCommandInput,
  type DescribeBackupCommandOutput,
  DescribeContinuousBackupsCommand,
  type DescribeContinuousBackupsCommandInput,
  type DescribeContinuousBackupsCommandOutput,
  DescribeContributorInsightsCommand,
  type DescribeContributorInsightsCommandInput,
  type DescribeContributorInsightsCommandOutput,
  DescribeEndpointsCommand,
  type DescribeEndpointsCommandInput,
  type DescribeEndpointsCommandOutput,
  DescribeExportCommand,
  type DescribeExportCommandInput,
  type DescribeExportCommandOutput,
  DescribeGlobalTableCommand,
  type DescribeGlobalTableCommandInput,
  type DescribeGlobalTableCommandOutput,
  DescribeGlobalTableSettingsCommand,
  type DescribeGlobalTableSettingsCommandInput,
  type DescribeGlobalTableSettingsCommandOutput,
  DescribeImportCommand,
  type DescribeImportCommandInput,
  type DescribeImportCommandOutput,
  DescribeKinesisStreamingDestinationCommand,
  type DescribeKinesisStreamingDestinationCommandInput,
  type DescribeKinesisStreamingDestinationCommandOutput,
  DescribeLimitsCommand,
  type DescribeLimitsCommandInput,
  type DescribeLimitsCommandOutput,
  DescribeTableCommand,
  type DescribeTableCommandInput,
  type DescribeTableCommandOutput,
  DescribeTableReplicaAutoScalingCommand,
  type DescribeTableReplicaAutoScalingCommandInput,
  type DescribeTableReplicaAutoScalingCommandOutput,
  DescribeTimeToLiveCommand,
  type DescribeTimeToLiveCommandInput,
  type DescribeTimeToLiveCommandOutput,
  DisableKinesisStreamingDestinationCommand,
  type DisableKinesisStreamingDestinationCommandInput,
  type DisableKinesisStreamingDestinationCommandOutput,
  EnableKinesisStreamingDestinationCommand,
  type EnableKinesisStreamingDestinationCommandInput,
  type EnableKinesisStreamingDestinationCommandOutput,
  ExecuteStatementCommand,
  type ExecuteStatementCommandInput,
  type ExecuteStatementCommandOutput,
  ExecuteTransactionCommand,
  type ExecuteTransactionCommandInput,
  type ExecuteTransactionCommandOutput,
  ExportTableToPointInTimeCommand,
  type ExportTableToPointInTimeCommandInput,
  type ExportTableToPointInTimeCommandOutput,
  GetItemCommand,
  type GetItemCommandInput,
  type GetItemCommandOutput,
  ImportTableCommand,
  type ImportTableCommandInput,
  type ImportTableCommandOutput,
  ListBackupsCommand,
  type ListBackupsCommandInput,
  type ListBackupsCommandOutput,
  ListContributorInsightsCommand,
  type ListContributorInsightsCommandInput,
  type ListContributorInsightsCommandOutput,
  ListExportsCommand,
  type ListExportsCommandInput,
  type ListExportsCommandOutput,
  ListGlobalTablesCommand,
  type ListGlobalTablesCommandInput,
  type ListGlobalTablesCommandOutput,
  ListImportsCommand,
  type ListImportsCommandInput,
  type ListImportsCommandOutput,
  ListTablesCommand,
  type ListTablesCommandInput,
  type ListTablesCommandOutput,
  ListTagsOfResourceCommand,
  type ListTagsOfResourceCommandInput,
  type ListTagsOfResourceCommandOutput,
  PutItemCommand,
  type PutItemCommandInput,
  type PutItemCommandOutput,
  QueryCommand,
  type QueryCommandInput,
  type QueryCommandOutput,
  RestoreTableFromBackupCommand,
  type RestoreTableFromBackupCommandInput,
  type RestoreTableFromBackupCommandOutput,
  RestoreTableToPointInTimeCommand,
  type RestoreTableToPointInTimeCommandInput,
  type RestoreTableToPointInTimeCommandOutput,
  ScanCommand,
  type ScanCommandInput,
  type ScanCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TransactGetItemsCommand,
  type TransactGetItemsCommandInput,
  type TransactGetItemsCommandOutput,
  TransactWriteItemsCommand,
  type TransactWriteItemsCommandInput,
  type TransactWriteItemsCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateContinuousBackupsCommand,
  type UpdateContinuousBackupsCommandInput,
  type UpdateContinuousBackupsCommandOutput,
  UpdateContributorInsightsCommand,
  type UpdateContributorInsightsCommandInput,
  type UpdateContributorInsightsCommandOutput,
  UpdateGlobalTableCommand,
  type UpdateGlobalTableCommandInput,
  type UpdateGlobalTableCommandOutput,
  UpdateGlobalTableSettingsCommand,
  type UpdateGlobalTableSettingsCommandInput,
  type UpdateGlobalTableSettingsCommandOutput,
  UpdateItemCommand,
  type UpdateItemCommandInput,
  type UpdateItemCommandOutput,
  UpdateKinesisStreamingDestinationCommand,
  type UpdateKinesisStreamingDestinationCommandInput,
  type UpdateKinesisStreamingDestinationCommandOutput,
  UpdateTableCommand,
  type UpdateTableCommandInput,
  type UpdateTableCommandOutput,
  UpdateTableReplicaAutoScalingCommand,
  type UpdateTableReplicaAutoScalingCommandInput,
  type UpdateTableReplicaAutoScalingCommandOutput,
  UpdateTimeToLiveCommand,
  type UpdateTimeToLiveCommandInput,
  type UpdateTimeToLiveCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Effect, Layer, ReadonlyRecord, Data } from "effect";
import {
  DefaultDynamoDBClientInstanceLayer,
  DynamoDBClientInstance,
  DynamoDBClientInstanceLayer,
} from "./DynamoDBClientInstance";
import { DefaultDynamoDBClientConfigLayer } from "./DynamoDBClientInstanceConfig";
import {
  BackupInUseError,
  BackupNotFoundError,
  ConditionalCheckFailedError,
  ContinuousBackupsUnavailableError,
  DuplicateItemError,
  ExportConflictError,
  ExportNotFoundError,
  GlobalTableAlreadyExistsError,
  GlobalTableNotFoundError,
  IdempotentParameterMismatchError,
  ImportConflictError,
  ImportNotFoundError,
  IndexNotFoundError,
  InternalServerError,
  InvalidEndpointError,
  InvalidExportTimeError,
  InvalidRestoreTimeError,
  ItemCollectionSizeLimitExceededError,
  LimitExceededError,
  PointInTimeRecoveryUnavailableError,
  ProvisionedThroughputExceededError,
  ReplicaAlreadyExistsError,
  ReplicaNotFoundError,
  RequestLimitExceededError,
  ResourceInUseError,
  ResourceNotFoundError,
  TableAlreadyExistsError,
  TableInUseError,
  TableNotFoundError,
  TransactionCanceledError,
  TransactionConflictError,
  TransactionInProgressError,
  SdkError,
  TaggedException,
} from "./Errors";

const commands = {
  BatchExecuteStatementCommand,
  BatchGetItemCommand,
  BatchWriteItemCommand,
  CreateBackupCommand,
  CreateGlobalTableCommand,
  CreateTableCommand,
  DeleteBackupCommand,
  DeleteItemCommand,
  DeleteTableCommand,
  DescribeBackupCommand,
  DescribeContinuousBackupsCommand,
  DescribeContributorInsightsCommand,
  DescribeEndpointsCommand,
  DescribeExportCommand,
  DescribeGlobalTableCommand,
  DescribeGlobalTableSettingsCommand,
  DescribeImportCommand,
  DescribeKinesisStreamingDestinationCommand,
  DescribeLimitsCommand,
  DescribeTableCommand,
  DescribeTableReplicaAutoScalingCommand,
  DescribeTimeToLiveCommand,
  DisableKinesisStreamingDestinationCommand,
  EnableKinesisStreamingDestinationCommand,
  ExecuteStatementCommand,
  ExecuteTransactionCommand,
  ExportTableToPointInTimeCommand,
  GetItemCommand,
  ImportTableCommand,
  ListBackupsCommand,
  ListContributorInsightsCommand,
  ListExportsCommand,
  ListGlobalTablesCommand,
  ListImportsCommand,
  ListTablesCommand,
  ListTagsOfResourceCommand,
  PutItemCommand,
  QueryCommand,
  RestoreTableFromBackupCommand,
  RestoreTableToPointInTimeCommand,
  ScanCommand,
  TagResourceCommand,
  TransactGetItemsCommand,
  TransactWriteItemsCommand,
  UntagResourceCommand,
  UpdateContinuousBackupsCommand,
  UpdateContributorInsightsCommand,
  UpdateGlobalTableCommand,
  UpdateGlobalTableSettingsCommand,
  UpdateItemCommand,
  UpdateKinesisStreamingDestinationCommand,
  UpdateTableCommand,
  UpdateTableReplicaAutoScalingCommand,
  UpdateTimeToLiveCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface DynamoDBService {
  readonly _: unique symbol;

  /**
   * @see {@link BatchExecuteStatementCommand}
   */
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchExecuteStatementCommandOutput,
    SdkError | InternalServerError | RequestLimitExceededError
  >;

  /**
   * @see {@link BatchGetItemCommand}
   */
  batchGetItem(
    args: BatchGetItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetItemCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link BatchWriteItemCommand}
   */
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchWriteItemCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateBackupCommandOutput,
    | SdkError
    | BackupInUseError
    | ContinuousBackupsUnavailableError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | TableInUseError
    | TableNotFoundError
  >;

  /**
   * @see {@link CreateGlobalTableCommand}
   */
  createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlobalTableCommandOutput,
    | SdkError
    | GlobalTableAlreadyExistsError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | TableNotFoundError
  >;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateTableCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
  >;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBackupCommandOutput,
    | SdkError
    | BackupInUseError
    | BackupNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
  >;

  /**
   * @see {@link DeleteItemCommand}
   */
  deleteItem(
    args: DeleteItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteItemCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTableCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeBackupCommand}
   */
  describeBackup(
    args: DescribeBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBackupCommandOutput,
    SdkError | BackupNotFoundError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeContinuousBackupsCommand}
   */
  describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeContinuousBackupsCommandOutput,
    SdkError | InternalServerError | InvalidEndpointError | TableNotFoundError
  >;

  /**
   * @see {@link DescribeContributorInsightsCommand}
   */
  describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeContributorInsightsCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeEndpointsCommandOutput, SdkError>;

  /**
   * @see {@link DescribeExportCommand}
   */
  describeExport(
    args: DescribeExportCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportCommandOutput,
    SdkError | ExportNotFoundError | InternalServerError | LimitExceededError
  >;

  /**
   * @see {@link DescribeGlobalTableCommand}
   */
  describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalTableCommandOutput,
    | SdkError
    | GlobalTableNotFoundError
    | InternalServerError
    | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeGlobalTableSettingsCommand}
   */
  describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalTableSettingsCommandOutput,
    | SdkError
    | GlobalTableNotFoundError
    | InternalServerError
    | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeImportCommand}
   */
  describeImport(
    args: DescribeImportCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeImportCommandOutput, SdkError | ImportNotFoundError>;

  /**
   * @see {@link DescribeKinesisStreamingDestinationCommand}
   */
  describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeKinesisStreamingDestinationCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLimitsCommandOutput,
    SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(
    args: DescribeTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTableCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeTableReplicaAutoScalingCommand}
   */
  describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTableReplicaAutoScalingCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeTimeToLiveCommand}
   */
  describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTimeToLiveCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DisableKinesisStreamingDestinationCommand}
   */
  disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisableKinesisStreamingDestinationCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link EnableKinesisStreamingDestinationCommand}
   */
  enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnableKinesisStreamingDestinationCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ExecuteStatementCommand}
   */
  executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteStatementCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | DuplicateItemError
    | InternalServerError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;

  /**
   * @see {@link ExecuteTransactionCommand}
   */
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteTransactionCommandOutput,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
    | TransactionInProgressError
  >;

  /**
   * @see {@link ExportTableToPointInTimeCommand}
   */
  exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExportTableToPointInTimeCommandOutput,
    | SdkError
    | ExportConflictError
    | InternalServerError
    | InvalidExportTimeError
    | LimitExceededError
    | PointInTimeRecoveryUnavailableError
    | TableNotFoundError
  >;

  /**
   * @see {@link GetItemCommand}
   */
  getItem(
    args: GetItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetItemCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ImportTableCommand}
   */
  importTable(
    args: ImportTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ImportTableCommandOutput,
    SdkError | ImportConflictError | LimitExceededError | ResourceInUseError
  >;

  /**
   * @see {@link ListBackupsCommand}
   */
  listBackups(
    args: ListBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListBackupsCommandOutput,
    SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link ListContributorInsightsCommand}
   */
  listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListContributorInsightsCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(
    args: ListExportsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListExportsCommandOutput,
    SdkError | InternalServerError | LimitExceededError
  >;

  /**
   * @see {@link ListGlobalTablesCommand}
   */
  listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListGlobalTablesCommandOutput,
    SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(
    args: ListImportsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListImportsCommandOutput, SdkError | LimitExceededError>;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(
    args: ListTablesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTablesCommandOutput,
    SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link ListTagsOfResourceCommand}
   */
  listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsOfResourceCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutItemCommand}
   */
  putItem(
    args: PutItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutItemCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    QueryCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RestoreTableFromBackupCommand}
   */
  restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreTableFromBackupCommandOutput,
    | SdkError
    | BackupInUseError
    | BackupNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | TableAlreadyExistsError
    | TableInUseError
  >;

  /**
   * @see {@link RestoreTableToPointInTimeCommand}
   */
  restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreTableToPointInTimeCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | InvalidRestoreTimeError
    | LimitExceededError
    | PointInTimeRecoveryUnavailableError
    | TableAlreadyExistsError
    | TableInUseError
    | TableNotFoundError
  >;

  /**
   * @see {@link ScanCommand}
   */
  scan(
    args: ScanCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ScanCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TransactGetItemsCommand}
   */
  transactGetItems(
    args: TransactGetItemsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TransactGetItemsCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
  >;

  /**
   * @see {@link TransactWriteItemsCommand}
   */
  transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TransactWriteItemsCommandOutput,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
    | TransactionInProgressError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateContinuousBackupsCommand}
   */
  updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContinuousBackupsCommandOutput,
    | SdkError
    | ContinuousBackupsUnavailableError
    | InternalServerError
    | InvalidEndpointError
    | TableNotFoundError
  >;

  /**
   * @see {@link UpdateContributorInsightsCommand}
   */
  updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContributorInsightsCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateGlobalTableCommand}
   */
  updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGlobalTableCommandOutput,
    | SdkError
    | GlobalTableNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | ReplicaAlreadyExistsError
    | ReplicaNotFoundError
    | TableNotFoundError
  >;

  /**
   * @see {@link UpdateGlobalTableSettingsCommand}
   */
  updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGlobalTableSettingsCommandOutput,
    | SdkError
    | GlobalTableNotFoundError
    | IndexNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ReplicaNotFoundError
    | ResourceInUseError
  >;

  /**
   * @see {@link UpdateItemCommand}
   */
  updateItem(
    args: UpdateItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateItemCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;

  /**
   * @see {@link UpdateKinesisStreamingDestinationCommand}
   */
  updateKinesisStreamingDestination(
    args: UpdateKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateKinesisStreamingDestinationCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(
    args: UpdateTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTableCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateTableReplicaAutoScalingCommand}
   */
  updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTableReplicaAutoScalingCommandOutput,
    | SdkError
    | InternalServerError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateTimeToLiveCommand}
   */
  updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTimeToLiveCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const DynamoDBService = Context.GenericTag<DynamoDBService>(
  "@effect-aws/client-dynamodb/DynamoDBService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDynamoDBService = Effect.gen(function* (_) {
  const client = yield* _(DynamoDBClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof DynamoDBServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<DynamoDBServiceException>
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
  }, {}) as DynamoDBService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseDynamoDBServiceLayer = Layer.effect(
  DynamoDBService,
  makeDynamoDBService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DynamoDBServiceLayer = BaseDynamoDBServiceLayer.pipe(
  Layer.provide(DynamoDBClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBServiceLayer = DynamoDBServiceLayer.pipe(
  Layer.provide(DefaultDynamoDBClientConfigLayer),
);

// -------------------- Danger Zone --------------------

/**
 * @since 0.1.0
 * @deprecated
 */
export const BaseDynamoDBServiceEffect = makeDynamoDBService;

/**
 * @since 0.1.0
 * @deprecated
 */
export const DynamoDBServiceEffect = BaseDynamoDBServiceEffect.pipe(
  Effect.provide(DynamoDBClientInstanceLayer),
);

/**
 * @since 0.1.0
 * @deprecated
 */
export const DefaultDynamoDBServiceEffect = BaseDynamoDBServiceEffect.pipe(
  Effect.provide(DefaultDynamoDBClientInstanceLayer),
);
