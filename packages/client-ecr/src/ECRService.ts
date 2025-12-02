/**
 * @since 1.0.0
 */
import {
  BatchCheckLayerAvailabilityCommand,
  type BatchCheckLayerAvailabilityCommandInput,
  type BatchCheckLayerAvailabilityCommandOutput,
  BatchDeleteImageCommand,
  type BatchDeleteImageCommandInput,
  type BatchDeleteImageCommandOutput,
  BatchGetImageCommand,
  type BatchGetImageCommandInput,
  type BatchGetImageCommandOutput,
  BatchGetRepositoryScanningConfigurationCommand,
  type BatchGetRepositoryScanningConfigurationCommandInput,
  type BatchGetRepositoryScanningConfigurationCommandOutput,
  CompleteLayerUploadCommand,
  type CompleteLayerUploadCommandInput,
  type CompleteLayerUploadCommandOutput,
  CreatePullThroughCacheRuleCommand,
  type CreatePullThroughCacheRuleCommandInput,
  type CreatePullThroughCacheRuleCommandOutput,
  CreateRepositoryCommand,
  type CreateRepositoryCommandInput,
  type CreateRepositoryCommandOutput,
  CreateRepositoryCreationTemplateCommand,
  type CreateRepositoryCreationTemplateCommandInput,
  type CreateRepositoryCreationTemplateCommandOutput,
  DeleteLifecyclePolicyCommand,
  type DeleteLifecyclePolicyCommandInput,
  type DeleteLifecyclePolicyCommandOutput,
  DeletePullThroughCacheRuleCommand,
  type DeletePullThroughCacheRuleCommandInput,
  type DeletePullThroughCacheRuleCommandOutput,
  DeleteRegistryPolicyCommand,
  type DeleteRegistryPolicyCommandInput,
  type DeleteRegistryPolicyCommandOutput,
  DeleteRepositoryCommand,
  type DeleteRepositoryCommandInput,
  type DeleteRepositoryCommandOutput,
  DeleteRepositoryCreationTemplateCommand,
  type DeleteRepositoryCreationTemplateCommandInput,
  type DeleteRepositoryCreationTemplateCommandOutput,
  DeleteRepositoryPolicyCommand,
  type DeleteRepositoryPolicyCommandInput,
  type DeleteRepositoryPolicyCommandOutput,
  DeleteSigningConfigurationCommand,
  type DeleteSigningConfigurationCommandInput,
  type DeleteSigningConfigurationCommandOutput,
  DeregisterPullTimeUpdateExclusionCommand,
  type DeregisterPullTimeUpdateExclusionCommandInput,
  type DeregisterPullTimeUpdateExclusionCommandOutput,
  DescribeImageReplicationStatusCommand,
  type DescribeImageReplicationStatusCommandInput,
  type DescribeImageReplicationStatusCommandOutput,
  DescribeImageScanFindingsCommand,
  type DescribeImageScanFindingsCommandInput,
  type DescribeImageScanFindingsCommandOutput,
  DescribeImagesCommand,
  type DescribeImagesCommandInput,
  type DescribeImagesCommandOutput,
  DescribeImageSigningStatusCommand,
  type DescribeImageSigningStatusCommandInput,
  type DescribeImageSigningStatusCommandOutput,
  DescribePullThroughCacheRulesCommand,
  type DescribePullThroughCacheRulesCommandInput,
  type DescribePullThroughCacheRulesCommandOutput,
  DescribeRegistryCommand,
  type DescribeRegistryCommandInput,
  type DescribeRegistryCommandOutput,
  DescribeRepositoriesCommand,
  type DescribeRepositoriesCommandInput,
  type DescribeRepositoriesCommandOutput,
  DescribeRepositoryCreationTemplatesCommand,
  type DescribeRepositoryCreationTemplatesCommandInput,
  type DescribeRepositoryCreationTemplatesCommandOutput,
  type ECRClient,
  type ECRClientConfig,
  GetAccountSettingCommand,
  type GetAccountSettingCommandInput,
  type GetAccountSettingCommandOutput,
  GetAuthorizationTokenCommand,
  type GetAuthorizationTokenCommandInput,
  type GetAuthorizationTokenCommandOutput,
  GetDownloadUrlForLayerCommand,
  type GetDownloadUrlForLayerCommandInput,
  type GetDownloadUrlForLayerCommandOutput,
  GetLifecyclePolicyCommand,
  type GetLifecyclePolicyCommandInput,
  type GetLifecyclePolicyCommandOutput,
  GetLifecyclePolicyPreviewCommand,
  type GetLifecyclePolicyPreviewCommandInput,
  type GetLifecyclePolicyPreviewCommandOutput,
  GetRegistryPolicyCommand,
  type GetRegistryPolicyCommandInput,
  type GetRegistryPolicyCommandOutput,
  GetRegistryScanningConfigurationCommand,
  type GetRegistryScanningConfigurationCommandInput,
  type GetRegistryScanningConfigurationCommandOutput,
  GetRepositoryPolicyCommand,
  type GetRepositoryPolicyCommandInput,
  type GetRepositoryPolicyCommandOutput,
  GetSigningConfigurationCommand,
  type GetSigningConfigurationCommandInput,
  type GetSigningConfigurationCommandOutput,
  InitiateLayerUploadCommand,
  type InitiateLayerUploadCommandInput,
  type InitiateLayerUploadCommandOutput,
  ListImageReferrersCommand,
  type ListImageReferrersCommandInput,
  type ListImageReferrersCommandOutput,
  ListImagesCommand,
  type ListImagesCommandInput,
  type ListImagesCommandOutput,
  ListPullTimeUpdateExclusionsCommand,
  type ListPullTimeUpdateExclusionsCommandInput,
  type ListPullTimeUpdateExclusionsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutAccountSettingCommand,
  type PutAccountSettingCommandInput,
  type PutAccountSettingCommandOutput,
  PutImageCommand,
  type PutImageCommandInput,
  type PutImageCommandOutput,
  PutImageScanningConfigurationCommand,
  type PutImageScanningConfigurationCommandInput,
  type PutImageScanningConfigurationCommandOutput,
  PutImageTagMutabilityCommand,
  type PutImageTagMutabilityCommandInput,
  type PutImageTagMutabilityCommandOutput,
  PutLifecyclePolicyCommand,
  type PutLifecyclePolicyCommandInput,
  type PutLifecyclePolicyCommandOutput,
  PutRegistryPolicyCommand,
  type PutRegistryPolicyCommandInput,
  type PutRegistryPolicyCommandOutput,
  PutRegistryScanningConfigurationCommand,
  type PutRegistryScanningConfigurationCommandInput,
  type PutRegistryScanningConfigurationCommandOutput,
  PutReplicationConfigurationCommand,
  type PutReplicationConfigurationCommandInput,
  type PutReplicationConfigurationCommandOutput,
  PutSigningConfigurationCommand,
  type PutSigningConfigurationCommandInput,
  type PutSigningConfigurationCommandOutput,
  RegisterPullTimeUpdateExclusionCommand,
  type RegisterPullTimeUpdateExclusionCommandInput,
  type RegisterPullTimeUpdateExclusionCommandOutput,
  SetRepositoryPolicyCommand,
  type SetRepositoryPolicyCommandInput,
  type SetRepositoryPolicyCommandOutput,
  StartImageScanCommand,
  type StartImageScanCommandInput,
  type StartImageScanCommandOutput,
  StartLifecyclePolicyPreviewCommand,
  type StartLifecyclePolicyPreviewCommandInput,
  type StartLifecyclePolicyPreviewCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateImageStorageClassCommand,
  type UpdateImageStorageClassCommandInput,
  type UpdateImageStorageClassCommandOutput,
  UpdatePullThroughCacheRuleCommand,
  type UpdatePullThroughCacheRuleCommandInput,
  type UpdatePullThroughCacheRuleCommandOutput,
  UpdateRepositoryCreationTemplateCommand,
  type UpdateRepositoryCreationTemplateCommandInput,
  type UpdateRepositoryCreationTemplateCommandOutput,
  UploadLayerPartCommand,
  type UploadLayerPartCommandInput,
  type UploadLayerPartCommandOutput,
  ValidatePullThroughCacheRuleCommand,
  type ValidatePullThroughCacheRuleCommandInput,
  type ValidatePullThroughCacheRuleCommandOutput,
} from "@aws-sdk/client-ecr";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./ECRClientInstance.js";
import * as ECRServiceConfig from "./ECRServiceConfig.js";
import type {
  BlockedByOrganizationPolicyError,
  EmptyUploadError,
  ExclusionAlreadyExistsError,
  ExclusionNotFoundError,
  ImageAlreadyExistsError,
  ImageArchivedError,
  ImageDigestDoesNotMatchError,
  ImageNotFoundError,
  ImageStorageClassUpdateNotSupportedError,
  ImageTagAlreadyExistsError,
  InvalidLayerError,
  InvalidLayerPartError,
  InvalidParameterError,
  InvalidTagParameterError,
  KmsError,
  LayerAlreadyExistsError,
  LayerInaccessibleError,
  LayerPartTooSmallError,
  LayersNotFoundError,
  LifecyclePolicyNotFoundError,
  LifecyclePolicyPreviewInProgressError,
  LifecyclePolicyPreviewNotFoundError,
  LimitExceededError,
  PullThroughCacheRuleAlreadyExistsError,
  PullThroughCacheRuleNotFoundError,
  ReferencedImagesNotFoundError,
  RegistryPolicyNotFoundError,
  RepositoryAlreadyExistsError,
  RepositoryNotEmptyError,
  RepositoryNotFoundError,
  RepositoryPolicyNotFoundError,
  ScanNotFoundError,
  SdkError,
  SecretNotFoundError,
  ServerError,
  SigningConfigurationNotFoundError,
  TemplateAlreadyExistsError,
  TemplateNotFoundError,
  TooManyTagsError,
  UnableToAccessSecretError,
  UnableToDecryptSecretValueError,
  UnableToGetUpstreamImageError,
  UnableToGetUpstreamLayerError,
  UnsupportedImageTypeError,
  UnsupportedUpstreamRegistryError,
  UploadNotFoundError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  BatchCheckLayerAvailabilityCommand,
  BatchDeleteImageCommand,
  BatchGetImageCommand,
  BatchGetRepositoryScanningConfigurationCommand,
  CompleteLayerUploadCommand,
  CreatePullThroughCacheRuleCommand,
  CreateRepositoryCommand,
  CreateRepositoryCreationTemplateCommand,
  DeleteLifecyclePolicyCommand,
  DeletePullThroughCacheRuleCommand,
  DeleteRegistryPolicyCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryCreationTemplateCommand,
  DeleteRepositoryPolicyCommand,
  DeleteSigningConfigurationCommand,
  DeregisterPullTimeUpdateExclusionCommand,
  DescribeImageReplicationStatusCommand,
  DescribeImageScanFindingsCommand,
  DescribeImageSigningStatusCommand,
  DescribeImagesCommand,
  DescribePullThroughCacheRulesCommand,
  DescribeRegistryCommand,
  DescribeRepositoriesCommand,
  DescribeRepositoryCreationTemplatesCommand,
  GetAccountSettingCommand,
  GetAuthorizationTokenCommand,
  GetDownloadUrlForLayerCommand,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyPreviewCommand,
  GetRegistryPolicyCommand,
  GetRegistryScanningConfigurationCommand,
  GetRepositoryPolicyCommand,
  GetSigningConfigurationCommand,
  InitiateLayerUploadCommand,
  ListImageReferrersCommand,
  ListImagesCommand,
  ListPullTimeUpdateExclusionsCommand,
  ListTagsForResourceCommand,
  PutAccountSettingCommand,
  PutImageCommand,
  PutImageScanningConfigurationCommand,
  PutImageTagMutabilityCommand,
  PutLifecyclePolicyCommand,
  PutRegistryPolicyCommand,
  PutRegistryScanningConfigurationCommand,
  PutReplicationConfigurationCommand,
  PutSigningConfigurationCommand,
  RegisterPullTimeUpdateExclusionCommand,
  SetRepositoryPolicyCommand,
  StartImageScanCommand,
  StartLifecyclePolicyPreviewCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateImageStorageClassCommand,
  UpdatePullThroughCacheRuleCommand,
  UpdateRepositoryCreationTemplateCommand,
  UploadLayerPartCommand,
  ValidatePullThroughCacheRuleCommand,
};

