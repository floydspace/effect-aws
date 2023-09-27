import {
  PostToConnectionCommand,
  PostToConnectionCommandInput,
  ApiGatewayManagementApiClient,
} from "@aws-sdk/client-apigatewaymanagementapi";
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Exit from "@effect/io/Exit";
import * as Layer from "@effect/io/Layer";
import { mockClient } from "aws-sdk-client-mock";
import {
  BaseApiGatewayManagementApiServiceEffect,
  DefaultApiGatewayManagementApiClientConfigLayer,
  DefaultApiGatewayManagementApiServiceEffect,
  ApiGatewayManagementApiClientConfigTag,
  ApiGatewayManagementApiClientInstanceTag,
  ApiGatewayManagementApiClientOptions,
  ApiGatewayManagementApiServiceEffect,
} from "../src";

import "aws-sdk-client-mock-jest";

const apigatewaymanagementapiMock = mockClient(ApiGatewayManagementApiClient);

describe("ApiGatewayManagementApiClientImpl", () => {
  it("default", async () => {
    apigatewaymanagementapiMock
      .reset()
      .on(PostToConnectionCommand)
      .resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = Effect.flatMap(
      DefaultApiGatewayManagementApiServiceEffect,
      (apigatewaymanagementapi) =>
        apigatewaymanagementapi.postToConnection(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.succeed({}));
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandTimes(
      PostToConnectionCommand,
      1,
    );
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandWith(
      PostToConnectionCommand,
      args,
    );
  });

  it("configurable", async () => {
    apigatewaymanagementapiMock
      .reset()
      .on(PostToConnectionCommand)
      .resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = Effect.flatMap(
      ApiGatewayManagementApiServiceEffect,
      (apigatewaymanagementapi) =>
        apigatewaymanagementapi.postToConnection(args),
    );

    const ApiGatewayManagementApiClientConfigLayer = Layer.succeed(
      ApiGatewayManagementApiClientConfigTag,
      new ApiGatewayManagementApiClientOptions({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(ApiGatewayManagementApiClientConfigLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandTimes(
      PostToConnectionCommand,
      1,
    );
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandWith(
      PostToConnectionCommand,
      args,
    );
  });

  it("base", async () => {
    apigatewaymanagementapiMock
      .reset()
      .on(PostToConnectionCommand)
      .resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = Effect.flatMap(
      BaseApiGatewayManagementApiServiceEffect,
      (apigatewaymanagementapi) =>
        apigatewaymanagementapi.postToConnection(args),
    );

    const ApiGatewayManagementApiClientInstanceLayer = Layer.succeed(
      ApiGatewayManagementApiClientInstanceTag,
      new ApiGatewayManagementApiClient({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(ApiGatewayManagementApiClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandTimes(
      PostToConnectionCommand,
      1,
    );
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandWith(
      PostToConnectionCommand,
      args,
    );
  });

  it("extended", async () => {
    apigatewaymanagementapiMock
      .reset()
      .on(PostToConnectionCommand)
      .resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = Effect.flatMap(
      BaseApiGatewayManagementApiServiceEffect,
      (apigatewaymanagementapi) =>
        apigatewaymanagementapi.postToConnection(args),
    );

    const ApiGatewayManagementApiClientInstanceLayer = Layer.provide(
      DefaultApiGatewayManagementApiClientConfigLayer,
      Layer.effect(
        ApiGatewayManagementApiClientInstanceTag,
        ApiGatewayManagementApiClientConfigTag.pipe(
          Effect.map(
            (config) =>
              new ApiGatewayManagementApiClient({
                ...config,
                region: "eu-central-1",
              }),
          ),
        ),
      ),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(ApiGatewayManagementApiClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandTimes(
      PostToConnectionCommand,
      1,
    );
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandWith(
      PostToConnectionCommand,
      args,
    );
  });

  it("fail", async () => {
    apigatewaymanagementapiMock
      .reset()
      .on(PostToConnectionCommand)
      .rejects(new Error("test"));

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = Effect.flatMap(
      DefaultApiGatewayManagementApiServiceEffect,
      (apigatewaymanagementapi) =>
        apigatewaymanagementapi.postToConnection(args, {
          requestTimeout: 1000,
        }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandTimes(
      PostToConnectionCommand,
      1,
    );
    expect(apigatewaymanagementapiMock).toHaveReceivedCommandWith(
      PostToConnectionCommand,
      args,
    );
  });
});
