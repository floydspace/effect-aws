/**
 * @since 1.0.0
 */
import {
  BatchAssociateScramSecretCommand,
  type BatchAssociateScramSecretCommandInput,
  type BatchAssociateScramSecretCommandOutput,
  BatchDisassociateScramSecretCommand,
  type BatchDisassociateScramSecretCommandInput,
  type BatchDisassociateScramSecretCommandOutput,
  CreateClusterCommand,
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterV2Command,
  type CreateClusterV2CommandInput,
  type CreateClusterV2CommandOutput,
  CreateConfigurationCommand,
  type CreateConfigurationCommandInput,
  type CreateConfigurationCommandOutput,
  CreateReplicatorCommand,
  type CreateReplicatorCommandInput,
  type CreateReplicatorCommandOutput,
  CreateTopicCommand,
  type CreateTopicCommandInput,
  type CreateTopicCommandOutput,
  CreateVpcConnectionCommand,
  type CreateVpcConnectionCommandInput,
  type CreateVpcConnectionCommandOutput,
  DeleteClusterCommand,
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterPolicyCommand,
  type DeleteClusterPolicyCommandInput,
  type DeleteClusterPolicyCommandOutput,
  DeleteConfigurationCommand,
  type DeleteConfigurationCommandInput,
  type DeleteConfigurationCommandOutput,
  DeleteReplicatorCommand,
  type DeleteReplicatorCommandInput,
  type DeleteReplicatorCommandOutput,
  DeleteTopicCommand,
  type DeleteTopicCommandInput,
  type DeleteTopicCommandOutput,
  DeleteVpcConnectionCommand,
  type DeleteVpcConnectionCommandInput,
  type DeleteVpcConnectionCommandOutput,
  DescribeClusterCommand,
  type DescribeClusterCommandInput,
  type DescribeClusterCommandOutput,
  DescribeClusterOperationCommand,
  type DescribeClusterOperationCommandInput,
  type DescribeClusterOperationCommandOutput,
  DescribeClusterOperationV2Command,
  type DescribeClusterOperationV2CommandInput,
  type DescribeClusterOperationV2CommandOutput,
  DescribeClusterV2Command,
  type DescribeClusterV2CommandInput,
  type DescribeClusterV2CommandOutput,
  DescribeConfigurationCommand,
  type DescribeConfigurationCommandInput,
  type DescribeConfigurationCommandOutput,
  DescribeConfigurationRevisionCommand,
  type DescribeConfigurationRevisionCommandInput,
  type DescribeConfigurationRevisionCommandOutput,
  DescribeReplicatorCommand,
  type DescribeReplicatorCommandInput,
  type DescribeReplicatorCommandOutput,
  DescribeTopicCommand,
  type DescribeTopicCommandInput,
  type DescribeTopicCommandOutput,
  DescribeTopicPartitionsCommand,
  type DescribeTopicPartitionsCommandInput,
  type DescribeTopicPartitionsCommandOutput,
  DescribeVpcConnectionCommand,
  type DescribeVpcConnectionCommandInput,
  type DescribeVpcConnectionCommandOutput,
  GetBootstrapBrokersCommand,
  type GetBootstrapBrokersCommandInput,
  type GetBootstrapBrokersCommandOutput,
  GetClusterPolicyCommand,
  type GetClusterPolicyCommandInput,
  type GetClusterPolicyCommandOutput,
  GetCompatibleKafkaVersionsCommand,
  type GetCompatibleKafkaVersionsCommandInput,
  type GetCompatibleKafkaVersionsCommandOutput,
  type KafkaClient,
  type KafkaClientConfig,
  ListClientVpcConnectionsCommand,
  type ListClientVpcConnectionsCommandInput,
  type ListClientVpcConnectionsCommandOutput,
  ListClusterOperationsCommand,
  type ListClusterOperationsCommandInput,
  type ListClusterOperationsCommandOutput,
  ListClusterOperationsV2Command,
  type ListClusterOperationsV2CommandInput,
  type ListClusterOperationsV2CommandOutput,
  ListClustersCommand,
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListClustersV2Command,
  type ListClustersV2CommandInput,
  type ListClustersV2CommandOutput,
  ListConfigurationRevisionsCommand,
  type ListConfigurationRevisionsCommandInput,
  type ListConfigurationRevisionsCommandOutput,
  ListConfigurationsCommand,
  type ListConfigurationsCommandInput,
  type ListConfigurationsCommandOutput,
  ListKafkaVersionsCommand,
  type ListKafkaVersionsCommandInput,
  type ListKafkaVersionsCommandOutput,
  ListNodesCommand,
  type ListNodesCommandInput,
  type ListNodesCommandOutput,
  ListReplicatorsCommand,
  type ListReplicatorsCommandInput,
  type ListReplicatorsCommandOutput,
  ListScramSecretsCommand,
  type ListScramSecretsCommandInput,
  type ListScramSecretsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTopicsCommand,
  type ListTopicsCommandInput,
  type ListTopicsCommandOutput,
  ListVpcConnectionsCommand,
  type ListVpcConnectionsCommandInput,
  type ListVpcConnectionsCommandOutput,
  PutClusterPolicyCommand,
  type PutClusterPolicyCommandInput,
  type PutClusterPolicyCommandOutput,
  RebootBrokerCommand,
  type RebootBrokerCommandInput,
  type RebootBrokerCommandOutput,
  RejectClientVpcConnectionCommand,
  type RejectClientVpcConnectionCommandInput,
  type RejectClientVpcConnectionCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateBrokerCountCommand,
  type UpdateBrokerCountCommandInput,
  type UpdateBrokerCountCommandOutput,
  UpdateBrokerStorageCommand,
  type UpdateBrokerStorageCommandInput,
  type UpdateBrokerStorageCommandOutput,
  UpdateBrokerTypeCommand,
  type UpdateBrokerTypeCommandInput,
  type UpdateBrokerTypeCommandOutput,
  UpdateClusterConfigurationCommand,
  type UpdateClusterConfigurationCommandInput,
  type UpdateClusterConfigurationCommandOutput,
  UpdateClusterKafkaVersionCommand,
  type UpdateClusterKafkaVersionCommandInput,
  type UpdateClusterKafkaVersionCommandOutput,
  UpdateConfigurationCommand,
  type UpdateConfigurationCommandInput,
  type UpdateConfigurationCommandOutput,
  UpdateConnectivityCommand,
  type UpdateConnectivityCommandInput,
  type UpdateConnectivityCommandOutput,
  UpdateMonitoringCommand,
  type UpdateMonitoringCommandInput,
  type UpdateMonitoringCommandOutput,
  UpdateRebalancingCommand,
  type UpdateRebalancingCommandInput,
  type UpdateRebalancingCommandOutput,
  UpdateReplicationInfoCommand,
  type UpdateReplicationInfoCommandInput,
  type UpdateReplicationInfoCommandOutput,
  UpdateSecurityCommand,
  type UpdateSecurityCommandInput,
  type UpdateSecurityCommandOutput,
  UpdateStorageCommand,
  type UpdateStorageCommandInput,
  type UpdateStorageCommandOutput,
  UpdateTopicCommand,
  type UpdateTopicCommandInput,
  type UpdateTopicCommandOutput,
} from "@aws-sdk/client-kafka";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  BadRequestError,
  ClusterConnectivityError,
  ConflictError,
  ControllerMovedError,
  ForbiddenError,
  GroupSubscribedToTopicError,
  InternalServerError,
  KafkaRequestError,
  KafkaTimeoutError,
  NotControllerError,
  NotFoundError,
  ReassignmentInProgressError,
  SdkError,
  ServiceUnavailableError,
  TooManyRequestsError,
  TopicExistsError,
  UnauthorizedError,
  UnknownTopicOrPartitionError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./KafkaClientInstance.js";
