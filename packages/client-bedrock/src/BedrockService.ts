/**
 * @since 1.0.0
 */
import {
  BatchDeleteEvaluationJobCommand,
  type BatchDeleteEvaluationJobCommandInput,
  type BatchDeleteEvaluationJobCommandOutput,
  type BedrockClient,
  type BedrockClientConfig,
  CreateEvaluationJobCommand,
  type CreateEvaluationJobCommandInput,
  type CreateEvaluationJobCommandOutput,
  CreateGuardrailCommand,
  type CreateGuardrailCommandInput,
  type CreateGuardrailCommandOutput,
  CreateGuardrailVersionCommand,
  type CreateGuardrailVersionCommandInput,
  type CreateGuardrailVersionCommandOutput,
  CreateInferenceProfileCommand,
  type CreateInferenceProfileCommandInput,
  type CreateInferenceProfileCommandOutput,
  CreateMarketplaceModelEndpointCommand,
  type CreateMarketplaceModelEndpointCommandInput,
  type CreateMarketplaceModelEndpointCommandOutput,
  CreateModelCopyJobCommand,
  type CreateModelCopyJobCommandInput,
  type CreateModelCopyJobCommandOutput,
  CreateModelCustomizationJobCommand,
  type CreateModelCustomizationJobCommandInput,
  type CreateModelCustomizationJobCommandOutput,
  CreateModelImportJobCommand,
  type CreateModelImportJobCommandInput,
  type CreateModelImportJobCommandOutput,
  CreateModelInvocationJobCommand,
  type CreateModelInvocationJobCommandInput,
  type CreateModelInvocationJobCommandOutput,
  CreatePromptRouterCommand,
  type CreatePromptRouterCommandInput,
  type CreatePromptRouterCommandOutput,
  CreateProvisionedModelThroughputCommand,
  type CreateProvisionedModelThroughputCommandInput,
  type CreateProvisionedModelThroughputCommandOutput,
  DeleteCustomModelCommand,
  type DeleteCustomModelCommandInput,
  type DeleteCustomModelCommandOutput,
  DeleteGuardrailCommand,
  type DeleteGuardrailCommandInput,
  type DeleteGuardrailCommandOutput,
  DeleteImportedModelCommand,
  type DeleteImportedModelCommandInput,
  type DeleteImportedModelCommandOutput,
  DeleteInferenceProfileCommand,
  type DeleteInferenceProfileCommandInput,
  type DeleteInferenceProfileCommandOutput,
  DeleteMarketplaceModelEndpointCommand,
  type DeleteMarketplaceModelEndpointCommandInput,
  type DeleteMarketplaceModelEndpointCommandOutput,
  DeleteModelInvocationLoggingConfigurationCommand,
  type DeleteModelInvocationLoggingConfigurationCommandInput,
  type DeleteModelInvocationLoggingConfigurationCommandOutput,
  DeletePromptRouterCommand,
  type DeletePromptRouterCommandInput,
  type DeletePromptRouterCommandOutput,
  DeleteProvisionedModelThroughputCommand,
  type DeleteProvisionedModelThroughputCommandInput,
  type DeleteProvisionedModelThroughputCommandOutput,
  DeregisterMarketplaceModelEndpointCommand,
  type DeregisterMarketplaceModelEndpointCommandInput,
  type DeregisterMarketplaceModelEndpointCommandOutput,
  GetCustomModelCommand,
  type GetCustomModelCommandInput,
  type GetCustomModelCommandOutput,
  GetEvaluationJobCommand,
  type GetEvaluationJobCommandInput,
  type GetEvaluationJobCommandOutput,
  GetFoundationModelCommand,
  type GetFoundationModelCommandInput,
  type GetFoundationModelCommandOutput,
  GetGuardrailCommand,
  type GetGuardrailCommandInput,
  type GetGuardrailCommandOutput,
  GetImportedModelCommand,
  type GetImportedModelCommandInput,
  type GetImportedModelCommandOutput,
  GetInferenceProfileCommand,
  type GetInferenceProfileCommandInput,
  type GetInferenceProfileCommandOutput,
  GetMarketplaceModelEndpointCommand,
  type GetMarketplaceModelEndpointCommandInput,
  type GetMarketplaceModelEndpointCommandOutput,
  GetModelCopyJobCommand,
  type GetModelCopyJobCommandInput,
  type GetModelCopyJobCommandOutput,
  GetModelCustomizationJobCommand,
  type GetModelCustomizationJobCommandInput,
  type GetModelCustomizationJobCommandOutput,
  GetModelImportJobCommand,
  type GetModelImportJobCommandInput,
  type GetModelImportJobCommandOutput,
  GetModelInvocationJobCommand,
  type GetModelInvocationJobCommandInput,
  type GetModelInvocationJobCommandOutput,
  GetModelInvocationLoggingConfigurationCommand,
  type GetModelInvocationLoggingConfigurationCommandInput,
  type GetModelInvocationLoggingConfigurationCommandOutput,
  GetPromptRouterCommand,
  type GetPromptRouterCommandInput,
  type GetPromptRouterCommandOutput,
  GetProvisionedModelThroughputCommand,
  type GetProvisionedModelThroughputCommandInput,
  type GetProvisionedModelThroughputCommandOutput,
  ListCustomModelsCommand,
  type ListCustomModelsCommandInput,
  type ListCustomModelsCommandOutput,
  ListEvaluationJobsCommand,
  type ListEvaluationJobsCommandInput,
  type ListEvaluationJobsCommandOutput,
  ListFoundationModelsCommand,
  type ListFoundationModelsCommandInput,
  type ListFoundationModelsCommandOutput,
  ListGuardrailsCommand,
  type ListGuardrailsCommandInput,
  type ListGuardrailsCommandOutput,
  ListImportedModelsCommand,
  type ListImportedModelsCommandInput,
  type ListImportedModelsCommandOutput,
  ListInferenceProfilesCommand,
  type ListInferenceProfilesCommandInput,
  type ListInferenceProfilesCommandOutput,
  ListMarketplaceModelEndpointsCommand,
  type ListMarketplaceModelEndpointsCommandInput,
  type ListMarketplaceModelEndpointsCommandOutput,
  ListModelCopyJobsCommand,
  type ListModelCopyJobsCommandInput,
  type ListModelCopyJobsCommandOutput,
  ListModelCustomizationJobsCommand,
  type ListModelCustomizationJobsCommandInput,
  type ListModelCustomizationJobsCommandOutput,
  ListModelImportJobsCommand,
  type ListModelImportJobsCommandInput,
  type ListModelImportJobsCommandOutput,
  ListModelInvocationJobsCommand,
  type ListModelInvocationJobsCommandInput,
  type ListModelInvocationJobsCommandOutput,
  ListPromptRoutersCommand,
  type ListPromptRoutersCommandInput,
  type ListPromptRoutersCommandOutput,
  ListProvisionedModelThroughputsCommand,
  type ListProvisionedModelThroughputsCommandInput,
  type ListProvisionedModelThroughputsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutModelInvocationLoggingConfigurationCommand,
  type PutModelInvocationLoggingConfigurationCommandInput,
  type PutModelInvocationLoggingConfigurationCommandOutput,
  RegisterMarketplaceModelEndpointCommand,
  type RegisterMarketplaceModelEndpointCommandInput,
  type RegisterMarketplaceModelEndpointCommandOutput,
  StopEvaluationJobCommand,
  type StopEvaluationJobCommandInput,
  type StopEvaluationJobCommandOutput,
  StopModelCustomizationJobCommand,
  type StopModelCustomizationJobCommandInput,
  type StopModelCustomizationJobCommandOutput,
  StopModelInvocationJobCommand,
  type StopModelInvocationJobCommandInput,
  type StopModelInvocationJobCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateGuardrailCommand,
  type UpdateGuardrailCommandInput,
  type UpdateGuardrailCommandOutput,
  UpdateMarketplaceModelEndpointCommand,
  type UpdateMarketplaceModelEndpointCommandInput,
  type UpdateMarketplaceModelEndpointCommandOutput,
  UpdateProvisionedModelThroughputCommand,
  type UpdateProvisionedModelThroughputCommandInput,
  type UpdateProvisionedModelThroughputCommandOutput,
} from "@aws-sdk/client-bedrock";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./BedrockClientInstance.js";
import * as BedrockServiceConfig from "./BedrockServiceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  ServiceUnavailableError,
  ThrottlingError,
  TooManyTagsError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  BatchDeleteEvaluationJobCommand,
  CreateEvaluationJobCommand,
  CreateGuardrailCommand,
  CreateGuardrailVersionCommand,
  CreateInferenceProfileCommand,
  CreateMarketplaceModelEndpointCommand,
  CreateModelCopyJobCommand,
  CreateModelCustomizationJobCommand,
  CreateModelImportJobCommand,
  CreateModelInvocationJobCommand,
  CreatePromptRouterCommand,
  CreateProvisionedModelThroughputCommand,
  DeleteCustomModelCommand,
  DeleteGuardrailCommand,
  DeleteImportedModelCommand,
  DeleteInferenceProfileCommand,
  DeleteMarketplaceModelEndpointCommand,
  DeleteModelInvocationLoggingConfigurationCommand,
  DeletePromptRouterCommand,
  DeleteProvisionedModelThroughputCommand,
  DeregisterMarketplaceModelEndpointCommand,
  GetCustomModelCommand,
  GetEvaluationJobCommand,
  GetFoundationModelCommand,
  GetGuardrailCommand,
  GetImportedModelCommand,
  GetInferenceProfileCommand,
  GetMarketplaceModelEndpointCommand,
  GetModelCopyJobCommand,
  GetModelCustomizationJobCommand,
  GetModelImportJobCommand,
  GetModelInvocationJobCommand,
  GetModelInvocationLoggingConfigurationCommand,
  GetPromptRouterCommand,
  GetProvisionedModelThroughputCommand,
  ListCustomModelsCommand,
  ListEvaluationJobsCommand,
  ListFoundationModelsCommand,
  ListGuardrailsCommand,
  ListImportedModelsCommand,
  ListInferenceProfilesCommand,
  ListMarketplaceModelEndpointsCommand,
  ListModelCopyJobsCommand,
  ListModelCustomizationJobsCommand,
  ListModelImportJobsCommand,
  ListModelInvocationJobsCommand,
  ListPromptRoutersCommand,
  ListProvisionedModelThroughputsCommand,
  ListTagsForResourceCommand,
  PutModelInvocationLoggingConfigurationCommand,
  RegisterMarketplaceModelEndpointCommand,
  StopEvaluationJobCommand,
  StopModelCustomizationJobCommand,
  StopModelInvocationJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGuardrailCommand,
  UpdateMarketplaceModelEndpointCommand,
  UpdateProvisionedModelThroughputCommand,
};

