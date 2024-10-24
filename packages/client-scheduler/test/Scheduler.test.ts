import {
  type TagResourceCommandInput,
  TagResourceCommand,
  SchedulerClient,
  SchedulerServiceException,
} from "@aws-sdk/client-scheduler";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSchedulerServiceLayer,
  DefaultSchedulerClientConfigLayer,
  DefaultSchedulerServiceLayer,
  SchedulerClientInstance,
  SchedulerClientInstanceConfig,
  SchedulerService,
  SchedulerServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(SchedulerClient);

describe("SchedulerClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = SchedulerService.tagResource(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSchedulerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = SchedulerService.tagResource(args);

    const SchedulerClientConfigLayer = Layer.succeed(
      SchedulerClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomSchedulerServiceLayer = SchedulerServiceLayer.pipe(
      Layer.provide(SchedulerClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSchedulerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = SchedulerService.tagResource(args);

    const SchedulerClientInstanceLayer = Layer.succeed(
      SchedulerClientInstance,
      new SchedulerClient({ region: "eu-central-1" }),
    );
    const CustomSchedulerServiceLayer = BaseSchedulerServiceLayer.pipe(
      Layer.provide(SchedulerClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSchedulerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(TagResourceCommand).resolves({});

    const args = {} as unknown as TagResourceCommandInput;

    const program = SchedulerService.tagResource(args);

    const SchedulerClientInstanceLayer = Layer.effect(
      SchedulerClientInstance,
      Effect.map(
        SchedulerClientInstanceConfig,
        (config) => new SchedulerClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSchedulerServiceLayer = BaseSchedulerServiceLayer.pipe(
      Layer.provide(SchedulerClientInstanceLayer),
      Layer.provide(DefaultSchedulerClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSchedulerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(TagResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(TagResourceCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(TagResourceCommand).rejects(new Error("test"));

    const args = {} as unknown as TagResourceCommandInput;

    const program = SchedulerService.tagResource(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSchedulerServiceLayer),
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

    const program = SchedulerService.tagResource(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSchedulerServiceLayer),
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
