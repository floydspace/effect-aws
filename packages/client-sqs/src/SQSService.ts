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
import { Context, Effect, Layer, ReadonlyRecord, Data } from "effect";
import {
  SQSServiceError,
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
  TooManyEntriesInBatchRequestError,
  UnsupportedOperationError,
  SdkError,
  TaggedException,
} from "./Errors";
import {
  DefaultSQSClientInstanceLayer,
  SQSClientInstance,
  SQSClientInstanceLayer,
} from "./SQSClientInstance";
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

/**
 * @since 1.0.0
 * @category models
 */
export type SQSService = {
  readonly _: unique symbol;

  /**
   * @see {@link AddPermissionCommand}
   */
  readonly addPermission: (
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AddPermissionCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly cancelMessageMoveTask: (
    args: CancelMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelMessageMoveTaskCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ChangeMessageVisibilityCommand}
   */
  readonly changeMessageVisibility: (
    args: ChangeMessageVisibilityCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ChangeMessageVisibilityCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly changeMessageVisibilityBatch: (
    args: ChangeMessageVisibilityBatchCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ChangeMessageVisibilityBatchCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly createQueue: (
    args: CreateQueueCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateQueueCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly deleteMessage: (
    args: DeleteMessageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteMessageCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly deleteMessageBatch: (
    args: DeleteMessageBatchCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteMessageBatchCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly deleteQueue: (
    args: DeleteQueueCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteQueueCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetQueueAttributesCommand}
   */
  readonly getQueueAttributes: (
    args: GetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetQueueAttributesCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly getQueueUrl: (
    args: GetQueueUrlCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetQueueUrlCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListDeadLetterSourceQueuesCommand}
   */
  readonly listDeadLetterSourceQueues: (
    args: ListDeadLetterSourceQueuesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListDeadLetterSourceQueuesCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListMessageMoveTasksCommand}
   */
  readonly listMessageMoveTasks: (
    args: ListMessageMoveTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListMessageMoveTasksCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueuesCommand}
   */
  readonly listQueues: (
    args: ListQueuesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListQueuesCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueueTagsCommand}
   */
  readonly listQueueTags: (
    args: ListQueueTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListQueueTagsCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PurgeQueueCommand}
   */
  readonly purgeQueue: (
    args: PurgeQueueCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PurgeQueueCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly receiveMessage: (
    args: ReceiveMessageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReceiveMessageCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly removePermission: (
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RemovePermissionCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link SendMessageCommand}
   */
  readonly sendMessage: (
    args: SendMessageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SendMessageCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly sendMessageBatch: (
    args: SendMessageBatchCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SendMessageBatchCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly setQueueAttributes: (
    args: SetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SetQueueAttributesCommandOutput,
    | SdkError
    | SQSServiceError
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
  readonly startMessageMoveTask: (
    args: StartMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StartMessageMoveTaskCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link TagQueueCommand}
   */
  readonly tagQueue: (
    args: TagQueueCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TagQueueCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UntagQueueCommand}
   */
  readonly untagQueue: (
    args: UntagQueueCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UntagQueueCommandOutput,
    | SdkError
    | SQSServiceError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;
};

/**
 * @since 1.0.0
 * @category tags
 */
export const SQSService = Context.GenericTag<SQSService>(
  "@effect-aws/client-sqs/SQSService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSQSService = Effect.gen(function* (_) {
  const client = yield* _(SQSClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SQSServiceException) {
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
  }, {}) as SQSService;
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

// -------------------- Danger Zone --------------------

/**
 * @since 0.1.0
 * @deprecated
 */
export const BaseSQSServiceEffect = makeSQSService;

/**
 * @since 0.1.0
 * @deprecated
 */
export const SQSServiceEffect = BaseSQSServiceEffect.pipe(
  Effect.provide(SQSClientInstanceLayer),
);

/**
 * @since 0.1.0
 * @deprecated
 */
export const DefaultSQSServiceEffect = BaseSQSServiceEffect.pipe(
  Effect.provide(DefaultSQSClientInstanceLayer),
);
