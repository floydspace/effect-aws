import {
  type ListCustomModelsCommandInput,
  ListCustomModelsCommand,
  BedrockClient,
  BedrockServiceException,
} from "@aws-sdk/client-bedrock";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-bedrock/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Bedrock, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(BedrockClient);

describe("BedrockClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = Bedrock.listCustomModels(args);

    const result = await pipe(
      program,
      Effect.provide(Bedrock.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = Bedrock.listCustomModels(args);

    const result = await pipe(
      program,
      Effect.provide(Bedrock.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = Bedrock.listCustomModels(args);

    const result = await pipe(
      program,
      Effect.provide(
        Bedrock.baseLayer(() => new BedrockClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = Bedrock.listCustomModels(args);

    const result = await pipe(
      program,
      Effect.provide(
        Bedrock.baseLayer(
          (config) => new BedrockClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListCustomModelsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = Bedrock.listCustomModels(args);

    const result = await pipe(
      program,
      Effect.provide(Bedrock.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListCustomModelsCommand)
      .rejects(
        new BedrockServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = Bedrock.listCustomModels(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Bedrock.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });
});
