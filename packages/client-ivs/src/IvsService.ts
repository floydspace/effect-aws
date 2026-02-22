/**
 * @since 1.0.0
 */
import {
  BatchGetChannelCommand,
  type BatchGetChannelCommandInput,
  type BatchGetChannelCommandOutput,
  BatchGetStreamKeyCommand,
  type BatchGetStreamKeyCommandInput,
  type BatchGetStreamKeyCommandOutput,
  BatchStartViewerSessionRevocationCommand,
  type BatchStartViewerSessionRevocationCommandInput,
  type BatchStartViewerSessionRevocationCommandOutput,
  CreateChannelCommand,
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreatePlaybackRestrictionPolicyCommand,
  type CreatePlaybackRestrictionPolicyCommandInput,
  type CreatePlaybackRestrictionPolicyCommandOutput,
  CreateRecordingConfigurationCommand,
  type CreateRecordingConfigurationCommandInput,
  type CreateRecordingConfigurationCommandOutput,
  CreateStreamKeyCommand,
  type CreateStreamKeyCommandInput,
  type CreateStreamKeyCommandOutput,
  DeleteChannelCommand,
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeletePlaybackKeyPairCommand,
  type DeletePlaybackKeyPairCommandInput,
  type DeletePlaybackKeyPairCommandOutput,
  DeletePlaybackRestrictionPolicyCommand,
  type DeletePlaybackRestrictionPolicyCommandInput,
  type DeletePlaybackRestrictionPolicyCommandOutput,
  DeleteRecordingConfigurationCommand,
  type DeleteRecordingConfigurationCommandInput,
  type DeleteRecordingConfigurationCommandOutput,
  DeleteStreamKeyCommand,
  type DeleteStreamKeyCommandInput,
  type DeleteStreamKeyCommandOutput,
  GetChannelCommand,
  type GetChannelCommandInput,
  type GetChannelCommandOutput,
  GetPlaybackKeyPairCommand,
  type GetPlaybackKeyPairCommandInput,
  type GetPlaybackKeyPairCommandOutput,
  GetPlaybackRestrictionPolicyCommand,
  type GetPlaybackRestrictionPolicyCommandInput,
  type GetPlaybackRestrictionPolicyCommandOutput,
  GetRecordingConfigurationCommand,
  type GetRecordingConfigurationCommandInput,
  type GetRecordingConfigurationCommandOutput,
  GetStreamCommand,
  type GetStreamCommandInput,
  type GetStreamCommandOutput,
  GetStreamKeyCommand,
  type GetStreamKeyCommandInput,
  type GetStreamKeyCommandOutput,
  GetStreamSessionCommand,
  type GetStreamSessionCommandInput,
  type GetStreamSessionCommandOutput,
  ImportPlaybackKeyPairCommand,
  type ImportPlaybackKeyPairCommandInput,
  type ImportPlaybackKeyPairCommandOutput,
  type IvsClient,
  type IvsClientConfig,
  ListChannelsCommand,
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListPlaybackKeyPairsCommand,
  type ListPlaybackKeyPairsCommandInput,
  type ListPlaybackKeyPairsCommandOutput,
  ListPlaybackRestrictionPoliciesCommand,
  type ListPlaybackRestrictionPoliciesCommandInput,
  type ListPlaybackRestrictionPoliciesCommandOutput,
  ListRecordingConfigurationsCommand,
  type ListRecordingConfigurationsCommandInput,
  type ListRecordingConfigurationsCommandOutput,
  ListStreamKeysCommand,
  type ListStreamKeysCommandInput,
  type ListStreamKeysCommandOutput,
  ListStreamsCommand,
  type ListStreamsCommandInput,
  type ListStreamsCommandOutput,
  ListStreamSessionsCommand,
  type ListStreamSessionsCommandInput,
  type ListStreamSessionsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutMetadataCommand,
  type PutMetadataCommandInput,
  type PutMetadataCommandOutput,
  StartViewerSessionRevocationCommand,
  type StartViewerSessionRevocationCommandInput,
  type StartViewerSessionRevocationCommandOutput,
  StopStreamCommand,
  type StopStreamCommandInput,
  type StopStreamCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateChannelCommand,
  type UpdateChannelCommandInput,
  type UpdateChannelCommandOutput,
  UpdatePlaybackRestrictionPolicyCommand,
  type UpdatePlaybackRestrictionPolicyCommandInput,
  type UpdatePlaybackRestrictionPolicyCommandOutput,
} from "@aws-sdk/client-ivs";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  AccessDeniedError,
  ChannelNotBroadcastingError,
  ConflictError,
  InternalServerError,
  PendingVerificationError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  StreamUnavailableError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./IvsClientInstance.js";
