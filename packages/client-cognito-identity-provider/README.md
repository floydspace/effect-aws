# @effect-aws/client-cognito-identity-provider

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cognito-identity-provider?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cognito-identity-provider)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cognito-identity-provider)](https://www.npmjs.com/package/@effect-aws/client-cognito-identity-provider)

## Installation

```bash
npm install --save @effect-aws/client-cognito-identity-provider
```

## Usage

With default CognitoIdentityProviderClient instance:

```typescript
import { CognitoIdentityProvider } from "@effect-aws/client-cognito-identity-provider";

const program = CognitoIdentityProvider.listUserPools(args);

const result = pipe(
  program,
  Effect.provide(CognitoIdentityProvider.defaultLayer),
  Effect.runPromise,
);
```

With custom CognitoIdentityProviderClient instance:

```typescript
import { CognitoIdentityProvider } from "@effect-aws/client-cognito-identity-provider";

const program = CognitoIdentityProvider.listUserPools(args);

const result = await pipe(
  program,
  Effect.provide(
    CognitoIdentityProvider.baseLayer(() => new CognitoIdentityProviderClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CognitoIdentityProviderClient configuration:

```typescript
import { CognitoIdentityProvider } from "@effect-aws/client-cognito-identity-provider";

const program = CognitoIdentityProvider.listUserPools(args);

const result = await pipe(
  program,
  Effect.provide(CognitoIdentityProvider.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CognitoIdentityProvider.baseLayer((default) => new CognitoIdentityProviderClient({ ...default, region: "eu-central-1" }))`
