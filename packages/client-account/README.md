# @effect-aws/client-account

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-account?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-account)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-account)](https://www.npmjs.com/package/@effect-aws/client-account)

## Installation

```bash
npm install --save @effect-aws/client-account
```

## Usage

With default AccountClient instance:

```typescript
import { AccountService, DefaultAccountServiceLayer } from "@effect-aws/client-account";

const program = AccountService.listRegions(args);

const result = pipe(
  program,
  Effect.provide(DefaultAccountServiceLayer),
  Effect.runPromise,
);
```

With custom AccountClient instance:

```typescript
import {
  AccountService,
  BaseAccountServiceLayer,
  AccountClientInstance,
} from "@effect-aws/client-account";

const program = AccountService.listRegions(args);

const AccountClientInstanceLayer = Layer.succeed(
  AccountClientInstance,
  new AccountClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseAccountServiceLayer),
  Effect.provide(AccountClientInstanceLayer),
  Effect.runPromise,
);
```

With custom AccountClient configuration:

```typescript
import {
  AccountService,
  BaseAccountServiceLayer,
  DefaultAccountClientConfigLayer,
  AccountClientInstance,
  AccountClientInstanceConfig,
} from "@effect-aws/client-account";

const program = AccountService.listRegions(args);

const AccountClientInstanceLayer = Layer.provide(
  Layer.effect(
    AccountClientInstance,
    AccountClientInstanceConfig.pipe(
      Effect.map(
        (config) => new AccountClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultAccountClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseAccountServiceLayer),
  Effect.provide(AccountClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultAccountClientConfigLayer` layer context and update the configuration...
