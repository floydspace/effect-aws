/**
 * @since 1.0.0
 */
import {
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
  CancelMessageMoveTaskCommand,
  CancelMessageMoveTaskCommandInput,
  CancelMessageMoveTaskCommandOutput,
  ChangeMessageVisibilityBatchCommand,
  ChangeMessageVisibilityBatchCommandInput,
  ChangeMessageVisibilityBatchCommandOutput,
  ChangeMessageVisibilityCommand,
  ChangeMessageVisibilityCommandInput,
  ChangeMessageVisibilityCommandOutput,
  CreateQueueCommand,
  CreateQueueCommandInput,
  CreateQueueCommandOutput,
  DeleteMessageBatchCommand,
  DeleteMessageBatchCommandInput,
  DeleteMessageBatchCommandOutput,
  DeleteMessageCommand,
  DeleteMessageCommandInput,
  DeleteMessageCommandOutput,
  DeleteQueueCommand,
  DeleteQueueCommandInput,
  DeleteQueueCommandOutput,
  GetQueueAttributesCommand,
  GetQueueAttributesCommandInput,
  GetQueueAttributesCommandOutput,
  GetQueueUrlCommand,
  GetQueueUrlCommandInput,
  GetQueueUrlCommandOutput,
  ListDeadLetterSourceQueuesCommand,
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput,
  ListMessageMoveTasksCommand,
  ListMessageMoveTasksCommandInput,
  ListMessageMoveTasksCommandOutput,
  ListQueueTagsCommand,
  ListQueueTagsCommandInput,
  ListQueueTagsCommandOutput,
  ListQueuesCommand,
  ListQueuesCommandInput,
  ListQueuesCommandOutput,
  PurgeQueueCommand,
  PurgeQueueCommandInput,
  PurgeQueueCommandOutput,
  ReceiveMessageCommand,
  ReceiveMessageCommandInput,
  ReceiveMessageCommandOutput,
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
  SendMessageBatchCommand,
  SendMessageBatchCommandInput,
  SendMessageBatchCommandOutput,
  SendMessageCommand,
  SendMessageCommandInput,
  SendMessageCommandOutput,
  SetQueueAttributesCommand,
  SetQueueAttributesCommandInput,
  SetQueueAttributesCommandOutput,
  StartMessageMoveTaskCommand,
  StartMessageMoveTaskCommandInput,
  StartMessageMoveTaskCommandOutput,
  TagQueueCommand,
  TagQueueCommandInput,
  TagQueueCommandOutput,
  UntagQueueCommand,
  UntagQueueCommandInput,
  UntagQueueCommandOutput,
} from "@aws-sdk/client-sqs";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Cause, Context, Effect, Layer, ReadonlyRecord } from "effect";
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
export interface SQSService {
  readonly _: unique symbol;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AddPermissionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CancelMessageMoveTaskCommand}
   */
  cancelMessageMoveTask(
    args: CancelMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelMessageMoveTaskCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ChangeMessageVisibilityCommand}
   */
  changeMessageVisibility(
    args: ChangeMessageVisibilityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ChangeMessageVisibilityCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ChangeMessageVisibilityBatchCommand}
   */
  changeMessageVisibilityBatch(
    args: ChangeMessageVisibilityBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ChangeMessageVisibilityBatchCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(
    args: CreateQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateQueueCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteMessageCommand}
   */
  deleteMessage(
    args: DeleteMessageCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteMessageCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteMessageBatchCommand}
   */
  deleteMessageBatch(
    args: DeleteMessageBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteMessageBatchCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(
    args: DeleteQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteQueueCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetQueueAttributesCommand}
   */
  getQueueAttributes(
    args: GetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetQueueAttributesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetQueueUrlCommand}
   */
  getQueueUrl(
    args: GetQueueUrlCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetQueueUrlCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListDeadLetterSourceQueuesCommand}
   */
  listDeadLetterSourceQueues(
    args: ListDeadLetterSourceQueuesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDeadLetterSourceQueuesCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListMessageMoveTasksCommand}
   */
  listMessageMoveTasks(
    args: ListMessageMoveTasksCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListMessageMoveTasksCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(
    args: ListQueuesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListQueuesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListQueueTagsCommand}
   */
  listQueueTags(
    args: ListQueueTagsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListQueueTagsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PurgeQueueCommand}
   */
  purgeQueue(
    args: PurgeQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PurgeQueueCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ReceiveMessageCommand}
   */
  receiveMessage(
    args: ReceiveMessageCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReceiveMessageCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RemovePermissionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(
    args: SendMessageCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SendMessageCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link SendMessageBatchCommand}
   */
  sendMessageBatch(
    args: SendMessageBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SendMessageBatchCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link SetQueueAttributesCommand}
   */
  setQueueAttributes(
    args: SetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SetQueueAttributesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link StartMessageMoveTaskCommand}
   */
  startMessageMoveTask(
    args: StartMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<StartMessageMoveTaskCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link TagQueueCommand}
   */
  tagQueue(
    args: TagQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<TagQueueCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UntagQueueCommand}
   */
  untagQueue(
    args: UntagQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UntagQueueCommandOutput, Cause.UnknownException>;
}

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
      Effect.tryPromise(() =>
        client.send(new CommandCtor(args), options ?? {}),
      );
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
