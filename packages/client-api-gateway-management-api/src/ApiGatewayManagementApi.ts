import {
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
import * as RR from "@effect/data/ReadonlyRecord";
import * as Effect from "@effect/io/Effect";
import {
  ApiGatewayManagementApiClientInstanceLayer,
  ApiGatewayManagementApiClientInstanceTag,
  DefaultApiGatewayManagementApiClientInstanceLayer,
} from "./Context";

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
  ): Effect.Effect<never, unknown, DeleteConnectionCommandOutput>;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetConnectionCommandOutput>;

  /**
   * @see {@link PostToConnectionCommand}
   */
  postToConnection(
    args: PostToConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PostToConnectionCommandOutput>;
}

export const BaseApiGatewayManagementApiServiceEffect = Effect.gen(
  function* (_) {
    const client = yield* _(ApiGatewayManagementApiClientInstanceTag);

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
