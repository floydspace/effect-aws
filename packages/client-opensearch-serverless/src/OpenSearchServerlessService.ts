/**
 * @since 1.0.0
 */
import {
  BatchGetCollectionCommand,
  type BatchGetCollectionCommandInput,
  type BatchGetCollectionCommandOutput,
  BatchGetCollectionGroupCommand,
  type BatchGetCollectionGroupCommandInput,
  type BatchGetCollectionGroupCommandOutput,
  BatchGetEffectiveLifecyclePolicyCommand,
  type BatchGetEffectiveLifecyclePolicyCommandInput,
  type BatchGetEffectiveLifecyclePolicyCommandOutput,
  BatchGetLifecyclePolicyCommand,
  type BatchGetLifecyclePolicyCommandInput,
  type BatchGetLifecyclePolicyCommandOutput,
  BatchGetVpcEndpointCommand,
  type BatchGetVpcEndpointCommandInput,
  type BatchGetVpcEndpointCommandOutput,
  CreateAccessPolicyCommand,
  type CreateAccessPolicyCommandInput,
  type CreateAccessPolicyCommandOutput,
  CreateCollectionCommand,
  type CreateCollectionCommandInput,
  type CreateCollectionCommandOutput,
  CreateCollectionGroupCommand,
  type CreateCollectionGroupCommandInput,
  type CreateCollectionGroupCommandOutput,
  CreateIndexCommand,
  type CreateIndexCommandInput,
  type CreateIndexCommandOutput,
  CreateLifecyclePolicyCommand,
  type CreateLifecyclePolicyCommandInput,
  type CreateLifecyclePolicyCommandOutput,
  CreateSecurityConfigCommand,
  type CreateSecurityConfigCommandInput,
  type CreateSecurityConfigCommandOutput,
  CreateSecurityPolicyCommand,
  type CreateSecurityPolicyCommandInput,
  type CreateSecurityPolicyCommandOutput,
  CreateVpcEndpointCommand,
  type CreateVpcEndpointCommandInput,
  type CreateVpcEndpointCommandOutput,
  DeleteAccessPolicyCommand,
  type DeleteAccessPolicyCommandInput,
  type DeleteAccessPolicyCommandOutput,
  DeleteCollectionCommand,
  type DeleteCollectionCommandInput,
  type DeleteCollectionCommandOutput,
  DeleteCollectionGroupCommand,
  type DeleteCollectionGroupCommandInput,
  type DeleteCollectionGroupCommandOutput,
  DeleteIndexCommand,
  type DeleteIndexCommandInput,
  type DeleteIndexCommandOutput,
  DeleteLifecyclePolicyCommand,
  type DeleteLifecyclePolicyCommandInput,
  type DeleteLifecyclePolicyCommandOutput,
  DeleteSecurityConfigCommand,
  type DeleteSecurityConfigCommandInput,
  type DeleteSecurityConfigCommandOutput,
  DeleteSecurityPolicyCommand,
  type DeleteSecurityPolicyCommandInput,
  type DeleteSecurityPolicyCommandOutput,
  DeleteVpcEndpointCommand,
  type DeleteVpcEndpointCommandInput,
  type DeleteVpcEndpointCommandOutput,
  GetAccessPolicyCommand,
  type GetAccessPolicyCommandInput,
  type GetAccessPolicyCommandOutput,
  GetAccountSettingsCommand,
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetIndexCommand,
  type GetIndexCommandInput,
  type GetIndexCommandOutput,
  GetPoliciesStatsCommand,
  type GetPoliciesStatsCommandInput,
  type GetPoliciesStatsCommandOutput,
  GetSecurityConfigCommand,
  type GetSecurityConfigCommandInput,
  type GetSecurityConfigCommandOutput,
  GetSecurityPolicyCommand,
  type GetSecurityPolicyCommandInput,
  type GetSecurityPolicyCommandOutput,
  ListAccessPoliciesCommand,
  type ListAccessPoliciesCommandInput,
  type ListAccessPoliciesCommandOutput,
  ListCollectionGroupsCommand,
  type ListCollectionGroupsCommandInput,
  type ListCollectionGroupsCommandOutput,
  ListCollectionsCommand,
  type ListCollectionsCommandInput,
  type ListCollectionsCommandOutput,
  ListLifecyclePoliciesCommand,
  type ListLifecyclePoliciesCommandInput,
  type ListLifecyclePoliciesCommandOutput,
  ListSecurityConfigsCommand,
  type ListSecurityConfigsCommandInput,
  type ListSecurityConfigsCommandOutput,
  ListSecurityPoliciesCommand,
  type ListSecurityPoliciesCommandInput,
  type ListSecurityPoliciesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListVpcEndpointsCommand,
  type ListVpcEndpointsCommandInput,
  type ListVpcEndpointsCommandOutput,
  type OpenSearchServerlessClient,
  type OpenSearchServerlessClientConfig,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAccessPolicyCommand,
  type UpdateAccessPolicyCommandInput,
  type UpdateAccessPolicyCommandOutput,
  UpdateAccountSettingsCommand,
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateCollectionCommand,
  type UpdateCollectionCommandInput,
  type UpdateCollectionCommandOutput,
  UpdateCollectionGroupCommand,
  type UpdateCollectionGroupCommandInput,
  type UpdateCollectionGroupCommandOutput,
  UpdateIndexCommand,
  type UpdateIndexCommandInput,
  type UpdateIndexCommandOutput,
  UpdateLifecyclePolicyCommand,
  type UpdateLifecyclePolicyCommandInput,
  type UpdateLifecyclePolicyCommandOutput,
  UpdateSecurityConfigCommand,
  type UpdateSecurityConfigCommandInput,
  type UpdateSecurityConfigCommandOutput,
  UpdateSecurityPolicyCommand,
  type UpdateSecurityPolicyCommandInput,
  type UpdateSecurityPolicyCommandOutput,
  UpdateVpcEndpointCommand,
  type UpdateVpcEndpointCommandInput,
  type UpdateVpcEndpointCommandOutput,
} from "@aws-sdk/client-opensearchserverless";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  ConflictError,
  InternalServerError,
  OcuLimitExceededError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./OpenSearchServerlessClientInstance.js";
