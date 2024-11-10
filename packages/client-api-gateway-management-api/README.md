# @effect-aws/client-api-gateway-management-api

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-api-gateway-management-api?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-api-gateway-management-api)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-api-gateway-management-api)](https://www.npmjs.com/package/@effect-aws/client-api-gateway-management-api)

## Installation

```bash
npm install --save @effect-aws/client-api-gateway-management-api
```

## Usage

With default ApiGatewayManagementApiClient instance:

```typescript
import { ApiGatewayManagementApi } from "@effect-aws/client-api-gateway-management-api";

const program = ApiGatewayManagementApi.postToConnection(args);

const result = pipe(
  program,
  Effect.provide(ApiGatewayManagementApi.defaultLayer),
  Effect.runPromise,
);
```

With custom ApiGatewayManagementApiClient instance:

```typescript
import { ApiGatewayManagementApi } from "@effect-aws/client-api-gateway-management-api";

const program = ApiGatewayManagementApi.postToConnection(args);

const result = await pipe(
  program,
  Effect.provide(
    ApiGatewayManagementApi.baseLayer(() => new ApiGatewayManagementApiClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom ApiGatewayManagementApiClient configuration:

```typescript
import { ApiGatewayManagementApi } from "@effect-aws/client-api-gateway-management-api";

const program = ApiGatewayManagementApi.postToConnection(args);

const result = await pipe(
  program,
  Effect.provide(ApiGatewayManagementApi.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `ApiGatewayManagementApi.baseLayer((default) => new ApiGatewayManagementApiClient({ ...default, region: "eu-central-1" }))`
