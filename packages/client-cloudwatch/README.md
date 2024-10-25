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
import { CloudWatchService, DefaultCloudWatchServiceLayer } from "@effect-aws/client-cloudwatch";

const program = CloudWatchService.describeAlarms(args);

const result = pipe(
  program,
  Effect.provide(DefaultCloudWatchServiceLayer),
  Effect.runPromise,
);
```

With custom CloudWatchClient instance:

```typescript
import {
  CloudWatchService,
  BaseCloudWatchServiceLayer,
  CloudWatchClientInstance,
} from "@effect-aws/client-cloudwatch";

const program = CloudWatchService.describeAlarms(args);

const CloudWatchClientInstanceLayer = Layer.succeed(
  CloudWatchClientInstance,
  new CloudWatchClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudWatchServiceLayer),
  Effect.provide(CloudWatchClientInstanceLayer),
  Effect.runPromise,
);
```

With custom CloudWatchClient configuration:

```typescript
import {
  CloudWatchService,
  BaseCloudWatchServiceLayer,
  DefaultCloudWatchClientConfigLayer,
  CloudWatchClientInstance,
  CloudWatchClientInstanceConfig,
} from "@effect-aws/client-cloudwatch";

const program = CloudWatchService.describeAlarms(args);

const CloudWatchClientInstanceLayer = Layer.provide(
  Layer.effect(
    CloudWatchClientInstance,
    CloudWatchClientInstanceConfig.pipe(
      Effect.map(
        (config) => new CloudWatchClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultCloudWatchClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudWatchServiceLayer),
  Effect.provide(CloudWatchClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultCloudWatchClientConfigLayer` layer context and update the configuration...
