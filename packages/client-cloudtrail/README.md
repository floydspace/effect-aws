# @effect-aws/client-cloudtrail

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudtrail?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudtrail)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudtrail)](https://www.npmjs.com/package/@effect-aws/client-cloudtrail)

## Installation

```bash
npm install --save @effect-aws/client-cloudtrail
```

## Usage

With default CloudTrailClient instance:

```typescript
import { CloudTrail } from "@effect-aws/client-cloudtrail";

const program = CloudTrail.use((svc) => svc.listTrails(args));

const result = pipe(
  program,
  Effect.provide(CloudTrail.defaultLayer),
  Effect.runPromise,
);
```

With custom CloudTrailClient instance:

```typescript
import { CloudTrail } from "@effect-aws/client-cloudtrail";

const program = CloudTrail.use((svc) => svc.listTrails(args));

const result = await pipe(
  program,
  Effect.provide(
    CloudTrail.baseLayer(() => new CloudTrailClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CloudTrailClient configuration:

```typescript
import { CloudTrail } from "@effect-aws/client-cloudtrail";

const program = CloudTrail.use((svc) => svc.listTrails(args));

const result = await pipe(
  program,
  Effect.provide(CloudTrail.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CloudTrail.baseLayer((default) => new CloudTrailClient({ ...default, region: "eu-central-1" }))`