interface ECRService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchCheckLayerAvailabilityCommand}
   */
  batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchCheckLayerAvailabilityCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link BatchDeleteImageCommand}
   */
  batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteImageCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link BatchGetImageCommand}
   */
  batchGetImage(
    args: BatchGetImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetImageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | RepositoryNotFoundError
    | ServerError
    | UnableToGetUpstreamImageError
  >;

  /**
   * @see {@link BatchGetRepositoryScanningConfigurationCommand}
   */
  batchGetRepositoryScanningConfiguration(
    args: BatchGetRepositoryScanningConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetRepositoryScanningConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError | ValidationError
  >;

  /**
   * @see {@link CompleteLayerUploadCommand}
   */
  completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CompleteLayerUploadCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EmptyUploadError
    | InvalidLayerError
    | InvalidParameterError
    | KmsError
    | LayerAlreadyExistsError
    | LayerPartTooSmallError
    | RepositoryNotFoundError
    | ServerError
    | UploadNotFoundError
  >;

  /**
   * @see {@link CreatePullThroughCacheRuleCommand}
   */
  createPullThroughCacheRule(
    args: CreatePullThroughCacheRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePullThroughCacheRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | PullThroughCacheRuleAlreadyExistsError
    | SecretNotFoundError
    | ServerError
    | UnableToAccessSecretError
    | UnableToDecryptSecretValueError
    | UnsupportedUpstreamRegistryError
    | ValidationError
  >;

  /**
   * @see {@link CreateRepositoryCommand}
   */
  createRepository(
    args: CreateRepositoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRepositoryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidTagParameterError
    | KmsError
    | LimitExceededError
    | RepositoryAlreadyExistsError
    | ServerError
    | TooManyTagsError
  >;

  /**
   * @see {@link CreateRepositoryCreationTemplateCommand}
   */
  createRepositoryCreationTemplate(
    args: CreateRepositoryCreationTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRepositoryCreationTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LimitExceededError
    | ServerError
    | TemplateAlreadyExistsError
    | ValidationError
  >;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLifecyclePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LifecyclePolicyNotFoundError
    | RepositoryNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DeletePullThroughCacheRuleCommand}
   */
  deletePullThroughCacheRule(
    args: DeletePullThroughCacheRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePullThroughCacheRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | PullThroughCacheRuleNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DeleteRegistryPolicyCommand}
   */
  deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRegistryPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | RegistryPolicyNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DeleteRepositoryCommand}
   */
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRepositoryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | KmsError
    | RepositoryNotEmptyError
    | RepositoryNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DeleteRepositoryCreationTemplateCommand}
   */
  deleteRepositoryCreationTemplate(
    args: DeleteRepositoryCreationTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRepositoryCreationTemplateCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | TemplateNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteRepositoryPolicyCommand}
   */
  deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRepositoryPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | RepositoryNotFoundError
    | RepositoryPolicyNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DeleteSigningConfigurationCommand}
   */
  deleteSigningConfiguration(
    args: DeleteSigningConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSigningConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | ServerError | SigningConfigurationNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeregisterPullTimeUpdateExclusionCommand}
   */
  deregisterPullTimeUpdateExclusion(
    args: DeregisterPullTimeUpdateExclusionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterPullTimeUpdateExclusionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExclusionNotFoundError
    | InvalidParameterError
    | LimitExceededError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DescribeImageReplicationStatusCommand}
   */
  describeImageReplicationStatus(
    args: DescribeImageReplicationStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImageReplicationStatusCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ImageNotFoundError
    | InvalidParameterError
    | RepositoryNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DescribeImageScanFindingsCommand}
   */
  describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImageScanFindingsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ImageNotFoundError
    | InvalidParameterError
    | RepositoryNotFoundError
    | ScanNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DescribeImageSigningStatusCommand}
   */
  describeImageSigningStatus(
    args: DescribeImageSigningStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImageSigningStatusCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ImageNotFoundError
    | InvalidParameterError
    | RepositoryNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(
    args: DescribeImagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImagesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ImageNotFoundError
    | InvalidParameterError
    | RepositoryNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DescribePullThroughCacheRulesCommand}
   */
  describePullThroughCacheRules(
    args: DescribePullThroughCacheRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePullThroughCacheRulesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | PullThroughCacheRuleNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link DescribeRegistryCommand}
   */
  describeRegistry(
    args: DescribeRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRegistryCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | ValidationError
  >;

  /**
   * @see {@link DescribeRepositoriesCommand}
   */
  describeRepositories(
    args: DescribeRepositoriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRepositoriesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link DescribeRepositoryCreationTemplatesCommand}
   */
  describeRepositoryCreationTemplates(
    args: DescribeRepositoryCreationTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRepositoryCreationTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | ValidationError
  >;

  /**
   * @see {@link GetAccountSettingCommand}
   */
  getAccountSetting(
    args: GetAccountSettingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSettingCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | ValidationError
  >;

  /**
   * @see {@link GetAuthorizationTokenCommand}
   */
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAuthorizationTokenCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link GetDownloadUrlForLayerCommand}
   */
  getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDownloadUrlForLayerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LayerInaccessibleError
    | LayersNotFoundError
    | RepositoryNotFoundError
    | ServerError
    | UnableToGetUpstreamLayerError
  >;

  /**
   * @see {@link GetLifecyclePolicyCommand}
   */
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLifecyclePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LifecyclePolicyNotFoundError
    | RepositoryNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link GetLifecyclePolicyPreviewCommand}
   */
  getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLifecyclePolicyPreviewCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LifecyclePolicyPreviewNotFoundError
    | RepositoryNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link GetRegistryPolicyCommand}
   */
  getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegistryPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | RegistryPolicyNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link GetRegistryScanningConfigurationCommand}
   */
  getRegistryScanningConfiguration(
    args: GetRegistryScanningConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegistryScanningConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | ValidationError
  >;

  /**
   * @see {@link GetRepositoryPolicyCommand}
   */
  getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRepositoryPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | RepositoryNotFoundError
    | RepositoryPolicyNotFoundError
    | ServerError
  >;

  /**
   * @see {@link GetSigningConfigurationCommand}
   */
  getSigningConfiguration(
    args: GetSigningConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSigningConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | ServerError
    | SigningConfigurationNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link InitiateLayerUploadCommand}
   */
  initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InitiateLayerUploadCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | KmsError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link ListImageReferrersCommand}
   */
  listImageReferrers(
    args: ListImageReferrersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImageReferrersCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError | ValidationError
  >;

  /**
   * @see {@link ListImagesCommand}
   */
  listImages(
    args: ListImagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImagesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link ListPullTimeUpdateExclusionsCommand}
   */
  listPullTimeUpdateExclusions(
    args: ListPullTimeUpdateExclusionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPullTimeUpdateExclusionsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | LimitExceededError | ServerError | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link PutAccountSettingCommand}
   */
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountSettingCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | LimitExceededError | ServerError | ValidationError
  >;

  /**
   * @see {@link PutImageCommand}
   */
  putImage(
    args: PutImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutImageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ImageAlreadyExistsError
    | ImageDigestDoesNotMatchError
    | ImageTagAlreadyExistsError
    | InvalidParameterError
    | KmsError
    | LayersNotFoundError
    | LimitExceededError
    | ReferencedImagesNotFoundError
    | RepositoryNotFoundError
    | ServerError
  >;

  /**
   * @see {@link PutImageScanningConfigurationCommand}
   */
  putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutImageScanningConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError | ValidationError
  >;

  /**
   * @see {@link PutImageTagMutabilityCommand}
   */
  putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutImageTagMutabilityCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link PutLifecyclePolicyCommand}
   */
  putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutLifecyclePolicyCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError | ValidationError
  >;

  /**
   * @see {@link PutRegistryPolicyCommand}
   */
  putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRegistryPolicyCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | ValidationError
  >;

  /**
   * @see {@link PutRegistryScanningConfigurationCommand}
   */
  putRegistryScanningConfiguration(
    args: PutRegistryScanningConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRegistryScanningConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BlockedByOrganizationPolicyError
    | InvalidParameterError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link PutReplicationConfigurationCommand}
   */
  putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutReplicationConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | ValidationError
  >;

  /**
   * @see {@link PutSigningConfigurationCommand}
   */
  putSigningConfiguration(
    args: PutSigningConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutSigningConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | ValidationError
  >;

  /**
   * @see {@link RegisterPullTimeUpdateExclusionCommand}
   */
  registerPullTimeUpdateExclusion(
    args: RegisterPullTimeUpdateExclusionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterPullTimeUpdateExclusionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExclusionAlreadyExistsError
    | InvalidParameterError
    | LimitExceededError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link SetRepositoryPolicyCommand}
   */
  setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetRepositoryPolicyCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | RepositoryNotFoundError | ServerError
  >;

  /**
   * @see {@link StartImageScanCommand}
   */
  startImageScan(
    args: StartImageScanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartImageScanCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ImageArchivedError
    | ImageNotFoundError
    | InvalidParameterError
    | LimitExceededError
    | RepositoryNotFoundError
    | ServerError
    | UnsupportedImageTypeError
    | ValidationError
  >;

  /**
   * @see {@link StartLifecyclePolicyPreviewCommand}
   */
  startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartLifecyclePolicyPreviewCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | LifecyclePolicyNotFoundError
    | LifecyclePolicyPreviewInProgressError
    | RepositoryNotFoundError
    | ServerError
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
    | InvalidParameterError
    | InvalidTagParameterError
    | RepositoryNotFoundError
    | ServerError
    | TooManyTagsError
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
    | InvalidParameterError
    | InvalidTagParameterError
    | RepositoryNotFoundError
    | ServerError
    | TooManyTagsError
  >;

  /**
   * @see {@link UpdateImageStorageClassCommand}
   */
  updateImageStorageClass(
    args: UpdateImageStorageClassCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateImageStorageClassCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ImageNotFoundError
    | ImageStorageClassUpdateNotSupportedError
    | InvalidParameterError
    | RepositoryNotFoundError
    | ServerError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePullThroughCacheRuleCommand}
   */
  updatePullThroughCacheRule(
    args: UpdatePullThroughCacheRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePullThroughCacheRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | PullThroughCacheRuleNotFoundError
    | SecretNotFoundError
    | ServerError
    | UnableToAccessSecretError
    | UnableToDecryptSecretValueError
    | ValidationError
  >;

  /**
   * @see {@link UpdateRepositoryCreationTemplateCommand}
   */
  updateRepositoryCreationTemplate(
    args: UpdateRepositoryCreationTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRepositoryCreationTemplateCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError | TemplateNotFoundError | ValidationError
  >;

  /**
   * @see {@link UploadLayerPartCommand}
   */
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UploadLayerPartCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidLayerPartError
    | InvalidParameterError
    | KmsError
    | LimitExceededError
    | RepositoryNotFoundError
    | ServerError
    | UploadNotFoundError
  >;

  /**
   * @see {@link ValidatePullThroughCacheRuleCommand}
   */
  validatePullThroughCacheRule(
    args: ValidatePullThroughCacheRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ValidatePullThroughCacheRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | PullThroughCacheRuleNotFoundError
    | ServerError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeECRService = Effect.gen(function*() {
  const client = yield* Instance.ECRClientInstance;

  return yield* Service.fromClientAndCommands<ECRService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: ECRServiceConfig.toECRClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ECRService extends Effect.Tag("@effect-aws/client-ecr/ECRService")<
  ECRService,
  ECRService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeECRService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: ECRService.Config) =>
    Layer.effect(this, makeECRService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(ECRServiceConfig.setECRServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ECRClientConfig) => ECRClient,
  ) =>
    Layer.effect(this, makeECRService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.ECRClientInstance,
          Effect.map(ECRServiceConfig.toECRClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ECRService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<ECRClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = ECRService$;
}
