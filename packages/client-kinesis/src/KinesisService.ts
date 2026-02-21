/**
 * @since 1.0.0
 */
import {
  AddTagsToStreamCommand,
  type AddTagsToStreamCommandInput,
  type AddTagsToStreamCommandOutput,
  CreateStreamCommand,
  type CreateStreamCommandInput,
  type CreateStreamCommandOutput,
  DecreaseStreamRetentionPeriodCommand,
  type DecreaseStreamRetentionPeriodCommandInput,
  type DecreaseStreamRetentionPeriodCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteStreamCommand,
  type DeleteStreamCommandInput,
  type DeleteStreamCommandOutput,
  DeregisterStreamConsumerCommand,
  type DeregisterStreamConsumerCommandInput,
  type DeregisterStreamConsumerCommandOutput,
  DescribeAccountSettingsCommand,
  type DescribeAccountSettingsCommandInput,
  type DescribeAccountSettingsCommandOutput,
  DescribeLimitsCommand,
  type DescribeLimitsCommandInput,
  type DescribeLimitsCommandOutput,
  DescribeStreamCommand,
  type DescribeStreamCommandInput,
  type DescribeStreamCommandOutput,
  DescribeStreamConsumerCommand,
  type DescribeStreamConsumerCommandInput,
  type DescribeStreamConsumerCommandOutput,
  DescribeStreamSummaryCommand,
  type DescribeStreamSummaryCommandInput,
  type DescribeStreamSummaryCommandOutput,
  DisableEnhancedMonitoringCommand,
  type DisableEnhancedMonitoringCommandInput,
  type DisableEnhancedMonitoringCommandOutput,
  EnableEnhancedMonitoringCommand,
  type EnableEnhancedMonitoringCommandInput,
  type EnableEnhancedMonitoringCommandOutput,
  GetRecordsCommand,
  type GetRecordsCommandInput,
  type GetRecordsCommandOutput,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetShardIteratorCommand,
  type GetShardIteratorCommandInput,
  type GetShardIteratorCommandOutput,
  IncreaseStreamRetentionPeriodCommand,
  type IncreaseStreamRetentionPeriodCommandInput,
  type IncreaseStreamRetentionPeriodCommandOutput,
  type KinesisClient,
  type KinesisClientConfig,
  ListShardsCommand,
  type ListShardsCommandInput,
  type ListShardsCommandOutput,
  ListStreamConsumersCommand,
  type ListStreamConsumersCommandInput,
  type ListStreamConsumersCommandOutput,
  ListStreamsCommand,
  type ListStreamsCommandInput,
  type ListStreamsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForStreamCommand,
  type ListTagsForStreamCommandInput,
  type ListTagsForStreamCommandOutput,
  MergeShardsCommand,
  type MergeShardsCommandInput,
  type MergeShardsCommandOutput,
  PutRecordCommand,
  type PutRecordCommandInput,
  type PutRecordCommandOutput,
  PutRecordsCommand,
  type PutRecordsCommandInput,
  type PutRecordsCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  RegisterStreamConsumerCommand,
  type RegisterStreamConsumerCommandInput,
  type RegisterStreamConsumerCommandOutput,
  RemoveTagsFromStreamCommand,
  type RemoveTagsFromStreamCommandInput,
  type RemoveTagsFromStreamCommandOutput,
  SplitShardCommand,
  type SplitShardCommandInput,
  type SplitShardCommandOutput,
  StartStreamEncryptionCommand,
  type StartStreamEncryptionCommandInput,
  type StartStreamEncryptionCommandOutput,
  StopStreamEncryptionCommand,
  type StopStreamEncryptionCommandInput,
  type StopStreamEncryptionCommandOutput,
  SubscribeToShardCommand,
  type SubscribeToShardCommandInput,
  type SubscribeToShardCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAccountSettingsCommand,
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateMaxRecordSizeCommand,
  type UpdateMaxRecordSizeCommandInput,
  type UpdateMaxRecordSizeCommandOutput,
  UpdateShardCountCommand,
  type UpdateShardCountCommandInput,
  type UpdateShardCountCommandOutput,
  UpdateStreamModeCommand,
  type UpdateStreamModeCommandInput,
  type UpdateStreamModeCommandOutput,
  UpdateStreamWarmThroughputCommand,
  type UpdateStreamWarmThroughputCommandInput,
  type UpdateStreamWarmThroughputCommandOutput,
} from "@aws-sdk/client-kinesis";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  AccessDeniedError,
  ExpiredIteratorError,
  ExpiredNextTokenError,
  InternalFailureError,
  InvalidArgumentError,
  KMSAccessDeniedError,
  KMSDisabledError,
  KMSInvalidStateError,
  KMSNotFoundError,
  KMSOptInRequiredError,
  KMSThrottlingError,
  LimitExceededError,
  ProvisionedThroughputExceededError,
  ResourceInUseError,
  ResourceNotFoundError,
  SdkError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./KinesisClientInstance.js";
import * as KinesisServiceConfig from "./KinesisServiceConfig.js";

