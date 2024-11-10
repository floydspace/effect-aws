# @effect-aws/client-s3

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-s3?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-s3)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-s3)](https://www.npmjs.com/package/@effect-aws/client-s3)

## Installation

```bash
npm install --save @effect-aws/client-s3
```

## Usage

With default S3Client instance:

```typescript
import { S3 } from "@effect-aws/client-s3";

const program = S3.headObject(args);

const result = pipe(
  program,
  Effect.provide(S3.defaultLayer),
  Effect.runPromise,
);
```

With custom S3Client instance:

```typescript
import { S3 } from "@effect-aws/client-s3";

const program = S3.headObject(args);

const result = await pipe(
  program,
  Effect.provide(
    S3.baseLayer(() => new S3Client({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom S3Client configuration:

```typescript
import { S3 } from "@effect-aws/client-s3";

const program = S3.headObject(args);

const result = await pipe(
  program,
  Effect.provide(S3.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `S3.baseLayer((default) => new S3Client({ ...default, region: "eu-central-1" }))`
