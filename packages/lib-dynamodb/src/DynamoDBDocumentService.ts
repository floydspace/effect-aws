/**
 * @since 1.0.0
 */
import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBServiceException } from "@aws-sdk/client-dynamodb";
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
  TaggedException,
  TransactionCanceledError,
  TransactionConflictError,
  TransactionInProgressError,
} from "@effect-aws/client-dynamodb";
import { makeDefaultDynamoDBClientInstanceConfig, SdkError } from "@effect-aws/client-dynamodb";
import { Data, Effect, Layer, Record } from "effect";
import {
  DynamoDBDocumentClientInstance,
  DynamoDBDocumentClientInstanceLayer,
} from "./DynamoDBDocumentClientInstance.js";
import {
  DefaultDynamoDBDocumentClientConfigLayer,
  DynamoDBDocumentClientInstanceConfig,
  makeDefaultDynamoDBDocumentClientInstanceConfig,
} from "./DynamoDBDocumentClientInstanceConfig.js";

/**
 * @since 1.3.1
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

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
    SdkError | InternalServerError | RequestLimitExceededError
  >;

  /**
   * @see {@link BatchGetCommand}
   */
  batchGet(
    args: BatchGetCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
 * @category constructors
 */
export const makeDynamoDBDocumentService = Effect.gen(function*(_) {
  const client = yield* _(DynamoDBDocumentClientInstance);

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
  }, {}) as DynamoDBDocumentService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class DynamoDBDocumentService extends Effect.Tag(
  "@effect-aws/lib-dynamodb/DynamoDBDocumentService",
)<DynamoDBDocumentService, DynamoDBDocumentService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeDynamoDBDocumentService,
  ).pipe(
    Layer.provide(DynamoDBDocumentClientInstanceLayer),
    Layer.provide(DefaultDynamoDBDocumentClientConfigLayer),
  );
  static readonly layer = (config: TranslateConfig) =>
    Layer.effect(this, makeDynamoDBDocumentService).pipe(
      Layer.provide(DynamoDBDocumentClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          DynamoDBDocumentClientInstanceConfig,
          makeDefaultDynamoDBDocumentClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: DynamoDBClientConfig) => DynamoDBDocumentClient,
  ) =>
    Layer.effect(this, makeDynamoDBDocumentService).pipe(
      Layer.provide(
        Layer.effect(
          DynamoDBDocumentClientInstance,
          Effect.map(makeDefaultDynamoDBClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias DynamoDBDocumentService
 */
export const DynamoDBDocument = DynamoDBDocumentService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use DynamoDBDocument.baseLayer instead
 */
export const BaseDynamoDBDocumentServiceLayer = Layer.effect(
  DynamoDBDocumentService,
  makeDynamoDBDocumentService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use DynamoDBDocument.layer instead
 */
export const DynamoDBDocumentServiceLayer = BaseDynamoDBDocumentServiceLayer.pipe(
  Layer.provide(DynamoDBDocumentClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use DynamoDBDocument.defaultLayer instead
 */
export const DefaultDynamoDBDocumentServiceLayer = DynamoDBDocumentService.defaultLayer;
