/**
 * @since 1.0.0
 */
import {
  AddTagsToOnPremisesInstancesCommand,
  type AddTagsToOnPremisesInstancesCommandInput,
  type AddTagsToOnPremisesInstancesCommandOutput,
  BatchGetApplicationRevisionsCommand,
  type BatchGetApplicationRevisionsCommandInput,
  type BatchGetApplicationRevisionsCommandOutput,
  BatchGetApplicationsCommand,
  type BatchGetApplicationsCommandInput,
  type BatchGetApplicationsCommandOutput,
  BatchGetDeploymentGroupsCommand,
  type BatchGetDeploymentGroupsCommandInput,
  type BatchGetDeploymentGroupsCommandOutput,
  BatchGetDeploymentInstancesCommand,
  type BatchGetDeploymentInstancesCommandInput,
  type BatchGetDeploymentInstancesCommandOutput,
  BatchGetDeploymentsCommand,
  type BatchGetDeploymentsCommandInput,
  type BatchGetDeploymentsCommandOutput,
  BatchGetDeploymentTargetsCommand,
  type BatchGetDeploymentTargetsCommandInput,
  type BatchGetDeploymentTargetsCommandOutput,
  BatchGetOnPremisesInstancesCommand,
  type BatchGetOnPremisesInstancesCommandInput,
  type BatchGetOnPremisesInstancesCommandOutput,
  type CodeDeployClient,
  type CodeDeployClientConfig,
  ContinueDeploymentCommand,
  type ContinueDeploymentCommandInput,
  type ContinueDeploymentCommandOutput,
  CreateApplicationCommand,
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateDeploymentCommand,
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentConfigCommand,
  type CreateDeploymentConfigCommandInput,
  type CreateDeploymentConfigCommandOutput,
  CreateDeploymentGroupCommand,
  type CreateDeploymentGroupCommandInput,
  type CreateDeploymentGroupCommandOutput,
  DeleteApplicationCommand,
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteDeploymentConfigCommand,
  type DeleteDeploymentConfigCommandInput,
  type DeleteDeploymentConfigCommandOutput,
  DeleteDeploymentGroupCommand,
  type DeleteDeploymentGroupCommandInput,
  type DeleteDeploymentGroupCommandOutput,
  DeleteGitHubAccountTokenCommand,
  type DeleteGitHubAccountTokenCommandInput,
  type DeleteGitHubAccountTokenCommandOutput,
  DeleteResourcesByExternalIdCommand,
  type DeleteResourcesByExternalIdCommandInput,
  type DeleteResourcesByExternalIdCommandOutput,
  DeregisterOnPremisesInstanceCommand,
  type DeregisterOnPremisesInstanceCommandInput,
  type DeregisterOnPremisesInstanceCommandOutput,
  GetApplicationCommand,
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationRevisionCommand,
  type GetApplicationRevisionCommandInput,
  type GetApplicationRevisionCommandOutput,
  GetDeploymentCommand,
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentConfigCommand,
  type GetDeploymentConfigCommandInput,
  type GetDeploymentConfigCommandOutput,
  GetDeploymentGroupCommand,
  type GetDeploymentGroupCommandInput,
  type GetDeploymentGroupCommandOutput,
  GetDeploymentInstanceCommand,
  type GetDeploymentInstanceCommandInput,
  type GetDeploymentInstanceCommandOutput,
  GetDeploymentTargetCommand,
  type GetDeploymentTargetCommandInput,
  type GetDeploymentTargetCommandOutput,
  GetOnPremisesInstanceCommand,
  type GetOnPremisesInstanceCommandInput,
  type GetOnPremisesInstanceCommandOutput,
  ListApplicationRevisionsCommand,
  type ListApplicationRevisionsCommandInput,
  type ListApplicationRevisionsCommandOutput,
  ListApplicationsCommand,
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListDeploymentConfigsCommand,
  type ListDeploymentConfigsCommandInput,
  type ListDeploymentConfigsCommandOutput,
  ListDeploymentGroupsCommand,
  type ListDeploymentGroupsCommandInput,
  type ListDeploymentGroupsCommandOutput,
  ListDeploymentInstancesCommand,
  type ListDeploymentInstancesCommandInput,
  type ListDeploymentInstancesCommandOutput,
  ListDeploymentsCommand,
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentTargetsCommand,
  type ListDeploymentTargetsCommandInput,
  type ListDeploymentTargetsCommandOutput,
  ListGitHubAccountTokenNamesCommand,
  type ListGitHubAccountTokenNamesCommandInput,
  type ListGitHubAccountTokenNamesCommandOutput,
  ListOnPremisesInstancesCommand,
  type ListOnPremisesInstancesCommandInput,
  type ListOnPremisesInstancesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutLifecycleEventHookExecutionStatusCommand,
  type PutLifecycleEventHookExecutionStatusCommandInput,
  type PutLifecycleEventHookExecutionStatusCommandOutput,
  RegisterApplicationRevisionCommand,
  type RegisterApplicationRevisionCommandInput,
  type RegisterApplicationRevisionCommandOutput,
  RegisterOnPremisesInstanceCommand,
  type RegisterOnPremisesInstanceCommandInput,
  type RegisterOnPremisesInstanceCommandOutput,
  RemoveTagsFromOnPremisesInstancesCommand,
  type RemoveTagsFromOnPremisesInstancesCommandInput,
  type RemoveTagsFromOnPremisesInstancesCommandOutput,
  SkipWaitTimeForInstanceTerminationCommand,
  type SkipWaitTimeForInstanceTerminationCommandInput,
  type SkipWaitTimeForInstanceTerminationCommandOutput,
  StopDeploymentCommand,
  type StopDeploymentCommandInput,
  type StopDeploymentCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateApplicationCommand,
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateDeploymentGroupCommand,
  type UpdateDeploymentGroupCommandInput,
  type UpdateDeploymentGroupCommandOutput,
} from "@aws-sdk/client-codedeploy";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./CodeDeployClientInstance.js";
import * as CodeDeployServiceConfig from "./CodeDeployServiceConfig.js";
import type {
  AlarmsLimitExceededError,
  ApplicationAlreadyExistsError,
  ApplicationDoesNotExistError,
  ApplicationLimitExceededError,
  ApplicationNameRequiredError,
  ArnNotSupportedError,
  BatchLimitExceededError,
  BucketNameFilterRequiredError,
  DeploymentAlreadyCompletedError,
  DeploymentConfigAlreadyExistsError,
  DeploymentConfigDoesNotExistError,
  DeploymentConfigInUseError,
  DeploymentConfigLimitExceededError,
  DeploymentConfigNameRequiredError,
  DeploymentDoesNotExistError,
  DeploymentGroupAlreadyExistsError,
  DeploymentGroupDoesNotExistError,
  DeploymentGroupLimitExceededError,
  DeploymentGroupNameRequiredError,
  DeploymentIdRequiredError,
  DeploymentIsNotInReadyStateError,
  DeploymentLimitExceededError,
  DeploymentNotStartedError,
  DeploymentTargetDoesNotExistError,
  DeploymentTargetIdRequiredError,
  DeploymentTargetListSizeExceededError,
  DescriptionTooLongError,
  ECSServiceMappingLimitExceededError,
  GitHubAccountTokenDoesNotExistError,
  GitHubAccountTokenNameRequiredError,
  IamArnRequiredError,
  IamSessionArnAlreadyRegisteredError,
  IamUserArnAlreadyRegisteredError,
  IamUserArnRequiredError,
  InstanceDoesNotExistError,
  InstanceIdRequiredError,
  InstanceLimitExceededError,
  InstanceNameAlreadyRegisteredError,
  InstanceNameRequiredError,
  InstanceNotRegisteredError,
  InvalidAlarmConfigError,
  InvalidApplicationNameError,
  InvalidArnError,
  InvalidAutoRollbackConfigError,
  InvalidAutoScalingGroupError,
  InvalidBlueGreenDeploymentConfigurationError,
  InvalidBucketNameFilterError,
  InvalidComputePlatformError,
  InvalidDeployedStateFilterError,
  InvalidDeploymentConfigNameError,
  InvalidDeploymentGroupNameError,
  InvalidDeploymentIdError,
  InvalidDeploymentInstanceTypeError,
  InvalidDeploymentStatusError,
  InvalidDeploymentStyleError,
  InvalidDeploymentTargetIdError,
  InvalidDeploymentWaitTypeError,
  InvalidEC2TagCombinationError,
  InvalidEC2TagError,
  InvalidECSServiceError,
  InvalidExternalIdError,
  InvalidFileExistsBehaviorError,
  InvalidGitHubAccountTokenError,
  InvalidGitHubAccountTokenNameError,
  InvalidIamSessionArnError,
  InvalidIamUserArnError,
  InvalidIgnoreApplicationStopFailuresValueError,
  InvalidInputError,
  InvalidInstanceNameError,
  InvalidInstanceStatusError,
  InvalidInstanceTypeError,
  InvalidKeyPrefixFilterError,
  InvalidLifecycleEventHookExecutionIdError,
  InvalidLifecycleEventHookExecutionStatusError,
  InvalidLoadBalancerInfoError,
  InvalidMinimumHealthyHostValueError,
  InvalidNextTokenError,
  InvalidOnPremisesTagCombinationError,
  InvalidOperationError,
  InvalidRegistrationStatusError,
  InvalidRevisionError,
  InvalidRoleError,
  InvalidSortByError,
  InvalidSortOrderError,
  InvalidTagError,
  InvalidTagFilterError,
  InvalidTagsToAddError,
  InvalidTargetFilterNameError,
  InvalidTargetGroupPairError,
  InvalidTargetInstancesError,
  InvalidTimeRangeError,
  InvalidTrafficRoutingConfigurationError,
  InvalidTriggerConfigError,
  InvalidUpdateOutdatedInstancesOnlyValueError,
  InvalidZonalDeploymentConfigurationError,
  LifecycleEventAlreadyCompletedError,
  LifecycleHookLimitExceededError,
  MultipleIamArnsProvidedError,
  OperationNotSupportedError,
  ResourceArnRequiredError,
  ResourceValidationError,
  RevisionDoesNotExistError,
  RevisionRequiredError,
  RoleRequiredError,
  SdkError,
  TagLimitExceededError,
  TagRequiredError,
  TagSetListLimitExceededError,
  ThrottlingError,
  TriggerTargetsLimitExceededError,
  UnsupportedActionForDeploymentTypeError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AddTagsToOnPremisesInstancesCommand,
  BatchGetApplicationRevisionsCommand,
  BatchGetApplicationsCommand,
  BatchGetDeploymentGroupsCommand,
  BatchGetDeploymentInstancesCommand,
  BatchGetDeploymentTargetsCommand,
  BatchGetDeploymentsCommand,
  BatchGetOnPremisesInstancesCommand,
  ContinueDeploymentCommand,
  CreateApplicationCommand,
  CreateDeploymentCommand,
  CreateDeploymentConfigCommand,
  CreateDeploymentGroupCommand,
  DeleteApplicationCommand,
  DeleteDeploymentConfigCommand,
  DeleteDeploymentGroupCommand,
  DeleteGitHubAccountTokenCommand,
  DeleteResourcesByExternalIdCommand,
  DeregisterOnPremisesInstanceCommand,
  GetApplicationCommand,
  GetApplicationRevisionCommand,
  GetDeploymentCommand,
  GetDeploymentConfigCommand,
  GetDeploymentGroupCommand,
  GetDeploymentInstanceCommand,
  GetDeploymentTargetCommand,
  GetOnPremisesInstanceCommand,
  ListApplicationRevisionsCommand,
  ListApplicationsCommand,
  ListDeploymentConfigsCommand,
  ListDeploymentGroupsCommand,
  ListDeploymentInstancesCommand,
  ListDeploymentTargetsCommand,
  ListDeploymentsCommand,
  ListGitHubAccountTokenNamesCommand,
  ListOnPremisesInstancesCommand,
  ListTagsForResourceCommand,
  PutLifecycleEventHookExecutionStatusCommand,
  RegisterApplicationRevisionCommand,
  RegisterOnPremisesInstanceCommand,
  RemoveTagsFromOnPremisesInstancesCommand,
  SkipWaitTimeForInstanceTerminationCommand,
  StopDeploymentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateDeploymentGroupCommand,
};

