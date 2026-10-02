import { InvalidRequestException, ResourceNotFoundException } from "@aws-sdk/client-secrets-manager";
import { SecretsManager } from "@effect-aws/client-secrets-manager";
import { ConfigProvider } from "@effect-aws/secrets-manager";
import { Arg } from "@fluffy-spoon/substitute";
import * as Config from "effect/Config";
import { SourceError } from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import { SubstituteBuilder } from "./utils/index.js";

describe("fromSecretsManager", () => {
  it("should load configuration from AWS Secrets Manager", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .withSecretString("mocked-secret")
      .succeeds();

    const serviceLayer = SecretsManager.baseLayer(() => clientSubstitute);

    const result = await Config.String("test").pipe(
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

    const result = await Config.Redacted("my-secret-that-doesnt-exist").pipe(
      Config.withDefault(Redacted.make("mocked-default-value")),
    ).pipe(
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

    const result = await Config.Redacted("test").pipe(
      Config.withDefault(Redacted.make("mocked-default-value")),
    ).pipe(
      ConfigProvider.withSecretsManagerConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.map(Redacted.value),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        new Config.ConfigError(
          new SourceError(
            {
              message: "Failed to load configuration from AWS Secrets Manager",
              cause: new InvalidRequestException({
                $metadata: {},
                message: "mocked-error",
              }),
            },
          ),
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

    const result = await Config.String("test").pipe(
      ConfigProvider.withSecretsManagerConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toMatchInlineSnapshot(`
      {
        "_id": "Exit",
        "_tag": "Failure",
        "cause": {
          "_id": "Cause",
          "failures": [
            {
              "_tag": "Fail",
              "error": ConfigError {
                "_tag": "ConfigError",
                "cause": [SchemaError: Expected string
        at ["test"]],
                "name": "ConfigError",
              },
            },
          ],
        },
      }
    `);
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });

  it("should fail if the secret is empty", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .succeeds();

    const serviceLayer = SecretsManager.baseLayer(() => clientSubstitute);

    const result = await Config.String("test").pipe(
      ConfigProvider.withSecretsManagerConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toMatchInlineSnapshot(`
      {
        "_id": "Exit",
        "_tag": "Failure",
        "cause": {
          "_id": "Cause",
          "failures": [
            {
              "_tag": "Fail",
              "error": ConfigError {
                "_tag": "ConfigError",
                "cause": [SchemaError: Expected string
        at ["test"]],
                "name": "ConfigError",
              },
            },
          ],
        },
      }
    `);
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });
});
