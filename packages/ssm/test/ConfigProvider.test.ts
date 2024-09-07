import { InvalidKeyId, ParameterNotFound } from "@aws-sdk/client-ssm";
import { BaseSSMServiceLayer, SSMClientInstance } from "@effect-aws/client-ssm";
import { Arg } from "@fluffy-spoon/substitute";
import { Config, ConfigError, Effect, Exit, Layer, Secret } from "effect";
import { describe, expect, it } from "vitest";
import { SubstituteBuilder } from "./utils";
import { fromParameterStore } from "../src/ConfigProvider";

describe("fromParameterStore", () => {
  it("should load configuration from AWS Systems Manager Parameter Store", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .withParameterValue("mocked-parameter")
      .succeeds();

    const clientInstanceLayer = Layer.succeed(
      SSMClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSSMServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.string("test").pipe(
      Effect.withConfigProvider(fromParameterStore({ serviceLayer })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed("mocked-parameter"));
    clientSubstitute.received(1).send(Arg.any(), {});
  });

  it("should load default value if the parameter does not exist", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .failsWith(
        new ParameterNotFound({
          $metadata: {},
          message: "mocked-error",
        }),
      );

    const clientInstanceLayer = Layer.succeed(
      SSMClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSSMServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.secret("my-param-that-doesnt-exist").pipe(
      Config.withDefault(Secret.fromString("mocked-default-value")),
      Effect.withConfigProvider(fromParameterStore({ serviceLayer })),
      Effect.map(Secret.value),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed("mocked-default-value"));
    clientSubstitute.received(1).send(Arg.any(), {});
  });

  it("should fail if request is invalid", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .failsWith(
        new InvalidKeyId({
          $metadata: {},
          message: "mocked-error",
        }),
      );

    const clientInstanceLayer = Layer.succeed(
      SSMClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSSMServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.secret("test").pipe(
      Config.withDefault(Secret.fromString("mocked-default-value")),
      Effect.withConfigProvider(fromParameterStore({ serviceLayer })),
      Effect.map(Secret.value),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        ConfigError.InvalidData(
          ["test"],
          "Invalid key ID when retrieving configuration from AWS Systems Manager Parameter Store",
        ),
      ),
    );
    clientSubstitute.received(1).send(Arg.any(), {});
  });

  it("should fail if the parameter does not exist", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .failsWith(
        new ParameterNotFound({
          $metadata: {},
          message: "mocked-error",
        }),
      );

    const clientInstanceLayer = Layer.succeed(
      SSMClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSSMServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.string("test").pipe(
      Effect.withConfigProvider(fromParameterStore({ serviceLayer })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        ConfigError.MissingData(
          ["test"],
          "Expected test parameter to exist in AWS Systems Manager Parameter Store",
        ),
      ),
    );
    clientSubstitute.received(1).send(Arg.any(), {});
  });

  it("should fail if the parameter is empty", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .succeeds();

    const clientInstanceLayer = Layer.succeed(
      SSMClientInstance,
      clientSubstitute,
    );
    const serviceLayer = Layer.provide(
      BaseSSMServiceLayer,
      clientInstanceLayer,
    );

    const result = await Config.string("test").pipe(
      Effect.withConfigProvider(fromParameterStore({ serviceLayer })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        ConfigError.MissingData(
          ["test"],
          "Expected test to exist in AWS Systems Manager Parameter Store",
        ),
      ),
    );
    clientSubstitute.received(1).send(Arg.any(), {});
  });
});
