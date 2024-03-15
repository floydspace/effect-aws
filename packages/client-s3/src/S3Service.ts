/**
 * @since 1.0.0
 */
import {
  S3ServiceException,
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
  CreateMultipartUploadCommand,
  type CreateMultipartUploadCommandInput,
  type CreateMultipartUploadCommandOutput,
  CreateSessionCommand,
  type CreateSessionCommandInput,
  type CreateSessionCommandOutput,
  DeleteBucketCommand,
  type DeleteBucketCommandInput,
  type DeleteBucketCommandOutput,
  DeleteBucketAnalyticsConfigurationCommand,
  type DeleteBucketAnalyticsConfigurationCommandInput,
  type DeleteBucketAnalyticsConfigurationCommandOutput,
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
  GetObjectCommand,
  type GetObjectCommandInput,
  type GetObjectCommandOutput,
  GetObjectAclCommand,
  type GetObjectAclCommandInput,
  type GetObjectAclCommandOutput,
  GetObjectAttributesCommand,
  type GetObjectAttributesCommandInput,
  type GetObjectAttributesCommandOutput,
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
  PutObjectCommand,
  type PutObjectCommandInput,
  type PutObjectCommandOutput,
  PutObjectAclCommand,
  type PutObjectAclCommandInput,
  type PutObjectAclCommandOutput,
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
import {
  type HttpHandlerOptions as __HttpHandlerOptions,
  RequestPresigningArguments,
} from "@aws-sdk/types";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
import {
  BucketAlreadyExistsError,
  BucketAlreadyOwnedByYouError,
  InvalidObjectStateError,
  NoSuchBucketError,
  NoSuchKeyError,
  NoSuchUploadError,
  NotFoundError,
  ObjectAlreadyInActiveTierError,
  ObjectNotInActiveTierError,
  S3ServiceError,
  SdkError,
  TaggedException,
} from "./Errors";
import {
  DefaultS3ClientInstanceLayer,
  S3ClientInstance,
  S3ClientInstanceLayer,
} from "./S3ClientInstance";
import { DefaultS3ClientConfigLayer } from "./S3ClientInstanceConfig";

const commands = {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CopyObjectCommand,
  CreateBucketCommand,
  CreateMultipartUploadCommand,
  CreateSessionCommand,
  DeleteBucketCommand,
  DeleteBucketAnalyticsConfigurationCommand,
  DeleteBucketCorsCommand,
  DeleteBucketEncryptionCommand,
  DeleteBucketIntelligentTieringConfigurationCommand,
  DeleteBucketInventoryConfigurationCommand,
  DeleteBucketLifecycleCommand,
  DeleteBucketMetricsConfigurationCommand,
  DeleteBucketOwnershipControlsCommand,
  DeleteBucketPolicyCommand,
  DeleteBucketReplicationCommand,
  DeleteBucketTaggingCommand,
  DeleteBucketWebsiteCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  DeleteObjectTaggingCommand,
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
  ListObjectsCommand,
  ListObjectsV2Command,
  ListObjectVersionsCommand,
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

/**
 * @since 1.0.0
 * @category models
 */
export interface S3Service {
  readonly _: unique symbol;

  /**
   * @see {@link AbortMultipartUploadCommand}
   */
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AbortMultipartUploadCommandOutput,
    SdkError | NoSuchUploadError
  >;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CompleteMultipartUploadCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link CopyObjectCommand}
   */
  copyObject(
    args: CopyObjectCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CopyObjectCommandOutput,
    SdkError | ObjectNotInActiveTierError
  >;

  /**
   * @see {@link CreateBucketCommand}
   */
  createBucket(
    args: CreateBucketCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateBucketCommandOutput,
    SdkError | BucketAlreadyExistsError | BucketAlreadyOwnedByYouError
  >;

  /**
   * @see {@link CreateMultipartUploadCommand}
   */
  createMultipartUpload(
    args: CreateMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateMultipartUploadCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(
    args: CreateSessionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateSessionCommandOutput, SdkError | NoSuchBucketError>;

  /**
   * @see {@link DeleteBucketCommand}
   */
  deleteBucket(
    args: DeleteBucketCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteBucketCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteBucketAnalyticsConfigurationCommand}
   */
  deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketCorsCommand}
   */
  deleteBucketCors(
    args: DeleteBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteBucketCorsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteBucketEncryptionCommand}
   */
  deleteBucketEncryption(
    args: DeleteBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketEncryptionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketIntelligentTieringConfigurationCommand}
   */
  deleteBucketIntelligentTieringConfiguration(
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketInventoryConfigurationCommand}
   */
  deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketLifecycleCommand}
   */
  deleteBucketLifecycle(
    args: DeleteBucketLifecycleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketLifecycleCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketMetricsConfigurationCommand}
   */
  deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketOwnershipControlsCommand}
   */
  deleteBucketOwnershipControls(
    args: DeleteBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketPolicyCommand}
   */
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteBucketPolicyCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteBucketReplicationCommand}
   */
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketTaggingCommand}
   */
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteBucketTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteBucketWebsiteCommand}
   */
  deleteBucketWebsite(
    args: DeleteBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteBucketWebsiteCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteObjectCommand}
   */
  deleteObject(
    args: DeleteObjectCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteObjectCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteObjectsCommand}
   */
  deleteObjects(
    args: DeleteObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteObjectsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteObjectTaggingCommand}
   */
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteObjectTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeletePublicAccessBlockCommand}
   */
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeletePublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketAccelerateConfigurationCommand}
   */
  getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketAccelerateConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketAclCommand}
   */
  getBucketAcl(
    args: GetBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketAclCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketAnalyticsConfigurationCommand}
   */
  getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketCorsCommand}
   */
  getBucketCors(
    args: GetBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketCorsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketEncryptionCommand}
   */
  getBucketEncryption(
    args: GetBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketEncryptionCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketIntelligentTieringConfigurationCommand}
   */
  getBucketIntelligentTieringConfiguration(
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketInventoryConfigurationCommand}
   */
  getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketLifecycleConfigurationCommand}
   */
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketLifecycleConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketLocationCommand}
   */
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketLocationCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketLoggingCommand}
   */
  getBucketLogging(
    args: GetBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketLoggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketMetricsConfigurationCommand}
   */
  getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketNotificationConfigurationCommand}
   */
  getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketNotificationConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketOwnershipControlsCommand}
   */
  getBucketOwnershipControls(
    args: GetBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketPolicyCommand}
   */
  getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketPolicyCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketPolicyStatusCommand}
   */
  getBucketPolicyStatus(
    args: GetBucketPolicyStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketPolicyStatusCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketReplicationCommand}
   */
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketRequestPaymentCommand}
   */
  getBucketRequestPayment(
    args: GetBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketRequestPaymentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketTaggingCommand}
   */
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketVersioningCommand}
   */
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketVersioningCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketWebsiteCommand}
   */
  getBucketWebsite(
    args: GetBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetBucketWebsiteCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectCommand}
   */
  getObject(
    args: GetObjectCommandInput,
    options?: { readonly presigned?: false } & __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetObjectAclCommandOutput, SdkError | NoSuchKeyError>;

  /**
   * @see {@link GetObjectAttributesCommand}
   */
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetObjectAttributesCommandOutput, SdkError | NoSuchKeyError>;

  /**
   * @see {@link GetObjectLegalHoldCommand}
   */
  getObjectLegalHold(
    args: GetObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetObjectLegalHoldCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectLockConfigurationCommand}
   */
  getObjectLockConfiguration(
    args: GetObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetObjectLockConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectRetentionCommand}
   */
  getObjectRetention(
    args: GetObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetObjectRetentionCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectTaggingCommand}
   */
  getObjectTagging(
    args: GetObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetObjectTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectTorrentCommand}
   */
  getObjectTorrent(
    args: GetObjectTorrentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetObjectTorrentCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetPublicAccessBlockCommand}
   */
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link HeadBucketCommand}
   */
  headBucket(
    args: HeadBucketCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<HeadBucketCommandOutput, SdkError | NotFoundError>;

  /**
   * @see {@link HeadObjectCommand}
   */
  headObject(
    args: HeadObjectCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<HeadObjectCommandOutput, SdkError | NotFoundError>;

  /**
   * @see {@link ListBucketAnalyticsConfigurationsCommand}
   */
  listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketAnalyticsConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketIntelligentTieringConfigurationsCommand}
   */
  listBucketIntelligentTieringConfigurations(
    args: ListBucketIntelligentTieringConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketIntelligentTieringConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketInventoryConfigurationsCommand}
   */
  listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketInventoryConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketMetricsConfigurationsCommand}
   */
  listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListBucketMetricsConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketsCommand}
   */
  listBuckets(
    args: ListBucketsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListBucketsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link ListDirectoryBucketsCommand}
   */
  listDirectoryBuckets(
    args: ListDirectoryBucketsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDirectoryBucketsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListMultipartUploadsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListObjectsCommand}
   */
  listObjects(
    args: ListObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListObjectsCommandOutput, SdkError | NoSuchBucketError>;

  /**
   * @see {@link ListObjectsV2Command}
   */
  listObjectsV2(
    args: ListObjectsV2CommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListObjectsV2CommandOutput, SdkError | NoSuchBucketError>;

  /**
   * @see {@link ListObjectVersionsCommand}
   */
  listObjectVersions(
    args: ListObjectVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListObjectVersionsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link ListPartsCommand}
   */
  listParts(
    args: ListPartsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListPartsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketAccelerateConfigurationCommand}
   */
  putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketAccelerateConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketAclCommand}
   */
  putBucketAcl(
    args: PutBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketAclCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketAnalyticsConfigurationCommand}
   */
  putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketCorsCommand}
   */
  putBucketCors(
    args: PutBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketCorsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketEncryptionCommand}
   */
  putBucketEncryption(
    args: PutBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketEncryptionCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketIntelligentTieringConfigurationCommand}
   */
  putBucketIntelligentTieringConfiguration(
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketInventoryConfigurationCommand}
   */
  putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketLifecycleConfigurationCommand}
   */
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketLifecycleConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketLoggingCommand}
   */
  putBucketLogging(
    args: PutBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketLoggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketMetricsConfigurationCommand}
   */
  putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketNotificationConfigurationCommand}
   */
  putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketNotificationConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketOwnershipControlsCommand}
   */
  putBucketOwnershipControls(
    args: PutBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketPolicyCommand}
   */
  putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketPolicyCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketReplicationCommand}
   */
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketRequestPaymentCommand}
   */
  putBucketRequestPayment(
    args: PutBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutBucketRequestPaymentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketTaggingCommand}
   */
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketVersioningCommand}
   */
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketVersioningCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketWebsiteCommand}
   */
  putBucketWebsite(
    args: PutBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutBucketWebsiteCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutObjectCommand}
   */
  putObject(
    args: PutObjectCommandInput,
    options?: { readonly presigned?: false } & __HttpHandlerOptions,
  ): Effect.Effect<PutObjectCommandOutput, SdkError | S3ServiceError>;
  putObject(
    args: PutObjectCommandInput,
    options?: { readonly presigned: true } & RequestPresigningArguments,
  ): Effect.Effect<string, SdkError | S3ServiceError>;

  /**
   * @see {@link PutObjectAclCommand}
   */
  putObjectAcl(
    args: PutObjectAclCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutObjectAclCommandOutput, SdkError | NoSuchKeyError>;

  /**
   * @see {@link PutObjectLegalHoldCommand}
   */
  putObjectLegalHold(
    args: PutObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutObjectLegalHoldCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutObjectLockConfigurationCommand}
   */
  putObjectLockConfiguration(
    args: PutObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutObjectLockConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectRetentionCommand}
   */
  putObjectRetention(
    args: PutObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutObjectRetentionCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutObjectTaggingCommand}
   */
  putObjectTagging(
    args: PutObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutObjectTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutPublicAccessBlockCommand}
   */
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutPublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link RestoreObjectCommand}
   */
  restoreObject(
    args: RestoreObjectCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreObjectCommandOutput,
    SdkError | ObjectAlreadyInActiveTierError
  >;

  /**
   * @see {@link SelectObjectContentCommand}
   */
  selectObjectContent(
    args: SelectObjectContentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SelectObjectContentCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link UploadPartCommand}
   */
  uploadPart(
    args: UploadPartCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UploadPartCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link UploadPartCopyCommand}
   */
  uploadPartCopy(
    args: UploadPartCopyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UploadPartCopyCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link WriteGetObjectResponseCommand}
   */
  writeGetObjectResponse(
    args: WriteGetObjectResponseCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    WriteGetObjectResponseCommandOutput,
    SdkError | S3ServiceError
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const S3Service = Context.GenericTag<S3Service>(
  "@effect-aws/client-s3/S3Service",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeS3Service = Effect.gen(function* (_) {
  const client = yield* _(S3ClientInstance);

  const catchErrors = (e: unknown) => {
    if (e instanceof S3ServiceException) {
      const ServiceException = Data.tagged<TaggedException<S3ServiceException>>(
        e.name,
      );

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
  };

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (
      args: any,
      options?:
        | ({ readonly presigned?: false } & __HttpHandlerOptions)
        | ({ readonly presigned: true } & RequestPresigningArguments),
    ) =>
      options?.presigned
        ? Effect.tryPromise({
            try: () =>
              getSignedUrl(client as any, new CommandCtor(args), options),
            catch: catchErrors,
          })
        : Effect.tryPromise({
            try: () => client.send(new CommandCtor(args), options),
            catch: catchErrors,
          });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as S3Service;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseS3ServiceLayer = Layer.effect(S3Service, makeS3Service);

/**
 * @since 1.0.0
 * @category layers
 */
export const S3ServiceLayer = BaseS3ServiceLayer.pipe(
  Layer.provide(S3ClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultS3ServiceLayer = S3ServiceLayer.pipe(
  Layer.provide(DefaultS3ClientConfigLayer),
);

// -------------------- Danger Zone --------------------

/**
 * @since 0.1.0
 * @deprecated
 */
export const BaseS3ServiceEffect = makeS3Service;

/**
 * @since 0.1.0
 * @deprecated
 */
export const S3ServiceEffect = BaseS3ServiceEffect.pipe(
  Effect.provide(S3ClientInstanceLayer),
);

/**
 * @since 0.1.0
 * @deprecated
 */
export const DefaultS3ServiceEffect = BaseS3ServiceEffect.pipe(
  Effect.provide(DefaultS3ClientInstanceLayer),
);