import * as IvsServiceConfig from "./IvsServiceConfig.js";

const commands = {
  BatchGetChannelCommand,
  BatchGetStreamKeyCommand,
  BatchStartViewerSessionRevocationCommand,
  CreateChannelCommand,
  CreatePlaybackRestrictionPolicyCommand,
  CreateRecordingConfigurationCommand,
  CreateStreamKeyCommand,
  DeleteChannelCommand,
  DeletePlaybackKeyPairCommand,
  DeletePlaybackRestrictionPolicyCommand,
  DeleteRecordingConfigurationCommand,
  DeleteStreamKeyCommand,
  GetChannelCommand,
  GetPlaybackKeyPairCommand,
  GetPlaybackRestrictionPolicyCommand,
  GetRecordingConfigurationCommand,
  GetStreamCommand,
  GetStreamKeyCommand,
  GetStreamSessionCommand,
  ImportPlaybackKeyPairCommand,
  ListChannelsCommand,
  ListPlaybackKeyPairsCommand,
  ListPlaybackRestrictionPoliciesCommand,
  ListRecordingConfigurationsCommand,
  ListStreamKeysCommand,
  ListStreamSessionsCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  PutMetadataCommand,
  StartViewerSessionRevocationCommand,
  StopStreamCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdatePlaybackRestrictionPolicyCommand,
};

