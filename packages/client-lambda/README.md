# @effect-aws/client-lambda

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-lambda?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-lambda)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-lambda)](https://www.npmjs.com/package/@effect-aws/client-lambda)

## Installation

```bash
npm install --save @effect-aws/client-lambda
```

## Usage

With default LambdaClient instance:

```typescript
import {
  LambdaService,
  DefaultLambdaServiceLayer,
} from "@effect-aws/client-lambda";

const program = LambdaService.invoke(args);

const result = pipe(
  program,
  Effect.provide(DefaultLambdaServiceLayer),
  Effect.runPromise,
);
```

With custom LambdaClient instance:

```typescript
import {
  LambdaService,
  BaseLambdaServiceLayer,
  LambdaClientInstance,
} from "@effect-aws/client-lambda";

const program = LambdaService.invoke(args);

const LambdaClientInstanceLayer = Layer.succeed(
  LambdaClientInstance,
  new LambdaClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseLambdaServiceLayer),
  Effect.provide(LambdaClientInstanceLayer),
  Effect.runPromise,
);
```

With custom LambdaClient configuration:

```typescript
import {
  LambdaService,
  BaseLambdaServiceLayer,
  DefaultLambdaClientConfigLayer,
  LambdaClientInstance,
  LambdaClientInstanceConfig,
} from "@effect-aws/client-lambda";

const program = LambdaService.invoke(args);

const LambdaClientInstanceLayer = Layer.provide(
  Layer.effect(
    LambdaClientInstance,
    LambdaClientInstanceConfig.pipe(
      Effect.map(
        (config) => new LambdaClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultLambdaClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseLambdaServiceLayer),
  Effect.provide(LambdaClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultLambdaClientConfigLayer` layer context and update the configuration...
