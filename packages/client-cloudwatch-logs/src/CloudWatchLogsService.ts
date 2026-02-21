/**
 * @since 1.0.0
 */
import {
  AssociateKmsKeyCommand,
  type AssociateKmsKeyCommandInput,
  type AssociateKmsKeyCommandOutput,
  AssociateSourceToS3TableIntegrationCommand,
  type AssociateSourceToS3TableIntegrationCommandInput,
  type AssociateSourceToS3TableIntegrationCommandOutput,
  CancelExportTaskCommand,
  type CancelExportTaskCommandInput,
  type CancelExportTaskCommandOutput,
  CancelImportTaskCommand,
  type CancelImportTaskCommandInput,
  type CancelImportTaskCommandOutput,
  type CloudWatchLogsClient,
  type CloudWatchLogsClientConfig,
  CreateDeliveryCommand,
  type CreateDeliveryCommandInput,
  type CreateDeliveryCommandOutput,
  CreateExportTaskCommand,
  type CreateExportTaskCommandInput,
  type CreateExportTaskCommandOutput,
  CreateImportTaskCommand,
  type CreateImportTaskCommandInput,
  type CreateImportTaskCommandOutput,
  CreateLogAnomalyDetectorCommand,
  type CreateLogAnomalyDetectorCommandInput,
  type CreateLogAnomalyDetectorCommandOutput,
  CreateLogGroupCommand,
  type CreateLogGroupCommandInput,
  type CreateLogGroupCommandOutput,
  CreateLogStreamCommand,
  type CreateLogStreamCommandInput,
  type CreateLogStreamCommandOutput,
  CreateScheduledQueryCommand,
  type CreateScheduledQueryCommandInput,
  type CreateScheduledQueryCommandOutput,
  DeleteAccountPolicyCommand,
  type DeleteAccountPolicyCommandInput,
  type DeleteAccountPolicyCommandOutput,
  DeleteDataProtectionPolicyCommand,
  type DeleteDataProtectionPolicyCommandInput,
  type DeleteDataProtectionPolicyCommandOutput,
  DeleteDeliveryCommand,
  type DeleteDeliveryCommandInput,
  type DeleteDeliveryCommandOutput,
  DeleteDeliveryDestinationCommand,
  type DeleteDeliveryDestinationCommandInput,
  type DeleteDeliveryDestinationCommandOutput,
  DeleteDeliveryDestinationPolicyCommand,
  type DeleteDeliveryDestinationPolicyCommandInput,
  type DeleteDeliveryDestinationPolicyCommandOutput,
  DeleteDeliverySourceCommand,
  type DeleteDeliverySourceCommandInput,
  type DeleteDeliverySourceCommandOutput,
  DeleteDestinationCommand,
  type DeleteDestinationCommandInput,
  type DeleteDestinationCommandOutput,
  DeleteIndexPolicyCommand,
  type DeleteIndexPolicyCommandInput,
  type DeleteIndexPolicyCommandOutput,
  DeleteIntegrationCommand,
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteLogAnomalyDetectorCommand,
  type DeleteLogAnomalyDetectorCommandInput,
  type DeleteLogAnomalyDetectorCommandOutput,
  DeleteLogGroupCommand,
  type DeleteLogGroupCommandInput,
  type DeleteLogGroupCommandOutput,
  DeleteLogStreamCommand,
  type DeleteLogStreamCommandInput,
  type DeleteLogStreamCommandOutput,
  DeleteMetricFilterCommand,
  type DeleteMetricFilterCommandInput,
  type DeleteMetricFilterCommandOutput,
  DeleteQueryDefinitionCommand,
  type DeleteQueryDefinitionCommandInput,
  type DeleteQueryDefinitionCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteRetentionPolicyCommand,
  type DeleteRetentionPolicyCommandInput,
  type DeleteRetentionPolicyCommandOutput,
  DeleteScheduledQueryCommand,
  type DeleteScheduledQueryCommandInput,
  type DeleteScheduledQueryCommandOutput,
  DeleteSubscriptionFilterCommand,
  type DeleteSubscriptionFilterCommandInput,
  type DeleteSubscriptionFilterCommandOutput,
  DeleteTransformerCommand,
  type DeleteTransformerCommandInput,
  type DeleteTransformerCommandOutput,
  DescribeAccountPoliciesCommand,
  type DescribeAccountPoliciesCommandInput,
  type DescribeAccountPoliciesCommandOutput,
  DescribeConfigurationTemplatesCommand,
  type DescribeConfigurationTemplatesCommandInput,
  type DescribeConfigurationTemplatesCommandOutput,
  DescribeDeliveriesCommand,
  type DescribeDeliveriesCommandInput,
  type DescribeDeliveriesCommandOutput,
  DescribeDeliveryDestinationsCommand,
  type DescribeDeliveryDestinationsCommandInput,
  type DescribeDeliveryDestinationsCommandOutput,
  DescribeDeliverySourcesCommand,
  type DescribeDeliverySourcesCommandInput,
  type DescribeDeliverySourcesCommandOutput,
  DescribeDestinationsCommand,
  type DescribeDestinationsCommandInput,
  type DescribeDestinationsCommandOutput,
  DescribeExportTasksCommand,
  type DescribeExportTasksCommandInput,
  type DescribeExportTasksCommandOutput,
  DescribeFieldIndexesCommand,
  type DescribeFieldIndexesCommandInput,
  type DescribeFieldIndexesCommandOutput,
  DescribeImportTaskBatchesCommand,
  type DescribeImportTaskBatchesCommandInput,
  type DescribeImportTaskBatchesCommandOutput,
  DescribeImportTasksCommand,
  type DescribeImportTasksCommandInput,
  type DescribeImportTasksCommandOutput,
  DescribeIndexPoliciesCommand,
  type DescribeIndexPoliciesCommandInput,
  type DescribeIndexPoliciesCommandOutput,
  DescribeLogGroupsCommand,
  type DescribeLogGroupsCommandInput,
  type DescribeLogGroupsCommandOutput,
  DescribeLogStreamsCommand,
  type DescribeLogStreamsCommandInput,
  type DescribeLogStreamsCommandOutput,
  DescribeMetricFiltersCommand,
  type DescribeMetricFiltersCommandInput,
  type DescribeMetricFiltersCommandOutput,
  DescribeQueriesCommand,
  type DescribeQueriesCommandInput,
  type DescribeQueriesCommandOutput,
  DescribeQueryDefinitionsCommand,
  type DescribeQueryDefinitionsCommandInput,
  type DescribeQueryDefinitionsCommandOutput,
  DescribeResourcePoliciesCommand,
  type DescribeResourcePoliciesCommandInput,
  type DescribeResourcePoliciesCommandOutput,
  DescribeSubscriptionFiltersCommand,
  type DescribeSubscriptionFiltersCommandInput,
  type DescribeSubscriptionFiltersCommandOutput,
  DisassociateKmsKeyCommand,
  type DisassociateKmsKeyCommandInput,
  type DisassociateKmsKeyCommandOutput,
  DisassociateSourceFromS3TableIntegrationCommand,
  type DisassociateSourceFromS3TableIntegrationCommandInput,
  type DisassociateSourceFromS3TableIntegrationCommandOutput,
  FilterLogEventsCommand,
  type FilterLogEventsCommandInput,
  type FilterLogEventsCommandOutput,
  GetDataProtectionPolicyCommand,
  type GetDataProtectionPolicyCommandInput,
  type GetDataProtectionPolicyCommandOutput,
  GetDeliveryCommand,
  type GetDeliveryCommandInput,
  type GetDeliveryCommandOutput,
  GetDeliveryDestinationCommand,
  type GetDeliveryDestinationCommandInput,
  type GetDeliveryDestinationCommandOutput,
  GetDeliveryDestinationPolicyCommand,
  type GetDeliveryDestinationPolicyCommandInput,
  type GetDeliveryDestinationPolicyCommandOutput,
  GetDeliverySourceCommand,
  type GetDeliverySourceCommandInput,
  type GetDeliverySourceCommandOutput,
  GetIntegrationCommand,
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetLogAnomalyDetectorCommand,
  type GetLogAnomalyDetectorCommandInput,
  type GetLogAnomalyDetectorCommandOutput,
  GetLogEventsCommand,
  type GetLogEventsCommandInput,
  type GetLogEventsCommandOutput,
  GetLogFieldsCommand,
  type GetLogFieldsCommandInput,
  type GetLogFieldsCommandOutput,
  GetLogGroupFieldsCommand,
  type GetLogGroupFieldsCommandInput,
  type GetLogGroupFieldsCommandOutput,
  GetLogObjectCommand,
  type GetLogObjectCommandInput,
  type GetLogObjectCommandOutput,
  GetLogRecordCommand,
  type GetLogRecordCommandInput,
  type GetLogRecordCommandOutput,
  GetQueryResultsCommand,
  type GetQueryResultsCommandInput,
  type GetQueryResultsCommandOutput,
  GetScheduledQueryCommand,
  type GetScheduledQueryCommandInput,
  type GetScheduledQueryCommandOutput,
  GetScheduledQueryHistoryCommand,
  type GetScheduledQueryHistoryCommandInput,
  type GetScheduledQueryHistoryCommandOutput,
  GetTransformerCommand,
  type GetTransformerCommandInput,
  type GetTransformerCommandOutput,
  ListAggregateLogGroupSummariesCommand,
  type ListAggregateLogGroupSummariesCommandInput,
  type ListAggregateLogGroupSummariesCommandOutput,
  ListAnomaliesCommand,
  type ListAnomaliesCommandInput,
  type ListAnomaliesCommandOutput,
  ListIntegrationsCommand,
  type ListIntegrationsCommandInput,
  type ListIntegrationsCommandOutput,
  ListLogAnomalyDetectorsCommand,
  type ListLogAnomalyDetectorsCommandInput,
  type ListLogAnomalyDetectorsCommandOutput,
  ListLogGroupsCommand,
  type ListLogGroupsCommandInput,
  type ListLogGroupsCommandOutput,
  ListLogGroupsForQueryCommand,
  type ListLogGroupsForQueryCommandInput,
  type ListLogGroupsForQueryCommandOutput,
  ListScheduledQueriesCommand,
  type ListScheduledQueriesCommandInput,
  type ListScheduledQueriesCommandOutput,
  ListSourcesForS3TableIntegrationCommand,
  type ListSourcesForS3TableIntegrationCommandInput,
  type ListSourcesForS3TableIntegrationCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsLogGroupCommand,
  type ListTagsLogGroupCommandInput,
  type ListTagsLogGroupCommandOutput,
  PutAccountPolicyCommand,
  type PutAccountPolicyCommandInput,
  type PutAccountPolicyCommandOutput,
  PutDataProtectionPolicyCommand,
  type PutDataProtectionPolicyCommandInput,
  type PutDataProtectionPolicyCommandOutput,
  PutDeliveryDestinationCommand,
  type PutDeliveryDestinationCommandInput,
  type PutDeliveryDestinationCommandOutput,
  PutDeliveryDestinationPolicyCommand,
  type PutDeliveryDestinationPolicyCommandInput,
  type PutDeliveryDestinationPolicyCommandOutput,
  PutDeliverySourceCommand,
  type PutDeliverySourceCommandInput,
  type PutDeliverySourceCommandOutput,
  PutDestinationCommand,
  type PutDestinationCommandInput,
  type PutDestinationCommandOutput,
  PutDestinationPolicyCommand,
  type PutDestinationPolicyCommandInput,
  type PutDestinationPolicyCommandOutput,
  PutIndexPolicyCommand,
  type PutIndexPolicyCommandInput,
  type PutIndexPolicyCommandOutput,
  PutIntegrationCommand,
  type PutIntegrationCommandInput,
  type PutIntegrationCommandOutput,
  PutLogEventsCommand,
  type PutLogEventsCommandInput,
  type PutLogEventsCommandOutput,
  PutLogGroupDeletionProtectionCommand,
  type PutLogGroupDeletionProtectionCommandInput,
  type PutLogGroupDeletionProtectionCommandOutput,
  PutMetricFilterCommand,
  type PutMetricFilterCommandInput,
  type PutMetricFilterCommandOutput,
  PutQueryDefinitionCommand,
  type PutQueryDefinitionCommandInput,
  type PutQueryDefinitionCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutRetentionPolicyCommand,
  type PutRetentionPolicyCommandInput,
  type PutRetentionPolicyCommandOutput,
  PutSubscriptionFilterCommand,
  type PutSubscriptionFilterCommandInput,
  type PutSubscriptionFilterCommandOutput,
  PutTransformerCommand,
  type PutTransformerCommandInput,
  type PutTransformerCommandOutput,
  StartLiveTailCommand,
  type StartLiveTailCommandInput,
  type StartLiveTailCommandOutput,
  StartQueryCommand,
  type StartQueryCommandInput,
  type StartQueryCommandOutput,
  StopQueryCommand,
  type StopQueryCommandInput,
  type StopQueryCommandOutput,
  TagLogGroupCommand,
  type TagLogGroupCommandInput,
  type TagLogGroupCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestMetricFilterCommand,
  type TestMetricFilterCommandInput,
  type TestMetricFilterCommandOutput,
  TestTransformerCommand,
  type TestTransformerCommandInput,
  type TestTransformerCommandOutput,
  UntagLogGroupCommand,
  type UntagLogGroupCommandInput,
  type UntagLogGroupCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAnomalyCommand,
  type UpdateAnomalyCommandInput,
  type UpdateAnomalyCommandOutput,
  UpdateDeliveryConfigurationCommand,
  type UpdateDeliveryConfigurationCommandInput,
  type UpdateDeliveryConfigurationCommandOutput,
  UpdateLogAnomalyDetectorCommand,
  type UpdateLogAnomalyDetectorCommandInput,
  type UpdateLogAnomalyDetectorCommandOutput,
  UpdateScheduledQueryCommand,
  type UpdateScheduledQueryCommandInput,
  type UpdateScheduledQueryCommandOutput,
} from "@aws-sdk/client-cloudwatch-logs";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import * as Instance from "./CloudWatchLogsClientInstance.js";
import * as CloudWatchLogsServiceConfig from "./CloudWatchLogsServiceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  DataAlreadyAcceptedError,
  InternalServerError,
  InvalidOperationError,
  InvalidParameterError,
  InvalidSequenceTokenError,
  LimitExceededError,
  MalformedQueryError,
  OperationAbortedError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  ServiceUnavailableError,
  ThrottlingError,
  TooManyTagsError,
  UnrecognizedClientError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AssociateKmsKeyCommand,
  AssociateSourceToS3TableIntegrationCommand,
  CancelExportTaskCommand,
  CancelImportTaskCommand,
  CreateDeliveryCommand,
  CreateExportTaskCommand,
  CreateImportTaskCommand,
  CreateLogAnomalyDetectorCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
  CreateScheduledQueryCommand,
  DeleteAccountPolicyCommand,
  DeleteDataProtectionPolicyCommand,
  DeleteDeliveryCommand,
  DeleteDeliveryDestinationCommand,
  DeleteDeliveryDestinationPolicyCommand,
  DeleteDeliverySourceCommand,
  DeleteDestinationCommand,
  DeleteIndexPolicyCommand,
  DeleteIntegrationCommand,
  DeleteLogAnomalyDetectorCommand,
  DeleteLogGroupCommand,
  DeleteLogStreamCommand,
  DeleteMetricFilterCommand,
  DeleteQueryDefinitionCommand,
  DeleteResourcePolicyCommand,
  DeleteRetentionPolicyCommand,
  DeleteScheduledQueryCommand,
  DeleteSubscriptionFilterCommand,
  DeleteTransformerCommand,
  DescribeAccountPoliciesCommand,
  DescribeConfigurationTemplatesCommand,
  DescribeDeliveriesCommand,
  DescribeDeliveryDestinationsCommand,
  DescribeDeliverySourcesCommand,
  DescribeDestinationsCommand,
  DescribeExportTasksCommand,
  DescribeFieldIndexesCommand,
  DescribeImportTaskBatchesCommand,
  DescribeImportTasksCommand,
  DescribeIndexPoliciesCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  DescribeMetricFiltersCommand,
  DescribeQueriesCommand,
  DescribeQueryDefinitionsCommand,
  DescribeResourcePoliciesCommand,
  DescribeSubscriptionFiltersCommand,
  DisassociateKmsKeyCommand,
  DisassociateSourceFromS3TableIntegrationCommand,
  FilterLogEventsCommand,
  GetDataProtectionPolicyCommand,
  GetDeliveryCommand,
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationPolicyCommand,
  GetDeliverySourceCommand,
  GetIntegrationCommand,
  GetLogAnomalyDetectorCommand,
  GetLogEventsCommand,
  GetLogFieldsCommand,
  GetLogGroupFieldsCommand,
  GetLogObjectCommand,
  GetLogRecordCommand,
  GetQueryResultsCommand,
  GetScheduledQueryCommand,
  GetScheduledQueryHistoryCommand,
  GetTransformerCommand,
  ListAggregateLogGroupSummariesCommand,
  ListAnomaliesCommand,
  ListIntegrationsCommand,
  ListLogAnomalyDetectorsCommand,
  ListLogGroupsCommand,
  ListLogGroupsForQueryCommand,
  ListScheduledQueriesCommand,
  ListSourcesForS3TableIntegrationCommand,
  ListTagsForResourceCommand,
  ListTagsLogGroupCommand,
  PutAccountPolicyCommand,
  PutDataProtectionPolicyCommand,
  PutDeliveryDestinationCommand,
  PutDeliveryDestinationPolicyCommand,
  PutDeliverySourceCommand,
  PutDestinationCommand,
  PutDestinationPolicyCommand,
  PutIndexPolicyCommand,
  PutIntegrationCommand,
  PutLogEventsCommand,
  PutLogGroupDeletionProtectionCommand,
  PutMetricFilterCommand,
  PutQueryDefinitionCommand,
  PutResourcePolicyCommand,
  PutRetentionPolicyCommand,
  PutSubscriptionFilterCommand,
  PutTransformerCommand,
  StartLiveTailCommand,
  StartQueryCommand,
  StopQueryCommand,
  TagLogGroupCommand,
  TagResourceCommand,
  TestMetricFilterCommand,
  TestTransformerCommand,
  UntagLogGroupCommand,
  UntagResourceCommand,
  UpdateAnomalyCommand,
  UpdateDeliveryConfigurationCommand,
  UpdateLogAnomalyDetectorCommand,
  UpdateScheduledQueryCommand,
};

