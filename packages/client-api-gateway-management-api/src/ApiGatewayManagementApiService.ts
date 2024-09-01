/**
 * @since 1.0.0
 */
import {
  ApiGatewayManagementApiServiceException,
  DeleteConnectionCommand,
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  GetConnectionCommand,
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  PostToConnectionCommand,
  type PostToConnectionCommandInput,
  type PostToConnectionCommandOutput,
} from "@aws-sdk/client-apigatewaymanagementapi";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Data, Effect, Layer, Record } from "effect";
import {
  ApiGatewayManagementApiClientInstance,
  ApiGatewayManagementApiClientInstanceLayer,
} from "./ApiGatewayManagementApiClientInstance";
import { DefaultApiGatewayManagementApiClientConfigLayer } from "./ApiGatewayManagementApiClientInstanceConfig";
import {
  AllServiceErrors,
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

interface ApiGatewayManagementApiService$ {
  readonly _: unique symbol;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionCommandOutput,
    SdkError | ForbiddenError | GoneError | LimitExceededError
  >;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionCommandOutput,
    SdkError | ForbiddenError | GoneError | LimitExceededError
  >;

  /**
   * @see {@link PostToConnectionCommand}
   */
  postToConnection(
    args: PostToConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PostToConnectionCommandOutput,
    | SdkError
    | ForbiddenError
    | GoneError
    | LimitExceededError
    | PayloadTooLargeError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class ApiGatewayManagementApiService extends Effect.Tag(
  "@effect-aws/client-api-gateway-management-api/ApiGatewayManagementApiService",
)<ApiGatewayManagementApiService, ApiGatewayManagementApiService$>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeApiGatewayManagementApiService = Effect.gen(function* (_) {
  const client = yield* _(ApiGatewayManagementApiClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (
            e instanceof ApiGatewayManagementApiServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
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
  }, {}) as ApiGatewayManagementApiService$;
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
