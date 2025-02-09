import {
  CloudWatchEventsClient,
  CloudWatchEventsServiceException,
  ListRulesCommand,
  type ListRulesCommandInput,
} from "@aws-sdk/client-cloudwatch-events";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cloudwatch-events/dist-cjs/runtimeConfig";
import { CloudWatchEvents, CloudWatchEventsServiceConfig, SdkError } from "@effect-aws/client-cloudwatch-events";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CloudWatchEventsClient);

describe("CloudWatchEventsClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEvents.listRules(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatchEvents.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEvents.listRules(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatchEvents.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEvents.listRules(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudWatchEvents.baseLayer(() => new CloudWatchEventsClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEvents.listRules(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudWatchEvents.baseLayer(
          (config) => new CloudWatchEventsClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      CloudWatchEventsServiceConfig.withCloudWatchEventsServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListRulesCommand).rejects(new Error("test"));

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEvents.listRules(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatchEvents.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListRulesCommand)
      .rejects(
        new CloudWatchEventsServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEvents.listRules(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CloudWatchEvents.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });
});
