import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-dynamodb/dist-cjs/runtimeConfig";
import { DynamoDBDocumentClient, PutCommand, type PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { SdkError } from "@effect-aws/client-dynamodb";
import { DynamoDBDocument } from "@effect-aws/lib-dynamodb";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(DynamoDBDocumentClient);

describe("DynamoDBDocumentClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = DynamoDBDocument.put(args);

    const result = await pipe(
      program,
      Effect.provide(DynamoDBDocument.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = DynamoDBDocument.put(args);

    const result = await pipe(
      program,
      Effect.provide(
        DynamoDBDocument.layer({
          marshallOptions: { removeUndefinedValues: true },
        }),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = DynamoDBDocument.put(args);

    const result = await pipe(
      program,
      Effect.provide(
        DynamoDBDocument.baseLayer(() =>
          DynamoDBDocumentClient.from(
            new DynamoDBClient({ region: "eu-central-1" }),
            { marshallOptions: { removeUndefinedValues: true } },
          )
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = DynamoDBDocument.put(args);

    const result = await pipe(
      program,
      Effect.provide(
        DynamoDBDocument.baseLayer((config) =>
          DynamoDBDocumentClient.from(
            new DynamoDBClient({ ...config, region: "eu-central-1" }),
            { marshallOptions: { removeUndefinedValues: true } },
          )
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
    expect(clientMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PutCommand).rejects(new Error("test"));

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = DynamoDBDocument.put(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DynamoDBDocument.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutCommand, args);
  });
});
