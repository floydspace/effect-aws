import {
  type GetSecretValueCommandInput,
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSecretsManagerServiceLayer,
  DefaultSecretsManagerClientConfigLayer,
  DefaultSecretsManagerServiceLayer,
  SecretsManagerClientInstance,
  SecretsManagerClientInstanceConfig,
  SecretsManagerService,
  SecretsManagerServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(SecretsManagerClient);

describe("SecretsManagerClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = Effect.flatMap(SecretsManagerService, (service) =>
      service.getSecretValue(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSecretsManagerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = Effect.flatMap(SecretsManagerService, (service) =>
      service.getSecretValue(args),
    );

    const SecretsManagerClientConfigLayer = Layer.succeed(
      SecretsManagerClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomSecretsManagerServiceLayer = SecretsManagerServiceLayer.pipe(
      Layer.provide(SecretsManagerClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSecretsManagerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = Effect.flatMap(SecretsManagerService, (service) =>
      service.getSecretValue(args),
    );

    const SecretsManagerClientInstanceLayer = Layer.succeed(
      SecretsManagerClientInstance,
      new SecretsManagerClient({ region: "eu-central-1" }),
    );
    const CustomSecretsManagerServiceLayer =
      BaseSecretsManagerServiceLayer.pipe(
        Layer.provide(SecretsManagerClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomSecretsManagerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(GetSecretValueCommand).resolves({});

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = Effect.flatMap(SecretsManagerService, (service) =>
      service.getSecretValue(args),
    );

    const SecretsManagerClientInstanceLayer = Layer.effect(
      SecretsManagerClientInstance,
      Effect.map(
        SecretsManagerClientInstanceConfig,
        (config) =>
          new SecretsManagerClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSecretsManagerServiceLayer =
      BaseSecretsManagerServiceLayer.pipe(
        Layer.provide(SecretsManagerClientInstanceLayer),
        Layer.provide(DefaultSecretsManagerClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomSecretsManagerServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetSecretValueCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetSecretValueCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(GetSecretValueCommand).rejects(new Error("test"));

    const args: GetSecretValueCommandInput = { SecretId: "test" };

    const program = Effect.flatMap(SecretsManagerService, (service) =>
      service.getSecretValue(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSecretsManagerServiceLayer),
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
