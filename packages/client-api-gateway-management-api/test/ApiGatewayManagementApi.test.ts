import {
  type PostToConnectionCommandInput,
  PostToConnectionCommand,
  ApiGatewayManagementApiClient,
  ApiGatewayManagementApiServiceException,
} from "@aws-sdk/client-apigatewaymanagementapi";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseApiGatewayManagementApiServiceLayer,
  DefaultApiGatewayManagementApiClientConfigLayer,
  DefaultApiGatewayManagementApiServiceLayer,
  ApiGatewayManagementApiClientInstance,
  ApiGatewayManagementApiClientInstanceConfig,
  ApiGatewayManagementApiService,
  ApiGatewayManagementApiServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(ApiGatewayManagementApiClient);

describe("ApiGatewayManagementApiClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApiService.postToConnection(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultApiGatewayManagementApiServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApiService.postToConnection(args);

    const ApiGatewayManagementApiClientConfigLayer = Layer.succeed(
      ApiGatewayManagementApiClientInstanceConfig,
      {
        region: "eu-central-1",
      },
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
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApiService.postToConnection(args);

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
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApiService.postToConnection(args);

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
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PostToConnectionCommand).rejects(new Error("test"));

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApiService.postToConnection(args);

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
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(PostToConnectionCommand)
      .rejects(
        new ApiGatewayManagementApiServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApiService.postToConnection(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
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
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });
});
