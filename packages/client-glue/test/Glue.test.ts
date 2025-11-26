import { GlueClient, GlueServiceException, ListJobsCommand, type ListJobsCommandInput } from "@aws-sdk/client-glue";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-glue/dist-cjs/runtimeConfig";
import { Glue, GlueServiceConfig } from "@effect-aws/client-glue";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(GlueClient);

describe("GlueClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListJobsCommand).resolves({});

    const args = {} as unknown as ListJobsCommandInput;

    const program = Glue.listJobs(args);

    const result = await pipe(
      program,
      Effect.provide(Glue.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListJobsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListJobsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListJobsCommand).resolves({});

    const args = {} as unknown as ListJobsCommandInput;

    const program = Glue.listJobs(args);

    const result = await pipe(
      program,
      Effect.provide(Glue.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListJobsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListJobsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListJobsCommand).resolves({});

    const args = {} as unknown as ListJobsCommandInput;

    const program = Glue.listJobs(args);

    const result = await pipe(
      program,
      Effect.provide(
        Glue.baseLayer(() => new GlueClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListJobsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListJobsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListJobsCommand).resolves({});

    const args = {} as unknown as ListJobsCommandInput;

    const program = Glue.listJobs(args);

    const result = await pipe(
      program,
      Effect.provide(
        Glue.baseLayer(
          (config) => new GlueClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      GlueServiceConfig.withGlueServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListJobsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListJobsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListJobsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListJobsCommandInput;

    const program = Glue.listJobs(args);

    const result = await pipe(
      program,
      Effect.provide(Glue.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListJobsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListJobsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListJobsCommand)
      .rejects(
        new GlueServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListJobsCommandInput;

    const program = Glue.listJobs(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Glue.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListJobsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListJobsCommand, args);
  });
});
