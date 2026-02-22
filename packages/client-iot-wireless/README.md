# @effect-aws/client-iot-wireless

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-iot-wireless?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-iot-wireless)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-iot-wireless)](https://www.npmjs.com/package/@effect-aws/client-iot-wireless)

## Installation

```bash
npm install --save @effect-aws/client-iot-wireless
```

## Usage

With default IoTWirelessClient instance:

```typescript
import { IoTWireless } from "@effect-aws/client-iot-wireless";

const program = IoTWireless.use((svc) => svc.listDestinations(args));

const result = pipe(
  program,
  Effect.provide(IoTWireless.defaultLayer),
  Effect.runPromise,
);
```

With custom IoTWirelessClient instance:

```typescript
import { IoTWireless } from "@effect-aws/client-iot-wireless";

const program = IoTWireless.use((svc) => svc.listDestinations(args));

const result = await pipe(
  program,
  Effect.provide(
    IoTWireless.baseLayer(() => new IoTWirelessClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IoTWirelessClient configuration:

```typescript
import { IoTWireless } from "@effect-aws/client-iot-wireless";

const program = IoTWireless.use((svc) => svc.listDestinations(args));

const result = await pipe(
  program,
  Effect.provide(IoTWireless.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `IoTWireless.baseLayer((default) => new IoTWirelessClient({ ...default, region: "eu-central-1" }))`
