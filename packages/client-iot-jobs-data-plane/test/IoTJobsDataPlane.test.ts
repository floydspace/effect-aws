import {
  IoTJobsDataPlaneClient,
  IoTJobsDataPlaneServiceException,
  StartCommandExecutionCommand,
  type StartCommandExecutionCommandInput,
} from "@aws-sdk/client-iot-jobs-data-plane";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iot-jobs-data-plane/dist-cjs/runtimeConfig";
import { IoTJobsDataPlane, IoTJobsDataPlaneServiceConfig } from "@effect-aws/client-iot-jobs-data-plane";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IoTJobsDataPlaneClient);

describe("IoTJobsDataPlaneClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(StartCommandExecutionCommand).resolves({});

    const args = {} as unknown as StartCommandExecutionCommandInput;

    const program = IoTJobsDataPlane.use((svc) => svc.startCommandExecution(args));

    const result = await pipe(
      program,
      Effect.provide(IoTJobsDataPlane.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(StartCommandExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartCommandExecutionCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(StartCommandExecutionCommand).resolves({});

    const args = {} as unknown as StartCommandExecutionCommandInput;

    const program = IoTJobsDataPlane.use((svc) => svc.startCommandExecution(args));

    const result = await pipe(
      program,
      Effect.provide(IoTJobsDataPlane.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartCommandExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartCommandExecutionCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(StartCommandExecutionCommand).resolves({});

    const args = {} as unknown as StartCommandExecutionCommandInput;

    const program = IoTJobsDataPlane.use((svc) => svc.startCommandExecution(args));

    const result = await pipe(
      program,
      Effect.provide(
        IoTJobsDataPlane.baseLayer(() => new IoTJobsDataPlaneClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartCommandExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartCommandExecutionCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(StartCommandExecutionCommand).resolves({});

    const args = {} as unknown as StartCommandExecutionCommandInput;

    const program = IoTJobsDataPlane.use((svc) => svc.startCommandExecution(args));

    const result = await pipe(
      program,
      Effect.provide(
        IoTJobsDataPlane.baseLayer(
          (config) => new IoTJobsDataPlaneClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      IoTJobsDataPlaneServiceConfig.withIoTJobsDataPlaneServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartCommandExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartCommandExecutionCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(StartCommandExecutionCommand).rejects(new Error("test"));

    const args = {} as unknown as StartCommandExecutionCommandInput;

    const program = IoTJobsDataPlane.use((svc) => svc.startCommandExecution(args));

    const result = await pipe(
      program,
      Effect.provide(IoTJobsDataPlane.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(StartCommandExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartCommandExecutionCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(StartCommandExecutionCommand)
      .rejects(
        new IoTJobsDataPlaneServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as StartCommandExecutionCommandInput;

    const program = IoTJobsDataPlane.use((svc) => svc.startCommandExecution(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IoTJobsDataPlane.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(StartCommandExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartCommandExecutionCommand, args);
  });
});
