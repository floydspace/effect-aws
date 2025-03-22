/**
 * @since 1.0.0
 */
import {
  AbortMultipartUploadCommand,
  type AbortMultipartUploadCommandInput,
  type AbortMultipartUploadCommandOutput,
  CompleteMultipartUploadCommand,
  type CompleteMultipartUploadCommandInput,
  type CompleteMultipartUploadCommandOutput,
  CopyObjectCommand,
  type CopyObjectCommandInput,
  type CopyObjectCommandOutput,
  CreateBucketCommand,
  type CreateBucketCommandInput,
  type CreateBucketCommandOutput,
  CreateBucketMetadataTableConfigurationCommand,
  type CreateBucketMetadataTableConfigurationCommandInput,
  type CreateBucketMetadataTableConfigurationCommandOutput,
  CreateMultipartUploadCommand,
  type CreateMultipartUploadCommandInput,
  type CreateMultipartUploadCommandOutput,
  CreateSessionCommand,
  type CreateSessionCommandInput,
  type CreateSessionCommandOutput,
  DeleteBucketAnalyticsConfigurationCommand,
  type DeleteBucketAnalyticsConfigurationCommandInput,
  type DeleteBucketAnalyticsConfigurationCommandOutput,
  DeleteBucketCommand,
  type DeleteBucketCommandInput,
  type DeleteBucketCommandOutput,
  DeleteBucketCorsCommand,
  type DeleteBucketCorsCommandInput,
  type DeleteBucketCorsCommandOutput,
  DeleteBucketEncryptionCommand,
  type DeleteBucketEncryptionCommandInput,
  type DeleteBucketEncryptionCommandOutput,
  DeleteBucketIntelligentTieringConfigurationCommand,
  type DeleteBucketIntelligentTieringConfigurationCommandInput,
  type DeleteBucketIntelligentTieringConfigurationCommandOutput,
  DeleteBucketInventoryConfigurationCommand,
  type DeleteBucketInventoryConfigurationCommandInput,
  type DeleteBucketInventoryConfigurationCommandOutput,
  DeleteBucketLifecycleCommand,
  type DeleteBucketLifecycleCommandInput,
  type DeleteBucketLifecycleCommandOutput,
  DeleteBucketMetadataTableConfigurationCommand,
  type DeleteBucketMetadataTableConfigurationCommandInput,
  type DeleteBucketMetadataTableConfigurationCommandOutput,
  DeleteBucketMetricsConfigurationCommand,
  type DeleteBucketMetricsConfigurationCommandInput,
  type DeleteBucketMetricsConfigurationCommandOutput,
  DeleteBucketOwnershipControlsCommand,
  type DeleteBucketOwnershipControlsCommandInput,
  type DeleteBucketOwnershipControlsCommandOutput,
  DeleteBucketPolicyCommand,
  type DeleteBucketPolicyCommandInput,
  type DeleteBucketPolicyCommandOutput,
  DeleteBucketReplicationCommand,
  type DeleteBucketReplicationCommandInput,
  type DeleteBucketReplicationCommandOutput,
  DeleteBucketTaggingCommand,
  type DeleteBucketTaggingCommandInput,
  type DeleteBucketTaggingCommandOutput,
  DeleteBucketWebsiteCommand,
  type DeleteBucketWebsiteCommandInput,
  type DeleteBucketWebsiteCommandOutput,
  DeleteObjectCommand,
  type DeleteObjectCommandInput,
  type DeleteObjectCommandOutput,
  DeleteObjectsCommand,
  type DeleteObjectsCommandInput,
  type DeleteObjectsCommandOutput,
  DeleteObjectTaggingCommand,
  type DeleteObjectTaggingCommandInput,
  type DeleteObjectTaggingCommandOutput,
  DeletePublicAccessBlockCommand,
  type DeletePublicAccessBlockCommandInput,
  type DeletePublicAccessBlockCommandOutput,
  GetBucketAccelerateConfigurationCommand,
  type GetBucketAccelerateConfigurationCommandInput,
  type GetBucketAccelerateConfigurationCommandOutput,
  GetBucketAclCommand,
  type GetBucketAclCommandInput,
  type GetBucketAclCommandOutput,
  GetBucketAnalyticsConfigurationCommand,
  type GetBucketAnalyticsConfigurationCommandInput,
  type GetBucketAnalyticsConfigurationCommandOutput,
  GetBucketCorsCommand,
  type GetBucketCorsCommandInput,
  type GetBucketCorsCommandOutput,
  GetBucketEncryptionCommand,
  type GetBucketEncryptionCommandInput,
  type GetBucketEncryptionCommandOutput,
  GetBucketIntelligentTieringConfigurationCommand,
  type GetBucketIntelligentTieringConfigurationCommandInput,
  type GetBucketIntelligentTieringConfigurationCommandOutput,
  GetBucketInventoryConfigurationCommand,
  type GetBucketInventoryConfigurationCommandInput,
  type GetBucketInventoryConfigurationCommandOutput,
  GetBucketLifecycleConfigurationCommand,
  type GetBucketLifecycleConfigurationCommandInput,
  type GetBucketLifecycleConfigurationCommandOutput,
  GetBucketLocationCommand,
  type GetBucketLocationCommandInput,
  type GetBucketLocationCommandOutput,
  GetBucketLoggingCommand,
  type GetBucketLoggingCommandInput,
  type GetBucketLoggingCommandOutput,
  GetBucketMetadataTableConfigurationCommand,
  type GetBucketMetadataTableConfigurationCommandInput,
  type GetBucketMetadataTableConfigurationCommandOutput,
  GetBucketMetricsConfigurationCommand,
  type GetBucketMetricsConfigurationCommandInput,
  type GetBucketMetricsConfigurationCommandOutput,
  GetBucketNotificationConfigurationCommand,
  type GetBucketNotificationConfigurationCommandInput,
  type GetBucketNotificationConfigurationCommandOutput,
  GetBucketOwnershipControlsCommand,
  type GetBucketOwnershipControlsCommandInput,
  type GetBucketOwnershipControlsCommandOutput,
  GetBucketPolicyCommand,
  type GetBucketPolicyCommandInput,
  type GetBucketPolicyCommandOutput,
  GetBucketPolicyStatusCommand,
  type GetBucketPolicyStatusCommandInput,
  type GetBucketPolicyStatusCommandOutput,
  GetBucketReplicationCommand,
  type GetBucketReplicationCommandInput,
  type GetBucketReplicationCommandOutput,
  GetBucketRequestPaymentCommand,
  type GetBucketRequestPaymentCommandInput,
  type GetBucketRequestPaymentCommandOutput,
  GetBucketTaggingCommand,
  type GetBucketTaggingCommandInput,
  type GetBucketTaggingCommandOutput,
  GetBucketVersioningCommand,
  type GetBucketVersioningCommandInput,
  type GetBucketVersioningCommandOutput,
  GetBucketWebsiteCommand,
  type GetBucketWebsiteCommandInput,
  type GetBucketWebsiteCommandOutput,
  GetObjectAclCommand,
  type GetObjectAclCommandInput,
  type GetObjectAclCommandOutput,
  GetObjectAttributesCommand,
  type GetObjectAttributesCommandInput,
  type GetObjectAttributesCommandOutput,
  GetObjectCommand,
  type GetObjectCommandInput,
  type GetObjectCommandOutput,
  GetObjectLegalHoldCommand,
  type GetObjectLegalHoldCommandInput,
  type GetObjectLegalHoldCommandOutput,
  GetObjectLockConfigurationCommand,
  type GetObjectLockConfigurationCommandInput,
  type GetObjectLockConfigurationCommandOutput,
  GetObjectRetentionCommand,
  type GetObjectRetentionCommandInput,
  type GetObjectRetentionCommandOutput,
  GetObjectTaggingCommand,
  type GetObjectTaggingCommandInput,
  type GetObjectTaggingCommandOutput,
  GetObjectTorrentCommand,
  type GetObjectTorrentCommandInput,
  type GetObjectTorrentCommandOutput,
  GetPublicAccessBlockCommand,
  type GetPublicAccessBlockCommandInput,
  type GetPublicAccessBlockCommandOutput,
  HeadBucketCommand,
  type HeadBucketCommandInput,
  type HeadBucketCommandOutput,
  HeadObjectCommand,
  type HeadObjectCommandInput,
  type HeadObjectCommandOutput,
  ListBucketAnalyticsConfigurationsCommand,
  type ListBucketAnalyticsConfigurationsCommandInput,
  type ListBucketAnalyticsConfigurationsCommandOutput,
  ListBucketIntelligentTieringConfigurationsCommand,
  type ListBucketIntelligentTieringConfigurationsCommandInput,
  type ListBucketIntelligentTieringConfigurationsCommandOutput,
  ListBucketInventoryConfigurationsCommand,
  type ListBucketInventoryConfigurationsCommandInput,
  type ListBucketInventoryConfigurationsCommandOutput,
  ListBucketMetricsConfigurationsCommand,
  type ListBucketMetricsConfigurationsCommandInput,
  type ListBucketMetricsConfigurationsCommandOutput,
  ListBucketsCommand,
  type ListBucketsCommandInput,
  type ListBucketsCommandOutput,
  ListDirectoryBucketsCommand,
  type ListDirectoryBucketsCommandInput,
  type ListDirectoryBucketsCommandOutput,
  ListMultipartUploadsCommand,
  type ListMultipartUploadsCommandInput,
  type ListMultipartUploadsCommandOutput,
  ListObjectsCommand,
  type ListObjectsCommandInput,
  type ListObjectsCommandOutput,
  ListObjectsV2Command,
  type ListObjectsV2CommandInput,
  type ListObjectsV2CommandOutput,
  ListObjectVersionsCommand,
  type ListObjectVersionsCommandInput,
  type ListObjectVersionsCommandOutput,
  ListPartsCommand,
  type ListPartsCommandInput,
  type ListPartsCommandOutput,
  PutBucketAccelerateConfigurationCommand,
  type PutBucketAccelerateConfigurationCommandInput,
  type PutBucketAccelerateConfigurationCommandOutput,
  PutBucketAclCommand,
  type PutBucketAclCommandInput,
  type PutBucketAclCommandOutput,
  PutBucketAnalyticsConfigurationCommand,
  type PutBucketAnalyticsConfigurationCommandInput,
  type PutBucketAnalyticsConfigurationCommandOutput,
  PutBucketCorsCommand,
  type PutBucketCorsCommandInput,
  type PutBucketCorsCommandOutput,
  PutBucketEncryptionCommand,
  type PutBucketEncryptionCommandInput,
  type PutBucketEncryptionCommandOutput,
  PutBucketIntelligentTieringConfigurationCommand,
  type PutBucketIntelligentTieringConfigurationCommandInput,
  type PutBucketIntelligentTieringConfigurationCommandOutput,
  PutBucketInventoryConfigurationCommand,
  type PutBucketInventoryConfigurationCommandInput,
  type PutBucketInventoryConfigurationCommandOutput,
  PutBucketLifecycleConfigurationCommand,
  type PutBucketLifecycleConfigurationCommandInput,
  type PutBucketLifecycleConfigurationCommandOutput,
  PutBucketLoggingCommand,
  type PutBucketLoggingCommandInput,
  type PutBucketLoggingCommandOutput,
  PutBucketMetricsConfigurationCommand,
  type PutBucketMetricsConfigurationCommandInput,
  type PutBucketMetricsConfigurationCommandOutput,
  PutBucketNotificationConfigurationCommand,
  type PutBucketNotificationConfigurationCommandInput,
  type PutBucketNotificationConfigurationCommandOutput,
  PutBucketOwnershipControlsCommand,
  type PutBucketOwnershipControlsCommandInput,
  type PutBucketOwnershipControlsCommandOutput,
  PutBucketPolicyCommand,
  type PutBucketPolicyCommandInput,
  type PutBucketPolicyCommandOutput,
  PutBucketReplicationCommand,
  type PutBucketReplicationCommandInput,
  type PutBucketReplicationCommandOutput,
  PutBucketRequestPaymentCommand,
  type PutBucketRequestPaymentCommandInput,
  type PutBucketRequestPaymentCommandOutput,
  PutBucketTaggingCommand,
  type PutBucketTaggingCommandInput,
  type PutBucketTaggingCommandOutput,
  PutBucketVersioningCommand,
  type PutBucketVersioningCommandInput,
  type PutBucketVersioningCommandOutput,
  PutBucketWebsiteCommand,
  type PutBucketWebsiteCommandInput,
  type PutBucketWebsiteCommandOutput,
  PutObjectAclCommand,
  type PutObjectAclCommandInput,
  type PutObjectAclCommandOutput,
  PutObjectCommand,
  type PutObjectCommandInput,
  type PutObjectCommandOutput,
  PutObjectLegalHoldCommand,
  type PutObjectLegalHoldCommandInput,
  type PutObjectLegalHoldCommandOutput,
  PutObjectLockConfigurationCommand,
  type PutObjectLockConfigurationCommandInput,
  type PutObjectLockConfigurationCommandOutput,
  PutObjectRetentionCommand,
  type PutObjectRetentionCommandInput,
  type PutObjectRetentionCommandOutput,
  PutObjectTaggingCommand,
  type PutObjectTaggingCommandInput,
  type PutObjectTaggingCommandOutput,
  PutPublicAccessBlockCommand,
  type PutPublicAccessBlockCommandInput,
  type PutPublicAccessBlockCommandOutput,
  RestoreObjectCommand,
  type RestoreObjectCommandInput,
  type RestoreObjectCommandOutput,
  type S3Client,
  type S3ClientConfig,
  SelectObjectContentCommand,
  type SelectObjectContentCommandInput,
  type SelectObjectContentCommandOutput,
  UploadPartCommand,
  type UploadPartCommandInput,
  type UploadPartCommandOutput,
  UploadPartCopyCommand,
  type UploadPartCopyCommandInput,
  type UploadPartCopyCommandOutput,
  WriteGetObjectResponseCommand,
  type WriteGetObjectResponseCommandInput,
  type WriteGetObjectResponseCommandOutput,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { RequestPresigningArguments } from "@aws-sdk/types";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  BucketAlreadyExistsError,
  BucketAlreadyOwnedByYouError,
  EncryptionTypeMismatchError,
  InvalidObjectStateError,
  InvalidRequestError,
  InvalidWriteOffsetError,
  NoSuchBucketError,
  NoSuchKeyError,
  NoSuchUploadError,
  NotFoundError,
  ObjectAlreadyInActiveTierError,
  ObjectNotInActiveTierError,
  S3ServiceError,
  TooManyPartsError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./S3ClientInstance.js";
import * as S3ServiceConfig from "./S3ServiceConfig.js";

const commands = {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CopyObjectCommand,
  CreateBucketCommand,
  CreateBucketMetadataTableConfigurationCommand,
  CreateMultipartUploadCommand,
  CreateSessionCommand,
  DeleteBucketCommand,
  DeleteBucketAnalyticsConfigurationCommand,
  DeleteBucketCorsCommand,
  DeleteBucketEncryptionCommand,
  DeleteBucketIntelligentTieringConfigurationCommand,
  DeleteBucketInventoryConfigurationCommand,
  DeleteBucketLifecycleCommand,
  DeleteBucketMetadataTableConfigurationCommand,
  DeleteBucketMetricsConfigurationCommand,
  DeleteBucketOwnershipControlsCommand,
  DeleteBucketPolicyCommand,
  DeleteBucketReplicationCommand,
  DeleteBucketTaggingCommand,
  DeleteBucketWebsiteCommand,
  DeleteObjectCommand,
  DeleteObjectTaggingCommand,
  DeleteObjectsCommand,
  DeletePublicAccessBlockCommand,
  GetBucketAccelerateConfigurationCommand,
  GetBucketAclCommand,
  GetBucketAnalyticsConfigurationCommand,
  GetBucketCorsCommand,
  GetBucketEncryptionCommand,
  GetBucketIntelligentTieringConfigurationCommand,
  GetBucketInventoryConfigurationCommand,
  GetBucketLifecycleConfigurationCommand,
  GetBucketLocationCommand,
  GetBucketLoggingCommand,
  GetBucketMetadataTableConfigurationCommand,
  GetBucketMetricsConfigurationCommand,
  GetBucketNotificationConfigurationCommand,
  GetBucketOwnershipControlsCommand,
  GetBucketPolicyCommand,
  GetBucketPolicyStatusCommand,
  GetBucketReplicationCommand,
  GetBucketRequestPaymentCommand,
  GetBucketTaggingCommand,
  GetBucketVersioningCommand,
  GetBucketWebsiteCommand,
  GetObjectCommand,
  GetObjectAclCommand,
  GetObjectAttributesCommand,
  GetObjectLegalHoldCommand,
  GetObjectLockConfigurationCommand,
  GetObjectRetentionCommand,
  GetObjectTaggingCommand,
  GetObjectTorrentCommand,
  GetPublicAccessBlockCommand,
  HeadBucketCommand,
  HeadObjectCommand,
  ListBucketAnalyticsConfigurationsCommand,
  ListBucketIntelligentTieringConfigurationsCommand,
  ListBucketInventoryConfigurationsCommand,
  ListBucketMetricsConfigurationsCommand,
  ListBucketsCommand,
  ListDirectoryBucketsCommand,
  ListMultipartUploadsCommand,
  ListObjectVersionsCommand,
  ListObjectsCommand,
  ListObjectsV2Command,
  ListPartsCommand,
  PutBucketAccelerateConfigurationCommand,
  PutBucketAclCommand,
  PutBucketAnalyticsConfigurationCommand,
  PutBucketCorsCommand,
  PutBucketEncryptionCommand,
  PutBucketIntelligentTieringConfigurationCommand,
  PutBucketInventoryConfigurationCommand,
  PutBucketLifecycleConfigurationCommand,
  PutBucketLoggingCommand,
  PutBucketMetricsConfigurationCommand,
  PutBucketNotificationConfigurationCommand,
  PutBucketOwnershipControlsCommand,
  PutBucketPolicyCommand,
  PutBucketReplicationCommand,
  PutBucketRequestPaymentCommand,
  PutBucketTaggingCommand,
  PutBucketVersioningCommand,
  PutBucketWebsiteCommand,
  PutObjectCommand,
  PutObjectAclCommand,
  PutObjectLegalHoldCommand,
  PutObjectLockConfigurationCommand,
  PutObjectRetentionCommand,
  PutObjectTaggingCommand,
  PutPublicAccessBlockCommand,
  RestoreObjectCommand,
  SelectObjectContentCommand,
  UploadPartCommand,
  UploadPartCopyCommand,
  WriteGetObjectResponseCommand,
};

interface S3Service$ {
  readonly _: unique symbol;

  /**
   * @see {@link AbortMultipartUploadCommand}
   */
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AbortMultipartUploadCommandOutput,
    SdkError | NoSuchUploadError
  >;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CompleteMultipartUploadCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link CopyObjectCommand}
   */
  copyObject(
    args: CopyObjectCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyObjectCommandOutput,
    SdkError | ObjectNotInActiveTierError
  >;

  /**
   * @see {@link CreateBucketCommand}
   */
  createBucket(
    args: CreateBucketCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBucketCommandOutput,
    SdkError | BucketAlreadyExistsError | BucketAlreadyOwnedByYouError
  >;

  /**
   * @see {@link CreateBucketMetadataTableConfigurationCommand}
   */
  createBucketMetadataTableConfiguration(
    args: CreateBucketMetadataTableConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBucketMetadataTableConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link CreateMultipartUploadCommand}
   */
  createMultipartUpload(
    args: CreateMultipartUploadCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMultipartUploadCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(
    args: CreateSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSessionCommandOutput,
    SdkError | NoSuchBucketError
  >;

  /**
   * @see {@link DeleteBucketCommand}
   */
  deleteBucket(
    args: DeleteBucketCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketAnalyticsConfigurationCommand}
   */
  deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketCorsCommand}
   */
  deleteBucketCors(
    args: DeleteBucketCorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketCorsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketEncryptionCommand}
   */
  deleteBucketEncryption(
    args: DeleteBucketEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketEncryptionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketIntelligentTieringConfigurationCommand}
   */
  deleteBucketIntelligentTieringConfiguration(
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketInventoryConfigurationCommand}
   */
  deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketLifecycleCommand}
   */
  deleteBucketLifecycle(
    args: DeleteBucketLifecycleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketLifecycleCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketMetadataTableConfigurationCommand}
   */
  deleteBucketMetadataTableConfiguration(
    args: DeleteBucketMetadataTableConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketMetadataTableConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketMetricsConfigurationCommand}
   */
  deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketOwnershipControlsCommand}
   */
  deleteBucketOwnershipControls(
    args: DeleteBucketOwnershipControlsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketPolicyCommand}
   */
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketPolicyCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketReplicationCommand}
   */
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketTaggingCommand}
   */
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketWebsiteCommand}
   */
  deleteBucketWebsite(
    args: DeleteBucketWebsiteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketWebsiteCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteObjectCommand}
   */
  deleteObject(
    args: DeleteObjectCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteObjectCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteObjectTaggingCommand}
   */
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteObjectTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteObjectsCommand}
   */
  deleteObjects(
    args: DeleteObjectsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteObjectsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeletePublicAccessBlockCommand}
   */
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketAccelerateConfigurationCommand}
   */
  getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketAccelerateConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketAclCommand}
   */
  getBucketAcl(
    args: GetBucketAclCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketAclCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketAnalyticsConfigurationCommand}
   */
  getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketCorsCommand}
   */
  getBucketCors(
    args: GetBucketCorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketCorsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketEncryptionCommand}
   */
  getBucketEncryption(
    args: GetBucketEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketEncryptionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketIntelligentTieringConfigurationCommand}
   */
  getBucketIntelligentTieringConfiguration(
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketInventoryConfigurationCommand}
   */
  getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketLifecycleConfigurationCommand}
   */
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketLifecycleConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketLocationCommand}
   */
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketLocationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketLoggingCommand}
   */
  getBucketLogging(
    args: GetBucketLoggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketLoggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketMetadataTableConfigurationCommand}
   */
  getBucketMetadataTableConfiguration(
    args: GetBucketMetadataTableConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketMetadataTableConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketMetricsConfigurationCommand}
   */
  getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketNotificationConfigurationCommand}
   */
  getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketNotificationConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketOwnershipControlsCommand}
   */
  getBucketOwnershipControls(
    args: GetBucketOwnershipControlsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketPolicyCommand}
   */
  getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketPolicyCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketPolicyStatusCommand}
   */
  getBucketPolicyStatus(
    args: GetBucketPolicyStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketPolicyStatusCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketReplicationCommand}
   */
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketRequestPaymentCommand}
   */
  getBucketRequestPayment(
    args: GetBucketRequestPaymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketRequestPaymentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketTaggingCommand}
   */
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketVersioningCommand}
   */
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketVersioningCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketWebsiteCommand}
   */
  getBucketWebsite(
    args: GetBucketWebsiteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketWebsiteCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectCommand}
   */
  getObject(
    args: GetObjectCommandInput,
    options?: { readonly presigned?: false } & HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectCommandOutput,
    SdkError | InvalidObjectStateError | NoSuchKeyError
  >;
  getObject(
    args: GetObjectCommandInput,
    options?: { readonly presigned: true } & RequestPresigningArguments,
  ): Effect.Effect<string, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectAclCommand}
   */
  getObjectAcl(
    args: GetObjectAclCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectAclCommandOutput,
    SdkError | NoSuchKeyError
  >;

  /**
   * @see {@link GetObjectAttributesCommand}
   */
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectAttributesCommandOutput,
    SdkError | NoSuchKeyError
  >;

  /**
   * @see {@link GetObjectLegalHoldCommand}
   */
  getObjectLegalHold(
    args: GetObjectLegalHoldCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectLegalHoldCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectLockConfigurationCommand}
   */
  getObjectLockConfiguration(
    args: GetObjectLockConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectLockConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectRetentionCommand}
   */
  getObjectRetention(
    args: GetObjectRetentionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectRetentionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectTaggingCommand}
   */
  getObjectTagging(
    args: GetObjectTaggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectTorrentCommand}
   */
  getObjectTorrent(
    args: GetObjectTorrentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectTorrentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetPublicAccessBlockCommand}
   */
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link HeadBucketCommand}
   */
  headBucket(
    args: HeadBucketCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    HeadBucketCommandOutput,
    SdkError | NotFoundError
  >;

  /**
   * @see {@link HeadObjectCommand}
   */
  headObject(
    args: HeadObjectCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    HeadObjectCommandOutput,
    SdkError | NotFoundError
  >;

  /**
   * @see {@link ListBucketAnalyticsConfigurationsCommand}
   */
  listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketAnalyticsConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketIntelligentTieringConfigurationsCommand}
   */
  listBucketIntelligentTieringConfigurations(
    args: ListBucketIntelligentTieringConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketIntelligentTieringConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketInventoryConfigurationsCommand}
   */
  listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketInventoryConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketMetricsConfigurationsCommand}
   */
  listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketMetricsConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketsCommand}
   */
  listBuckets(
    args: ListBucketsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListDirectoryBucketsCommand}
   */
  listDirectoryBuckets(
    args: ListDirectoryBucketsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDirectoryBucketsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMultipartUploadsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListObjectVersionsCommand}
   */
  listObjectVersions(
    args: ListObjectVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListObjectVersionsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListObjectsCommand}
   */
  listObjects(
    args: ListObjectsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListObjectsCommandOutput,
    SdkError | NoSuchBucketError
  >;

  /**
   * @see {@link ListObjectsV2Command}
   */
  listObjectsV2(
    args: ListObjectsV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListObjectsV2CommandOutput,
    SdkError | NoSuchBucketError
  >;

  /**
   * @see {@link ListPartsCommand}
   */
  listParts(
    args: ListPartsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPartsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketAccelerateConfigurationCommand}
   */
  putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketAccelerateConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketAclCommand}
   */
  putBucketAcl(
    args: PutBucketAclCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketAclCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketAnalyticsConfigurationCommand}
   */
  putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketCorsCommand}
   */
  putBucketCors(
    args: PutBucketCorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketCorsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketEncryptionCommand}
   */
  putBucketEncryption(
    args: PutBucketEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketEncryptionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketIntelligentTieringConfigurationCommand}
   */
  putBucketIntelligentTieringConfiguration(
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketInventoryConfigurationCommand}
   */
  putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketLifecycleConfigurationCommand}
   */
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketLifecycleConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketLoggingCommand}
   */
  putBucketLogging(
    args: PutBucketLoggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketLoggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketMetricsConfigurationCommand}
   */
  putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketNotificationConfigurationCommand}
   */
  putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketNotificationConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketOwnershipControlsCommand}
   */
  putBucketOwnershipControls(
    args: PutBucketOwnershipControlsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketPolicyCommand}
   */
  putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketPolicyCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketReplicationCommand}
   */
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketRequestPaymentCommand}
   */
  putBucketRequestPayment(
    args: PutBucketRequestPaymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketRequestPaymentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketTaggingCommand}
   */
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketVersioningCommand}
   */
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketVersioningCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketWebsiteCommand}
   */
  putBucketWebsite(
    args: PutBucketWebsiteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketWebsiteCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectCommand}
   */
  putObject(
    args: PutObjectCommandInput,
    options?: { readonly presigned?: false } & HttpHandlerOptions,
  ): Effect.Effect<
    PutObjectCommandOutput,
    SdkError | EncryptionTypeMismatchError | InvalidRequestError | InvalidWriteOffsetError | TooManyPartsError
  >;
  putObject(
    args: PutObjectCommandInput,
    options?: { readonly presigned: true } & RequestPresigningArguments,
  ): Effect.Effect<string, SdkError | S3ServiceError>;

  /**
   * @see {@link PutObjectAclCommand}
   */
  putObjectAcl(
    args: PutObjectAclCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutObjectAclCommandOutput,
    SdkError | NoSuchKeyError
  >;

  /**
   * @see {@link PutObjectLegalHoldCommand}
   */
  putObjectLegalHold(
    args: PutObjectLegalHoldCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutObjectLegalHoldCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectLockConfigurationCommand}
   */
  putObjectLockConfiguration(
    args: PutObjectLockConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutObjectLockConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectRetentionCommand}
   */
  putObjectRetention(
    args: PutObjectRetentionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutObjectRetentionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectTaggingCommand}
   */
  putObjectTagging(
    args: PutObjectTaggingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutObjectTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutPublicAccessBlockCommand}
   */
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutPublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link RestoreObjectCommand}
   */
  restoreObject(
    args: RestoreObjectCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreObjectCommandOutput,
    SdkError | ObjectAlreadyInActiveTierError
  >;

  /**
   * @see {@link SelectObjectContentCommand}
   */
  selectObjectContent(
    args: SelectObjectContentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SelectObjectContentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link UploadPartCommand}
   */
  uploadPart(
    args: UploadPartCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UploadPartCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link UploadPartCopyCommand}
   */
  uploadPartCopy(
    args: UploadPartCopyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UploadPartCopyCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link WriteGetObjectResponseCommand}
   */
  writeGetObjectResponse(
    args: WriteGetObjectResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    WriteGetObjectResponseCommandOutput,
    SdkError | S3ServiceError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeS3Service = Effect.gen(function*() {
  const client = yield* Instance.S3ClientInstance;

  return Service.fromCommandsAndServiceFn<S3Service$>(commands, (CommandCtor) =>
  (
    args: any,
    options?:
      | ({ readonly presigned?: false } & HttpHandlerOptions)
      | ({ readonly presigned: true } & RequestPresigningArguments),
  ) =>
    options?.presigned
      ? Effect.gen(function*() {
        const config = yield* S3ServiceConfig.toS3ClientConfig;
        return yield* Effect.tryPromise({
          try: () => getSignedUrl(client, new CommandCtor(args, config), options),
          catch: Service.catchServiceExceptions(AllServiceErrors),
        });
      })
      : Service.makeServiceFn(client, CommandCtor, {
        errorTags: AllServiceErrors,
        resolveClientConfig: S3ServiceConfig.toS3ClientConfig,
      })(args, options));
});

/**
 * @since 1.0.0
 * @category models
 */
export class S3Service extends Effect.Tag("@effect-aws/client-s3/S3Service")<
  S3Service,
  S3Service$
>() {
  declare static readonly getObject: S3Service$["getObject"];
  declare static readonly putObject: S3Service$["putObject"];

  static readonly defaultLayer = Layer.effect(this, makeS3Service).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: S3Service.Config) =>
    Layer.effect(this, makeS3Service).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(S3ServiceConfig.setS3ServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: S3ClientConfig) => S3Client,
  ) =>
    Layer.effect(this, makeS3Service).pipe(
      Layer.provide(
        Layer.effect(
          Instance.S3ClientInstance,
          Effect.map(S3ServiceConfig.toS3ClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace S3Service {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<S3ClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