import * as OpenSearchServerlessServiceConfig from "./OpenSearchServerlessServiceConfig.js";

const commands = {
  BatchGetCollectionCommand,
  BatchGetCollectionGroupCommand,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommand,
  BatchGetVpcEndpointCommand,
  CreateAccessPolicyCommand,
  CreateCollectionCommand,
  CreateCollectionGroupCommand,
  CreateIndexCommand,
  CreateLifecyclePolicyCommand,
  CreateSecurityConfigCommand,
  CreateSecurityPolicyCommand,
  CreateVpcEndpointCommand,
  DeleteAccessPolicyCommand,
  DeleteCollectionCommand,
  DeleteCollectionGroupCommand,
  DeleteIndexCommand,
  DeleteLifecyclePolicyCommand,
  DeleteSecurityConfigCommand,
  DeleteSecurityPolicyCommand,
  DeleteVpcEndpointCommand,
  GetAccessPolicyCommand,
  GetAccountSettingsCommand,
  GetIndexCommand,
  GetPoliciesStatsCommand,
  GetSecurityConfigCommand,
  GetSecurityPolicyCommand,
  ListAccessPoliciesCommand,
  ListCollectionGroupsCommand,
  ListCollectionsCommand,
  ListLifecyclePoliciesCommand,
  ListSecurityConfigsCommand,
  ListSecurityPoliciesCommand,
  ListTagsForResourceCommand,
  ListVpcEndpointsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessPolicyCommand,
  UpdateAccountSettingsCommand,
  UpdateCollectionCommand,
  UpdateCollectionGroupCommand,
  UpdateIndexCommand,
  UpdateLifecyclePolicyCommand,
  UpdateSecurityConfigCommand,
  UpdateSecurityPolicyCommand,
  UpdateVpcEndpointCommand,
};

