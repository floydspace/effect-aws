/**
 * @since 1.0.0
 */
import {
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
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
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
  type DynamoDBClient,
  type DynamoDBClientConfig,
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
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
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
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
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
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import * as Instance from "./DynamoDBClientInstance.js";
import * as DynamoDBServiceConfig from "./DynamoDBServiceConfig.js";
import type {
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
  PolicyNotFoundError,
  ProvisionedThroughputExceededError,
  ReplicaAlreadyExistsError,
  ReplicaNotFoundError,
  ReplicatedWriteConflictError,
  RequestLimitExceededError,
  ResourceInUseError,
  ResourceNotFoundError,
  SdkError,
  TableAlreadyExistsError,
  TableInUseError,
  TableNotFoundError,
  ThrottlingError,
  TransactionCanceledError,
  TransactionConflictError,
  TransactionInProgressError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  BatchExecuteStatementCommand,
  BatchGetItemCommand,
  BatchWriteItemCommand,
  CreateBackupCommand,
  CreateGlobalTableCommand,
  CreateTableCommand,
  DeleteBackupCommand,
  DeleteItemCommand,
  DeleteResourcePolicyCommand,
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
  GetResourcePolicyCommand,
  ImportTableCommand,
  ListBackupsCommand,
  ListContributorInsightsCommand,
  ListExportsCommand,
  ListGlobalTablesCommand,
  ListImportsCommand,
  ListTablesCommand,
  ListTagsOfResourceCommand,
  PutItemCommand,
  PutResourcePolicyCommand,
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

interface DynamoDBService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchExecuteStatementCommand}
   */
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchExecuteStatementCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | RequestLimitExceededError | ThrottlingError
  >;

  /**
   * @see {@link BatchGetItemCommand}
   */
  batchGetItem(
    args: BatchGetItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchWriteItemCommand}
   */
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchWriteItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | ReplicatedWriteConflictError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(
    args: CreateBackupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBackupCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlobalTableCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTableCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError | LimitExceededError | ResourceInUseError
  >;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBackupCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | ReplicatedWriteConflictError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | TransactionConflictError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | PolicyNotFoundError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTableCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBackupCommandOutput,
    Cause.TimeoutError | SdkError | BackupNotFoundError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeContinuousBackupsCommand}
   */
  describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeContinuousBackupsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError | TableNotFoundError
  >;

  /**
   * @see {@link DescribeContributorInsightsCommand}
   */
  describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeContributorInsightsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEndpointsCommandOutput,
    Cause.TimeoutError | SdkError
  >;

  /**
   * @see {@link DescribeExportCommand}
   */
  describeExport(
    args: DescribeExportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportCommandOutput,
    Cause.TimeoutError | SdkError | ExportNotFoundError | InternalServerError | LimitExceededError
  >;

  /**
   * @see {@link DescribeGlobalTableCommand}
   */
  describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalTableCommandOutput,
    Cause.TimeoutError | SdkError | GlobalTableNotFoundError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeGlobalTableSettingsCommand}
   */
  describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGlobalTableSettingsCommandOutput,
    Cause.TimeoutError | SdkError | GlobalTableNotFoundError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeImportCommand}
   */
  describeImport(
    args: DescribeImportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImportCommandOutput,
    Cause.TimeoutError | SdkError | ImportNotFoundError
  >;

  /**
   * @see {@link DescribeKinesisStreamingDestinationCommand}
   */
  describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeKinesisStreamingDestinationCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLimitsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(
    args: DescribeTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTableCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeTableReplicaAutoScalingCommand}
   */
  describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTableReplicaAutoScalingCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeTimeToLiveCommand}
   */
  describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTimeToLiveCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError | ResourceNotFoundError
  >;

  /**
   * @see {@link DisableKinesisStreamingDestinationCommand}
   */
  disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableKinesisStreamingDestinationCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableKinesisStreamingDestinationCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteStatementCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConditionalCheckFailedError
    | DuplicateItemError
    | InternalServerError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | TransactionConflictError
  >;

  /**
   * @see {@link ExecuteTransactionCommand}
   */
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteTransactionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | TransactionCanceledError
    | TransactionInProgressError
  >;

  /**
   * @see {@link ExportTableToPointInTimeCommand}
   */
  exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportTableToPointInTimeCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | PolicyNotFoundError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ImportTableCommand}
   */
  importTable(
    args: ImportTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportTableCommandOutput,
    Cause.TimeoutError | SdkError | ImportConflictError | LimitExceededError | ResourceInUseError
  >;

  /**
   * @see {@link ListBackupsCommand}
   */
  listBackups(
    args: ListBackupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBackupsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link ListContributorInsightsCommand}
   */
  listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListContributorInsightsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(
    args: ListExportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListExportsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | LimitExceededError
  >;

  /**
   * @see {@link ListGlobalTablesCommand}
   */
  listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGlobalTablesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(
    args: ListImportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImportsCommandOutput,
    Cause.TimeoutError | SdkError | LimitExceededError
  >;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(
    args: ListTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTablesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError
  >;

  /**
   * @see {@link ListTagsOfResourceCommand}
   */
  listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsOfResourceCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidEndpointError | ResourceNotFoundError
  >;

  /**
   * @see {@link PutItemCommand}
   */
  putItem(
    args: PutItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | ReplicatedWriteConflictError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | TransactionConflictError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | LimitExceededError
    | PolicyNotFoundError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    QueryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link RestoreTableFromBackupCommand}
   */
  restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreTableFromBackupCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreTableToPointInTimeCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ScanCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TransactGetItemsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | TransactionCanceledError
  >;

  /**
   * @see {@link TransactWriteItemsCommand}
   */
  transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TransactWriteItemsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | TransactionCanceledError
    | TransactionInProgressError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContinuousBackupsCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContributorInsightsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateGlobalTableCommand}
   */
  updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGlobalTableCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGlobalTableSettingsCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | ReplicatedWriteConflictError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | TransactionConflictError
  >;

  /**
   * @see {@link UpdateKinesisStreamingDestinationCommand}
   */
  updateKinesisStreamingDestination(
    args: UpdateKinesisStreamingDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateKinesisStreamingDestinationCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTableCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTableReplicaAutoScalingCommandOutput,
    | Cause.TimeoutError
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTimeToLiveCommandOutput,
    | Cause.TimeoutError
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
 * @category constructors
 */
export const makeDynamoDBService = Effect.gen(function*() {
  const client = yield* Instance.DynamoDBClientInstance;

  return yield* Service.fromClientAndCommands<DynamoDBService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: DynamoDBServiceConfig.toDynamoDBClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class DynamoDBService extends ServiceMap.Service<
  DynamoDBService,
  DynamoDBService$
>()("@effect-aws/client-dynamodb/DynamoDBService") {
  static readonly defaultLayer = Layer.effect(this, makeDynamoDBService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: DynamoDBService.Config) =>
    Layer.effect(this, makeDynamoDBService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(DynamoDBServiceConfig.setDynamoDBServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: DynamoDBClientConfig) => DynamoDBClient,
  ) =>
    Layer.effect(this, makeDynamoDBService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.DynamoDBClientInstance,
          Effect.map(DynamoDBServiceConfig.toDynamoDBClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace DynamoDBService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<DynamoDBClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = DynamoDBService$;
}
