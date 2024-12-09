/**
 * @since 1.0.0
 */
import {
  ECSServiceException,
  type ECSClient,
  type ECSClientConfig,
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
  DescribeTaskSetsCommand,
  type DescribeTaskSetsCommandInput,
  type DescribeTaskSetsCommandOutput,
  DescribeTasksCommand,
  type DescribeTasksCommandInput,
  type DescribeTasksCommandOutput,
  DiscoverPollEndpointCommand,
  type DiscoverPollEndpointCommandInput,
  type DiscoverPollEndpointCommandOutput,
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
  ListServicesCommand,
  type ListServicesCommandInput,
  type ListServicesCommandOutput,
  ListServicesByNamespaceCommand,
  type ListServicesByNamespaceCommandInput,
  type ListServicesByNamespaceCommandOutput,
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
import { Data, Effect, Layer, Record } from "effect";
import { ECSClientInstance, ECSClientInstanceLayer } from "./ECSClientInstance";
import {
  DefaultECSClientConfigLayer,
  makeDefaultECSClientInstanceConfig,
  ECSClientInstanceConfig,
} from "./ECSClientInstanceConfig";
import {
  AllServiceErrors,
  AccessDeniedError,
  AttributeLimitExceededError,
  BlockedError,
  ClientError,
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
  ServerError,
  ServiceNotActiveError,
  ServiceNotFoundError,
  TargetNotConnectedError,
  TargetNotFoundError,
  TaskSetNotFoundError,
  UnsupportedFeatureError,
  UpdateInProgressError,
  SdkError,
  TaggedException,
} from "./Errors";

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
    | SdkError
    | ClientError
    | InvalidParameterError
    | LimitExceededError
    | ServerError
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
    | SdkError
    | ClientError
    | InvalidParameterError
    | NamespaceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(
    args: CreateServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateServiceCommandOutput,
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
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeleteAttributesCommand}
   */
  deleteAttributes(
    args: DeleteAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAttributesCommandOutput,
    | SdkError
    | ClusterNotFoundError
    | InvalidParameterError
    | TargetNotFoundError
  >;

  /**
   * @see {@link DeleteCapacityProviderCommand}
   */
  deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCapacityProviderCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterCommandOutput,
    | SdkError
    | ClientError
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
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link DeleteTaskSetCommand}
   */
  deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTaskSetCommandOutput,
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link DeregisterTaskDefinitionCommand}
   */
  deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTaskDefinitionCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeCapacityProvidersCommand}
   */
  describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityProvidersCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClustersCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeContainerInstancesCommand}
   */
  describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeContainerInstancesCommandOutput,
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link DescribeServiceDeploymentsCommand}
   */
  describeServiceDeployments(
    args: DescribeServiceDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceDeploymentsCommandOutput,
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link DescribeTaskDefinitionCommand}
   */
  describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTaskDefinitionCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeTaskSetsCommand}
   */
  describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTaskSetsCommandOutput,
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link DiscoverPollEndpointCommand}
   */
  discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DiscoverPollEndpointCommandOutput,
    SdkError | ClientError | ServerError
  >;

  /**
   * @see {@link ExecuteCommandCommand}
   */
  executeCommand(
    args: ExecuteCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteCommandCommandOutput,
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
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListAttributesCommand}
   */
  listAttributes(
    args: ListAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAttributesCommandOutput,
    SdkError | ClusterNotFoundError | InvalidParameterError
  >;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClustersCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListContainerInstancesCommand}
   */
  listContainerInstances(
    args: ListContainerInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListContainerInstancesCommandOutput,
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link ListServiceDeploymentsCommand}
   */
  listServiceDeployments(
    args: ListServiceDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServiceDeploymentsCommandOutput,
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link ListServicesByNamespaceCommand}
   */
  listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServicesByNamespaceCommandOutput,
    | SdkError
    | ClientError
    | InvalidParameterError
    | NamespaceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link ListTaskDefinitionFamiliesCommand}
   */
  listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTaskDefinitionFamiliesCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListTaskDefinitionsCommand}
   */
  listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTaskDefinitionsCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListTasksCommand}
   */
  listTasks(
    args: ListTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTasksCommandOutput,
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
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link PutAccountSettingDefaultCommand}
   */
  putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountSettingDefaultCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link PutAttributesCommand}
   */
  putAttributes(
    args: PutAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAttributesCommandOutput,
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
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link RegisterTaskDefinitionCommand}
   */
  registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTaskDefinitionCommandOutput,
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link RunTaskCommand}
   */
  runTask(
    args: RunTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RunTaskCommandOutput,
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link SubmitAttachmentStateChangesCommand}
   */
  submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitAttachmentStateChangesCommandOutput,
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link SubmitContainerStateChangeCommand}
   */
  submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitContainerStateChangeCommandOutput,
    SdkError | AccessDeniedError | ClientError | ServerError
  >;

  /**
   * @see {@link SubmitTaskStateChangeCommand}
   */
  submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitTaskStateChangeCommandOutput,
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | ServerError
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
    SdkError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterCommandOutput,
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link UpdateContainerAgentCommand}
   */
  updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContainerAgentCommandOutput,
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
    | SdkError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link UpdateServiceCommand}
   */
  updateService(
    args: UpdateServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceCommandOutput,
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
export const makeECSService = Effect.gen(function* (_) {
  const client = yield* _(ECSClientInstance);

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
          if (
            e instanceof ECSServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<ECSServiceException>
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
  }, {}) as ECSService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class ECSService extends Effect.Tag("@effect-aws/client-ecs/ECSService")<
  ECSService,
  ECSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeECSService).pipe(
    Layer.provide(ECSClientInstanceLayer),
    Layer.provide(DefaultECSClientConfigLayer),
  );
  static readonly layer = (config: ECSClientConfig) =>
    Layer.effect(this, makeECSService).pipe(
      Layer.provide(ECSClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          ECSClientInstanceConfig,
          makeDefaultECSClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ECSClientConfig) => ECSClient,
  ) =>
    Layer.effect(this, makeECSService).pipe(
      Layer.provide(
        Layer.effect(
          ECSClientInstance,
          Effect.map(makeDefaultECSClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias ECSService
 */
export const ECS = ECSService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ECS.baseLayer instead
 */
export const BaseECSServiceLayer = Layer.effect(ECSService, makeECSService);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ECS.layer instead
 */
export const ECSServiceLayer = BaseECSServiceLayer.pipe(
  Layer.provide(ECSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ECS.defaultLayer instead
 */
export const DefaultECSServiceLayer = ECSService.defaultLayer;
