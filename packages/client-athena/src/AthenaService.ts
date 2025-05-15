/**
 * @since 1.0.0
 */
import {
  type AthenaClient,
  type AthenaClientConfig,
  BatchGetNamedQueryCommand,
  type BatchGetNamedQueryCommandInput,
  type BatchGetNamedQueryCommandOutput,
  BatchGetPreparedStatementCommand,
  type BatchGetPreparedStatementCommandInput,
  type BatchGetPreparedStatementCommandOutput,
  BatchGetQueryExecutionCommand,
  type BatchGetQueryExecutionCommandInput,
  type BatchGetQueryExecutionCommandOutput,
  CancelCapacityReservationCommand,
  type CancelCapacityReservationCommandInput,
  type CancelCapacityReservationCommandOutput,
  CreateCapacityReservationCommand,
  type CreateCapacityReservationCommandInput,
  type CreateCapacityReservationCommandOutput,
  CreateDataCatalogCommand,
  type CreateDataCatalogCommandInput,
  type CreateDataCatalogCommandOutput,
  CreateNamedQueryCommand,
  type CreateNamedQueryCommandInput,
  type CreateNamedQueryCommandOutput,
  CreateNotebookCommand,
  type CreateNotebookCommandInput,
  type CreateNotebookCommandOutput,
  CreatePreparedStatementCommand,
  type CreatePreparedStatementCommandInput,
  type CreatePreparedStatementCommandOutput,
  CreatePresignedNotebookUrlCommand,
  type CreatePresignedNotebookUrlCommandInput,
  type CreatePresignedNotebookUrlCommandOutput,
  CreateWorkGroupCommand,
  type CreateWorkGroupCommandInput,
  type CreateWorkGroupCommandOutput,
  DeleteCapacityReservationCommand,
  type DeleteCapacityReservationCommandInput,
  type DeleteCapacityReservationCommandOutput,
  DeleteDataCatalogCommand,
  type DeleteDataCatalogCommandInput,
  type DeleteDataCatalogCommandOutput,
  DeleteNamedQueryCommand,
  type DeleteNamedQueryCommandInput,
  type DeleteNamedQueryCommandOutput,
  DeleteNotebookCommand,
  type DeleteNotebookCommandInput,
  type DeleteNotebookCommandOutput,
  DeletePreparedStatementCommand,
  type DeletePreparedStatementCommandInput,
  type DeletePreparedStatementCommandOutput,
  DeleteWorkGroupCommand,
  type DeleteWorkGroupCommandInput,
  type DeleteWorkGroupCommandOutput,
  ExportNotebookCommand,
  type ExportNotebookCommandInput,
  type ExportNotebookCommandOutput,
  GetCalculationExecutionCodeCommand,
  type GetCalculationExecutionCodeCommandInput,
  type GetCalculationExecutionCodeCommandOutput,
  GetCalculationExecutionCommand,
  type GetCalculationExecutionCommandInput,
  type GetCalculationExecutionCommandOutput,
  GetCalculationExecutionStatusCommand,
  type GetCalculationExecutionStatusCommandInput,
  type GetCalculationExecutionStatusCommandOutput,
  GetCapacityAssignmentConfigurationCommand,
  type GetCapacityAssignmentConfigurationCommandInput,
  type GetCapacityAssignmentConfigurationCommandOutput,
  GetCapacityReservationCommand,
  type GetCapacityReservationCommandInput,
  type GetCapacityReservationCommandOutput,
  GetDatabaseCommand,
  type GetDatabaseCommandInput,
  type GetDatabaseCommandOutput,
  GetDataCatalogCommand,
  type GetDataCatalogCommandInput,
  type GetDataCatalogCommandOutput,
  GetNamedQueryCommand,
  type GetNamedQueryCommandInput,
  type GetNamedQueryCommandOutput,
  GetNotebookMetadataCommand,
  type GetNotebookMetadataCommandInput,
  type GetNotebookMetadataCommandOutput,
  GetPreparedStatementCommand,
  type GetPreparedStatementCommandInput,
  type GetPreparedStatementCommandOutput,
  GetQueryExecutionCommand,
  type GetQueryExecutionCommandInput,
  type GetQueryExecutionCommandOutput,
  GetQueryResultsCommand,
  type GetQueryResultsCommandInput,
  type GetQueryResultsCommandOutput,
  GetQueryRuntimeStatisticsCommand,
  type GetQueryRuntimeStatisticsCommandInput,
  type GetQueryRuntimeStatisticsCommandOutput,
  GetSessionCommand,
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionStatusCommand,
  type GetSessionStatusCommandInput,
  type GetSessionStatusCommandOutput,
  GetTableMetadataCommand,
  type GetTableMetadataCommandInput,
  type GetTableMetadataCommandOutput,
  GetWorkGroupCommand,
  type GetWorkGroupCommandInput,
  type GetWorkGroupCommandOutput,
  ImportNotebookCommand,
  type ImportNotebookCommandInput,
  type ImportNotebookCommandOutput,
  ListApplicationDPUSizesCommand,
  type ListApplicationDPUSizesCommandInput,
  type ListApplicationDPUSizesCommandOutput,
  ListCalculationExecutionsCommand,
  type ListCalculationExecutionsCommandInput,
  type ListCalculationExecutionsCommandOutput,
  ListCapacityReservationsCommand,
  type ListCapacityReservationsCommandInput,
  type ListCapacityReservationsCommandOutput,
  ListDatabasesCommand,
  type ListDatabasesCommandInput,
  type ListDatabasesCommandOutput,
  ListDataCatalogsCommand,
  type ListDataCatalogsCommandInput,
  type ListDataCatalogsCommandOutput,
  ListEngineVersionsCommand,
  type ListEngineVersionsCommandInput,
  type ListEngineVersionsCommandOutput,
  ListExecutorsCommand,
  type ListExecutorsCommandInput,
  type ListExecutorsCommandOutput,
  ListNamedQueriesCommand,
  type ListNamedQueriesCommandInput,
  type ListNamedQueriesCommandOutput,
  ListNotebookMetadataCommand,
  type ListNotebookMetadataCommandInput,
  type ListNotebookMetadataCommandOutput,
  ListNotebookSessionsCommand,
  type ListNotebookSessionsCommandInput,
  type ListNotebookSessionsCommandOutput,
  ListPreparedStatementsCommand,
  type ListPreparedStatementsCommandInput,
  type ListPreparedStatementsCommandOutput,
  ListQueryExecutionsCommand,
  type ListQueryExecutionsCommandInput,
  type ListQueryExecutionsCommandOutput,
  ListSessionsCommand,
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListTableMetadataCommand,
  type ListTableMetadataCommandInput,
  type ListTableMetadataCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListWorkGroupsCommand,
  type ListWorkGroupsCommandInput,
  type ListWorkGroupsCommandOutput,
  PutCapacityAssignmentConfigurationCommand,
  type PutCapacityAssignmentConfigurationCommandInput,
  type PutCapacityAssignmentConfigurationCommandOutput,
  StartCalculationExecutionCommand,
  type StartCalculationExecutionCommandInput,
  type StartCalculationExecutionCommandOutput,
  StartQueryExecutionCommand,
  type StartQueryExecutionCommandInput,
  type StartQueryExecutionCommandOutput,
  StartSessionCommand,
  type StartSessionCommandInput,
  type StartSessionCommandOutput,
  StopCalculationExecutionCommand,
  type StopCalculationExecutionCommandInput,
  type StopCalculationExecutionCommandOutput,
  StopQueryExecutionCommand,
  type StopQueryExecutionCommandInput,
  type StopQueryExecutionCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TerminateSessionCommand,
  type TerminateSessionCommandInput,
  type TerminateSessionCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateCapacityReservationCommand,
  type UpdateCapacityReservationCommandInput,
  type UpdateCapacityReservationCommandOutput,
  UpdateDataCatalogCommand,
  type UpdateDataCatalogCommandInput,
  type UpdateDataCatalogCommandOutput,
  UpdateNamedQueryCommand,
  type UpdateNamedQueryCommandInput,
  type UpdateNamedQueryCommandOutput,
  UpdateNotebookCommand,
  type UpdateNotebookCommandInput,
  type UpdateNotebookCommandOutput,
  UpdateNotebookMetadataCommand,
  type UpdateNotebookMetadataCommandInput,
  type UpdateNotebookMetadataCommandOutput,
  UpdatePreparedStatementCommand,
  type UpdatePreparedStatementCommandInput,
  type UpdatePreparedStatementCommandOutput,
  UpdateWorkGroupCommand,
  type UpdateWorkGroupCommandInput,
  type UpdateWorkGroupCommandOutput,
} from "@aws-sdk/client-athena";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./AthenaClientInstance.js";
import * as AthenaServiceConfig from "./AthenaServiceConfig.js";
import type {
  InternalServerError,
  InvalidRequestError,
  MetadataError,
  ResourceNotFoundError,
  SdkError,
  SessionAlreadyExistsError,
  TooManyRequestsError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  BatchGetNamedQueryCommand,
  BatchGetPreparedStatementCommand,
  BatchGetQueryExecutionCommand,
  CancelCapacityReservationCommand,
  CreateCapacityReservationCommand,
  CreateDataCatalogCommand,
  CreateNamedQueryCommand,
  CreateNotebookCommand,
  CreatePreparedStatementCommand,
  CreatePresignedNotebookUrlCommand,
  CreateWorkGroupCommand,
  DeleteCapacityReservationCommand,
  DeleteDataCatalogCommand,
  DeleteNamedQueryCommand,
  DeleteNotebookCommand,
  DeletePreparedStatementCommand,
  DeleteWorkGroupCommand,
  ExportNotebookCommand,
  GetCalculationExecutionCommand,
  GetCalculationExecutionCodeCommand,
  GetCalculationExecutionStatusCommand,
  GetCapacityAssignmentConfigurationCommand,
  GetCapacityReservationCommand,
  GetDataCatalogCommand,
  GetDatabaseCommand,
  GetNamedQueryCommand,
  GetNotebookMetadataCommand,
  GetPreparedStatementCommand,
  GetQueryExecutionCommand,
  GetQueryResultsCommand,
  GetQueryRuntimeStatisticsCommand,
  GetSessionCommand,
  GetSessionStatusCommand,
  GetTableMetadataCommand,
  GetWorkGroupCommand,
  ImportNotebookCommand,
  ListApplicationDPUSizesCommand,
  ListCalculationExecutionsCommand,
  ListCapacityReservationsCommand,
  ListDataCatalogsCommand,
  ListDatabasesCommand,
  ListEngineVersionsCommand,
  ListExecutorsCommand,
  ListNamedQueriesCommand,
  ListNotebookMetadataCommand,
  ListNotebookSessionsCommand,
  ListPreparedStatementsCommand,
  ListQueryExecutionsCommand,
  ListSessionsCommand,
  ListTableMetadataCommand,
  ListTagsForResourceCommand,
  ListWorkGroupsCommand,
  PutCapacityAssignmentConfigurationCommand,
  StartCalculationExecutionCommand,
  StartQueryExecutionCommand,
  StartSessionCommand,
  StopCalculationExecutionCommand,
  StopQueryExecutionCommand,
  TagResourceCommand,
  TerminateSessionCommand,
  UntagResourceCommand,
  UpdateCapacityReservationCommand,
  UpdateDataCatalogCommand,
  UpdateNamedQueryCommand,
  UpdateNotebookCommand,
  UpdateNotebookMetadataCommand,
  UpdatePreparedStatementCommand,
  UpdateWorkGroupCommand,
};

