# @effect-aws/client-bedrock-runtime

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-bedrock-runtime?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-bedrock-runtime)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-bedrock-runtime)](https://www.npmjs.com/package/@effect-aws/client-bedrock-runtime)

## Installation

```bash
npm install --save @effect-aws/client-bedrock-runtime
```

## Usage

With default BedrockRuntimeClient instance:

```typescript
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";

const program = BedrockRuntime.invokeModel(args);

const result = pipe(
  program,
  Effect.provide(BedrockRuntime.defaultLayer),
  Effect.runPromise,
);
```

With custom BedrockRuntimeClient instance:

```typescript
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";

const program = BedrockRuntime.invokeModel(args);

const result = await pipe(
  program,
  Effect.provide(
    BedrockRuntime.baseLayer(() => new BedrockRuntimeClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom BedrockRuntimeClient configuration:

```typescript
import { BedrockRuntime } from "@effect-aws/client-bedrock-runtime";

const program = BedrockRuntime.invokeModel(args);

const result = await pipe(
  program,
  Effect.provide(BedrockRuntime.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `BedrockRuntime.baseLayer((default) => new BedrockRuntimeClient({ ...default, region: "eu-central-1" }))`
