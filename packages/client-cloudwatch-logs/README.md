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
import { CloudWatchLogsService, DefaultCloudWatchLogsServiceLayer } from "@effect-aws/client-cloudwatch-logs";

const program = CloudWatchLogsService.describeLogGroups(args);

const result = pipe(
  program,
  Effect.provide(DefaultCloudWatchLogsServiceLayer),
  Effect.runPromise,
);
```

With custom CloudWatchLogsClient instance:

```typescript
import {
  CloudWatchLogsService,
  BaseCloudWatchLogsServiceLayer,
  CloudWatchLogsClientInstance,
} from "@effect-aws/client-cloudwatch-logs";

const program = CloudWatchLogsService.describeLogGroups(args);

const CloudWatchLogsClientInstanceLayer = Layer.succeed(
  CloudWatchLogsClientInstance,
  new CloudWatchLogsClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudWatchLogsServiceLayer),
  Effect.provide(CloudWatchLogsClientInstanceLayer),
  Effect.runPromise,
);
```

With custom CloudWatchLogsClient configuration:

```typescript
import {
  CloudWatchLogsService,
  BaseCloudWatchLogsServiceLayer,
  DefaultCloudWatchLogsClientConfigLayer,
  CloudWatchLogsClientInstance,
  CloudWatchLogsClientInstanceConfig,
} from "@effect-aws/client-cloudwatch-logs";

const program = CloudWatchLogsService.describeLogGroups(args);

const CloudWatchLogsClientInstanceLayer = Layer.provide(
  Layer.effect(
    CloudWatchLogsClientInstance,
    CloudWatchLogsClientInstanceConfig.pipe(
      Effect.map(
        (config) => new CloudWatchLogsClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultCloudWatchLogsClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudWatchLogsServiceLayer),
  Effect.provide(CloudWatchLogsClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultCloudWatchLogsClientConfigLayer` layer context and update the configuration...
