import {
  type PutItemCommandInput,
  PutItemCommand,
  DynamoDBClient,
  DynamoDBServiceException,
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

const clientMock = mockClient(DynamoDBClient);

describe("DynamoDBClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDBService.putItem(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultDynamoDBServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDBService.putItem(args);

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
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDBService.putItem(args);

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
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PutItemCommand).resolves({});

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDBService.putItem(args);

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
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PutItemCommand).rejects(new Error("test"));

    const args: PutItemCommandInput = {
      TableName: "test",
      Item: { testAttr: { S: "test" } },
    };

    const program = DynamoDBService.putItem(args, { requestTimeout: 1000 });

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

    const program = DynamoDBService.putItem(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

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
    expect(clientMock).toHaveReceivedCommandTimes(PutItemCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutItemCommand, args);
  });
});
