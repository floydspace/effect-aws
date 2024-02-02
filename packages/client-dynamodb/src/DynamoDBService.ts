/**
 * @since 1.0.0
 */
import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput,
  CreateBackupCommand,
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
  CreateGlobalTableCommand,
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput,
  CreateTableCommand,
  CreateTableCommandInput,
  CreateTableCommandOutput,
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
  DeleteItemCommand,
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  DeleteTableCommand,
  DeleteTableCommandInput,
  DeleteTableCommandOutput,
  DescribeBackupCommand,
  DescribeBackupCommandInput,
  DescribeBackupCommandOutput,
  DescribeContinuousBackupsCommand,
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
  DescribeContributorInsightsCommand,
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
  DescribeExportCommand,
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
  DescribeGlobalTableCommand,
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
  DescribeGlobalTableSettingsCommand,
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
  DescribeImportCommand,
  DescribeImportCommandInput,
  DescribeImportCommandOutput,
  DescribeKinesisStreamingDestinationCommand,
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
  DescribeLimitsCommand,
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
  DescribeTableReplicaAutoScalingCommand,
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
  DescribeTimeToLiveCommand,
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput,
  DisableKinesisStreamingDestinationCommand,
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
  DynamoDBServiceException,
  EnableKinesisStreamingDestinationCommand,
  EnableKinesisStreamingDestinationCommandInput,
  EnableKinesisStreamingDestinationCommandOutput,
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommand,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  ExportTableToPointInTimeCommand,
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  ImportTableCommand,
  ImportTableCommandInput,
  ImportTableCommandOutput,
  ListBackupsCommand,
  ListBackupsCommandInput,
  ListBackupsCommandOutput,
  ListContributorInsightsCommand,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
  ListExportsCommand,
  ListExportsCommandInput,
  ListExportsCommandOutput,
  ListGlobalTablesCommand,
  ListGlobalTablesCommandInput,
  ListGlobalTablesCommandOutput,
  ListImportsCommand,
  ListImportsCommandInput,
  ListImportsCommandOutput,
  ListTablesCommand,
  ListTablesCommandInput,
  ListTablesCommandOutput,
  ListTagsOfResourceCommand,
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
  RestoreTableFromBackupCommand,
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
  RestoreTableToPointInTimeCommand,
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
  ScanCommand,
  ScanCommandInput,
  ScanCommandOutput,
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput,
  TransactGetItemsCommand,
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput,
  TransactWriteItemsCommand,
  TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput,
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  UpdateContinuousBackupsCommand,
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput,
  UpdateContributorInsightsCommand,
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
  UpdateGlobalTableCommand,
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput,
  UpdateGlobalTableSettingsCommand,
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
  UpdateItemCommand,
  UpdateItemCommandInput,
  UpdateItemCommandOutput,
  UpdateTableCommand,
  UpdateTableCommandInput,
  UpdateTableCommandOutput,
  UpdateTableReplicaAutoScalingCommand,
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
  UpdateTimeToLiveCommand,
  UpdateTimeToLiveCommandInput,
  UpdateTimeToLiveCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
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
  SdkError,
  TableAlreadyExistsError,
  TableInUseError,
  TableNotFoundError,
  TaggedException,
  TransactionCanceledError,
  TransactionConflictError,
  TransactionInProgressError,
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
    never,
    SdkError | InternalServerError | RequestLimitExceededError,
    BatchExecuteStatementCommandOutput
  >;

  /**
   * @see {@link BatchGetItemCommand}
   */
  batchGetItem(
    args: BatchGetItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError,
    BatchGetItemCommandOutput
  >;

  /**
   * @see {@link BatchWriteItemCommand}
   */
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError,
    BatchWriteItemCommandOutput
  >;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | BackupInUseError
    | ContinuousBackupsUnavailableError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | TableInUseError
    | TableNotFoundError,
    CreateBackupCommandOutput
  >;

  /**
   * @see {@link CreateGlobalTableCommand}
   */
  createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | GlobalTableAlreadyExistsError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | TableNotFoundError,
    CreateGlobalTableCommandOutput
  >;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError,
    CreateTableCommandOutput
  >;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | BackupInUseError
    | BackupNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError,
    DeleteBackupCommandOutput
  >;

  /**
   * @see {@link DeleteItemCommand}
   */
  deleteItem(
    args: DeleteItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError,
    DeleteItemCommandOutput
  >;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    DeleteTableCommandOutput
  >;

  /**
   * @see {@link DescribeBackupCommand}
   */
  describeBackup(
    args: DescribeBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | BackupNotFoundError | InternalServerError | InvalidEndpointError,
    DescribeBackupCommandOutput
  >;

  /**
   * @see {@link DescribeContinuousBackupsCommand}
   */
  describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | InvalidEndpointError | TableNotFoundError,
    DescribeContinuousBackupsCommandOutput
  >;

  /**
   * @see {@link DescribeContributorInsightsCommand}
   */
  describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | ResourceNotFoundError,
    DescribeContributorInsightsCommandOutput
  >;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, SdkError, DescribeEndpointsCommandOutput>;

  /**
   * @see {@link DescribeExportCommand}
   */
  describeExport(
    args: DescribeExportCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ExportNotFoundError | InternalServerError | LimitExceededError,
    DescribeExportCommandOutput
  >;

  /**
   * @see {@link DescribeGlobalTableCommand}
   */
  describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | GlobalTableNotFoundError
    | InternalServerError
    | InvalidEndpointError,
    DescribeGlobalTableCommandOutput
  >;

  /**
   * @see {@link DescribeGlobalTableSettingsCommand}
   */
  describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | GlobalTableNotFoundError
    | InternalServerError
    | InvalidEndpointError,
    DescribeGlobalTableSettingsCommandOutput
  >;

  /**
   * @see {@link DescribeImportCommand}
   */
  describeImport(
    args: DescribeImportCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ImportNotFoundError,
    DescribeImportCommandOutput
  >;

  /**
   * @see {@link DescribeKinesisStreamingDestinationCommand}
   */
  describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError,
    DescribeKinesisStreamingDestinationCommandOutput
  >;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | InvalidEndpointError,
    DescribeLimitsCommandOutput
  >;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(
    args: DescribeTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError,
    DescribeTableCommandOutput
  >;

  /**
   * @see {@link DescribeTableReplicaAutoScalingCommand}
   */
  describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | ResourceNotFoundError,
    DescribeTableReplicaAutoScalingCommandOutput
  >;

  /**
   * @see {@link DescribeTimeToLiveCommand}
   */
  describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError,
    DescribeTimeToLiveCommandOutput
  >;

  /**
   * @see {@link DisableKinesisStreamingDestinationCommand}
   */
  disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    DisableKinesisStreamingDestinationCommandOutput
  >;

  /**
   * @see {@link EnableKinesisStreamingDestinationCommand}
   */
  enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    EnableKinesisStreamingDestinationCommandOutput
  >;

  /**
   * @see {@link ExecuteStatementCommand}
   */
  executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConditionalCheckFailedError
    | DuplicateItemError
    | InternalServerError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError,
    ExecuteStatementCommandOutput
  >;

  /**
   * @see {@link ExecuteTransactionCommand}
   */
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
    | TransactionInProgressError,
    ExecuteTransactionCommandOutput
  >;

  /**
   * @see {@link ExportTableToPointInTimeCommand}
   */
  exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ExportConflictError
    | InternalServerError
    | InvalidExportTimeError
    | LimitExceededError
    | PointInTimeRecoveryUnavailableError
    | TableNotFoundError,
    ExportTableToPointInTimeCommandOutput
  >;

  /**
   * @see {@link GetItemCommand}
   */
  getItem(
    args: GetItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError,
    GetItemCommandOutput
  >;

  /**
   * @see {@link ImportTableCommand}
   */
  importTable(
    args: ImportTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | ImportConflictError | LimitExceededError | ResourceInUseError,
    ImportTableCommandOutput
  >;

  /**
   * @see {@link ListBackupsCommand}
   */
  listBackups(
    args: ListBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | InvalidEndpointError,
    ListBackupsCommandOutput
  >;

  /**
   * @see {@link ListContributorInsightsCommand}
   */
  listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | ResourceNotFoundError,
    ListContributorInsightsCommandOutput
  >;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(
    args: ListExportsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | LimitExceededError,
    ListExportsCommandOutput
  >;

  /**
   * @see {@link ListGlobalTablesCommand}
   */
  listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | InvalidEndpointError,
    ListGlobalTablesCommandOutput
  >;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(
    args: ListImportsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | LimitExceededError,
    ListImportsCommandOutput
  >;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(
    args: ListTablesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | InvalidEndpointError,
    ListTablesCommandOutput
  >;

  /**
   * @see {@link ListTagsOfResourceCommand}
   */
  listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError,
    ListTagsOfResourceCommandOutput
  >;

  /**
   * @see {@link PutItemCommand}
   */
  putItem(
    args: PutItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError,
    PutItemCommandOutput
  >;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError,
    QueryCommandOutput
  >;

  /**
   * @see {@link RestoreTableFromBackupCommand}
   */
  restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | BackupInUseError
    | BackupNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | TableAlreadyExistsError
    | TableInUseError,
    RestoreTableFromBackupCommandOutput
  >;

  /**
   * @see {@link RestoreTableToPointInTimeCommand}
   */
  restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | InvalidRestoreTimeError
    | LimitExceededError
    | PointInTimeRecoveryUnavailableError
    | TableAlreadyExistsError
    | TableInUseError
    | TableNotFoundError,
    RestoreTableToPointInTimeCommandOutput
  >;

  /**
   * @see {@link ScanCommand}
   */
  scan(
    args: ScanCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError,
    ScanCommandOutput
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    TagResourceCommandOutput
  >;

  /**
   * @see {@link TransactGetItemsCommand}
   */
  transactGetItems(
    args: TransactGetItemsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError,
    TransactGetItemsCommandOutput
  >;

  /**
   * @see {@link TransactWriteItemsCommand}
   */
  transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
    | TransactionInProgressError,
    TransactWriteItemsCommandOutput
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    UntagResourceCommandOutput
  >;

  /**
   * @see {@link UpdateContinuousBackupsCommand}
   */
  updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ContinuousBackupsUnavailableError
    | InternalServerError
    | InvalidEndpointError
    | TableNotFoundError,
    UpdateContinuousBackupsCommandOutput
  >;

  /**
   * @see {@link UpdateContributorInsightsCommand}
   */
  updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError | ResourceNotFoundError,
    UpdateContributorInsightsCommandOutput
  >;

  /**
   * @see {@link UpdateGlobalTableCommand}
   */
  updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | GlobalTableNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | ReplicaAlreadyExistsError
    | ReplicaNotFoundError
    | TableNotFoundError,
    UpdateGlobalTableCommandOutput
  >;

  /**
   * @see {@link UpdateGlobalTableSettingsCommand}
   */
  updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | GlobalTableNotFoundError
    | IndexNotFoundError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ReplicaNotFoundError
    | ResourceInUseError,
    UpdateGlobalTableSettingsCommandOutput
  >;

  /**
   * @see {@link UpdateItemCommand}
   */
  updateItem(
    args: UpdateItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError,
    UpdateItemCommandOutput
  >;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(
    args: UpdateTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    UpdateTableCommandOutput
  >;

  /**
   * @see {@link UpdateTableReplicaAutoScalingCommand}
   */
  updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    UpdateTableReplicaAutoScalingCommandOutput
  >;

  /**
   * @see {@link UpdateTimeToLiveCommand}
   */
  updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError,
    UpdateTimeToLiveCommandOutput
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const DynamoDBService = Context.Tag<DynamoDBService>(
  Symbol.for("@effect-aws/client-dynamodb/DynamoDBService"),
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
