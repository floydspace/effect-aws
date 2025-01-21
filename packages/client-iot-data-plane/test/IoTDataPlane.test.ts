import {
  type PublishCommandInput,
  PublishCommand,
  IoTDataPlaneClient,
  IoTDataPlaneServiceException,
} from "@aws-sdk/client-iot-data-plane";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iot-data-plane/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { IoTDataPlane, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IoTDataPlaneClient);

describe("IoTDataPlaneClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args = {} as unknown as PublishCommandInput;

    const program = IoTDataPlane.publish(args);

    const result = await pipe(
      program,
      Effect.provide(IoTDataPlane.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args = {} as unknown as PublishCommandInput;

    const program = IoTDataPlane.publish(args);

    const result = await pipe(
      program,
      Effect.provide(IoTDataPlane.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args = {} as unknown as PublishCommandInput;

    const program = IoTDataPlane.publish(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTDataPlane.baseLayer(
          () => new IoTDataPlaneClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args = {} as unknown as PublishCommandInput;

    const program = IoTDataPlane.publish(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTDataPlane.baseLayer(
          (config) =>
            new IoTDataPlaneClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PublishCommand).rejects(new Error("test"));

    const args = {} as unknown as PublishCommandInput;

    const program = IoTDataPlane.publish(args);

    const result = await pipe(
      program,
      Effect.provide(IoTDataPlane.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(PublishCommand)
      .rejects(
        new IoTDataPlaneServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as PublishCommandInput;

    const program = IoTDataPlane.publish(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IoTDataPlane.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });
});
