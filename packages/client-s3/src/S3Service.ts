/**
 * @since 1.0.0
 */
import {
  AbortMultipartUploadCommand,
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
  CopyObjectCommand,
  CopyObjectCommandInput,
  CopyObjectCommandOutput,
  CreateBucketCommand,
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
  CreateMultipartUploadCommand,
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
  DeleteBucketAnalyticsConfigurationCommand,
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
  DeleteBucketCommand,
  DeleteBucketCommandInput,
  DeleteBucketCommandOutput,
  DeleteBucketCorsCommand,
  DeleteBucketCorsCommandInput,
  DeleteBucketCorsCommandOutput,
  DeleteBucketEncryptionCommand,
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
  DeleteBucketIntelligentTieringConfigurationCommand,
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
  DeleteBucketInventoryConfigurationCommand,
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
  DeleteBucketLifecycleCommand,
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
  DeleteBucketMetricsConfigurationCommand,
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
  DeleteBucketOwnershipControlsCommand,
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
  DeleteBucketPolicyCommand,
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
  DeleteBucketReplicationCommand,
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
  DeleteBucketTaggingCommand,
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
  DeleteBucketWebsiteCommand,
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
  DeleteObjectsCommand,
  DeleteObjectsCommandInput,
  DeleteObjectsCommandOutput,
  DeleteObjectTaggingCommand,
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
  DeletePublicAccessBlockCommand,
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
  GetBucketAccelerateConfigurationCommand,
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
  GetBucketAclCommand,
  GetBucketAclCommandInput,
  GetBucketAclCommandOutput,
  GetBucketAnalyticsConfigurationCommand,
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
  GetBucketCorsCommand,
  GetBucketCorsCommandInput,
  GetBucketCorsCommandOutput,
  GetBucketEncryptionCommand,
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
  GetBucketIntelligentTieringConfigurationCommand,
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
  GetBucketInventoryConfigurationCommand,
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
  GetBucketLifecycleConfigurationCommand,
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
  GetBucketLocationCommand,
  GetBucketLocationCommandInput,
  GetBucketLocationCommandOutput,
  GetBucketLoggingCommand,
  GetBucketLoggingCommandInput,
  GetBucketLoggingCommandOutput,
  GetBucketMetricsConfigurationCommand,
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
  GetBucketNotificationConfigurationCommand,
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
  GetBucketOwnershipControlsCommand,
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
  GetBucketPolicyCommand,
  GetBucketPolicyCommandInput,
  GetBucketPolicyCommandOutput,
  GetBucketPolicyStatusCommand,
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
  GetBucketReplicationCommand,
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
  GetBucketRequestPaymentCommand,
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
  GetBucketTaggingCommand,
  GetBucketTaggingCommandInput,
  GetBucketTaggingCommandOutput,
  GetBucketVersioningCommand,
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
  GetBucketWebsiteCommand,
  GetBucketWebsiteCommandInput,
  GetBucketWebsiteCommandOutput,
  GetObjectAclCommand,
  GetObjectAclCommandInput,
  GetObjectAclCommandOutput,
  GetObjectAttributesCommand,
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
  GetObjectCommand,
  GetObjectCommandInput,
  GetObjectCommandOutput,
  GetObjectLegalHoldCommand,
  GetObjectLegalHoldCommandInput,
  GetObjectLegalHoldCommandOutput,
  GetObjectLockConfigurationCommand,
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
  GetObjectRetentionCommand,
  GetObjectRetentionCommandInput,
  GetObjectRetentionCommandOutput,
  GetObjectTaggingCommand,
  GetObjectTaggingCommandInput,
  GetObjectTaggingCommandOutput,
  GetObjectTorrentCommand,
  GetObjectTorrentCommandInput,
  GetObjectTorrentCommandOutput,
  GetPublicAccessBlockCommand,
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
  HeadBucketCommand,
  HeadBucketCommandInput,
  HeadBucketCommandOutput,
  HeadObjectCommand,
  HeadObjectCommandInput,
  HeadObjectCommandOutput,
  ListBucketAnalyticsConfigurationsCommand,
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
  ListBucketIntelligentTieringConfigurationsCommand,
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
  ListBucketInventoryConfigurationsCommand,
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
  ListBucketMetricsConfigurationsCommand,
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
  ListBucketsCommand,
  ListBucketsCommandInput,
  ListBucketsCommandOutput,
  ListMultipartUploadsCommand,
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
  ListObjectsCommand,
  ListObjectsCommandInput,
  ListObjectsCommandOutput,
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
  ListObjectVersionsCommand,
  ListObjectVersionsCommandInput,
  ListObjectVersionsCommandOutput,
  ListPartsCommand,
  ListPartsCommandInput,
  ListPartsCommandOutput,
  PutBucketAccelerateConfigurationCommand,
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
  PutBucketAclCommand,
  PutBucketAclCommandInput,
  PutBucketAclCommandOutput,
  PutBucketAnalyticsConfigurationCommand,
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
  PutBucketCorsCommand,
  PutBucketCorsCommandInput,
  PutBucketCorsCommandOutput,
  PutBucketEncryptionCommand,
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
  PutBucketIntelligentTieringConfigurationCommand,
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
  PutBucketInventoryConfigurationCommand,
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
  PutBucketLifecycleConfigurationCommand,
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
  PutBucketLoggingCommand,
  PutBucketLoggingCommandInput,
  PutBucketLoggingCommandOutput,
  PutBucketMetricsConfigurationCommand,
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
  PutBucketNotificationConfigurationCommand,
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
  PutBucketOwnershipControlsCommand,
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
  PutBucketPolicyCommand,
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
  PutBucketReplicationCommand,
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
  PutBucketRequestPaymentCommand,
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
  PutBucketTaggingCommand,
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
  PutBucketVersioningCommand,
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
  PutBucketWebsiteCommand,
  PutBucketWebsiteCommandInput,
  PutBucketWebsiteCommandOutput,
  PutObjectAclCommand,
  PutObjectAclCommandInput,
  PutObjectAclCommandOutput,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  PutObjectLegalHoldCommand,
  PutObjectLegalHoldCommandInput,
  PutObjectLegalHoldCommandOutput,
  PutObjectLockConfigurationCommand,
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
  PutObjectRetentionCommand,
  PutObjectRetentionCommandInput,
  PutObjectRetentionCommandOutput,
  PutObjectTaggingCommand,
  PutObjectTaggingCommandInput,
  PutObjectTaggingCommandOutput,
  PutPublicAccessBlockCommand,
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
  RestoreObjectCommand,
  RestoreObjectCommandInput,
  RestoreObjectCommandOutput,
  S3ServiceException,
  SelectObjectContentCommand,
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
  UploadPartCommand,
  UploadPartCommandInput,
  UploadPartCommandOutput,
  UploadPartCopyCommand,
  UploadPartCopyCommandInput,
  UploadPartCopyCommandOutput,
  WriteGetObjectResponseCommand,
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  HttpHandlerOptions as __HttpHandlerOptions,
  RequestPresigningArguments,
} from "@aws-sdk/types";
import { Context, Effect, Layer, ReadonlyRecord } from "effect";
import { S3ServiceError, SdkError } from "./Errors";
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
  readonly abortMultipartUpload: (
    args: AbortMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AbortMultipartUploadCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  readonly completeMultipartUpload: (
    args: CompleteMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CompleteMultipartUploadCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link CopyObjectCommand}
   */
  readonly copyObject: (
    args: CopyObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CopyObjectCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link CreateBucketCommand}
   */
  readonly createBucket: (
    args: CreateBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateBucketCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link CreateMultipartUploadCommand}
   */
  readonly createMultipartUpload: (
    args: CreateMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateMultipartUploadCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketCommand}
   */
  readonly deleteBucket: (
    args: DeleteBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteBucketCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteBucketAnalyticsConfigurationCommand}
   */
  readonly deleteBucketAnalyticsConfiguration: (
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketCorsCommand}
   */
  readonly deleteBucketCors: (
    args: DeleteBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteBucketCorsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteBucketEncryptionCommand}
   */
  readonly deleteBucketEncryption: (
    args: DeleteBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketEncryptionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketIntelligentTieringConfigurationCommand}
   */
  readonly deleteBucketIntelligentTieringConfiguration: (
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketInventoryConfigurationCommand}
   */
  readonly deleteBucketInventoryConfiguration: (
    args: DeleteBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketLifecycleCommand}
   */
  readonly deleteBucketLifecycle: (
    args: DeleteBucketLifecycleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketLifecycleCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketMetricsConfigurationCommand}
   */
  readonly deleteBucketMetricsConfiguration: (
    args: DeleteBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketOwnershipControlsCommand}
   */
  readonly deleteBucketOwnershipControls: (
    args: DeleteBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketPolicyCommand}
   */
  readonly deleteBucketPolicy: (
    args: DeleteBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketPolicyCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketReplicationCommand}
   */
  readonly deleteBucketReplication: (
    args: DeleteBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketTaggingCommand}
   */
  readonly deleteBucketTagging: (
    args: DeleteBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteBucketWebsiteCommand}
   */
  readonly deleteBucketWebsite: (
    args: DeleteBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteBucketWebsiteCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeleteObjectCommand}
   */
  readonly deleteObject: (
    args: DeleteObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteObjectCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteObjectsCommand}
   */
  readonly deleteObjects: (
    args: DeleteObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteObjectsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link DeleteObjectTaggingCommand}
   */
  readonly deleteObjectTagging: (
    args: DeleteObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteObjectTaggingCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link DeletePublicAccessBlockCommand}
   */
  readonly deletePublicAccessBlock: (
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeletePublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketAccelerateConfigurationCommand}
   */
  readonly getBucketAccelerateConfiguration: (
    args: GetBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketAccelerateConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketAclCommand}
   */
  readonly getBucketAcl: (
    args: GetBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetBucketAclCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketAnalyticsConfigurationCommand}
   */
  readonly getBucketAnalyticsConfiguration: (
    args: GetBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketCorsCommand}
   */
  readonly getBucketCors: (
    args: GetBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetBucketCorsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketEncryptionCommand}
   */
  readonly getBucketEncryption: (
    args: GetBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketEncryptionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketIntelligentTieringConfigurationCommand}
   */
  readonly getBucketIntelligentTieringConfiguration: (
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketInventoryConfigurationCommand}
   */
  readonly getBucketInventoryConfiguration: (
    args: GetBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketLifecycleConfigurationCommand}
   */
  readonly getBucketLifecycleConfiguration: (
    args: GetBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketLifecycleConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketLocationCommand}
   */
  readonly getBucketLocation: (
    args: GetBucketLocationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetBucketLocationCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketLoggingCommand}
   */
  readonly getBucketLogging: (
    args: GetBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetBucketLoggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketMetricsConfigurationCommand}
   */
  readonly getBucketMetricsConfiguration: (
    args: GetBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketNotificationConfigurationCommand}
   */
  readonly getBucketNotificationConfiguration: (
    args: GetBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketNotificationConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketOwnershipControlsCommand}
   */
  readonly getBucketOwnershipControls: (
    args: GetBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketPolicyCommand}
   */
  readonly getBucketPolicy: (
    args: GetBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetBucketPolicyCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketPolicyStatusCommand}
   */
  readonly getBucketPolicyStatus: (
    args: GetBucketPolicyStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketPolicyStatusCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketReplicationCommand}
   */
  readonly getBucketReplication: (
    args: GetBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketRequestPaymentCommand}
   */
  readonly getBucketRequestPayment: (
    args: GetBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketRequestPaymentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketTaggingCommand}
   */
  readonly getBucketTagging: (
    args: GetBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetBucketTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetBucketVersioningCommand}
   */
  readonly getBucketVersioning: (
    args: GetBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetBucketVersioningCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetBucketWebsiteCommand}
   */
  readonly getBucketWebsite: (
    args: GetBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetBucketWebsiteCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectCommand}
   */
  readonly getObject: {
    (
      args: GetObjectCommandInput,
      options?: { readonly presigned?: false } & __HttpHandlerOptions,
    ): Effect.Effect<GetObjectCommandOutput, SdkError | S3ServiceError>;
    (
      args: GetObjectCommandInput,
      options?: { readonly presigned: true } & RequestPresigningArguments,
    ): Effect.Effect<string, SdkError | S3ServiceError>;
  };

  /**
   * @see {@link GetObjectAclCommand}
   */
  readonly getObjectAcl: (
    args: GetObjectAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetObjectAclCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectAttributesCommand}
   */
  readonly getObjectAttributes: (
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetObjectAttributesCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectLegalHoldCommand}
   */
  readonly getObjectLegalHold: (
    args: GetObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetObjectLegalHoldCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectLockConfigurationCommand}
   */
  readonly getObjectLockConfiguration: (
    args: GetObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetObjectLockConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectRetentionCommand}
   */
  readonly getObjectRetention: (
    args: GetObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetObjectRetentionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link GetObjectTaggingCommand}
   */
  readonly getObjectTagging: (
    args: GetObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetObjectTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetObjectTorrentCommand}
   */
  readonly getObjectTorrent: (
    args: GetObjectTorrentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetObjectTorrentCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link GetPublicAccessBlockCommand}
   */
  readonly getPublicAccessBlock: (
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetPublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link HeadBucketCommand}
   */
  readonly headBucket: (
    args: HeadBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<HeadBucketCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link HeadObjectCommand}
   */
  readonly headObject: (
    args: HeadObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<HeadObjectCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link ListBucketAnalyticsConfigurationsCommand}
   */
  readonly listBucketAnalyticsConfigurations: (
    args: ListBucketAnalyticsConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListBucketAnalyticsConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketIntelligentTieringConfigurationsCommand}
   */
  readonly listBucketIntelligentTieringConfigurations: (
    args: ListBucketIntelligentTieringConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListBucketIntelligentTieringConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketInventoryConfigurationsCommand}
   */
  readonly listBucketInventoryConfigurations: (
    args: ListBucketInventoryConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListBucketInventoryConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketMetricsConfigurationsCommand}
   */
  readonly listBucketMetricsConfigurations: (
    args: ListBucketMetricsConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListBucketMetricsConfigurationsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListBucketsCommand}
   */
  readonly listBuckets: (
    args: ListBucketsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ListBucketsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  readonly listMultipartUploads: (
    args: ListMultipartUploadsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListMultipartUploadsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListObjectsCommand}
   */
  readonly listObjects: (
    args: ListObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ListObjectsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link ListObjectsV2Command}
   */
  readonly listObjectsV2: (
    args: ListObjectsV2CommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ListObjectsV2CommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link ListObjectVersionsCommand}
   */
  readonly listObjectVersions: (
    args: ListObjectVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListObjectVersionsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link ListPartsCommand}
   */
  readonly listParts: (
    args: ListPartsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ListPartsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketAccelerateConfigurationCommand}
   */
  readonly putBucketAccelerateConfiguration: (
    args: PutBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketAccelerateConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketAclCommand}
   */
  readonly putBucketAcl: (
    args: PutBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutBucketAclCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketAnalyticsConfigurationCommand}
   */
  readonly putBucketAnalyticsConfiguration: (
    args: PutBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketAnalyticsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketCorsCommand}
   */
  readonly putBucketCors: (
    args: PutBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutBucketCorsCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketEncryptionCommand}
   */
  readonly putBucketEncryption: (
    args: PutBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketEncryptionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketIntelligentTieringConfigurationCommand}
   */
  readonly putBucketIntelligentTieringConfiguration: (
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketIntelligentTieringConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketInventoryConfigurationCommand}
   */
  readonly putBucketInventoryConfiguration: (
    args: PutBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketInventoryConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketLifecycleConfigurationCommand}
   */
  readonly putBucketLifecycleConfiguration: (
    args: PutBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketLifecycleConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketLoggingCommand}
   */
  readonly putBucketLogging: (
    args: PutBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutBucketLoggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketMetricsConfigurationCommand}
   */
  readonly putBucketMetricsConfiguration: (
    args: PutBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketMetricsConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketNotificationConfigurationCommand}
   */
  readonly putBucketNotificationConfiguration: (
    args: PutBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketNotificationConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketOwnershipControlsCommand}
   */
  readonly putBucketOwnershipControls: (
    args: PutBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketOwnershipControlsCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketPolicyCommand}
   */
  readonly putBucketPolicy: (
    args: PutBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutBucketPolicyCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketReplicationCommand}
   */
  readonly putBucketReplication: (
    args: PutBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketReplicationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketRequestPaymentCommand}
   */
  readonly putBucketRequestPayment: (
    args: PutBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketRequestPaymentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketTaggingCommand}
   */
  readonly putBucketTagging: (
    args: PutBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutBucketTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutBucketVersioningCommand}
   */
  readonly putBucketVersioning: (
    args: PutBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutBucketVersioningCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutBucketWebsiteCommand}
   */
  readonly putBucketWebsite: (
    args: PutBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutBucketWebsiteCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutObjectCommand}
   */
  readonly putObject: {
    (
      args: PutObjectCommandInput,
      options?: { readonly presigned?: false } & __HttpHandlerOptions,
    ): Effect.Effect<PutObjectCommandOutput, SdkError | S3ServiceError>;
    (
      args: PutObjectCommandInput,
      options?: { readonly presigned: true } & RequestPresigningArguments,
    ): Effect.Effect<string, SdkError | S3ServiceError>;
  };

  /**
   * @see {@link PutObjectAclCommand}
   */
  readonly putObjectAcl: (
    args: PutObjectAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutObjectAclCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutObjectLegalHoldCommand}
   */
  readonly putObjectLegalHold: (
    args: PutObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutObjectLegalHoldCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectLockConfigurationCommand}
   */
  readonly putObjectLockConfiguration: (
    args: PutObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutObjectLockConfigurationCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectRetentionCommand}
   */
  readonly putObjectRetention: (
    args: PutObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutObjectRetentionCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link PutObjectTaggingCommand}
   */
  readonly putObjectTagging: (
    args: PutObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<PutObjectTaggingCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link PutPublicAccessBlockCommand}
   */
  readonly putPublicAccessBlock: (
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PutPublicAccessBlockCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link RestoreObjectCommand}
   */
  readonly restoreObject: (
    args: RestoreObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<RestoreObjectCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link SelectObjectContentCommand}
   */
  readonly selectObjectContent: (
    args: SelectObjectContentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SelectObjectContentCommandOutput,
    SdkError | S3ServiceError
  >;

  /**
   * @see {@link UploadPartCommand}
   */
  readonly uploadPart: (
    args: UploadPartCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<UploadPartCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link UploadPartCopyCommand}
   */
  readonly uploadPartCopy: (
    args: UploadPartCopyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<UploadPartCopyCommandOutput, SdkError | S3ServiceError>;

  /**
   * @see {@link WriteGetObjectResponseCommand}
   */
  readonly writeGetObjectResponse: (
    args: WriteGetObjectResponseCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
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
      return S3ServiceError({
        ...e,
        name: "S3ServiceError",
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
