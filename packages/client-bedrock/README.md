# @effect-aws/client-bedrock

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-bedrock?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-bedrock)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-bedrock)](https://www.npmjs.com/package/@effect-aws/client-bedrock)

## Installation

```bash
npm install --save @effect-aws/client-bedrock
```

## Usage

With default BedrockClient instance:

```typescript
import { BedrockService, DefaultBedrockServiceLayer } from "@effect-aws/client-bedrock";

const program = BedrockService.listCustomModels(args);

const result = pipe(
  program,
  Effect.provide(DefaultBedrockServiceLayer),
  Effect.runPromise,
);
```

With custom BedrockClient instance:

```typescript
import {
  BedrockService,
  BaseBedrockServiceLayer,
  BedrockClientInstance,
} from "@effect-aws/client-bedrock";

const program = BedrockService.listCustomModels(args);

const BedrockClientInstanceLayer = Layer.succeed(
  BedrockClientInstance,
  new BedrockClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseBedrockServiceLayer),
  Effect.provide(BedrockClientInstanceLayer),
  Effect.runPromise,
);
```

With custom BedrockClient configuration:

```typescript
import {
  BedrockService,
  BaseBedrockServiceLayer,
  DefaultBedrockClientConfigLayer,
  BedrockClientInstance,
  BedrockClientInstanceConfig,
} from "@effect-aws/client-bedrock";

const program = BedrockService.listCustomModels(args);

const BedrockClientInstanceLayer = Layer.provide(
  Layer.effect(
    BedrockClientInstance,
    BedrockClientInstanceConfig.pipe(
      Effect.map(
        (config) => new BedrockClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultBedrockClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseBedrockServiceLayer),
  Effect.provide(BedrockClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultBedrockClientConfigLayer` layer context and update the configuration...
