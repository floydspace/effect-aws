# @effect-aws/client-eventbridge

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-eventbridge?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-eventbridge)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-eventbridge)](https://www.npmjs.com/package/@effect-aws/client-eventbridge)

## Installation

```bash
npm install --save @effect-aws/client-eventbridge
```

## Usage

With default EventBridgeClient instance:

```typescript
import { EventBridge } from "@effect-aws/client-eventbridge";

const program = EventBridge.use((svc) => svc.putEvents(args));

const result = pipe(
  program,
  Effect.provide(EventBridge.defaultLayer),
  Effect.runPromise,
);
```

With custom EventBridgeClient instance:

```typescript
import { EventBridge } from "@effect-aws/client-eventbridge";

const program = EventBridge.use((svc) => svc.putEvents(args));

const result = await pipe(
  program,
  Effect.provide(
    EventBridge.baseLayer(() => new EventBridgeClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom EventBridgeClient configuration:

```typescript
import { EventBridge } from "@effect-aws/client-eventbridge";

const program = EventBridge.use((svc) => svc.putEvents(args));

const result = await pipe(
  program,
  Effect.provide(EventBridge.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `EventBridge.baseLayer((default) => new EventBridgeClient({ ...default, region: "eu-central-1" }))`
