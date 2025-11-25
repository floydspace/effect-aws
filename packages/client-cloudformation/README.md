# @effect-aws/client-cloudformation

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudformation?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudformation)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudformation)](https://www.npmjs.com/package/@effect-aws/client-cloudformation)

## Installation

```bash
npm install --save @effect-aws/client-cloudformation
```

## Usage

With default CloudFormationClient instance:

```typescript
import { CloudFormation } from "@effect-aws/client-cloudformation";

const program = CloudFormation.listStacks(args);

const result = pipe(
  program,
  Effect.provide(CloudFormation.defaultLayer),
  Effect.runPromise,
);
```

With custom CloudFormationClient instance:

```typescript
import { CloudFormation } from "@effect-aws/client-cloudformation";

const program = CloudFormation.listStacks(args);

const result = await pipe(
  program,
  Effect.provide(
    CloudFormation.baseLayer(() => new CloudFormationClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CloudFormationClient configuration:

```typescript
import { CloudFormation } from "@effect-aws/client-cloudformation";

const program = CloudFormation.listStacks(args);

const result = await pipe(
  program,
  Effect.provide(CloudFormation.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CloudFormation.baseLayer((default) => new CloudFormationClient({ ...default, region: "eu-central-1" }))`
