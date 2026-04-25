# @effect-aws/client-cloudfront

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudfront?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudfront)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudfront)](https://www.npmjs.com/package/@effect-aws/client-cloudfront)

## Installation

```bash
npm install --save @effect-aws/client-cloudfront
```

## Usage

With default CloudFrontClient instance:

```typescript
import { CloudFront } from "@effect-aws/client-cloudfront";

const program = CloudFront.listCachePolicies(args);

const result = pipe(
  program,
  Effect.provide(CloudFront.defaultLayer),
  Effect.runPromise,
);
```

With custom CloudFrontClient instance:

```typescript
import { CloudFront } from "@effect-aws/client-cloudfront";

const program = CloudFront.listCachePolicies(args);

const result = await pipe(
  program,
  Effect.provide(
    CloudFront.baseLayer(() => new CloudFrontClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CloudFrontClient configuration:

```typescript
import { CloudFront } from "@effect-aws/client-cloudfront";

const program = CloudFront.listCachePolicies(args);

const result = await pipe(
  program,
  Effect.provide(CloudFront.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CloudFront.baseLayer((default) => new CloudFrontClient({ ...default, region: "eu-central-1" }))`
