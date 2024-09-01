/**
 * @since 1.0.0
 */
import {
  SQSServiceException,
  AddPermissionCommand,
  type AddPermissionCommandInput,
  type AddPermissionCommandOutput,
  CancelMessageMoveTaskCommand,
  type CancelMessageMoveTaskCommandInput,
  type CancelMessageMoveTaskCommandOutput,
  ChangeMessageVisibilityCommand,
  type ChangeMessageVisibilityCommandInput,
  type ChangeMessageVisibilityCommandOutput,
  ChangeMessageVisibilityBatchCommand,
  type ChangeMessageVisibilityBatchCommandInput,
  type ChangeMessageVisibilityBatchCommandOutput,
  CreateQueueCommand,
  type CreateQueueCommandInput,
  type CreateQueueCommandOutput,
  DeleteMessageCommand,
  type DeleteMessageCommandInput,
  type DeleteMessageCommandOutput,
  DeleteMessageBatchCommand,
  type DeleteMessageBatchCommandInput,
  type DeleteMessageBatchCommandOutput,
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
  SendMessageCommand,
  type SendMessageCommandInput,
  type SendMessageCommandOutput,
  SendMessageBatchCommand,
  type SendMessageBatchCommandInput,
  type SendMessageBatchCommandOutput,
  SetQueueAttributesCommand,
  type SetQueueAttributesCommandInput,
  type SetQueueAttributesCommandOutput,
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
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
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
  TooManyEntriesInBatchRequestError,
  UnsupportedOperationError,
  SdkError,
  TaggedException,
} from "./Errors";
import { SQSClientInstance, SQSClientInstanceLayer } from "./SQSClientInstance";
import { DefaultSQSClientConfigLayer } from "./SQSClientInstanceConfig";

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
  ListQueuesCommand,
  ListQueueTagsCommand,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
   * @see {@link ListQueuesCommand}
   */
  listQueues(
    args: ListQueuesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListQueuesCommandOutput,
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueueTagsCommand}
   */
  listQueueTags(
    args: ListQueueTagsCommandInput,
    options?: __HttpHandlerOptions,
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
   * @see {@link PurgeQueueCommand}
   */
  purgeQueue(
    args: PurgeQueueCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
 * @category models
 */
export class SQSService extends Effect.Tag("@effect-aws/client-sqs/SQSService")<
  SQSService,
  SQSService$
>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSQSService = Effect.gen(function* (_) {
  const client = yield* _(SQSClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (
            e instanceof SQSServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
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
 * @category layers
 */
export const BaseSQSServiceLayer = Layer.effect(SQSService, makeSQSService);

/**
 * @since 1.0.0
 * @category layers
 */
export const SQSServiceLayer = BaseSQSServiceLayer.pipe(
  Layer.provide(SQSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSQSServiceLayer = SQSServiceLayer.pipe(
  Layer.provide(DefaultSQSClientConfigLayer),
);
