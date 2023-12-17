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
  BaseEventBridgeServiceEffect,
  DefaultEventBridgeClientConfigLayer,
  DefaultEventBridgeServiceEffect,
  EventBridgeClientConfigTag,
  EventBridgeClientInstanceTag,
  EventBridgeClientOptions,
  EventBridgeServiceEffect,
} from "../src";

import "aws-sdk-client-mock-jest";

const ebMock = mockClient(EventBridgeClient);

describe("EventBridgeClientImpl", () => {
  it("default", async () => {
    ebMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = {
      Entries: [{ Detail: "test" }],
    };

    const program = Effect.flatMap(DefaultEventBridgeServiceEffect, (eb) =>
      eb.putEvents(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.succeed({}));
    expect(ebMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(ebMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });

  it("configurable", async () => {
    ebMock.reset().on(PutEventsCommand).resolves({});

    const args: PutEventsCommandInput = {
      Entries: [{ Detail: "test" }],
    };

    const program = Effect.flatMap(EventBridgeServiceEffect, (eb) =>
      eb.putEvents(args),
    );

    const EventBridgeClientConfigLayer = Layer.succeed(
      EventBridgeClientConfigTag,
      new EventBridgeClientOptions({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(EventBridgeClientConfigLayer),
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

    const program = Effect.flatMap(BaseEventBridgeServiceEffect, (eb) =>
      eb.putEvents(args),
    );

    const EventBridgeClientInstanceLayer = Layer.succeed(
      EventBridgeClientInstanceTag,
      new EventBridgeClient({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(EventBridgeClientInstanceLayer),
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

    const program = Effect.flatMap(BaseEventBridgeServiceEffect, (eb) =>
      eb.putEvents(args),
    );

    const EventBridgeClientInstanceLayer = Layer.provide(
      Layer.effect(
        EventBridgeClientInstanceTag,
        EventBridgeClientConfigTag.pipe(
          Effect.map(
            (config) =>
              new EventBridgeClient({ ...config, region: "eu-central-1" }),
          ),
        ),
      ),
      DefaultEventBridgeClientConfigLayer,
    );

    const result = await pipe(
      program,
      Effect.provide(EventBridgeClientInstanceLayer),
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

    const program = Effect.flatMap(DefaultEventBridgeServiceEffect, (eb) =>
      eb.putEvents(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(ebMock).toHaveReceivedCommandTimes(PutEventsCommand, 1);
    expect(ebMock).toHaveReceivedCommandWith(PutEventsCommand, args);
  });
});
