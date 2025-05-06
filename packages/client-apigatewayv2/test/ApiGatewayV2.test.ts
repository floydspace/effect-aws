import {
  ApiGatewayV2Client,
  ApiGatewayV2ServiceException,
  GetApiCommand,
  type GetApiCommandInput,
} from "@aws-sdk/client-apigatewayv2";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-apigatewayv2/dist-cjs/runtimeConfig";
import { ApiGatewayV2, ApiGatewayV2ServiceConfig, SdkError } from "@effect-aws/client-apigatewayv2";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(ApiGatewayV2Client);

describe("ApiGatewayV2ClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(GetApiCommand).resolves({});

    const args: GetApiCommandInput = { ApiId: "test" };

    const program = ApiGatewayV2.getApi(args);

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayV2.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(GetApiCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(GetApiCommand).resolves({});

    const args: GetApiCommandInput = { ApiId: "test" };

    const program = ApiGatewayV2.getApi(args);

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayV2.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetApiCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(GetApiCommand).resolves({});

    const args: GetApiCommandInput = { ApiId: "test" };

    const program = ApiGatewayV2.getApi(args);

    const result = await pipe(
      program,
      Effect.provide(
        ApiGatewayV2.baseLayer(() => new ApiGatewayV2Client({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetApiCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(GetApiCommand).resolves({});

    const args: GetApiCommandInput = { ApiId: "test" };

    const program = ApiGatewayV2.getApi(args);

    const result = await pipe(
      program,
      Effect.provide(
        ApiGatewayV2.baseLayer(
          (config) => new ApiGatewayV2Client({ ...config, region: "eu-central-1" }),
        ),
      ),
      ApiGatewayV2ServiceConfig.withApiGatewayV2ServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetApiCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(GetApiCommand).rejects(new Error("test"));

    const args: GetApiCommandInput = { ApiId: "test" };

    const program = ApiGatewayV2.getApi(args);

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayV2.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetApiCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(GetApiCommand)
      .rejects(
        new ApiGatewayV2ServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: GetApiCommandInput = { ApiId: "test" };

    const program = ApiGatewayV2.getApi(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(ApiGatewayV2.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetApiCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetApiCommand, args);
  });
});
