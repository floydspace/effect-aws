import {
  ListTablesCommand,
  type ListTablesCommandInput,
  TimestreamWriteClient,
  TimestreamWriteServiceException,
} from "@aws-sdk/client-timestream-write";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-timestream-write/dist-cjs/runtimeConfig";
import { TimestreamWrite, TimestreamWriteServiceConfig } from "@effect-aws/client-timestream-write";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(TimestreamWriteClient);

describe("TimestreamWriteClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListTablesCommand).resolves({});

    const args: ListTablesCommandInput = { DatabaseName: "test" };

    const program = TimestreamWrite.use((svc) => svc.listTables(args));

    const result = await pipe(
      program,
      Effect.provide(TimestreamWrite.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListTablesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTablesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListTablesCommand).resolves({});

    const args: ListTablesCommandInput = { DatabaseName: "test" };

    const program = TimestreamWrite.use((svc) => svc.listTables(args));

    const result = await pipe(
      program,
      Effect.provide(TimestreamWrite.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTablesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTablesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListTablesCommand).resolves({});

    const args: ListTablesCommandInput = { DatabaseName: "test" };

    const program = TimestreamWrite.use((svc) => svc.listTables(args));

    const result = await pipe(
      program,
      Effect.provide(
        TimestreamWrite.baseLayer(() => new TimestreamWriteClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTablesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTablesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListTablesCommand).resolves({});

    const args: ListTablesCommandInput = { DatabaseName: "test" };

    const program = TimestreamWrite.use((svc) => svc.listTables(args));

    const result = await pipe(
      program,
      Effect.provide(
        TimestreamWrite.baseLayer(
          (config) => new TimestreamWriteClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      TimestreamWriteServiceConfig.withTimestreamWriteServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTablesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTablesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListTablesCommand).rejects(new Error("test"));

    const args: ListTablesCommandInput = { DatabaseName: "test" };

    const program = TimestreamWrite.use((svc) => svc.listTables(args));

    const result = await pipe(
      program,
      Effect.provide(TimestreamWrite.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListTablesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTablesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListTablesCommand)
      .rejects(
        new TimestreamWriteServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: ListTablesCommandInput = { DatabaseName: "test" };

    const program = TimestreamWrite.use((svc) => svc.listTables(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(TimestreamWrite.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListTablesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTablesCommand, args);
  });
});