interface CloudWatchLogsService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AssociateKmsKeyCommand}
   */
  associateKmsKey(
    args: AssociateKmsKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateKmsKeyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link AssociateSourceToS3TableIntegrationCommand}
   */
  associateSourceToS3TableIntegration(
    args: AssociateSourceToS3TableIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateSourceToS3TableIntegrationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelExportTaskCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidOperationError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CancelImportTaskCommand}
   */
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelImportTaskCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidOperationError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateDeliveryCommand}
   */
  createDelivery(
    args: CreateDeliveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeliveryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateExportTaskCommand}
   */
  createExportTask(
    args: CreateExportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateExportTaskCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CreateImportTaskCommand}
   */
  createImportTask(
    args: CreateImportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateImportTaskCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InvalidOperationError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateLogAnomalyDetectorCommand}
   */
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLogAnomalyDetectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CreateLogGroupCommand}
   */
  createLogGroup(
    args: CreateLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLogGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CreateLogStreamCommand}
   */
  createLogStream(
    args: CreateLogStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLogStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CreateScheduledQueryCommand}
   */
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateScheduledQueryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAccountPolicyCommand}
   */
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccountPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteDataProtectionPolicyCommand}
   */
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDataProtectionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteDeliveryCommand}
   */
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeliveryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDeliveryDestinationCommand}
   */
  deleteDeliveryDestination(
    args: DeleteDeliveryDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeliveryDestinationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDeliveryDestinationPolicyCommand}
   */
  deleteDeliveryDestinationPolicy(
    args: DeleteDeliveryDestinationPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeliveryDestinationPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | ResourceNotFoundError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link DeleteDeliverySourceCommand}
   */
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeliverySourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDestinationCommand}
   */
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDestinationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteIndexPolicyCommand}
   */
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIndexPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ValidationError
  >;

  /**
   * @see {@link DeleteLogAnomalyDetectorCommand}
   */
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLogAnomalyDetectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteLogGroupCommand}
   */
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLogGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ValidationError
  >;

  /**
   * @see {@link DeleteLogStreamCommand}
   */
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLogStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ValidationError
  >;

  /**
   * @see {@link DeleteMetricFilterCommand}
   */
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMetricFilterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteQueryDefinitionCommand}
   */
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteQueryDefinitionCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
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
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteRetentionPolicyCommand}
   */
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRetentionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteScheduledQueryCommand}
   */
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteScheduledQueryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteSubscriptionFilterCommand}
   */
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSubscriptionFilterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteTransformerCommand}
   */
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransformerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidOperationError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeAccountPoliciesCommand}
   */
  describeAccountPolicies(
    args: DescribeAccountPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountPoliciesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeConfigurationTemplatesCommand}
   */
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationTemplatesCommandOutput,
    Cause.TimeoutError | SdkError | ResourceNotFoundError | ServiceUnavailableError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DescribeDeliveriesCommand}
   */
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliveriesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDeliveryDestinationsCommand}
   */
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliveryDestinationsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDeliverySourcesCommand}
   */
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliverySourcesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDestinationsCommand}
   */
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDestinationsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportTasksCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeFieldIndexesCommand}
   */
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFieldIndexesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeImportTaskBatchesCommand}
   */
  describeImportTaskBatches(
    args: DescribeImportTaskBatchesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImportTaskBatchesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidOperationError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeImportTasksCommand}
   */
  describeImportTasks(
    args: DescribeImportTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImportTasksCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidOperationError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeIndexPoliciesCommand}
   */
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIndexPoliciesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeLogGroupsCommand}
   */
  describeLogGroups(
    args: DescribeLogGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLogGroupsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeLogStreamsCommand}
   */
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLogStreamsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeMetricFiltersCommand}
   */
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMetricFiltersCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeQueriesCommand}
   */
  describeQueries(
    args: DescribeQueriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueriesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeQueryDefinitionsCommand}
   */
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueryDefinitionsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeResourcePoliciesCommand}
   */
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeResourcePoliciesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeSubscriptionFiltersCommand}
   */
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSubscriptionFiltersCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DisassociateKmsKeyCommand}
   */
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateKmsKeyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DisassociateSourceFromS3TableIntegrationCommand}
   */
  disassociateSourceFromS3TableIntegration(
    args: DisassociateSourceFromS3TableIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateSourceFromS3TableIntegrationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link FilterLogEventsCommand}
   */
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    FilterLogEventsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataProtectionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link GetDeliveryCommand}
   */
  getDelivery(
    args: GetDeliveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliveryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetDeliveryDestinationCommand}
   */
  getDeliveryDestination(
    args: GetDeliveryDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliveryDestinationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetDeliveryDestinationPolicyCommand}
   */
  getDeliveryDestinationPolicy(
    args: GetDeliveryDestinationPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliveryDestinationPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ResourceNotFoundError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link GetDeliverySourceCommand}
   */
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliverySourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogAnomalyDetectorCommand}
   */
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogAnomalyDetectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogEventsCommand}
   */
  getLogEvents(
    args: GetLogEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogEventsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogFieldsCommand}
   */
  getLogFields(
    args: GetLogFieldsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogFieldsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogGroupFieldsCommand}
   */
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogGroupFieldsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogObjectCommand}
   */
  getLogObject(
    args: GetLogObjectCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogObjectCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidOperationError
    | InvalidParameterError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link GetLogRecordCommand}
   */
  getLogRecord(
    args: GetLogRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogRecordCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueryResultsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetScheduledQueryCommand}
   */
  getScheduledQuery(
    args: GetScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetScheduledQueryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetScheduledQueryHistoryCommand}
   */
  getScheduledQueryHistory(
    args: GetScheduledQueryHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetScheduledQueryHistoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetTransformerCommand}
   */
  getTransformer(
    args: GetTransformerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransformerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidOperationError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link ListAggregateLogGroupSummariesCommand}
   */
  listAggregateLogGroupSummaries(
    args: ListAggregateLogGroupSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAggregateLogGroupSummariesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link ListAnomaliesCommand}
   */
  listAnomalies(
    args: ListAnomaliesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAnomaliesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIntegrationsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListLogAnomalyDetectorsCommand}
   */
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLogAnomalyDetectorsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link ListLogGroupsCommand}
   */
  listLogGroups(
    args: ListLogGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLogGroupsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListLogGroupsForQueryCommand}
   */
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLogGroupsForQueryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link ListScheduledQueriesCommand}
   */
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListScheduledQueriesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListSourcesForS3TableIntegrationCommand}
   */
  listSourcesForS3TableIntegration(
    args: ListSourcesForS3TableIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSourcesForS3TableIntegrationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListTagsLogGroupCommand}
   */
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsLogGroupCommandOutput,
    Cause.TimeoutError | SdkError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutAccountPolicyCommand}
   */
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDataProtectionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutDeliveryDestinationCommand}
   */
  putDeliveryDestination(
    args: PutDeliveryDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliveryDestinationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link PutDeliveryDestinationPolicyCommand}
   */
  putDeliveryDestinationPolicy(
    args: PutDeliveryDestinationPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliveryDestinationPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | ResourceNotFoundError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link PutDeliverySourceCommand}
   */
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliverySourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link PutDestinationCommand}
   */
  putDestination(
    args: PutDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDestinationCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | OperationAbortedError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutDestinationPolicyCommand}
   */
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDestinationPolicyCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | OperationAbortedError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutIndexPolicyCommand}
   */
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutIndexPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutIntegrationCommand}
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutIntegrationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | ServiceUnavailableError
    | ValidationError
  >;

  /**
   * @see {@link PutLogEventsCommand}
   */
  putLogEvents(
    args: PutLogEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutLogEventsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DataAlreadyAcceptedError
    | InvalidParameterError
    | InvalidSequenceTokenError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | UnrecognizedClientError
  >;

  /**
   * @see {@link PutLogGroupDeletionProtectionCommand}
   */
  putLogGroupDeletionProtection(
    args: PutLogGroupDeletionProtectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutLogGroupDeletionProtectionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidOperationError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutMetricFilterCommand}
   */
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricFilterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidOperationError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutQueryDefinitionCommand}
   */
  putQueryDefinition(
    args: PutQueryDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutQueryDefinitionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
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
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutRetentionPolicyCommand}
   */
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRetentionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutSubscriptionFilterCommand}
   */
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutSubscriptionFilterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidOperationError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutTransformerCommand}
   */
  putTransformer(
    args: PutTransformerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutTransformerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidOperationError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link StartLiveTailCommand}
   */
  startLiveTail(
    args: StartLiveTailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartLiveTailCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidOperationError
    | InvalidParameterError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link StartQueryCommand}
   */
  startQuery(
    args: StartQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartQueryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | MalformedQueryError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link StopQueryCommand}
   */
  stopQuery(
    args: StopQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopQueryCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link TagLogGroupCommand}
   */
  tagLogGroup(
    args: TagLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagLogGroupCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError
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
    | InvalidParameterError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | TooManyTagsError
  >;

  /**
   * @see {@link TestMetricFilterCommand}
   */
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestMetricFilterCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link TestTransformerCommand}
   */
  testTransformer(
    args: TestTransformerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestTransformerCommandOutput,
    Cause.TimeoutError | SdkError | InvalidOperationError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link UntagLogGroupCommand}
   */
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagLogGroupCommandOutput,
    Cause.TimeoutError | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link UpdateAnomalyCommand}
   */
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAnomalyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link UpdateDeliveryConfigurationCommand}
   */
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeliveryConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateLogAnomalyDetectorCommand}
   */
  updateLogAnomalyDetector(
    args: UpdateLogAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateLogAnomalyDetectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link UpdateScheduledQueryCommand}
   */
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScheduledQueryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchLogsService = Effect.gen(function*() {
  const client = yield* Instance.CloudWatchLogsClientInstance;

  return yield* Service.fromClientAndCommands<CloudWatchLogsService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CloudWatchLogsServiceConfig.toCloudWatchLogsClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudWatchLogsService extends ServiceMap.Service<
  CloudWatchLogsService,
  CloudWatchLogsService$
>()("@effect-aws/client-cloudwatch-logs/CloudWatchLogsService") {
  static readonly defaultLayer = Layer.effect(this, makeCloudWatchLogsService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: CloudWatchLogsService.Config) =>
    Layer.effect(this, makeCloudWatchLogsService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(CloudWatchLogsServiceConfig.setCloudWatchLogsServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CloudWatchLogsClientConfig) => CloudWatchLogsClient,
  ) =>
    Layer.effect(this, makeCloudWatchLogsService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CloudWatchLogsClientInstance,
          Effect.map(CloudWatchLogsServiceConfig.toCloudWatchLogsClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CloudWatchLogsService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CloudWatchLogsClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = CloudWatchLogsService$;
}
