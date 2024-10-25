import {
  type ListRulesCommandInput,
  ListRulesCommand,
  CloudWatchEventsClient,
  CloudWatchEventsServiceException,
} from "@aws-sdk/client-cloudwatch-events";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCloudWatchEventsServiceLayer,
  DefaultCloudWatchEventsClientConfigLayer,
  DefaultCloudWatchEventsServiceLayer,
  CloudWatchEventsClientInstance,
  CloudWatchEventsClientInstanceConfig,
  CloudWatchEventsService,
  CloudWatchEventsServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(CloudWatchEventsClient);

describe("CloudWatchEventsClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEventsService.listRules(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudWatchEventsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEventsService.listRules(args);

    const CloudWatchEventsClientConfigLayer = Layer.succeed(
      CloudWatchEventsClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCloudWatchEventsServiceLayer =
      CloudWatchEventsServiceLayer.pipe(
        Layer.provide(CloudWatchEventsClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchEventsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEventsService.listRules(args);

    const CloudWatchEventsClientInstanceLayer = Layer.succeed(
      CloudWatchEventsClientInstance,
      new CloudWatchEventsClient({ region: "eu-central-1" }),
    );
    const CustomCloudWatchEventsServiceLayer =
      BaseCloudWatchEventsServiceLayer.pipe(
        Layer.provide(CloudWatchEventsClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchEventsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListRulesCommand).resolves({});

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEventsService.listRules(args);

    const CloudWatchEventsClientInstanceLayer = Layer.effect(
      CloudWatchEventsClientInstance,
      Effect.map(
        CloudWatchEventsClientInstanceConfig,
        (config) =>
          new CloudWatchEventsClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCloudWatchEventsServiceLayer =
      BaseCloudWatchEventsServiceLayer.pipe(
        Layer.provide(CloudWatchEventsClientInstanceLayer),
        Layer.provide(DefaultCloudWatchEventsClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudWatchEventsServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListRulesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRulesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListRulesCommand).rejects(new Error("test"));

    const args = {} as unknown as ListRulesCommandInput;

    const program = CloudWatchEventsService.listRules(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudWatchEventsServiceLayer),
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

    const program = CloudWatchEventsService.listRules(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudWatchEventsServiceLayer),
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
