/**
 * @since 1.0.0
 */
import {
  AddTagsCommand,
  type AddTagsCommandInput,
  type AddTagsCommandOutput,
  CancelQueryCommand,
  type CancelQueryCommandInput,
  type CancelQueryCommandOutput,
  type CloudTrailClient,
  type CloudTrailClientConfig,
  CloudTrailServiceException,
  CreateChannelCommand,
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateDashboardCommand,
  type CreateDashboardCommandInput,
  type CreateDashboardCommandOutput,
  CreateEventDataStoreCommand,
  type CreateEventDataStoreCommandInput,
  type CreateEventDataStoreCommandOutput,
  CreateTrailCommand,
  type CreateTrailCommandInput,
  type CreateTrailCommandOutput,
  DeleteChannelCommand,
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeleteDashboardCommand,
  type DeleteDashboardCommandInput,
  type DeleteDashboardCommandOutput,
  DeleteEventDataStoreCommand,
  type DeleteEventDataStoreCommandInput,
  type DeleteEventDataStoreCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteTrailCommand,
  type DeleteTrailCommandInput,
  type DeleteTrailCommandOutput,
  DeregisterOrganizationDelegatedAdminCommand,
  type DeregisterOrganizationDelegatedAdminCommandInput,
  type DeregisterOrganizationDelegatedAdminCommandOutput,
  DescribeQueryCommand,
  type DescribeQueryCommandInput,
  type DescribeQueryCommandOutput,
  DescribeTrailsCommand,
  type DescribeTrailsCommandInput,
  type DescribeTrailsCommandOutput,
  DisableFederationCommand,
  type DisableFederationCommandInput,
  type DisableFederationCommandOutput,
  EnableFederationCommand,
  type EnableFederationCommandInput,
  type EnableFederationCommandOutput,
  GenerateQueryCommand,
  type GenerateQueryCommandInput,
  type GenerateQueryCommandOutput,
  GetChannelCommand,
  type GetChannelCommandInput,
  type GetChannelCommandOutput,
  GetDashboardCommand,
  type GetDashboardCommandInput,
  type GetDashboardCommandOutput,
  GetEventDataStoreCommand,
  type GetEventDataStoreCommandInput,
  type GetEventDataStoreCommandOutput,
  GetEventSelectorsCommand,
  type GetEventSelectorsCommandInput,
  type GetEventSelectorsCommandOutput,
  GetImportCommand,
  type GetImportCommandInput,
  type GetImportCommandOutput,
  GetInsightSelectorsCommand,
  type GetInsightSelectorsCommandInput,
  type GetInsightSelectorsCommandOutput,
  GetQueryResultsCommand,
  type GetQueryResultsCommandInput,
  type GetQueryResultsCommandOutput,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetTrailCommand,
  type GetTrailCommandInput,
  type GetTrailCommandOutput,
  GetTrailStatusCommand,
  type GetTrailStatusCommandInput,
  type GetTrailStatusCommandOutput,
  ListChannelsCommand,
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListDashboardsCommand,
  type ListDashboardsCommandInput,
  type ListDashboardsCommandOutput,
  ListEventDataStoresCommand,
  type ListEventDataStoresCommandInput,
  type ListEventDataStoresCommandOutput,
  ListImportFailuresCommand,
  type ListImportFailuresCommandInput,
  type ListImportFailuresCommandOutput,
  ListImportsCommand,
  type ListImportsCommandInput,
  type ListImportsCommandOutput,
  ListInsightsMetricDataCommand,
  type ListInsightsMetricDataCommandInput,
  type ListInsightsMetricDataCommandOutput,
  ListPublicKeysCommand,
  type ListPublicKeysCommandInput,
  type ListPublicKeysCommandOutput,
  ListQueriesCommand,
  type ListQueriesCommandInput,
  type ListQueriesCommandOutput,
  ListTagsCommand,
  type ListTagsCommandInput,
  type ListTagsCommandOutput,
  ListTrailsCommand,
  type ListTrailsCommandInput,
  type ListTrailsCommandOutput,
  LookupEventsCommand,
  type LookupEventsCommandInput,
  type LookupEventsCommandOutput,
  PutEventSelectorsCommand,
  type PutEventSelectorsCommandInput,
  type PutEventSelectorsCommandOutput,
  PutInsightSelectorsCommand,
  type PutInsightSelectorsCommandInput,
  type PutInsightSelectorsCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  RegisterOrganizationDelegatedAdminCommand,
  type RegisterOrganizationDelegatedAdminCommandInput,
  type RegisterOrganizationDelegatedAdminCommandOutput,
  RemoveTagsCommand,
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RestoreEventDataStoreCommand,
  type RestoreEventDataStoreCommandInput,
  type RestoreEventDataStoreCommandOutput,
  StartDashboardRefreshCommand,
  type StartDashboardRefreshCommandInput,
  type StartDashboardRefreshCommandOutput,
  StartEventDataStoreIngestionCommand,
  type StartEventDataStoreIngestionCommandInput,
  type StartEventDataStoreIngestionCommandOutput,
  StartImportCommand,
  type StartImportCommandInput,
  type StartImportCommandOutput,
  StartLoggingCommand,
  type StartLoggingCommandInput,
  type StartLoggingCommandOutput,
  StartQueryCommand,
  type StartQueryCommandInput,
  type StartQueryCommandOutput,
  StopEventDataStoreIngestionCommand,
  type StopEventDataStoreIngestionCommandInput,
  type StopEventDataStoreIngestionCommandOutput,
  StopImportCommand,
  type StopImportCommandInput,
  type StopImportCommandOutput,
  StopLoggingCommand,
  type StopLoggingCommandInput,
  type StopLoggingCommandOutput,
  UpdateChannelCommand,
  type UpdateChannelCommandInput,
  type UpdateChannelCommandOutput,
  UpdateDashboardCommand,
  type UpdateDashboardCommandInput,
  type UpdateDashboardCommandOutput,
  UpdateEventDataStoreCommand,
  type UpdateEventDataStoreCommandInput,
  type UpdateEventDataStoreCommandOutput,
  UpdateTrailCommand,
  type UpdateTrailCommandInput,
  type UpdateTrailCommandOutput,
} from "@aws-sdk/client-cloudtrail";
import { Data, Effect, Layer, Record } from "effect";
import { CloudTrailClientInstance, CloudTrailClientInstanceLayer } from "./CloudTrailClientInstance.js";
import {
  CloudTrailClientInstanceConfig,
  DefaultCloudTrailClientConfigLayer,
  makeDefaultCloudTrailClientInstanceConfig,
} from "./CloudTrailClientInstanceConfig.js";
import type {
  AccessDeniedError,
  AccountHasOngoingImportError,
  AccountNotFoundError,
  AccountNotRegisteredError,
  AccountRegisteredError,
  CannotDelegateManagementAccountError,
  ChannelAlreadyExistsError,
  ChannelARNInvalidError,
  ChannelExistsForEDSError,
  ChannelMaxLimitExceededError,
  ChannelNotFoundError,
  CloudTrailAccessNotEnabledError,
  CloudTrailARNInvalidError,
  CloudTrailInvalidClientTokenIdError,
  CloudWatchLogsDeliveryUnavailableError,
  ConcurrentModificationError,
  ConflictError,
  DelegatedAdminAccountLimitExceededError,
  EventDataStoreAlreadyExistsError,
  EventDataStoreARNInvalidError,
  EventDataStoreFederationEnabledError,
  EventDataStoreHasOngoingImportError,
  EventDataStoreMaxLimitExceededError,
  EventDataStoreNotFoundError,
  EventDataStoreTerminationProtectedError,
  GenerateResponseError,
  ImportNotFoundError,
  InactiveEventDataStoreError,
  InactiveQueryError,
  InsightNotEnabledError,
  InsufficientDependencyServiceAccessPermissionError,
  InsufficientEncryptionPolicyError,
  InsufficientS3BucketPolicyError,
  InsufficientSnsTopicPolicyError,
  InvalidCloudWatchLogsLogGroupArnError,
  InvalidCloudWatchLogsRoleArnError,
  InvalidDateRangeError,
  InvalidEventCategoryError,
  InvalidEventDataStoreCategoryError,
  InvalidEventDataStoreStatusError,
  InvalidEventSelectorsError,
  InvalidHomeRegionError,
  InvalidImportSourceError,
  InvalidInsightSelectorsError,
  InvalidKmsKeyIdError,
  InvalidLookupAttributesError,
  InvalidMaxResultsError,
  InvalidNextTokenError,
  InvalidParameterCombinationError,
  InvalidParameterError,
  InvalidQueryStatementError,
  InvalidQueryStatusError,
  InvalidS3BucketNameError,
  InvalidS3PrefixError,
  InvalidSnsTopicNameError,
  InvalidSourceError,
  InvalidTagParameterError,
  InvalidTimeRangeError,
  InvalidTokenError,
  InvalidTrailNameError,
  KmsError,
  KmsKeyDisabledError,
  KmsKeyNotFoundError,
  MaxConcurrentQueriesError,
  MaximumNumberOfTrailsExceededError,
  NoManagementAccountSLRExistsError,
  NotOrganizationManagementAccountError,
  NotOrganizationMasterAccountError,
  OperationNotPermittedError,
  OrganizationNotInAllFeaturesModeError,
  OrganizationsNotInUseError,
  QueryIdNotFoundError,
  ResourceARNNotValidError,
  ResourceNotFoundError,
  ResourcePolicyNotFoundError,
  ResourcePolicyNotValidError,
  ResourceTypeNotSupportedError,
  S3BucketDoesNotExistError,
  ServiceQuotaExceededError,
  TaggedException,
  TagsLimitExceededError,
  ThrottlingError,
  TrailAlreadyExistsError,
  TrailNotFoundError,
  TrailNotProvidedError,
  UnsupportedOperationError,
} from "./Errors.js";
import { AllServiceErrors, SdkError } from "./Errors.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  AddTagsCommand,
  CancelQueryCommand,
  CreateChannelCommand,
  CreateDashboardCommand,
  CreateEventDataStoreCommand,
  CreateTrailCommand,
  DeleteChannelCommand,
  DeleteDashboardCommand,
  DeleteEventDataStoreCommand,
  DeleteResourcePolicyCommand,
  DeleteTrailCommand,
  DeregisterOrganizationDelegatedAdminCommand,
  DescribeQueryCommand,
  DescribeTrailsCommand,
  DisableFederationCommand,
  EnableFederationCommand,
  GenerateQueryCommand,
  GetChannelCommand,
  GetDashboardCommand,
  GetEventDataStoreCommand,
  GetEventSelectorsCommand,
  GetImportCommand,
  GetInsightSelectorsCommand,
  GetQueryResultsCommand,
  GetResourcePolicyCommand,
  GetTrailCommand,
  GetTrailStatusCommand,
  ListChannelsCommand,
  ListDashboardsCommand,
  ListEventDataStoresCommand,
  ListImportFailuresCommand,
  ListImportsCommand,
  ListInsightsMetricDataCommand,
  ListPublicKeysCommand,
  ListQueriesCommand,
  ListTagsCommand,
  ListTrailsCommand,
  LookupEventsCommand,
  PutEventSelectorsCommand,
  PutInsightSelectorsCommand,
  PutResourcePolicyCommand,
  RegisterOrganizationDelegatedAdminCommand,
  RemoveTagsCommand,
  RestoreEventDataStoreCommand,
  StartDashboardRefreshCommand,
  StartEventDataStoreIngestionCommand,
  StartImportCommand,
  StartLoggingCommand,
  StartQueryCommand,
  StopEventDataStoreIngestionCommand,
  StopImportCommand,
  StopLoggingCommand,
  UpdateChannelCommand,
  UpdateDashboardCommand,
  UpdateEventDataStoreCommand,
  UpdateTrailCommand,
};

