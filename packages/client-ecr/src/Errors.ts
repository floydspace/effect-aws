import type {
  BlockedByOrganizationPolicyException,
  EmptyUploadException,
  ExclusionAlreadyExistsException,
  ExclusionNotFoundException,
  ImageAlreadyExistsException,
  ImageArchivedException,
  ImageDigestDoesNotMatchException,
  ImageNotFoundException,
  ImageStorageClassUpdateNotSupportedException,
  ImageTagAlreadyExistsException,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  KmsException,
  LayerAlreadyExistsException,
  LayerInaccessibleException,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LifecyclePolicyNotFoundException,
  LifecyclePolicyPreviewInProgressException,
  LifecyclePolicyPreviewNotFoundException,
  LimitExceededException,
  PullThroughCacheRuleAlreadyExistsException,
  PullThroughCacheRuleNotFoundException,
  ReferencedImagesNotFoundException,
  RegistryPolicyNotFoundException,
  RepositoryAlreadyExistsException,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ScanNotFoundException,
  SecretNotFoundException,
  ServerException,
  SigningConfigurationNotFoundException,
  TemplateAlreadyExistsException,
  TemplateNotFoundException,
  TooManyTagsException,
  UnableToAccessSecretException,
  UnableToDecryptSecretValueException,
  UnableToGetUpstreamImageException,
  UnableToGetUpstreamLayerException,
  UnsupportedImageTypeException,
  UnsupportedUpstreamRegistryException,
  UploadNotFoundException,
  ValidationException,
} from "@aws-sdk/client-ecr";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "BlockedByOrganizationPolicyException",
  "EmptyUploadException",
  "ExclusionAlreadyExistsException",
  "ExclusionNotFoundException",
  "ImageAlreadyExistsException",
  "ImageArchivedException",
  "ImageDigestDoesNotMatchException",
  "ImageNotFoundException",
  "ImageStorageClassUpdateNotSupportedException",
  "ImageTagAlreadyExistsException",
  "InvalidLayerException",
  "InvalidLayerPartException",
  "InvalidParameterException",
  "InvalidTagParameterException",
  "KmsException",
  "LayerAlreadyExistsException",
  "LayerInaccessibleException",
  "LayerPartTooSmallException",
  "LayersNotFoundException",
  "LifecyclePolicyNotFoundException",
  "LifecyclePolicyPreviewInProgressException",
  "LifecyclePolicyPreviewNotFoundException",
  "LimitExceededException",
  "PullThroughCacheRuleAlreadyExistsException",
  "PullThroughCacheRuleNotFoundException",
  "ReferencedImagesNotFoundException",
  "RegistryPolicyNotFoundException",
  "RepositoryAlreadyExistsException",
  "RepositoryNotEmptyException",
  "RepositoryNotFoundException",
  "RepositoryPolicyNotFoundException",
  "ScanNotFoundException",
  "SecretNotFoundException",
  "ServerException",
  "SigningConfigurationNotFoundException",
  "TemplateAlreadyExistsException",
  "TemplateNotFoundException",
  "TooManyTagsException",
  "UnableToAccessSecretException",
  "UnableToDecryptSecretValueException",
  "UnableToGetUpstreamImageException",
  "UnableToGetUpstreamLayerException",
  "UnsupportedImageTypeException",
  "UnsupportedUpstreamRegistryException",
  "UploadNotFoundException",
  "ValidationException",
] as const;

export type BlockedByOrganizationPolicyError = TaggedException<BlockedByOrganizationPolicyException>;
export type EmptyUploadError = TaggedException<EmptyUploadException>;
export type ExclusionAlreadyExistsError = TaggedException<ExclusionAlreadyExistsException>;
export type ExclusionNotFoundError = TaggedException<ExclusionNotFoundException>;
export type ImageAlreadyExistsError = TaggedException<ImageAlreadyExistsException>;
export type ImageArchivedError = TaggedException<ImageArchivedException>;
export type ImageDigestDoesNotMatchError = TaggedException<ImageDigestDoesNotMatchException>;
export type ImageNotFoundError = TaggedException<ImageNotFoundException>;
export type ImageStorageClassUpdateNotSupportedError = TaggedException<ImageStorageClassUpdateNotSupportedException>;
export type ImageTagAlreadyExistsError = TaggedException<ImageTagAlreadyExistsException>;
export type InvalidLayerError = TaggedException<InvalidLayerException>;
export type InvalidLayerPartError = TaggedException<InvalidLayerPartException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidTagParameterError = TaggedException<InvalidTagParameterException>;
export type KmsError = TaggedException<KmsException>;
export type LayerAlreadyExistsError = TaggedException<LayerAlreadyExistsException>;
export type LayerInaccessibleError = TaggedException<LayerInaccessibleException>;
export type LayerPartTooSmallError = TaggedException<LayerPartTooSmallException>;
export type LayersNotFoundError = TaggedException<LayersNotFoundException>;
export type LifecyclePolicyNotFoundError = TaggedException<LifecyclePolicyNotFoundException>;
export type LifecyclePolicyPreviewInProgressError = TaggedException<LifecyclePolicyPreviewInProgressException>;
export type LifecyclePolicyPreviewNotFoundError = TaggedException<LifecyclePolicyPreviewNotFoundException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type PullThroughCacheRuleAlreadyExistsError = TaggedException<PullThroughCacheRuleAlreadyExistsException>;
export type PullThroughCacheRuleNotFoundError = TaggedException<PullThroughCacheRuleNotFoundException>;
export type ReferencedImagesNotFoundError = TaggedException<ReferencedImagesNotFoundException>;
export type RegistryPolicyNotFoundError = TaggedException<RegistryPolicyNotFoundException>;
export type RepositoryAlreadyExistsError = TaggedException<RepositoryAlreadyExistsException>;
export type RepositoryNotEmptyError = TaggedException<RepositoryNotEmptyException>;
export type RepositoryNotFoundError = TaggedException<RepositoryNotFoundException>;
export type RepositoryPolicyNotFoundError = TaggedException<RepositoryPolicyNotFoundException>;
export type ScanNotFoundError = TaggedException<ScanNotFoundException>;
export type SecretNotFoundError = TaggedException<SecretNotFoundException>;
export type ServerError = TaggedException<ServerException>;
export type SigningConfigurationNotFoundError = TaggedException<SigningConfigurationNotFoundException>;
export type TemplateAlreadyExistsError = TaggedException<TemplateAlreadyExistsException>;
export type TemplateNotFoundError = TaggedException<TemplateNotFoundException>;
export type TooManyTagsError = TaggedException<TooManyTagsException>;
export type UnableToAccessSecretError = TaggedException<UnableToAccessSecretException>;
export type UnableToDecryptSecretValueError = TaggedException<UnableToDecryptSecretValueException>;
export type UnableToGetUpstreamImageError = TaggedException<UnableToGetUpstreamImageException>;
export type UnableToGetUpstreamLayerError = TaggedException<UnableToGetUpstreamLayerException>;
export type UnsupportedImageTypeError = TaggedException<UnsupportedImageTypeException>;
export type UnsupportedUpstreamRegistryError = TaggedException<UnsupportedUpstreamRegistryException>;
export type UploadNotFoundError = TaggedException<UploadNotFoundException>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
