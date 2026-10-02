# @effect-aws/client-secrets-manager

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-secrets-manager?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-secrets-manager)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-secrets-manager)](https://www.npmjs.com/package/@effect-aws/client-secrets-manager)

## Installation

```bash
npm install --save @effect-aws/client-secrets-manager
```

## Usage

With default SecretsManagerClient instance:

```typescript
import { SecretsManager } from "@effect-aws/client-secrets-manager";

const program = SecretsManager.use((svc) => svc.getSecretValue(args));

const result = pipe(
  program,
  Effect.provide(SecretsManager.defaultLayer),
  Effect.runPromise,
);
```

With custom SecretsManagerClient instance:

```typescript
import { SecretsManager } from "@effect-aws/client-secrets-manager";

const program = SecretsManager.use((svc) => svc.getSecretValue(args));

const result = await pipe(
  program,
  Effect.provide(
    SecretsManager.baseLayer(() => new SecretsManagerClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom SecretsManagerClient configuration:

```typescript
import { SecretsManager } from "@effect-aws/client-secrets-manager";

const program = SecretsManager.use((svc) => svc.getSecretValue(args));

const result = await pipe(
  program,
  Effect.provide(SecretsManager.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `SecretsManager.baseLayer((default) => new SecretsManagerClient({ ...default, region: "eu-central-1" }))`
