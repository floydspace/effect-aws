import {
  PutItemCommand,
  DynamoDBClient,
  PutItemCommandInput,
} from "@aws-sdk/client-dynamodb";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseDynamoDBServiceEffect,
  DefaultDynamoDBClientConfigLayer,
  DefaultDynamoDBServiceEffect,
  DynamoDBClientConfigTag,
  DynamoDBClientInstanceTag,
  DynamoDBClientOptions,
  DynamoDBServiceEffect,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const dynamodbMock = mockClient(DynamoDBClient);

describe("DynamoDBClientImpl", () => {
  it("default", async () => {
    dynamodbMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = Effect.flatMap(DefaultDynamoDBServiceEffect, (dynamodb) =>
      dynamodb.putItem(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("configurable", async () => {
    dynamodbMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = Effect.flatMap(DynamoDBServiceEffect, (dynamodb) =>
      dynamodb.putItem(args),
    );

    const DynamoDBClientConfigLayer = Layer.succeed(
      DynamoDBClientConfigTag,
      new DynamoDBClientOptions({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(DynamoDBClientConfigLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("base", async () => {
    dynamodbMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = Effect.flatMap(BaseDynamoDBServiceEffect, (dynamodb) =>
      dynamodb.putItem(args),
    );

    const DynamoDBClientInstanceLayer = Layer.succeed(
      DynamoDBClientInstanceTag,
      new DynamoDBClient({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(DynamoDBClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("extended", async () => {
    dynamodbMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = Effect.flatMap(BaseDynamoDBServiceEffect, (dynamodb) =>
      dynamodb.putItem(args),
    );

    const DynamoDBClientInstanceLayer = Layer.provide(
      DefaultDynamoDBClientConfigLayer,
      Layer.effect(
        DynamoDBClientInstanceTag,
        DynamoDBClientConfigTag.pipe(
          Effect.map(
            (config) =>
              new DynamoDBClient({ ...config, region: "eu-central-1" }),
          ),
        ),
      ),
    );

    const result = await pipe(
      program,
      Effect.provide(DynamoDBClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("fail", async () => {
    dynamodbMock.reset().on(PutItemCommand).rejects(new Error("test"));

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = Effect.flatMap(DefaultDynamoDBServiceEffect, (dynamodb) =>
      dynamodb.putItem(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          stack: expect.any(String),
        }),
      ),
    );
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });
});
