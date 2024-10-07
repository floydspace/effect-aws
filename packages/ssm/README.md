# @effect-aws/ssm

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fssm?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/ssm)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fssm)](https://www.npmjs.com/package/@effect-aws/ssm)

This package provides a `fromParameterStore` [ConfigProvider](https://effect.website/docs/guides/configuration) constructor function.
You can use it to read parameters from AWS Systems Manager Parameter Store as a `Config` schema.

The config primitive name must match the parameter Name or ARN in Parameter Store.
For example, `Config.string("my_parameter_name")` or `Config.string("arn:aws:ssm:eu-central-1:123456789012:parameter/my_parameter_name")`.

## Installation

```bash
npm install --save @effect-aws/ssm @effect-aws/client-ssm
```

## Usage

With default service layer:

```typescript
import { Effect, Config, Console } from "effect";
import { fromParameterStore } from "@effect-aws/ssm";

const program = Effect.gen(function* () {
  const param: string = yield* Config.string("my_parameter_name");

  yield* Console.log("Parameter from Parameter Store: ", param);
});

program.pipe(
  Effect.provide(Layer.setConfigProvider(fromParameterStore())),
  Effect.runPromise,
);
```

With custom service layer:

```typescript
import { Effect, Config, Console, Layer } from "effect";
import { SSMClient } from "@aws-sdk/client-ssm";
import { BaseSSMServiceLayer, SSMClientInstance } from "@effect-aws/client-ssm";
import { fromParameterStore } from "@effect-aws/ssm";

const program = Effect.gen(function* () {
  const param: string = yield* Config.string("my_parameter_name");

  yield* Console.log("Parameter from Parameter Store: ", param);
});

const SSMClientInstanceLayer = Layer.succeed(
  SSMClientInstance,
  new SSMClient({ region: "eu-central-1" }),
);

const serviceLayer = Layer.provide(BaseSSMServiceLayer, SSMClientInstanceLayer);

program.pipe(
  Effect.withConfigProvider(fromParameterStore({ serviceLayer })),
  Effect.runPromise,
);
```
