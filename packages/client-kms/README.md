# @effect-aws/client-kms

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-kms?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-kms)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-kms)](https://www.npmjs.com/package/@effect-aws/client-kms)

## Installation

```bash
npm install --save @effect-aws/client-kms
```

## Usage

With default KMSClient instance:

```typescript
import { KMSService, DefaultKMSServiceLayer } from "@effect-aws/client-kms";

const program = KMSService.listKeys(args);

const result = pipe(
  program,
  Effect.provide(DefaultKMSServiceLayer),
  Effect.runPromise,
);
```

With custom KMSClient instance:

```typescript
import {
  KMSService,
  BaseKMSServiceLayer,
  KMSClientInstance,
} from "@effect-aws/client-kms";

const program = KMSService.listKeys(args);

const KMSClientInstanceLayer = Layer.succeed(
  KMSClientInstance,
  new KMSClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseKMSServiceLayer),
  Effect.provide(KMSClientInstanceLayer),
  Effect.runPromise,
);
```

With custom KMSClient configuration:

```typescript
import {
  KMSService,
  BaseKMSServiceLayer,
  DefaultKMSClientConfigLayer,
  KMSClientInstance,
  KMSClientInstanceConfig,
} from "@effect-aws/client-kms";

const program = KMSService.listKeys(args);

const KMSClientInstanceLayer = Layer.provide(
  Layer.effect(
    KMSClientInstance,
    KMSClientInstanceConfig.pipe(
      Effect.map(
        (config) => new KMSClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultKMSClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseKMSServiceLayer),
  Effect.provide(KMSClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultKMSClientConfigLayer` layer context and update the configuration...
