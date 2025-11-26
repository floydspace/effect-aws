# @effect-aws/client-data-pipeline

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-data-pipeline?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-data-pipeline)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-data-pipeline)](https://www.npmjs.com/package/@effect-aws/client-data-pipeline)

## Installation

```bash
npm install --save @effect-aws/client-data-pipeline
```

## Usage

With default DataPipelineClient instance:

```typescript
import { DataPipeline } from "@effect-aws/client-data-pipeline";

const program = DataPipeline.listPipelines(args);

const result = pipe(
  program,
  Effect.provide(DataPipeline.defaultLayer),
  Effect.runPromise,
);
```

With custom DataPipelineClient instance:

```typescript
import { DataPipeline } from "@effect-aws/client-data-pipeline";

const program = DataPipeline.listPipelines(args);

const result = await pipe(
  program,
  Effect.provide(
    DataPipeline.baseLayer(() => new DataPipelineClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom DataPipelineClient configuration:

```typescript
import { DataPipeline } from "@effect-aws/client-data-pipeline";

const program = DataPipeline.listPipelines(args);

const result = await pipe(
  program,
  Effect.provide(DataPipeline.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `DataPipeline.baseLayer((default) => new DataPipelineClient({ ...default, region: "eu-central-1" }))`
