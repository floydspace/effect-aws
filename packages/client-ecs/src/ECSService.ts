/**
 * @since 1.0.0
 */
import {
  ContinueServiceDeploymentCommand,
  type ContinueServiceDeploymentCommandInput,
  type ContinueServiceDeploymentCommandOutput,
  CreateCapacityProviderCommand,
  type CreateCapacityProviderCommandInput,
  type CreateCapacityProviderCommandOutput,
  CreateClusterCommand,
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateDaemonCommand,
  type CreateDaemonCommandInput,
  type CreateDaemonCommandOutput,
  CreateExpressGatewayServiceCommand,
  type CreateExpressGatewayServiceCommandInput,
  type CreateExpressGatewayServiceCommandOutput,
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
  DeleteDaemonCommand,
  type DeleteDaemonCommandInput,
  type DeleteDaemonCommandOutput,
  DeleteDaemonTaskDefinitionCommand,
  type DeleteDaemonTaskDefinitionCommandInput,
  type DeleteDaemonTaskDefinitionCommandOutput,
  DeleteExpressGatewayServiceCommand,
  type DeleteExpressGatewayServiceCommandInput,
  type DeleteExpressGatewayServiceCommandOutput,
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
  DescribeDaemonCommand,
  type DescribeDaemonCommandInput,
  type DescribeDaemonCommandOutput,
  DescribeDaemonDeploymentsCommand,
  type DescribeDaemonDeploymentsCommandInput,
  type DescribeDaemonDeploymentsCommandOutput,
  DescribeDaemonRevisionsCommand,
  type DescribeDaemonRevisionsCommandInput,
  type DescribeDaemonRevisionsCommandOutput,
  DescribeDaemonTaskDefinitionCommand,
  type DescribeDaemonTaskDefinitionCommandInput,
  type DescribeDaemonTaskDefinitionCommandOutput,
  DescribeExpressGatewayServiceCommand,
  type DescribeExpressGatewayServiceCommandInput,
  type DescribeExpressGatewayServiceCommandOutput,
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
  ListDaemonDeploymentsCommand,
  type ListDaemonDeploymentsCommandInput,
  type ListDaemonDeploymentsCommandOutput,
  ListDaemonsCommand,
  type ListDaemonsCommandInput,
  type ListDaemonsCommandOutput,
  ListDaemonTaskDefinitionsCommand,
  type ListDaemonTaskDefinitionsCommandInput,
  type ListDaemonTaskDefinitionsCommandOutput,
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
  paginateListAccountSettings,
  paginateListAttributes,
  paginateListClusters,
  paginateListContainerInstances,
  paginateListServices,
  paginateListServicesByNamespace,
  paginateListTaskDefinitionFamilies,
  paginateListTaskDefinitions,
  paginateListTasks,
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
  RegisterDaemonTaskDefinitionCommand,
  type RegisterDaemonTaskDefinitionCommandInput,
  type RegisterDaemonTaskDefinitionCommandOutput,
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
  UpdateDaemonCommand,
  type UpdateDaemonCommandInput,
  type UpdateDaemonCommandOutput,
  UpdateExpressGatewayServiceCommand,
  type UpdateExpressGatewayServiceCommandInput,
  type UpdateExpressGatewayServiceCommandOutput,
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
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
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
  DaemonNotActiveError,
  DaemonNotFoundError,
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
  ContinueServiceDeploymentCommand,
  CreateCapacityProviderCommand,
  CreateClusterCommand,
  CreateDaemonCommand,
  CreateExpressGatewayServiceCommand,
  CreateServiceCommand,
  CreateTaskSetCommand,
  DeleteAccountSettingCommand,
  DeleteAttributesCommand,
  DeleteCapacityProviderCommand,
  DeleteClusterCommand,
  DeleteDaemonCommand,
  DeleteDaemonTaskDefinitionCommand,
  DeleteExpressGatewayServiceCommand,
  DeleteServiceCommand,
  DeleteTaskDefinitionsCommand,
  DeleteTaskSetCommand,
  DeregisterContainerInstanceCommand,
  DeregisterTaskDefinitionCommand,
  DescribeCapacityProvidersCommand,
  DescribeClustersCommand,
  DescribeContainerInstancesCommand,
  DescribeDaemonCommand,
  DescribeDaemonDeploymentsCommand,
  DescribeDaemonRevisionsCommand,
  DescribeDaemonTaskDefinitionCommand,
  DescribeExpressGatewayServiceCommand,
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
  ListDaemonDeploymentsCommand,
  ListDaemonTaskDefinitionsCommand,
  ListDaemonsCommand,
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
  RegisterDaemonTaskDefinitionCommand,
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
  UpdateDaemonCommand,
  UpdateExpressGatewayServiceCommand,
  UpdateServiceCommand,
  UpdateServicePrimaryTaskSetCommand,
  UpdateTaskProtectionCommand,
  UpdateTaskSetCommand,
};

