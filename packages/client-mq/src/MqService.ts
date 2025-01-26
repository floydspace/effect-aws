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
  MqServiceException,
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
import { Data, Effect, Layer, Record } from "effect";
import type {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  TaggedException,
  UnauthorizedError,
} from "./Errors.js";
import { AllServiceErrors, SdkError } from "./Errors.js";
import { MqClientInstance, MqClientInstanceLayer } from "./MqClientInstance.js";
import {
  DefaultMqClientConfigLayer,
  makeDefaultMqClientInstanceConfig,
  MqClientInstanceConfig,
} from "./MqClientInstanceConfig.js";

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
  CreateBrokerCommand,
  CreateConfigurationCommand,
  CreateTagsCommand,
  CreateUserCommand,
  DeleteBrokerCommand,
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
    | SdkError
    | BadRequestError
    | ConflictError
    | ForbiddenError
    | InternalServerError
  >;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTagsCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserCommandOutput,
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
    | SdkError
    | BadRequestError
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
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link DescribeBrokerCommand}
   */
  describeBroker(
    args: DescribeBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link DescribeBrokerEngineTypesCommand}
   */
  describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerEngineTypesCommandOutput,
    SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link DescribeBrokerInstanceOptionsCommand}
   */
  describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBrokerInstanceOptionsCommandOutput,
    SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link DescribeConfigurationCommand}
   */
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link DescribeConfigurationRevisionCommand}
   */
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationRevisionCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUserCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link ListBrokersCommand}
   */
  listBrokers(
    args: ListBrokersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBrokersCommandOutput,
    SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   */
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationRevisionsCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationsCommandOutput,
    SdkError | BadRequestError | ForbiddenError | InternalServerError
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUsersCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link PromoteCommand}
   */
  promote(
    args: PromoteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PromoteCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link RebootBrokerCommand}
   */
  rebootBroker(
    args: RebootBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootBrokerCommandOutput,
    | SdkError
    | BadRequestError
    | ForbiddenError
    | InternalServerError
    | NotFoundError
  >;

  /**
   * @see {@link UpdateBrokerCommand}
   */
  updateBroker(
    args: UpdateBrokerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBrokerCommandOutput,
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
export const makeMqService = Effect.gen(function*(_) {
  const client = yield* _(MqClientInstance);

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
            e instanceof MqServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<MqServiceException>
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
  }, {}) as MqService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class MqService extends Effect.Tag("@effect-aws/client-mq/MqService")<
  MqService,
  MqService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeMqService).pipe(
    Layer.provide(MqClientInstanceLayer),
    Layer.provide(DefaultMqClientConfigLayer),
  );
  static readonly layer = (config: MqClientConfig) =>
    Layer.effect(this, makeMqService).pipe(
      Layer.provide(MqClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          MqClientInstanceConfig,
          makeDefaultMqClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: MqClientConfig) => MqClient,
  ) =>
    Layer.effect(this, makeMqService).pipe(
      Layer.provide(
        Layer.effect(
          MqClientInstance,
          Effect.map(makeDefaultMqClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias MqService
 */
export const Mq = MqService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Mq.baseLayer instead
 */
export const BaseMqServiceLayer = Layer.effect(MqService, makeMqService);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Mq.layer instead
 */
export const MqServiceLayer = BaseMqServiceLayer.pipe(
  Layer.provide(MqClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Mq.defaultLayer instead
 */
export const DefaultMqServiceLayer = MqService.defaultLayer;
