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
import {
  ApiGatewayManagementApiService,
  DefaultApiGatewayManagementApiServiceLayer,
} from "@effect-aws/client-api-gateway-management-api";

const program = ApiGatewayManagementApiService.postToConnection(args);

const result = pipe(
  program,
  Effect.provide(DefaultApiGatewayManagementApiServiceLayer),
  Effect.runPromise,
);
```

With custom ApiGatewayManagementApiClient instance:

```typescript
import {
  ApiGatewayManagementApiService,
  BaseApiGatewayManagementApiServiceLayer,
  ApiGatewayManagementApiClientInstance,
} from "@effect-aws/client-api-gateway-management-api";

const program = ApiGatewayManagementApiService.postToConnection(args);

const ApiGatewayManagementApiClientInstanceLayer = Layer.succeed(
  ApiGatewayManagementApiClientInstance,
  new ApiGatewayManagementApiClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseApiGatewayManagementApiServiceLayer),
  Effect.provide(ApiGatewayManagementApiClientInstanceLayer),
  Effect.runPromise,
);
```

With custom ApiGatewayManagementApiClient configuration:

```typescript
import {
  ApiGatewayManagementApiService,
  ApiGatewayManagementApiServiceLayer,
  ApiGatewayManagementApiClientInstanceConfig,
} from "@effect-aws/client-api-gateway-management-api";

const program = ApiGatewayManagementApiService.postToConnection(args);

const CustomApiGatewayManagementApiServiceLayer = Layer.provide(
  ApiGatewayManagementApiServiceLayer,
  Layer.succeed(ApiGatewayManagementApiClientInstanceConfig, {
    endpoint: `https://domain/path`,
  }),
);

const result = await pipe(
  program,
  Effect.provide(CustomApiGatewayManagementApiServiceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultApiGatewayManagementApiClientConfigLayer` layer context and update the configuration...
