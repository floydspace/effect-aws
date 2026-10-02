import { InvalidKeyId, ParameterNotFound } from "@aws-sdk/client-ssm";
import { SSM } from "@effect-aws/client-ssm";
import { ConfigProvider } from "@effect-aws/ssm";
import { Arg } from "@fluffy-spoon/substitute";
import * as Config from "effect/Config";
import { SourceError } from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import { SubstituteBuilder } from "./utils/index.js";

describe("fromParameterStore", () => {
  it("should load configuration from AWS Systems Manager Parameter Store", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .withParameterValue("mocked-parameter")
      .succeeds();

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);

    const result = await Config.String("test").pipe(
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

    const result = await Config.Redacted("my-param-that-doesnt-exist").pipe(
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
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .failsWith(
        new InvalidKeyId({
          $metadata: {},
          message: "mocked-error",
        }),
      );

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);

    const result = await Config.Redacted("test").pipe(
      Config.withDefault(Redacted.make("mocked-default-value")),
    ).pipe(
      ConfigProvider.withParameterStoreConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.map(Redacted.value),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        new Config.ConfigError(
          new SourceError(
            {
              message: "Invalid key ID when retrieving configuration from AWS Systems Manager Parameter Store",
              cause: new InvalidKeyId({
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

    const result = await Config.String("test").pipe(
      ConfigProvider.withParameterStoreConfigProvider(),
      Effect.provide(serviceLayer),
      Effect.runPromiseExit,
    );

    // `Config.String`'s decode failure carries a schema AST built internally
    // by `Config`'s (non-exported) cursor-decoding machinery, reconstructed
    // above as `configStringAst`.
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

  it("should fail if the parameter is empty", async () => {
    const clientSubstitute = SubstituteBuilder.forSSM()
      .mockGetParameter()
      .succeeds();

    const serviceLayer = SSM.baseLayer(() => clientSubstitute);

    const result = await Config.String("test").pipe(
      ConfigProvider.withParameterStoreConfigProvider(),
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
