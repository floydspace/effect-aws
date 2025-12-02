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
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
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

interface KafkaConnectService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectorCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class KafkaConnectService extends Effect.Tag("@effect-aws/client-kafkaconnect/KafkaConnectService")<
  KafkaConnectService,
  KafkaConnectService$
>() {
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