interface CloudTrailService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsCommandOutput,
    | SdkError
    | ChannelARNInvalidError
    | ChannelNotFoundError
    | CloudTrailARNInvalidError
    | ConflictError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InvalidTagParameterError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | ResourceNotFoundError
    | ResourceTypeNotSupportedError
    | TagsLimitExceededError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(
    args: CancelQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelQueryCommandOutput,
    | SdkError
    | ConflictError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InactiveQueryError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | QueryIdNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateChannelCommandOutput,
    | SdkError
    | ChannelAlreadyExistsError
    | ChannelMaxLimitExceededError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InvalidEventDataStoreCategoryError
    | InvalidParameterError
    | InvalidSourceError
    | InvalidTagParameterError
    | OperationNotPermittedError
    | TagsLimitExceededError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDashboardCommandOutput,
    | SdkError
    | ConflictError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InsufficientEncryptionPolicyError
    | InvalidQueryStatementError
    | InvalidTagParameterError
    | ServiceQuotaExceededError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateEventDataStoreCommand}
   */
  createEventDataStore(
    args: CreateEventDataStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventDataStoreCommandOutput,
    | SdkError
    | CloudTrailAccessNotEnabledError
    | ConflictError
    | EventDataStoreAlreadyExistsError
    | EventDataStoreMaxLimitExceededError
    | InsufficientDependencyServiceAccessPermissionError
    | InsufficientEncryptionPolicyError
    | InvalidEventSelectorsError
    | InvalidKmsKeyIdError
    | InvalidParameterError
    | InvalidTagParameterError
    | KmsError
    | KmsKeyNotFoundError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateTrailCommand}
   */
  createTrail(
    args: CreateTrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTrailCommandOutput,
    | SdkError
    | CloudTrailAccessNotEnabledError
    | CloudTrailInvalidClientTokenIdError
    | CloudWatchLogsDeliveryUnavailableError
    | ConflictError
    | InsufficientDependencyServiceAccessPermissionError
    | InsufficientEncryptionPolicyError
    | InsufficientS3BucketPolicyError
    | InsufficientSnsTopicPolicyError
    | InvalidCloudWatchLogsLogGroupArnError
    | InvalidCloudWatchLogsRoleArnError
    | InvalidKmsKeyIdError
    | InvalidParameterCombinationError
    | InvalidParameterError
    | InvalidS3BucketNameError
    | InvalidS3PrefixError
    | InvalidSnsTopicNameError
    | InvalidTagParameterError
    | InvalidTrailNameError
    | KmsError
    | KmsKeyDisabledError
    | KmsKeyNotFoundError
    | MaximumNumberOfTrailsExceededError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | S3BucketDoesNotExistError
    | TagsLimitExceededError
    | ThrottlingError
    | TrailAlreadyExistsError
    | TrailNotProvidedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteChannelCommandOutput,
    SdkError | ChannelARNInvalidError | ChannelNotFoundError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDashboardCommandOutput,
    SdkError | ConflictError | ResourceNotFoundError | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteEventDataStoreCommand}
   */
  deleteEventDataStore(
    args: DeleteEventDataStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventDataStoreCommandOutput,
    | SdkError
    | ChannelExistsForEDSError
    | ConflictError
    | EventDataStoreARNInvalidError
    | EventDataStoreFederationEnabledError
    | EventDataStoreHasOngoingImportError
    | EventDataStoreNotFoundError
    | EventDataStoreTerminationProtectedError
    | InactiveEventDataStoreError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | SdkError
    | ConflictError
    | OperationNotPermittedError
    | ResourceARNNotValidError
    | ResourceNotFoundError
    | ResourcePolicyNotFoundError
    | ResourceTypeNotSupportedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteTrailCommand}
   */
  deleteTrail(
    args: DeleteTrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrailCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | ConflictError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidHomeRegionError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | ThrottlingError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeregisterOrganizationDelegatedAdminCommand}
   */
  deregisterOrganizationDelegatedAdmin(
    args: DeregisterOrganizationDelegatedAdminCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterOrganizationDelegatedAdminCommandOutput,
    | SdkError
    | AccountNotFoundError
    | AccountNotRegisteredError
    | CloudTrailAccessNotEnabledError
    | ConflictError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidParameterError
    | NotOrganizationManagementAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DescribeQueryCommand}
   */
  describeQuery(
    args: DescribeQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeQueryCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | QueryIdNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DescribeTrailsCommand}
   */
  describeTrails(
    args: DescribeTrailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrailsCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DisableFederationCommand}
   */
  disableFederation(
    args: DisableFederationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableFederationCommandOutput,
    | SdkError
    | AccessDeniedError
    | CloudTrailAccessNotEnabledError
    | ConcurrentModificationError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link EnableFederationCommand}
   */
  enableFederation(
    args: EnableFederationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableFederationCommandOutput,
    | SdkError
    | AccessDeniedError
    | CloudTrailAccessNotEnabledError
    | ConcurrentModificationError
    | EventDataStoreARNInvalidError
    | EventDataStoreFederationEnabledError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GenerateQueryCommand}
   */
  generateQuery(
    args: GenerateQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateQueryCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | GenerateResponseError
    | InactiveEventDataStoreError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(
    args: GetChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetChannelCommandOutput,
    SdkError | ChannelARNInvalidError | ChannelNotFoundError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link GetDashboardCommand}
   */
  getDashboard(
    args: GetDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDashboardCommandOutput,
    SdkError | ResourceNotFoundError | UnsupportedOperationError
  >;

  /**
   * @see {@link GetEventDataStoreCommand}
   */
  getEventDataStore(
    args: GetEventDataStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEventDataStoreCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetEventSelectorsCommand}
   */
  getEventSelectors(
    args: GetEventSelectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEventSelectorsCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetImportCommand}
   */
  getImport(
    args: GetImportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetImportCommandOutput,
    SdkError | ImportNotFoundError | InvalidParameterError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link GetInsightSelectorsCommand}
   */
  getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInsightSelectorsCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | InsightNotEnabledError
    | InvalidParameterCombinationError
    | InvalidParameterError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | ThrottlingError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueryResultsCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InsufficientEncryptionPolicyError
    | InvalidMaxResultsError
    | InvalidNextTokenError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | QueryIdNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    | SdkError
    | OperationNotPermittedError
    | ResourceARNNotValidError
    | ResourceNotFoundError
    | ResourcePolicyNotFoundError
    | ResourceTypeNotSupportedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetTrailCommand}
   */
  getTrail(
    args: GetTrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTrailCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | InvalidTrailNameError
    | OperationNotPermittedError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetTrailStatusCommand}
   */
  getTrailStatus(
    args: GetTrailStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTrailStatusCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | InvalidTrailNameError
    | OperationNotPermittedError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(
    args: ListChannelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListChannelsCommandOutput,
    SdkError | InvalidNextTokenError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDashboardsCommandOutput,
    SdkError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListEventDataStoresCommand}
   */
  listEventDataStores(
    args: ListEventDataStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventDataStoresCommandOutput,
    | SdkError
    | InvalidMaxResultsError
    | InvalidNextTokenError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListImportFailuresCommand}
   */
  listImportFailures(
    args: ListImportFailuresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImportFailuresCommandOutput,
    SdkError | InvalidNextTokenError | InvalidParameterError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(
    args: ListImportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImportsCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | InvalidNextTokenError
    | InvalidParameterError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListInsightsMetricDataCommand}
   */
  listInsightsMetricData(
    args: ListInsightsMetricDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInsightsMetricDataCommandOutput,
    SdkError | InvalidParameterError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPublicKeysCommandOutput,
    SdkError | InvalidTimeRangeError | InvalidTokenError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueriesCommand}
   */
  listQueries(
    args: ListQueriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListQueriesCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InvalidDateRangeError
    | InvalidMaxResultsError
    | InvalidNextTokenError
    | InvalidParameterError
    | InvalidQueryStatusError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsCommandOutput,
    | SdkError
    | ChannelARNInvalidError
    | CloudTrailARNInvalidError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InvalidTokenError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | ResourceNotFoundError
    | ResourceTypeNotSupportedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListTrailsCommand}
   */
  listTrails(
    args: ListTrailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTrailsCommandOutput,
    SdkError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link LookupEventsCommand}
   */
  lookupEvents(
    args: LookupEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    LookupEventsCommandOutput,
    | SdkError
    | InvalidEventCategoryError
    | InvalidLookupAttributesError
    | InvalidMaxResultsError
    | InvalidNextTokenError
    | InvalidTimeRangeError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PutEventSelectorsCommand}
   */
  putEventSelectors(
    args: PutEventSelectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutEventSelectorsCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | ConflictError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidEventSelectorsError
    | InvalidHomeRegionError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | ThrottlingError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PutInsightSelectorsCommand}
   */
  putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutInsightSelectorsCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | InsufficientEncryptionPolicyError
    | InsufficientS3BucketPolicyError
    | InvalidHomeRegionError
    | InvalidInsightSelectorsError
    | InvalidParameterCombinationError
    | InvalidParameterError
    | InvalidTrailNameError
    | KmsError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | S3BucketDoesNotExistError
    | ThrottlingError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | SdkError
    | ConflictError
    | OperationNotPermittedError
    | ResourceARNNotValidError
    | ResourceNotFoundError
    | ResourcePolicyNotValidError
    | ResourceTypeNotSupportedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link RegisterOrganizationDelegatedAdminCommand}
   */
  registerOrganizationDelegatedAdmin(
    args: RegisterOrganizationDelegatedAdminCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterOrganizationDelegatedAdminCommandOutput,
    | SdkError
    | AccountNotFoundError
    | AccountRegisteredError
    | CannotDelegateManagementAccountError
    | CloudTrailAccessNotEnabledError
    | ConflictError
    | DelegatedAdminAccountLimitExceededError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidParameterError
    | NotOrganizationManagementAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsCommandOutput,
    | SdkError
    | ChannelARNInvalidError
    | ChannelNotFoundError
    | CloudTrailARNInvalidError
    | ConflictError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InvalidTagParameterError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | ResourceNotFoundError
    | ResourceTypeNotSupportedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link RestoreEventDataStoreCommand}
   */
  restoreEventDataStore(
    args: RestoreEventDataStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreEventDataStoreCommandOutput,
    | SdkError
    | CloudTrailAccessNotEnabledError
    | EventDataStoreARNInvalidError
    | EventDataStoreMaxLimitExceededError
    | EventDataStoreNotFoundError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidEventDataStoreStatusError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StartDashboardRefreshCommand}
   */
  startDashboardRefresh(
    args: StartDashboardRefreshCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDashboardRefreshCommandOutput,
    | SdkError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StartEventDataStoreIngestionCommand}
   */
  startEventDataStoreIngestion(
    args: StartEventDataStoreIngestionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartEventDataStoreIngestionCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidEventDataStoreCategoryError
    | InvalidEventDataStoreStatusError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(
    args: StartImportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartImportCommandOutput,
    | SdkError
    | AccountHasOngoingImportError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | ImportNotFoundError
    | InactiveEventDataStoreError
    | InsufficientEncryptionPolicyError
    | InvalidEventDataStoreCategoryError
    | InvalidEventDataStoreStatusError
    | InvalidImportSourceError
    | InvalidParameterError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StartLoggingCommand}
   */
  startLogging(
    args: StartLoggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartLoggingCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | ConflictError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidHomeRegionError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | ThrottlingError
    | TrailNotFoundError
    | UnsupportedOperationError
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
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InsufficientEncryptionPolicyError
    | InsufficientS3BucketPolicyError
    | InvalidParameterError
    | InvalidQueryStatementError
    | InvalidS3BucketNameError
    | InvalidS3PrefixError
    | MaxConcurrentQueriesError
    | NoManagementAccountSLRExistsError
    | OperationNotPermittedError
    | S3BucketDoesNotExistError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StopEventDataStoreIngestionCommand}
   */
  stopEventDataStoreIngestion(
    args: StopEventDataStoreIngestionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopEventDataStoreIngestionCommandOutput,
    | SdkError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidEventDataStoreCategoryError
    | InvalidEventDataStoreStatusError
    | InvalidParameterError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StopImportCommand}
   */
  stopImport(
    args: StopImportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopImportCommandOutput,
    SdkError | ImportNotFoundError | InvalidParameterError | OperationNotPermittedError | UnsupportedOperationError
  >;

  /**
   * @see {@link StopLoggingCommand}
   */
  stopLogging(
    args: StopLoggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopLoggingCommandOutput,
    | SdkError
    | CloudTrailARNInvalidError
    | ConflictError
    | InsufficientDependencyServiceAccessPermissionError
    | InvalidHomeRegionError
    | InvalidTrailNameError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | ThrottlingError
    | TrailNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateChannelCommandOutput,
    | SdkError
    | ChannelAlreadyExistsError
    | ChannelARNInvalidError
    | ChannelNotFoundError
    | EventDataStoreARNInvalidError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InvalidEventDataStoreCategoryError
    | InvalidParameterError
    | OperationNotPermittedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDashboardCommandOutput,
    | SdkError
    | ConflictError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InsufficientEncryptionPolicyError
    | InvalidQueryStatementError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateEventDataStoreCommand}
   */
  updateEventDataStore(
    args: UpdateEventDataStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventDataStoreCommandOutput,
    | SdkError
    | CloudTrailAccessNotEnabledError
    | EventDataStoreAlreadyExistsError
    | EventDataStoreARNInvalidError
    | EventDataStoreHasOngoingImportError
    | EventDataStoreNotFoundError
    | InactiveEventDataStoreError
    | InsufficientDependencyServiceAccessPermissionError
    | InsufficientEncryptionPolicyError
    | InvalidEventSelectorsError
    | InvalidInsightSelectorsError
    | InvalidKmsKeyIdError
    | InvalidParameterError
    | KmsError
    | KmsKeyNotFoundError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateTrailCommand}
   */
  updateTrail(
    args: UpdateTrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTrailCommandOutput,
    | SdkError
    | CloudTrailAccessNotEnabledError
    | CloudTrailARNInvalidError
    | CloudTrailInvalidClientTokenIdError
    | CloudWatchLogsDeliveryUnavailableError
    | ConflictError
    | InsufficientDependencyServiceAccessPermissionError
    | InsufficientEncryptionPolicyError
    | InsufficientS3BucketPolicyError
    | InsufficientSnsTopicPolicyError
    | InvalidCloudWatchLogsLogGroupArnError
    | InvalidCloudWatchLogsRoleArnError
    | InvalidEventSelectorsError
    | InvalidHomeRegionError
    | InvalidKmsKeyIdError
    | InvalidParameterCombinationError
    | InvalidParameterError
    | InvalidS3BucketNameError
    | InvalidS3PrefixError
    | InvalidSnsTopicNameError
    | InvalidTrailNameError
    | KmsError
    | KmsKeyDisabledError
    | KmsKeyNotFoundError
    | NoManagementAccountSLRExistsError
    | NotOrganizationMasterAccountError
    | OperationNotPermittedError
    | OrganizationNotInAllFeaturesModeError
    | OrganizationsNotInUseError
    | S3BucketDoesNotExistError
    | ThrottlingError
    | TrailNotFoundError
    | TrailNotProvidedError
    | UnsupportedOperationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudTrailService = Effect.gen(function*(_) {
  const client = yield* _(CloudTrailClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (e instanceof CloudTrailServiceException && AllServiceErrors.includes(e.name)) {
            const ServiceException = Data.tagged<
              TaggedException<CloudTrailServiceException>
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
  }, {}) as CloudTrailService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudTrailService extends Effect.Tag("@effect-aws/client-cloudtrail/CloudTrailService")<
  CloudTrailService,
  CloudTrailService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeCloudTrailService).pipe(
    Layer.provide(CloudTrailClientInstanceLayer),
    Layer.provide(DefaultCloudTrailClientConfigLayer),
  );
  static readonly layer = (config: CloudTrailClientConfig) =>
    Layer.effect(this, makeCloudTrailService).pipe(
      Layer.provide(CloudTrailClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          CloudTrailClientInstanceConfig,
          makeDefaultCloudTrailClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CloudTrailClientConfig) => CloudTrailClient,
  ) =>
    Layer.effect(this, makeCloudTrailService).pipe(
      Layer.provide(
        Layer.effect(
          CloudTrailClientInstance,
          Effect.map(makeDefaultCloudTrailClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias CloudTrailService
 */
export const CloudTrail = CloudTrailService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CloudTrail.baseLayer instead
 */
export const BaseCloudTrailServiceLayer = Layer.effect(
  CloudTrailService,
  makeCloudTrailService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CloudTrail.layer instead
 */
export const CloudTrailServiceLayer = BaseCloudTrailServiceLayer.pipe(
  Layer.provide(CloudTrailClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CloudTrail.defaultLayer instead
 */
export const DefaultCloudTrailServiceLayer = CloudTrailService.defaultLayer;
