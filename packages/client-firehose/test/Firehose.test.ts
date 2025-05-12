import {
  FirehoseClient,
  FirehoseServiceException,
  PutRecordCommand,
  type PutRecordCommandInput,
} from "@aws-sdk/client-firehose";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-firehose/dist-cjs/runtimeConfig";
import { Firehose, FirehoseServiceConfig } from "@effect-aws/client-firehose";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(FirehoseClient);

describe("FirehoseClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PutRecordCommand).resolves({});

    const args: PutRecordCommandInput = { Record: { Data: { type: "Buffer", data: [] } } };

    const program = Firehose.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(Firehose.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(PutRecordCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutRecordCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PutRecordCommand).resolves({});

    const args: PutRecordCommandInput = { Record: { Data: { type: "Buffer", data: [] } } };

    const program = Firehose.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(Firehose.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutRecordCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutRecordCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PutRecordCommand).resolves({});

    const args: PutRecordCommandInput = { Record: { Data: { type: "Buffer", data: [] } } };

    const program = Firehose.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(
        Firehose.baseLayer(() => new FirehoseClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutRecordCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutRecordCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PutRecordCommand).resolves({});

    const args: PutRecordCommandInput = { Record: { Data: { type: "Buffer", data: [] } } };

    const program = Firehose.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(
        Firehose.baseLayer(
          (config) => new FirehoseClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      FirehoseServiceConfig.withFirehoseServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutRecordCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutRecordCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PutRecordCommand).rejects(new Error("test"));

    const args: PutRecordCommandInput = { Record: { Data: { type: "Buffer", data: [] } } };

    const program = Firehose.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(Firehose.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutRecordCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutRecordCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(PutRecordCommand)
      .rejects(
        new FirehoseServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: PutRecordCommandInput = { Record: { Data: { type: "Buffer", data: [] } } };

    const program = Firehose.putRecord(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Firehose.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PutRecordCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutRecordCommand, args);
  });
});
