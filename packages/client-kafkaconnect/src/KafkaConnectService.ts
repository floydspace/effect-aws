/**
 * @since 1.0.0
 */
import {
  CreateConnectorCommand,
  type CreateConnectorCommandInput,
  type CreateConnectorCommandOutput,
  CreateCustomPluginCommand,
  type CreateCustomPluginCommandInput,
  type CreateCustomPluginCommandOutput,
  CreateWorkerConfigurationCommand,
  type CreateWorkerConfigurationCommandInput,
  type CreateWorkerConfigurationCommandOutput,
  DeleteConnectorCommand,
  type DeleteConnectorCommandInput,
  type DeleteConnectorCommandOutput,
  DeleteCustomPluginCommand,
  type DeleteCustomPluginCommandInput,
  type DeleteCustomPluginCommandOutput,
  DeleteWorkerConfigurationCommand,
  type DeleteWorkerConfigurationCommandInput,
  type DeleteWorkerConfigurationCommandOutput,
  DescribeConnectorCommand,
  type DescribeConnectorCommandInput,
  type DescribeConnectorCommandOutput,
  DescribeConnectorOperationCommand,
  type DescribeConnectorOperationCommandInput,
  type DescribeConnectorOperationCommandOutput,
  DescribeCustomPluginCommand,
  type DescribeCustomPluginCommandInput,
  type DescribeCustomPluginCommandOutput,
  DescribeWorkerConfigurationCommand,
  type DescribeWorkerConfigurationCommandInput,
  type DescribeWorkerConfigurationCommandOutput,
  type KafkaConnectClient,
  type KafkaConnectClientConfig,
  ListConnectorOperationsCommand,
  type ListConnectorOperationsCommandInput,
  type ListConnectorOperationsCommandOutput,
  ListConnectorsCommand,
  type ListConnectorsCommandInput,
  type ListConnectorsCommandOutput,
  ListCustomPluginsCommand,
  type ListCustomPluginsCommandInput,
  type ListCustomPluginsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListWorkerConfigurationsCommand,
  type ListWorkerConfigurationsCommandInput,
  type ListWorkerConfigurationsCommandOutput,
  paginateListConnectorOperations,
  paginateListConnectors,
  paginateListCustomPlugins,
  paginateListWorkerConfigurations,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateConnectorCommand,
  type UpdateConnectorCommandInput,
  type UpdateConnectorCommandOutput,
} from "@aws-sdk/client-kafkaconnect";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type * as Stream from "effect/Stream";
import type {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  SdkError,
  ServiceUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./KafkaConnectClientInstance.js";
import * as KafkaConnectServiceConfig from "./KafkaConnectServiceConfig.js";

const commands = {
  CreateConnectorCommand,
  CreateCustomPluginCommand,
  CreateWorkerConfigurationCommand,
  DeleteConnectorCommand,
  DeleteCustomPluginCommand,
  DeleteWorkerConfigurationCommand,
  DescribeConnectorCommand,
  DescribeConnectorOperationCommand,
  DescribeCustomPluginCommand,
  DescribeWorkerConfigurationCommand,
  ListConnectorOperationsCommand,
  ListConnectorsCommand,
  ListCustomPluginsCommand,
  ListTagsForResourceCommand,
  ListWorkerConfigurationsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectorCommand,
};

const paginators = {
  paginateListConnectorOperations,
  paginateListConnectors,
  paginateListCustomPlugins,
  paginateListWorkerConfigurations,
};

export interface KafkaConnectService$ {
  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectorCommandOutput,
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
   * @see {@link CreateCustomPluginCommand}
   */
  createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomPluginCommandOutput,
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
   * @see {@link CreateWorkerConfigurationCommand}
   */
  createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateWorkerConfigurationCommandOutput,
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
   * @see {@link DeleteConnectorCommand}
   */
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectorCommandOutput,
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
   * @see {@link DeleteCustomPluginCommand}
   */
  deleteCustomPlugin(
    args: DeleteCustomPluginCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomPluginCommandOutput,
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
   * @see {@link DeleteWorkerConfigurationCommand}
   */
  deleteWorkerConfiguration(
    args: DeleteWorkerConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteWorkerConfigurationCommandOutput,
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
   * @see {@link DescribeConnectorCommand}
   */
  describeConnector(
    args: DescribeConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectorCommandOutput,
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
   * @see {@link DescribeConnectorOperationCommand}
   */
  describeConnectorOperation(
    args: DescribeConnectorOperationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectorOperationCommandOutput,
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
   * @see {@link DescribeCustomPluginCommand}
   */
  describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCustomPluginCommandOutput,
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
   * @see {@link DescribeWorkerConfigurationCommand}
   */
  describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeWorkerConfigurationCommandOutput,
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
   * @see {@link ListConnectorOperationsCommand}
   */
  listConnectorOperations(
    args: ListConnectorOperationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConnectorOperationsCommandOutput,
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

  listConnectorOperationsStream(
    args: ListConnectorOperationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListConnectorOperationsCommandOutput,
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
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConnectorsCommandOutput,
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

  listConnectorsStream(
    args: ListConnectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListConnectorsCommandOutput,
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
   * @see {@link ListCustomPluginsCommand}
   */
  listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCustomPluginsCommandOutput,
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

  listCustomPluginsStream(
    args: ListCustomPluginsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListCustomPluginsCommandOutput,
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
   * @see {@link ListWorkerConfigurationsCommand}
   */
  listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListWorkerConfigurationsCommandOutput,
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

  listWorkerConfigurationsStream(
    args: ListWorkerConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListWorkerConfigurationsCommandOutput,
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
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
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
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
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
   * @see {@link UpdateConnectorCommand}
   */
  updateConnector(
    args: UpdateConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectorCommandOutput,
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
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKafkaConnectService = Effect.gen(function*() {
  const client = yield* Instance.KafkaConnectClientInstance;

  return yield* Service.fromClientAndCommands<KafkaConnectService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: KafkaConnectServiceConfig.toKafkaConnectClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class KafkaConnectService extends ServiceMap.Service<
  KafkaConnectService,
  KafkaConnectService$
>()("@effect-aws/client-kafkaconnect/KafkaConnectService") {
  static readonly defaultLayer = Layer.effect(this, makeKafkaConnectService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: KafkaConnectService.Config) =>
    Layer.effect(this, makeKafkaConnectService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(KafkaConnectServiceConfig.setKafkaConnectServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: KafkaConnectClientConfig) => KafkaConnectClient,
  ) =>
    Layer.effect(this, makeKafkaConnectService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.KafkaConnectClientInstance,
          Effect.map(KafkaConnectServiceConfig.toKafkaConnectClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace KafkaConnectService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<KafkaConnectClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = KafkaConnectService$;
}
