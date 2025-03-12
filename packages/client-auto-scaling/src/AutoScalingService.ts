/**
 * @since 1.0.0
 */
import {
  AttachInstancesCommand,
  type AttachInstancesCommandInput,
  type AttachInstancesCommandOutput,
  AttachLoadBalancersCommand,
  type AttachLoadBalancersCommandInput,
  type AttachLoadBalancersCommandOutput,
  AttachLoadBalancerTargetGroupsCommand,
  type AttachLoadBalancerTargetGroupsCommandInput,
  type AttachLoadBalancerTargetGroupsCommandOutput,
  AttachTrafficSourcesCommand,
  type AttachTrafficSourcesCommandInput,
  type AttachTrafficSourcesCommandOutput,
  type AutoScalingClient,
  type AutoScalingClientConfig,
  BatchDeleteScheduledActionCommand,
  type BatchDeleteScheduledActionCommandInput,
  type BatchDeleteScheduledActionCommandOutput,
  BatchPutScheduledUpdateGroupActionCommand,
  type BatchPutScheduledUpdateGroupActionCommandInput,
  type BatchPutScheduledUpdateGroupActionCommandOutput,
  CancelInstanceRefreshCommand,
  type CancelInstanceRefreshCommandInput,
  type CancelInstanceRefreshCommandOutput,
  CompleteLifecycleActionCommand,
  type CompleteLifecycleActionCommandInput,
  type CompleteLifecycleActionCommandOutput,
  CreateAutoScalingGroupCommand,
  type CreateAutoScalingGroupCommandInput,
  type CreateAutoScalingGroupCommandOutput,
  CreateLaunchConfigurationCommand,
  type CreateLaunchConfigurationCommandInput,
  type CreateLaunchConfigurationCommandOutput,
  CreateOrUpdateTagsCommand,
  type CreateOrUpdateTagsCommandInput,
  type CreateOrUpdateTagsCommandOutput,
  DeleteAutoScalingGroupCommand,
  type DeleteAutoScalingGroupCommandInput,
  type DeleteAutoScalingGroupCommandOutput,
  DeleteLaunchConfigurationCommand,
  type DeleteLaunchConfigurationCommandInput,
  type DeleteLaunchConfigurationCommandOutput,
  DeleteLifecycleHookCommand,
  type DeleteLifecycleHookCommandInput,
  type DeleteLifecycleHookCommandOutput,
  DeleteNotificationConfigurationCommand,
  type DeleteNotificationConfigurationCommandInput,
  type DeleteNotificationConfigurationCommandOutput,
  DeletePolicyCommand,
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeleteScheduledActionCommand,
  type DeleteScheduledActionCommandInput,
  type DeleteScheduledActionCommandOutput,
  DeleteTagsCommand,
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteWarmPoolCommand,
  type DeleteWarmPoolCommandInput,
  type DeleteWarmPoolCommandOutput,
  DescribeAccountLimitsCommand,
  type DescribeAccountLimitsCommandInput,
  type DescribeAccountLimitsCommandOutput,
  DescribeAdjustmentTypesCommand,
  type DescribeAdjustmentTypesCommandInput,
  type DescribeAdjustmentTypesCommandOutput,
  DescribeAutoScalingGroupsCommand,
  type DescribeAutoScalingGroupsCommandInput,
  type DescribeAutoScalingGroupsCommandOutput,
  DescribeAutoScalingInstancesCommand,
  type DescribeAutoScalingInstancesCommandInput,
  type DescribeAutoScalingInstancesCommandOutput,
  DescribeAutoScalingNotificationTypesCommand,
  type DescribeAutoScalingNotificationTypesCommandInput,
  type DescribeAutoScalingNotificationTypesCommandOutput,
  DescribeInstanceRefreshesCommand,
  type DescribeInstanceRefreshesCommandInput,
  type DescribeInstanceRefreshesCommandOutput,
  DescribeLaunchConfigurationsCommand,
  type DescribeLaunchConfigurationsCommandInput,
  type DescribeLaunchConfigurationsCommandOutput,
  DescribeLifecycleHooksCommand,
  type DescribeLifecycleHooksCommandInput,
  type DescribeLifecycleHooksCommandOutput,
  DescribeLifecycleHookTypesCommand,
  type DescribeLifecycleHookTypesCommandInput,
  type DescribeLifecycleHookTypesCommandOutput,
  DescribeLoadBalancersCommand,
  type DescribeLoadBalancersCommandInput,
  type DescribeLoadBalancersCommandOutput,
  DescribeLoadBalancerTargetGroupsCommand,
  type DescribeLoadBalancerTargetGroupsCommandInput,
  type DescribeLoadBalancerTargetGroupsCommandOutput,
  DescribeMetricCollectionTypesCommand,
  type DescribeMetricCollectionTypesCommandInput,
  type DescribeMetricCollectionTypesCommandOutput,
  DescribeNotificationConfigurationsCommand,
  type DescribeNotificationConfigurationsCommandInput,
  type DescribeNotificationConfigurationsCommandOutput,
  DescribePoliciesCommand,
  type DescribePoliciesCommandInput,
  type DescribePoliciesCommandOutput,
  DescribeScalingActivitiesCommand,
  type DescribeScalingActivitiesCommandInput,
  type DescribeScalingActivitiesCommandOutput,
  DescribeScalingProcessTypesCommand,
  type DescribeScalingProcessTypesCommandInput,
  type DescribeScalingProcessTypesCommandOutput,
  DescribeScheduledActionsCommand,
  type DescribeScheduledActionsCommandInput,
  type DescribeScheduledActionsCommandOutput,
  DescribeTagsCommand,
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTerminationPolicyTypesCommand,
  type DescribeTerminationPolicyTypesCommandInput,
  type DescribeTerminationPolicyTypesCommandOutput,
  DescribeTrafficSourcesCommand,
  type DescribeTrafficSourcesCommandInput,
  type DescribeTrafficSourcesCommandOutput,
  DescribeWarmPoolCommand,
  type DescribeWarmPoolCommandInput,
  type DescribeWarmPoolCommandOutput,
  DetachInstancesCommand,
  type DetachInstancesCommandInput,
  type DetachInstancesCommandOutput,
  DetachLoadBalancersCommand,
  type DetachLoadBalancersCommandInput,
  type DetachLoadBalancersCommandOutput,
  DetachLoadBalancerTargetGroupsCommand,
  type DetachLoadBalancerTargetGroupsCommandInput,
  type DetachLoadBalancerTargetGroupsCommandOutput,
  DetachTrafficSourcesCommand,
  type DetachTrafficSourcesCommandInput,
  type DetachTrafficSourcesCommandOutput,
  DisableMetricsCollectionCommand,
  type DisableMetricsCollectionCommandInput,
  type DisableMetricsCollectionCommandOutput,
  EnableMetricsCollectionCommand,
  type EnableMetricsCollectionCommandInput,
  type EnableMetricsCollectionCommandOutput,
  EnterStandbyCommand,
  type EnterStandbyCommandInput,
  type EnterStandbyCommandOutput,
  ExecutePolicyCommand,
  type ExecutePolicyCommandInput,
  type ExecutePolicyCommandOutput,
  ExitStandbyCommand,
  type ExitStandbyCommandInput,
  type ExitStandbyCommandOutput,
  GetPredictiveScalingForecastCommand,
  type GetPredictiveScalingForecastCommandInput,
  type GetPredictiveScalingForecastCommandOutput,
  PutLifecycleHookCommand,
  type PutLifecycleHookCommandInput,
  type PutLifecycleHookCommandOutput,
  PutNotificationConfigurationCommand,
  type PutNotificationConfigurationCommandInput,
  type PutNotificationConfigurationCommandOutput,
  PutScalingPolicyCommand,
  type PutScalingPolicyCommandInput,
  type PutScalingPolicyCommandOutput,
  PutScheduledUpdateGroupActionCommand,
  type PutScheduledUpdateGroupActionCommandInput,
  type PutScheduledUpdateGroupActionCommandOutput,
  PutWarmPoolCommand,
  type PutWarmPoolCommandInput,
  type PutWarmPoolCommandOutput,
  RecordLifecycleActionHeartbeatCommand,
  type RecordLifecycleActionHeartbeatCommandInput,
  type RecordLifecycleActionHeartbeatCommandOutput,
  ResumeProcessesCommand,
  type ResumeProcessesCommandInput,
  type ResumeProcessesCommandOutput,
  RollbackInstanceRefreshCommand,
  type RollbackInstanceRefreshCommandInput,
  type RollbackInstanceRefreshCommandOutput,
  SetDesiredCapacityCommand,
  type SetDesiredCapacityCommandInput,
  type SetDesiredCapacityCommandOutput,
  SetInstanceHealthCommand,
  type SetInstanceHealthCommandInput,
  type SetInstanceHealthCommandOutput,
  SetInstanceProtectionCommand,
  type SetInstanceProtectionCommandInput,
  type SetInstanceProtectionCommandOutput,
  StartInstanceRefreshCommand,
  type StartInstanceRefreshCommandInput,
  type StartInstanceRefreshCommandOutput,
  SuspendProcessesCommand,
  type SuspendProcessesCommandInput,
  type SuspendProcessesCommandOutput,
  TerminateInstanceInAutoScalingGroupCommand,
  type TerminateInstanceInAutoScalingGroupCommandInput,
  type TerminateInstanceInAutoScalingGroupCommandOutput,
  UpdateAutoScalingGroupCommand,
  type UpdateAutoScalingGroupCommandInput,
  type UpdateAutoScalingGroupCommandOutput,
} from "@aws-sdk/client-auto-scaling";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import * as Instance from "./AutoScalingClientInstance.js";
import * as AutoScalingServiceConfig from "./AutoScalingServiceConfig.js";
import type {
  ActiveInstanceRefreshNotFoundFaultError,
  AlreadyExistsFaultError,
  InstanceRefreshInProgressFaultError,
  InvalidNextTokenError,
  IrreversibleInstanceRefreshFaultError,
  LimitExceededFaultError,
  ResourceContentionFaultError,
  ResourceInUseFaultError,
  ScalingActivityInProgressFaultError,
  ServiceLinkedRoleError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AttachInstancesCommand,
  AttachLoadBalancerTargetGroupsCommand,
  AttachLoadBalancersCommand,
  AttachTrafficSourcesCommand,
  BatchDeleteScheduledActionCommand,
  BatchPutScheduledUpdateGroupActionCommand,
  CancelInstanceRefreshCommand,
  CompleteLifecycleActionCommand,
  CreateAutoScalingGroupCommand,
  CreateLaunchConfigurationCommand,
  CreateOrUpdateTagsCommand,
  DeleteAutoScalingGroupCommand,
  DeleteLaunchConfigurationCommand,
  DeleteLifecycleHookCommand,
  DeleteNotificationConfigurationCommand,
  DeletePolicyCommand,
  DeleteScheduledActionCommand,
  DeleteTagsCommand,
  DeleteWarmPoolCommand,
  DescribeAccountLimitsCommand,
  DescribeAdjustmentTypesCommand,
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingInstancesCommand,
  DescribeAutoScalingNotificationTypesCommand,
  DescribeInstanceRefreshesCommand,
  DescribeLaunchConfigurationsCommand,
  DescribeLifecycleHookTypesCommand,
  DescribeLifecycleHooksCommand,
  DescribeLoadBalancerTargetGroupsCommand,
  DescribeLoadBalancersCommand,
  DescribeMetricCollectionTypesCommand,
  DescribeNotificationConfigurationsCommand,
  DescribePoliciesCommand,
  DescribeScalingActivitiesCommand,
  DescribeScalingProcessTypesCommand,
  DescribeScheduledActionsCommand,
  DescribeTagsCommand,
  DescribeTerminationPolicyTypesCommand,
  DescribeTrafficSourcesCommand,
  DescribeWarmPoolCommand,
  DetachInstancesCommand,
  DetachLoadBalancerTargetGroupsCommand,
  DetachLoadBalancersCommand,
  DetachTrafficSourcesCommand,
  DisableMetricsCollectionCommand,
  EnableMetricsCollectionCommand,
  EnterStandbyCommand,
  ExecutePolicyCommand,
  ExitStandbyCommand,
  GetPredictiveScalingForecastCommand,
  PutLifecycleHookCommand,
  PutNotificationConfigurationCommand,
  PutScalingPolicyCommand,
  PutScheduledUpdateGroupActionCommand,
  PutWarmPoolCommand,
  RecordLifecycleActionHeartbeatCommand,
  ResumeProcessesCommand,
  RollbackInstanceRefreshCommand,
  SetDesiredCapacityCommand,
  SetInstanceHealthCommand,
  SetInstanceProtectionCommand,
  StartInstanceRefreshCommand,
  SuspendProcessesCommand,
  TerminateInstanceInAutoScalingGroupCommand,
  UpdateAutoScalingGroupCommand,
};