interface BedrockService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchDeleteEvaluationJobCommand}
   */
  batchDeleteEvaluationJob(
    args: BatchDeleteEvaluationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteEvaluationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateEvaluationJobCommand}
   */
  createEvaluationJob(
    args: CreateEvaluationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEvaluationJobCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateGuardrailCommand}
   */
  createGuardrail(
    args: CreateGuardrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGuardrailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | TooManyTagsError
    | ValidationError
  >;

  /**
   * @see {@link CreateGuardrailVersionCommand}
   */
  createGuardrailVersion(
    args: CreateGuardrailVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGuardrailVersionCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateInferenceProfileCommand}
   */
  createInferenceProfile(
    args: CreateInferenceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInferenceProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | TooManyTagsError
    | ValidationError
  >;

  /**
   * @see {@link CreateMarketplaceModelEndpointCommand}
   */
  createMarketplaceModelEndpoint(
    args: CreateMarketplaceModelEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMarketplaceModelEndpointCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateModelCopyJobCommand}
   */
  createModelCopyJob(
    args: CreateModelCopyJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateModelCopyJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | TooManyTagsError
  >;

  /**
   * @see {@link CreateModelCustomizationJobCommand}
   */
  createModelCustomizationJob(
    args: CreateModelCustomizationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateModelCustomizationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | TooManyTagsError
    | ValidationError
  >;

  /**
   * @see {@link CreateModelImportJobCommand}
   */
  createModelImportJob(
    args: CreateModelImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateModelImportJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | TooManyTagsError
    | ValidationError
  >;

  /**
   * @see {@link CreateModelInvocationJobCommand}
   */
  createModelInvocationJob(
    args: CreateModelInvocationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateModelInvocationJobCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreatePromptRouterCommand}
   */
  createPromptRouter(
    args: CreatePromptRouterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePromptRouterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | TooManyTagsError
    | ValidationError
  >;

  /**
   * @see {@link CreateProvisionedModelThroughputCommand}
   */
  createProvisionedModelThroughput(
    args: CreateProvisionedModelThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateProvisionedModelThroughputCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | TooManyTagsError
    | ValidationError
  >;

  /**
   * @see {@link DeleteCustomModelCommand}
   */
  deleteCustomModel(
    args: DeleteCustomModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteGuardrailCommand}
   */
  deleteGuardrail(
    args: DeleteGuardrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGuardrailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteImportedModelCommand}
   */
  deleteImportedModel(
    args: DeleteImportedModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteImportedModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteInferenceProfileCommand}
   */
  deleteInferenceProfile(
    args: DeleteInferenceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInferenceProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteMarketplaceModelEndpointCommand}
   */
  deleteMarketplaceModelEndpoint(
    args: DeleteMarketplaceModelEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMarketplaceModelEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteModelInvocationLoggingConfigurationCommand}
   */
  deleteModelInvocationLoggingConfiguration(
    args: DeleteModelInvocationLoggingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteModelInvocationLoggingConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError
  >;

  /**
   * @see {@link DeletePromptRouterCommand}
   */
  deletePromptRouter(
    args: DeletePromptRouterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePromptRouterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteProvisionedModelThroughputCommand}
   */
  deleteProvisionedModelThroughput(
    args: DeleteProvisionedModelThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisionedModelThroughputCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeregisterMarketplaceModelEndpointCommand}
   */
  deregisterMarketplaceModelEndpoint(
    args: DeregisterMarketplaceModelEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterMarketplaceModelEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetCustomModelCommand}
   */
  getCustomModel(
    args: GetCustomModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCustomModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetEvaluationJobCommand}
   */
  getEvaluationJob(
    args: GetEvaluationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEvaluationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetFoundationModelCommand}
   */
  getFoundationModel(
    args: GetFoundationModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFoundationModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetGuardrailCommand}
   */
  getGuardrail(
    args: GetGuardrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGuardrailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetImportedModelCommand}
   */
  getImportedModel(
    args: GetImportedModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetImportedModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetInferenceProfileCommand}
   */
  getInferenceProfile(
    args: GetInferenceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInferenceProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetMarketplaceModelEndpointCommand}
   */
  getMarketplaceModelEndpoint(
    args: GetMarketplaceModelEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMarketplaceModelEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetModelCopyJobCommand}
   */
  getModelCopyJob(
    args: GetModelCopyJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelCopyJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetModelCustomizationJobCommand}
   */
  getModelCustomizationJob(
    args: GetModelCustomizationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelCustomizationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetModelImportJobCommand}
   */
  getModelImportJob(
    args: GetModelImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelImportJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetModelInvocationJobCommand}
   */
  getModelInvocationJob(
    args: GetModelInvocationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelInvocationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetModelInvocationLoggingConfigurationCommand}
   */
  getModelInvocationLoggingConfiguration(
    args: GetModelInvocationLoggingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelInvocationLoggingConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError
  >;

  /**
   * @see {@link GetPromptRouterCommand}
   */
  getPromptRouter(
    args: GetPromptRouterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPromptRouterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetProvisionedModelThroughputCommand}
   */
  getProvisionedModelThroughput(
    args: GetProvisionedModelThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetProvisionedModelThroughputCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListCustomModelsCommand}
   */
  listCustomModels(
    args: ListCustomModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCustomModelsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListEvaluationJobsCommand}
   */
  listEvaluationJobs(
    args: ListEvaluationJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEvaluationJobsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListFoundationModelsCommand}
   */
  listFoundationModels(
    args: ListFoundationModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFoundationModelsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListGuardrailsCommand}
   */
  listGuardrails(
    args: ListGuardrailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGuardrailsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListImportedModelsCommand}
   */
  listImportedModels(
    args: ListImportedModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImportedModelsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListInferenceProfilesCommand}
   */
  listInferenceProfiles(
    args: ListInferenceProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInferenceProfilesCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListMarketplaceModelEndpointsCommand}
   */
  listMarketplaceModelEndpoints(
    args: ListMarketplaceModelEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMarketplaceModelEndpointsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListModelCopyJobsCommand}
   */
  listModelCopyJobs(
    args: ListModelCopyJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListModelCopyJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListModelCustomizationJobsCommand}
   */
  listModelCustomizationJobs(
    args: ListModelCustomizationJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListModelCustomizationJobsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListModelImportJobsCommand}
   */
  listModelImportJobs(
    args: ListModelImportJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListModelImportJobsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListModelInvocationJobsCommand}
   */
  listModelInvocationJobs(
    args: ListModelInvocationJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListModelInvocationJobsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPromptRoutersCommand}
   */
  listPromptRouters(
    args: ListPromptRoutersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPromptRoutersCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListProvisionedModelThroughputsCommand}
   */
  listProvisionedModelThroughputs(
    args: ListProvisionedModelThroughputsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisionedModelThroughputsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
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
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link PutModelInvocationLoggingConfigurationCommand}
   */
  putModelInvocationLoggingConfiguration(
    args: PutModelInvocationLoggingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutModelInvocationLoggingConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link RegisterMarketplaceModelEndpointCommand}
   */
  registerMarketplaceModelEndpoint(
    args: RegisterMarketplaceModelEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterMarketplaceModelEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StopEvaluationJobCommand}
   */
  stopEvaluationJob(
    args: StopEvaluationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopEvaluationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StopModelCustomizationJobCommand}
   */
  stopModelCustomizationJob(
    args: StopModelCustomizationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopModelCustomizationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StopModelInvocationJobCommand}
   */
  stopModelInvocationJob(
    args: StopModelInvocationJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopModelInvocationJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
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
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | TooManyTagsError
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
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateGuardrailCommand}
   */
  updateGuardrail(
    args: UpdateGuardrailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGuardrailCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateMarketplaceModelEndpointCommand}
   */
  updateMarketplaceModelEndpoint(
    args: UpdateMarketplaceModelEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMarketplaceModelEndpointCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateProvisionedModelThroughputCommand}
   */
  updateProvisionedModelThroughput(
    args: UpdateProvisionedModelThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateProvisionedModelThroughputCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
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
export const makeBedrockService = Effect.gen(function*() {
  const client = yield* Instance.BedrockClientInstance;

  return yield* Service.fromClientAndCommands<BedrockService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: BedrockServiceConfig.toBedrockClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class BedrockService extends Effect.Tag("@effect-aws/client-bedrock/BedrockService")<
  BedrockService,
  BedrockService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeBedrockService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: BedrockService.Config) =>
    Layer.effect(this, makeBedrockService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(BedrockServiceConfig.setBedrockServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: BedrockClientConfig) => BedrockClient,
  ) =>
    Layer.effect(this, makeBedrockService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.BedrockClientInstance,
          Effect.map(BedrockServiceConfig.toBedrockClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace BedrockService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<BedrockClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
