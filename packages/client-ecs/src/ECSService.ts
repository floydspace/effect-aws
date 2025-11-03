/**
 * @since 1.0.0
 */
import {
  CreateCapacityProviderCommand,
  type CreateCapacityProviderCommandInput,
  type CreateCapacityProviderCommandOutput,
  CreateClusterCommand,
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateServiceCommand,
  type CreateServiceCommandInput,
  type CreateServiceCommandOutput,
  CreateTaskSetCommand,
  type CreateTaskSetCommandInput,
  type CreateTaskSetCommandOutput,
  DeleteAccountSettingCommand,
  type DeleteAccountSettingCommandInput,
  type DeleteAccountSettingCommandOutput,
  DeleteAttributesCommand,
  type DeleteAttributesCommandInput,
  type DeleteAttributesCommandOutput,
  DeleteCapacityProviderCommand,
  type DeleteCapacityProviderCommandInput,
  type DeleteCapacityProviderCommandOutput,
  DeleteClusterCommand,
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteServiceCommand,
  type DeleteServiceCommandInput,
  type DeleteServiceCommandOutput,
  DeleteTaskDefinitionsCommand,
  type DeleteTaskDefinitionsCommandInput,
  type DeleteTaskDefinitionsCommandOutput,
  DeleteTaskSetCommand,
  type DeleteTaskSetCommandInput,
  type DeleteTaskSetCommandOutput,
  DeregisterContainerInstanceCommand,
  type DeregisterContainerInstanceCommandInput,
  type DeregisterContainerInstanceCommandOutput,
  DeregisterTaskDefinitionCommand,
  type DeregisterTaskDefinitionCommandInput,
  type DeregisterTaskDefinitionCommandOutput,
  DescribeCapacityProvidersCommand,
  type DescribeCapacityProvidersCommandInput,
  type DescribeCapacityProvidersCommandOutput,
  DescribeClustersCommand,
  type DescribeClustersCommandInput,
  type DescribeClustersCommandOutput,
  DescribeContainerInstancesCommand,
  type DescribeContainerInstancesCommandInput,
  type DescribeContainerInstancesCommandOutput,
  DescribeServiceDeploymentsCommand,
  type DescribeServiceDeploymentsCommandInput,
  type DescribeServiceDeploymentsCommandOutput,
  DescribeServiceRevisionsCommand,
  type DescribeServiceRevisionsCommandInput,
  type DescribeServiceRevisionsCommandOutput,
  DescribeServicesCommand,
  type DescribeServicesCommandInput,
  type DescribeServicesCommandOutput,
  DescribeTaskDefinitionCommand,
  type DescribeTaskDefinitionCommandInput,
  type DescribeTaskDefinitionCommandOutput,
  DescribeTasksCommand,
  type DescribeTasksCommandInput,
  type DescribeTasksCommandOutput,
  DescribeTaskSetsCommand,
  type DescribeTaskSetsCommandInput,
  type DescribeTaskSetsCommandOutput,
  DiscoverPollEndpointCommand,
  type DiscoverPollEndpointCommandInput,
  type DiscoverPollEndpointCommandOutput,
  type ECSClient,
  type ECSClientConfig,
  ExecuteCommandCommand,
  type ExecuteCommandCommandInput,
  type ExecuteCommandCommandOutput,
  GetTaskProtectionCommand,
  type GetTaskProtectionCommandInput,
  type GetTaskProtectionCommandOutput,
  ListAccountSettingsCommand,
  type ListAccountSettingsCommandInput,
  type ListAccountSettingsCommandOutput,
  ListAttributesCommand,
  type ListAttributesCommandInput,
  type ListAttributesCommandOutput,
  ListClustersCommand,
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListContainerInstancesCommand,
  type ListContainerInstancesCommandInput,
  type ListContainerInstancesCommandOutput,
  ListServiceDeploymentsCommand,
  type ListServiceDeploymentsCommandInput,
  type ListServiceDeploymentsCommandOutput,
  ListServicesByNamespaceCommand,
  type ListServicesByNamespaceCommandInput,
  type ListServicesByNamespaceCommandOutput,
  ListServicesCommand,
  type ListServicesCommandInput,
  type ListServicesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTaskDefinitionFamiliesCommand,
  type ListTaskDefinitionFamiliesCommandInput,
  type ListTaskDefinitionFamiliesCommandOutput,
  ListTaskDefinitionsCommand,
  type ListTaskDefinitionsCommandInput,
  type ListTaskDefinitionsCommandOutput,
  ListTasksCommand,
  type ListTasksCommandInput,
  type ListTasksCommandOutput,
  PutAccountSettingCommand,
  type PutAccountSettingCommandInput,
  type PutAccountSettingCommandOutput,
  PutAccountSettingDefaultCommand,
  type PutAccountSettingDefaultCommandInput,
  type PutAccountSettingDefaultCommandOutput,
  PutAttributesCommand,
  type PutAttributesCommandInput,
  type PutAttributesCommandOutput,
  PutClusterCapacityProvidersCommand,
  type PutClusterCapacityProvidersCommandInput,
  type PutClusterCapacityProvidersCommandOutput,
  RegisterContainerInstanceCommand,
  type RegisterContainerInstanceCommandInput,
  type RegisterContainerInstanceCommandOutput,
  RegisterTaskDefinitionCommand,
  type RegisterTaskDefinitionCommandInput,
  type RegisterTaskDefinitionCommandOutput,
  RunTaskCommand,
  type RunTaskCommandInput,
  type RunTaskCommandOutput,
  StartTaskCommand,
  type StartTaskCommandInput,
  type StartTaskCommandOutput,
  StopServiceDeploymentCommand,
  type StopServiceDeploymentCommandInput,
  type StopServiceDeploymentCommandOutput,
  StopTaskCommand,
  type StopTaskCommandInput,
  type StopTaskCommandOutput,
  SubmitAttachmentStateChangesCommand,
  type SubmitAttachmentStateChangesCommandInput,
  type SubmitAttachmentStateChangesCommandOutput,
  SubmitContainerStateChangeCommand,
  type SubmitContainerStateChangeCommandInput,
  type SubmitContainerStateChangeCommandOutput,
  SubmitTaskStateChangeCommand,
  type SubmitTaskStateChangeCommandInput,
  type SubmitTaskStateChangeCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateCapacityProviderCommand,
  type UpdateCapacityProviderCommandInput,
  type UpdateCapacityProviderCommandOutput,
  UpdateClusterCommand,
  type UpdateClusterCommandInput,
  type UpdateClusterCommandOutput,
  UpdateClusterSettingsCommand,
  type UpdateClusterSettingsCommandInput,
  type UpdateClusterSettingsCommandOutput,
  UpdateContainerAgentCommand,
  type UpdateContainerAgentCommandInput,
  type UpdateContainerAgentCommandOutput,
  UpdateContainerInstancesStateCommand,
  type UpdateContainerInstancesStateCommandInput,
  type UpdateContainerInstancesStateCommandOutput,
  UpdateServiceCommand,
  type UpdateServiceCommandInput,
  type UpdateServiceCommandOutput,
  UpdateServicePrimaryTaskSetCommand,
  type UpdateServicePrimaryTaskSetCommandInput,
  type UpdateServicePrimaryTaskSetCommandOutput,
  UpdateTaskProtectionCommand,
  type UpdateTaskProtectionCommandInput,
  type UpdateTaskProtectionCommandOutput,
  UpdateTaskSetCommand,
  type UpdateTaskSetCommandInput,
  type UpdateTaskSetCommandOutput,
} from "@aws-sdk/client-ecs";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./ECSClientInstance.js";
import * as ECSServiceConfig from "./ECSServiceConfig.js";
import type {
  AccessDeniedError,
  AttributeLimitExceededError,
  BlockedError,
  ClientError,
  ClusterContainsCapacityProviderError,
  ClusterContainsContainerInstancesError,
  ClusterContainsServicesError,
  ClusterContainsTasksError,
  ClusterNotFoundError,
  ConflictError,
  InvalidParameterError,
  LimitExceededError,
  MissingVersionError,
  NamespaceNotFoundError,
  NoUpdateAvailableError,
  PlatformTaskDefinitionIncompatibilityError,
  PlatformUnknownError,
  ResourceInUseError,
  ResourceNotFoundError,
  SdkError,
  ServerError,
  ServiceDeploymentNotFoundError,
  ServiceNotActiveError,
  ServiceNotFoundError,
  TargetNotConnectedError,
  TargetNotFoundError,
  TaskSetNotFoundError,
  UnsupportedFeatureError,
  UpdateInProgressError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  CreateCapacityProviderCommand,
  CreateClusterCommand,
  CreateServiceCommand,
  CreateTaskSetCommand,
  DeleteAccountSettingCommand,
  DeleteAttributesCommand,
  DeleteCapacityProviderCommand,
  DeleteClusterCommand,
  DeleteServiceCommand,
  DeleteTaskDefinitionsCommand,
  DeleteTaskSetCommand,
  DeregisterContainerInstanceCommand,
  DeregisterTaskDefinitionCommand,
  DescribeCapacityProvidersCommand,
  DescribeClustersCommand,
  DescribeContainerInstancesCommand,
  DescribeServiceDeploymentsCommand,
  DescribeServiceRevisionsCommand,
  DescribeServicesCommand,
  DescribeTaskDefinitionCommand,
  DescribeTaskSetsCommand,
  DescribeTasksCommand,
  DiscoverPollEndpointCommand,
  ExecuteCommandCommand,
  GetTaskProtectionCommand,
  ListAccountSettingsCommand,
  ListAttributesCommand,
  ListClustersCommand,
  ListContainerInstancesCommand,
  ListServiceDeploymentsCommand,
  ListServicesCommand,
  ListServicesByNamespaceCommand,
  ListTagsForResourceCommand,
  ListTaskDefinitionFamiliesCommand,
  ListTaskDefinitionsCommand,
  ListTasksCommand,
  PutAccountSettingCommand,
  PutAccountSettingDefaultCommand,
  PutAttributesCommand,
  PutClusterCapacityProvidersCommand,
  RegisterContainerInstanceCommand,
  RegisterTaskDefinitionCommand,
  RunTaskCommand,
  StartTaskCommand,
  StopServiceDeploymentCommand,
  StopTaskCommand,
  SubmitAttachmentStateChangesCommand,
  SubmitContainerStateChangeCommand,
  SubmitTaskStateChangeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCapacityProviderCommand,
  UpdateClusterCommand,
  UpdateClusterSettingsCommand,
  UpdateContainerAgentCommand,
  UpdateContainerInstancesStateCommand,
  UpdateServiceCommand,
  UpdateServicePrimaryTaskSetCommand,
  UpdateTaskProtectionCommand,
  UpdateTaskSetCommand,
};

