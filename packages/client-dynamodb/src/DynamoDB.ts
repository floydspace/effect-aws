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
import * as RR from "@effect/data/ReadonlyRecord";
import * as Effect from "@effect/io/Effect";
import {
  DefaultDynamoDBClientInstanceLayer,
  DynamoDBClientInstanceLayer,
  DynamoDBClientInstanceTag,
} from "./Context";

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

export interface DynamoDBService {
  /**
   * @see {@link BatchExecuteStatementCommand}
   */
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, BatchExecuteStatementCommandOutput>;

  /**
   * @see {@link BatchGetItemCommand}
   */
  batchGetItem(
    args: BatchGetItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, BatchGetItemCommandOutput>;

  /**
   * @see {@link BatchWriteItemCommand}
   */
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, BatchWriteItemCommandOutput>;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateBackupCommandOutput>;

  /**
   * @see {@link CreateGlobalTableCommand}
   */
  createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateGlobalTableCommandOutput>;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateTableCommandOutput>;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteBackupCommandOutput>;

  /**
   * @see {@link DeleteItemCommand}
   */
  deleteItem(
    args: DeleteItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteItemCommandOutput>;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteTableCommandOutput>;

  /**
   * @see {@link DescribeBackupCommand}
   */
  describeBackup(
    args: DescribeBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeBackupCommandOutput>;

  /**
   * @see {@link DescribeContinuousBackupsCommand}
   */
  describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeContinuousBackupsCommandOutput>;

  /**
   * @see {@link DescribeContributorInsightsCommand}
   */
  describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeContributorInsightsCommandOutput>;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeEndpointsCommandOutput>;

  /**
   * @see {@link DescribeExportCommand}
   */
  describeExport(
    args: DescribeExportCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeExportCommandOutput>;

  /**
   * @see {@link DescribeGlobalTableCommand}
   */
  describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeGlobalTableCommandOutput>;

  /**
   * @see {@link DescribeGlobalTableSettingsCommand}
   */
  describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeGlobalTableSettingsCommandOutput>;

  /**
   * @see {@link DescribeImportCommand}
   */
  describeImport(
    args: DescribeImportCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeImportCommandOutput>;

  /**
   * @see {@link DescribeKinesisStreamingDestinationCommand}
   */
  describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    DescribeKinesisStreamingDestinationCommandOutput
  >;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeLimitsCommandOutput>;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(
    args: DescribeTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeTableCommandOutput>;

  /**
   * @see {@link DescribeTableReplicaAutoScalingCommand}
   */
  describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    DescribeTableReplicaAutoScalingCommandOutput
  >;

  /**
   * @see {@link DescribeTimeToLiveCommand}
   */
  describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DescribeTimeToLiveCommandOutput>;

  /**
   * @see {@link DisableKinesisStreamingDestinationCommand}
   */
  disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
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
    unknown,
    EnableKinesisStreamingDestinationCommandOutput
  >;

  /**
   * @see {@link ExecuteStatementCommand}
   */
  executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ExecuteStatementCommandOutput>;

  /**
   * @see {@link ExecuteTransactionCommand}
   */
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ExecuteTransactionCommandOutput>;

  /**
   * @see {@link ExportTableToPointInTimeCommand}
   */
  exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ExportTableToPointInTimeCommandOutput>;

  /**
   * @see {@link GetItemCommand}
   */
  getItem(
    args: GetItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetItemCommandOutput>;

  /**
   * @see {@link ImportTableCommand}
   */
  importTable(
    args: ImportTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ImportTableCommandOutput>;

  /**
   * @see {@link ListBackupsCommand}
   */
  listBackups(
    args: ListBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListBackupsCommandOutput>;

  /**
   * @see {@link ListContributorInsightsCommand}
   */
  listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListContributorInsightsCommandOutput>;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(
    args: ListExportsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListExportsCommandOutput>;

  /**
   * @see {@link ListGlobalTablesCommand}
   */
  listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListGlobalTablesCommandOutput>;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(
    args: ListImportsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListImportsCommandOutput>;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(
    args: ListTablesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListTablesCommandOutput>;

  /**
   * @see {@link ListTagsOfResourceCommand}
   */
  listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListTagsOfResourceCommandOutput>;

  /**
   * @see {@link PutItemCommand}
   */
  putItem(
    args: PutItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutItemCommandOutput>;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, QueryCommandOutput>;

  /**
   * @see {@link RestoreTableFromBackupCommand}
   */
  restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RestoreTableFromBackupCommandOutput>;

  /**
   * @see {@link RestoreTableToPointInTimeCommand}
   */
  restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RestoreTableToPointInTimeCommandOutput>;

  /**
   * @see {@link ScanCommand}
   */
  scan(
    args: ScanCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ScanCommandOutput>;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TagResourceCommandOutput>;

  /**
   * @see {@link TransactGetItemsCommand}
   */
  transactGetItems(
    args: TransactGetItemsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TransactGetItemsCommandOutput>;

  /**
   * @see {@link TransactWriteItemsCommand}
   */
  transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TransactWriteItemsCommandOutput>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UntagResourceCommandOutput>;

  /**
   * @see {@link UpdateContinuousBackupsCommand}
   */
  updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateContinuousBackupsCommandOutput>;

  /**
   * @see {@link UpdateContributorInsightsCommand}
   */
  updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateContributorInsightsCommandOutput>;

  /**
   * @see {@link UpdateGlobalTableCommand}
   */
  updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateGlobalTableCommandOutput>;

  /**
   * @see {@link UpdateGlobalTableSettingsCommand}
   */
  updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateGlobalTableSettingsCommandOutput>;

  /**
   * @see {@link UpdateItemCommand}
   */
  updateItem(
    args: UpdateItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateItemCommandOutput>;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(
    args: UpdateTableCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateTableCommandOutput>;

  /**
   * @see {@link UpdateTableReplicaAutoScalingCommand}
   */
  updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateTableReplicaAutoScalingCommandOutput>;

  /**
   * @see {@link UpdateTimeToLiveCommand}
   */
  updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateTimeToLiveCommandOutput>;
}

export const BaseDynamoDBServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(DynamoDBClientInstanceTag);

  return RR.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise(() =>
        client.send(new CommandCtor(args), options ?? {}),
      );
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as DynamoDBService;
});

export const DynamoDBServiceEffect = BaseDynamoDBServiceEffect.pipe(
  Effect.provideLayer(DynamoDBClientInstanceLayer),
);

export const DefaultDynamoDBServiceEffect = BaseDynamoDBServiceEffect.pipe(
  Effect.provideLayer(DefaultDynamoDBClientInstanceLayer),
);
