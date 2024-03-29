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
  BaseDynamoDBServiceLayer,
  DefaultDynamoDBClientConfigLayer,
  DefaultDynamoDBServiceLayer,
  DynamoDBClientInstance,
  DynamoDBClientInstanceConfig,
  DynamoDBService,
  DynamoDBServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const dynamodbMock = mockClient(DynamoDBClient);
const { putItem } = Effect.serviceFunctions(DynamoDBService);

describe("DynamoDBClientImpl", () => {
  it("default", async () => {
    dynamodbMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = putItem(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultDynamoDBServiceLayer),
      Effect.runPromiseExit,
    );

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

    const program = putItem(args);

    const DynamoDBClientConfigLayer = Layer.succeed(
      DynamoDBClientInstanceConfig,
      { region: "eu-central-1" },
    );
    const CustomDynamoDBServiceLayer = DynamoDBServiceLayer.pipe(
      Layer.provide(DynamoDBClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomDynamoDBServiceLayer),
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

    const program = putItem(args);

    const DynamoDBClientInstanceLayer = Layer.succeed(
      DynamoDBClientInstance,
      new DynamoDBClient({ region: "eu-central-1" }),
    );
    const CustomDynamoDBServiceLayer = BaseDynamoDBServiceLayer.pipe(
      Layer.provide(DynamoDBClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomDynamoDBServiceLayer),
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

    const program = putItem(args);

    const DynamoDBClientInstanceLayer = Layer.effect(
      DynamoDBClientInstance,
      Effect.map(
        DynamoDBClientInstanceConfig,
        (config) => new DynamoDBClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomDynamoDBServiceLayer = BaseDynamoDBServiceLayer.pipe(
      Layer.provide(DynamoDBClientInstanceLayer),
      Layer.provide(DefaultDynamoDBClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomDynamoDBServiceLayer),
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

    const program = putItem(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DefaultDynamoDBServiceLayer),
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
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });
});
