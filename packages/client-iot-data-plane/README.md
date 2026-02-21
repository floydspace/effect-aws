# @effect-aws/client-iot-data-plane

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-iot-data-plane?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-iot-data-plane)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-iot-data-plane)](https://www.npmjs.com/package/@effect-aws/client-iot-data-plane)

## Installation

```bash
npm install --save @effect-aws/client-iot-data-plane
```

## Usage

With default IoTDataPlaneClient instance:

```typescript
import { IoTDataPlane } from "@effect-aws/client-iot-data-plane";

const program = IoTDataPlane.use((svc) => svc.publish(args));

const result = pipe(
  program,
  Effect.provide(IoTDataPlane.defaultLayer),
  Effect.runPromise,
);
```

With custom IoTDataPlaneClient instance:

```typescript
import { IoTDataPlane } from "@effect-aws/client-iot-data-plane";

const program = IoTDataPlane.use((svc) => svc.publish(args));

const result = await pipe(
  program,
  Effect.provide(
    IoTDataPlane.baseLayer(() => new IoTDataPlaneClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IoTDataPlaneClient configuration:

```typescript
import { IoTDataPlane } from "@effect-aws/client-iot-data-plane";

const program = IoTDataPlane.use((svc) => svc.publish(args));

const result = await pipe(
  program,
  Effect.provide(IoTDataPlane.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `IoTDataPlane.baseLayer((default) => new IoTDataPlaneClient({ ...default, region: "eu-central-1" }))`
