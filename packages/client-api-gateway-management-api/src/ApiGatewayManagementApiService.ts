import {
  ApiGatewayManagementApiServiceException,
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
  PostToConnectionCommand,
  PostToConnectionCommandInput,
  PostToConnectionCommandOutput,
} from "@aws-sdk/client-apigatewaymanagementapi";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
import {
  ApiGatewayManagementApiClientInstance,
  ApiGatewayManagementApiClientInstanceLayer,
  DefaultApiGatewayManagementApiClientInstanceLayer,
} from "./ApiGatewayManagementApiClientInstance";
import { DefaultApiGatewayManagementApiClientConfigLayer } from "./ApiGatewayManagementApiClientInstanceConfig";
import {
  ForbiddenError,
  GoneError,
  LimitExceededError,
  PayloadTooLargeError,
  SdkError,
  TaggedException,
} from "./Errors";

const commands = {
  DeleteConnectionCommand,
  GetConnectionCommand,
  PostToConnectionCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface ApiGatewayManagementApiService {
  readonly _: unique symbol;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | GoneError | ForbiddenError | LimitExceededError,
    DeleteConnectionCommandOutput
  >;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | GoneError | ForbiddenError | LimitExceededError,
    GetConnectionCommandOutput
  >;

  /**
   * @see {@link PostToConnectionCommand}
   */
  postToConnection(
    args: PostToConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | GoneError
    | ForbiddenError
    | LimitExceededError
    | PayloadTooLargeError,
    PostToConnectionCommandOutput
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const ApiGatewayManagementApiService =
  Context.Tag<ApiGatewayManagementApiService>(
    Symbol.for(
      "@effect-aws/client-api-gateway-management-api/ApiGatewayManagementApiService",
    ),
  );

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeApiGatewayManagementApiService = Effect.gen(function* (_) {
  const client = yield* _(ApiGatewayManagementApiClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof ApiGatewayManagementApiServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<ApiGatewayManagementApiServiceException>
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
  }, {}) as ApiGatewayManagementApiService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseApiGatewayManagementApiServiceLayer = Layer.effect(
  ApiGatewayManagementApiService,
  makeApiGatewayManagementApiService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ApiGatewayManagementApiServiceLayer =
  BaseApiGatewayManagementApiServiceLayer.pipe(
    Layer.provide(ApiGatewayManagementApiClientInstanceLayer),
  );

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultApiGatewayManagementApiServiceLayer =
  ApiGatewayManagementApiServiceLayer.pipe(
    Layer.provide(DefaultApiGatewayManagementApiClientConfigLayer),
  );

// -------------------- Danger Zone --------------------

/**
 * @deprecated
 */
export const BaseApiGatewayManagementApiServiceEffect =
  makeApiGatewayManagementApiService;

/**
 * @deprecated
 */
export const ApiGatewayManagementApiServiceEffect =
  BaseApiGatewayManagementApiServiceEffect.pipe(
    Effect.provide(ApiGatewayManagementApiClientInstanceLayer),
  );

/**
 * @deprecated
 */
export const DefaultApiGatewayManagementApiServiceEffect =
  BaseApiGatewayManagementApiServiceEffect.pipe(
    Effect.provide(DefaultApiGatewayManagementApiClientInstanceLayer),
  );
