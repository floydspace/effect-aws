/**
 * @since 1.0.0
 */
import {
  CreateBatchLoadTaskCommand,
  type CreateBatchLoadTaskCommandInput,
  type CreateBatchLoadTaskCommandOutput,
  CreateDatabaseCommand,
  type CreateDatabaseCommandInput,
  type CreateDatabaseCommandOutput,
  CreateTableCommand,
  type CreateTableCommandInput,
  type CreateTableCommandOutput,
  DeleteDatabaseCommand,
  type DeleteDatabaseCommandInput,
  type DeleteDatabaseCommandOutput,
  DeleteTableCommand,
  type DeleteTableCommandInput,
  type DeleteTableCommandOutput,
  DescribeBatchLoadTaskCommand,
  type DescribeBatchLoadTaskCommandInput,
  type DescribeBatchLoadTaskCommandOutput,
  DescribeDatabaseCommand,
  type DescribeDatabaseCommandInput,
  type DescribeDatabaseCommandOutput,
  DescribeEndpointsCommand,
  type DescribeEndpointsCommandInput,
  type DescribeEndpointsCommandOutput,
  DescribeTableCommand,
  type DescribeTableCommandInput,
  type DescribeTableCommandOutput,
  ListBatchLoadTasksCommand,
  type ListBatchLoadTasksCommandInput,
  type ListBatchLoadTasksCommandOutput,
  ListDatabasesCommand,
  type ListDatabasesCommandInput,
  type ListDatabasesCommandOutput,
  ListTablesCommand,
  type ListTablesCommandInput,
  type ListTablesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ResumeBatchLoadTaskCommand,
  type ResumeBatchLoadTaskCommandInput,
  type ResumeBatchLoadTaskCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  type TimestreamWriteClient,
  type TimestreamWriteClientConfig,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateDatabaseCommand,
  type UpdateDatabaseCommandInput,
  type UpdateDatabaseCommandOutput,
  UpdateTableCommand,
  type UpdateTableCommandInput,
  type UpdateTableCommandOutput,
  WriteRecordsCommand,
  type WriteRecordsCommandInput,
  type WriteRecordsCommandOutput,
} from "@aws-sdk/client-timestream-write";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  InvalidEndpointError,
  RejectedRecordsError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./TimestreamWriteClientInstance.js";
import * as TimestreamWriteServiceConfig from "./TimestreamWriteServiceConfig.js";

const commands = {
  CreateBatchLoadTaskCommand,
  CreateDatabaseCommand,
  CreateTableCommand,
  DeleteDatabaseCommand,
  DeleteTableCommand,
  DescribeBatchLoadTaskCommand,
  DescribeDatabaseCommand,
  DescribeEndpointsCommand,
  DescribeTableCommand,
  ListBatchLoadTasksCommand,
  ListDatabasesCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  ResumeBatchLoadTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatabaseCommand,
  UpdateTableCommand,
  WriteRecordsCommand,
};

interface TimestreamWriteService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateBatchLoadTaskCommand}
   */
  createBatchLoadTask(
    args: CreateBatchLoadTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBatchLoadTaskCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateDatabaseCommand}
   */
  createDatabase(
    args: CreateDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDatabaseCommandOutput,
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
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTableCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDatabaseCommand}
   */
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDatabaseCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTableCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DescribeBatchLoadTaskCommand}
   */
  describeBatchLoadTask(
    args: DescribeBatchLoadTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBatchLoadTaskCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | InvalidEndpointError | ResourceNotFoundError | ThrottlingError
  >;

  /**
   * @see {@link DescribeDatabaseCommand}
   */
  describeDatabase(
    args: DescribeDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDatabaseCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEndpointsCommandOutput,
    SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(
    args: DescribeTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTableCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListBatchLoadTasksCommand}
   */
  listBatchLoadTasks(
    args: ListBatchLoadTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBatchLoadTasksCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | InvalidEndpointError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListDatabasesCommand}
   */
  listDatabases(
    args: ListDatabasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDatabasesCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | InvalidEndpointError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(
    args: ListTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTablesCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
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
    SdkError | InvalidEndpointError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ResumeBatchLoadTaskCommand}
   */
  resumeBatchLoadTask(
    args: ResumeBatchLoadTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResumeBatchLoadTaskCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
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
    | SdkError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDatabaseCommand}
   */
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDatabaseCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(
    args: UpdateTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTableCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link WriteRecordsCommand}
   */
  writeRecords(
    args: WriteRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    WriteRecordsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidEndpointError
    | RejectedRecordsError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeTimestreamWriteService = Effect.gen(function*() {
  const client = yield* Instance.TimestreamWriteClientInstance;

  return yield* Service.fromClientAndCommands<TimestreamWriteService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: TimestreamWriteServiceConfig.toTimestreamWriteClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class TimestreamWriteService extends Effect.Tag("@effect-aws/client-timestream-write/TimestreamWriteService")<
  TimestreamWriteService,
  TimestreamWriteService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeTimestreamWriteService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: TimestreamWriteService.Config) =>
    Layer.effect(this, makeTimestreamWriteService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(TimestreamWriteServiceConfig.setTimestreamWriteServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: TimestreamWriteClientConfig) => TimestreamWriteClient,
  ) =>
    Layer.effect(this, makeTimestreamWriteService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.TimestreamWriteClientInstance,
          Effect.map(TimestreamWriteServiceConfig.toTimestreamWriteClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace TimestreamWriteService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<TimestreamWriteClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
