# @effect-aws/client-iot-jobs-data-plane

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-iot-jobs-data-plane?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-iot-jobs-data-plane)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-iot-jobs-data-plane)](https://www.npmjs.com/package/@effect-aws/client-iot-jobs-data-plane)

## Installation

```bash
npm install --save @effect-aws/client-iot-jobs-data-plane
```

## Usage

With default IoTJobsDataPlaneClient instance:

```typescript
import { IoTJobsDataPlane } from "@effect-aws/client-iot-jobs-data-plane";

const program = IoTJobsDataPlane.startCommandExecution(args);

const result = pipe(
  program,
  Effect.provide(IoTJobsDataPlane.defaultLayer),
  Effect.runPromise,
);
```

With custom IoTJobsDataPlaneClient instance:

```typescript
import { IoTJobsDataPlane } from "@effect-aws/client-iot-jobs-data-plane";

const program = IoTJobsDataPlane.startCommandExecution(args);

const result = await pipe(
  program,
  Effect.provide(
    IoTJobsDataPlane.baseLayer(() => new IoTJobsDataPlaneClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IoTJobsDataPlaneClient configuration:

```typescript
import { IoTJobsDataPlane } from "@effect-aws/client-iot-jobs-data-plane";

const program = IoTJobsDataPlane.startCommandExecution(args);

const result = await pipe(
  program,
  Effect.provide(IoTJobsDataPlane.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `IoTJobsDataPlane.baseLayer((default) => new IoTJobsDataPlaneClient({ ...default, region: "eu-central-1" }))`
