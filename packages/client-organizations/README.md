# @effect-aws/client-organizations

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-organizations?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-organizations)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-organizations)](https://www.npmjs.com/package/@effect-aws/client-organizations)

## Installation

```bash
npm install --save @effect-aws/client-organizations
```

## Usage

With default OrganizationsClient instance:

```typescript
import { Organizations } from "@effect-aws/client-organizations";

const program = Organizations.use((svc) => svc.describeOrganization(args));

const result = pipe(
  program,
  Effect.provide(Organizations.defaultLayer),
  Effect.runPromise,
);
```

With custom OrganizationsClient instance:

```typescript
import { Organizations } from "@effect-aws/client-organizations";

const program = Organizations.use((svc) => svc.describeOrganization(args));

const result = await pipe(
  program,
  Effect.provide(
    Organizations.baseLayer(() => new OrganizationsClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom OrganizationsClient configuration:

```typescript
import { Organizations } from "@effect-aws/client-organizations";

const program = Organizations.use((svc) => svc.describeOrganization(args));

const result = await pipe(
  program,
  Effect.provide(Organizations.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Organizations.baseLayer((default) => new OrganizationsClient({ ...default, region: "eu-central-1" }))`
