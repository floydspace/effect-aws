/**
 * @since 1.0.0
 */
import {
  DescribeReportCreationCommand,
  type DescribeReportCreationCommandInput,
  type DescribeReportCreationCommandOutput,
  GetComplianceSummaryCommand,
  type GetComplianceSummaryCommandInput,
  type GetComplianceSummaryCommandOutput,
  GetResourcesCommand,
  type GetResourcesCommandInput,
  type GetResourcesCommandOutput,
  GetTagKeysCommand,
  type GetTagKeysCommandInput,
  type GetTagKeysCommandOutput,
  GetTagValuesCommand,
  type GetTagValuesCommandInput,
  type GetTagValuesCommandOutput,
  ListRequiredTagsCommand,
  type ListRequiredTagsCommandInput,
  type ListRequiredTagsCommandOutput,
  paginateGetComplianceSummary,
  paginateGetResources,
  paginateGetTagKeys,
  paginateGetTagValues,
  paginateListRequiredTags,
  type ResourceGroupsTaggingAPIClient,
  type ResourceGroupsTaggingAPIClientConfig,
  StartReportCreationCommand,
  type StartReportCreationCommandInput,
  type StartReportCreationCommandOutput,
  TagResourcesCommand,
  type TagResourcesCommandInput,
  type TagResourcesCommandOutput,
  UntagResourcesCommand,
  type UntagResourcesCommandInput,
  type UntagResourcesCommandOutput,
} from "@aws-sdk/client-resource-groups-tagging-api";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import type {
  ConcurrentModificationError,
  ConstraintViolationError,
  InternalServiceError,
  InvalidParameterError,
  PaginationTokenExpiredError,
  SdkError,
  ThrottledError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./ResourceGroupsTaggingAPIClientInstance.js";
import * as ResourceGroupsTaggingAPIServiceConfig from "./ResourceGroupsTaggingAPIServiceConfig.js";

const commands = {
  DescribeReportCreationCommand,
  GetComplianceSummaryCommand,
  GetResourcesCommand,
  GetTagKeysCommand,
  GetTagValuesCommand,
  ListRequiredTagsCommand,
  StartReportCreationCommand,
  TagResourcesCommand,
  UntagResourcesCommand,
};

const paginators = {
  paginateGetComplianceSummary,
  paginateGetResources,
  paginateGetTagKeys,
  paginateGetTagValues,
  paginateListRequiredTags,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface ResourceGroupsTaggingAPIService$ {
  /**
   * @see {@link DescribeReportCreationCommand}
   */
  describeReportCreation(
    args: DescribeReportCreationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReportCreationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConstraintViolationError
    | InternalServiceError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link GetComplianceSummaryCommand}
   */
  getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetComplianceSummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConstraintViolationError
    | InternalServiceError
    | InvalidParameterError
    | ThrottledError
  >;

  getComplianceSummaryStream(
    args: GetComplianceSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    GetComplianceSummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConstraintViolationError
    | InternalServiceError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link GetResourcesCommand}
   */
  getResources(
    args: GetResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  getResourcesStream(
    args: GetResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    GetResourcesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  /**
   * @see {@link GetTagKeysCommand}
   */
  getTagKeys(
    args: GetTagKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTagKeysCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  getTagKeysStream(
    args: GetTagKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    GetTagKeysCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  /**
   * @see {@link GetTagValuesCommand}
   */
  getTagValues(
    args: GetTagValuesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTagValuesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  getTagValuesStream(
    args: GetTagValuesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    GetTagValuesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  /**
   * @see {@link ListRequiredTagsCommand}
   */
  listRequiredTags(
    args: ListRequiredTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRequiredTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  listRequiredTagsStream(
    args: ListRequiredTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListRequiredTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | PaginationTokenExpiredError
    | ThrottledError
  >;

  /**
   * @see {@link StartReportCreationCommand}
   */
  startReportCreation(
    args: StartReportCreationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartReportCreationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InternalServiceError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link TagResourcesCommand}
   */
  tagResources(
    args: TagResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourcesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServiceError | InvalidParameterError | ThrottledError
  >;

  /**
   * @see {@link UntagResourcesCommand}
   */
  untagResources(
    args: UntagResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourcesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServiceError | InvalidParameterError | ThrottledError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeResourceGroupsTaggingAPIService = Effect.gen(function*() {
  const client = yield* Instance.ResourceGroupsTaggingAPIClientInstance;

  return yield* Service.fromClientAndCommands<ResourceGroupsTaggingAPIService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: ResourceGroupsTaggingAPIServiceConfig.toResourceGroupsTaggingAPIClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ResourceGroupsTaggingAPIService extends Context.Service<
  ResourceGroupsTaggingAPIService,
  ResourceGroupsTaggingAPIService$
>()("@effect-aws/client-resource-groups-tagging-api/ResourceGroupsTaggingAPIService") {
  static readonly defaultLayer = Layer.effect(this, makeResourceGroupsTaggingAPIService).pipe(
    Layer.provide(Instance.layer),
  );
  static readonly layer = (config: ResourceGroupsTaggingAPIService.Config) =>
    Layer.effect(this, makeResourceGroupsTaggingAPIService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(ResourceGroupsTaggingAPIServiceConfig.setResourceGroupsTaggingAPIServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ResourceGroupsTaggingAPIClientConfig) => ResourceGroupsTaggingAPIClient,
  ) =>
    Layer.effect(this, makeResourceGroupsTaggingAPIService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.ResourceGroupsTaggingAPIClientInstance,
          Effect.map(ResourceGroupsTaggingAPIServiceConfig.toResourceGroupsTaggingAPIClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ResourceGroupsTaggingAPIService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<ResourceGroupsTaggingAPIClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = ResourceGroupsTaggingAPIService$;
}
