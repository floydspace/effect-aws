/**
 * @since 1.0.0
 */
import { DynamoDBServiceException } from "@aws-sdk/client-dynamodb";
import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  BatchGetCommand,
  BatchGetCommandInput,
  BatchGetCommandOutput,
  BatchWriteCommand,
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  DeleteCommand,
  DeleteCommandInput,
  DeleteCommandOutput,
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommand,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommand,
  ScanCommandInput,
  ScanCommandOutput,
  TransactGetCommand,
  TransactGetCommandInput,
  TransactGetCommandOutput,
  TransactWriteCommand,
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
  UpdateCommand,
  UpdateCommandInput,
  UpdateCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import {
  ConditionalCheckFailedError,
  DuplicateItemError,
  IdempotentParameterMismatchError,
  InternalServerError,
  InvalidEndpointError,
  ItemCollectionSizeLimitExceededError,
  ProvisionedThroughputExceededError,
  RequestLimitExceededError,
  ResourceNotFoundError,
  SdkError,
  TaggedException,
  TransactionCanceledError,
  TransactionConflictError,
  TransactionInProgressError,
} from "@effect-aws/client-dynamodb";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  DynamoDBDocumentClientInstance,
  DynamoDBDocumentClientInstanceLayer,
} from "./DynamoDBDocumentClientInstance";
import { DefaultDynamoDBDocumentClientConfigLayer } from "./DynamoDBDocumentClientInstanceConfig";

const commands = {
  BatchExecuteStatementCommand,
  BatchGetCommand,
  BatchWriteCommand,
  DeleteCommand,
  ExecuteStatementCommand,
  ExecuteTransactionCommand,
  GetCommand,
  PutCommand,
  QueryCommand,
  ScanCommand,
  TransactGetCommand,
  TransactWriteCommand,
  UpdateCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface DynamoDBDocumentService {
  readonly _: unique symbol;

  /**
   * @see {@link BatchExecuteStatementCommand}
   */
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchExecuteStatementCommandOutput,
    SdkError | InternalServerError | RequestLimitExceededError
  >;

  /**
   * @see {@link BatchGetCommand}
   */
  batchGet(
    args: BatchGetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link BatchWriteCommand}
   */
  batchWrite(
    args: BatchWriteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchWriteCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteCommand}
   */
  delete(
    args: DeleteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;

  /**
   * @see {@link ExecuteStatementCommand}
   */
  executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteStatementCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | DuplicateItemError
    | InternalServerError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;

  /**
   * @see {@link ExecuteTransactionCommand}
   */
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteTransactionCommandOutput,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
    | TransactionInProgressError
  >;

  /**
   * @see {@link GetCommand}
   */
  get(
    args: GetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutCommand}
   */
  put(
    args: PutCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    QueryCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ScanCommand}
   */
  scan(
    args: ScanCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ScanCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TransactGetCommand}
   */
  transactGet(
    args: TransactGetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TransactGetCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
  >;

  /**
   * @see {@link TransactWriteCommand}
   */
  transactWrite(
    args: TransactWriteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TransactWriteCommandOutput,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidEndpointError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionCanceledError
    | TransactionInProgressError
  >;

  /**
   * @see {@link UpdateCommand}
   */
  update(
    args: UpdateCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCommandOutput,
    | SdkError
    | ConditionalCheckFailedError
    | InternalServerError
    | InvalidEndpointError
    | ItemCollectionSizeLimitExceededError
    | ProvisionedThroughputExceededError
    | RequestLimitExceededError
    | ResourceNotFoundError
    | TransactionConflictError
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const DynamoDBDocumentService =
  Context.GenericTag<DynamoDBDocumentService>(
    "@effect-aws/lib-dynamodb/DynamoDBDocumentService",
  );

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDynamoDBDocumentService = Effect.gen(function* (_) {
  const client = yield* _(DynamoDBDocumentClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof DynamoDBServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<DynamoDBServiceException>
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
  }, {}) as DynamoDBDocumentService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseDynamoDBDocumentServiceLayer = Layer.effect(
  DynamoDBDocumentService,
  makeDynamoDBDocumentService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DynamoDBDocumentServiceLayer =
  BaseDynamoDBDocumentServiceLayer.pipe(
    Layer.provide(DynamoDBDocumentClientInstanceLayer),
  );

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBDocumentServiceLayer =
  DynamoDBDocumentServiceLayer.pipe(
    Layer.provide(DefaultDynamoDBDocumentClientConfigLayer),
  );
