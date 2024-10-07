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
import { S3Service, DefaultS3ServiceLayer } from "@effect-aws/client-s3";

const program = Effect.flatMap(S3Service, (s3) => s3.headObject(args));

const result = pipe(
  program,
  Effect.provide(DefaultS3ServiceLayer),
  Effect.runPromise,
);
```

With custom S3Client instance:

```typescript
import {
  S3Service,
  BaseS3ServiceLayer,
  S3ClientInstance,
} from "@effect-aws/client-s3";

const program = Effect.flatMap(S3Service, (s3) => s3.headObject(args));

const S3ClientInstanceLayer = Layer.succeed(
  S3ClientInstance,
  new S3Client({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseS3ServiceLayer),
  Effect.provide(S3ClientInstanceLayer),
  Effect.runPromise,
);
```

With custom S3Client configuration:

```typescript
import {
  S3Service,
  BaseS3ServiceLayer,
  DefaultS3ClientConfigLayer,
  S3ClientInstance,
  S3ClientInstanceConfig,
} from "@effect-aws/client-s3";

const program = Effect.flatMap(S3Service, (s3) => s3.headObject(args));

const S3ClientInstanceLayer = Layer.provide(
  Layer.effect(
    S3ClientInstance,
    S3ClientInstanceConfig.pipe(
      Effect.map(
        (config) => new S3Client({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultS3ClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseS3ServiceLayer),
  Effect.provide(S3ClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultS3ClientConfigLayer` layer context and update the configuration...
