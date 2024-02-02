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
import { DefaultDynamoDBClientInstanceLayer } from "@effect-aws/client-dynamodb";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
import {
  DynamoDBDocumentClientInstance,
  DynamoDBDocumentClientInstanceLayer,
} from "./DynamoDBDocumentClientInstance";
import { DefaultDynamoDBDocumentClientConfigLayer } from "./DynamoDBDocumentClientInstanceConfig";
import { InternalServerError, SdkError, TaggedException } from "./Errors";

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
    never,
    SdkError | InternalServerError,
    BatchExecuteStatementCommandOutput
  >;

  /**
   * @see {@link BatchGetCommand}
   */
  batchGet(
    args: BatchGetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError,
    BatchGetCommandOutput
  >;

  /**
   * @see {@link BatchWriteCommand}
   */
  batchWrite(
    args: BatchWriteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError,
    BatchWriteCommandOutput
  >;

  /**
   * @see {@link DeleteCommand}
   */
  delete(
    args: DeleteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, SdkError | InternalServerError, DeleteCommandOutput>;

  /**
   * @see {@link ExecuteStatementCommand}
   */
  executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError,
    ExecuteStatementCommandOutput
  >;

  /**
   * @see {@link ExecuteTransactionCommand}
   */
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError,
    ExecuteTransactionCommandOutput
  >;

  /**
   * @see {@link GetCommand}
   */
  get(
    args: GetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, SdkError | InternalServerError, GetCommandOutput>;

  /**
   * @see {@link PutCommand}
   */
  put(
    args: PutCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, SdkError | InternalServerError, PutCommandOutput>;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, SdkError | InternalServerError, QueryCommandOutput>;

  /**
   * @see {@link ScanCommand}
   */
  scan(
    args: ScanCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, SdkError | InternalServerError, ScanCommandOutput>;

  /**
   * @see {@link TransactGetCommand}
   */
  transactGet(
    args: TransactGetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError,
    TransactGetCommandOutput
  >;

  /**
   * @see {@link TransactWriteCommand}
   */
  transactWrite(
    args: TransactWriteCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | InternalServerError,
    TransactWriteCommandOutput
  >;

  /**
   * @see {@link UpdateCommand}
   */
  update(
    args: UpdateCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, SdkError | InternalServerError, UpdateCommandOutput>;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const DynamoDBDocumentService = Context.Tag<DynamoDBDocumentService>(
  Symbol.for("@effect-aws/lib-dynamodb/DynamoDBDocumentService"),
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDynamoDBDocumentService = Effect.gen(function* (_) {
  const client = yield* _(DynamoDBDocumentClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
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
    Layer.provide(DefaultDynamoDBClientInstanceLayer),
  );