const paginators = {
  paginateListAccountSettings,
  paginateListAttributes,
  paginateListClusters,
  paginateListContainerInstances,
  paginateListServices,
  paginateListServicesByNamespace,
  paginateListTaskDefinitionFamilies,
  paginateListTaskDefinitions,
  paginateListTasks,
};

export interface ECSService$ {
  /**
   * @see {@link ContinueServiceDeploymentCommand}
   */
  continueServiceDeployment(
    args: ContinueServiceDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ContinueServiceDeploymentCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | ServerError
    | ServiceDeploymentNotFoundError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link CreateCapacityProviderCommand}
   */
  createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapacityProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | NamespaceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link CreateDaemonCommand}
   */
  createDaemon(
    args: CreateDaemonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDaemonCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | PlatformUnknownError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link CreateExpressGatewayServiceCommand}
   */
  createExpressGatewayService(
    args: CreateExpressGatewayServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateExpressGatewayServiceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | PlatformTaskDefinitionIncompatibilityError
    | PlatformUnknownError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(
    args: CreateServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateServiceCommandOutput,
    | Cause.TimeoutError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | LimitExceededError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeleteAttributesCommand}
   */
  deleteAttributes(
    args: DeleteAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAttributesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
    | UpdateInProgressError
  >;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
   * @see {@link DeleteDaemonCommand}
   */
  deleteDaemon(
    args: DeleteDaemonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDaemonCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | DaemonNotActiveError
    | DaemonNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DeleteDaemonTaskDefinitionCommand}
   */
  deleteDaemonTaskDefinition(
    args: DeleteDaemonTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDaemonTaskDefinitionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeleteExpressGatewayServiceCommand}
   */
  deleteExpressGatewayService(
    args: DeleteExpressGatewayServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteExpressGatewayServiceCommandOutput,
    | Cause.TimeoutError
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
   * @see {@link DeleteServiceCommand}
   */
  deleteService(
    args: DeleteServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteServiceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DeleteTaskSetCommand}
   */
  deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTaskSetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | LimitExceededError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeCapacityProvidersCommand}
   */
  describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityProvidersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeContainerInstancesCommand}
   */
  describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeContainerInstancesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link DescribeDaemonCommand}
   */
  describeDaemon(
    args: DescribeDaemonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDaemonCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | DaemonNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DescribeDaemonDeploymentsCommand}
   */
  describeDaemonDeployments(
    args: DescribeDaemonDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDaemonDeploymentsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DescribeDaemonRevisionsCommand}
   */
  describeDaemonRevisions(
    args: DescribeDaemonRevisionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDaemonRevisionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link DescribeDaemonTaskDefinitionCommand}
   */
  describeDaemonTaskDefinition(
    args: DescribeDaemonTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDaemonTaskDefinitionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeExpressGatewayServiceCommand}
   */
  describeExpressGatewayService(
    args: DescribeExpressGatewayServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExpressGatewayServiceCommandOutput,
    | Cause.TimeoutError
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
   * @see {@link DescribeServiceDeploymentsCommand}
   */
  describeServiceDeployments(
    args: DescribeServiceDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceDeploymentsCommandOutput,
    | Cause.TimeoutError
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
    | Cause.TimeoutError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link DescribeTaskSetsCommand}
   */
  describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTaskSetsCommandOutput,
    | Cause.TimeoutError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ExecuteCommandCommand}
   */
  executeCommand(
    args: ExecuteCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteCommandCommandOutput,
    | Cause.TimeoutError
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
    | Cause.TimeoutError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  listAccountSettingsStream(
    args: ListAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAccountSettingsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListAttributesCommand}
   */
  listAttributes(
    args: ListAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAttributesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  listAttributesStream(
    args: ListAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAttributesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClustersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  listClustersStream(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListClustersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListContainerInstancesCommand}
   */
  listContainerInstances(
    args: ListContainerInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListContainerInstancesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  listContainerInstancesStream(
    args: ListContainerInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListContainerInstancesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link ListDaemonDeploymentsCommand}
   */
  listDaemonDeployments(
    args: ListDaemonDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDaemonDeploymentsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link ListDaemonTaskDefinitionsCommand}
   */
  listDaemonTaskDefinitions(
    args: ListDaemonTaskDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDaemonTaskDefinitionsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListDaemonsCommand}
   */
  listDaemons(
    args: ListDaemonsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDaemonsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link ListServiceDeploymentsCommand}
   */
  listServiceDeployments(
    args: ListServiceDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServiceDeploymentsCommandOutput,
    | Cause.TimeoutError
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
   * @see {@link ListServicesCommand}
   */
  listServices(
    args: ListServicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListServicesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  listServicesStream(
    args: ListServicesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListServicesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | NamespaceNotFoundError
    | ServerError
  >;

  listServicesByNamespaceStream(
    args: ListServicesByNamespaceCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListServicesByNamespaceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  listTaskDefinitionFamiliesStream(
    args: ListTaskDefinitionFamiliesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListTaskDefinitionFamiliesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListTaskDefinitionsCommand}
   */
  listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTaskDefinitionsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  listTaskDefinitionsStream(
    args: ListTaskDefinitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListTaskDefinitionsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListTasksCommand}
   */
  listTasks(
    args: ListTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTasksCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | ServiceNotFoundError
  >;

  listTasksStream(
    args: ListTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListTasksCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link PutAccountSettingDefaultCommand}
   */
  putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountSettingDefaultCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ClientError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link PutAttributesCommand}
   */
  putAttributes(
    args: PutAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAttributesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | AttributeLimitExceededError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link RegisterDaemonTaskDefinitionCommand}
   */
  registerDaemonTaskDefinition(
    args: RegisterDaemonTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterDaemonTaskDefinitionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | LimitExceededError
    | ServerError
  >;

  /**
   * @see {@link RegisterTaskDefinitionCommand}
   */
  registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTaskDefinitionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | LimitExceededError
    | ServerError
  >;

  /**
   * @see {@link RunTaskCommand}
   */
  runTask(
    args: RunTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RunTaskCommandOutput,
    | Cause.TimeoutError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | NamespaceNotFoundError
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
    | Cause.TimeoutError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link SubmitTaskStateChangeCommand}
   */
  submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitTaskStateChangeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | LimitExceededError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
    | UpdateInProgressError
  >;

  /**
   * @see {@link UpdateContainerAgentCommand}
   */
  updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContainerAgentCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | ServerError
  >;

  /**
   * @see {@link UpdateDaemonCommand}
   */
  updateDaemon(
    args: UpdateDaemonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDaemonCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | DaemonNotActiveError
    | DaemonNotFoundError
    | InvalidParameterError
    | PlatformUnknownError
    | ServerError
    | UnsupportedFeatureError
  >;

  /**
   * @see {@link UpdateExpressGatewayServiceCommand}
   */
  updateExpressGatewayService(
    args: UpdateExpressGatewayServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateExpressGatewayServiceCommandOutput,
    | Cause.TimeoutError
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
   * @see {@link UpdateServiceCommand}
   */
  updateService(
    args: UpdateServiceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceCommandOutput,
    | Cause.TimeoutError
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
    | Cause.TimeoutError
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
    | Cause.TimeoutError
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
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ClientError
    | ClusterNotFoundError
    | InvalidParameterError
    | LimitExceededError
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
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ECSService extends Context.Service<
  ECSService,
  ECSService$
>()("@effect-aws/client-ecs/ECSService") {
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
