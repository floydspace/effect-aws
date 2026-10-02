# @effect-aws/client-cloudwatch

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudwatch?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudwatch)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudwatch)](https://www.npmjs.com/package/@effect-aws/client-cloudwatch)

## Installation

```bash
npm install --save @effect-aws/client-cloudwatch
```

## Usage

With default CloudWatchClient instance:

```typescript
import { CloudWatch } from "@effect-aws/client-cloudwatch";

const program = CloudWatch.use((svc) => svc.describeAlarms(args));

const result = pipe(
  program,
  Effect.provide(CloudWatch.defaultLayer),
  Effect.runPromise,
);
```

With custom CloudWatchClient instance:

```typescript
import { CloudWatch } from "@effect-aws/client-cloudwatch";

const program = CloudWatch.use((svc) => svc.describeAlarms(args));

const result = await pipe(
  program,
  Effect.provide(
    CloudWatch.baseLayer(() => new CloudWatchClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CloudWatchClient configuration:

```typescript
import { CloudWatch } from "@effect-aws/client-cloudwatch";

const program = CloudWatch.use((svc) => svc.describeAlarms(args));

const result = await pipe(
  program,
  Effect.provide(CloudWatch.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CloudWatch.baseLayer((default) => new CloudWatchClient({ ...default, region: "eu-central-1" }))`
