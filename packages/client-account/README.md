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
import { Account } from "@effect-aws/client-account";

const program = Account.use((svc) => svc.listRegions(args));

const result = pipe(
  program,
  Effect.provide(Account.defaultLayer),
  Effect.runPromise,
);
```

With custom AccountClient instance:

```typescript
import { Account } from "@effect-aws/client-account";

const program = Account.use((svc) => svc.listRegions(args));

const result = await pipe(
  program,
  Effect.provide(
    Account.baseLayer(() => new AccountClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom AccountClient configuration:

```typescript
import { Account } from "@effect-aws/client-account";

const program = Account.use((svc) => svc.listRegions(args));

const result = await pipe(
  program,
  Effect.provide(Account.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Account.baseLayer((default) => new AccountClient({ ...default, region: "eu-central-1" }))`
