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
import * as Data from "@effect/data/Data";
import * as RR from "@effect/data/ReadonlyRecord";
import * as Effect from "@effect/io/Effect";
import {
  ApiGatewayManagementApiClientInstanceLayer,
  ApiGatewayManagementApiClientInstanceTag,
  DefaultApiGatewayManagementApiClientInstanceLayer,
} from "./Context";
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

export interface ApiGatewayManagementApiService {
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

export const BaseApiGatewayManagementApiServiceEffect = Effect.gen(
  function* (_) {
    const client = yield* _(ApiGatewayManagementApiClientInstanceTag);

    return RR.toEntries(commands).reduce((acc, [command]) => {
      const CommandCtor = commands[command] as any;
      const methodImpl = (args: any, options: any) =>
        Effect.tryPromise({
          try: () => client.send(new CommandCtor(args), options ?? {}),
          catch: (e) => {
            if (e instanceof ApiGatewayManagementApiServiceException) {
              const ServiceException = Data.tagged<
                TaggedException<ApiGatewayManagementApiServiceException>
              >(e.name);

              return ServiceException({ ...e, stack: e.stack });
            }
            if (e instanceof Error) {
              return SdkError({ ...e, name: "SdkError", stack: e.stack });
            }
            return e;
          },
        });
      const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
        /Command$/,
        "",
      );
      return { ...acc, [methodName]: methodImpl };
    }, {}) as ApiGatewayManagementApiService;
  },
);

export const ApiGatewayManagementApiServiceEffect =
  BaseApiGatewayManagementApiServiceEffect.pipe(
    Effect.provideLayer(ApiGatewayManagementApiClientInstanceLayer),
  );

export const DefaultApiGatewayManagementApiServiceEffect =
  BaseApiGatewayManagementApiServiceEffect.pipe(
    Effect.provideLayer(DefaultApiGatewayManagementApiClientInstanceLayer),
  );
