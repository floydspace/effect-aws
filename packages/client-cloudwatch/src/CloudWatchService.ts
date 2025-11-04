/**
 * @since 1.0.0
 */
import {
  type CloudWatchClient,
  type CloudWatchClientConfig,
  DeleteAlarmsCommand,
  type DeleteAlarmsCommandInput,
  type DeleteAlarmsCommandOutput,
  DeleteAnomalyDetectorCommand,
  type DeleteAnomalyDetectorCommandInput,
  type DeleteAnomalyDetectorCommandOutput,
  DeleteDashboardsCommand,
  type DeleteDashboardsCommandInput,
  type DeleteDashboardsCommandOutput,
  DeleteInsightRulesCommand,
  type DeleteInsightRulesCommandInput,
  type DeleteInsightRulesCommandOutput,
  DeleteMetricStreamCommand,
  type DeleteMetricStreamCommandInput,
  type DeleteMetricStreamCommandOutput,
  DescribeAlarmContributorsCommand,
  type DescribeAlarmContributorsCommandInput,
  type DescribeAlarmContributorsCommandOutput,
  DescribeAlarmHistoryCommand,
  type DescribeAlarmHistoryCommandInput,
  type DescribeAlarmHistoryCommandOutput,
  DescribeAlarmsCommand,
  type DescribeAlarmsCommandInput,
  type DescribeAlarmsCommandOutput,
  DescribeAlarmsForMetricCommand,
  type DescribeAlarmsForMetricCommandInput,
  type DescribeAlarmsForMetricCommandOutput,
  DescribeAnomalyDetectorsCommand,
  type DescribeAnomalyDetectorsCommandInput,
  type DescribeAnomalyDetectorsCommandOutput,
  DescribeInsightRulesCommand,
  type DescribeInsightRulesCommandInput,
  type DescribeInsightRulesCommandOutput,
  DisableAlarmActionsCommand,
  type DisableAlarmActionsCommandInput,
  type DisableAlarmActionsCommandOutput,
  DisableInsightRulesCommand,
  type DisableInsightRulesCommandInput,
  type DisableInsightRulesCommandOutput,
  EnableAlarmActionsCommand,
  type EnableAlarmActionsCommandInput,
  type EnableAlarmActionsCommandOutput,
  EnableInsightRulesCommand,
  type EnableInsightRulesCommandInput,
  type EnableInsightRulesCommandOutput,
  GetDashboardCommand,
  type GetDashboardCommandInput,
  type GetDashboardCommandOutput,
  GetInsightRuleReportCommand,
  type GetInsightRuleReportCommandInput,
  type GetInsightRuleReportCommandOutput,
  GetMetricDataCommand,
  type GetMetricDataCommandInput,
  type GetMetricDataCommandOutput,
  GetMetricStatisticsCommand,
  type GetMetricStatisticsCommandInput,
  type GetMetricStatisticsCommandOutput,
  GetMetricStreamCommand,
  type GetMetricStreamCommandInput,
  type GetMetricStreamCommandOutput,
  GetMetricWidgetImageCommand,
  type GetMetricWidgetImageCommandInput,
  type GetMetricWidgetImageCommandOutput,
  ListDashboardsCommand,
  type ListDashboardsCommandInput,
  type ListDashboardsCommandOutput,
  ListManagedInsightRulesCommand,
  type ListManagedInsightRulesCommandInput,
  type ListManagedInsightRulesCommandOutput,
  ListMetricsCommand,
  type ListMetricsCommandInput,
  type ListMetricsCommandOutput,
  ListMetricStreamsCommand,
  type ListMetricStreamsCommandInput,
  type ListMetricStreamsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutAnomalyDetectorCommand,
  type PutAnomalyDetectorCommandInput,
  type PutAnomalyDetectorCommandOutput,
  PutCompositeAlarmCommand,
  type PutCompositeAlarmCommandInput,
  type PutCompositeAlarmCommandOutput,
  PutDashboardCommand,
  type PutDashboardCommandInput,
  type PutDashboardCommandOutput,
  PutInsightRuleCommand,
  type PutInsightRuleCommandInput,
  type PutInsightRuleCommandOutput,
  PutManagedInsightRulesCommand,
  type PutManagedInsightRulesCommandInput,
  type PutManagedInsightRulesCommandOutput,
  PutMetricAlarmCommand,
  type PutMetricAlarmCommandInput,
  type PutMetricAlarmCommandOutput,
  PutMetricDataCommand,
  type PutMetricDataCommandInput,
  type PutMetricDataCommandOutput,
  PutMetricStreamCommand,
  type PutMetricStreamCommandInput,
  type PutMetricStreamCommandOutput,
  SetAlarmStateCommand,
  type SetAlarmStateCommandInput,
  type SetAlarmStateCommandOutput,
  StartMetricStreamsCommand,
  type StartMetricStreamsCommandInput,
  type StartMetricStreamsCommandOutput,
  StopMetricStreamsCommand,
  type StopMetricStreamsCommandInput,
  type StopMetricStreamsCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
} from "@aws-sdk/client-cloudwatch";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./CloudWatchClientInstance.js";
import * as CloudWatchServiceConfig from "./CloudWatchServiceConfig.js";
import type {
  ConcurrentModificationError,
  ConflictError,
  DashboardInvalidInputError,
  DashboardNotFoundError,
  InternalServiceFaultError,
  InvalidFormatFaultError,
  InvalidNextTokenError,
  InvalidParameterCombinationError,
  InvalidParameterValueError,
  LimitExceededError,
  LimitExceededFaultError,
  MissingRequiredParameterError,
  ResourceNotFoundError,
  ResourceNotFoundExceptionError,
  SdkError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  DeleteAlarmsCommand,
  DeleteAnomalyDetectorCommand,
  DeleteDashboardsCommand,
  DeleteInsightRulesCommand,
  DeleteMetricStreamCommand,
  DescribeAlarmContributorsCommand,
  DescribeAlarmHistoryCommand,
  DescribeAlarmsCommand,
  DescribeAlarmsForMetricCommand,
  DescribeAnomalyDetectorsCommand,
  DescribeInsightRulesCommand,
  DisableAlarmActionsCommand,
  DisableInsightRulesCommand,
  EnableAlarmActionsCommand,
  EnableInsightRulesCommand,
  GetDashboardCommand,
  GetInsightRuleReportCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  GetMetricStreamCommand,
  GetMetricWidgetImageCommand,
  ListDashboardsCommand,
  ListManagedInsightRulesCommand,
  ListMetricStreamsCommand,
  ListMetricsCommand,
  ListTagsForResourceCommand,
  PutAnomalyDetectorCommand,
  PutCompositeAlarmCommand,
  PutDashboardCommand,
  PutInsightRuleCommand,
  PutManagedInsightRulesCommand,
  PutMetricAlarmCommand,
  PutMetricDataCommand,
  PutMetricStreamCommand,
  SetAlarmStateCommand,
  StartMetricStreamsCommand,
  StopMetricStreamsCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

interface CloudWatchService$ {
  readonly _: unique symbol;

  /**
   * @see {@link DeleteAlarmsCommand}
   */
  deleteAlarms(
    args: DeleteAlarmsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAlarmsCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteAnomalyDetectorCommand}
   */
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAnomalyDetectorCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | MissingRequiredParameterError
    | ResourceNotFoundExceptionError
  >;

  /**
   * @see {@link DeleteDashboardsCommand}
   */
  deleteDashboards(
    args: DeleteDashboardsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDashboardsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | DashboardNotFoundError
    | InternalServiceFaultError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteInsightRulesCommand}
   */
  deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInsightRulesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link DeleteMetricStreamCommand}
   */
  deleteMetricStream(
    args: DeleteMetricStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMetricStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link DescribeAlarmContributorsCommand}
   */
  describeAlarmContributors(
    args: DescribeAlarmContributorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmContributorsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeAlarmHistoryCommand}
   */
  describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmHistoryCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAlarmsCommand}
   */
  describeAlarms(
    args: DescribeAlarmsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAlarmsForMetricCommand}
   */
  describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmsForMetricCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeAnomalyDetectorsCommand}
   */
  describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAnomalyDetectorsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidNextTokenError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
  >;

  /**
   * @see {@link DescribeInsightRulesCommand}
   */
  describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInsightRulesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link DisableAlarmActionsCommand}
   */
  disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableAlarmActionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DisableInsightRulesCommand}
   */
  disableInsightRules(
    args: DisableInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableInsightRulesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link EnableAlarmActionsCommand}
   */
  enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableAlarmActionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link EnableInsightRulesCommand}
   */
  enableInsightRules(
    args: EnableInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableInsightRulesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | LimitExceededError | MissingRequiredParameterError
  >;

  /**
   * @see {@link GetDashboardCommand}
   */
  getDashboard(
    args: GetDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDashboardCommandOutput,
    Cause.TimeoutException | SdkError | DashboardNotFoundError | InternalServiceFaultError | InvalidParameterValueError
  >;

  /**
   * @see {@link GetInsightRuleReportCommand}
   */
  getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInsightRuleReportCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterValueError
    | MissingRequiredParameterError
    | ResourceNotFoundExceptionError
  >;

  /**
   * @see {@link GetMetricDataCommand}
   */
  getMetricData(
    args: GetMetricDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricDataCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link GetMetricStatisticsCommand}
   */
  getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricStatisticsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link GetMetricStreamCommand}
   */
  getMetricStream(
    args: GetMetricStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | MissingRequiredParameterError
    | ResourceNotFoundExceptionError
  >;

  /**
   * @see {@link GetMetricWidgetImageCommand}
   */
  getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricWidgetImageCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDashboardsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceFaultError | InvalidParameterValueError
  >;

  /**
   * @see {@link ListManagedInsightRulesCommand}
   */
  listManagedInsightRules(
    args: ListManagedInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListManagedInsightRulesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidNextTokenError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link ListMetricStreamsCommand}
   */
  listMetricStreams(
    args: ListMetricStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMetricStreamsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidNextTokenError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link ListMetricsCommand}
   */
  listMetrics(
    args: ListMetricsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMetricsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceFaultError | InvalidParameterValueError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterValueError
    | ResourceNotFoundExceptionError
  >;

  /**
   * @see {@link PutAnomalyDetectorCommand}
   */
  putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAnomalyDetectorCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | LimitExceededError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link PutCompositeAlarmCommand}
   */
  putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutCompositeAlarmCommandOutput,
    Cause.TimeoutException | SdkError | LimitExceededFaultError
  >;

  /**
   * @see {@link PutDashboardCommand}
   */
  putDashboard(
    args: PutDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDashboardCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | DashboardInvalidInputError | InternalServiceFaultError
  >;

  /**
   * @see {@link PutInsightRuleCommand}
   */
  putInsightRule(
    args: PutInsightRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutInsightRuleCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | LimitExceededError | MissingRequiredParameterError
  >;

  /**
   * @see {@link PutManagedInsightRulesCommand}
   */
  putManagedInsightRules(
    args: PutManagedInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutManagedInsightRulesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link PutMetricAlarmCommand}
   */
  putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricAlarmCommandOutput,
    Cause.TimeoutException | SdkError | LimitExceededFaultError
  >;

  /**
   * @see {@link PutMetricDataCommand}
   */
  putMetricData(
    args: PutMetricDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricDataCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link PutMetricStreamCommand}
   */
  putMetricStream(
    args: PutMetricStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalServiceFaultError
    | InvalidParameterCombinationError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link SetAlarmStateCommand}
   */
  setAlarmState(
    args: SetAlarmStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetAlarmStateCommandOutput,
    Cause.TimeoutException | SdkError | InvalidFormatFaultError | ResourceNotFoundError
  >;

  /**
   * @see {@link StartMetricStreamsCommand}
   */
  startMetricStreams(
    args: StartMetricStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMetricStreamsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link StopMetricStreamsCommand}
   */
  stopMetricStreams(
    args: StopMetricStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopMetricStreamsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceFaultError
    | InvalidParameterValueError
    | MissingRequiredParameterError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | ConflictError
    | InternalServiceFaultError
    | InvalidParameterValueError
    | ResourceNotFoundExceptionError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | ConflictError
    | InternalServiceFaultError
    | InvalidParameterValueError
    | ResourceNotFoundExceptionError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchService = Effect.gen(function*() {
  const client = yield* Instance.CloudWatchClientInstance;

  return yield* Service.fromClientAndCommands<CloudWatchService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CloudWatchServiceConfig.toCloudWatchClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudWatchService extends Effect.Tag("@effect-aws/client-cloudwatch/CloudWatchService")<
  CloudWatchService,
  CloudWatchService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeCloudWatchService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: CloudWatchService.Config) =>
    Layer.effect(this, makeCloudWatchService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(CloudWatchServiceConfig.setCloudWatchServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CloudWatchClientConfig) => CloudWatchClient,
  ) =>
    Layer.effect(this, makeCloudWatchService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CloudWatchClientInstance,
          Effect.map(CloudWatchServiceConfig.toCloudWatchClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CloudWatchService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CloudWatchClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = CloudWatchService$;
}
