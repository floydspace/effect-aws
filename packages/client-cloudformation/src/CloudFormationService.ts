/**
 * @since 1.0.0
 */
import {
  ActivateOrganizationsAccessCommand,
  type ActivateOrganizationsAccessCommandInput,
  type ActivateOrganizationsAccessCommandOutput,
  ActivateTypeCommand,
  type ActivateTypeCommandInput,
  type ActivateTypeCommandOutput,
  BatchDescribeTypeConfigurationsCommand,
  type BatchDescribeTypeConfigurationsCommandInput,
  type BatchDescribeTypeConfigurationsCommandOutput,
  CancelUpdateStackCommand,
  type CancelUpdateStackCommandInput,
  type CancelUpdateStackCommandOutput,
  type CloudFormationClient,
  type CloudFormationClientConfig,
  ContinueUpdateRollbackCommand,
  type ContinueUpdateRollbackCommandInput,
  type ContinueUpdateRollbackCommandOutput,
  CreateChangeSetCommand,
  type CreateChangeSetCommandInput,
  type CreateChangeSetCommandOutput,
  CreateGeneratedTemplateCommand,
  type CreateGeneratedTemplateCommandInput,
  type CreateGeneratedTemplateCommandOutput,
  CreateStackCommand,
  type CreateStackCommandInput,
  type CreateStackCommandOutput,
  CreateStackInstancesCommand,
  type CreateStackInstancesCommandInput,
  type CreateStackInstancesCommandOutput,
  CreateStackRefactorCommand,
  type CreateStackRefactorCommandInput,
  type CreateStackRefactorCommandOutput,
  CreateStackSetCommand,
  type CreateStackSetCommandInput,
  type CreateStackSetCommandOutput,
  DeactivateOrganizationsAccessCommand,
  type DeactivateOrganizationsAccessCommandInput,
  type DeactivateOrganizationsAccessCommandOutput,
  DeactivateTypeCommand,
  type DeactivateTypeCommandInput,
  type DeactivateTypeCommandOutput,
  DeleteChangeSetCommand,
  type DeleteChangeSetCommandInput,
  type DeleteChangeSetCommandOutput,
  DeleteGeneratedTemplateCommand,
  type DeleteGeneratedTemplateCommandInput,
  type DeleteGeneratedTemplateCommandOutput,
  DeleteStackCommand,
  type DeleteStackCommandInput,
  type DeleteStackCommandOutput,
  DeleteStackInstancesCommand,
  type DeleteStackInstancesCommandInput,
  type DeleteStackInstancesCommandOutput,
  DeleteStackSetCommand,
  type DeleteStackSetCommandInput,
  type DeleteStackSetCommandOutput,
  DeregisterTypeCommand,
  type DeregisterTypeCommandInput,
  type DeregisterTypeCommandOutput,
  DescribeAccountLimitsCommand,
  type DescribeAccountLimitsCommandInput,
  type DescribeAccountLimitsCommandOutput,
  DescribeChangeSetCommand,
  type DescribeChangeSetCommandInput,
  type DescribeChangeSetCommandOutput,
  DescribeChangeSetHooksCommand,
  type DescribeChangeSetHooksCommandInput,
  type DescribeChangeSetHooksCommandOutput,
  DescribeEventsCommand,
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeGeneratedTemplateCommand,
  type DescribeGeneratedTemplateCommandInput,
  type DescribeGeneratedTemplateCommandOutput,
  DescribeOrganizationsAccessCommand,
  type DescribeOrganizationsAccessCommandInput,
  type DescribeOrganizationsAccessCommandOutput,
  DescribePublisherCommand,
  type DescribePublisherCommandInput,
  type DescribePublisherCommandOutput,
  DescribeResourceScanCommand,
  type DescribeResourceScanCommandInput,
  type DescribeResourceScanCommandOutput,
  DescribeStackDriftDetectionStatusCommand,
  type DescribeStackDriftDetectionStatusCommandInput,
  type DescribeStackDriftDetectionStatusCommandOutput,
  DescribeStackEventsCommand,
  type DescribeStackEventsCommandInput,
  type DescribeStackEventsCommandOutput,
  DescribeStackInstanceCommand,
  type DescribeStackInstanceCommandInput,
  type DescribeStackInstanceCommandOutput,
  DescribeStackRefactorCommand,
  type DescribeStackRefactorCommandInput,
  type DescribeStackRefactorCommandOutput,
  DescribeStackResourceCommand,
  type DescribeStackResourceCommandInput,
  type DescribeStackResourceCommandOutput,
  DescribeStackResourceDriftsCommand,
  type DescribeStackResourceDriftsCommandInput,
  type DescribeStackResourceDriftsCommandOutput,
  DescribeStackResourcesCommand,
  type DescribeStackResourcesCommandInput,
  type DescribeStackResourcesCommandOutput,
  DescribeStacksCommand,
  type DescribeStacksCommandInput,
  type DescribeStacksCommandOutput,
  DescribeStackSetCommand,
  type DescribeStackSetCommandInput,
  type DescribeStackSetCommandOutput,
  DescribeStackSetOperationCommand,
  type DescribeStackSetOperationCommandInput,
  type DescribeStackSetOperationCommandOutput,
  DescribeTypeCommand,
  type DescribeTypeCommandInput,
  type DescribeTypeCommandOutput,
  DescribeTypeRegistrationCommand,
  type DescribeTypeRegistrationCommandInput,
  type DescribeTypeRegistrationCommandOutput,
  DetectStackDriftCommand,
  type DetectStackDriftCommandInput,
  type DetectStackDriftCommandOutput,
  DetectStackResourceDriftCommand,
  type DetectStackResourceDriftCommandInput,
  type DetectStackResourceDriftCommandOutput,
  DetectStackSetDriftCommand,
  type DetectStackSetDriftCommandInput,
  type DetectStackSetDriftCommandOutput,
  EstimateTemplateCostCommand,
  type EstimateTemplateCostCommandInput,
  type EstimateTemplateCostCommandOutput,
  ExecuteChangeSetCommand,
  type ExecuteChangeSetCommandInput,
  type ExecuteChangeSetCommandOutput,
  ExecuteStackRefactorCommand,
  type ExecuteStackRefactorCommandInput,
  type ExecuteStackRefactorCommandOutput,
  GetGeneratedTemplateCommand,
  type GetGeneratedTemplateCommandInput,
  type GetGeneratedTemplateCommandOutput,
  GetHookResultCommand,
  type GetHookResultCommandInput,
  type GetHookResultCommandOutput,
  GetStackPolicyCommand,
  type GetStackPolicyCommandInput,
  type GetStackPolicyCommandOutput,
  GetTemplateCommand,
  type GetTemplateCommandInput,
  type GetTemplateCommandOutput,
  GetTemplateSummaryCommand,
  type GetTemplateSummaryCommandInput,
  type GetTemplateSummaryCommandOutput,
  ImportStacksToStackSetCommand,
  type ImportStacksToStackSetCommandInput,
  type ImportStacksToStackSetCommandOutput,
  ListChangeSetsCommand,
  type ListChangeSetsCommandInput,
  type ListChangeSetsCommandOutput,
  ListExportsCommand,
  type ListExportsCommandInput,
  type ListExportsCommandOutput,
  ListGeneratedTemplatesCommand,
  type ListGeneratedTemplatesCommandInput,
  type ListGeneratedTemplatesCommandOutput,
  ListHookResultsCommand,
  type ListHookResultsCommandInput,
  type ListHookResultsCommandOutput,
  ListImportsCommand,
  type ListImportsCommandInput,
  type ListImportsCommandOutput,
  ListResourceScanRelatedResourcesCommand,
  type ListResourceScanRelatedResourcesCommandInput,
  type ListResourceScanRelatedResourcesCommandOutput,
  ListResourceScanResourcesCommand,
  type ListResourceScanResourcesCommandInput,
  type ListResourceScanResourcesCommandOutput,
  ListResourceScansCommand,
  type ListResourceScansCommandInput,
  type ListResourceScansCommandOutput,
  ListStackInstanceResourceDriftsCommand,
  type ListStackInstanceResourceDriftsCommandInput,
  type ListStackInstanceResourceDriftsCommandOutput,
  ListStackInstancesCommand,
  type ListStackInstancesCommandInput,
  type ListStackInstancesCommandOutput,
  ListStackRefactorActionsCommand,
  type ListStackRefactorActionsCommandInput,
  type ListStackRefactorActionsCommandOutput,
  ListStackRefactorsCommand,
  type ListStackRefactorsCommandInput,
  type ListStackRefactorsCommandOutput,
  ListStackResourcesCommand,
  type ListStackResourcesCommandInput,
  type ListStackResourcesCommandOutput,
  ListStacksCommand,
  type ListStacksCommandInput,
  type ListStacksCommandOutput,
  ListStackSetAutoDeploymentTargetsCommand,
  type ListStackSetAutoDeploymentTargetsCommandInput,
  type ListStackSetAutoDeploymentTargetsCommandOutput,
  ListStackSetOperationResultsCommand,
  type ListStackSetOperationResultsCommandInput,
  type ListStackSetOperationResultsCommandOutput,
  ListStackSetOperationsCommand,
  type ListStackSetOperationsCommandInput,
  type ListStackSetOperationsCommandOutput,
  ListStackSetsCommand,
  type ListStackSetsCommandInput,
  type ListStackSetsCommandOutput,
  ListTypeRegistrationsCommand,
  type ListTypeRegistrationsCommandInput,
  type ListTypeRegistrationsCommandOutput,
  ListTypesCommand,
  type ListTypesCommandInput,
  type ListTypesCommandOutput,
  ListTypeVersionsCommand,
  type ListTypeVersionsCommandInput,
  type ListTypeVersionsCommandOutput,
  PublishTypeCommand,
  type PublishTypeCommandInput,
  type PublishTypeCommandOutput,
  RecordHandlerProgressCommand,
  type RecordHandlerProgressCommandInput,
  type RecordHandlerProgressCommandOutput,
  RegisterPublisherCommand,
  type RegisterPublisherCommandInput,
  type RegisterPublisherCommandOutput,
  RegisterTypeCommand,
  type RegisterTypeCommandInput,
  type RegisterTypeCommandOutput,
  RollbackStackCommand,
  type RollbackStackCommandInput,
  type RollbackStackCommandOutput,
  SetStackPolicyCommand,
  type SetStackPolicyCommandInput,
  type SetStackPolicyCommandOutput,
  SetTypeConfigurationCommand,
  type SetTypeConfigurationCommandInput,
  type SetTypeConfigurationCommandOutput,
  SetTypeDefaultVersionCommand,
  type SetTypeDefaultVersionCommandInput,
  type SetTypeDefaultVersionCommandOutput,
  SignalResourceCommand,
  type SignalResourceCommandInput,
  type SignalResourceCommandOutput,
  StartResourceScanCommand,
  type StartResourceScanCommandInput,
  type StartResourceScanCommandOutput,
  StopStackSetOperationCommand,
  type StopStackSetOperationCommandInput,
  type StopStackSetOperationCommandOutput,
  TestTypeCommand,
  type TestTypeCommandInput,
  type TestTypeCommandOutput,
  UpdateGeneratedTemplateCommand,
  type UpdateGeneratedTemplateCommandInput,
  type UpdateGeneratedTemplateCommandOutput,
  UpdateStackCommand,
  type UpdateStackCommandInput,
  type UpdateStackCommandOutput,
  UpdateStackInstancesCommand,
  type UpdateStackInstancesCommandInput,
  type UpdateStackInstancesCommandOutput,
  UpdateStackSetCommand,
  type UpdateStackSetCommandInput,
  type UpdateStackSetCommandOutput,
  UpdateTerminationProtectionCommand,
  type UpdateTerminationProtectionCommandInput,
  type UpdateTerminationProtectionCommandOutput,
  ValidateTemplateCommand,
  type ValidateTemplateCommandInput,
  type ValidateTemplateCommandOutput,
} from "@aws-sdk/client-cloudformation";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./CloudFormationClientInstance.js";
import * as CloudFormationServiceConfig from "./CloudFormationServiceConfig.js";
import type {
  AlreadyExistsError,
  CFNRegistryError,
  ChangeSetNotFoundError,
  ConcurrentResourcesLimitExceededError,
  CreatedButModifiedError,
  GeneratedTemplateNotFoundError,
  HookResultNotFoundError,
  InsufficientCapabilitiesError,
  InvalidChangeSetStatusError,
  InvalidOperationError,
  InvalidStateTransitionError,
  LimitExceededError,
  NameAlreadyExistsError,
  OperationIdAlreadyExistsError,
  OperationInProgressError,
  OperationNotFoundError,
  OperationStatusCheckFailedError,
  ResourceScanInProgressError,
  ResourceScanLimitExceededError,
  ResourceScanNotFoundError,
  SdkError,
  StackInstanceNotFoundError,
  StackNotFoundError,
  StackRefactorNotFoundError,
  StackSetNotEmptyError,
  StackSetNotFoundError,
  StaleRequestError,
  TokenAlreadyExistsError,
  TypeConfigurationNotFoundError,
  TypeNotFoundError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  ActivateOrganizationsAccessCommand,
  ActivateTypeCommand,
  BatchDescribeTypeConfigurationsCommand,
  CancelUpdateStackCommand,
  ContinueUpdateRollbackCommand,
  CreateChangeSetCommand,
  CreateGeneratedTemplateCommand,
  CreateStackCommand,
  CreateStackInstancesCommand,
  CreateStackRefactorCommand,
  CreateStackSetCommand,
  DeactivateOrganizationsAccessCommand,
  DeactivateTypeCommand,
  DeleteChangeSetCommand,
  DeleteGeneratedTemplateCommand,
  DeleteStackCommand,
  DeleteStackInstancesCommand,
  DeleteStackSetCommand,
  DeregisterTypeCommand,
  DescribeAccountLimitsCommand,
  DescribeChangeSetCommand,
  DescribeChangeSetHooksCommand,
  DescribeEventsCommand,
  DescribeGeneratedTemplateCommand,
  DescribeOrganizationsAccessCommand,
  DescribePublisherCommand,
  DescribeResourceScanCommand,
  DescribeStackDriftDetectionStatusCommand,
  DescribeStackEventsCommand,
  DescribeStackInstanceCommand,
  DescribeStackRefactorCommand,
  DescribeStackResourceCommand,
  DescribeStackResourceDriftsCommand,
  DescribeStackResourcesCommand,
  DescribeStackSetCommand,
  DescribeStackSetOperationCommand,
  DescribeStacksCommand,
  DescribeTypeCommand,
  DescribeTypeRegistrationCommand,
  DetectStackDriftCommand,
  DetectStackResourceDriftCommand,
  DetectStackSetDriftCommand,
  EstimateTemplateCostCommand,
  ExecuteChangeSetCommand,
  ExecuteStackRefactorCommand,
  GetGeneratedTemplateCommand,
  GetHookResultCommand,
  GetStackPolicyCommand,
  GetTemplateCommand,
  GetTemplateSummaryCommand,
  ImportStacksToStackSetCommand,
  ListChangeSetsCommand,
  ListExportsCommand,
  ListGeneratedTemplatesCommand,
  ListHookResultsCommand,
  ListImportsCommand,
  ListResourceScanRelatedResourcesCommand,
  ListResourceScanResourcesCommand,
  ListResourceScansCommand,
  ListStackInstanceResourceDriftsCommand,
  ListStackInstancesCommand,
  ListStackRefactorActionsCommand,
  ListStackRefactorsCommand,
  ListStackResourcesCommand,
  ListStackSetAutoDeploymentTargetsCommand,
  ListStackSetOperationResultsCommand,
  ListStackSetOperationsCommand,
  ListStackSetsCommand,
  ListStacksCommand,
  ListTypeRegistrationsCommand,
  ListTypeVersionsCommand,
  ListTypesCommand,
  PublishTypeCommand,
  RecordHandlerProgressCommand,
  RegisterPublisherCommand,
  RegisterTypeCommand,
  RollbackStackCommand,
  SetStackPolicyCommand,
  SetTypeConfigurationCommand,
  SetTypeDefaultVersionCommand,
  SignalResourceCommand,
  StartResourceScanCommand,
  StopStackSetOperationCommand,
  TestTypeCommand,
  UpdateGeneratedTemplateCommand,
  UpdateStackCommand,
  UpdateStackInstancesCommand,
  UpdateStackSetCommand,
  UpdateTerminationProtectionCommand,
  ValidateTemplateCommand,
};

