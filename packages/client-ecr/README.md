# @effect-aws/client-ecr

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-ecr?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-ecr)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-ecr)](https://www.npmjs.com/package/@effect-aws/client-ecr)

## Installation

```bash
npm install --save @effect-aws/client-ecr
```

## Usage

With default ECRClient instance:

```typescript
import { ECR } from "@effect-aws/client-ecr";

const program = ECR.use((svc) => svc.describeRepositories(args));

const result = pipe(
  program,
  Effect.provide(ECR.defaultLayer),
  Effect.runPromise,
);
```

With custom ECRClient instance:

```typescript
import { ECR } from "@effect-aws/client-ecr";

const program = ECR.use((svc) => svc.describeRepositories(args));

const result = await pipe(
  program,
  Effect.provide(
    ECR.baseLayer(() => new ECRClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom ECRClient configuration:

```typescript
import { ECR } from "@effect-aws/client-ecr";

const program = ECR.use((svc) => svc.describeRepositories(args));

const result = await pipe(
  program,
  Effect.provide(ECR.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `ECR.baseLayer((default) => new ECRClient({ ...default, region: "eu-central-1" }))`