interface CodeDeployService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToOnPremisesInstancesCommand}
   */
  addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsToOnPremisesInstancesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InstanceLimitExceededError
    | InstanceNameRequiredError
    | InstanceNotRegisteredError
    | InvalidInstanceNameError
    | InvalidTagError
    | TagLimitExceededError
    | TagRequiredError
  >;

  /**
   * @see {@link BatchGetApplicationRevisionsCommand}
   */
  batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetApplicationRevisionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BatchLimitExceededError
    | InvalidApplicationNameError
    | InvalidRevisionError
    | RevisionRequiredError
  >;

  /**
   * @see {@link BatchGetApplicationsCommand}
   */
  batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetApplicationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BatchLimitExceededError
    | InvalidApplicationNameError
  >;

  /**
   * @see {@link BatchGetDeploymentGroupsCommand}
   */
  batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BatchLimitExceededError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
  >;

  /**
   * @see {@link BatchGetDeploymentInstancesCommand}
   */
  batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentInstancesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BatchLimitExceededError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InstanceIdRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentIdError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link BatchGetDeploymentTargetsCommand}
   */
  batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentTargetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | DeploymentTargetDoesNotExistError
    | DeploymentTargetIdRequiredError
    | DeploymentTargetListSizeExceededError
    | InstanceDoesNotExistError
    | InvalidDeploymentIdError
    | InvalidDeploymentTargetIdError
  >;

  /**
   * @see {@link BatchGetDeploymentsCommand}
   */
  batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentsCommandOutput,
    Cause.TimeoutException | SdkError | BatchLimitExceededError | DeploymentIdRequiredError | InvalidDeploymentIdError
  >;

  /**
   * @see {@link BatchGetOnPremisesInstancesCommand}
   */
  batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetOnPremisesInstancesCommandOutput,
    Cause.TimeoutException | SdkError | BatchLimitExceededError | InstanceNameRequiredError | InvalidInstanceNameError
  >;

  /**
   * @see {@link ContinueDeploymentCommand}
   */
  continueDeployment(
    args: ContinueDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ContinueDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentAlreadyCompletedError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentIsNotInReadyStateError
    | InvalidDeploymentIdError
    | InvalidDeploymentStatusError
    | InvalidDeploymentWaitTypeError
    | UnsupportedActionForDeploymentTypeError
  >;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApplicationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationAlreadyExistsError
    | ApplicationLimitExceededError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
    | InvalidComputePlatformError
    | InvalidTagsToAddError
  >;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlarmsLimitExceededError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | DeploymentLimitExceededError
    | DescriptionTooLongError
    | InvalidAlarmConfigError
    | InvalidApplicationNameError
    | InvalidAutoRollbackConfigError
    | InvalidAutoScalingGroupError
    | InvalidDeploymentConfigNameError
    | InvalidDeploymentGroupNameError
    | InvalidFileExistsBehaviorError
    | InvalidGitHubAccountTokenError
    | InvalidIgnoreApplicationStopFailuresValueError
    | InvalidLoadBalancerInfoError
    | InvalidRevisionError
    | InvalidRoleError
    | InvalidTargetInstancesError
    | InvalidTrafficRoutingConfigurationError
    | InvalidUpdateOutdatedInstancesOnlyValueError
    | RevisionDoesNotExistError
    | RevisionRequiredError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateDeploymentConfigCommand}
   */
  createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentConfigAlreadyExistsError
    | DeploymentConfigLimitExceededError
    | DeploymentConfigNameRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentConfigNameError
    | InvalidMinimumHealthyHostValueError
    | InvalidTrafficRoutingConfigurationError
    | InvalidZonalDeploymentConfigurationError
  >;

  /**
   * @see {@link CreateDeploymentGroupCommand}
   */
  createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlarmsLimitExceededError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupAlreadyExistsError
    | DeploymentGroupLimitExceededError
    | DeploymentGroupNameRequiredError
    | ECSServiceMappingLimitExceededError
    | InvalidAlarmConfigError
    | InvalidApplicationNameError
    | InvalidAutoRollbackConfigError
    | InvalidAutoScalingGroupError
    | InvalidBlueGreenDeploymentConfigurationError
    | InvalidDeploymentConfigNameError
    | InvalidDeploymentGroupNameError
    | InvalidDeploymentStyleError
    | InvalidEC2TagCombinationError
    | InvalidEC2TagError
    | InvalidECSServiceError
    | InvalidInputError
    | InvalidLoadBalancerInfoError
    | InvalidOnPremisesTagCombinationError
    | InvalidRoleError
    | InvalidTagError
    | InvalidTagsToAddError
    | InvalidTargetGroupPairError
    | InvalidTrafficRoutingConfigurationError
    | InvalidTriggerConfigError
    | LifecycleHookLimitExceededError
    | RoleRequiredError
    | TagSetListLimitExceededError
    | ThrottlingError
    | TriggerTargetsLimitExceededError
  >;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApplicationCommandOutput,
    Cause.TimeoutException | SdkError | ApplicationNameRequiredError | InvalidApplicationNameError | InvalidRoleError
  >;

  /**
   * @see {@link DeleteDeploymentConfigCommand}
   */
  deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeploymentConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentConfigInUseError
    | DeploymentConfigNameRequiredError
    | InvalidDeploymentConfigNameError
    | InvalidOperationError
  >;

  /**
   * @see {@link DeleteDeploymentGroupCommand}
   */
  deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeploymentGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationNameRequiredError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
    | InvalidRoleError
  >;

  /**
   * @see {@link DeleteGitHubAccountTokenCommand}
   */
  deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGitHubAccountTokenCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GitHubAccountTokenDoesNotExistError
    | GitHubAccountTokenNameRequiredError
    | InvalidGitHubAccountTokenNameError
    | OperationNotSupportedError
    | ResourceValidationError
  >;

  /**
   * @see {@link DeleteResourcesByExternalIdCommand}
   */
  deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcesByExternalIdCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DeregisterOnPremisesInstanceCommand}
   */
  deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterOnPremisesInstanceCommandOutput,
    Cause.TimeoutException | SdkError | InstanceNameRequiredError | InvalidInstanceNameError
  >;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApplicationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
  >;

  /**
   * @see {@link GetApplicationRevisionCommand}
   */
  getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApplicationRevisionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
    | InvalidRevisionError
    | RevisionDoesNotExistError
    | RevisionRequiredError
  >;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InvalidDeploymentIdError
  >;

  /**
   * @see {@link GetDeploymentConfigCommand}
   */
  getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentConfigDoesNotExistError
    | DeploymentConfigNameRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentConfigNameError
  >;

  /**
   * @see {@link GetDeploymentGroupCommand}
   */
  getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
  >;

  /**
   * @see {@link GetDeploymentInstanceCommand}
   */
  getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InstanceDoesNotExistError
    | InstanceIdRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentIdError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link GetDeploymentTargetCommand}
   */
  getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentTargetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | DeploymentTargetDoesNotExistError
    | DeploymentTargetIdRequiredError
    | InvalidDeploymentIdError
    | InvalidDeploymentTargetIdError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link GetOnPremisesInstanceCommand}
   */
  getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOnPremisesInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InstanceNameRequiredError
    | InstanceNotRegisteredError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link ListApplicationRevisionsCommand}
   */
  listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListApplicationRevisionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BucketNameFilterRequiredError
    | InvalidApplicationNameError
    | InvalidBucketNameFilterError
    | InvalidDeployedStateFilterError
    | InvalidKeyPrefixFilterError
    | InvalidNextTokenError
    | InvalidSortByError
    | InvalidSortOrderError
  >;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListApplicationsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDeploymentConfigsCommand}
   */
  listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentConfigsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDeploymentGroupsCommand}
   */
  listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDeploymentInstancesCommand}
   */
  listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentInstancesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | InvalidComputePlatformError
    | InvalidDeploymentIdError
    | InvalidDeploymentInstanceTypeError
    | InvalidInstanceStatusError
    | InvalidInstanceTypeError
    | InvalidNextTokenError
    | InvalidTargetFilterNameError
  >;

  /**
   * @see {@link ListDeploymentTargetsCommand}
   */
  listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentTargetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | InvalidDeploymentIdError
    | InvalidDeploymentInstanceTypeError
    | InvalidInstanceStatusError
    | InvalidInstanceTypeError
    | InvalidNextTokenError
    | InvalidTargetFilterNameError
  >;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
    | InvalidDeploymentStatusError
    | InvalidExternalIdError
    | InvalidInputError
    | InvalidNextTokenError
    | InvalidTimeRangeError
  >;

  /**
   * @see {@link ListGitHubAccountTokenNamesCommand}
   */
  listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGitHubAccountTokenNamesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError | OperationNotSupportedError | ResourceValidationError
  >;

  /**
   * @see {@link ListOnPremisesInstancesCommand}
   */
  listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOnPremisesInstancesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidNextTokenError | InvalidRegistrationStatusError | InvalidTagFilterError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | ArnNotSupportedError | InvalidArnError | ResourceArnRequiredError
  >;

  /**
   * @see {@link PutLifecycleEventHookExecutionStatusCommand}
   */
  putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutLifecycleEventHookExecutionStatusCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InvalidDeploymentIdError
    | InvalidLifecycleEventHookExecutionIdError
    | InvalidLifecycleEventHookExecutionStatusError
    | LifecycleEventAlreadyCompletedError
    | UnsupportedActionForDeploymentTypeError
  >;

  /**
   * @see {@link RegisterApplicationRevisionCommand}
   */
  registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterApplicationRevisionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DescriptionTooLongError
    | InvalidApplicationNameError
    | InvalidRevisionError
    | RevisionRequiredError
  >;

  /**
   * @see {@link RegisterOnPremisesInstanceCommand}
   */
  registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterOnPremisesInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IamArnRequiredError
    | IamSessionArnAlreadyRegisteredError
    | IamUserArnAlreadyRegisteredError
    | IamUserArnRequiredError
    | InstanceNameAlreadyRegisteredError
    | InstanceNameRequiredError
    | InvalidIamSessionArnError
    | InvalidIamUserArnError
    | InvalidInstanceNameError
    | MultipleIamArnsProvidedError
  >;

  /**
   * @see {@link RemoveTagsFromOnPremisesInstancesCommand}
   */
  removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsFromOnPremisesInstancesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InstanceLimitExceededError
    | InstanceNameRequiredError
    | InstanceNotRegisteredError
    | InvalidInstanceNameError
    | InvalidTagError
    | TagLimitExceededError
    | TagRequiredError
  >;

  /**
   * @see {@link SkipWaitTimeForInstanceTerminationCommand}
   */
  skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SkipWaitTimeForInstanceTerminationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentAlreadyCompletedError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | InvalidDeploymentIdError
    | UnsupportedActionForDeploymentTypeError
  >;

  /**
   * @see {@link StopDeploymentCommand}
   */
  stopDeployment(
    args: StopDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeploymentAlreadyCompletedError
    | DeploymentDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | DeploymentIdRequiredError
    | InvalidDeploymentIdError
    | UnsupportedActionForDeploymentTypeError
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
    | ApplicationDoesNotExistError
    | ArnNotSupportedError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | InvalidArnError
    | InvalidTagsToAddError
    | ResourceArnRequiredError
    | TagRequiredError
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
    | ApplicationDoesNotExistError
    | ArnNotSupportedError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | InvalidArnError
    | InvalidTagsToAddError
    | ResourceArnRequiredError
    | TagRequiredError
  >;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApplicationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ApplicationAlreadyExistsError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
  >;

  /**
   * @see {@link UpdateDeploymentGroupCommand}
   */
  updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeploymentGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlarmsLimitExceededError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupAlreadyExistsError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | ECSServiceMappingLimitExceededError
    | InvalidAlarmConfigError
    | InvalidApplicationNameError
    | InvalidAutoRollbackConfigError
    | InvalidAutoScalingGroupError
    | InvalidBlueGreenDeploymentConfigurationError
    | InvalidDeploymentConfigNameError
    | InvalidDeploymentGroupNameError
    | InvalidDeploymentStyleError
    | InvalidEC2TagCombinationError
    | InvalidEC2TagError
    | InvalidECSServiceError
    | InvalidInputError
    | InvalidLoadBalancerInfoError
    | InvalidOnPremisesTagCombinationError
    | InvalidRoleError
    | InvalidTagError
    | InvalidTargetGroupPairError
    | InvalidTrafficRoutingConfigurationError
    | InvalidTriggerConfigError
    | LifecycleHookLimitExceededError
    | TagSetListLimitExceededError
    | ThrottlingError
    | TriggerTargetsLimitExceededError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCodeDeployService = Effect.gen(function*() {
  const client = yield* Instance.CodeDeployClientInstance;

  return yield* Service.fromClientAndCommands<CodeDeployService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CodeDeployServiceConfig.toCodeDeployClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CodeDeployService extends Effect.Tag("@effect-aws/client-codedeploy/CodeDeployService")<
  CodeDeployService,
  CodeDeployService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeCodeDeployService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: CodeDeployService.Config) =>
    Layer.effect(this, makeCodeDeployService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(CodeDeployServiceConfig.setCodeDeployServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CodeDeployClientConfig) => CodeDeployClient,
  ) =>
    Layer.effect(this, makeCodeDeployService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CodeDeployClientInstance,
          Effect.map(CodeDeployServiceConfig.toCodeDeployClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CodeDeployService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CodeDeployClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = CodeDeployService$;
}