interface OpenSearchServerlessService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchGetCollectionCommand}
   */
  batchGetCollection(
    args: BatchGetCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetCollectionCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link BatchGetCollectionGroupCommand}
   */
  batchGetCollectionGroup(
    args: BatchGetCollectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetCollectionGroupCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link BatchGetEffectiveLifecyclePolicyCommand}
   */
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetEffectiveLifecyclePolicyCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link BatchGetLifecyclePolicyCommand}
   */
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetLifecyclePolicyCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link BatchGetVpcEndpointCommand}
   */
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetVpcEndpointCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link CreateAccessPolicyCommand}
   */
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccessPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateCollectionCommand}
   */
  createCollection(
    args: CreateCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCollectionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | InternalServerError
    | OcuLimitExceededError
    | ServiceQuotaExceededError
    | ValidationError
  >;

  /**
   * @see {@link CreateCollectionGroupCommand}
   */
  createCollectionGroup(
    args: CreateCollectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCollectionGroupCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(
    args: CreateIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIndexCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link CreateLifecyclePolicyCommand}
   */
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLifecyclePolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateSecurityConfigCommand}
   */
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityConfigCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateSecurityPolicyCommand}
   */
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcEndpointCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link DeleteAccessPolicyCommand}
   */
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccessPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteCollectionCommand}
   */
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCollectionCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteCollectionGroupCommand}
   */
  deleteCollectionGroup(
    args: DeleteCollectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCollectionGroupCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(
    args: DeleteIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIndexCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLifecyclePolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteSecurityConfigCommand}
   */
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityConfigCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteSecurityPolicyCommand}
   */
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcEndpointCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetAccessPolicyCommand}
   */
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccessPolicyCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSettingsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link GetIndexCommand}
   */
  getIndex(
    args: GetIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIndexCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetPoliciesStatsCommand}
   */
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPoliciesStatsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link GetSecurityConfigCommand}
   */
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityConfigCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetSecurityPolicyCommand}
   */
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityPolicyCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccessPoliciesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListCollectionGroupsCommand}
   */
  listCollectionGroups(
    args: ListCollectionGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCollectionGroupsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListCollectionsCommand}
   */
  listCollections(
    args: ListCollectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCollectionsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListLifecyclePoliciesCommand}
   */
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLifecyclePoliciesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListSecurityConfigsCommand}
   */
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityConfigsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   */
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityPoliciesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
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
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
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
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateAccessPolicyCommand}
   */
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccessPolicyCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountSettingsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link UpdateCollectionCommand}
   */
  updateCollection(
    args: UpdateCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCollectionCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link UpdateCollectionGroupCommand}
   */
  updateCollectionGroup(
    args: UpdateCollectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCollectionGroupCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link UpdateIndexCommand}
   */
  updateIndex(
    args: UpdateIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIndexCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateLifecyclePolicyCommand}
   */
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateLifecyclePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ValidationError
  >;

  /**
   * @see {@link UpdateSecurityConfigCommand}
   */
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityConfigCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateSecurityPolicyCommand}
   */
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ValidationError
  >;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateVpcEndpointCommandOutput,
    Cause.TimeoutError | SdkError | ConflictError | InternalServerError | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOpenSearchServerlessService = Effect.gen(function*() {
  const client = yield* Instance.OpenSearchServerlessClientInstance;

  return yield* Service.fromClientAndCommands<OpenSearchServerlessService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: OpenSearchServerlessServiceConfig.toOpenSearchServerlessClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class OpenSearchServerlessService extends ServiceMap.Service<
  OpenSearchServerlessService,
  OpenSearchServerlessService$
>()("@effect-aws/client-opensearch-serverless/OpenSearchServerlessService") {
  static readonly defaultLayer = Layer.effect(this, makeOpenSearchServerlessService).pipe(
    Layer.provide(Instance.layer),
  );
  static readonly layer = (config: OpenSearchServerlessService.Config) =>
    Layer.effect(this, makeOpenSearchServerlessService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(OpenSearchServerlessServiceConfig.setOpenSearchServerlessServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: OpenSearchServerlessClientConfig) => OpenSearchServerlessClient,
  ) =>
    Layer.effect(this, makeOpenSearchServerlessService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.OpenSearchServerlessClientInstance,
          Effect.map(OpenSearchServerlessServiceConfig.toOpenSearchServerlessClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace OpenSearchServerlessService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<OpenSearchServerlessClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = OpenSearchServerlessService$;
}
