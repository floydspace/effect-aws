/**
 * @since 1.0.0
 */
import {
  CreateDbClusterCommand,
  type CreateDbClusterCommandInput,
  type CreateDbClusterCommandOutput,
  CreateDbInstanceCommand,
  type CreateDbInstanceCommandInput,
  type CreateDbInstanceCommandOutput,
  CreateDbParameterGroupCommand,
  type CreateDbParameterGroupCommandInput,
  type CreateDbParameterGroupCommandOutput,
  DeleteDbClusterCommand,
  type DeleteDbClusterCommandInput,
  type DeleteDbClusterCommandOutput,
  DeleteDbInstanceCommand,
  type DeleteDbInstanceCommandInput,
  type DeleteDbInstanceCommandOutput,
  GetDbClusterCommand,
  type GetDbClusterCommandInput,
  type GetDbClusterCommandOutput,
  GetDbInstanceCommand,
  type GetDbInstanceCommandInput,
  type GetDbInstanceCommandOutput,
  GetDbParameterGroupCommand,
  type GetDbParameterGroupCommandInput,
  type GetDbParameterGroupCommandOutput,
  ListDbClustersCommand,
  type ListDbClustersCommandInput,
  type ListDbClustersCommandOutput,
  ListDbInstancesCommand,
  type ListDbInstancesCommandInput,
  type ListDbInstancesCommandOutput,
  ListDbInstancesForClusterCommand,
  type ListDbInstancesForClusterCommandInput,
  type ListDbInstancesForClusterCommandOutput,
  ListDbParameterGroupsCommand,
  type ListDbParameterGroupsCommandInput,
  type ListDbParameterGroupsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  type TimestreamInfluxDBClient,
  type TimestreamInfluxDBClientConfig,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateDbClusterCommand,
  type UpdateDbClusterCommandInput,
  type UpdateDbClusterCommandOutput,
  UpdateDbInstanceCommand,
  type UpdateDbInstanceCommandInput,
  type UpdateDbInstanceCommandOutput,
} from "@aws-sdk/client-timestream-influxdb";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./TimestreamInfluxDBClientInstance.js";
import * as TimestreamInfluxDBServiceConfig from "./TimestreamInfluxDBServiceConfig.js";

const commands = {
  CreateDbClusterCommand,
  CreateDbInstanceCommand,
  CreateDbParameterGroupCommand,
  DeleteDbClusterCommand,
  DeleteDbInstanceCommand,
  GetDbClusterCommand,
  GetDbInstanceCommand,
  GetDbParameterGroupCommand,
  ListDbClustersCommand,
  ListDbInstancesCommand,
  ListDbInstancesForClusterCommand,
  ListDbParameterGroupsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDbClusterCommand,
  UpdateDbInstanceCommand,
};

interface TimestreamInfluxDBService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateDbClusterCommand}
   */
  createDbCluster(
    args: CreateDbClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDbClusterCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateDbInstanceCommand}
   */
  createDbInstance(
    args: CreateDbInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDbInstanceCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateDbParameterGroupCommand}
   */
  createDbParameterGroup(
    args: CreateDbParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDbParameterGroupCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDbClusterCommand}
   */
  deleteDbCluster(
    args: DeleteDbClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDbClusterCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDbInstanceCommand}
   */
  deleteDbInstance(
    args: DeleteDbInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDbInstanceCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetDbClusterCommand}
   */
  getDbCluster(
    args: GetDbClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDbClusterCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetDbInstanceCommand}
   */
  getDbInstance(
    args: GetDbInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDbInstanceCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetDbParameterGroupCommand}
   */
  getDbParameterGroup(
    args: GetDbParameterGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDbParameterGroupCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListDbClustersCommand}
   */
  listDbClusters(
    args: ListDbClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDbClustersCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListDbInstancesCommand}
   */
  listDbInstances(
    args: ListDbInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDbInstancesCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListDbInstancesForClusterCommand}
   */
  listDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDbInstancesForClusterCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListDbParameterGroupsCommand}
   */
  listDbParameterGroups(
    args: ListDbParameterGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDbParameterGroupsCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    SdkError | ResourceNotFoundError | ServiceQuotaExceededError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateDbClusterCommand}
   */
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDbClusterCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDbInstanceCommand}
   */
  updateDbInstance(
    args: UpdateDbInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDbInstanceCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeTimestreamInfluxDBService = Effect.gen(function*() {
  const client = yield* Instance.TimestreamInfluxDBClientInstance;

  return Service.fromClientAndCommands<TimestreamInfluxDBService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: TimestreamInfluxDBServiceConfig.toTimestreamInfluxDBClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class TimestreamInfluxDBService
  extends Effect.Tag("@effect-aws/client-timestream-influxdb/TimestreamInfluxDBService")<
    TimestreamInfluxDBService,
    TimestreamInfluxDBService$
  >()
{
  static readonly defaultLayer = Layer.effect(this, makeTimestreamInfluxDBService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: TimestreamInfluxDBService.Config) =>
    Layer.effect(this, makeTimestreamInfluxDBService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(TimestreamInfluxDBServiceConfig.setTimestreamInfluxDBServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: TimestreamInfluxDBClientConfig) => TimestreamInfluxDBClient,
  ) =>
    Layer.effect(this, makeTimestreamInfluxDBService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.TimestreamInfluxDBClientInstance,
          Effect.map(TimestreamInfluxDBServiceConfig.toTimestreamInfluxDBClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace TimestreamInfluxDBService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<TimestreamInfluxDBClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
