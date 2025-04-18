/**
 * @since 1.0.0
 */
import {
  BatchGetCollectionCommand,
  type BatchGetCollectionCommandInput,
  type BatchGetCollectionCommandOutput,
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
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  ConflictError,
  InternalServerError,
  OcuLimitExceededError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./OpenSearchServerlessClientInstance.js";
import * as OpenSearchServerlessServiceConfig from "./OpenSearchServerlessServiceConfig.js";

const commands = {
  BatchGetCollectionCommand,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommand,
  BatchGetVpcEndpointCommand,
  CreateAccessPolicyCommand,
  CreateCollectionCommand,
  CreateLifecyclePolicyCommand,
  CreateSecurityConfigCommand,
  CreateSecurityPolicyCommand,
  CreateVpcEndpointCommand,
  DeleteAccessPolicyCommand,
  DeleteCollectionCommand,
  DeleteLifecyclePolicyCommand,
  DeleteSecurityConfigCommand,
  DeleteSecurityPolicyCommand,
  DeleteVpcEndpointCommand,
  GetAccessPolicyCommand,
  GetAccountSettingsCommand,
  GetPoliciesStatsCommand,
  GetSecurityConfigCommand,
  GetSecurityPolicyCommand,
  ListAccessPoliciesCommand,
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
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link BatchGetEffectiveLifecyclePolicyCommand}
   */
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetEffectiveLifecyclePolicyCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link BatchGetLifecyclePolicyCommand}
   */
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetLifecyclePolicyCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link BatchGetVpcEndpointCommand}
   */
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetVpcEndpointCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link CreateAccessPolicyCommand}
   */
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccessPolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateCollectionCommand}
   */
  createCollection(
    args: CreateCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCollectionCommandOutput,
    SdkError | ConflictError | InternalServerError | OcuLimitExceededError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateLifecyclePolicyCommand}
   */
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLifecyclePolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateSecurityConfigCommand}
   */
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityConfigCommandOutput,
    SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateSecurityPolicyCommand}
   */
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityPolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcEndpointCommandOutput,
    SdkError | ConflictError | InternalServerError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link DeleteAccessPolicyCommand}
   */
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccessPolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteCollectionCommand}
   */
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCollectionCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLifecyclePolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteSecurityConfigCommand}
   */
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityConfigCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteSecurityPolicyCommand}
   */
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityPolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcEndpointCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetAccessPolicyCommand}
   */
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccessPolicyCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSettingsCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link GetPoliciesStatsCommand}
   */
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPoliciesStatsCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link GetSecurityConfigCommand}
   */
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityConfigCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetSecurityPolicyCommand}
   */
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityPolicyCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccessPoliciesCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListCollectionsCommand}
   */
  listCollections(
    args: ListCollectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCollectionsCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListLifecyclePoliciesCommand}
   */
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLifecyclePoliciesCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListSecurityConfigsCommand}
   */
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityConfigsCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   */
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityPoliciesCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateAccessPolicyCommand}
   */
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccessPolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountSettingsCommandOutput,
    SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link UpdateCollectionCommand}
   */
  updateCollection(
    args: UpdateCollectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCollectionCommandOutput,
    SdkError | ConflictError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link UpdateLifecyclePolicyCommand}
   */
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateLifecyclePolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link UpdateSecurityConfigCommand}
   */
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityConfigCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateSecurityPolicyCommand}
   */
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityPolicyCommandOutput,
    SdkError | ConflictError | InternalServerError | ResourceNotFoundError | ServiceQuotaExceededError | ValidationError
  >;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateVpcEndpointCommandOutput,
    SdkError | ConflictError | InternalServerError | ValidationError
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
export class OpenSearchServerlessService
  extends Effect.Tag("@effect-aws/client-opensearch-serverless/OpenSearchServerlessService")<
    OpenSearchServerlessService,
    OpenSearchServerlessService$
  >()
{
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
}
