/**
 * @since 1.0.0
 */
import {
  AddPermissionCommand,
  type AddPermissionCommandInput,
  type AddPermissionCommandOutput,
  CancelMessageMoveTaskCommand,
  type CancelMessageMoveTaskCommandInput,
  type CancelMessageMoveTaskCommandOutput,
  ChangeMessageVisibilityBatchCommand,
  type ChangeMessageVisibilityBatchCommandInput,
  type ChangeMessageVisibilityBatchCommandOutput,
  ChangeMessageVisibilityCommand,
  type ChangeMessageVisibilityCommandInput,
  type ChangeMessageVisibilityCommandOutput,
  CreateQueueCommand,
  type CreateQueueCommandInput,
  type CreateQueueCommandOutput,
  DeleteMessageBatchCommand,
  type DeleteMessageBatchCommandInput,
  type DeleteMessageBatchCommandOutput,
  DeleteMessageCommand,
  type DeleteMessageCommandInput,
  type DeleteMessageCommandOutput,
  DeleteQueueCommand,
  type DeleteQueueCommandInput,
  type DeleteQueueCommandOutput,
  GetQueueAttributesCommand,
  type GetQueueAttributesCommandInput,
  type GetQueueAttributesCommandOutput,
  GetQueueUrlCommand,
  type GetQueueUrlCommandInput,
  type GetQueueUrlCommandOutput,
  ListDeadLetterSourceQueuesCommand,
  type ListDeadLetterSourceQueuesCommandInput,
  type ListDeadLetterSourceQueuesCommandOutput,
  ListMessageMoveTasksCommand,
  type ListMessageMoveTasksCommandInput,
  type ListMessageMoveTasksCommandOutput,
  ListQueuesCommand,
  type ListQueuesCommandInput,
  type ListQueuesCommandOutput,
  ListQueueTagsCommand,
  type ListQueueTagsCommandInput,
  type ListQueueTagsCommandOutput,
  PurgeQueueCommand,
  type PurgeQueueCommandInput,
  type PurgeQueueCommandOutput,
  ReceiveMessageCommand,
  type ReceiveMessageCommandInput,
  type ReceiveMessageCommandOutput,
  RemovePermissionCommand,
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  SendMessageBatchCommand,
  type SendMessageBatchCommandInput,
  type SendMessageBatchCommandOutput,
  SendMessageCommand,
  type SendMessageCommandInput,
  type SendMessageCommandOutput,
  SetQueueAttributesCommand,
  type SetQueueAttributesCommandInput,
  type SetQueueAttributesCommandOutput,
  type SQSClient,
  type SQSClientConfig,
  SQSServiceException,
  StartMessageMoveTaskCommand,
  type StartMessageMoveTaskCommandInput,
  type StartMessageMoveTaskCommandOutput,
  TagQueueCommand,
  type TagQueueCommandInput,
  type TagQueueCommandOutput,
  UntagQueueCommand,
  type UntagQueueCommandInput,
  type UntagQueueCommandOutput,
} from "@aws-sdk/client-sqs";
import { Data, Effect, Layer, Record } from "effect";
import type {
  BatchEntryIdsNotDistinctError,
  BatchRequestTooLongError,
  EmptyBatchRequestError,
  InvalidAddressError,
  InvalidAttributeNameError,
  InvalidAttributeValueError,
  InvalidBatchEntryIdError,
  InvalidIdFormatError,
  InvalidMessageContentsError,
  InvalidSecurityError,
  KmsAccessDeniedError,
  KmsDisabledError,
  KmsInvalidKeyUsageError,
  KmsInvalidStateError,
  KmsNotFoundError,
  KmsOptInRequiredError,
  KmsThrottledError,
  MessageNotInflightError,
  OverLimitError,
  PurgeQueueInProgressError,
  QueueDeletedRecentlyError,
  QueueDoesNotExistError,
  QueueNameExistsError,
  ReceiptHandleIsInvalidError,
  RequestThrottledError,
  ResourceNotFoundError,
  TaggedException,
  TooManyEntriesInBatchRequestError,
  UnsupportedOperationError,
} from "./Errors.js";
import { AllServiceErrors, SdkError } from "./Errors.js";
import { SQSClientInstance, SQSClientInstanceLayer } from "./SQSClientInstance.js";
import {
  DefaultSQSClientConfigLayer,
  makeDefaultSQSClientInstanceConfig,
  SQSClientInstanceConfig,
} from "./SQSClientInstanceConfig.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  AddPermissionCommand,
  CancelMessageMoveTaskCommand,
  ChangeMessageVisibilityCommand,
  ChangeMessageVisibilityBatchCommand,
  CreateQueueCommand,
  DeleteMessageCommand,
  DeleteMessageBatchCommand,
  DeleteQueueCommand,
  GetQueueAttributesCommand,
  GetQueueUrlCommand,
  ListDeadLetterSourceQueuesCommand,
  ListMessageMoveTasksCommand,
  ListQueueTagsCommand,
  ListQueuesCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  RemovePermissionCommand,
  SendMessageCommand,
  SendMessageBatchCommand,
  SetQueueAttributesCommand,
  StartMessageMoveTaskCommand,
  TagQueueCommand,
  UntagQueueCommand,
};

