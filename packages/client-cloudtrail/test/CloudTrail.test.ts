import {
  type ListTrailsCommandInput,
  ListTrailsCommand,
  CloudTrailClient,
  CloudTrailServiceException,
} from "@aws-sdk/client-cloudtrail";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCloudTrailServiceLayer,
  DefaultCloudTrailClientConfigLayer,
  DefaultCloudTrailServiceLayer,
  CloudTrailClientInstance,
  CloudTrailClientInstanceConfig,
  CloudTrailService,
  CloudTrailServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(CloudTrailClient);

describe("CloudTrailClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrailService.listTrails(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrailService.listTrails(args);

    const CloudTrailClientConfigLayer = Layer.succeed(
      CloudTrailClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCloudTrailServiceLayer = CloudTrailServiceLayer.pipe(
      Layer.provide(CloudTrailClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrailService.listTrails(args);

    const CloudTrailClientInstanceLayer = Layer.succeed(
      CloudTrailClientInstance,
      new CloudTrailClient({ region: "eu-central-1" }),
    );
    const CustomCloudTrailServiceLayer = BaseCloudTrailServiceLayer.pipe(
      Layer.provide(CloudTrailClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrailService.listTrails(args);

    const CloudTrailClientInstanceLayer = Layer.effect(
      CloudTrailClientInstance,
      Effect.map(
        CloudTrailClientInstanceConfig,
        (config) => new CloudTrailClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCloudTrailServiceLayer = BaseCloudTrailServiceLayer.pipe(
      Layer.provide(CloudTrailClientInstanceLayer),
      Layer.provide(DefaultCloudTrailClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudTrailServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListTrailsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrailService.listTrails(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudTrailServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListTrailsCommand)
      .rejects(
        new CloudTrailServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrailService.listTrails(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudTrailServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });
});
