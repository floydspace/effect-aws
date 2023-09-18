# @effect-aws/client-s3

## Installation

```bash
npm install --save @effect-aws/client-s3
```

## Usage

With default S3Client instance:

```typescript
import { DefaultS3ServiceEffect } from "@effect-aws/client-s3";

const program = Effect.flatMap(DefaultS3ServiceEffect, (s3) =>
  s3.headObject(args),
);

const result = pipe(program, Effect.runPromise);
```

With custom S3Client instance:

```typescript
import { S3ServiceEffect } from "@effect-aws/client-s3";

const program = Effect.flatMap(S3ServiceEffect, (s3) => s3.headObject(args));

const result = await pipe(
  program,
  Effect.provideService(
    S3ClientInstanceTag,
    new S3Client({ region: "eu-central-1" }),
  ),
  Effect.runPromise,
);
```
