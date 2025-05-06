import {
  APIGatewayClient,
  APIGatewayServiceException,
  GetApiKeyCommand,
  type GetApiKeyCommandInput,
} from "@aws-sdk/client-api-gateway";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-api-gateway/dist-cjs/runtimeConfig";
import { APIGateway, APIGatewayServiceConfig, SdkError } from "@effect-aws/client-api-gateway";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(APIGatewayClient);

describe("APIGatewayClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(GetApiKeyCommand).resolves({});

    const args: GetApiKeyCommandInput = { apiKey: "test" };

    const program = APIGateway.getApiKey(args);

    const result = await pipe(
      program,
      Effect.provide(APIGateway.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(GetApiKeyCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiKeyCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(GetApiKeyCommand).resolves({});

    const args: GetApiKeyCommandInput = { apiKey: "test" };

    const program = APIGateway.getApiKey(args);

    const result = await pipe(
      program,
      Effect.provide(APIGateway.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetApiKeyCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiKeyCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(GetApiKeyCommand).resolves({});

    const args: GetApiKeyCommandInput = { apiKey: "test" };

    const program = APIGateway.getApiKey(args);

    const result = await pipe(
      program,
      Effect.provide(
        APIGateway.baseLayer(() => new APIGatewayClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetApiKeyCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiKeyCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(GetApiKeyCommand).resolves({});

    const args: GetApiKeyCommandInput = { apiKey: "test" };

    const program = APIGateway.getApiKey(args);

    const result = await pipe(
      program,
      Effect.provide(
        APIGateway.baseLayer(
          (config) => new APIGatewayClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      APIGatewayServiceConfig.withAPIGatewayServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetApiKeyCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiKeyCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(GetApiKeyCommand).rejects(new Error("test"));

    const args: GetApiKeyCommandInput = { apiKey: "test" };

    const program = APIGateway.getApiKey(args);

    const result = await pipe(
      program,
      Effect.provide(APIGateway.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetApiKeyCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiKeyCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(GetApiKeyCommand)
      .rejects(
        new APIGatewayServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: GetApiKeyCommandInput = { apiKey: "test" };

    const program = APIGateway.getApiKey(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(APIGateway.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetApiKeyCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiKeyCommand, args);
  });
});
