# @effect-aws/client-ssm

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-ssm?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-ssm)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-ssm)](https://www.npmjs.com/package/@effect-aws/client-ssm)

## Installation

```bash
npm install --save @effect-aws/client-ssm
```

## Usage

With default SSMClient instance:

```typescript
import { SSMService, DefaultSSMServiceLayer } from "@effect-aws/client-ssm";

const program = SSMService.describeParameters(args);

const result = pipe(
  program,
  Effect.provide(DefaultSSMServiceLayer),
  Effect.runPromise,
);
```

With custom SSMClient instance:

```typescript
import {
  SSMService,
  BaseSSMServiceLayer,
  SSMClientInstance,
} from "@effect-aws/client-ssm";

const program = SSMService.describeParameters(args);

const SSMClientInstanceLayer = Layer.succeed(
  SSMClientInstance,
  new SSMClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseSSMServiceLayer),
  Effect.provide(SSMClientInstanceLayer),
  Effect.runPromise,
);
```

With custom SSMClient configuration:

```typescript
import {
  SSMService,
  BaseSSMServiceLayer,
  DefaultSSMClientConfigLayer,
  SSMClientInstance,
  SSMClientInstanceConfig,
} from "@effect-aws/client-ssm";

const program = SSMService.describeParameters(args);

const SSMClientInstanceLayer = Layer.provide(
  Layer.effect(
    SSMClientInstance,
    SSMClientInstanceConfig.pipe(
      Effect.map(
        (config) => new SSMClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultSSMClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseSSMServiceLayer),
  Effect.provide(SSMClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultSSMClientConfigLayer` layer context and update the configuration...