interface SQSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddPermissionCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | OverLimitError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CancelMessageMoveTaskCommand}
   */
  cancelMessageMoveTask(
    args: CancelMessageMoveTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelMessageMoveTaskCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | ResourceNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ChangeMessageVisibilityCommand}
   */
  changeMessageVisibility(
    args: ChangeMessageVisibilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ChangeMessageVisibilityCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | MessageNotInflightError
    | QueueDoesNotExistError
    | ReceiptHandleIsInvalidError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ChangeMessageVisibilityBatchCommand}
   */
  changeMessageVisibilityBatch(
    args: ChangeMessageVisibilityBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ChangeMessageVisibilityBatchCommandOutput,
    | SdkError
    | BatchEntryIdsNotDistinctError
    | EmptyBatchRequestError
    | InvalidAddressError
    | InvalidBatchEntryIdError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | TooManyEntriesInBatchRequestError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(
    args: CreateQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateQueueCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidAttributeNameError
    | InvalidAttributeValueError
    | InvalidSecurityError
    | QueueDeletedRecentlyError
    | QueueNameExistsError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteMessageCommand}
   */
  deleteMessage(
    args: DeleteMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMessageCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidIdFormatError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | ReceiptHandleIsInvalidError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteMessageBatchCommand}
   */
  deleteMessageBatch(
    args: DeleteMessageBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMessageBatchCommandOutput,
    | SdkError
    | BatchEntryIdsNotDistinctError
    | EmptyBatchRequestError
    | InvalidAddressError
    | InvalidBatchEntryIdError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | TooManyEntriesInBatchRequestError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(
    args: DeleteQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteQueueCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetQueueAttributesCommand}
   */
  getQueueAttributes(
    args: GetQueueAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueueAttributesCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidAttributeNameError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetQueueUrlCommand}
   */
  getQueueUrl(
    args: GetQueueUrlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueueUrlCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListDeadLetterSourceQueuesCommand}
   */
  listDeadLetterSourceQueues(
    args: ListDeadLetterSourceQueuesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeadLetterSourceQueuesCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListMessageMoveTasksCommand}
   */
  listMessageMoveTasks(
    args: ListMessageMoveTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMessageMoveTasksCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | ResourceNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueueTagsCommand}
   */
  listQueueTags(
    args: ListQueueTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListQueueTagsCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(
    args: ListQueuesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListQueuesCommandOutput,
    SdkError | InvalidAddressError | InvalidSecurityError | RequestThrottledError | UnsupportedOperationError
  >;

  /**
   * @see {@link PurgeQueueCommand}
   */
  purgeQueue(
    args: PurgeQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurgeQueueCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | PurgeQueueInProgressError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ReceiveMessageCommand}
   */
  receiveMessage(
    args: ReceiveMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReceiveMessageCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | KmsAccessDeniedError
    | KmsDisabledError
    | KmsInvalidKeyUsageError
    | KmsInvalidStateError
    | KmsNotFoundError
    | KmsOptInRequiredError
    | KmsThrottledError
    | OverLimitError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemovePermissionCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(
    args: SendMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendMessageCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidMessageContentsError
    | InvalidSecurityError
    | KmsAccessDeniedError
    | KmsDisabledError
    | KmsInvalidKeyUsageError
    | KmsInvalidStateError
    | KmsNotFoundError
    | KmsOptInRequiredError
    | KmsThrottledError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link SendMessageBatchCommand}
   */
  sendMessageBatch(
    args: SendMessageBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendMessageBatchCommandOutput,
    | SdkError
    | BatchEntryIdsNotDistinctError
    | BatchRequestTooLongError
    | EmptyBatchRequestError
    | InvalidAddressError
    | InvalidBatchEntryIdError
    | InvalidSecurityError
    | KmsAccessDeniedError
    | KmsDisabledError
    | KmsInvalidKeyUsageError
    | KmsInvalidStateError
    | KmsNotFoundError
    | KmsOptInRequiredError
    | KmsThrottledError
    | QueueDoesNotExistError
    | RequestThrottledError
    | TooManyEntriesInBatchRequestError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link SetQueueAttributesCommand}
   */
  setQueueAttributes(
    args: SetQueueAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetQueueAttributesCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidAttributeNameError
    | InvalidAttributeValueError
    | InvalidSecurityError
    | OverLimitError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StartMessageMoveTaskCommand}
   */
  startMessageMoveTask(
    args: StartMessageMoveTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMessageMoveTaskCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | ResourceNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link TagQueueCommand}
   */
  tagQueue(
    args: TagQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagQueueCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UntagQueueCommand}
   */
  untagQueue(
    args: UntagQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagQueueCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSQSService = Effect.gen(function*(_) {
  const client = yield* _(SQSClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (e instanceof SQSServiceException && AllServiceErrors.includes(e.name)) {
            const ServiceException = Data.tagged<
              TaggedException<SQSServiceException>
            >(e.name);

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
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as SQSService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class SQSService extends Effect.Tag("@effect-aws/client-sqs/SQSService")<
  SQSService,
  SQSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSQSService).pipe(
    Layer.provide(SQSClientInstanceLayer),
    Layer.provide(DefaultSQSClientConfigLayer),
  );
  static readonly layer = (config: SQSClientConfig) =>
    Layer.effect(this, makeSQSService).pipe(
      Layer.provide(SQSClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          SQSClientInstanceConfig,
          makeDefaultSQSClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SQSClientConfig) => SQSClient,
  ) =>
    Layer.effect(this, makeSQSService).pipe(
      Layer.provide(
        Layer.effect(
          SQSClientInstance,
          Effect.map(makeDefaultSQSClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias SQSService
 */
export const SQS = SQSService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use SQS.baseLayer instead
 */
export const BaseSQSServiceLayer = Layer.effect(
  SQSService,
  makeSQSService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use SQS.layer instead
 */
export const SQSServiceLayer = BaseSQSServiceLayer.pipe(
  Layer.provide(SQSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use SQS.defaultLayer instead
 */
export const DefaultSQSServiceLayer = SQSService.defaultLayer;
