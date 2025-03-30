import { InvalidRequestException, ResourceNotFoundException } from "@aws-sdk/client-secrets-manager";
import { SecretsManager } from "@effect-aws/client-secrets-manager";
import { ConfigProvider } from "@effect-aws/secrets-manager";
import { Arg } from "@fluffy-spoon/substitute";
import { Config, ConfigError, Effect, Exit, Layer, Redacted } from "effect";
import { describe, expect, it } from "vitest";
import { SubstituteBuilder } from "./utils/index.js";

describe("fromSecretsManager", () => {
  it("should load configuration from AWS Secrets Manager", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .withSecretString("mocked-secret")
      .succeeds();

    const serviceLayer = SecretsManager.baseLayer(() => clientSubstitute);

    const result = await Config.string("test").pipe(
      ConfigProvider.withSecretsManagerConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed("mocked-secret"));
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });

  it("should load default value if the secret does not exist", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .failsWith(
        new ResourceNotFoundException({
          $metadata: {},
          message: "mocked-error",
        }),
      );

    const serviceLayer = SecretsManager.baseLayer(() => clientSubstitute);
    const configProviderLayer = Layer.provide(ConfigProvider.setSecretsManagerConfigProvider(), serviceLayer);

    const result = await Config.redacted("my-secret-that-doesnt-exist").pipe(
      Config.withDefault(Redacted.make("mocked-default-value")),
      Effect.provide(configProviderLayer),
      Effect.map(Redacted.value),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed("mocked-default-value"));
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });

  it("should fail if request is invalid", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .failsWith(
        new InvalidRequestException({
          $metadata: {},
          message: "mocked-error",
        }),
      );

    const serviceLayer = SecretsManager.baseLayer(() => clientSubstitute);

    const result = await Config.redacted("test").pipe(
      Config.withDefault(Redacted.make("mocked-default-value")),
      ConfigProvider.withSecretsManagerConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.map(Redacted.value),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        ConfigError.InvalidData(
          ["test"],
          "Invalid request to AWS Secrets Manager",
        ),
      ),
    );
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });

  it("should fail if the secret does not exist", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .failsWith(
        new ResourceNotFoundException({
          $metadata: {},
          message: "mocked-error",
        }),
      );

    const serviceLayer = SecretsManager.baseLayer(() => clientSubstitute);

    const result = await Config.string("test").pipe(
      ConfigProvider.withSecretsManagerConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        ConfigError.MissingData(
          ["test"],
          "Expected test to exist in AWS Secrets Manager",
        ),
      ),
    );
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });

  it("should fail if the secret is empty", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .succeeds();

    const serviceLayer = SecretsManager.baseLayer(() => clientSubstitute);

    const result = await Config.string("test").pipe(
      ConfigProvider.withSecretsManagerConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        ConfigError.MissingData(
          ["test"],
          "Expected test to exist in AWS Secrets Manager",
        ),
      ),
    );
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });
});
