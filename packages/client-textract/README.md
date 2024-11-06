# @effect-aws/client-textract

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-textract?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-textract)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-textract)](https://www.npmjs.com/package/@effect-aws/client-textract)

## Installation

```bash
npm install --save @effect-aws/client-textract
```

## Usage

With default TextractClient instance:

```typescript
import { TextractService, DefaultTextractServiceLayer } from "@effect-aws/client-textract";

const program = TextractService.listAdapters(args);

const result = pipe(
  program,
  Effect.provide(DefaultTextractServiceLayer),
  Effect.runPromise,
);
```

With custom TextractClient instance:

```typescript
import {
  TextractService,
  BaseTextractServiceLayer,
  TextractClientInstance,
} from "@effect-aws/client-textract";

const program = TextractService.listAdapters(args);

const TextractClientInstanceLayer = Layer.succeed(
  TextractClientInstance,
  new TextractClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseTextractServiceLayer),
  Effect.provide(TextractClientInstanceLayer),
  Effect.runPromise,
);
```

With custom TextractClient configuration:

```typescript
import {
  TextractService,
  BaseTextractServiceLayer,
  DefaultTextractClientConfigLayer,
  TextractClientInstance,
  TextractClientInstanceConfig,
} from "@effect-aws/client-textract";

const program = TextractService.listAdapters(args);

const TextractClientInstanceLayer = Layer.provide(
  Layer.effect(
    TextractClientInstance,
    TextractClientInstanceConfig.pipe(
      Effect.map(
        (config) => new TextractClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultTextractClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseTextractServiceLayer),
  Effect.provide(TextractClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultTextractClientConfigLayer` layer context and update the configuration...