interface IvsService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchGetChannelCommand}
   */
  batchGetChannel(
    args: BatchGetChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetChannelCommandOutput,
    Cause.TimeoutError | SdkError
  >;

  /**
   * @see {@link BatchGetStreamKeyCommand}
   */
  batchGetStreamKey(
    args: BatchGetStreamKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetStreamKeyCommandOutput,
    Cause.TimeoutError | SdkError
  >;

  /**
   * @see {@link BatchStartViewerSessionRevocationCommand}
   */
  batchStartViewerSessionRevocation(
    args: BatchStartViewerSessionRevocationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchStartViewerSessionRevocationCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | PendingVerificationError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateChannelCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | PendingVerificationError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ValidationError
  >;

  /**
   * @see {@link CreatePlaybackRestrictionPolicyCommand}
   */
  createPlaybackRestrictionPolicy(
    args: CreatePlaybackRestrictionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePlaybackRestrictionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | PendingVerificationError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateRecordingConfigurationCommand}
   */
  createRecordingConfiguration(
    args: CreateRecordingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRecordingConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | PendingVerificationError
    | ServiceQuotaExceededError
    | ValidationError
  >;

  /**
   * @see {@link CreateStreamKeyCommand}
   */
  createStreamKey(
    args: CreateStreamKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStreamKeyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | PendingVerificationError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ValidationError
  >;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteChannelCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | PendingVerificationError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeletePlaybackKeyPairCommand}
   */
  deletePlaybackKeyPair(
    args: DeletePlaybackKeyPairCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePlaybackKeyPairCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | PendingVerificationError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeletePlaybackRestrictionPolicyCommand}
   */
  deletePlaybackRestrictionPolicy(
    args: DeletePlaybackRestrictionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePlaybackRestrictionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | PendingVerificationError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteRecordingConfigurationCommand}
   */
  deleteRecordingConfiguration(
    args: DeleteRecordingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRecordingConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteStreamKeyCommand}
   */
  deleteStreamKey(
    args: DeleteStreamKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStreamKeyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | PendingVerificationError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(
    args: GetChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetChannelCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetPlaybackKeyPairCommand}
   */
  getPlaybackKeyPair(
    args: GetPlaybackKeyPairCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPlaybackKeyPairCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetPlaybackRestrictionPolicyCommand}
   */
  getPlaybackRestrictionPolicy(
    args: GetPlaybackRestrictionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPlaybackRestrictionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | PendingVerificationError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetRecordingConfigurationCommand}
   */
  getRecordingConfiguration(
    args: GetRecordingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRecordingConfigurationCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetStreamCommand}
   */
  getStream(
    args: GetStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ChannelNotBroadcastingError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetStreamKeyCommand}
   */
  getStreamKey(
    args: GetStreamKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStreamKeyCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link GetStreamSessionCommand}
   */
  getStreamSession(
    args: GetStreamSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStreamSessionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ImportPlaybackKeyPairCommand}
   */
  importPlaybackKeyPair(
    args: ImportPlaybackKeyPairCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportPlaybackKeyPairCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | PendingVerificationError
    | ServiceQuotaExceededError
    | ValidationError
  >;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(
    args: ListChannelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListChannelsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ConflictError | ValidationError
  >;

  /**
   * @see {@link ListPlaybackKeyPairsCommand}
   */
  listPlaybackKeyPairs(
    args: ListPlaybackKeyPairsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPlaybackKeyPairsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ValidationError
  >;

  /**
   * @see {@link ListPlaybackRestrictionPoliciesCommand}
   */
  listPlaybackRestrictionPolicies(
    args: ListPlaybackRestrictionPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPlaybackRestrictionPoliciesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ConflictError | PendingVerificationError | ValidationError
  >;

  /**
   * @see {@link ListRecordingConfigurationsCommand}
   */
  listRecordingConfigurations(
    args: ListRecordingConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRecordingConfigurationsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link ListStreamKeysCommand}
   */
  listStreamKeys(
    args: ListStreamKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamKeysCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListStreamSessionsCommand}
   */
  listStreamSessions(
    args: ListStreamSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamSessionsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(
    args: ListStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link PutMetadataCommand}
   */
  putMetadata(
    args: PutMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMetadataCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ChannelNotBroadcastingError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StartViewerSessionRevocationCommand}
   */
  startViewerSessionRevocation(
    args: StartViewerSessionRevocationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartViewerSessionRevocationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | PendingVerificationError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StopStreamCommand}
   */
  stopStream(
    args: StopStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ChannelNotBroadcastingError
    | ResourceNotFoundError
    | StreamUnavailableError
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
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateChannelCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | PendingVerificationError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePlaybackRestrictionPolicyCommand}
   */
  updatePlaybackRestrictionPolicy(
    args: UpdatePlaybackRestrictionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePlaybackRestrictionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | PendingVerificationError
    | ResourceNotFoundError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIvsService = Effect.gen(function*() {
  const client = yield* Instance.IvsClientInstance;

  return yield* Service.fromClientAndCommands<IvsService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: IvsServiceConfig.toIvsClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class IvsService extends ServiceMap.Service<
  IvsService,
  IvsService$
>()("@effect-aws/client-ivs/IvsService") {
  static readonly defaultLayer = Layer.effect(this, makeIvsService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: IvsService.Config) =>
    Layer.effect(this, makeIvsService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(IvsServiceConfig.setIvsServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IvsClientConfig) => IvsClient,
  ) =>
    Layer.effect(this, makeIvsService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.IvsClientInstance,
          Effect.map(IvsServiceConfig.toIvsClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace IvsService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<IvsClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = IvsService$;
}
