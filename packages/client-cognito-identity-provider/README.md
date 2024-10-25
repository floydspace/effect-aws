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
import { CognitoIdentityProviderService, DefaultCognitoIdentityProviderServiceLayer } from "@effect-aws/client-cognito-identity-provider";

const program = CognitoIdentityProviderService.listUserPools(args);

const result = pipe(
  program,
  Effect.provide(DefaultCognitoIdentityProviderServiceLayer),
  Effect.runPromise,
);
```

With custom CognitoIdentityProviderClient instance:

```typescript
import {
  CognitoIdentityProviderService,
  BaseCognitoIdentityProviderServiceLayer,
  CognitoIdentityProviderClientInstance,
} from "@effect-aws/client-cognito-identity-provider";

const program = CognitoIdentityProviderService.listUserPools(args);

const CognitoIdentityProviderClientInstanceLayer = Layer.succeed(
  CognitoIdentityProviderClientInstance,
  new CognitoIdentityProviderClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseCognitoIdentityProviderServiceLayer),
  Effect.provide(CognitoIdentityProviderClientInstanceLayer),
  Effect.runPromise,
);
```

With custom CognitoIdentityProviderClient configuration:

```typescript
import {
  CognitoIdentityProviderService,
  BaseCognitoIdentityProviderServiceLayer,
  DefaultCognitoIdentityProviderClientConfigLayer,
  CognitoIdentityProviderClientInstance,
  CognitoIdentityProviderClientInstanceConfig,
} from "@effect-aws/client-cognito-identity-provider";

const program = CognitoIdentityProviderService.listUserPools(args);

const CognitoIdentityProviderClientInstanceLayer = Layer.provide(
  Layer.effect(
    CognitoIdentityProviderClientInstance,
    CognitoIdentityProviderClientInstanceConfig.pipe(
      Effect.map(
        (config) => new CognitoIdentityProviderClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultCognitoIdentityProviderClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseCognitoIdentityProviderServiceLayer),
  Effect.provide(CognitoIdentityProviderClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultCognitoIdentityProviderClientConfigLayer` layer context and update the configuration...
