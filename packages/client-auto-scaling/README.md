# @effect-aws/client-auto-scaling

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-auto-scaling?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-auto-scaling)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-auto-scaling)](https://www.npmjs.com/package/@effect-aws/client-auto-scaling)

## Installation

```bash
npm install --save @effect-aws/client-auto-scaling
```

## Usage

With default AutoScalingClient instance:

```typescript
import { AutoScaling } from "@effect-aws/client-auto-scaling";

const program = AutoScaling.describeAutoScalingGroups(args);

const result = pipe(
  program,
  Effect.provide(AutoScaling.defaultLayer),
  Effect.runPromise,
);
```

With custom AutoScalingClient instance:

```typescript
import { AutoScaling } from "@effect-aws/client-auto-scaling";

const program = AutoScaling.describeAutoScalingGroups(args);

const result = await pipe(
  program,
  Effect.provide(
    AutoScaling.baseLayer(() => new AutoScalingClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom AutoScalingClient configuration:

```typescript
import { AutoScaling } from "@effect-aws/client-auto-scaling";

const program = AutoScaling.describeAutoScalingGroups(args);

const result = await pipe(
  program,
  Effect.provide(AutoScaling.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `AutoScaling.baseLayer((default) => new AutoScalingClient({ ...default, region: "eu-central-1" }))`
