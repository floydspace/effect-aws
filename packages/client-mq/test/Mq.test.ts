import {
  type ListBrokersCommandInput,
  ListBrokersCommand,
  MqClient,
  MqServiceException,
} from "@aws-sdk/client-mq";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-mq/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Mq, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(MqClient);

describe("MqClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = Mq.listBrokers(args);

    const result = await pipe(
      program,
      Effect.provide(Mq.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = Mq.listBrokers(args);

    const result = await pipe(
      program,
      Effect.provide(Mq.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = Mq.listBrokers(args);

    const result = await pipe(
      program,
      Effect.provide(
        Mq.baseLayer(() => new MqClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListBrokersCommand).resolves({});

    const args = {} as unknown as ListBrokersCommandInput;

    const program = Mq.listBrokers(args);

    const result = await pipe(
      program,
      Effect.provide(
        Mq.baseLayer(
          (config) => new MqClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListBrokersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListBrokersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListBrokersCommand).rejects(new Error("test"));

    const args = {} as unknown as ListBrokersCommandInput;

    const program = Mq.listBrokers(args);

    const result = await pipe(
      program,
      Effect.provide(Mq.defaultLayer),
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

    const program = Mq.listBrokers(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Mq.defaultLayer),
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
