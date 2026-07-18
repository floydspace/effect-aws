# @effect-aws/client-eks

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-eks?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-eks)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-eks)](https://www.npmjs.com/package/@effect-aws/client-eks)

## Installation

```bash
npm install --save @effect-aws/client-eks
```

## Usage

With default EKSClient instance:

```typescript
import { EKS } from "@effect-aws/client-eks";

const program = EKS.use((svc) => svc.listClusters(args));

const result = pipe(
  program,
  Effect.provide(EKS.defaultLayer),
  Effect.runPromise,
);
```

With custom EKSClient instance:

```typescript
import { EKS } from "@effect-aws/client-eks";

const program = EKS.use((svc) => svc.listClusters(args));

const result = await pipe(
  program,
  Effect.provide(
    EKS.baseLayer(() => new EKSClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom EKSClient configuration:

```typescript
import { EKS } from "@effect-aws/client-eks";

const program = EKS.use((svc) => svc.listClusters(args));

const result = await pipe(
  program,
  Effect.provide(EKS.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `EKS.baseLayer((default) => new EKSClient({ ...default, region: "eu-central-1" }))`
