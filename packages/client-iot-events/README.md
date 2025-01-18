# @effect-aws/client-iot-events

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-iot-events?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-iot-events)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-iot-events)](https://www.npmjs.com/package/@effect-aws/client-iot-events)

## Installation

```bash
npm install --save @effect-aws/client-iot-events
```

## Usage

With default IoTEventsClient instance:

```typescript
import { IoTEvents } from "@effect-aws/client-iot-events";

const program = IoTEvents.listInputs(args);

const result = pipe(
  program,
  Effect.provide(IoTEvents.defaultLayer),
  Effect.runPromise,
);
```

With custom IoTEventsClient instance:

```typescript
import { IoTEvents } from "@effect-aws/client-iot-events";

const program = IoTEvents.listInputs(args);

const result = await pipe(
  program,
  Effect.provide(
    IoTEvents.baseLayer(() => new IoTEventsClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IoTEventsClient configuration:

```typescript
import { IoTEvents } from "@effect-aws/client-iot-events";

const program = IoTEvents.listInputs(args);

const result = await pipe(
  program,
  Effect.provide(IoTEvents.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `IoTEvents.baseLayer((default) => new IoTEventsClient({ ...default, region: "eu-central-1" }))`
