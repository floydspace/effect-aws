import {
  AccountClient,
  AccountServiceException,
  ListRegionsCommand,
  type ListRegionsCommandInput,
} from "@aws-sdk/client-account";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-account/dist-cjs/runtimeConfig";
import { Account, AccountServiceConfig } from "@effect-aws/client-account";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(AccountClient);

describe("AccountClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args = {} as unknown as ListRegionsCommandInput;

    const program = Account.listRegions(args);

    const result = await pipe(
      program,
      Effect.provide(Account.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args = {} as unknown as ListRegionsCommandInput;

    const program = Account.listRegions(args);

    const result = await pipe(
      program,
      Effect.provide(Account.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args = {} as unknown as ListRegionsCommandInput;

    const program = Account.listRegions(args);

    const result = await pipe(
      program,
      Effect.provide(
        Account.baseLayer(() => new AccountClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListRegionsCommand).resolves({});

    const args = {} as unknown as ListRegionsCommandInput;

    const program = Account.listRegions(args);

    const result = await pipe(
      program,
      Effect.provide(
        Account.baseLayer(
          (config) => new AccountClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      AccountServiceConfig.withAccountServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListRegionsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListRegionsCommandInput;

    const program = Account.listRegions(args);

    const result = await pipe(
      program,
      Effect.provide(Account.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListRegionsCommand)
      .rejects(
        new AccountServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListRegionsCommandInput;

    const program = Account.listRegions(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Account.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListRegionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListRegionsCommand, args);
  });
});
