import {
  ApiGatewayManagementApiClient,
  ApiGatewayManagementApiServiceException,
  PostToConnectionCommand,
  type PostToConnectionCommandInput,
} from "@aws-sdk/client-apigatewaymanagementapi";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-apigatewaymanagementapi/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ApiGatewayManagementApi, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(ApiGatewayManagementApiClient);

describe("ApiGatewayManagementApiClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApi.postToConnection(args);

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayManagementApi.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApi.postToConnection(args);

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayManagementApi.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApi.postToConnection(args);

    const result = await pipe(
      program,
      Effect.provide(
        ApiGatewayManagementApi.baseLayer(
          () => new ApiGatewayManagementApiClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PostToConnectionCommand).resolves({});

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApi.postToConnection(args);

    const result = await pipe(
      program,
      Effect.provide(
        ApiGatewayManagementApi.baseLayer(
          (config) =>
            new ApiGatewayManagementApiClient({
              ...config,
              region: "eu-central-1",
            }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PostToConnectionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PostToConnectionCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PostToConnectionCommand).rejects(new Error("test"));

    const args: PostToConnectionCommandInput = {
      ConnectionId: "test",
      Data: "test",
    };

    const program = ApiGatewayManagementApi.postToConnection(args);

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayManagementApi.defaultLayer),
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

    const program = ApiGatewayManagementApi.postToConnection(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayManagementApi.defaultLayer),
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
