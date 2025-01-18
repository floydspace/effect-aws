import {
  type ListDestinationsCommandInput,
  ListDestinationsCommand,
  IoTWirelessClient,
  IoTWirelessServiceException,
} from "@aws-sdk/client-iot-wireless";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iot-wireless/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { IoTWireless, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IoTWirelessClient);

describe("IoTWirelessClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListDestinationsCommand).resolves({});

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.listDestinations(args);

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListDestinationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDestinationsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListDestinationsCommand).resolves({});

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.listDestinations(args);

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListDestinationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDestinationsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListDestinationsCommand).resolves({});

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.listDestinations(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTWireless.baseLayer(
          () => new IoTWirelessClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListDestinationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDestinationsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListDestinationsCommand).resolves({});

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.listDestinations(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTWireless.baseLayer(
          (config) =>
            new IoTWirelessClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListDestinationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDestinationsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListDestinationsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.listDestinations(args);

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListDestinationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDestinationsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListDestinationsCommand)
      .rejects(
        new IoTWirelessServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.listDestinations(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListDestinationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDestinationsCommand, args);
  });
});