interface ECSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateCapacityProviderCommand}
   */
  createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapacityProviderCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | LimitExceededError
    | ServerError
    | UnsupportedFeatureError
    | UpdateInProgressError
  >;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateClusterCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | NamespaceNotFoundError | ServerError
  >;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(
    args: CreateServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateServiceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | NamespaceNotFoundError
    | PlatformTaskDefinitionIncompatibilityError
    | PlatformUnknownError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link CreateTaskSetCommand}
   */
  createTaskSet(
    args: CreateTaskSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTaskSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | NamespaceNotFoundError
    | PlatformTaskDefinitionIncompatibilityError
    | PlatformUnknownError
    | ServerError
    | ServiceNotActiveError
    | ServiceNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DeleteAccountSettingCommand}
   */
  deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccountSettingCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeleteAttributesCommand}
   */
  deleteAttributes(
    args: DeleteAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAttributesCommandOutput,
    Cause.TimeoutException | SdkError | ClusterNotFoundError | InvalidParameterError | TargetNotFoundError
  >;

  /**
   * @see {@link DeleteCapacityProviderCommand}
   */
  deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCapacityProviderCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterContainsCapacityProviderError
    | ClusterContainsContainerInstancesError
    | ClusterContainsServicesError
    | ClusterContainsTasksError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UpdateInProgressError
  >;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(
    args: DeleteServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServiceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotFoundError
  >;

  /**
   * @see {@link DeleteTaskDefinitionsCommand}
   */
  deleteTaskDefinitions(
    args: DeleteTaskDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTaskDefinitionsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeleteTaskSetCommand}
   */
  deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTaskSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotActiveError
    | ServiceNotFoundError
    | TaskSetNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DeregisterContainerInstanceCommand}
   */
  deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterContainerInstanceCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeregisterTaskDefinitionCommand}
   */
  deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTaskDefinitionCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeCapacityProvidersCommand}
   */
  describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityProvidersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClustersCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeContainerInstancesCommand}
   */
  describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeContainerInstancesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeServiceDeploymentsCommand}
   */
  describeServiceDeployments(
    args: DescribeServiceDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceDeploymentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DescribeServiceRevisionsCommand}
   */
  describeServiceRevisions(
    args: DescribeServiceRevisionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceRevisionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DescribeServicesCommand}
   */
  describeServices(
    args: DescribeServicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServicesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeTaskDefinitionCommand}
   */
  describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTaskDefinitionCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeTaskSetsCommand}
   */
  describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTaskSetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotActiveError
    | ServiceNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DescribeTasksCommand}
   */
  describeTasks(
    args: DescribeTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTasksCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DiscoverPollEndpointCommand}
   */
  discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DiscoverPollEndpointCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ServerError
  >;

  /**
   * @see {@link ExecuteCommandCommand}
   */
  executeCommand(
    args: ExecuteCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteCommandCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | TargetNotConnectedError
  >;

  /**
   * @see {@link GetTaskProtectionCommand}
   */
  getTaskProtection(
    args: GetTaskProtectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTaskProtectionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link ListAccountSettingsCommand}
   */
  listAccountSettings(
    args: ListAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccountSettingsCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListAttributesCommand}
   */
  listAttributes(
    args: ListAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAttributesCommandOutput,
    Cause.TimeoutException | SdkError | ClusterNotFoundError | InvalidParameterError
  >;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClustersCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListContainerInstancesCommand}
   */
  listContainerInstances(
    args: ListContainerInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListContainerInstancesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListServiceDeploymentsCommand}
   */
  listServiceDeployments(
    args: ListServiceDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServiceDeploymentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | ServerError
    | ServiceNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(
    args: ListServicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServicesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListServicesByNamespaceCommand}
   */
  listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServicesByNamespaceCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | NamespaceNotFoundError | ServerError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListTaskDefinitionFamiliesCommand}
   */
  listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTaskDefinitionFamiliesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListTaskDefinitionsCommand}
   */
  listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTaskDefinitionsCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListTasksCommand}
   */
  listTasks(
    args: ListTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTasksCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotFoundError
  >;

  /**
   * @see {@link PutAccountSettingCommand}
   */
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountSettingCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link PutAccountSettingDefaultCommand}
   */
  putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountSettingDefaultCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link PutAttributesCommand}
   */
  putAttributes(
    args: PutAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAttributesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AttributeLimitExceededError
    | ClusterNotFoundError
    | InvalidParameterError
    | TargetNotFoundError
  >;

  /**
   * @see {@link PutClusterCapacityProvidersCommand}
   */
  putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutClusterCapacityProvidersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ResourceInUseError
    | ServerError
    | UpdateInProgressError
  >;

  /**
   * @see {@link RegisterContainerInstanceCommand}
   */
  registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterContainerInstanceCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link RegisterTaskDefinitionCommand}
   */
  registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTaskDefinitionCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link RunTaskCommand}
   */
  runTask(
    args: RunTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RunTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | BlockedError
    | ClientError
    | ClusterNotFoundError
    | ConflictError
    | InvalidParameterError
    | PlatformTaskDefinitionIncompatibilityError
    | PlatformUnknownError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link StartTaskCommand}
   */
  startTask(
    args: StartTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link StopServiceDeploymentCommand}
   */
  stopServiceDeployment(
    args: StopServiceDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopServiceDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ConflictError
    | InvalidParameterError
    | ServerError
    | ServiceDeploymentNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link StopTaskCommand}
   */
  stopTask(
    args: StopTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopTaskCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link SubmitAttachmentStateChangesCommand}
   */
  submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitAttachmentStateChangesCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link SubmitContainerStateChangeCommand}
   */
  submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitContainerStateChangeCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | ClientError | ServerError
  >;

  /**
   * @see {@link SubmitTaskStateChangeCommand}
   */
  submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitTaskStateChangeCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
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
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
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
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdateCapacityProviderCommand}
   */
  updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCapacityProviderCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | NamespaceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdateClusterSettingsCommand}
   */
  updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterSettingsCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link UpdateContainerAgentCommand}
   */
  updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContainerAgentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | MissingVersionError
    | NoUpdateAvailableError
    | ServerError
    | UpdateInProgressError
  >;

  /**
   * @see {@link UpdateContainerInstancesStateCommand}
   */
  updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContainerInstancesStateCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ClusterNotFoundError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link UpdateServiceCommand}
   */
  updateService(
    args: UpdateServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | NamespaceNotFoundError
    | PlatformTaskDefinitionIncompatibilityError
    | PlatformUnknownError
    | ServerError
    | ServiceNotActiveError
    | ServiceNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link UpdateServicePrimaryTaskSetCommand}
   */
  updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServicePrimaryTaskSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotActiveError
    | ServiceNotFoundError
    | TaskSetNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link UpdateTaskProtectionCommand}
   */
  updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTaskProtectionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link UpdateTaskSetCommand}
   */
  updateTaskSet(
    args: UpdateTaskSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTaskSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotActiveError
    | ServiceNotFoundError
    | TaskSetNotFoundError
    | UnsupportedFeatureError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeECSService = Effect.gen(function*() {
  const client = yield* Instance.ECSClientInstance;

  return yield* Service.fromClientAndCommands<ECSService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: ECSServiceConfig.toECSClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ECSService extends Effect.Tag("@effect-aws/client-ecs/ECSService")<
  ECSService,
  ECSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeECSService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: ECSService.Config) =>
    Layer.effect(this, makeECSService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(ECSServiceConfig.setECSServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ECSClientConfig) => ECSClient,
  ) =>
    Layer.effect(this, makeECSService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.ECSClientInstance,
          Effect.map(ECSServiceConfig.toECSClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ECSService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<ECSClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = ECSService$;
}
