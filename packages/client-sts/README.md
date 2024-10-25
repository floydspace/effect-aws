# @effect-aws/client-sts

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-sts?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-sts)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-sts)](https://www.npmjs.com/package/@effect-aws/client-sts)

## Installation

```bash
npm install --save @effect-aws/client-sts
```

## Usage

With default STSClient instance:

```typescript
import { STSService, DefaultSTSServiceLayer } from "@effect-aws/client-sts";

const program = STSService.getCallerIdentity(args);

const result = pipe(
  program,
  Effect.provide(DefaultSTSServiceLayer),
  Effect.runPromise,
);
```

With custom STSClient instance:

```typescript
import {
  STSService,
  BaseSTSServiceLayer,
  STSClientInstance,
} from "@effect-aws/client-sts";

const program = STSService.getCallerIdentity(args);

const STSClientInstanceLayer = Layer.succeed(
  STSClientInstance,
  new STSClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseSTSServiceLayer),
  Effect.provide(STSClientInstanceLayer),
  Effect.runPromise,
);
```

With custom STSClient configuration:

```typescript
import {
  STSService,
  BaseSTSServiceLayer,
  DefaultSTSClientConfigLayer,
  STSClientInstance,
  STSClientInstanceConfig,
} from "@effect-aws/client-sts";

const program = STSService.getCallerIdentity(args);

const STSClientInstanceLayer = Layer.provide(
  Layer.effect(
    STSClientInstance,
    STSClientInstanceConfig.pipe(
      Effect.map(
        (config) => new STSClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultSTSClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseSTSServiceLayer),
  Effect.provide(STSClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultSTSClientConfigLayer` layer context and update the configuration...
