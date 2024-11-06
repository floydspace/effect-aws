import {
  type ListCustomModelsCommandInput,
  ListCustomModelsCommand,
  BedrockClient,
  BedrockServiceException,
} from "@aws-sdk/client-bedrock";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseBedrockServiceLayer,
  DefaultBedrockClientConfigLayer,
  DefaultBedrockServiceLayer,
  BedrockClientInstance,
  BedrockClientInstanceConfig,
  BedrockService,
  BedrockServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(BedrockClient);

describe("BedrockClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = BedrockService.listCustomModels(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultBedrockServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = BedrockService.listCustomModels(args);

    const BedrockClientConfigLayer = Layer.succeed(
      BedrockClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomBedrockServiceLayer = BedrockServiceLayer.pipe(
      Layer.provide(BedrockClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomBedrockServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = BedrockService.listCustomModels(args);

    const BedrockClientInstanceLayer = Layer.succeed(
      BedrockClientInstance,
      new BedrockClient({ region: "eu-central-1" }),
    );
    const CustomBedrockServiceLayer = BaseBedrockServiceLayer.pipe(
      Layer.provide(BedrockClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomBedrockServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListCustomModelsCommand).resolves({});

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = BedrockService.listCustomModels(args);

    const BedrockClientInstanceLayer = Layer.effect(
      BedrockClientInstance,
      Effect.map(
        BedrockClientInstanceConfig,
        (config) => new BedrockClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomBedrockServiceLayer = BaseBedrockServiceLayer.pipe(
      Layer.provide(BedrockClientInstanceLayer),
      Layer.provide(DefaultBedrockClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomBedrockServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCustomModelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCustomModelsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListCustomModelsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListCustomModelsCommandInput;

    const program = BedrockService.listCustomModels(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultBedrockServiceLayer),
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

    const program = BedrockService.listCustomModels(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultBedrockServiceLayer),
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
