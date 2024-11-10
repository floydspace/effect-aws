# @effect-aws/client-cloudwatch-logs

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudwatch-logs?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudwatch-logs)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudwatch-logs)](https://www.npmjs.com/package/@effect-aws/client-cloudwatch-logs)

## Installation

```bash
npm install --save @effect-aws/client-cloudwatch-logs
```

## Usage

With default CloudWatchLogsClient instance:

```typescript
import { CloudWatchLogs } from "@effect-aws/client-cloudwatch-logs";

const program = CloudWatchLogs.describeLogGroups(args);

const result = pipe(
  program,
  Effect.provide(CloudWatchLogs.defaultLayer),
  Effect.runPromise,
);
```

With custom CloudWatchLogsClient instance:

```typescript
import { CloudWatchLogs } from "@effect-aws/client-cloudwatch-logs";

const program = CloudWatchLogs.describeLogGroups(args);

const result = await pipe(
  program,
  Effect.provide(
    CloudWatchLogs.baseLayer(() => new CloudWatchLogsClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CloudWatchLogsClient configuration:

```typescript
import { CloudWatchLogs } from "@effect-aws/client-cloudwatch-logs";

const program = CloudWatchLogs.describeLogGroups(args);

const result = await pipe(
  program,
  Effect.provide(CloudWatchLogs.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CloudWatchLogs.baseLayer((default) => new CloudWatchLogsClient({ ...default, region: "eu-central-1" }))`
