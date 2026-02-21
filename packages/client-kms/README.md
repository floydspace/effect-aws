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
import { KMS } from "@effect-aws/client-kms";

const program = KMS.use((svc) => svc.listKeys(args));

const result = pipe(
  program,
  Effect.provide(KMS.defaultLayer),
  Effect.runPromise,
);
```

With custom KMSClient instance:

```typescript
import { KMS } from "@effect-aws/client-kms";

const program = KMS.use((svc) => svc.listKeys(args));

const result = await pipe(
  program,
  Effect.provide(
    KMS.baseLayer(() => new KMSClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom KMSClient configuration:

```typescript
import { KMS } from "@effect-aws/client-kms";

const program = KMS.use((svc) => svc.listKeys(args));

const result = await pipe(
  program,
  Effect.provide(KMS.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `KMS.baseLayer((default) => new KMSClient({ ...default, region: "eu-central-1" }))`
