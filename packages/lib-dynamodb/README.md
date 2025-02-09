# @effect-aws/lib-dynamodb

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Flib-dynamodb?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/lib-dynamodb)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Flib-dynamodb)](https://www.npmjs.com/package/@effect-aws/lib-dynamodb)

## Installation

```bash
npm install --save @effect-aws/lib-dynamodb
```

## Usage

With default DynamoDBClient instance:

```typescript
import { DynamoDBDocument } from "@effect-aws/lib-dynamodb"

const program = DynamoDBDocument.put(args)

const result = pipe(
  program,
  Effect.provide(DynamoDBDocument.defaultLayer),
  Effect.runPromise
)
```

With custom DynamoDBClient instance:

```typescript
import { DynamoDBDocument } from "@effect-aws/lib-dynamodb"

const program = DynamoDBDocument.put(args)

const result = await pipe(
  program,
  Effect.provide(
    DynamoDBDocumentClient.from(
      new DynamoDBClient({ region: "eu-central-1" }),
      { marshallOptions: { removeUndefinedValues: true } }
    )
  ),
  Effect.runPromise
)
```

With custom DynamoDBClient configuration:

```typescript
import { DynamoDBDocument } from "@effect-aws/lib-dynamodb"

const program = DynamoDBDocument.put(args)

const result = await pipe(
  program,
  Effect.provide(
    DynamoDBDocument.layer({
      marshallOptions: { removeUndefinedValues: true }
    })
  ),
  Effect.runPromiseExit
)
```

or use `DynamoDBDocument.baseLayer((default) => DynamoDBDocumentClient.from(new DynamoDBClient({ ...default, region: "eu-central-1" }), { marshallOptions: { removeUndefinedValues: true } }))`
