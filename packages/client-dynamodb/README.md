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
import { DynamoDB } from "@effect-aws/client-dynamodb";

const program = DynamoDB.putItem(args);

const result = pipe(
  program,
  Effect.provide(DynamoDB.defaultLayer),
  Effect.runPromise,
);
```

With custom DynamoDBClient instance:

```typescript
import { DynamoDB } from "@effect-aws/client-dynamodb";

const program = DynamoDB.putItem(args);

const result = await pipe(
  program,
  Effect.provide(
    DynamoDB.baseLayer(() => new DynamoDBClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom DynamoDBClient configuration:

```typescript
import { DynamoDB } from "@effect-aws/client-dynamodb";

const program = DynamoDB.putItem(args);

const result = await pipe(
  program,
  Effect.provide(DynamoDB.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `DynamoDB.baseLayer((default) => new DynamoDBClient({ ...default, region: "eu-central-1" }))`
