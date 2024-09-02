# @effect-aws/client-eventbridge

## Installation

```bash
npm install --save @effect-aws/client-eventbridge
```

## Usage

With default EventBridgeClient instance:

```typescript
import { EventBridgeService, DefaultEventBridgeServiceLayer } from "@effect-aws/client-eventbridge";

const program = EventBridgeService.putEvents(args);

const result = pipe(
  program,
  Effect.provide(DefaultEventBridgeServiceLayer),
  Effect.runPromise,
);
```

With custom EventBridgeClient instance:

```typescript
import {
  EventBridgeService,
  BaseEventBridgeServiceLayer,
  EventBridgeClientInstance,
} from "@effect-aws/client-eventbridge";

const program = EventBridgeService.putEvents(args);

const EventBridgeClientInstanceLayer = Layer.succeed(
  EventBridgeClientInstance,
  new EventBridgeClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseEventBridgeServiceLayer),
  Effect.provide(EventBridgeClientInstanceLayer),
  Effect.runPromise,
);
```

With custom EventBridgeClient configuration:

```typescript
import {
  EventBridgeService,
  BaseEventBridgeServiceLayer,
  DefaultEventBridgeClientConfigLayer,
  EventBridgeClientInstance,
  EventBridgeClientInstanceConfig,
} from "@effect-aws/client-eventbridge";

const program = EventBridgeService.putEvents(args);

const EventBridgeClientInstanceLayer = Layer.provide(
  Layer.effect(
    EventBridgeClientInstance,
    EventBridgeClientInstanceConfig.pipe(
      Effect.map(
        (config) => new EventBridgeClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultEventBridgeClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseEventBridgeServiceLayer),
  Effect.provide(EventBridgeClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultEventBridgeClientConfigLayer` layer context and update the configuration...
