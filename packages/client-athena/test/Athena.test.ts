import {
  AthenaClient,
  AthenaServiceException,
  StartQueryExecutionCommand,
  type StartQueryExecutionCommandInput,
} from "@aws-sdk/client-athena";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-athena/dist-cjs/runtimeConfig";
import { Athena, AthenaServiceConfig } from "@effect-aws/client-athena";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(AthenaClient);

describe("AthenaClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(StartQueryExecutionCommand).resolves({});

    const args: StartQueryExecutionCommandInput = { QueryString: "test" };

    const program = Athena.use((svc) => svc.startQueryExecution(args));

    const result = await pipe(
      program,
      Effect.provide(Athena.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(StartQueryExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartQueryExecutionCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(StartQueryExecutionCommand).resolves({});

    const args: StartQueryExecutionCommandInput = { QueryString: "test" };

    const program = Athena.use((svc) => svc.startQueryExecution(args));

    const result = await pipe(
      program,
      Effect.provide(Athena.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartQueryExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartQueryExecutionCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(StartQueryExecutionCommand).resolves({});

    const args: StartQueryExecutionCommandInput = { QueryString: "test" };

    const program = Athena.use((svc) => svc.startQueryExecution(args));

    const result = await pipe(
      program,
      Effect.provide(
        Athena.baseLayer(() => new AthenaClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartQueryExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartQueryExecutionCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(StartQueryExecutionCommand).resolves({});

    const args: StartQueryExecutionCommandInput = { QueryString: "test" };

    const program = Athena.use((svc) => svc.startQueryExecution(args));

    const result = await pipe(
      program,
      Effect.provide(
        Athena.baseLayer(
          (config) => new AthenaClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      AthenaServiceConfig.withAthenaServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartQueryExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartQueryExecutionCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(StartQueryExecutionCommand).rejects(new Error("test"));

    const args: StartQueryExecutionCommandInput = { QueryString: "test" };

    const program = Athena.use((svc) => svc.startQueryExecution(args));

    const result = await pipe(
      program,
      Effect.provide(Athena.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(StartQueryExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartQueryExecutionCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(StartQueryExecutionCommand)
      .rejects(
        new AthenaServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: StartQueryExecutionCommandInput = { QueryString: "test" };

    const program = Athena.use((svc) => svc.startQueryExecution(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Athena.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(StartQueryExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartQueryExecutionCommand, args);
  });
});
