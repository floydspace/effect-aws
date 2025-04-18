/**
 * @since 1.0.0
 */
import {
  AssociateKmsKeyCommand,
  type AssociateKmsKeyCommandInput,
  type AssociateKmsKeyCommandOutput,
  CancelExportTaskCommand,
  type CancelExportTaskCommandInput,
  type CancelExportTaskCommandOutput,
  type CloudWatchLogsClient,
  type CloudWatchLogsClientConfig,
  CreateDeliveryCommand,
  type CreateDeliveryCommandInput,
  type CreateDeliveryCommandOutput,
  CreateExportTaskCommand,
  type CreateExportTaskCommandInput,
  type CreateExportTaskCommandOutput,
  CreateLogAnomalyDetectorCommand,
  type CreateLogAnomalyDetectorCommandInput,
  type CreateLogAnomalyDetectorCommandOutput,
  CreateLogGroupCommand,
  type CreateLogGroupCommandInput,
  type CreateLogGroupCommandOutput,
  CreateLogStreamCommand,
  type CreateLogStreamCommandInput,
  type CreateLogStreamCommandOutput,
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
  GetLogGroupFieldsCommand,
  type GetLogGroupFieldsCommandInput,
  type GetLogGroupFieldsCommandOutput,
  GetLogRecordCommand,
  type GetLogRecordCommandInput,
  type GetLogRecordCommandOutput,
  GetQueryResultsCommand,
  type GetQueryResultsCommandInput,
  type GetQueryResultsCommandOutput,
  GetTransformerCommand,
  type GetTransformerCommandInput,
  type GetTransformerCommandOutput,
  ListAnomaliesCommand,
  type ListAnomaliesCommandInput,
  type ListAnomaliesCommandOutput,
  ListIntegrationsCommand,
  type ListIntegrationsCommandInput,
  type ListIntegrationsCommandOutput,
  ListLogAnomalyDetectorsCommand,
  type ListLogAnomalyDetectorsCommandInput,
  type ListLogAnomalyDetectorsCommandOutput,
  ListLogGroupsForQueryCommand,
  type ListLogGroupsForQueryCommandInput,
  type ListLogGroupsForQueryCommandOutput,
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
} from "@aws-sdk/client-cloudwatch-logs";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import * as Instance from "./CloudWatchLogsClientInstance.js";
import * as CloudWatchLogsServiceConfig from "./CloudWatchLogsServiceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  DataAlreadyAcceptedError,
  InvalidOperationError,
  InvalidParameterError,
  InvalidSequenceTokenError,
  LimitExceededError,
  MalformedQueryError,
  OperationAbortedError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
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
  CancelExportTaskCommand,
  CreateDeliveryCommand,
  CreateExportTaskCommand,
  CreateLogAnomalyDetectorCommand,
  CreateLogGroupCommand,
  CreateLogStreamCommand,
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
  DescribeIndexPoliciesCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  DescribeMetricFiltersCommand,
  DescribeQueriesCommand,
  DescribeQueryDefinitionsCommand,
  DescribeResourcePoliciesCommand,
  DescribeSubscriptionFiltersCommand,
  DisassociateKmsKeyCommand,
  FilterLogEventsCommand,
  GetDataProtectionPolicyCommand,
  GetDeliveryCommand,
  GetDeliveryDestinationCommand,
  GetDeliveryDestinationPolicyCommand,
  GetDeliverySourceCommand,
  GetIntegrationCommand,
  GetLogAnomalyDetectorCommand,
  GetLogEventsCommand,
  GetLogGroupFieldsCommand,
  GetLogRecordCommand,
  GetQueryResultsCommand,
  GetTransformerCommand,
  ListAnomaliesCommand,
  ListIntegrationsCommand,
  ListLogAnomalyDetectorsCommand,
  ListLogGroupsForQueryCommand,
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
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelExportTaskCommandOutput,
    SdkError | InvalidOperationError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link CreateDeliveryCommand}
   */
  createDelivery(
    args: CreateDeliveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeliveryCommandOutput,
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
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CreateLogAnomalyDetectorCommand}
   */
  createLogAnomalyDetector(
    args: CreateLogAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLogAnomalyDetectorCommandOutput,
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
    SdkError | InvalidParameterError | ResourceAlreadyExistsError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteAccountPolicyCommand}
   */
  deleteAccountPolicy(
    args: DeleteAccountPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccountPolicyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteDataProtectionPolicyCommand}
   */
  deleteDataProtectionPolicy(
    args: DeleteDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDataProtectionPolicyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteDeliveryCommand}
   */
  deleteDelivery(
    args: DeleteDeliveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeliveryCommandOutput,
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
    SdkError | ConflictError | ResourceNotFoundError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link DeleteDeliverySourceCommand}
   */
  deleteDeliverySource(
    args: DeleteDeliverySourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeliverySourceCommandOutput,
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
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteIndexPolicyCommand}
   */
  deleteIndexPolicy(
    args: DeleteIndexPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIndexPolicyCommandOutput,
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
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link DeleteLogAnomalyDetectorCommand}
   */
  deleteLogAnomalyDetector(
    args: DeleteLogAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLogAnomalyDetectorCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteLogGroupCommand}
   */
  deleteLogGroup(
    args: DeleteLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLogGroupCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteLogStreamCommand}
   */
  deleteLogStream(
    args: DeleteLogStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLogStreamCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteMetricFilterCommand}
   */
  deleteMetricFilter(
    args: DeleteMetricFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMetricFilterCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteQueryDefinitionCommand}
   */
  deleteQueryDefinition(
    args: DeleteQueryDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteQueryDefinitionCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteRetentionPolicyCommand}
   */
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRetentionPolicyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteSubscriptionFilterCommand}
   */
  deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSubscriptionFilterCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteTransformerCommand}
   */
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransformerCommandOutput,
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
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeConfigurationTemplatesCommand}
   */
  describeConfigurationTemplates(
    args: DescribeConfigurationTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationTemplatesCommandOutput,
    SdkError | ResourceNotFoundError | ServiceUnavailableError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DescribeDeliveriesCommand}
   */
  describeDeliveries(
    args: DescribeDeliveriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliveriesCommandOutput,
    SdkError | ServiceQuotaExceededError | ServiceUnavailableError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DescribeDeliveryDestinationsCommand}
   */
  describeDeliveryDestinations(
    args: DescribeDeliveryDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliveryDestinationsCommandOutput,
    SdkError | ServiceQuotaExceededError | ServiceUnavailableError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DescribeDeliverySourcesCommand}
   */
  describeDeliverySources(
    args: DescribeDeliverySourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliverySourcesCommandOutput,
    SdkError | ServiceQuotaExceededError | ServiceUnavailableError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DescribeDestinationsCommand}
   */
  describeDestinations(
    args: DescribeDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDestinationsCommandOutput,
    SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportTasksCommandOutput,
    SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeFieldIndexesCommand}
   */
  describeFieldIndexes(
    args: DescribeFieldIndexesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFieldIndexesCommandOutput,
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | OperationAbortedError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeIndexPoliciesCommand}
   */
  describeIndexPolicies(
    args: DescribeIndexPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIndexPoliciesCommandOutput,
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
    SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeLogStreamsCommand}
   */
  describeLogStreams(
    args: DescribeLogStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLogStreamsCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeMetricFiltersCommand}
   */
  describeMetricFilters(
    args: DescribeMetricFiltersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMetricFiltersCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeQueriesCommand}
   */
  describeQueries(
    args: DescribeQueriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueriesCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeQueryDefinitionsCommand}
   */
  describeQueryDefinitions(
    args: DescribeQueryDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueryDefinitionsCommandOutput,
    SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeResourcePoliciesCommand}
   */
  describeResourcePolicies(
    args: DescribeResourcePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeResourcePoliciesCommandOutput,
    SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeSubscriptionFiltersCommand}
   */
  describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSubscriptionFiltersCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link DisassociateKmsKeyCommand}
   */
  disassociateKmsKey(
    args: DisassociateKmsKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateKmsKeyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link FilterLogEventsCommand}
   */
  filterLogEvents(
    args: FilterLogEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    FilterLogEventsCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataProtectionPolicyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetDeliveryCommand}
   */
  getDelivery(
    args: GetDeliveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliveryCommandOutput,
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
    SdkError | ResourceNotFoundError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link GetDeliverySourceCommand}
   */
  getDeliverySource(
    args: GetDeliverySourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliverySourceCommandOutput,
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
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogAnomalyDetectorCommand}
   */
  getLogAnomalyDetector(
    args: GetLogAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogAnomalyDetectorCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogEventsCommand}
   */
  getLogEvents(
    args: GetLogEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogEventsCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogGroupFieldsCommand}
   */
  getLogGroupFields(
    args: GetLogGroupFieldsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogGroupFieldsCommandOutput,
    SdkError | InvalidParameterError | LimitExceededError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetLogRecordCommand}
   */
  getLogRecord(
    args: GetLogRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLogRecordCommandOutput,
    SdkError | InvalidParameterError | LimitExceededError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueryResultsCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetTransformerCommand}
   */
  getTransformer(
    args: GetTransformerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransformerCommandOutput,
    SdkError | InvalidOperationError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListAnomaliesCommand}
   */
  listAnomalies(
    args: ListAnomaliesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAnomaliesCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIntegrationsCommandOutput,
    SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListLogAnomalyDetectorsCommand}
   */
  listLogAnomalyDetectors(
    args: ListLogAnomalyDetectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLogAnomalyDetectorsCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListLogGroupsForQueryCommand}
   */
  listLogGroupsForQuery(
    args: ListLogGroupsForQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLogGroupsForQueryCommandOutput,
    SdkError | AccessDeniedError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListTagsLogGroupCommand}
   */
  listTagsLogGroup(
    args: ListTagsLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsLogGroupCommandOutput,
    SdkError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutAccountPolicyCommand}
   */
  putAccountPolicy(
    args: PutAccountPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountPolicyCommandOutput,
    SdkError | InvalidParameterError | LimitExceededError | OperationAbortedError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDataProtectionPolicyCommandOutput,
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
    SdkError | ConflictError | ResourceNotFoundError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link PutDeliverySourceCommand}
   */
  putDeliverySource(
    args: PutDeliverySourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliverySourceCommandOutput,
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
    SdkError | InvalidParameterError | OperationAbortedError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutDestinationPolicyCommand}
   */
  putDestinationPolicy(
    args: PutDestinationPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDestinationPolicyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutIndexPolicyCommand}
   */
  putIndexPolicy(
    args: PutIndexPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutIndexPolicyCommandOutput,
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
    SdkError | InvalidParameterError | LimitExceededError | ServiceUnavailableError | ValidationError
  >;

  /**
   * @see {@link PutLogEventsCommand}
   */
  putLogEvents(
    args: PutLogEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutLogEventsCommandOutput,
    | SdkError
    | DataAlreadyAcceptedError
    | InvalidParameterError
    | InvalidSequenceTokenError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | UnrecognizedClientError
  >;

  /**
   * @see {@link PutMetricFilterCommand}
   */
  putMetricFilter(
    args: PutMetricFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricFilterCommandOutput,
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
    SdkError | InvalidParameterError | LimitExceededError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    SdkError | InvalidParameterError | LimitExceededError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutRetentionPolicyCommand}
   */
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRetentionPolicyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link PutSubscriptionFilterCommand}
   */
  putSubscriptionFilter(
    args: PutSubscriptionFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutSubscriptionFilterCommandOutput,
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
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link TagLogGroupCommand}
   */
  tagLogGroup(
    args: TagLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagLogGroupCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError | TooManyTagsError
  >;

  /**
   * @see {@link TestMetricFilterCommand}
   */
  testMetricFilter(
    args: TestMetricFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestMetricFilterCommandOutput,
    SdkError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link TestTransformerCommand}
   */
  testTransformer(
    args: TestTransformerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestTransformerCommandOutput,
    SdkError | InvalidOperationError | InvalidParameterError | ServiceUnavailableError
  >;

  /**
   * @see {@link UntagLogGroupCommand}
   */
  untagLogGroup(
    args: UntagLogGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagLogGroupCommandOutput,
    SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    SdkError | InvalidParameterError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link UpdateAnomalyCommand}
   */
  updateAnomaly(
    args: UpdateAnomalyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAnomalyCommandOutput,
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
  >;

  /**
   * @see {@link UpdateDeliveryConfigurationCommand}
   */
  updateDeliveryConfiguration(
    args: UpdateDeliveryConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeliveryConfigurationCommandOutput,
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
    SdkError | InvalidParameterError | OperationAbortedError | ResourceNotFoundError | ServiceUnavailableError
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
export class CloudWatchLogsService extends Effect.Tag("@effect-aws/client-cloudwatch-logs/CloudWatchLogsService")<
  CloudWatchLogsService,
  CloudWatchLogsService$
>() {
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
}
