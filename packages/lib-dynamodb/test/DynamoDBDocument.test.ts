import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  PutCommandInput,
} from "@aws-sdk/lib-dynamodb";
import {
  DefaultDynamoDBClientConfigLayer,
  DynamoDBClientInstanceConfig,
  SdkError,
} from "@effect-aws/client-dynamodb";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseDynamoDBDocumentServiceLayer,
  DefaultDynamoDBDocumentServiceLayer,
  DynamoDBDocumentClientInstance,
  DynamoDBDocumentClientInstanceConfig,
  DynamoDBDocumentService,
  DynamoDBDocumentServiceLayer,
} from "../src";

const dynamodbMock = mockClient(DynamoDBDocumentClient);
const { put } = Effect.serviceFunctions(DynamoDBDocumentService);

describe("DynamoDBDocumentClientImpl", () => {
  it("default", async () => {
    dynamodbMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = put(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultDynamoDBDocumentServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("configurable", async () => {
    dynamodbMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = put(args);

    const DynamoDBDocumentClientConfigLayer = Layer.succeed(
      DynamoDBDocumentClientInstanceConfig,
      { marshallOptions: { removeUndefinedValues: true } },
    );
    const CustomDynamoDBDocumentServiceLayer =
      DynamoDBDocumentServiceLayer.pipe(
        Layer.provide(DynamoDBDocumentClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomDynamoDBDocumentServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("base", async () => {
    dynamodbMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = put(args);

    const DynamoDBDocumentClientInstanceLayer = Layer.succeed(
      DynamoDBDocumentClientInstance,
      DynamoDBDocumentClient.from(
        new DynamoDBClient({ region: "eu-central-1" }),
        { marshallOptions: { removeUndefinedValues: true } },
      ),
    );
    const CustomDynamoDBDocumentServiceLayer =
      BaseDynamoDBDocumentServiceLayer.pipe(
        Layer.provide(DynamoDBDocumentClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomDynamoDBDocumentServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("extended", async () => {
    dynamodbMock.reset().on(PutCommand).resolves({});

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = put(args);

    const DynamoDBDocumentClientInstanceLayer = Layer.effect(
      DynamoDBDocumentClientInstance,
      Effect.map(DynamoDBClientInstanceConfig, (config) =>
        DynamoDBDocumentClient.from(
          new DynamoDBClient({ ...config, region: "eu-central-1" }),
          { marshallOptions: { removeUndefinedValues: true } },
        ),
      ),
    );
    const CustomDynamoDBDocumentServiceLayer =
      BaseDynamoDBDocumentServiceLayer.pipe(
        Layer.provide(DynamoDBDocumentClientInstanceLayer),
        Layer.provide(DefaultDynamoDBClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomDynamoDBDocumentServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutCommand, args);
  });

  it("fail", async () => {
    dynamodbMock.reset().on(PutCommand).rejects(new Error("test"));

    const args: PutCommandInput = {
      TableName: "test",
      Item: { testAttr: "test" },
    };

    const program = put(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DefaultDynamoDBDocumentServiceLayer),
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
    expect(dynamodbMock).toHaveReceivedCommandTimes(PutCommand, 1);
    expect(dynamodbMock).toHaveReceivedCommandWith(PutCommand, args);
  });
});
