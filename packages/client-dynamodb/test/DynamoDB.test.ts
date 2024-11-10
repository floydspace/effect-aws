import {
  type PutItemCommandInput,
  PutItemCommand,
  DynamoDBClient,
  DynamoDBServiceException,
} from "@aws-sdk/client-dynamodb";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-dynamodb/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DynamoDB, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(DynamoDBClient);

describe("DynamoDBClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDB.putItem(args);

    const result = await pipe(
      program,
      Effect.provide(DynamoDB.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDB.putItem(args);

    const result = await pipe(
      program,
      Effect.provide(DynamoDB.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDB.putItem(args);

    const result = await pipe(
      program,
      Effect.provide(
        DynamoDB.baseLayer(
          () => new DynamoDBClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDB.putItem(args);

    const result = await pipe(
      program,
      Effect.provide(
        DynamoDB.baseLayer(
          (config) => new DynamoDBClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PutItemCommand).rejects(new Error("test"));

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDB.putItem(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DynamoDB.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(PutItemCommand)
      .rejects(
        new DynamoDBServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDB.putItem(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DynamoDB.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });
});
