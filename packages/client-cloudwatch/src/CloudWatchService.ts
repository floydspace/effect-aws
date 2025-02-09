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
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import * as Instance from "./CloudWatchClientInstance.js";
import * as CloudWatchServiceConfig from "./CloudWatchServiceConfig.js";
import type {
  ConcurrentModificationError,
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
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  DeleteAlarmsCommand,
  DeleteAnomalyDetectorCommand,
  DeleteDashboardsCommand,
  DeleteInsightRulesCommand,
  DeleteMetricStreamCommand,
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
    SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteAnomalyDetectorCommand}
   */
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAnomalyDetectorCommandOutput,
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
    SdkError | DashboardNotFoundError | InternalServiceFaultError | InvalidParameterValueError
  >;

  /**
   * @see {@link DeleteInsightRulesCommand}
   */
  deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInsightRulesCommandOutput,
    SdkError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link DeleteMetricStreamCommand}
   */
  deleteMetricStream(
    args: DeleteMetricStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMetricStreamCommandOutput,
    SdkError | InternalServiceFaultError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link DescribeAlarmHistoryCommand}
   */
  describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmHistoryCommandOutput,
    SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAlarmsCommand}
   */
  describeAlarms(
    args: DescribeAlarmsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmsCommandOutput,
    SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAlarmsForMetricCommand}
   */
  describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAlarmsForMetricCommandOutput,
    SdkError
  >;

  /**
   * @see {@link DescribeAnomalyDetectorsCommand}
   */
  describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAnomalyDetectorsCommandOutput,
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
    SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link DisableAlarmActionsCommand}
   */
  disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableAlarmActionsCommandOutput,
    SdkError
  >;

  /**
   * @see {@link DisableInsightRulesCommand}
   */
  disableInsightRules(
    args: DisableInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableInsightRulesCommandOutput,
    SdkError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link EnableAlarmActionsCommand}
   */
  enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableAlarmActionsCommandOutput,
    SdkError
  >;

  /**
   * @see {@link EnableInsightRulesCommand}
   */
  enableInsightRules(
    args: EnableInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableInsightRulesCommandOutput,
    SdkError | InvalidParameterValueError | LimitExceededError | MissingRequiredParameterError
  >;

  /**
   * @see {@link GetDashboardCommand}
   */
  getDashboard(
    args: GetDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDashboardCommandOutput,
    SdkError | DashboardNotFoundError | InternalServiceFaultError | InvalidParameterValueError
  >;

  /**
   * @see {@link GetInsightRuleReportCommand}
   */
  getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInsightRuleReportCommandOutput,
    SdkError | InvalidParameterValueError | MissingRequiredParameterError | ResourceNotFoundExceptionError
  >;

  /**
   * @see {@link GetMetricDataCommand}
   */
  getMetricData(
    args: GetMetricDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricDataCommandOutput,
    SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link GetMetricStatisticsCommand}
   */
  getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMetricStatisticsCommandOutput,
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
    SdkError
  >;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDashboardsCommandOutput,
    SdkError | InternalServiceFaultError | InvalidParameterValueError
  >;

  /**
   * @see {@link ListManagedInsightRulesCommand}
   */
  listManagedInsightRules(
    args: ListManagedInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListManagedInsightRulesCommandOutput,
    SdkError | InvalidNextTokenError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link ListMetricStreamsCommand}
   */
  listMetricStreams(
    args: ListMetricStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMetricStreamsCommandOutput,
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
    SdkError | InternalServiceFaultError | InvalidParameterValueError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InternalServiceFaultError | InvalidParameterValueError | ResourceNotFoundExceptionError
  >;

  /**
   * @see {@link PutAnomalyDetectorCommand}
   */
  putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAnomalyDetectorCommandOutput,
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
    SdkError | LimitExceededFaultError
  >;

  /**
   * @see {@link PutDashboardCommand}
   */
  putDashboard(
    args: PutDashboardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDashboardCommandOutput,
    SdkError | DashboardInvalidInputError | InternalServiceFaultError
  >;

  /**
   * @see {@link PutInsightRuleCommand}
   */
  putInsightRule(
    args: PutInsightRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutInsightRuleCommandOutput,
    SdkError | InvalidParameterValueError | LimitExceededError | MissingRequiredParameterError
  >;

  /**
   * @see {@link PutManagedInsightRulesCommand}
   */
  putManagedInsightRules(
    args: PutManagedInsightRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutManagedInsightRulesCommandOutput,
    SdkError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link PutMetricAlarmCommand}
   */
  putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricAlarmCommandOutput,
    SdkError | LimitExceededFaultError
  >;

  /**
   * @see {@link PutMetricDataCommand}
   */
  putMetricData(
    args: PutMetricDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetricDataCommandOutput,
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
    SdkError | InvalidFormatFaultError | ResourceNotFoundError
  >;

  /**
   * @see {@link StartMetricStreamsCommand}
   */
  startMetricStreams(
    args: StartMetricStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMetricStreamsCommandOutput,
    SdkError | InternalServiceFaultError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link StopMetricStreamsCommand}
   */
  stopMetricStreams(
    args: StopMetricStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopMetricStreamsCommandOutput,
    SdkError | InternalServiceFaultError | InvalidParameterValueError | MissingRequiredParameterError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | ConcurrentModificationError
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
    | SdkError
    | ConcurrentModificationError
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

  return Service.fromClientAndCommands<CloudWatchService$>(client, commands, AllServiceErrors);
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
}
