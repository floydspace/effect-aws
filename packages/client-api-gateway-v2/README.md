# @effect-aws/client-api-gateway-v2

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-api-gateway-v2?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-api-gateway-v2)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-api-gateway-v2)](https://www.npmjs.com/package/@effect-aws/client-api-gateway-v2)

## Installation

```bash
npm install --save @effect-aws/client-api-gateway-v2
```

## Usage

With default ApiGatewayV2Client instance:

```typescript
import { ApiGatewayV2 } from "@effect-aws/client-api-gateway-v2";

const program = ApiGatewayV2.getApi(args);

const result = pipe(
  program,
  Effect.provide(ApiGatewayV2.defaultLayer),
  Effect.runPromise,
);
```

With custom ApiGatewayV2Client instance:

```typescript
import { ApiGatewayV2 } from "@effect-aws/client-api-gateway-v2";

const program = ApiGatewayV2.getApi(args);

const result = await pipe(
  program,
  Effect.provide(
    ApiGatewayV2.baseLayer(() => new ApiGatewayV2Client({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom ApiGatewayV2Client configuration:

```typescript
import { ApiGatewayV2 } from "@effect-aws/client-api-gateway-v2";

const program = ApiGatewayV2.getApi(args);

const result = await pipe(
  program,
  Effect.provide(ApiGatewayV2.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `ApiGatewayV2.baseLayer((default) => new ApiGatewayV2Client({ ...default, region: "eu-central-1" }))`
