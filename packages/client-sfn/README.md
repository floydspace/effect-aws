# @effect-aws/client-sfn

## Installation

```bash
npm install --save @effect-aws/client-sfn
```

## Usage

With default SFNClient instance:

```typescript
import { SFNService, DefaultSFNServiceLayer } from "@effect-aws/client-sfn";

const program = SFNService.startExecution(args);

const result = pipe(
  program,
  Effect.provide(DefaultSFNServiceLayer),
  Effect.runPromise,
);
```

With custom SFNClient instance:

```typescript
import {
  SFNService,
  BaseSFNServiceLayer,
  SFNClientInstance,
} from "@effect-aws/client-sfn";

const program = SFNService.startExecution(args);

const SFNClientInstanceLayer = Layer.succeed(
  SFNClientInstance,
  new SFNClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseSFNServiceLayer),
  Effect.provide(SFNClientInstanceLayer),
  Effect.runPromise,
);
```

With custom SFNClient configuration:

```typescript
import {
  SFNService,
  BaseSFNServiceLayer,
  DefaultSFNClientConfigLayer,
  SFNClientInstance,
  SFNClientInstanceConfig,
} from "@effect-aws/client-sfn";

const program = SFNService.startExecution(args);

const SFNClientInstanceLayer = Layer.provide(
  Layer.effect(
    SFNClientInstance,
    SFNClientInstanceConfig.pipe(
      Effect.map(
        (config) => new SFNClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultSFNClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseSFNServiceLayer),
  Effect.provide(SFNClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultSFNClientConfigLayer` layer context and update the configuration...
