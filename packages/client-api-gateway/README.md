# @effect-aws/client-api-gateway

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-api-gateway?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-api-gateway)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-api-gateway)](https://www.npmjs.com/package/@effect-aws/client-api-gateway)

## Installation

```bash
npm install --save @effect-aws/client-api-gateway
```

## Usage

With default APIGatewayClient instance:

```typescript
import { APIGateway } from "@effect-aws/client-api-gateway";

const program = APIGateway.getApiKey(args);

const result = pipe(
  program,
  Effect.provide(APIGateway.defaultLayer),
  Effect.runPromise,
);
```

With custom APIGatewayClient instance:

```typescript
import { APIGateway } from "@effect-aws/client-api-gateway";

const program = APIGateway.getApiKey(args);

const result = await pipe(
  program,
  Effect.provide(
    APIGateway.baseLayer(() => new APIGatewayClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom APIGatewayClient configuration:

```typescript
import { APIGateway } from "@effect-aws/client-api-gateway";

const program = APIGateway.getApiKey(args);

const result = await pipe(
  program,
  Effect.provide(APIGateway.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `APIGateway.baseLayer((default) => new APIGatewayClient({ ...default, region: "eu-central-1" }))`
