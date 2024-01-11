import {
  PutEventsCommand,
  PutEventsCommandInput,
  EventBridgeClient,
} from "@aws-sdk/client-eventbridge";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseEventBridgeServiceLayer,
  DefaultEventBridgeClientConfigLayer,
  DefaultEventBridgeServiceLayer,
  EventBridgeClientInstance,
  EventBridgeClientInstanceConfig,
  EventBridgeService,
  EventBridgeServiceLayer,
} from "../src";

import "aws-sdk-client-mock-jest";

const ebMock = mockClient(EventBridgeClient);
const { putEvents } = Effect.serviceFunctions(EventBridgeService);

describe("EventBridgeClientImpl", () => {
  it("default", async () => {
    ebMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = {
      Entries: [{ Detail: "test" }],
    };

    const program = putEvents(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultEventBridgeServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(ebMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(ebMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("configurable", async () => {
    ebMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = {
      Entries: [{ Detail: "test" }],
    };

    const program = putEvents(args);

    const EventBridgeClientConfigLayer = Layer.succeed(
      EventBridgeClientInstanceConfig,
      { region: "eu-central-1" },
    );
    const CustomEventBridgeServiceLayer = EventBridgeServiceLayer.pipe(
      Layer.provide(EventBridgeClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomEventBridgeServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(ebMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(ebMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("base", async () => {
    ebMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = {
      Entries: [{ Detail: "test" }],
    };

    const program = putEvents(args);

    const EventBridgeClientInstanceLayer = Layer.succeed(
      EventBridgeClientInstance,
      new EventBridgeClient({ region: "eu-central-1" }),
    );
    const CustomEventBridgeServiceLayer = BaseEventBridgeServiceLayer.pipe(
      Layer.provide(EventBridgeClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomEventBridgeServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(ebMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(ebMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("extended", async () => {
    ebMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = {
      Entries: [{ Detail: "test" }],
    };

    const program = putEvents(args);

    const EventBridgeClientInstanceLayer = Layer.effect(
      EventBridgeClientInstance,
      Effect.map(
        EventBridgeClientInstanceConfig,
        (config) =>
          new EventBridgeClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomEventBridgeServiceLayer = BaseEventBridgeServiceLayer.pipe(
      Layer.provide(EventBridgeClientInstanceLayer),
      Layer.provide(DefaultEventBridgeClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomEventBridgeServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(ebMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(ebMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("fail", async () => {
    ebMock.reset().on(PutEventsCommand).rejects(new Error("test"));

    const args: PutEventsCommandInput = {
      Entries: [{ Detail: "test" }],
    };

    const program = putEvents(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DefaultEventBridgeServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(ebMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(ebMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });
});
