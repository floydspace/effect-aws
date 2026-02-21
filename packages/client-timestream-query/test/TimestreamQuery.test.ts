import {
  ListScheduledQueriesCommand,
  type ListScheduledQueriesCommandInput,
  TimestreamQueryClient,
  TimestreamQueryServiceException,
} from "@aws-sdk/client-timestream-query";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-timestream-query/dist-cjs/runtimeConfig";
import { TimestreamQuery, TimestreamQueryServiceConfig } from "@effect-aws/client-timestream-query";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(TimestreamQueryClient);

describe("TimestreamQueryClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListScheduledQueriesCommand).resolves({});

    const args = {} as unknown as ListScheduledQueriesCommandInput;

    const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

    const result = await pipe(
      program,
      Effect.provide(TimestreamQuery.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListScheduledQueriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListScheduledQueriesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListScheduledQueriesCommand).resolves({});

    const args = {} as unknown as ListScheduledQueriesCommandInput;

    const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

    const result = await pipe(
      program,
      Effect.provide(TimestreamQuery.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListScheduledQueriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListScheduledQueriesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListScheduledQueriesCommand).resolves({});

    const args = {} as unknown as ListScheduledQueriesCommandInput;

    const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

    const result = await pipe(
      program,
      Effect.provide(
        TimestreamQuery.baseLayer(() => new TimestreamQueryClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListScheduledQueriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListScheduledQueriesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListScheduledQueriesCommand).resolves({});

    const args = {} as unknown as ListScheduledQueriesCommandInput;

    const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

    const result = await pipe(
      program,
      Effect.provide(
        TimestreamQuery.baseLayer(
          (config) => new TimestreamQueryClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      TimestreamQueryServiceConfig.withTimestreamQueryServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListScheduledQueriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListScheduledQueriesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListScheduledQueriesCommand).rejects(new Error("test"));

    const args = {} as unknown as ListScheduledQueriesCommandInput;

    const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

    const result = await pipe(
      program,
      Effect.provide(TimestreamQuery.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListScheduledQueriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListScheduledQueriesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListScheduledQueriesCommand)
      .rejects(
        new TimestreamQueryServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListScheduledQueriesCommandInput;

    const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(TimestreamQuery.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListScheduledQueriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListScheduledQueriesCommand, args);
  });
});
