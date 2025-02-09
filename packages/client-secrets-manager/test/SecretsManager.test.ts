import {
  GetSecretValueCommand,
  type GetSecretValueCommandInput,
  SecretsManagerClient,
  SecretsManagerServiceException,
} from "@aws-sdk/client-secrets-manager";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-secrets-manager/dist-cjs/runtimeConfig";
import { SdkError, SecretsManager, SecretsManagerServiceConfig } from "@effect-aws/client-secrets-manager";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SecretsManagerClient);

describe("SecretsManagerClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = SecretsManager.getSecretValue(args);

    const result = await pipe(
      program,
      Effect.provide(SecretsManager.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = SecretsManager.getSecretValue(args);

    const result = await pipe(
      program,
      Effect.provide(SecretsManager.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = SecretsManager.getSecretValue(args);

    const result = await pipe(
      program,
      Effect.provide(
        SecretsManager.baseLayer(() => new SecretsManagerClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = SecretsManager.getSecretValue(args);

    const result = await pipe(
      program,
      Effect.provide(
        SecretsManager.baseLayer(
          (config) => new SecretsManagerClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      SecretsManagerServiceConfig.withSecretsManagerServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(GetSecretValueCommand).rejects(new Error("test"));

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = SecretsManager.getSecretValue(args);

    const result = await pipe(
      program,
      Effect.provide(SecretsManager.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(GetSecretValueCommand)
      .rejects(
        new SecretsManagerServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = SecretsManager.getSecretValue(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(SecretsManager.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });
});
