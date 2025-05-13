import {
  IoTEventsClient,
  IoTEventsServiceException,
  ListInputsCommand,
  type ListInputsCommandInput,
} from "@aws-sdk/client-iot-events";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iot-events/dist-cjs/runtimeConfig";
import { IoTEvents, IoTEventsServiceConfig } from "@effect-aws/client-iot-events";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IoTEventsClient);

describe("IoTEventsClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListInputsCommand).resolves({});

    const args = {} as unknown as ListInputsCommandInput;

    const program = IoTEvents.listInputs(args);

    const result = await pipe(
      program,
      Effect.provide(IoTEvents.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListInputsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListInputsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListInputsCommand).resolves({});

    const args = {} as unknown as ListInputsCommandInput;

    const program = IoTEvents.listInputs(args);

    const result = await pipe(
      program,
      Effect.provide(IoTEvents.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListInputsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListInputsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListInputsCommand).resolves({});

    const args = {} as unknown as ListInputsCommandInput;

    const program = IoTEvents.listInputs(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTEvents.baseLayer(() => new IoTEventsClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListInputsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListInputsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListInputsCommand).resolves({});

    const args = {} as unknown as ListInputsCommandInput;

    const program = IoTEvents.listInputs(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTEvents.baseLayer(
          (config) => new IoTEventsClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      IoTEventsServiceConfig.withIoTEventsServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListInputsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListInputsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListInputsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListInputsCommandInput;

    const program = IoTEvents.listInputs(args);

    const result = await pipe(
      program,
      Effect.provide(IoTEvents.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListInputsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListInputsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListInputsCommand)
      .rejects(
        new IoTEventsServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListInputsCommandInput;

    const program = IoTEvents.listInputs(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IoTEvents.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListInputsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListInputsCommand, args);
  });
});
