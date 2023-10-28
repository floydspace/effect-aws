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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import * as Effect from "effect/Effect";
import * as RR from "effect/ReadonlyRecord";
import {
  DefaultS3ClientInstanceLayer,
  S3ClientInstanceLayer,
  S3ClientInstanceTag,
} from "./Context";
import { S3ServiceError, SdkError } from "./Errors";

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

export interface S3Service {
  /**
   * @see {@link AbortMultipartUploadCommand}
   */
  readonly abortMultipartUpload: (
    args: AbortMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    AbortMultipartUploadCommandOutput
  >;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  readonly completeMultipartUpload: (
    args: CompleteMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    CompleteMultipartUploadCommandOutput
  >;

  /**
   * @see {@link CopyObjectCommand}
   */
  readonly copyObject: (
    args: CopyObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, SdkError | S3ServiceError, CopyObjectCommandOutput>;

  /**
   * @see {@link CreateBucketCommand}
   */
  readonly createBucket: (
    args: CreateBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    CreateBucketCommandOutput
  >;

  /**
   * @see {@link CreateMultipartUploadCommand}
   */
  readonly createMultipartUpload: (
    args: CreateMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    CreateMultipartUploadCommandOutput
  >;

  /**
   * @see {@link DeleteBucketCommand}
   */
  readonly deleteBucket: (
    args: DeleteBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketCommandOutput
  >;

  /**
   * @see {@link DeleteBucketAnalyticsConfigurationCommand}
   */
  readonly deleteBucketAnalyticsConfiguration: (
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketAnalyticsConfigurationCommandOutput
  >;

  /**
   * @see {@link DeleteBucketCorsCommand}
   */
  readonly deleteBucketCors: (
    args: DeleteBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketCorsCommandOutput
  >;

  /**
   * @see {@link DeleteBucketEncryptionCommand}
   */
  readonly deleteBucketEncryption: (
    args: DeleteBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketEncryptionCommandOutput
  >;

  /**
   * @see {@link DeleteBucketIntelligentTieringConfigurationCommand}
   */
  readonly deleteBucketIntelligentTieringConfiguration: (
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketIntelligentTieringConfigurationCommandOutput
  >;

  /**
   * @see {@link DeleteBucketInventoryConfigurationCommand}
   */
  readonly deleteBucketInventoryConfiguration: (
    args: DeleteBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketInventoryConfigurationCommandOutput
  >;

  /**
   * @see {@link DeleteBucketLifecycleCommand}
   */
  readonly deleteBucketLifecycle: (
    args: DeleteBucketLifecycleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketLifecycleCommandOutput
  >;

  /**
   * @see {@link DeleteBucketMetricsConfigurationCommand}
   */
  readonly deleteBucketMetricsConfiguration: (
    args: DeleteBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketMetricsConfigurationCommandOutput
  >;

  /**
   * @see {@link DeleteBucketOwnershipControlsCommand}
   */
  readonly deleteBucketOwnershipControls: (
    args: DeleteBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketOwnershipControlsCommandOutput
  >;

  /**
   * @see {@link DeleteBucketPolicyCommand}
   */
  readonly deleteBucketPolicy: (
    args: DeleteBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketPolicyCommandOutput
  >;

  /**
   * @see {@link DeleteBucketReplicationCommand}
   */
  readonly deleteBucketReplication: (
    args: DeleteBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketReplicationCommandOutput
  >;

  /**
   * @see {@link DeleteBucketTaggingCommand}
   */
  readonly deleteBucketTagging: (
    args: DeleteBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketTaggingCommandOutput
  >;

  /**
   * @see {@link DeleteBucketWebsiteCommand}
   */
  readonly deleteBucketWebsite: (
    args: DeleteBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteBucketWebsiteCommandOutput
  >;

  /**
   * @see {@link DeleteObjectCommand}
   */
  readonly deleteObject: (
    args: DeleteObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteObjectCommandOutput
  >;

  /**
   * @see {@link DeleteObjectsCommand}
   */
  readonly deleteObjects: (
    args: DeleteObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteObjectsCommandOutput
  >;

  /**
   * @see {@link DeleteObjectTaggingCommand}
   */
  readonly deleteObjectTagging: (
    args: DeleteObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeleteObjectTaggingCommandOutput
  >;

  /**
   * @see {@link DeletePublicAccessBlockCommand}
   */
  readonly deletePublicAccessBlock: (
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    DeletePublicAccessBlockCommandOutput
  >;

  /**
   * @see {@link GetBucketAccelerateConfigurationCommand}
   */
  readonly getBucketAccelerateConfiguration: (
    args: GetBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketAccelerateConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketAclCommand}
   */
  readonly getBucketAcl: (
    args: GetBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketAclCommandOutput
  >;

  /**
   * @see {@link GetBucketAnalyticsConfigurationCommand}
   */
  readonly getBucketAnalyticsConfiguration: (
    args: GetBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketAnalyticsConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketCorsCommand}
   */
  readonly getBucketCors: (
    args: GetBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketCorsCommandOutput
  >;

  /**
   * @see {@link GetBucketEncryptionCommand}
   */
  readonly getBucketEncryption: (
    args: GetBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketEncryptionCommandOutput
  >;

  /**
   * @see {@link GetBucketIntelligentTieringConfigurationCommand}
   */
  readonly getBucketIntelligentTieringConfiguration: (
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketIntelligentTieringConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketInventoryConfigurationCommand}
   */
  readonly getBucketInventoryConfiguration: (
    args: GetBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketInventoryConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketLifecycleConfigurationCommand}
   */
  readonly getBucketLifecycleConfiguration: (
    args: GetBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketLifecycleConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketLocationCommand}
   */
  readonly getBucketLocation: (
    args: GetBucketLocationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketLocationCommandOutput
  >;

  /**
   * @see {@link GetBucketLoggingCommand}
   */
  readonly getBucketLogging: (
    args: GetBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketLoggingCommandOutput
  >;

  /**
   * @see {@link GetBucketMetricsConfigurationCommand}
   */
  readonly getBucketMetricsConfiguration: (
    args: GetBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketMetricsConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketNotificationConfigurationCommand}
   */
  readonly getBucketNotificationConfiguration: (
    args: GetBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketNotificationConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketOwnershipControlsCommand}
   */
  readonly getBucketOwnershipControls: (
    args: GetBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketOwnershipControlsCommandOutput
  >;

  /**
   * @see {@link GetBucketPolicyCommand}
   */
  readonly getBucketPolicy: (
    args: GetBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketPolicyCommandOutput
  >;

  /**
   * @see {@link GetBucketPolicyStatusCommand}
   */
  readonly getBucketPolicyStatus: (
    args: GetBucketPolicyStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketPolicyStatusCommandOutput
  >;

  /**
   * @see {@link GetBucketReplicationCommand}
   */
  readonly getBucketReplication: (
    args: GetBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketReplicationCommandOutput
  >;

  /**
   * @see {@link GetBucketRequestPaymentCommand}
   */
  readonly getBucketRequestPayment: (
    args: GetBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketRequestPaymentCommandOutput
  >;

  /**
   * @see {@link GetBucketTaggingCommand}
   */
  readonly getBucketTagging: (
    args: GetBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketTaggingCommandOutput
  >;

  /**
   * @see {@link GetBucketVersioningCommand}
   */
  readonly getBucketVersioning: (
    args: GetBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketVersioningCommandOutput
  >;

  /**
   * @see {@link GetBucketWebsiteCommand}
   */
  readonly getBucketWebsite: (
    args: GetBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetBucketWebsiteCommandOutput
  >;

  /**
   * @see {@link GetObjectCommand}
   */
  readonly getObject: (
    args: GetObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, SdkError | S3ServiceError, GetObjectCommandOutput>;

  /**
   * @see {@link GetObjectAclCommand}
   */
  readonly getObjectAcl: (
    args: GetObjectAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetObjectAclCommandOutput
  >;

  /**
   * @see {@link GetObjectAttributesCommand}
   */
  readonly getObjectAttributes: (
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetObjectAttributesCommandOutput
  >;

  /**
   * @see {@link GetObjectLegalHoldCommand}
   */
  readonly getObjectLegalHold: (
    args: GetObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetObjectLegalHoldCommandOutput
  >;

  /**
   * @see {@link GetObjectLockConfigurationCommand}
   */
  readonly getObjectLockConfiguration: (
    args: GetObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetObjectLockConfigurationCommandOutput
  >;

  /**
   * @see {@link GetObjectRetentionCommand}
   */
  readonly getObjectRetention: (
    args: GetObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetObjectRetentionCommandOutput
  >;

  /**
   * @see {@link GetObjectTaggingCommand}
   */
  readonly getObjectTagging: (
    args: GetObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetObjectTaggingCommandOutput
  >;

  /**
   * @see {@link GetObjectTorrentCommand}
   */
  readonly getObjectTorrent: (
    args: GetObjectTorrentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetObjectTorrentCommandOutput
  >;

  /**
   * @see {@link GetPublicAccessBlockCommand}
   */
  readonly getPublicAccessBlock: (
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    GetPublicAccessBlockCommandOutput
  >;

  /**
   * @see {@link HeadBucketCommand}
   */
  readonly headBucket: (
    args: HeadBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, SdkError | S3ServiceError, HeadBucketCommandOutput>;

  /**
   * @see {@link HeadObjectCommand}
   */
  readonly headObject: (
    args: HeadObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, SdkError | S3ServiceError, HeadObjectCommandOutput>;

  /**
   * @see {@link ListBucketAnalyticsConfigurationsCommand}
   */
  readonly listBucketAnalyticsConfigurations: (
    args: ListBucketAnalyticsConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListBucketAnalyticsConfigurationsCommandOutput
  >;

  /**
   * @see {@link ListBucketIntelligentTieringConfigurationsCommand}
   */
  readonly listBucketIntelligentTieringConfigurations: (
    args: ListBucketIntelligentTieringConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListBucketIntelligentTieringConfigurationsCommandOutput
  >;

  /**
   * @see {@link ListBucketInventoryConfigurationsCommand}
   */
  readonly listBucketInventoryConfigurations: (
    args: ListBucketInventoryConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListBucketInventoryConfigurationsCommandOutput
  >;

  /**
   * @see {@link ListBucketMetricsConfigurationsCommand}
   */
  readonly listBucketMetricsConfigurations: (
    args: ListBucketMetricsConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListBucketMetricsConfigurationsCommandOutput
  >;

  /**
   * @see {@link ListBucketsCommand}
   */
  readonly listBuckets: (
    args: ListBucketsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListBucketsCommandOutput
  >;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  readonly listMultipartUploads: (
    args: ListMultipartUploadsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListMultipartUploadsCommandOutput
  >;

  /**
   * @see {@link ListObjectsCommand}
   */
  readonly listObjects: (
    args: ListObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListObjectsCommandOutput
  >;

  /**
   * @see {@link ListObjectsV2Command}
   */
  readonly listObjectsV2: (
    args: ListObjectsV2CommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListObjectsV2CommandOutput
  >;

  /**
   * @see {@link ListObjectVersionsCommand}
   */
  readonly listObjectVersions: (
    args: ListObjectVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    ListObjectVersionsCommandOutput
  >;

  /**
   * @see {@link ListPartsCommand}
   */
  readonly listParts: (
    args: ListPartsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, SdkError | S3ServiceError, ListPartsCommandOutput>;

  /**
   * @see {@link PutBucketAccelerateConfigurationCommand}
   */
  readonly putBucketAccelerateConfiguration: (
    args: PutBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketAccelerateConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketAclCommand}
   */
  readonly putBucketAcl: (
    args: PutBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketAclCommandOutput
  >;

  /**
   * @see {@link PutBucketAnalyticsConfigurationCommand}
   */
  readonly putBucketAnalyticsConfiguration: (
    args: PutBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketAnalyticsConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketCorsCommand}
   */
  readonly putBucketCors: (
    args: PutBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketCorsCommandOutput
  >;

  /**
   * @see {@link PutBucketEncryptionCommand}
   */
  readonly putBucketEncryption: (
    args: PutBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketEncryptionCommandOutput
  >;

  /**
   * @see {@link PutBucketIntelligentTieringConfigurationCommand}
   */
  readonly putBucketIntelligentTieringConfiguration: (
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketIntelligentTieringConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketInventoryConfigurationCommand}
   */
  readonly putBucketInventoryConfiguration: (
    args: PutBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketInventoryConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketLifecycleConfigurationCommand}
   */
  readonly putBucketLifecycleConfiguration: (
    args: PutBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketLifecycleConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketLoggingCommand}
   */
  readonly putBucketLogging: (
    args: PutBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketLoggingCommandOutput
  >;

  /**
   * @see {@link PutBucketMetricsConfigurationCommand}
   */
  readonly putBucketMetricsConfiguration: (
    args: PutBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketMetricsConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketNotificationConfigurationCommand}
   */
  readonly putBucketNotificationConfiguration: (
    args: PutBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketNotificationConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketOwnershipControlsCommand}
   */
  readonly putBucketOwnershipControls: (
    args: PutBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketOwnershipControlsCommandOutput
  >;

  /**
   * @see {@link PutBucketPolicyCommand}
   */
  readonly putBucketPolicy: (
    args: PutBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketPolicyCommandOutput
  >;

  /**
   * @see {@link PutBucketReplicationCommand}
   */
  readonly putBucketReplication: (
    args: PutBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketReplicationCommandOutput
  >;

  /**
   * @see {@link PutBucketRequestPaymentCommand}
   */
  readonly putBucketRequestPayment: (
    args: PutBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketRequestPaymentCommandOutput
  >;

  /**
   * @see {@link PutBucketTaggingCommand}
   */
  readonly putBucketTagging: (
    args: PutBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketTaggingCommandOutput
  >;

  /**
   * @see {@link PutBucketVersioningCommand}
   */
  readonly putBucketVersioning: (
    args: PutBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketVersioningCommandOutput
  >;

  /**
   * @see {@link PutBucketWebsiteCommand}
   */
  readonly putBucketWebsite: (
    args: PutBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutBucketWebsiteCommandOutput
  >;

  /**
   * @see {@link PutObjectCommand}
   */
  readonly putObject: (
    args: PutObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, SdkError | S3ServiceError, PutObjectCommandOutput>;

  /**
   * @see {@link PutObjectAclCommand}
   */
  readonly putObjectAcl: (
    args: PutObjectAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutObjectAclCommandOutput
  >;

  /**
   * @see {@link PutObjectLegalHoldCommand}
   */
  readonly putObjectLegalHold: (
    args: PutObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutObjectLegalHoldCommandOutput
  >;

  /**
   * @see {@link PutObjectLockConfigurationCommand}
   */
  readonly putObjectLockConfiguration: (
    args: PutObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutObjectLockConfigurationCommandOutput
  >;

  /**
   * @see {@link PutObjectRetentionCommand}
   */
  readonly putObjectRetention: (
    args: PutObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutObjectRetentionCommandOutput
  >;

  /**
   * @see {@link PutObjectTaggingCommand}
   */
  readonly putObjectTagging: (
    args: PutObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutObjectTaggingCommandOutput
  >;

  /**
   * @see {@link PutPublicAccessBlockCommand}
   */
  readonly putPublicAccessBlock: (
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    PutPublicAccessBlockCommandOutput
  >;

  /**
   * @see {@link RestoreObjectCommand}
   */
  readonly restoreObject: (
    args: RestoreObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    RestoreObjectCommandOutput
  >;

  /**
   * @see {@link SelectObjectContentCommand}
   */
  readonly selectObjectContent: (
    args: SelectObjectContentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    SelectObjectContentCommandOutput
  >;

  /**
   * @see {@link UploadPartCommand}
   */
  readonly uploadPart: (
    args: UploadPartCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, SdkError | S3ServiceError, UploadPartCommandOutput>;

  /**
   * @see {@link UploadPartCopyCommand}
   */
  readonly uploadPartCopy: (
    args: UploadPartCopyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    UploadPartCopyCommandOutput
  >;

  /**
   * @see {@link WriteGetObjectResponseCommand}
   */
  readonly writeGetObjectResponse: (
    args: WriteGetObjectResponseCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    SdkError | S3ServiceError,
    WriteGetObjectResponseCommandOutput
  >;
}

export const BaseS3ServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(S3ClientInstanceTag);

  return RR.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof S3ServiceException) {
            return S3ServiceError({
              ...e,
              name: "S3ServiceError",
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({ ...e, name: "SdkError", stack: e.stack });
          }
          return e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as S3Service;
});

export const S3ServiceEffect = BaseS3ServiceEffect.pipe(
  Effect.provide(S3ClientInstanceLayer),
);

export const DefaultS3ServiceEffect = BaseS3ServiceEffect.pipe(
  Effect.provide(DefaultS3ClientInstanceLayer),
);
