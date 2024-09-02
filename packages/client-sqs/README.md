# @effect-aws/client-sqs

## Installation

```bash
npm install --save @effect-aws/client-sqs
```

## Usage

With default SQSClient instance:

```typescript
import { SQSService, DefaultSQSServiceLayer } from "@effect-aws/client-sqs";

const program = SQSService.sendMessage(args);

const result = pipe(
  program,
  Effect.provide(DefaultSQSServiceLayer),
  Effect.runPromise,
);
```

With custom SQSClient instance:

```typescript
import {
  SQSService,
  BaseSQSServiceLayer,
  SQSClientInstance,
} from "@effect-aws/client-sqs";

const program = SQSService.sendMessage(args);

const SQSClientInstanceLayer = Layer.succeed(
  SQSClientInstance,
  new SQSClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseSQSServiceLayer),
  Effect.provide(SQSClientInstanceLayer),
  Effect.runPromise,
);
```

With custom SQSClient configuration:

```typescript
import {
  SQSService,
  BaseSQSServiceLayer,
  DefaultSQSClientConfigLayer,
  SQSClientInstance,
  SQSClientInstanceConfig,
} from "@effect-aws/client-sqs";

const program = SQSService.sendMessage(args);

const SQSClientInstanceLayer = Layer.provide(
  Layer.effect(
    SQSClientInstance,
    SQSClientInstanceConfig.pipe(
      Effect.map(
        (config) => new SQSClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultSQSClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseSQSServiceLayer),
  Effect.provide(SQSClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultSQSClientConfigLayer` layer context and update the configuration...
