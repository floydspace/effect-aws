# @effect-aws/client-secrets-manager

## Installation

```bash
npm install --save @effect-aws/client-secrets-manager
```

## Usage

With default SecretsManagerClient instance:

```typescript
import {
  SecretsManagerService,
  DefaultSecretsManagerServiceLayer,
} from "@effect-aws/client-secrets-manager";

const program = SecretsManagerService.getSecretValue(args);

const result = pipe(
  program,
  Effect.provide(DefaultSecretsManagerServiceLayer),
  Effect.runPromise,
);
```

With custom SecretsManagerClient instance:

```typescript
import {
  SecretsManagerService,
  BaseSecretsManagerServiceLayer,
  SecretsManagerClientInstance,
} from "@effect-aws/client-secrets-manager";

const program = SecretsManagerService.getSecretValue(args);

const SecretsManagerClientInstanceLayer = Layer.succeed(
  SecretsManagerClientInstance,
  new SecretsManagerClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseSecretsManagerServiceLayer),
  Effect.provide(SecretsManagerClientInstanceLayer),
  Effect.runPromise,
);
```

With custom SecretsManagerClient configuration:

```typescript
import {
  SecretsManagerService,
  BaseSecretsManagerServiceLayer,
  DefaultSecretsManagerClientConfigLayer,
  SecretsManagerClientInstance,
  SecretsManagerClientInstanceConfig,
} from "@effect-aws/client-secrets-manager";

const program = SecretsManagerService.getSecretValue(args);

const SecretsManagerClientInstanceLayer = Layer.provide(
  Layer.effect(
    SecretsManagerClientInstance,
    SecretsManagerClientInstanceConfig.pipe(
      Effect.map(
        (config) =>
          new SecretsManagerClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultSecretsManagerClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseSecretsManagerServiceLayer),
  Effect.provide(SecretsManagerClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultSecretsManagerClientConfigLayer` layer context and update the configuration...
