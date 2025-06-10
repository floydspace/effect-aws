/**
 * @since 1.0.0
 */
import { Config, Effect, Layer } from "effect";
import { DynamoDBDocumentService } from "./DynamoDBDocumentService.js";

type WithoutTableNameInArgs = {
  [K in keyof Omit<DynamoDBDocumentService.Type, "_">]: Parameters<
    DynamoDBDocumentService.Type[K]
  >[0] extends { TableName?: string } ? (
      args: Omit<Parameters<DynamoDBDocumentService.Type[K]>[0], "TableName">,
      options?: Parameters<DynamoDBDocumentService.Type[K]>[1],
    ) => Effect.Effect<
      Effect.Effect.Success<
        ReturnType<DynamoDBDocumentService.Type[K]>
      > extends { Item?: infer Item } ? Item | undefined
        : Effect.Effect.Success<
          ReturnType<DynamoDBDocumentService.Type[K]>
        > extends { Items?: infer Items } ? Items
        : Effect.Effect.Success<
          ReturnType<DynamoDBDocumentService.Type[K]>
        > extends { Attributes?: infer Attributes } ? Attributes | undefined
        : never,
      Effect.Effect.Error<ReturnType<DynamoDBDocumentService.Type[K]>>,
      Effect.Effect.Context<ReturnType<DynamoDBDocumentService.Type[K]>>
    >
    : never;
};

type WithoutTableNameInBatchRequest = {
  [K in keyof Omit<DynamoDBDocumentService.Type, "_">]: Parameters<
    DynamoDBDocumentService.Type[K]
  >[0] extends { RequestItems?: { [key: string]: infer RequestItems } } ? (
      args: RequestItems,
      options?: Parameters<DynamoDBDocumentService.Type[K]>[1],
    ) => ReturnType<DynamoDBDocumentService.Type[K]>
    : never;
};

type OmitNeverProps<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K];
};

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDynamoDBStore = Effect.fn(function*(props: DynamoDBStore.Config) {
  const ddb = yield* DynamoDBDocumentService;

  return {
    scan: (args) =>
      ddb
        .scan({ TableName: props.tableName, ...args })
        .pipe(Effect.map(({ Items }) => Items ?? [])),
    query: (args) =>
      ddb
        .query({ TableName: props.tableName, ...args })
        .pipe(Effect.map(({ Items }) => Items ?? [])),
    get: (args) =>
      ddb
        .get({ TableName: props.tableName, Key: args?.Key })
        .pipe(Effect.map(({ Item }) => Item)),
    put: (args) =>
      ddb
        .put({ TableName: props.tableName, ...args })
        .pipe(Effect.map(({ Attributes }) => Attributes)),
    batchWrite: (items) => ddb.batchWrite({ RequestItems: { [props.tableName]: items } }),
    batchPut: (items) =>
      ddb.batchWrite({
        RequestItems: {
          [props.tableName]: items.map((Item) => ({ PutRequest: { Item } })),
        },
      }),
    batchDelete: (keys) =>
      ddb.batchWrite({
        RequestItems: {
          [props.tableName]: keys.map((Key) => ({ DeleteRequest: { Key } })),
        },
      }),
    batchGet: (items) => ddb.batchGet({ RequestItems: { [props.tableName]: items } }),
    update: (args) =>
      ddb
        .update({ TableName: props.tableName, ...args })
        .pipe(Effect.map(({ Attributes }) => Attributes)),
    delete: (args) =>
      ddb
        .delete({ TableName: props.tableName, ...args })
        .pipe(Effect.map(({ Attributes }) => Attributes)),
  } satisfies DynamoDBStore.Type;
});

/**
 * @since 1.0.0
 * @category models
 */
export class DynamoDBStore extends Effect.Tag("@effect-aws/dynamodb/DynamoDBStore")<
  DynamoDBStore,
  DynamoDBStore.Type
>() {
  static layer = (props: DynamoDBStore.Config) => Layer.effect(this, makeDynamoDBStore(props));
  static layerConfig = (config: Config.Config.Wrap<DynamoDBStore.Config>) =>
    Layer.effect(this, Config.unwrap(config).pipe(Effect.flatMap(makeDynamoDBStore)));
}

/**
 * @since 1.0.0
 */
export declare namespace DynamoDBStore {
  /**
   * @since 1.0.0
   */
  export type Config = {
    readonly tableName: string;
  };

  /**
   * @since 1.0.0
   */
  export type Type =
    & OmitNeverProps<WithoutTableNameInArgs>
    & OmitNeverProps<WithoutTableNameInBatchRequest>
    & {
      batchPut: (
        items: Array<Record<string, any>>,
      ) => ReturnType<DynamoDBDocumentService.Type["batchWrite"]>;
      batchDelete: (
        keys: Array<Record<string, any>>,
      ) => ReturnType<DynamoDBDocumentService.Type["batchWrite"]>;
    };
}
