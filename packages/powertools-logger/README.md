# @effect-aws/powertools-logger

## Installation

```bash
npm install --save @effect-aws/powertools-logger @aws-lambda-powertools/logger@^1
```

## Usage

```typescript
import { PowerToolsDefaultLoggerLayer } from "@effect-aws/powertools-logger";

const result = pipe(
  program,
  Effect.provideLayer(PowerToolsDefaultLoggerLayer),
  Effect.runPromise,
);
```
