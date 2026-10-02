# @effect-aws/client-resource-groups-tagging-api

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-resource-groups-tagging-api?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-resource-groups-tagging-api)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-resource-groups-tagging-api)](https://www.npmjs.com/package/@effect-aws/client-resource-groups-tagging-api)

## Installation

```bash
npm install --save @effect-aws/client-resource-groups-tagging-api
```

## Usage

With default ResourceGroupsTaggingAPIClient instance:

```typescript
import { ResourceGroupsTaggingAPI } from "@effect-aws/client-resource-groups-tagging-api";

const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

const result = pipe(
  program,
  Effect.provide(ResourceGroupsTaggingAPI.defaultLayer),
  Effect.runPromise,
);
```

With custom ResourceGroupsTaggingAPIClient instance:

```typescript
import { ResourceGroupsTaggingAPI } from "@effect-aws/client-resource-groups-tagging-api";

const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

const result = await pipe(
  program,
  Effect.provide(
    ResourceGroupsTaggingAPI.baseLayer(() => new ResourceGroupsTaggingAPIClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom ResourceGroupsTaggingAPIClient configuration:

```typescript
import { ResourceGroupsTaggingAPI } from "@effect-aws/client-resource-groups-tagging-api";

const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

const result = await pipe(
  program,
  Effect.provide(ResourceGroupsTaggingAPI.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `ResourceGroupsTaggingAPI.baseLayer((default) => new ResourceGroupsTaggingAPIClient({ ...default, region: "eu-central-1" }))`
