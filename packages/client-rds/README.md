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
import { RDS } from "@effect-aws/client-rds";

const program = RDS.use((svc) => svc.describeDBClusters(args));

const result = pipe(
  program,
  Effect.provide(RDS.defaultLayer),
  Effect.runPromise,
);
```

With custom RDSClient instance:

```typescript
import { RDS } from "@effect-aws/client-rds";

const program = RDS.use((svc) => svc.describeDBClusters(args));

const result = await pipe(
  program,
  Effect.provide(
    RDS.baseLayer(() => new RDSClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom RDSClient configuration:

```typescript
import { RDS } from "@effect-aws/client-rds";

const program = RDS.use((svc) => svc.describeDBClusters(args));

const result = await pipe(
  program,
  Effect.provide(RDS.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `RDS.baseLayer((default) => new RDSClient({ ...default, region: "eu-central-1" }))`
