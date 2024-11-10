import {
  type GetCallerIdentityCommandInput,
  GetCallerIdentityCommand,
  STSClient,
  STSServiceException,
} from "@aws-sdk/client-sts";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-sts/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { STS, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(STSClient);

describe("STSClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STS.getCallerIdentity(args);

    const result = await pipe(
      program,
      Effect.provide(STS.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STS.getCallerIdentity(args);

    const result = await pipe(
      program,
      Effect.provide(STS.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STS.getCallerIdentity(args);

    const result = await pipe(
      program,
      Effect.provide(
        STS.baseLayer(() => new STSClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STS.getCallerIdentity(args);

    const result = await pipe(
      program,
      Effect.provide(
        STS.baseLayer(
          (config) => new STSClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).rejects(new Error("test"));

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STS.getCallerIdentity(args);

    const result = await pipe(
      program,
      Effect.provide(STS.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(GetCallerIdentityCommand)
      .rejects(
        new STSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STS.getCallerIdentity(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(STS.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });
});
