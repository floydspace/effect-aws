# @effect-aws/client-iot

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-iot?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-iot)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-iot)](https://www.npmjs.com/package/@effect-aws/client-iot)

## Installation

```bash
npm install --save @effect-aws/client-iot
```

## Usage

With default IoTClient instance:

```typescript
import { IoT } from "@effect-aws/client-iot";

const program = IoT.describeJob(args);

const result = pipe(
  program,
  Effect.provide(IoT.defaultLayer),
  Effect.runPromise,
);
```

With custom IoTClient instance:

```typescript
import { IoT } from "@effect-aws/client-iot";

const program = IoT.describeJob(args);

const result = await pipe(
  program,
  Effect.provide(
    IoT.baseLayer(() => new IoTClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IoTClient configuration:

```typescript
import { IoT } from "@effect-aws/client-iot";

const program = IoT.describeJob(args);

const result = await pipe(
  program,
  Effect.provide(IoT.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `IoT.baseLayer((default) => new IoTClient({ ...default, region: "eu-central-1" }))`
