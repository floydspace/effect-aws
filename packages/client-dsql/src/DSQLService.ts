/**
 * @since 1.0.0
 */
import {
  CreateClusterCommand,
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  DeleteClusterCommand,
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterPolicyCommand,
  type DeleteClusterPolicyCommandInput,
  type DeleteClusterPolicyCommandOutput,
  type DSQLClient,
  type DSQLClientConfig,
  GetClusterCommand,
  type GetClusterCommandInput,
  type GetClusterCommandOutput,
  GetClusterPolicyCommand,
  type GetClusterPolicyCommandInput,
  type GetClusterPolicyCommandOutput,
  GetVpcEndpointServiceNameCommand,
  type GetVpcEndpointServiceNameCommandInput,
  type GetVpcEndpointServiceNameCommandOutput,
  ListClustersCommand,
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutClusterPolicyCommand,
  type PutClusterPolicyCommandInput,
  type PutClusterPolicyCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateClusterCommand,
  type UpdateClusterCommandInput,
  type UpdateClusterCommandOutput,
} from "@aws-sdk/client-dsql";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./DSQLClientInstance.js";
import * as DSQLServiceConfig from "./DSQLServiceConfig.js";
import type {
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  CreateClusterCommand,
  DeleteClusterCommand,
  DeleteClusterPolicyCommand,
  GetClusterCommand,
  GetClusterPolicyCommand,
  GetVpcEndpointServiceNameCommand,
  ListClustersCommand,
  ListTagsForResourceCommand,
  PutClusterPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
};

interface DSQLService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateClusterCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteClusterPolicyCommand}
   */
  deleteClusterPolicy(
    args: DeleteClusterPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterPolicyCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetClusterCommand}
   */
  getCluster(
    args: GetClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetClusterCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetClusterPolicyCommand}
   */
  getClusterPolicy(
    args: GetClusterPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetClusterPolicyCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetVpcEndpointServiceNameCommand}
   */
  getVpcEndpointServiceName(
    args: GetVpcEndpointServiceNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpcEndpointServiceNameCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClustersCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link PutClusterPolicyCommand}
   */
  putClusterPolicy(
    args: PutClusterPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutClusterPolicyCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundError | ServiceQuotaExceededError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutException | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | ResourceNotFoundError | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDSQLService = Effect.gen(function*() {
  const client = yield* Instance.DSQLClientInstance;

  return yield* Service.fromClientAndCommands<DSQLService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: DSQLServiceConfig.toDSQLClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class DSQLService extends Effect.Tag("@effect-aws/client-dsql/DSQLService")<
  DSQLService,
  DSQLService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeDSQLService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: DSQLService.Config) =>
    Layer.effect(this, makeDSQLService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(DSQLServiceConfig.setDSQLServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: DSQLClientConfig) => DSQLClient,
  ) =>
    Layer.effect(this, makeDSQLService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.DSQLClientInstance,
          Effect.map(DSQLServiceConfig.toDSQLClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace DSQLService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<DSQLClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = DSQLService$;
}
