import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
  PostToConnectionCommandInput,
} from "@aws-sdk/client-apigatewaymanagementapi";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  ApiGatewayManagementApiClientInstance,
  ApiGatewayManagementApiClientInstanceConfig,
  ApiGatewayManagementApiService,
  ApiGatewayManagementApiServiceLayer,
  BaseApiGatewayManagementApiServiceLayer,
  DefaultApiGatewayManagementApiClientConfigLayer,
  DefaultApiGatewayManagementApiServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const apiMock = mockClient(ApiGatewayManagementApiClient);
const { postToConnection } = Effect.serviceFunctions(
  ApiGatewayManagementApiService,
);

describe("ApiGatewayManagementApiClientImpl", () => {
  it("default", async () => {
    apiMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = postToConnection(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultApiGatewayManagementApiServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(apiMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(apiMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("configurable", async () => {
    apiMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = postToConnection(args);

    const ApiGatewayManagementApiClientConfigLayer = Layer.succeed(
      ApiGatewayManagementApiClientInstanceConfig,
      { region: "eu-central-1" },
    );
    const CustomApiGatewayManagementApiServiceLayer =
      ApiGatewayManagementApiServiceLayer.pipe(
        Layer.provide(ApiGatewayManagementApiClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomApiGatewayManagementApiServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(apiMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(apiMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("base", async () => {
    apiMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = postToConnection(args);

    const ApiGatewayManagementApiClientInstanceLayer = Layer.succeed(
      ApiGatewayManagementApiClientInstance,
      new ApiGatewayManagementApiClient({ region: "eu-central-1" }),
    );
    const CustomApiGatewayManagementApiServiceLayer =
      BaseApiGatewayManagementApiServiceLayer.pipe(
        Layer.provide(ApiGatewayManagementApiClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomApiGatewayManagementApiServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(apiMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(apiMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("extended", async () => {
    apiMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = postToConnection(args);

    const ApiGatewayManagementApiClientInstanceLayer = Layer.effect(
      ApiGatewayManagementApiClientInstance,
      Effect.map(
        ApiGatewayManagementApiClientInstanceConfig,
        (config) =>
          new ApiGatewayManagementApiClient({
            ...config,
            region: "eu-central-1",
          }),
      ),
    );
    const CustomApiGatewayManagementApiServiceLayer =
      BaseApiGatewayManagementApiServiceLayer.pipe(
        Layer.provide(ApiGatewayManagementApiClientInstanceLayer),
        Layer.provide(DefaultApiGatewayManagementApiClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomApiGatewayManagementApiServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(apiMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(apiMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("fail", async () => {
    apiMock.reset().on(PostToConnectionCommand).rejects(new Error("test"));

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = Effect.flatMap(ApiGatewayManagementApiService, (api) =>
      api.postToConnection(args, {
        requestTimeout: 1000,
      }),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultApiGatewayManagementApiServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(apiMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(apiMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });
});