import * as KafkaServiceConfig from "./KafkaServiceConfig.js";

const commands = {
  BatchAssociateScramSecretCommand,
  BatchDisassociateScramSecretCommand,
  CreateClusterCommand,
  CreateClusterV2Command,
  CreateConfigurationCommand,
  CreateReplicatorCommand,
  CreateTopicCommand,
  CreateVpcConnectionCommand,
  DeleteClusterCommand,
  DeleteClusterPolicyCommand,
  DeleteConfigurationCommand,
  DeleteReplicatorCommand,
  DeleteTopicCommand,
  DeleteVpcConnectionCommand,
  DescribeClusterCommand,
  DescribeClusterOperationCommand,
  DescribeClusterOperationV2Command,
  DescribeClusterV2Command,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeReplicatorCommand,
  DescribeTopicCommand,
  DescribeTopicPartitionsCommand,
  DescribeVpcConnectionCommand,
  GetBootstrapBrokersCommand,
  GetClusterPolicyCommand,
  GetCompatibleKafkaVersionsCommand,
  ListClientVpcConnectionsCommand,
  ListClusterOperationsCommand,
  ListClusterOperationsV2Command,
  ListClustersCommand,
  ListClustersV2Command,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListKafkaVersionsCommand,
  ListNodesCommand,
  ListReplicatorsCommand,
  ListScramSecretsCommand,
  ListTagsForResourceCommand,
  ListTopicsCommand,
  ListVpcConnectionsCommand,
  PutClusterPolicyCommand,
  RebootBrokerCommand,
  RejectClientVpcConnectionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBrokerCountCommand,
  UpdateBrokerStorageCommand,
  UpdateBrokerTypeCommand,
  UpdateClusterConfigurationCommand,
  UpdateClusterKafkaVersionCommand,
  UpdateConfigurationCommand,
  UpdateConnectivityCommand,
  UpdateMonitoringCommand,
  UpdateRebalancingCommand,
  UpdateReplicationInfoCommand,
  UpdateSecurityCommand,
  UpdateStorageCommand,
  UpdateTopicCommand,
};