interface CloudFormationService$ {
  readonly _: unique symbol;

  /**
   * @see {@link ActivateOrganizationsAccessCommand}
   */
  activateOrganizationsAccess(
    args: ActivateOrganizationsAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ActivateOrganizationsAccessCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationNotFoundError
  >;

  /**
   * @see {@link ActivateTypeCommand}
   */
  activateType(
    args: ActivateTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ActivateTypeCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link BatchDescribeTypeConfigurationsCommand}
   */
  batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDescribeTypeConfigurationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CFNRegistryError
    | TypeConfigurationNotFoundError
  >;

  /**
   * @see {@link CancelUpdateStackCommand}
   */
  cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelUpdateStackCommandOutput,
    Cause.TimeoutException | SdkError | TokenAlreadyExistsError
  >;

  /**
   * @see {@link ContinueUpdateRollbackCommand}
   */
  continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ContinueUpdateRollbackCommandOutput,
    Cause.TimeoutException | SdkError | TokenAlreadyExistsError
  >;

  /**
   * @see {@link CreateChangeSetCommand}
   */
  createChangeSet(
    args: CreateChangeSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateChangeSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InsufficientCapabilitiesError
    | LimitExceededError
  >;

  /**
   * @see {@link CreateGeneratedTemplateCommand}
   */
  createGeneratedTemplate(
    args: CreateGeneratedTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGeneratedTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentResourcesLimitExceededError
    | LimitExceededError
  >;

  /**
   * @see {@link CreateStackCommand}
   */
  createStack(
    args: CreateStackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStackCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InsufficientCapabilitiesError
    | LimitExceededError
    | TokenAlreadyExistsError
  >;

  /**
   * @see {@link CreateStackInstancesCommand}
   */
  createStackInstances(
    args: CreateStackInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStackInstancesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | LimitExceededError
    | OperationIdAlreadyExistsError
    | OperationInProgressError
    | StackSetNotFoundError
    | StaleRequestError
  >;

  /**
   * @see {@link CreateStackRefactorCommand}
   */
  createStackRefactor(
    args: CreateStackRefactorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStackRefactorCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link CreateStackSetCommand}
   */
  createStackSet(
    args: CreateStackSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStackSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CreatedButModifiedError
    | LimitExceededError
    | NameAlreadyExistsError
  >;

  /**
   * @see {@link DeactivateOrganizationsAccessCommand}
   */
  deactivateOrganizationsAccess(
    args: DeactivateOrganizationsAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeactivateOrganizationsAccessCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationNotFoundError
  >;

  /**
   * @see {@link DeactivateTypeCommand}
   */
  deactivateType(
    args: DeactivateTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeactivateTypeCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link DeleteChangeSetCommand}
   */
  deleteChangeSet(
    args: DeleteChangeSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteChangeSetCommandOutput,
    Cause.TimeoutException | SdkError | InvalidChangeSetStatusError
  >;

  /**
   * @see {@link DeleteGeneratedTemplateCommand}
   */
  deleteGeneratedTemplate(
    args: DeleteGeneratedTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGeneratedTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentResourcesLimitExceededError
    | GeneratedTemplateNotFoundError
  >;

  /**
   * @see {@link DeleteStackCommand}
   */
  deleteStack(
    args: DeleteStackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStackCommandOutput,
    Cause.TimeoutException | SdkError | TokenAlreadyExistsError
  >;

  /**
   * @see {@link DeleteStackInstancesCommand}
   */
  deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStackInstancesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationIdAlreadyExistsError
    | OperationInProgressError
    | StackSetNotFoundError
    | StaleRequestError
  >;

  /**
   * @see {@link DeleteStackSetCommand}
   */
  deleteStackSet(
    args: DeleteStackSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStackSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | OperationInProgressError
    | StackSetNotEmptyError
  >;

  /**
   * @see {@link DeregisterTypeCommand}
   */
  deregisterType(
    args: DeregisterTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTypeCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountLimitsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeChangeSetCommand}
   */
  describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeChangeSetCommandOutput,
    Cause.TimeoutException | SdkError | ChangeSetNotFoundError
  >;

  /**
   * @see {@link DescribeChangeSetHooksCommand}
   */
  describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeChangeSetHooksCommandOutput,
    Cause.TimeoutException | SdkError | ChangeSetNotFoundError
  >;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeGeneratedTemplateCommand}
   */
  describeGeneratedTemplate(
    args: DescribeGeneratedTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeGeneratedTemplateCommandOutput,
    Cause.TimeoutException | SdkError | GeneratedTemplateNotFoundError
  >;

  /**
   * @see {@link DescribeOrganizationsAccessCommand}
   */
  describeOrganizationsAccess(
    args: DescribeOrganizationsAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOrganizationsAccessCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationNotFoundError
  >;

  /**
   * @see {@link DescribePublisherCommand}
   */
  describePublisher(
    args: DescribePublisherCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePublisherCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError
  >;

  /**
   * @see {@link DescribeResourceScanCommand}
   */
  describeResourceScan(
    args: DescribeResourceScanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeResourceScanCommandOutput,
    Cause.TimeoutException | SdkError | ResourceScanNotFoundError
  >;

  /**
   * @see {@link DescribeStackDriftDetectionStatusCommand}
   */
  describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackDriftDetectionStatusCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeStackEventsCommand}
   */
  describeStackEvents(
    args: DescribeStackEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackEventsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeStackInstanceCommand}
   */
  describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackInstanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | StackInstanceNotFoundError
    | StackSetNotFoundError
  >;

  /**
   * @see {@link DescribeStackRefactorCommand}
   */
  describeStackRefactor(
    args: DescribeStackRefactorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackRefactorCommandOutput,
    Cause.TimeoutException | SdkError | StackRefactorNotFoundError
  >;

  /**
   * @see {@link DescribeStackResourceCommand}
   */
  describeStackResource(
    args: DescribeStackResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackResourceCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeStackResourceDriftsCommand}
   */
  describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackResourceDriftsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeStackResourcesCommand}
   */
  describeStackResources(
    args: DescribeStackResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackResourcesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeStackSetCommand}
   */
  describeStackSet(
    args: DescribeStackSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackSetCommandOutput,
    Cause.TimeoutException | SdkError | StackSetNotFoundError
  >;

  /**
   * @see {@link DescribeStackSetOperationCommand}
   */
  describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStackSetOperationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | OperationNotFoundError
    | StackSetNotFoundError
  >;

  /**
   * @see {@link DescribeStacksCommand}
   */
  describeStacks(
    args: DescribeStacksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStacksCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeTypeCommand}
   */
  describeType(
    args: DescribeTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTypeCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link DescribeTypeRegistrationCommand}
   */
  describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTypeRegistrationCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError
  >;

  /**
   * @see {@link DetectStackDriftCommand}
   */
  detectStackDrift(
    args: DetectStackDriftCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetectStackDriftCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DetectStackResourceDriftCommand}
   */
  detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetectStackResourceDriftCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DetectStackSetDriftCommand}
   */
  detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetectStackSetDriftCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationInProgressError
    | StackSetNotFoundError
  >;

  /**
   * @see {@link EstimateTemplateCostCommand}
   */
  estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EstimateTemplateCostCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ExecuteChangeSetCommand}
   */
  executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteChangeSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ChangeSetNotFoundError
    | InsufficientCapabilitiesError
    | InvalidChangeSetStatusError
    | TokenAlreadyExistsError
  >;

  /**
   * @see {@link ExecuteStackRefactorCommand}
   */
  executeStackRefactor(
    args: ExecuteStackRefactorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteStackRefactorCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetGeneratedTemplateCommand}
   */
  getGeneratedTemplate(
    args: GetGeneratedTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGeneratedTemplateCommandOutput,
    Cause.TimeoutException | SdkError | GeneratedTemplateNotFoundError
  >;

  /**
   * @see {@link GetHookResultCommand}
   */
  getHookResult(
    args: GetHookResultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetHookResultCommandOutput,
    Cause.TimeoutException | SdkError | HookResultNotFoundError
  >;

  /**
   * @see {@link GetStackPolicyCommand}
   */
  getStackPolicy(
    args: GetStackPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStackPolicyCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(
    args: GetTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTemplateCommandOutput,
    Cause.TimeoutException | SdkError | ChangeSetNotFoundError
  >;

  /**
   * @see {@link GetTemplateSummaryCommand}
   */
  getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTemplateSummaryCommandOutput,
    Cause.TimeoutException | SdkError | StackSetNotFoundError
  >;

  /**
   * @see {@link ImportStacksToStackSetCommand}
   */
  importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportStacksToStackSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | LimitExceededError
    | OperationIdAlreadyExistsError
    | OperationInProgressError
    | StackNotFoundError
    | StackSetNotFoundError
    | StaleRequestError
  >;

  /**
   * @see {@link ListChangeSetsCommand}
   */
  listChangeSets(
    args: ListChangeSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListChangeSetsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(
    args: ListExportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListExportsCommandOutput, Cause.TimeoutException | SdkError>;

  /**
   * @see {@link ListGeneratedTemplatesCommand}
   */
  listGeneratedTemplates(
    args: ListGeneratedTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGeneratedTemplatesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListHookResultsCommand}
   */
  listHookResults(
    args: ListHookResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListHookResultsCommandOutput,
    Cause.TimeoutException | SdkError | HookResultNotFoundError
  >;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(
    args: ListImportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListImportsCommandOutput, Cause.TimeoutException | SdkError>;

  /**
   * @see {@link ListResourceScanRelatedResourcesCommand}
   */
  listResourceScanRelatedResources(
    args: ListResourceScanRelatedResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceScanRelatedResourcesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ResourceScanInProgressError
    | ResourceScanNotFoundError
  >;

  /**
   * @see {@link ListResourceScanResourcesCommand}
   */
  listResourceScanResources(
    args: ListResourceScanResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceScanResourcesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ResourceScanInProgressError
    | ResourceScanNotFoundError
  >;

  /**
   * @see {@link ListResourceScansCommand}
   */
  listResourceScans(
    args: ListResourceScansCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceScansCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListStackInstanceResourceDriftsCommand}
   */
  listStackInstanceResourceDrifts(
    args: ListStackInstanceResourceDriftsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackInstanceResourceDriftsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | OperationNotFoundError
    | StackInstanceNotFoundError
    | StackSetNotFoundError
  >;

  /**
   * @see {@link ListStackInstancesCommand}
   */
  listStackInstances(
    args: ListStackInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackInstancesCommandOutput,
    Cause.TimeoutException | SdkError | StackSetNotFoundError
  >;

  /**
   * @see {@link ListStackRefactorActionsCommand}
   */
  listStackRefactorActions(
    args: ListStackRefactorActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackRefactorActionsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListStackRefactorsCommand}
   */
  listStackRefactors(
    args: ListStackRefactorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackRefactorsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListStackResourcesCommand}
   */
  listStackResources(
    args: ListStackResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackResourcesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListStackSetAutoDeploymentTargetsCommand}
   */
  listStackSetAutoDeploymentTargets(
    args: ListStackSetAutoDeploymentTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackSetAutoDeploymentTargetsCommandOutput,
    Cause.TimeoutException | SdkError | StackSetNotFoundError
  >;

  /**
   * @see {@link ListStackSetOperationResultsCommand}
   */
  listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackSetOperationResultsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | OperationNotFoundError
    | StackSetNotFoundError
  >;

  /**
   * @see {@link ListStackSetOperationsCommand}
   */
  listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackSetOperationsCommandOutput,
    Cause.TimeoutException | SdkError | StackSetNotFoundError
  >;

  /**
   * @see {@link ListStackSetsCommand}
   */
  listStackSets(
    args: ListStackSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStackSetsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListStacksCommand}
   */
  listStacks(
    args: ListStacksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListStacksCommandOutput, Cause.TimeoutException | SdkError>;

  /**
   * @see {@link ListTypeRegistrationsCommand}
   */
  listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTypeRegistrationsCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError
  >;

  /**
   * @see {@link ListTypeVersionsCommand}
   */
  listTypeVersions(
    args: ListTypeVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTypeVersionsCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError
  >;

  /**
   * @see {@link ListTypesCommand}
   */
  listTypes(
    args: ListTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTypesCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError
  >;

  /**
   * @see {@link PublishTypeCommand}
   */
  publishType(
    args: PublishTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishTypeCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link RecordHandlerProgressCommand}
   */
  recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RecordHandlerProgressCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidStateTransitionError
    | OperationStatusCheckFailedError
  >;

  /**
   * @see {@link RegisterPublisherCommand}
   */
  registerPublisher(
    args: RegisterPublisherCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterPublisherCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError
  >;

  /**
   * @see {@link RegisterTypeCommand}
   */
  registerType(
    args: RegisterTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTypeCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError
  >;

  /**
   * @see {@link RollbackStackCommand}
   */
  rollbackStack(
    args: RollbackStackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RollbackStackCommandOutput,
    Cause.TimeoutException | SdkError | TokenAlreadyExistsError
  >;

  /**
   * @see {@link SetStackPolicyCommand}
   */
  setStackPolicy(
    args: SetStackPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetStackPolicyCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link SetTypeConfigurationCommand}
   */
  setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetTypeConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link SetTypeDefaultVersionCommand}
   */
  setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetTypeDefaultVersionCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link SignalResourceCommand}
   */
  signalResource(
    args: SignalResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SignalResourceCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link StartResourceScanCommand}
   */
  startResourceScan(
    args: StartResourceScanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartResourceScanCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ResourceScanInProgressError
    | ResourceScanLimitExceededError
  >;

  /**
   * @see {@link StopStackSetOperationCommand}
   */
  stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopStackSetOperationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationNotFoundError
    | StackSetNotFoundError
  >;

  /**
   * @see {@link TestTypeCommand}
   */
  testType(
    args: TestTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestTypeCommandOutput,
    Cause.TimeoutException | SdkError | CFNRegistryError | TypeNotFoundError
  >;

  /**
   * @see {@link UpdateGeneratedTemplateCommand}
   */
  updateGeneratedTemplate(
    args: UpdateGeneratedTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGeneratedTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | GeneratedTemplateNotFoundError
    | LimitExceededError
  >;

  /**
   * @see {@link UpdateStackCommand}
   */
  updateStack(
    args: UpdateStackCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStackCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InsufficientCapabilitiesError
    | TokenAlreadyExistsError
  >;

  /**
   * @see {@link UpdateStackInstancesCommand}
   */
  updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStackInstancesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationIdAlreadyExistsError
    | OperationInProgressError
    | StackInstanceNotFoundError
    | StackSetNotFoundError
    | StaleRequestError
  >;

  /**
   * @see {@link UpdateStackSetCommand}
   */
  updateStackSet(
    args: UpdateStackSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStackSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOperationError
    | OperationIdAlreadyExistsError
    | OperationInProgressError
    | StackInstanceNotFoundError
    | StackSetNotFoundError
    | StaleRequestError
  >;

  /**
   * @see {@link UpdateTerminationProtectionCommand}
   */
  updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTerminationProtectionCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ValidateTemplateCommand}
   */
  validateTemplate(
    args: ValidateTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ValidateTemplateCommandOutput,
    Cause.TimeoutException | SdkError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudFormationService = Effect.gen(function*() {
  const client = yield* Instance.CloudFormationClientInstance;

  return yield* Service.fromClientAndCommands<CloudFormationService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CloudFormationServiceConfig.toCloudFormationClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudFormationService extends Effect.Tag(
  "@effect-aws/client-cloudformation/CloudFormationService",
)<CloudFormationService, CloudFormationService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeCloudFormationService,
  ).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: CloudFormationService.Config) =>
    Layer.effect(this, makeCloudFormationService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(
        CloudFormationServiceConfig.setCloudFormationServiceConfig(config),
      ),
    );
  static readonly baseLayer = (
    evaluate: (
      defaultConfig: CloudFormationClientConfig,
    ) => CloudFormationClient,
  ) =>
    Layer.effect(this, makeCloudFormationService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CloudFormationClientInstance,
          Effect.map(
            CloudFormationServiceConfig.toCloudFormationClientConfig,
            evaluate,
          ),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CloudFormationService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CloudFormationClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = CloudFormationService$;
}