interface AutoScalingService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AttachInstancesCommand}
   */
  attachInstances(
    args: AttachInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachInstancesCommandOutput,
    SdkError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link AttachLoadBalancerTargetGroupsCommand}
   */
  attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachLoadBalancerTargetGroupsCommandOutput,
    SdkError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link AttachLoadBalancersCommand}
   */
  attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachLoadBalancersCommandOutput,
    SdkError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link AttachTrafficSourcesCommand}
   */
  attachTrafficSources(
    args: AttachTrafficSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachTrafficSourcesCommandOutput,
    SdkError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link BatchDeleteScheduledActionCommand}
   */
  batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteScheduledActionCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link BatchPutScheduledUpdateGroupActionCommand}
   */
  batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchPutScheduledUpdateGroupActionCommandOutput,
    SdkError | AlreadyExistsFaultError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link CancelInstanceRefreshCommand}
   */
  cancelInstanceRefresh(
    args: CancelInstanceRefreshCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelInstanceRefreshCommandOutput,
    SdkError | ActiveInstanceRefreshNotFoundFaultError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link CompleteLifecycleActionCommand}
   */
  completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CompleteLifecycleActionCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link CreateAutoScalingGroupCommand}
   */
  createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAutoScalingGroupCommandOutput,
    SdkError | AlreadyExistsFaultError | LimitExceededFaultError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link CreateLaunchConfigurationCommand}
   */
  createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLaunchConfigurationCommandOutput,
    SdkError | AlreadyExistsFaultError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link CreateOrUpdateTagsCommand}
   */
  createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOrUpdateTagsCommandOutput,
    | SdkError
    | AlreadyExistsFaultError
    | LimitExceededFaultError
    | ResourceContentionFaultError
    | ResourceInUseFaultError
  >;

  /**
   * @see {@link DeleteAutoScalingGroupCommand}
   */
  deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAutoScalingGroupCommandOutput,
    SdkError | ResourceContentionFaultError | ResourceInUseFaultError | ScalingActivityInProgressFaultError
  >;

  /**
   * @see {@link DeleteLaunchConfigurationCommand}
   */
  deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLaunchConfigurationCommandOutput,
    SdkError | ResourceContentionFaultError | ResourceInUseFaultError
  >;

  /**
   * @see {@link DeleteLifecycleHookCommand}
   */
  deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLifecycleHookCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DeleteNotificationConfigurationCommand}
   */
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNotificationConfigurationCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyCommandOutput,
    SdkError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link DeleteScheduledActionCommand}
   */
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteScheduledActionCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTagsCommandOutput,
    SdkError | ResourceContentionFaultError | ResourceInUseFaultError
  >;

  /**
   * @see {@link DeleteWarmPoolCommand}
   */
  deleteWarmPool(
    args: DeleteWarmPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteWarmPoolCommandOutput,
    | SdkError
    | LimitExceededFaultError
    | ResourceContentionFaultError
    | ResourceInUseFaultError
    | ScalingActivityInProgressFaultError
  >;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountLimitsCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeAdjustmentTypesCommand}
   */
  describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAdjustmentTypesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeAutoScalingGroupsCommand}
   */
  describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAutoScalingGroupsCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeAutoScalingInstancesCommand}
   */
  describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAutoScalingInstancesCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeAutoScalingNotificationTypesCommand}
   */
  describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAutoScalingNotificationTypesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeInstanceRefreshesCommand}
   */
  describeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceRefreshesCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeLaunchConfigurationsCommand}
   */
  describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLaunchConfigurationsCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeLifecycleHookTypesCommand}
   */
  describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLifecycleHookTypesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeLifecycleHooksCommand}
   */
  describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLifecycleHooksCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeLoadBalancerTargetGroupsCommand}
   */
  describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLoadBalancerTargetGroupsCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLoadBalancersCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeMetricCollectionTypesCommand}
   */
  describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMetricCollectionTypesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeNotificationConfigurationsCommand}
   */
  describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNotificationConfigurationsCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribePoliciesCommand}
   */
  describePolicies(
    args: DescribePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePoliciesCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link DescribeScalingActivitiesCommand}
   */
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScalingActivitiesCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeScalingProcessTypesCommand}
   */
  describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScalingProcessTypesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   */
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScheduledActionsCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTagsCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeTerminationPolicyTypesCommand}
   */
  describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTerminationPolicyTypesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeTrafficSourcesCommand}
   */
  describeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrafficSourcesCommandOutput,
    SdkError | InvalidNextTokenError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DescribeWarmPoolCommand}
   */
  describeWarmPool(
    args: DescribeWarmPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeWarmPoolCommandOutput,
    SdkError | InvalidNextTokenError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DetachInstancesCommand}
   */
  detachInstances(
    args: DetachInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachInstancesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DetachLoadBalancerTargetGroupsCommand}
   */
  detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachLoadBalancerTargetGroupsCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DetachLoadBalancersCommand}
   */
  detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachLoadBalancersCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DetachTrafficSourcesCommand}
   */
  detachTrafficSources(
    args: DetachTrafficSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachTrafficSourcesCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link DisableMetricsCollectionCommand}
   */
  disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableMetricsCollectionCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link EnableMetricsCollectionCommand}
   */
  enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableMetricsCollectionCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link EnterStandbyCommand}
   */
  enterStandby(
    args: EnterStandbyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnterStandbyCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link ExecutePolicyCommand}
   */
  executePolicy(
    args: ExecutePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecutePolicyCommandOutput,
    SdkError | ResourceContentionFaultError | ScalingActivityInProgressFaultError
  >;

  /**
   * @see {@link ExitStandbyCommand}
   */
  exitStandby(
    args: ExitStandbyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExitStandbyCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link GetPredictiveScalingForecastCommand}
   */
  getPredictiveScalingForecast(
    args: GetPredictiveScalingForecastCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPredictiveScalingForecastCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link PutLifecycleHookCommand}
   */
  putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutLifecycleHookCommandOutput,
    SdkError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link PutNotificationConfigurationCommand}
   */
  putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutNotificationConfigurationCommandOutput,
    SdkError | LimitExceededFaultError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link PutScalingPolicyCommand}
   */
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutScalingPolicyCommandOutput,
    SdkError | LimitExceededFaultError | ResourceContentionFaultError | ServiceLinkedRoleError
  >;

  /**
   * @see {@link PutScheduledUpdateGroupActionCommand}
   */
  putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutScheduledUpdateGroupActionCommandOutput,
    SdkError | AlreadyExistsFaultError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link PutWarmPoolCommand}
   */
  putWarmPool(
    args: PutWarmPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutWarmPoolCommandOutput,
    SdkError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link RecordLifecycleActionHeartbeatCommand}
   */
  recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RecordLifecycleActionHeartbeatCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link ResumeProcessesCommand}
   */
  resumeProcesses(
    args: ResumeProcessesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResumeProcessesCommandOutput,
    SdkError | ResourceContentionFaultError | ResourceInUseFaultError
  >;

  /**
   * @see {@link RollbackInstanceRefreshCommand}
   */
  rollbackInstanceRefresh(
    args: RollbackInstanceRefreshCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RollbackInstanceRefreshCommandOutput,
    | SdkError
    | ActiveInstanceRefreshNotFoundFaultError
    | IrreversibleInstanceRefreshFaultError
    | LimitExceededFaultError
    | ResourceContentionFaultError
  >;

  /**
   * @see {@link SetDesiredCapacityCommand}
   */
  setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetDesiredCapacityCommandOutput,
    SdkError | ResourceContentionFaultError | ScalingActivityInProgressFaultError
  >;

  /**
   * @see {@link SetInstanceHealthCommand}
   */
  setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetInstanceHealthCommandOutput,
    SdkError | ResourceContentionFaultError
  >;

  /**
   * @see {@link SetInstanceProtectionCommand}
   */
  setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetInstanceProtectionCommandOutput,
    SdkError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link StartInstanceRefreshCommand}
   */
  startInstanceRefresh(
    args: StartInstanceRefreshCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartInstanceRefreshCommandOutput,
    SdkError | InstanceRefreshInProgressFaultError | LimitExceededFaultError | ResourceContentionFaultError
  >;

  /**
   * @see {@link SuspendProcessesCommand}
   */
  suspendProcesses(
    args: SuspendProcessesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SuspendProcessesCommandOutput,
    SdkError | ResourceContentionFaultError | ResourceInUseFaultError
  >;

  /**
   * @see {@link TerminateInstanceInAutoScalingGroupCommand}
   */
  terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TerminateInstanceInAutoScalingGroupCommandOutput,
    SdkError | ResourceContentionFaultError | ScalingActivityInProgressFaultError
  >;

  /**
   * @see {@link UpdateAutoScalingGroupCommand}
   */
  updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAutoScalingGroupCommandOutput,
    SdkError | ResourceContentionFaultError | ScalingActivityInProgressFaultError | ServiceLinkedRoleError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeAutoScalingService = Effect.gen(function*() {
  const client = yield* Instance.AutoScalingClientInstance;

  return Service.fromClientAndCommands<AutoScalingService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: AutoScalingServiceConfig.toAutoScalingClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class AutoScalingService extends Effect.Tag("@effect-aws/client-auto-scaling/AutoScalingService")<
  AutoScalingService,
  AutoScalingService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeAutoScalingService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: AutoScalingService.Config) =>
    Layer.effect(this, makeAutoScalingService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(AutoScalingServiceConfig.setAutoScalingServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: AutoScalingClientConfig) => AutoScalingClient,
  ) =>
    Layer.effect(this, makeAutoScalingService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.AutoScalingClientInstance,
          Effect.map(AutoScalingServiceConfig.toAutoScalingClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace AutoScalingService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<AutoScalingClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
