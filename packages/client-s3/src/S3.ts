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
import * as RR from "@effect/data/ReadonlyRecord";
import * as Effect from "@effect/io/Effect";
import { DefaultS3ClientInstanceLayer, S3ClientInstanceTag } from "./Context";

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
  ) => Effect.Effect<never, unknown, AbortMultipartUploadCommandOutput>;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  readonly completeMultipartUpload: (
    args: CompleteMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, CompleteMultipartUploadCommandOutput>;

  /**
   * @see {@link CopyObjectCommand}
   */
  readonly copyObject: (
    args: CopyObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, CopyObjectCommandOutput>;

  /**
   * @see {@link CreateBucketCommand}
   */
  readonly createBucket: (
    args: CreateBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, CreateBucketCommandOutput>;

  /**
   * @see {@link CreateMultipartUploadCommand}
   */
  readonly createMultipartUpload: (
    args: CreateMultipartUploadCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, CreateMultipartUploadCommandOutput>;

  /**
   * @see {@link DeleteBucketCommand}
   */
  readonly deleteBucket: (
    args: DeleteBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketCommandOutput>;

  /**
   * @see {@link DeleteBucketAnalyticsConfigurationCommand}
   */
  readonly deleteBucketAnalyticsConfiguration: (
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
    DeleteBucketAnalyticsConfigurationCommandOutput
  >;

  /**
   * @see {@link DeleteBucketCorsCommand}
   */
  readonly deleteBucketCors: (
    args: DeleteBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketCorsCommandOutput>;

  /**
   * @see {@link DeleteBucketEncryptionCommand}
   */
  readonly deleteBucketEncryption: (
    args: DeleteBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketEncryptionCommandOutput>;

  /**
   * @see {@link DeleteBucketIntelligentTieringConfigurationCommand}
   */
  readonly deleteBucketIntelligentTieringConfiguration: (
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
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
    unknown,
    DeleteBucketInventoryConfigurationCommandOutput
  >;

  /**
   * @see {@link DeleteBucketLifecycleCommand}
   */
  readonly deleteBucketLifecycle: (
    args: DeleteBucketLifecycleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketLifecycleCommandOutput>;

  /**
   * @see {@link DeleteBucketMetricsConfigurationCommand}
   */
  readonly deleteBucketMetricsConfiguration: (
    args: DeleteBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
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
    unknown,
    DeleteBucketOwnershipControlsCommandOutput
  >;

  /**
   * @see {@link DeleteBucketPolicyCommand}
   */
  readonly deleteBucketPolicy: (
    args: DeleteBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketPolicyCommandOutput>;

  /**
   * @see {@link DeleteBucketReplicationCommand}
   */
  readonly deleteBucketReplication: (
    args: DeleteBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketReplicationCommandOutput>;

  /**
   * @see {@link DeleteBucketTaggingCommand}
   */
  readonly deleteBucketTagging: (
    args: DeleteBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketTaggingCommandOutput>;

  /**
   * @see {@link DeleteBucketWebsiteCommand}
   */
  readonly deleteBucketWebsite: (
    args: DeleteBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteBucketWebsiteCommandOutput>;

  /**
   * @see {@link DeleteObjectCommand}
   */
  readonly deleteObject: (
    args: DeleteObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteObjectCommandOutput>;

  /**
   * @see {@link DeleteObjectsCommand}
   */
  readonly deleteObjects: (
    args: DeleteObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteObjectsCommandOutput>;

  /**
   * @see {@link DeleteObjectTaggingCommand}
   */
  readonly deleteObjectTagging: (
    args: DeleteObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeleteObjectTaggingCommandOutput>;

  /**
   * @see {@link DeletePublicAccessBlockCommand}
   */
  readonly deletePublicAccessBlock: (
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, DeletePublicAccessBlockCommandOutput>;

  /**
   * @see {@link GetBucketAccelerateConfigurationCommand}
   */
  readonly getBucketAccelerateConfiguration: (
    args: GetBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
    GetBucketAccelerateConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketAclCommand}
   */
  readonly getBucketAcl: (
    args: GetBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketAclCommandOutput>;

  /**
   * @see {@link GetBucketAnalyticsConfigurationCommand}
   */
  readonly getBucketAnalyticsConfiguration: (
    args: GetBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
    GetBucketAnalyticsConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketCorsCommand}
   */
  readonly getBucketCors: (
    args: GetBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketCorsCommandOutput>;

  /**
   * @see {@link GetBucketEncryptionCommand}
   */
  readonly getBucketEncryption: (
    args: GetBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketEncryptionCommandOutput>;

  /**
   * @see {@link GetBucketIntelligentTieringConfigurationCommand}
   */
  readonly getBucketIntelligentTieringConfiguration: (
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
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
    unknown,
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
    unknown,
    GetBucketLifecycleConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketLocationCommand}
   */
  readonly getBucketLocation: (
    args: GetBucketLocationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketLocationCommandOutput>;

  /**
   * @see {@link GetBucketLoggingCommand}
   */
  readonly getBucketLogging: (
    args: GetBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketLoggingCommandOutput>;

  /**
   * @see {@link GetBucketMetricsConfigurationCommand}
   */
  readonly getBucketMetricsConfiguration: (
    args: GetBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
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
    unknown,
    GetBucketNotificationConfigurationCommandOutput
  >;

  /**
   * @see {@link GetBucketOwnershipControlsCommand}
   */
  readonly getBucketOwnershipControls: (
    args: GetBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketOwnershipControlsCommandOutput>;

  /**
   * @see {@link GetBucketPolicyCommand}
   */
  readonly getBucketPolicy: (
    args: GetBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketPolicyCommandOutput>;

  /**
   * @see {@link GetBucketPolicyStatusCommand}
   */
  readonly getBucketPolicyStatus: (
    args: GetBucketPolicyStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketPolicyStatusCommandOutput>;

  /**
   * @see {@link GetBucketReplicationCommand}
   */
  readonly getBucketReplication: (
    args: GetBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketReplicationCommandOutput>;

  /**
   * @see {@link GetBucketRequestPaymentCommand}
   */
  readonly getBucketRequestPayment: (
    args: GetBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketRequestPaymentCommandOutput>;

  /**
   * @see {@link GetBucketTaggingCommand}
   */
  readonly getBucketTagging: (
    args: GetBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketTaggingCommandOutput>;

  /**
   * @see {@link GetBucketVersioningCommand}
   */
  readonly getBucketVersioning: (
    args: GetBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketVersioningCommandOutput>;

  /**
   * @see {@link GetBucketWebsiteCommand}
   */
  readonly getBucketWebsite: (
    args: GetBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetBucketWebsiteCommandOutput>;

  /**
   * @see {@link GetObjectCommand}
   */
  readonly getObject: (
    args: GetObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectCommandOutput>;

  /**
   * @see {@link GetObjectAclCommand}
   */
  readonly getObjectAcl: (
    args: GetObjectAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectAclCommandOutput>;

  /**
   * @see {@link GetObjectAttributesCommand}
   */
  readonly getObjectAttributes: (
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectAttributesCommandOutput>;

  /**
   * @see {@link GetObjectLegalHoldCommand}
   */
  readonly getObjectLegalHold: (
    args: GetObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectLegalHoldCommandOutput>;

  /**
   * @see {@link GetObjectLockConfigurationCommand}
   */
  readonly getObjectLockConfiguration: (
    args: GetObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectLockConfigurationCommandOutput>;

  /**
   * @see {@link GetObjectRetentionCommand}
   */
  readonly getObjectRetention: (
    args: GetObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectRetentionCommandOutput>;

  /**
   * @see {@link GetObjectTaggingCommand}
   */
  readonly getObjectTagging: (
    args: GetObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectTaggingCommandOutput>;

  /**
   * @see {@link GetObjectTorrentCommand}
   */
  readonly getObjectTorrent: (
    args: GetObjectTorrentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetObjectTorrentCommandOutput>;

  /**
   * @see {@link GetPublicAccessBlockCommand}
   */
  readonly getPublicAccessBlock: (
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, GetPublicAccessBlockCommandOutput>;

  /**
   * @see {@link HeadBucketCommand}
   */
  readonly headBucket: (
    args: HeadBucketCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, HeadBucketCommandOutput>;

  /**
   * @see {@link HeadObjectCommand}
   */
  readonly headObject: (
    args: HeadObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, HeadObjectCommandOutput>;

  /**
   * @see {@link ListBucketAnalyticsConfigurationsCommand}
   */
  readonly listBucketAnalyticsConfigurations: (
    args: ListBucketAnalyticsConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
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
    unknown,
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
    unknown,
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
    unknown,
    ListBucketMetricsConfigurationsCommandOutput
  >;

  /**
   * @see {@link ListBucketsCommand}
   */
  readonly listBuckets: (
    args: ListBucketsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, ListBucketsCommandOutput>;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  readonly listMultipartUploads: (
    args: ListMultipartUploadsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, ListMultipartUploadsCommandOutput>;

  /**
   * @see {@link ListObjectsCommand}
   */
  readonly listObjects: (
    args: ListObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, ListObjectsCommandOutput>;

  /**
   * @see {@link ListObjectsV2Command}
   */
  readonly listObjectsV2: (
    args: ListObjectsV2CommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, ListObjectsV2CommandOutput>;

  /**
   * @see {@link ListObjectVersionsCommand}
   */
  readonly listObjectVersions: (
    args: ListObjectVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, ListObjectVersionsCommandOutput>;

  /**
   * @see {@link ListPartsCommand}
   */
  readonly listParts: (
    args: ListPartsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, ListPartsCommandOutput>;

  /**
   * @see {@link PutBucketAccelerateConfigurationCommand}
   */
  readonly putBucketAccelerateConfiguration: (
    args: PutBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
    PutBucketAccelerateConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketAclCommand}
   */
  readonly putBucketAcl: (
    args: PutBucketAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketAclCommandOutput>;

  /**
   * @see {@link PutBucketAnalyticsConfigurationCommand}
   */
  readonly putBucketAnalyticsConfiguration: (
    args: PutBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
    PutBucketAnalyticsConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketCorsCommand}
   */
  readonly putBucketCors: (
    args: PutBucketCorsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketCorsCommandOutput>;

  /**
   * @see {@link PutBucketEncryptionCommand}
   */
  readonly putBucketEncryption: (
    args: PutBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketEncryptionCommandOutput>;

  /**
   * @see {@link PutBucketIntelligentTieringConfigurationCommand}
   */
  readonly putBucketIntelligentTieringConfiguration: (
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
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
    unknown,
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
    unknown,
    PutBucketLifecycleConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketLoggingCommand}
   */
  readonly putBucketLogging: (
    args: PutBucketLoggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketLoggingCommandOutput>;

  /**
   * @see {@link PutBucketMetricsConfigurationCommand}
   */
  readonly putBucketMetricsConfiguration: (
    args: PutBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    never,
    unknown,
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
    unknown,
    PutBucketNotificationConfigurationCommandOutput
  >;

  /**
   * @see {@link PutBucketOwnershipControlsCommand}
   */
  readonly putBucketOwnershipControls: (
    args: PutBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketOwnershipControlsCommandOutput>;

  /**
   * @see {@link PutBucketPolicyCommand}
   */
  readonly putBucketPolicy: (
    args: PutBucketPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketPolicyCommandOutput>;

  /**
   * @see {@link PutBucketReplicationCommand}
   */
  readonly putBucketReplication: (
    args: PutBucketReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketReplicationCommandOutput>;

  /**
   * @see {@link PutBucketRequestPaymentCommand}
   */
  readonly putBucketRequestPayment: (
    args: PutBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketRequestPaymentCommandOutput>;

  /**
   * @see {@link PutBucketTaggingCommand}
   */
  readonly putBucketTagging: (
    args: PutBucketTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketTaggingCommandOutput>;

  /**
   * @see {@link PutBucketVersioningCommand}
   */
  readonly putBucketVersioning: (
    args: PutBucketVersioningCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketVersioningCommandOutput>;

  /**
   * @see {@link PutBucketWebsiteCommand}
   */
  readonly putBucketWebsite: (
    args: PutBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutBucketWebsiteCommandOutput>;

  /**
   * @see {@link PutObjectCommand}
   */
  readonly putObject: (
    args: PutObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutObjectCommandOutput>;

  /**
   * @see {@link PutObjectAclCommand}
   */
  readonly putObjectAcl: (
    args: PutObjectAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutObjectAclCommandOutput>;

  /**
   * @see {@link PutObjectLegalHoldCommand}
   */
  readonly putObjectLegalHold: (
    args: PutObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutObjectLegalHoldCommandOutput>;

  /**
   * @see {@link PutObjectLockConfigurationCommand}
   */
  readonly putObjectLockConfiguration: (
    args: PutObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutObjectLockConfigurationCommandOutput>;

  /**
   * @see {@link PutObjectRetentionCommand}
   */
  readonly putObjectRetention: (
    args: PutObjectRetentionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutObjectRetentionCommandOutput>;

  /**
   * @see {@link PutObjectTaggingCommand}
   */
  readonly putObjectTagging: (
    args: PutObjectTaggingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutObjectTaggingCommandOutput>;

  /**
   * @see {@link PutPublicAccessBlockCommand}
   */
  readonly putPublicAccessBlock: (
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, PutPublicAccessBlockCommandOutput>;

  /**
   * @see {@link RestoreObjectCommand}
   */
  readonly restoreObject: (
    args: RestoreObjectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, RestoreObjectCommandOutput>;

  /**
   * @see {@link SelectObjectContentCommand}
   */
  readonly selectObjectContent: (
    args: SelectObjectContentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, SelectObjectContentCommandOutput>;

  /**
   * @see {@link UploadPartCommand}
   */
  readonly uploadPart: (
    args: UploadPartCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, UploadPartCommandOutput>;

  /**
   * @see {@link UploadPartCopyCommand}
   */
  readonly uploadPartCopy: (
    args: UploadPartCopyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, UploadPartCopyCommandOutput>;

  /**
   * @see {@link WriteGetObjectResponseCommand}
   */
  readonly writeGetObjectResponse: (
    args: WriteGetObjectResponseCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<never, unknown, WriteGetObjectResponseCommandOutput>;
}

export const S3ServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(S3ClientInstanceTag);

  return RR.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise(() =>
        client.send(new CommandCtor(args), options ?? {}),
      );
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as S3Service;
});

export const DefaultS3ServiceEffect = S3ServiceEffect.pipe(
  Effect.provideLayer(DefaultS3ClientInstanceLayer),
);