const commands = {
  AddTagsToStreamCommand,
  CreateStreamCommand,
  DecreaseStreamRetentionPeriodCommand,
  DeleteResourcePolicyCommand,
  DeleteStreamCommand,
  DeregisterStreamConsumerCommand,
  DescribeAccountSettingsCommand,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  DisableEnhancedMonitoringCommand,
  EnableEnhancedMonitoringCommand,
  GetRecordsCommand,
  GetResourcePolicyCommand,
  GetShardIteratorCommand,
  IncreaseStreamRetentionPeriodCommand,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTagsForStreamCommand,
  MergeShardsCommand,
  PutRecordCommand,
  PutRecordsCommand,
  PutResourcePolicyCommand,
  RegisterStreamConsumerCommand,
  RemoveTagsFromStreamCommand,
  SplitShardCommand,
  StartStreamEncryptionCommand,
  StopStreamEncryptionCommand,
  SubscribeToShardCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateMaxRecordSizeCommand,
  UpdateShardCountCommand,
  UpdateStreamModeCommand,
  UpdateStreamWarmThroughputCommand,
};

interface KinesisService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToStreamCommand}
   */
  addTagsToStream(
    args: AddTagsToStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsToStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateStreamCommand}
   */
  createStream(
    args: CreateStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStreamCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | LimitExceededError | ResourceInUseError | ValidationError
  >;

  /**
   * @see {@link DecreaseStreamRetentionPeriodCommand}
   */
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DecreaseStreamRetentionPeriodCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteStreamCommand}
   */
  deleteStream(
    args: DeleteStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeregisterStreamConsumerCommand}
   */
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterStreamConsumerCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | LimitExceededError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeAccountSettingsCommand}
   */
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountSettingsCommandOutput,
    Cause.TimeoutError | SdkError | LimitExceededError
  >;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLimitsCommandOutput,
    Cause.TimeoutError | SdkError | LimitExceededError
  >;

  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(
    args: DescribeStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeStreamConsumerCommand}
   */
  describeStreamConsumer(
    args: DescribeStreamConsumerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStreamConsumerCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | LimitExceededError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeStreamSummaryCommand}
   */
  describeStreamSummary(
    args: DescribeStreamSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStreamSummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DisableEnhancedMonitoringCommand}
   */
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableEnhancedMonitoringCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link EnableEnhancedMonitoringCommand}
   */
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableEnhancedMonitoringCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link GetRecordsCommand}
   */
  getRecords(
    args: GetRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRecordsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ExpiredIteratorError
    | InternalFailureError
    | InvalidArgumentError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link GetShardIteratorCommand}
   */
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetShardIteratorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalFailureError
    | InvalidArgumentError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link IncreaseStreamRetentionPeriodCommand}
   */
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    IncreaseStreamRetentionPeriodCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListShardsCommand}
   */
  listShards(
    args: ListShardsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListShardsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ExpiredNextTokenError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListStreamConsumersCommand}
   */
  listStreamConsumers(
    args: ListStreamConsumersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamConsumersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ExpiredNextTokenError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(
    args: ListStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamsCommandOutput,
    Cause.TimeoutError | SdkError | ExpiredNextTokenError | InvalidArgumentError | LimitExceededError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTagsForStreamCommand}
   */
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link MergeShardsCommand}
   */
  mergeShards(
    args: MergeShardsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    MergeShardsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link PutRecordCommand}
   */
  putRecord(
    args: PutRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRecordCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalFailureError
    | InvalidArgumentError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutRecordsCommand}
   */
  putRecords(
    args: PutRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRecordsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalFailureError
    | InvalidArgumentError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RegisterStreamConsumerCommand}
   */
  registerStreamConsumer(
    args: RegisterStreamConsumerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterStreamConsumerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RemoveTagsFromStreamCommand}
   */
  removeTagsFromStream(
    args: RemoveTagsFromStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsFromStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link SplitShardCommand}
   */
  splitShard(
    args: SplitShardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SplitShardCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link StartStreamEncryptionCommand}
   */
  startStreamEncryption(
    args: StartStreamEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartStreamEncryptionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link StopStreamEncryptionCommand}
   */
  stopStreamEncryption(
    args: StopStreamEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopStreamEncryptionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link SubscribeToShardCommand}
   */
  subscribeToShard(
    args: SubscribeToShardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubscribeToShardCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountSettingsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | LimitExceededError | ValidationError
  >;

  /**
   * @see {@link UpdateMaxRecordSizeCommand}
   */
  updateMaxRecordSize(
    args: UpdateMaxRecordSizeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMaxRecordSizeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateShardCountCommand}
   */
  updateShardCount(
    args: UpdateShardCountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateShardCountCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateStreamModeCommand}
   */
  updateStreamMode(
    args: UpdateStreamModeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStreamModeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateStreamWarmThroughputCommand}
   */
  updateStreamWarmThroughput(
    args: UpdateStreamWarmThroughputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStreamWarmThroughputCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKinesisService = Effect.gen(function*() {
  const client = yield* Instance.KinesisClientInstance;

  return yield* Service.fromClientAndCommands<KinesisService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: KinesisServiceConfig.toKinesisClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class KinesisService extends ServiceMap.Service<
  KinesisService,
  KinesisService$
>()("@effect-aws/client-kinesis/KinesisService") {
  static readonly defaultLayer = Layer.effect(this, makeKinesisService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: KinesisService.Config) =>
    Layer.effect(this, makeKinesisService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(KinesisServiceConfig.setKinesisServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: KinesisClientConfig) => KinesisClient,
  ) =>
    Layer.effect(this, makeKinesisService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.KinesisClientInstance,
          Effect.map(KinesisServiceConfig.toKinesisClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace KinesisService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<KinesisClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = KinesisService$;
}
