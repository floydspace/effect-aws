# @effect-aws/client-bedrock

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-bedrock?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-bedrock)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-bedrock)](https://www.npmjs.com/package/@effect-aws/client-bedrock)

## Installation

```bash
npm install --save @effect-aws/client-bedrock
```

## Usage

With default BedrockClient instance:

```typescript
import { Bedrock } from "@effect-aws/client-bedrock";

const program = Bedrock.use((svc) => svc.listCustomModels(args));

const result = pipe(
  program,
  Effect.provide(Bedrock.defaultLayer),
  Effect.runPromise,
);
```

With custom BedrockClient instance:

```typescript
import { Bedrock } from "@effect-aws/client-bedrock";

const program = Bedrock.use((svc) => svc.listCustomModels(args));

const result = await pipe(
  program,
  Effect.provide(
    Bedrock.baseLayer(() => new BedrockClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom BedrockClient configuration:

```typescript
import { Bedrock } from "@effect-aws/client-bedrock";

const program = Bedrock.use((svc) => svc.listCustomModels(args));

const result = await pipe(
  program,
  Effect.provide(Bedrock.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Bedrock.baseLayer((default) => new BedrockClient({ ...default, region: "eu-central-1" }))`
