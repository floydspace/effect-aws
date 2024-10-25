# @effect-aws/client-rds

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-rds?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-rds)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-rds)](https://www.npmjs.com/package/@effect-aws/client-rds)

## Installation

```bash
npm install --save @effect-aws/client-rds
```

## Usage

With default RDSClient instance:

```typescript
import { RDSService, DefaultRDSServiceLayer } from "@effect-aws/client-rds";

const program = RDSService.describeDBClusters(args);

const result = pipe(
  program,
  Effect.provide(DefaultRDSServiceLayer),
  Effect.runPromise,
);
```

With custom RDSClient instance:

```typescript
import {
  RDSService,
  BaseRDSServiceLayer,
  RDSClientInstance,
} from "@effect-aws/client-rds";

const program = RDSService.describeDBClusters(args);

const RDSClientInstanceLayer = Layer.succeed(
  RDSClientInstance,
  new RDSClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseRDSServiceLayer),
  Effect.provide(RDSClientInstanceLayer),
  Effect.runPromise,
);
```

With custom RDSClient configuration:

```typescript
import {
  RDSService,
  BaseRDSServiceLayer,
  DefaultRDSClientConfigLayer,
  RDSClientInstance,
  RDSClientInstanceConfig,
} from "@effect-aws/client-rds";

const program = RDSService.describeDBClusters(args);

const RDSClientInstanceLayer = Layer.provide(
  Layer.effect(
    RDSClientInstance,
    RDSClientInstanceConfig.pipe(
      Effect.map(
        (config) => new RDSClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultRDSClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseRDSServiceLayer),
  Effect.provide(RDSClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultRDSClientConfigLayer` layer context and update the configuration...
