import {
  IoTWirelessClient,
  IoTWirelessServiceException,
  ListDestinationsCommand,
  type ListDestinationsCommandInput,
} from "@aws-sdk/client-iot-wireless";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iot-wireless/dist-cjs/runtimeConfig";
import { IoTWireless, IoTWirelessServiceConfig } from "@effect-aws/client-iot-wireless";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IoTWirelessClient);

describe("IoTWirelessClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListDestinationsCommand).resolves({});

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.use((svc) => svc.listDestinations(args));

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListDestinationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDestinationsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListDestinationsCommand).resolves({});

    const args = {} as unknown as ListDestinationsCommandInput;

    const program = IoTWireless.use((svc) => svc.listDestinations(args));

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.layer({ region: "eu-central-1", logger: true })),
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

    const program = IoTWireless.use((svc) => svc.listDestinations(args));

    const result = await pipe(
      program,
      Effect.provide(
        IoTWireless.baseLayer(() => new IoTWirelessClient({ region: "eu-central-1" })),
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

    const program = IoTWireless.use((svc) => svc.listDestinations(args));

    const result = await pipe(
      program,
      Effect.provide(
        IoTWireless.baseLayer(
          (config) => new IoTWirelessClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      IoTWirelessServiceConfig.withIoTWirelessServiceConfig({ logger: true }),
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

    const program = IoTWireless.use((svc) => svc.listDestinations(args));

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        new SdkError({
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

    const program = IoTWireless.use((svc) => svc.listDestinations(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IoTWireless.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toContainEqual(
      Exit.fail(
        new SdkError({
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
