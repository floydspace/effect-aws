import {
  type ListBrokersCommandInput,
  ListBrokersCommand,
  MqClient,
  MqServiceException,
} from "@aws-sdk/client-mq";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseMqServiceLayer,
  DefaultMqClientConfigLayer,
  DefaultMqServiceLayer,
  MqClientInstance,
  MqClientInstanceConfig,
  MqService,
  MqServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(MqClient);

describe("MqClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = MqService.listBrokers(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultMqServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = MqService.listBrokers(args);

    const MqClientConfigLayer = Layer.succeed(MqClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomMqServiceLayer = MqServiceLayer.pipe(
      Layer.provide(MqClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomMqServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = MqService.listBrokers(args);

    const MqClientInstanceLayer = Layer.succeed(
      MqClientInstance,
      new MqClient({ region: "eu-central-1" }),
    );
    const CustomMqServiceLayer = BaseMqServiceLayer.pipe(
      Layer.provide(MqClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomMqServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = MqService.listBrokers(args);

    const MqClientInstanceLayer = Layer.effect(
      MqClientInstance,
      Effect.map(
        MqClientInstanceConfig,
        (config) => new MqClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomMqServiceLayer = BaseMqServiceLayer.pipe(
      Layer.provide(MqClientInstanceLayer),
      Layer.provide(DefaultMqClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomMqServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListBrokersCommand).rejects(new Error("test"));

    const args = {} as unknown as ListBrokersCommandInput;

    const program = MqService.listBrokers(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultMqServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListBrokersCommand)
      .rejects(
        new MqServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListBrokersCommandInput;

    const program = MqService.listBrokers(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultMqServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });
});
