/**
 * @since 1.0.0
 */
import {
  CancelQueryCommand,
  type CancelQueryCommandInput,
  type CancelQueryCommandOutput,
  CreateScheduledQueryCommand,
  type CreateScheduledQueryCommandInput,
  type CreateScheduledQueryCommandOutput,
  DeleteScheduledQueryCommand,
  type DeleteScheduledQueryCommandInput,
  type DeleteScheduledQueryCommandOutput,
  DescribeAccountSettingsCommand,
  type DescribeAccountSettingsCommandInput,
  type DescribeAccountSettingsCommandOutput,
  DescribeEndpointsCommand,
  type DescribeEndpointsCommandInput,
  type DescribeEndpointsCommandOutput,
  DescribeScheduledQueryCommand,
  type DescribeScheduledQueryCommandInput,
  type DescribeScheduledQueryCommandOutput,
  ExecuteScheduledQueryCommand,
  type ExecuteScheduledQueryCommandInput,
  type ExecuteScheduledQueryCommandOutput,
  ListScheduledQueriesCommand,
  type ListScheduledQueriesCommandInput,
  type ListScheduledQueriesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PrepareQueryCommand,
  type PrepareQueryCommandInput,
  type PrepareQueryCommandOutput,
  QueryCommand,
  type QueryCommandInput,
  type QueryCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  type TimestreamQueryClient,
  type TimestreamQueryClientConfig,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAccountSettingsCommand,
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateScheduledQueryCommand,
  type UpdateScheduledQueryCommandInput,
  type UpdateScheduledQueryCommandOutput,
} from "@aws-sdk/client-timestream-query";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  InvalidEndpointError,
  QueryExecutionError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./TimestreamQueryClientInstance.js";
import * as TimestreamQueryServiceConfig from "./TimestreamQueryServiceConfig.js";

const commands = {
  CancelQueryCommand,
  CreateScheduledQueryCommand,
  DeleteScheduledQueryCommand,
  DescribeAccountSettingsCommand,
  DescribeEndpointsCommand,
  DescribeScheduledQueryCommand,
  ExecuteScheduledQueryCommand,
  ListScheduledQueriesCommand,
  ListTagsForResourceCommand,
  PrepareQueryCommand,
  QueryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateScheduledQueryCommand,
};

interface TimestreamQueryService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(
    args: CancelQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelQueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateScheduledQueryCommand}
   */
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateScheduledQueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | InvalidEndpointError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteScheduledQueryCommand}
   */
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteScheduledQueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DescribeAccountSettingsCommand}
   */
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountSettingsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | InvalidEndpointError | ThrottlingError
  >;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DescribeScheduledQueryCommand}
   */
  describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScheduledQueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ExecuteScheduledQueryCommand}
   */
  executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteScheduledQueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListScheduledQueriesCommand}
   */
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListScheduledQueriesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | InvalidEndpointError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link PrepareQueryCommand}
   */
  prepareQuery(
    args: PrepareQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PrepareQueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    QueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | InvalidEndpointError
    | QueryExecutionError
    | ThrottlingError
    | ValidationError
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
    | InvalidEndpointError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutException | SdkError | InvalidEndpointError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountSettingsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateScheduledQueryCommand}
   */
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScheduledQueryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeTimestreamQueryService = Effect.gen(function*() {
  const client = yield* Instance.TimestreamQueryClientInstance;

  return yield* Service.fromClientAndCommands<TimestreamQueryService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: TimestreamQueryServiceConfig.toTimestreamQueryClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class TimestreamQueryService extends Effect.Tag("@effect-aws/client-timestream-query/TimestreamQueryService")<
  TimestreamQueryService,
  TimestreamQueryService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeTimestreamQueryService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: TimestreamQueryService.Config) =>
    Layer.effect(this, makeTimestreamQueryService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(TimestreamQueryServiceConfig.setTimestreamQueryServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: TimestreamQueryClientConfig) => TimestreamQueryClient,
  ) =>
    Layer.effect(this, makeTimestreamQueryService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.TimestreamQueryClientInstance,
          Effect.map(TimestreamQueryServiceConfig.toTimestreamQueryClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace TimestreamQueryService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<TimestreamQueryClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
