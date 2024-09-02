# @effect-aws/client-iam

## Installation

```bash
npm install --save @effect-aws/client-iam
```

## Usage

With default IAMClient instance:

```typescript
import { IAMService, DefaultIAMServiceLayer } from "@effect-aws/client-iam";

const program = IAMService.createRole(args);

const result = pipe(
  program,
  Effect.provide(DefaultIAMServiceLayer),
  Effect.runPromise,
);
```

With custom IAMClient instance:

```typescript
import {
  IAMService,
  BaseIAMServiceLayer,
  IAMClientInstance,
} from "@effect-aws/client-iam";

const program = IAMService.createRole(args);

const IAMClientInstanceLayer = Layer.succeed(
  IAMClientInstance,
  new IAMClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseIAMServiceLayer),
  Effect.provide(IAMClientInstanceLayer),
  Effect.runPromise,
);
```

With custom IAMClient configuration:

```typescript
import {
  IAMService,
  BaseIAMServiceLayer,
  DefaultIAMClientConfigLayer,
  IAMClientInstance,
  IAMClientInstanceConfig,
} from "@effect-aws/client-iam";

const program = IAMService.createRole(args);

const IAMClientInstanceLayer = Layer.provide(
  Layer.effect(
    IAMClientInstance,
    IAMClientInstanceConfig.pipe(
      Effect.map(
        (config) => new IAMClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultIAMClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseIAMServiceLayer),
  Effect.provide(IAMClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultIAMClientConfigLayer` layer context and update the configuration...
