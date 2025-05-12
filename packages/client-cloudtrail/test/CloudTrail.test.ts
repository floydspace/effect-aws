import {
  CloudTrailClient,
  CloudTrailServiceException,
  ListTrailsCommand,
  type ListTrailsCommandInput,
} from "@aws-sdk/client-cloudtrail";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cloudtrail/dist-cjs/runtimeConfig";
import { CloudTrail, CloudTrailServiceConfig } from "@effect-aws/client-cloudtrail";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CloudTrailClient);

describe("CloudTrailClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrail.listTrails(args);

    const result = await pipe(
      program,
      Effect.provide(CloudTrail.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrail.listTrails(args);

    const result = await pipe(
      program,
      Effect.provide(CloudTrail.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrail.listTrails(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudTrail.baseLayer(() => new CloudTrailClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListTrailsCommand).resolves({});

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrail.listTrails(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudTrail.baseLayer(
          (config) => new CloudTrailClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      CloudTrailServiceConfig.withCloudTrailServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTrailsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTrailsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListTrailsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListTrailsCommandInput;

    const program = CloudTrail.listTrails(args);

    const result = await pipe(
      program,
      Effect.provide(CloudTrail.defaultLayer),
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

    const program = CloudTrail.listTrails(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CloudTrail.defaultLayer),
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
