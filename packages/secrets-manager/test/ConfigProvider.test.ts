import {
  InvalidRequestException,
  ResourceNotFoundException,
} from "@aws-sdk/client-secrets-manager";
import {
  BaseSecretsManagerServiceLayer,
  SecretsManagerClientInstance,
} from "@effect-aws/client-secrets-manager";
import { Arg } from "@fluffy-spoon/substitute";
import { Config, ConfigError, Effect, Exit, Layer, Secret } from "effect";
import { SubstituteBuilder } from "./utils";
import { fromSecretsManager } from "../src/ConfigProvider";

describe("fromSecretsManager", () => {
  it("should load configuration from AWS Secrets Manager", async () => {
    const clientSubstitute = SubstituteBuilder.forSecretsManager()
      .mockGetSecretValue()
      .withSecretString("mocked-secret")
      .succeeds();

    const clientInstanceLayer = Layer.succeed(
      SecretsManagerClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSecretsManagerServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.string("test").pipe(
      Effect.withConfigProvider(fromSecretsManager({ serviceLayer })),
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

    const clientInstanceLayer = Layer.succeed(
      SecretsManagerClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSecretsManagerServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.secret("my-secret-that-doesnt-exist").pipe(
      Config.withDefault(Secret.fromString("mocked-default-value")),
      Effect.withConfigProvider(fromSecretsManager({ serviceLayer })),
      Effect.map(Secret.value),
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

    const clientInstanceLayer = Layer.succeed(
      SecretsManagerClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSecretsManagerServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.secret("test").pipe(
      Config.withDefault(Secret.fromString("mocked-default-value")),
      Effect.withConfigProvider(fromSecretsManager({ serviceLayer })),
      Effect.map(Secret.value),
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

    const clientInstanceLayer = Layer.succeed(
      SecretsManagerClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSecretsManagerServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.string("test").pipe(
      Effect.withConfigProvider(fromSecretsManager({ serviceLayer })),
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

    const clientInstanceLayer = Layer.succeed(
      SecretsManagerClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSecretsManagerServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.string("test").pipe(
      Effect.withConfigProvider(fromSecretsManager({ serviceLayer })),
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
