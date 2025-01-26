import {
  KinesisClient,
  KinesisServiceException,
  PutRecordCommand,
  type PutRecordCommandInput,
} from "@aws-sdk/client-kinesis";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-kinesis/dist-cjs/runtimeConfig";
import { Kinesis, SdkError } from "@effect-aws/client-kinesis";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(KinesisClient);

describe("KinesisClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PutRecordCommand).resolves({});

    const args = {} as unknown as PutRecordCommandInput;

    const program = Kinesis.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(Kinesis.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PutRecordCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PutRecordCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PutRecordCommand).resolves({});

    const args = {} as unknown as PutRecordCommandInput;

    const program = Kinesis.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(Kinesis.layer({ region: "eu-central-1" })),
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

    const args = {} as unknown as PutRecordCommandInput;

    const program = Kinesis.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(
        Kinesis.baseLayer(() => new KinesisClient({ region: "eu-central-1" })),
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

    const args = {} as unknown as PutRecordCommandInput;

    const program = Kinesis.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(
        Kinesis.baseLayer(
          (config) => new KinesisClient({ ...config, region: "eu-central-1" }),
        ),
      ),
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

    const args = {} as unknown as PutRecordCommandInput;

    const program = Kinesis.putRecord(args);

    const result = await pipe(
      program,
      Effect.provide(Kinesis.defaultLayer),
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
        new KinesisServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as PutRecordCommandInput;

    const program = Kinesis.putRecord(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Kinesis.defaultLayer),
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
