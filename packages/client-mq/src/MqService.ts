/**
 * @since 1.0.0
 */
import {
  CreateBrokerCommand,
  type CreateBrokerCommandInput,
  type CreateBrokerCommandOutput,
  CreateConfigurationCommand,
  type CreateConfigurationCommandInput,
  type CreateConfigurationCommandOutput,
  CreateTagsCommand,
  type CreateTagsCommandInput,
  type CreateTagsCommandOutput,
  CreateUserCommand,
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  DeleteBrokerCommand,
  type DeleteBrokerCommandInput,
  type DeleteBrokerCommandOutput,
  DeleteConfigurationCommand,
  type DeleteConfigurationCommandInput,
  type DeleteConfigurationCommandOutput,
  DeleteTagsCommand,
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteUserCommand,
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DescribeBrokerCommand,
  type DescribeBrokerCommandInput,
  type DescribeBrokerCommandOutput,
  DescribeBrokerEngineTypesCommand,
  type DescribeBrokerEngineTypesCommandInput,
  type DescribeBrokerEngineTypesCommandOutput,
  DescribeBrokerInstanceOptionsCommand,
  type DescribeBrokerInstanceOptionsCommandInput,
  type DescribeBrokerInstanceOptionsCommandOutput,
  DescribeConfigurationCommand,
  type DescribeConfigurationCommandInput,
  type DescribeConfigurationCommandOutput,
  DescribeConfigurationRevisionCommand,
  type DescribeConfigurationRevisionCommandInput,
  type DescribeConfigurationRevisionCommandOutput,
  DescribeUserCommand,
  type DescribeUserCommandInput,
  type DescribeUserCommandOutput,
  ListBrokersCommand,
  type ListBrokersCommandInput,
  type ListBrokersCommandOutput,
  ListConfigurationRevisionsCommand,
  type ListConfigurationRevisionsCommandInput,
  type ListConfigurationRevisionsCommandOutput,
  ListConfigurationsCommand,
  type ListConfigurationsCommandInput,
  type ListConfigurationsCommandOutput,
  ListTagsCommand,
  type ListTagsCommandInput,
  type ListTagsCommandOutput,
  ListUsersCommand,
  type ListUsersCommandInput,
  type ListUsersCommandOutput,
  type MqClient,
  type MqClientConfig,
  PromoteCommand,
  type PromoteCommandInput,
  type PromoteCommandOutput,
  RebootBrokerCommand,
  type RebootBrokerCommandInput,
  type RebootBrokerCommandOutput,
  UpdateBrokerCommand,
  type UpdateBrokerCommandInput,
  type UpdateBrokerCommandOutput,
  UpdateConfigurationCommand,
  type UpdateConfigurationCommandInput,
  type UpdateConfigurationCommandOutput,
  UpdateUserCommand,
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
} from "@aws-sdk/client-mq";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  SdkError,
  UnauthorizedError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./MqClientInstance.js";
import * as MqServiceConfig from "./MqServiceConfig.js";

const commands = {
  CreateBrokerCommand,
  CreateConfigurationCommand,
  CreateTagsCommand,
  CreateUserCommand,
  DeleteBrokerCommand,
  DeleteConfigurationCommand,
  DeleteTagsCommand,
  DeleteUserCommand,
  DescribeBrokerCommand,
  DescribeBrokerEngineTypesCommand,
  DescribeBrokerInstanceOptionsCommand,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeUserCommand,
  ListBrokersCommand,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListTagsCommand,
  ListUsersCommand,
  PromoteCommand,
  RebootBrokerCommand,
  UpdateBrokerCommand,
  UpdateConfigurationCommand,
  UpdateUserCommand,
};

interface MqService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateBrokerCommand}
   */
  createBroker(
    args: CreateBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBrokerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
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
    Cause.TimeoutError | SdkError | BadRequestError | ConflictError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTagsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link DeleteBrokerCommand}
   */
  deleteBroker(
    args: DeleteBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBrokerCommandOutput,
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
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTagsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DescribeBrokerCommand}
   */
  describeBroker(
    args: DescribeBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DescribeBrokerEngineTypesCommand}
   */
  describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerEngineTypesCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link DescribeBrokerInstanceOptionsCommand}
   */
  describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerInstanceOptionsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link DescribeConfigurationCommand}
   */
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DescribeConfigurationRevisionCommand}
   */
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationRevisionCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link ListBrokersCommand}
   */
  listBrokers(
    args: ListBrokersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBrokersCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   */
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationRevisionsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUsersCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link PromoteCommand}
   */
  promote(
    args: PromoteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PromoteCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link RebootBrokerCommand}
   */
  rebootBroker(
    args: RebootBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootBrokerCommandOutput,
    Cause.TimeoutError | SdkError | BadRequestError | ForbiddenError | InternalServerError | NotFoundError
  >;

  /**
   * @see {@link UpdateBrokerCommand}
   */
  updateBroker(
    args: UpdateBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBrokerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
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
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeMqService = Effect.gen(function*() {
  const client = yield* Instance.MqClientInstance;

  return yield* Service.fromClientAndCommands<MqService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: MqServiceConfig.toMqClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class MqService extends ServiceMap.Service<
  MqService,
  MqService$
>()("@effect-aws/client-mq/MqService") {
  static readonly defaultLayer = Layer.effect(this, makeMqService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: MqService.Config) =>
    Layer.effect(this, makeMqService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(MqServiceConfig.setMqServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: MqClientConfig) => MqClient,
  ) =>
    Layer.effect(this, makeMqService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.MqClientInstance,
          Effect.map(MqServiceConfig.toMqClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace MqService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<MqClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = MqService$;
}
