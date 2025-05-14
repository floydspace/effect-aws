/**
 * @since 1.0.0
 */
import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import type {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  BatchGetCommandInput,
  BatchGetCommandOutput,
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBDocumentClient,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  GetCommandInput,
  GetCommandOutput,
  PutCommandInput,
  PutCommandOutput,
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommandInput,
  ScanCommandOutput,
  TransactGetCommandInput,
  TransactGetCommandOutput,
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
  TranslateConfig,
  UpdateCommandInput,
  UpdateCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import {
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
} from "@aws-sdk/lib-dynamodb";
import type {
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
  TransactionCanceledError,
  TransactionConflictError,
  TransactionInProgressError,
} from "@effect-aws/client-dynamodb";
import { DynamoDBServiceConfig } from "@effect-aws/client-dynamodb";
import { type HttpHandlerOptions, Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./DynamoDBDocumentClientInstance.js";
import * as DynamoDBDocumentServiceConfig from "./DynamoDBDocumentServiceConfig.js";

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

interface DynamoDBDocumentService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchExecuteStatementCommand}
   */
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchExecuteStatementCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | RequestLimitExceededError
  >;

  /**
   * @see {@link BatchGetCommand}
   */
  batchGet(
    args: BatchGetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchWriteCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteStatementCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExecuteTransactionCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    QueryCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ScanCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TransactGetCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TransactWriteCommandOutput,
    | Cause.TimeoutException
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
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCommandOutput,
    | Cause.TimeoutException
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
 * @category constructors
 */
export const makeDynamoDBDocumentService = Effect.gen(function*() {
  const client = yield* Instance.DynamoDBDocumentClientInstance;

  return yield* Service.fromClientAndCommands<DynamoDBDocumentService$>(client, commands, {
    resolveClientConfig: DynamoDBServiceConfig.toDynamoDBClientConfig,
  });
});

/**
 * @since 1.0.0
 * @category models
 */
export class DynamoDBDocumentService extends Effect.Tag(
  "@effect-aws/lib-dynamodb/DynamoDBDocumentService",
)<DynamoDBDocumentService, DynamoDBDocumentService$>() {
  static readonly defaultLayer = Layer.effect(this, makeDynamoDBDocumentService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: DynamoDBDocumentService.Config) =>
    Layer.effect(this, makeDynamoDBDocumentService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(DynamoDBDocumentServiceConfig.setDynamoDBDocumentServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: DynamoDBClientConfig) => DynamoDBDocumentClient,
  ) =>
    Layer.effect(this, makeDynamoDBDocumentService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.DynamoDBDocumentClientInstance,
          Effect.map(DynamoDBServiceConfig.toDynamoDBClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace DynamoDBDocumentService {
  /**
   * @since 1.0.0
   */
  export type Config = TranslateConfig;

  /**
   * @since 1.0.0
   */
  export type Type = DynamoDBDocumentService$;
}