interface KafkaService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchAssociateScramSecretCommand}
   */
  batchAssociateScramSecret(
    args: BatchAssociateScramSecretCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchAssociateScramSecretCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link BatchDisassociateScramSecretCommand}
   */
  batchDisassociateScramSecret(
    args: BatchDisassociateScramSecretCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDisassociateScramSecretCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
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
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateClusterV2Command}
   */
  createClusterV2(
    args: CreateClusterV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateClusterV2CommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateConfigurationCommand}
   */
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateReplicatorCommand}
   */
  createReplicator(
    args: CreateReplicatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateReplicatorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTopicCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ClusterConnectivityError
    | ConflictError
    | ControllerMovedError
    | ForbiddenError
    | GroupSubscribedToTopicError
    | InternalServerError
    | KafkaRequestError
    | KafkaTimeoutError
    | NotControllerError
    | ReassignmentInProgressError
    | ServiceUnavailableError
    | TooManyRequestsError
    | TopicExistsError
    | UnauthorizedError
    | UnknownTopicOrPartitionError
  >;

  /**
   * @see {@link CreateVpcConnectionCommand}
   */
  createVpcConnection(
    args: CreateVpcConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcConnectionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DeleteClusterPolicyCommand}
   */
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterPolicyCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DeleteConfigurationCommand}
   */
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConfigurationCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DeleteReplicatorCommand}
   */
  deleteReplicator(
    args: DeleteReplicatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteReplicatorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTopicCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ClusterConnectivityError
    | ControllerMovedError
    | ForbiddenError
    | GroupSubscribedToTopicError
    | InternalServerError
    | KafkaRequestError
    | KafkaTimeoutError
    | NotControllerError
    | NotFoundError
    | ReassignmentInProgressError
    | UnknownTopicOrPartitionError
  >;

  /**
   * @see {@link DeleteVpcConnectionCommand}
   */
  deleteVpcConnection(
    args: DeleteVpcConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcConnectionCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClusterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeClusterOperationCommand}
   */
  describeClusterOperation(
    args: DescribeClusterOperationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClusterOperationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeClusterOperationV2Command}
   */
  describeClusterOperationV2(
    args: DescribeClusterOperationV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClusterOperationV2CommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeClusterV2Command}
   */
  describeClusterV2(
    args: DescribeClusterV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClusterV2CommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeConfigurationCommand}
   */
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeConfigurationRevisionCommand}
   */
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationRevisionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeReplicatorCommand}
   */
  describeReplicator(
    args: DescribeReplicatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplicatorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeTopicCommand}
   */
  describeTopic(
    args: DescribeTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTopicCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeTopicPartitionsCommand}
   */
  describeTopicPartitions(
    args: DescribeTopicPartitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTopicPartitionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeVpcConnectionCommand}
   */
  describeVpcConnection(
    args: DescribeVpcConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcConnectionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetBootstrapBrokersCommand}
   */
  getBootstrapBrokers(
    args: GetBootstrapBrokersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBootstrapBrokersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetClusterPolicyCommand}
   */
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetClusterPolicyCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link GetCompatibleKafkaVersionsCommand}
   */
  getCompatibleKafkaVersions(
    args: GetCompatibleKafkaVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCompatibleKafkaVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListClientVpcConnectionsCommand}
   */
  listClientVpcConnections(
    args: ListClientVpcConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClientVpcConnectionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListClusterOperationsCommand}
   */
  listClusterOperations(
    args: ListClusterOperationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClusterOperationsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | UnauthorizedError
  >;

  /**
   * @see {@link ListClusterOperationsV2Command}
   */
  listClusterOperationsV2(
    args: ListClusterOperationsV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClusterOperationsV2CommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClustersCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | UnauthorizedError
  >;

  /**
   * @see {@link ListClustersV2Command}
   */
  listClustersV2(
    args: ListClustersV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClustersV2CommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | UnauthorizedError
  >;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   */
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationRevisionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListKafkaVersionsCommand}
   */
  listKafkaVersions(
    args: ListKafkaVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKafkaVersionsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | UnauthorizedError
  >;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(
    args: ListNodesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNodesCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link ListReplicatorsCommand}
   */
  listReplicators(
    args: ListReplicatorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListReplicatorsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListScramSecretsCommand}
   */
  listScramSecrets(
    args: ListScramSecretsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListScramSecretsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTopicsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListVpcConnectionsCommand}
   */
  listVpcConnections(
    args: ListVpcConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcConnectionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link PutClusterPolicyCommand}
   */
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutClusterPolicyCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link RebootBrokerCommand}
   */
  rebootBroker(
    args: RebootBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootBrokerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link RejectClientVpcConnectionCommand}
   */
  rejectClientVpcConnection(
    args: RejectClientVpcConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectClientVpcConnectionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link UpdateBrokerCountCommand}
   */
  updateBrokerCount(
    args: UpdateBrokerCountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBrokerCountCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateBrokerStorageCommand}
   */
  updateBrokerStorage(
    args: UpdateBrokerStorageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBrokerStorageCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateBrokerTypeCommand}
   */
  updateBrokerType(
    args: UpdateBrokerTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBrokerTypeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateClusterConfigurationCommand}
   */
  updateClusterConfiguration(
    args: UpdateClusterConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateClusterKafkaVersionCommand}
   */
  updateClusterKafkaVersion(
    args: UpdateClusterKafkaVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterKafkaVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateConfigurationCommand}
   */
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateConnectivityCommand}
   */
  updateConnectivity(
    args: UpdateConnectivityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectivityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateMonitoringCommand}
   */
  updateMonitoring(
    args: UpdateMonitoringCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMonitoringCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateRebalancingCommand}
   */
  updateRebalancing(
    args: UpdateRebalancingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRebalancingCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateReplicationInfoCommand}
   */
  updateReplicationInfo(
    args: UpdateReplicationInfoCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateReplicationInfoCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateSecurityCommand}
   */
  updateSecurity(
    args: UpdateSecurityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateStorageCommand}
   */
  updateStorage(
    args: UpdateStorageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStorageCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateTopicCommand}
   */
  updateTopic(
    args: UpdateTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTopicCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ClusterConnectivityError
    | ControllerMovedError
    | ForbiddenError
    | GroupSubscribedToTopicError
    | InternalServerError
    | KafkaRequestError
    | KafkaTimeoutError
    | NotControllerError
    | NotFoundError
    | ReassignmentInProgressError
    | ServiceUnavailableError
    | UnauthorizedError
    | UnknownTopicOrPartitionError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKafkaService = Effect.gen(function*() {
  const client = yield* Instance.KafkaClientInstance;

  return yield* Service.fromClientAndCommands<KafkaService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: KafkaServiceConfig.toKafkaClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class KafkaService extends ServiceMap.Service<
  KafkaService,
  KafkaService$
>()("@effect-aws/client-kafka/KafkaService") {
  static readonly defaultLayer = Layer.effect(this, makeKafkaService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: KafkaService.Config) =>
    Layer.effect(this, makeKafkaService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(KafkaServiceConfig.setKafkaServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: KafkaClientConfig) => KafkaClient,
  ) =>
    Layer.effect(this, makeKafkaService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.KafkaClientInstance,
          Effect.map(KafkaServiceConfig.toKafkaClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace KafkaService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<KafkaClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = KafkaService$;
}
