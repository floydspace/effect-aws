/**
 * @since 1.0.0
 */
import {
  CreateDeliveryStreamCommand,
  type CreateDeliveryStreamCommandInput,
  type CreateDeliveryStreamCommandOutput,
  DeleteDeliveryStreamCommand,
  type DeleteDeliveryStreamCommandInput,
  type DeleteDeliveryStreamCommandOutput,
  DescribeDeliveryStreamCommand,
  type DescribeDeliveryStreamCommandInput,
  type DescribeDeliveryStreamCommandOutput,
  type FirehoseClient,
  type FirehoseClientConfig,
  ListDeliveryStreamsCommand,
  type ListDeliveryStreamsCommandInput,
  type ListDeliveryStreamsCommandOutput,
  ListTagsForDeliveryStreamCommand,
  type ListTagsForDeliveryStreamCommandInput,
  type ListTagsForDeliveryStreamCommandOutput,
  PutRecordBatchCommand,
  type PutRecordBatchCommandInput,
  type PutRecordBatchCommandOutput,
  PutRecordCommand,
  type PutRecordCommandInput,
  type PutRecordCommandOutput,
  StartDeliveryStreamEncryptionCommand,
  type StartDeliveryStreamEncryptionCommandInput,
  type StartDeliveryStreamEncryptionCommandOutput,
  StopDeliveryStreamEncryptionCommand,
  type StopDeliveryStreamEncryptionCommandInput,
  type StopDeliveryStreamEncryptionCommandOutput,
  TagDeliveryStreamCommand,
  type TagDeliveryStreamCommandInput,
  type TagDeliveryStreamCommandOutput,
  UntagDeliveryStreamCommand,
  type UntagDeliveryStreamCommandInput,
  type UntagDeliveryStreamCommandOutput,
  UpdateDestinationCommand,
  type UpdateDestinationCommandInput,
  type UpdateDestinationCommandOutput,
} from "@aws-sdk/client-firehose";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  ConcurrentModificationError,
  InvalidArgumentError,
  InvalidKMSResourceError,
  InvalidSourceError,
  LimitExceededError,
  ResourceInUseError,
  ResourceNotFoundError,
  SdkError,
  ServiceUnavailableError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./FirehoseClientInstance.js";
import * as FirehoseServiceConfig from "./FirehoseServiceConfig.js";

const commands = {
  CreateDeliveryStreamCommand,
  DeleteDeliveryStreamCommand,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  ListTagsForDeliveryStreamCommand,
  PutRecordCommand,
  PutRecordBatchCommand,
  StartDeliveryStreamEncryptionCommand,
  StopDeliveryStreamEncryptionCommand,
  TagDeliveryStreamCommand,
  UntagDeliveryStreamCommand,
  UpdateDestinationCommand,
};

interface FirehoseService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateDeliveryStreamCommand}
   */
  createDeliveryStream(
    args: CreateDeliveryStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeliveryStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | InvalidKMSResourceError
    | LimitExceededError
    | ResourceInUseError
  >;

  /**
   * @see {@link DeleteDeliveryStreamCommand}
   */
  deleteDeliveryStream(
    args: DeleteDeliveryStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeliveryStreamCommandOutput,
    Cause.TimeoutError | SdkError | ResourceInUseError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeDeliveryStreamCommand}
   */
  describeDeliveryStream(
    args: DescribeDeliveryStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeliveryStreamCommandOutput,
    Cause.TimeoutError | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListDeliveryStreamsCommand}
   */
  listDeliveryStreams(
    args: ListDeliveryStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeliveryStreamsCommandOutput,
    Cause.TimeoutError | SdkError
  >;

  /**
   * @see {@link ListTagsForDeliveryStreamCommand}
   */
  listTagsForDeliveryStream(
    args: ListTagsForDeliveryStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForDeliveryStreamCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | LimitExceededError | ResourceNotFoundError
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
    | InvalidArgumentError
    | InvalidKMSResourceError
    | InvalidSourceError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link PutRecordBatchCommand}
   */
  putRecordBatch(
    args: PutRecordBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRecordBatchCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | InvalidKMSResourceError
    | InvalidSourceError
    | ResourceNotFoundError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link StartDeliveryStreamEncryptionCommand}
   */
  startDeliveryStreamEncryption(
    args: StartDeliveryStreamEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDeliveryStreamEncryptionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | InvalidKMSResourceError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link StopDeliveryStreamEncryptionCommand}
   */
  stopDeliveryStreamEncryption(
    args: StopDeliveryStreamEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopDeliveryStreamEncryptionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TagDeliveryStreamCommand}
   */
  tagDeliveryStream(
    args: TagDeliveryStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagDeliveryStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UntagDeliveryStreamCommand}
   */
  untagDeliveryStream(
    args: UntagDeliveryStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagDeliveryStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | LimitExceededError
    | ResourceInUseError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateDestinationCommand}
   */
  updateDestination(
    args: UpdateDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDestinationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ConcurrentModificationError
    | InvalidArgumentError
    | ResourceInUseError
    | ResourceNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeFirehoseService = Effect.gen(function*() {
  const client = yield* Instance.FirehoseClientInstance;

  return yield* Service.fromClientAndCommands<FirehoseService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: FirehoseServiceConfig.toFirehoseClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class FirehoseService extends ServiceMap.Service<
  FirehoseService,
  FirehoseService$
>()("@effect-aws/client-firehose/FirehoseService") {
  static readonly defaultLayer = Layer.effect(this, makeFirehoseService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: FirehoseService.Config) =>
    Layer.effect(this, makeFirehoseService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(FirehoseServiceConfig.setFirehoseServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: FirehoseClientConfig) => FirehoseClient,
  ) =>
    Layer.effect(this, makeFirehoseService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.FirehoseClientInstance,
          Effect.map(FirehoseServiceConfig.toFirehoseClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace FirehoseService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<FirehoseClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = FirehoseService$;
}
