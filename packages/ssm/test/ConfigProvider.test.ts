import { InvalidKeyId, ParameterNotFound } from "@aws-sdk/client-ssm";
import { SSM } from "@effect-aws/client-ssm";
import { ConfigProvider } from "@effect-aws/ssm";
import { Arg } from "@fluffy-spoon/substitute";
import { Config, ConfigError, Effect, Exit, Layer, Redacted } from "effect";
import { describe, expect, it } from "vitest";
import { SubstituteBuilder } from "./utils/index.js";

describe("fromParameterStore", () => {
  it("should load configuration from AWS Systems Manager Parameter Store", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .withParameterValue("mocked-parameter")
      .succeeds();

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);

    const result = await Config.string("test").pipe(
      ConfigProvider.withParameterStoreConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed("mocked-parameter"));
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
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

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);
    const configProviderLayer = Layer.provide(ConfigProvider.setParameterStoreConfigProvider(), serviceLayer);

    const result = await Config.redacted("my-param-that-doesnt-exist").pipe(
      Config.withDefault(Redacted.make("mocked-default-value")),
      Effect.provide(configProviderLayer),
      Effect.map(Redacted.value),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed("mocked-default-value"));
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
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

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);

    const result = await Config.redacted("test").pipe(
      Config.withDefault(Redacted.make("mocked-default-value")),
      ConfigProvider.withParameterStoreConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.map(Redacted.value),
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
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
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

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);

    const result = await Config.string("test").pipe(
      ConfigProvider.withParameterStoreConfigProvider(),
      Effect.provide(serviceLayer),
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
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });

  it("should fail if the parameter is empty", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .succeeds();

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);

    const result = await Config.string("test").pipe(
      ConfigProvider.withParameterStoreConfigProvider(),
      Effect.provide(serviceLayer),
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
    clientSubstitute.received(1).send(Arg.any(), Arg.any());
  });
});
