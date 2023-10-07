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
import * as Effect from "effect/Effect";
import * as RR from "effect/ReadonlyRecord";
import {
  DefaultSQSClientInstanceLayer,
  SQSClientInstanceLayer,
  SQSClientInstanceTag,
} from "./Context";

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

export interface SQSService {
  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, AddPermissionCommandOutput>;

  /**
   * @see {@link CancelMessageMoveTaskCommand}
   */
  cancelMessageMoveTask(
    args: CancelMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CancelMessageMoveTaskCommandOutput>;

  /**
   * @see {@link ChangeMessageVisibilityCommand}
   */
  changeMessageVisibility(
    args: ChangeMessageVisibilityCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ChangeMessageVisibilityCommandOutput>;

  /**
   * @see {@link ChangeMessageVisibilityBatchCommand}
   */
  changeMessageVisibilityBatch(
    args: ChangeMessageVisibilityBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ChangeMessageVisibilityBatchCommandOutput>;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(
    args: CreateQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateQueueCommandOutput>;

  /**
   * @see {@link DeleteMessageCommand}
   */
  deleteMessage(
    args: DeleteMessageCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteMessageCommandOutput>;

  /**
   * @see {@link DeleteMessageBatchCommand}
   */
  deleteMessageBatch(
    args: DeleteMessageBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteMessageBatchCommandOutput>;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(
    args: DeleteQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteQueueCommandOutput>;

  /**
   * @see {@link GetQueueAttributesCommand}
   */
  getQueueAttributes(
    args: GetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetQueueAttributesCommandOutput>;

  /**
   * @see {@link GetQueueUrlCommand}
   */
  getQueueUrl(
    args: GetQueueUrlCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetQueueUrlCommandOutput>;

  /**
   * @see {@link ListDeadLetterSourceQueuesCommand}
   */
  listDeadLetterSourceQueues(
    args: ListDeadLetterSourceQueuesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListDeadLetterSourceQueuesCommandOutput>;

  /**
   * @see {@link ListMessageMoveTasksCommand}
   */
  listMessageMoveTasks(
    args: ListMessageMoveTasksCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListMessageMoveTasksCommandOutput>;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(
    args: ListQueuesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListQueuesCommandOutput>;

  /**
   * @see {@link ListQueueTagsCommand}
   */
  listQueueTags(
    args: ListQueueTagsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListQueueTagsCommandOutput>;

  /**
   * @see {@link PurgeQueueCommand}
   */
  purgeQueue(
    args: PurgeQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PurgeQueueCommandOutput>;

  /**
   * @see {@link ReceiveMessageCommand}
   */
  receiveMessage(
    args: ReceiveMessageCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ReceiveMessageCommandOutput>;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RemovePermissionCommandOutput>;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(
    args: SendMessageCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SendMessageCommandOutput>;

  /**
   * @see {@link SendMessageBatchCommand}
   */
  sendMessageBatch(
    args: SendMessageBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SendMessageBatchCommandOutput>;

  /**
   * @see {@link SetQueueAttributesCommand}
   */
  setQueueAttributes(
    args: SetQueueAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SetQueueAttributesCommandOutput>;

  /**
   * @see {@link StartMessageMoveTaskCommand}
   */
  startMessageMoveTask(
    args: StartMessageMoveTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, StartMessageMoveTaskCommandOutput>;

  /**
   * @see {@link TagQueueCommand}
   */
  tagQueue(
    args: TagQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TagQueueCommandOutput>;

  /**
   * @see {@link UntagQueueCommand}
   */
  untagQueue(
    args: UntagQueueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UntagQueueCommandOutput>;
}

export const BaseSQSServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(SQSClientInstanceTag);

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
  }, {}) as SQSService;
});

export const SQSServiceEffect = BaseSQSServiceEffect.pipe(
  Effect.provide(SQSClientInstanceLayer),
);

export const DefaultSQSServiceEffect = BaseSQSServiceEffect.pipe(
  Effect.provide(DefaultSQSClientInstanceLayer),
);
