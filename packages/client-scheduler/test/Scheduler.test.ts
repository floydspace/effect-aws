import {
  SchedulerClient,
  SchedulerServiceException,
  TagResourceCommand,
  type TagResourceCommandInput,
} from "@aws-sdk/client-scheduler";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-scheduler/dist-cjs/runtimeConfig";
import { Scheduler, SchedulerServiceConfig } from "@effect-aws/client-scheduler";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SchedulerClient);

describe("SchedulerClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = Scheduler.tagResource(args);

    const result = await pipe(
      program,
      Effect.provide(Scheduler.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = Scheduler.tagResource(args);

    const result = await pipe(
      program,
      Effect.provide(Scheduler.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = Scheduler.tagResource(args);

    const result = await pipe(
      program,
      Effect.provide(
        Scheduler.baseLayer(() => new SchedulerClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = Scheduler.tagResource(args);

    const result = await pipe(
      program,
      Effect.provide(
        Scheduler.baseLayer(
          (config) => new SchedulerClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      SchedulerServiceConfig.withSchedulerServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(TagResourceCommand).rejects(new Error("test"));

    const args = {} as unknown as TagResourceCommandInput;

    const program = Scheduler.tagResource(args);

    const result = await pipe(
      program,
      Effect.provide(Scheduler.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(TagResourceCommand)
      .rejects(
        new SchedulerServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as TagResourceCommandInput;

    const program = Scheduler.tagResource(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Scheduler.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });
});
