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
import { Textract } from "@effect-aws/client-textract";

const program = Textract.listAdapters(args);

const result = pipe(
  program,
  Effect.provide(Textract.defaultLayer),
  Effect.runPromise,
);
```

With custom TextractClient instance:

```typescript
import { Textract } from "@effect-aws/client-textract";

const program = Textract.listAdapters(args);

const result = await pipe(
  program,
  Effect.provide(
    Textract.baseLayer(() => new TextractClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom TextractClient configuration:

```typescript
import { Textract } from "@effect-aws/client-textract";

const program = Textract.listAdapters(args);

const result = await pipe(
  program,
  Effect.provide(Textract.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Textract.baseLayer((default) => new TextractClient({ ...default, region: "eu-central-1" }))`
