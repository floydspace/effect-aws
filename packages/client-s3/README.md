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
import {
  BaseS3ServiceEffect,
  S3ClientInstanceTag,
} from "@effect-aws/client-s3";

const program = Effect.flatMap(BaseS3ServiceEffect, (s3) =>
  s3.headObject(args),
);

const S3ClientInstanceLayer = Layer.succeed(
  S3ClientInstanceTag,
  new S3Client({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provideLayer(S3ClientInstanceLayer),
  Effect.runPromise,
);
```

With custom S3Client configuration:

```typescript
import {
  BaseS3ServiceEffect,
  DefaultS3ClientConfigLayer,
  S3ClientInstanceTag,
  S3ClientConfigTag,
} from "@effect-aws/client-s3";

const program = Effect.flatMap(BaseS3ServiceEffect, (s3) =>
  s3.headObject(args),
);

const S3ClientInstanceLayer = Layer.provide(
  DefaultS3ClientConfigLayer,
  Layer.effect(
    S3ClientInstanceTag,
    S3ClientConfigTag.pipe(
      Effect.map(
        (config) => new S3Client({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
);

const result = await pipe(
  program,
  Effect.provideLayer(S3ClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultS3ClientConfigLayer` layer context and update the configuration...
