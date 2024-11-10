/**
 * @since 1.0.0
 */
import {
  BedrockServiceException,
  type BedrockClient,
  type BedrockClientConfig,
  BatchDeleteEvaluationJobCommand,
  type BatchDeleteEvaluationJobCommandInput,
  type BatchDeleteEvaluationJobCommandOutput,
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
  DeleteModelInvocationLoggingConfigurationCommand,
  type DeleteModelInvocationLoggingConfigurationCommandInput,
  type DeleteModelInvocationLoggingConfigurationCommandOutput,
  DeleteProvisionedModelThroughputCommand,
  type DeleteProvisionedModelThroughputCommandInput,
  type DeleteProvisionedModelThroughputCommandOutput,
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
  ListProvisionedModelThroughputsCommand,
  type ListProvisionedModelThroughputsCommandInput,
  type ListProvisionedModelThroughputsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutModelInvocationLoggingConfigurationCommand,
  type PutModelInvocationLoggingConfigurationCommandInput,
  type PutModelInvocationLoggingConfigurationCommandOutput,
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
  UpdateProvisionedModelThroughputCommand,
  type UpdateProvisionedModelThroughputCommandInput,
  type UpdateProvisionedModelThroughputCommandOutput,
} from "@aws-sdk/client-bedrock";
import { Data, Effect, Layer, Record } from "effect";
import {
  BedrockClientInstance,
  BedrockClientInstanceLayer,
} from "./BedrockClientInstance";
import {
  DefaultBedrockClientConfigLayer,
  makeDefaultBedrockClientInstanceConfig,
  BedrockClientInstanceConfig,
} from "./BedrockClientInstanceConfig";
import {
  AllServiceErrors,
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  ThrottlingError,
  TooManyTagsError,
  ValidationError,
  SdkError,
  TaggedException,
} from "./Errors";

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
  BatchDeleteEvaluationJobCommand,
  CreateEvaluationJobCommand,
  CreateGuardrailCommand,
  CreateGuardrailVersionCommand,
  CreateInferenceProfileCommand,
  CreateModelCopyJobCommand,
  CreateModelCustomizationJobCommand,
  CreateModelImportJobCommand,
  CreateModelInvocationJobCommand,
  CreateProvisionedModelThroughputCommand,
  DeleteCustomModelCommand,
  DeleteGuardrailCommand,
  DeleteImportedModelCommand,
  DeleteInferenceProfileCommand,
  DeleteModelInvocationLoggingConfigurationCommand,
  DeleteProvisionedModelThroughputCommand,
  GetCustomModelCommand,
  GetEvaluationJobCommand,
  GetFoundationModelCommand,
  GetGuardrailCommand,
  GetImportedModelCommand,
  GetInferenceProfileCommand,
  GetModelCopyJobCommand,
  GetModelCustomizationJobCommand,
  GetModelImportJobCommand,
  GetModelInvocationJobCommand,
  GetModelInvocationLoggingConfigurationCommand,
  GetProvisionedModelThroughputCommand,
  ListCustomModelsCommand,
  ListEvaluationJobsCommand,
  ListFoundationModelsCommand,
  ListGuardrailsCommand,
  ListImportedModelsCommand,
  ListInferenceProfilesCommand,
  ListModelCopyJobsCommand,
  ListModelCustomizationJobsCommand,
  ListModelImportJobsCommand,
  ListModelInvocationJobsCommand,
  ListProvisionedModelThroughputsCommand,
  ListTagsForResourceCommand,
  PutModelInvocationLoggingConfigurationCommand,
  StopEvaluationJobCommand,
  StopModelCustomizationJobCommand,
  StopModelInvocationJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGuardrailCommand,
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
   * @see {@link CreateModelCopyJobCommand}
   */
  createModelCopyJob(
    args: CreateModelCopyJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateModelCopyJobCommandOutput,
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
   * @see {@link CreateProvisionedModelThroughputCommand}
   */
  createProvisionedModelThroughput(
    args: CreateProvisionedModelThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateProvisionedModelThroughputCommandOutput,
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
    | SdkError
    | AccessDeniedError
    | ConflictError
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
    SdkError | AccessDeniedError | InternalServerError | ThrottlingError
  >;

  /**
   * @see {@link DeleteProvisionedModelThroughputCommand}
   */
  deleteProvisionedModelThroughput(
    args: DeleteProvisionedModelThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisionedModelThroughputCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
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
    SdkError | AccessDeniedError | InternalServerError | ThrottlingError
  >;

  /**
   * @see {@link GetProvisionedModelThroughputCommand}
   */
  getProvisionedModelThroughput(
    args: GetProvisionedModelThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetProvisionedModelThroughputCommandOutput,
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
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListEvaluationJobsCommand}
   */
  listEvaluationJobs(
    args: ListEvaluationJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEvaluationJobsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListFoundationModelsCommand}
   */
  listFoundationModels(
    args: ListFoundationModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFoundationModelsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListGuardrailsCommand}
   */
  listGuardrails(
    args: ListGuardrailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGuardrailsCommandOutput,
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
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListInferenceProfilesCommand}
   */
  listInferenceProfiles(
    args: ListInferenceProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInferenceProfilesCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
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
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListModelImportJobsCommand}
   */
  listModelImportJobs(
    args: ListModelImportJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListModelImportJobsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListModelInvocationJobsCommand}
   */
  listModelInvocationJobs(
    args: ListModelInvocationJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListModelInvocationJobsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListProvisionedModelThroughputsCommand}
   */
  listProvisionedModelThroughputs(
    args: ListProvisionedModelThroughputsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisionedModelThroughputsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
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
    | SdkError
    | AccessDeniedError
    | InternalServerError
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
export const makeBedrockService = Effect.gen(function* (_) {
  const client = yield* _(BedrockClientInstance);

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
            e instanceof BedrockServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<BedrockServiceException>
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
  }, {}) as BedrockService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class BedrockService extends Effect.Tag(
  "@effect-aws/client-bedrock/BedrockService",
)<BedrockService, BedrockService$>() {
  static readonly defaultLayer = Layer.effect(this, makeBedrockService).pipe(
    Layer.provide(BedrockClientInstanceLayer),
    Layer.provide(DefaultBedrockClientConfigLayer),
  );
  static readonly layer = (config: BedrockClientConfig) =>
    Layer.effect(this, makeBedrockService).pipe(
      Layer.provide(BedrockClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          BedrockClientInstanceConfig,
          makeDefaultBedrockClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: BedrockClientConfig) => BedrockClient,
  ) =>
    Layer.effect(this, makeBedrockService).pipe(
      Layer.provide(
        Layer.effect(
          BedrockClientInstance,
          Effect.map(makeDefaultBedrockClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias BedrockService
 */
export const Bedrock = BedrockService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Bedrock.baseLayer instead
 */
export const BaseBedrockServiceLayer = Layer.effect(
  BedrockService,
  makeBedrockService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Bedrock.layer instead
 */
export const BedrockServiceLayer = BaseBedrockServiceLayer.pipe(
  Layer.provide(BedrockClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Bedrock.defaultLayer instead
 */
export const DefaultBedrockServiceLayer = BedrockService.defaultLayer;
