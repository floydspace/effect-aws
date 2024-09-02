# @effect-aws/client-sns

## Installation

```bash
npm install --save @effect-aws/client-sns
```

## Usage

With default SNSClient instance:

```typescript
import { SNSService, DefaultSNSServiceLayer } from "@effect-aws/client-sns";

const program = SNSService.publish(args);

const result = pipe(
  program,
  Effect.provide(DefaultSNSServiceLayer),
  Effect.runPromise,
);
```

With custom SNSClient instance:

```typescript
import {
  SNSService,
  BaseSNSServiceLayer,
  SNSClientInstance,
} from "@effect-aws/client-sns";

const program = SNSService.publish(args);

const SNSClientInstanceLayer = Layer.succeed(
  SNSClientInstance,
  new SNSClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseSNSServiceLayer),
  Effect.provide(SNSClientInstanceLayer),
  Effect.runPromise,
);
```

With custom SNSClient configuration:

```typescript
import {
  SNSService,
  BaseSNSServiceLayer,
  DefaultSNSClientConfigLayer,
  SNSClientInstance,
  SNSClientInstanceConfig,
} from "@effect-aws/client-sns";

const program = SNSService.publish(args);

const SNSClientInstanceLayer = Layer.provide(
  Layer.effect(
    SNSClientInstance,
    SNSClientInstanceConfig.pipe(
      Effect.map(
        (config) => new SNSClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultSNSClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseSNSServiceLayer),
  Effect.provide(SNSClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultSNSClientConfigLayer` layer context and update the configuration...
