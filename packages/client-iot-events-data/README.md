# @effect-aws/client-iot-events-data

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-iot-events-data?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-iot-events-data)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-iot-events-data)](https://www.npmjs.com/package/@effect-aws/client-iot-events-data)

## Installation

```bash
npm install --save @effect-aws/client-iot-events-data
```

## Usage

With default IoTEventsDataClient instance:

```typescript
import { IoTEventsData } from "@effect-aws/client-iot-events-data";

const program = IoTEventsData.use((svc) => svc.describeAlarm(args));

const result = pipe(
  program,
  Effect.provide(IoTEventsData.defaultLayer),
  Effect.runPromise,
);
```

With custom IoTEventsDataClient instance:

```typescript
import { IoTEventsData } from "@effect-aws/client-iot-events-data";

const program = IoTEventsData.use((svc) => svc.describeAlarm(args));

const result = await pipe(
  program,
  Effect.provide(
    IoTEventsData.baseLayer(() => new IoTEventsDataClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IoTEventsDataClient configuration:

```typescript
import { IoTEventsData } from "@effect-aws/client-iot-events-data";

const program = IoTEventsData.use((svc) => svc.describeAlarm(args));

const result = await pipe(
  program,
  Effect.provide(IoTEventsData.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `IoTEventsData.baseLayer((default) => new IoTEventsDataClient({ ...default, region: "eu-central-1" }))`
