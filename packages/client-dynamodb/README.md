# @effect-aws/client-dynamodb

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-dynamodb?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-dynamodb)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-dynamodb)](https://www.npmjs.com/package/@effect-aws/client-dynamodb)

## Installation

```bash
npm install --save @effect-aws/client-dynamodb
```

## Usage

With default DynamoDBClient instance:

```typescript
import {
  DynamoDBService,
  DefaultDynamoDBServiceLayer,
} from "@effect-aws/client-dynamodb";

const program = DynamoDBService.putItem(args);

const result = pipe(
  program,
  Effect.provide(DefaultDynamoDBServiceLayer),
  Effect.runPromise,
);
```

With custom DynamoDBClient instance:

```typescript
import {
  DynamoDBService,
  BaseDynamoDBServiceLayer,
  DynamoDBClientInstance,
} from "@effect-aws/client-dynamodb";

const program = DynamoDBService.putItem(args);

const DynamoDBClientInstanceLayer = Layer.succeed(
  DynamoDBClientInstance,
  new DynamoDBClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseDynamoDBServiceLayer),
  Effect.provide(DynamoDBClientInstanceLayer),
  Effect.runPromise,
);
```

With custom DynamoDBClient configuration:

```typescript
import {
  DynamoDBService,
  BaseDynamoDBServiceLayer,
  DefaultDynamoDBClientConfigLayer,
  DynamoDBClientInstance,
  DynamoDBClientInstanceConfig,
} from "@effect-aws/client-dynamodb";

const program = DynamoDBService.putItem(args);

const DynamoDBClientInstanceLayer = Layer.provide(
  Layer.effect(
    DynamoDBClientInstance,
    DynamoDBClientInstanceConfig.pipe(
      Effect.map(
        (config) => new DynamoDBClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultDynamoDBClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseDynamoDBServiceLayer),
  Effect.provide(DynamoDBClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultDynamoDBClientConfigLayer` layer context and update the configuration...
