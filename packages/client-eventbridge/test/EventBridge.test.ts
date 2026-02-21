import {
  EventBridgeClient,
  EventBridgeServiceException,
  PutEventsCommand,
  type PutEventsCommandInput,
} from "@aws-sdk/client-eventbridge";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-eventbridge/dist-cjs/runtimeConfig";
import { EventBridge, EventBridgeServiceConfig } from "@effect-aws/client-eventbridge";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(EventBridgeClient);

describe("EventBridgeClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = { Entries: [{ Detail: "test" }] };

    const program = EventBridge.use((svc) => svc.putEvents(args));

    const result = await pipe(
      program,
      Effect.provide(EventBridge.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = { Entries: [{ Detail: "test" }] };

    const program = EventBridge.use((svc) => svc.putEvents(args));

    const result = await pipe(
      program,
      Effect.provide(EventBridge.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = { Entries: [{ Detail: "test" }] };

    const program = EventBridge.use((svc) => svc.putEvents(args));

    const result = await pipe(
      program,
      Effect.provide(
        EventBridge.baseLayer(() => new EventBridgeClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = { Entries: [{ Detail: "test" }] };

    const program = EventBridge.use((svc) => svc.putEvents(args));

    const result = await pipe(
      program,
      Effect.provide(
        EventBridge.baseLayer(
          (config) => new EventBridgeClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      EventBridgeServiceConfig.withEventBridgeServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PutEventsCommand).rejects(new Error("test"));

    const args: PutEventsCommandInput = { Entries: [{ Detail: "test" }] };

    const program = EventBridge.use((svc) => svc.putEvents(args));

    const result = await pipe(
      program,
      Effect.provide(EventBridge.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(PutEventsCommand)
      .rejects(
        new EventBridgeServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: PutEventsCommandInput = { Entries: [{ Detail: "test" }] };

    const program = EventBridge.use((svc) => svc.putEvents(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(EventBridge.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });
});
