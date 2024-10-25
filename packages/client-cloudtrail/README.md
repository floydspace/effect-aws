# @effect-aws/client-cloudtrail

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudtrail?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudtrail)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudtrail)](https://www.npmjs.com/package/@effect-aws/client-cloudtrail)

## Installation

```bash
npm install --save @effect-aws/client-cloudtrail
```

## Usage

With default CloudTrailClient instance:

```typescript
import { CloudTrailService, DefaultCloudTrailServiceLayer } from "@effect-aws/client-cloudtrail";

const program = CloudTrailService.listTrails(args);

const result = pipe(
  program,
  Effect.provide(DefaultCloudTrailServiceLayer),
  Effect.runPromise,
);
```

With custom CloudTrailClient instance:

```typescript
import {
  CloudTrailService,
  BaseCloudTrailServiceLayer,
  CloudTrailClientInstance,
} from "@effect-aws/client-cloudtrail";

const program = CloudTrailService.listTrails(args);

const CloudTrailClientInstanceLayer = Layer.succeed(
  CloudTrailClientInstance,
  new CloudTrailClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudTrailServiceLayer),
  Effect.provide(CloudTrailClientInstanceLayer),
  Effect.runPromise,
);
```

With custom CloudTrailClient configuration:

```typescript
import {
  CloudTrailService,
  BaseCloudTrailServiceLayer,
  DefaultCloudTrailClientConfigLayer,
  CloudTrailClientInstance,
  CloudTrailClientInstanceConfig,
} from "@effect-aws/client-cloudtrail";

const program = CloudTrailService.listTrails(args);

const CloudTrailClientInstanceLayer = Layer.provide(
  Layer.effect(
    CloudTrailClientInstance,
    CloudTrailClientInstanceConfig.pipe(
      Effect.map(
        (config) => new CloudTrailClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultCloudTrailClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudTrailServiceLayer),
  Effect.provide(CloudTrailClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultCloudTrailClientConfigLayer` layer context and update the configuration...
