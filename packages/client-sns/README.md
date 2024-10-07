# @effect-aws/client-sns

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-sns?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-sns)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-sns)](https://www.npmjs.com/package/@effect-aws/client-sns)

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