interface AthenaService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchGetNamedQueryCommand}
   */
  batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetNamedQueryCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link BatchGetPreparedStatementCommand}
   */
  batchGetPreparedStatement(
    args: BatchGetPreparedStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetPreparedStatementCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link BatchGetQueryExecutionCommand}
   */
  batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetQueryExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link CancelCapacityReservationCommand}
   */
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link CreateCapacityReservationCommand}
   */
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link CreateDataCatalogCommand}
   */
  createDataCatalog(
    args: CreateDataCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDataCatalogCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link CreateNamedQueryCommand}
   */
  createNamedQuery(
    args: CreateNamedQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNamedQueryCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link CreateNotebookCommand}
   */
  createNotebook(
    args: CreateNotebookCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNotebookCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link CreatePreparedStatementCommand}
   */
  createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePreparedStatementCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link CreatePresignedNotebookUrlCommand}
   */
  createPresignedNotebookUrl(
    args: CreatePresignedNotebookUrlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePresignedNotebookUrlCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateWorkGroupCommand}
   */
  createWorkGroup(
    args: CreateWorkGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateWorkGroupCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link DeleteCapacityReservationCommand}
   */
  deleteCapacityReservation(
    args: DeleteCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link DeleteDataCatalogCommand}
   */
  deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDataCatalogCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link DeleteNamedQueryCommand}
   */
  deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNamedQueryCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link DeleteNotebookCommand}
   */
  deleteNotebook(
    args: DeleteNotebookCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNotebookCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link DeletePreparedStatementCommand}
   */
  deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePreparedStatementCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteWorkGroupCommand}
   */
  deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteWorkGroupCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ExportNotebookCommand}
   */
  exportNotebook(
    args: ExportNotebookCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportNotebookCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link GetCalculationExecutionCommand}
   */
  getCalculationExecution(
    args: GetCalculationExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCalculationExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetCalculationExecutionCodeCommand}
   */
  getCalculationExecutionCode(
    args: GetCalculationExecutionCodeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCalculationExecutionCodeCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetCalculationExecutionStatusCommand}
   */
  getCalculationExecutionStatus(
    args: GetCalculationExecutionStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCalculationExecutionStatusCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetCapacityAssignmentConfigurationCommand}
   */
  getCapacityAssignmentConfiguration(
    args: GetCapacityAssignmentConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCapacityAssignmentConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link GetCapacityReservationCommand}
   */
  getCapacityReservation(
    args: GetCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link GetDataCatalogCommand}
   */
  getDataCatalog(
    args: GetDataCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataCatalogCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link GetDatabaseCommand}
   */
  getDatabase(
    args: GetDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDatabaseCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | MetadataError
  >;

  /**
   * @see {@link GetNamedQueryCommand}
   */
  getNamedQuery(
    args: GetNamedQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetNamedQueryCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link GetNotebookMetadataCommand}
   */
  getNotebookMetadata(
    args: GetNotebookMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetNotebookMetadataCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link GetPreparedStatementCommand}
   */
  getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPreparedStatementCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetQueryExecutionCommand}
   */
  getQueryExecution(
    args: GetQueryExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueryExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueryResultsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link GetQueryRuntimeStatisticsCommand}
   */
  getQueryRuntimeStatistics(
    args: GetQueryRuntimeStatisticsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueryRuntimeStatisticsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSessionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetSessionStatusCommand}
   */
  getSessionStatus(
    args: GetSessionStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSessionStatusCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetTableMetadataCommand}
   */
  getTableMetadata(
    args: GetTableMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTableMetadataCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | MetadataError
  >;

  /**
   * @see {@link GetWorkGroupCommand}
   */
  getWorkGroup(
    args: GetWorkGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkGroupCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ImportNotebookCommand}
   */
  importNotebook(
    args: ImportNotebookCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportNotebookCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListApplicationDPUSizesCommand}
   */
  listApplicationDPUSizes(
    args: ListApplicationDPUSizesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListApplicationDPUSizesCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListCalculationExecutionsCommand}
   */
  listCalculationExecutions(
    args: ListCalculationExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCalculationExecutionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListCapacityReservationsCommand}
   */
  listCapacityReservations(
    args: ListCapacityReservationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCapacityReservationsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ListDataCatalogsCommand}
   */
  listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataCatalogsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ListDatabasesCommand}
   */
  listDatabases(
    args: ListDatabasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDatabasesCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | MetadataError
  >;

  /**
   * @see {@link ListEngineVersionsCommand}
   */
  listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEngineVersionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ListExecutorsCommand}
   */
  listExecutors(
    args: ListExecutorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListExecutorsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListNamedQueriesCommand}
   */
  listNamedQueries(
    args: ListNamedQueriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNamedQueriesCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ListNotebookMetadataCommand}
   */
  listNotebookMetadata(
    args: ListNotebookMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNotebookMetadataCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListNotebookSessionsCommand}
   */
  listNotebookSessions(
    args: ListNotebookSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNotebookSessionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListPreparedStatementsCommand}
   */
  listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPreparedStatementsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ListQueryExecutionsCommand}
   */
  listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListQueryExecutionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSessionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTableMetadataCommand}
   */
  listTableMetadata(
    args: ListTableMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTableMetadataCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | MetadataError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListWorkGroupsCommand}
   */
  listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListWorkGroupsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link PutCapacityAssignmentConfigurationCommand}
   */
  putCapacityAssignmentConfiguration(
    args: PutCapacityAssignmentConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutCapacityAssignmentConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link StartCalculationExecutionCommand}
   */
  startCalculationExecution(
    args: StartCalculationExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartCalculationExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link StartQueryExecutionCommand}
   */
  startQueryExecution(
    args: StartQueryExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartQueryExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link StartSessionCommand}
   */
  startSession(
    args: StartSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServerError
    | InvalidRequestError
    | ResourceNotFoundError
    | SessionAlreadyExistsError
    | TooManyRequestsError
  >;

  /**
   * @see {@link StopCalculationExecutionCommand}
   */
  stopCalculationExecution(
    args: StopCalculationExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopCalculationExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link StopQueryExecutionCommand}
   */
  stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopQueryExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link TerminateSessionCommand}
   */
  terminateSession(
    args: TerminateSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TerminateSessionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateCapacityReservationCommand}
   */
  updateCapacityReservation(
    args: UpdateCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link UpdateDataCatalogCommand}
   */
  updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDataCatalogCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link UpdateNamedQueryCommand}
   */
  updateNamedQuery(
    args: UpdateNamedQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateNamedQueryCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;

  /**
   * @see {@link UpdateNotebookCommand}
   */
  updateNotebook(
    args: UpdateNotebookCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateNotebookCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateNotebookMetadataCommand}
   */
  updateNotebookMetadata(
    args: UpdateNotebookMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateNotebookMetadataCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdatePreparedStatementCommand}
   */
  updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePreparedStatementCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateWorkGroupCommand}
   */
  updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateWorkGroupCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | InvalidRequestError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeAthenaService = Effect.gen(function*() {
  const client = yield* Instance.AthenaClientInstance;

  return yield* Service.fromClientAndCommands<AthenaService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: AthenaServiceConfig.toAthenaClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class AthenaService extends Effect.Tag("@effect-aws/client-athena/AthenaService")<
  AthenaService,
  AthenaService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeAthenaService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: AthenaService.Config) =>
    Layer.effect(this, makeAthenaService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(AthenaServiceConfig.setAthenaServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: AthenaClientConfig) => AthenaClient,
  ) =>
    Layer.effect(this, makeAthenaService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.AthenaClientInstance,
          Effect.map(AthenaServiceConfig.toAthenaClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace AthenaService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<AthenaClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = AthenaService$;
}
