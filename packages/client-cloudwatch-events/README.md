# @effect-aws/client-cloudwatch-events

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudwatch-events?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudwatch-events)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudwatch-events)](https://www.npmjs.com/package/@effect-aws/client-cloudwatch-events)

## Installation

```bash
npm install --save @effect-aws/client-cloudwatch-events
```

## Usage

With default CloudWatchEventsClient instance:

```typescript
import { CloudWatchEvents } from "@effect-aws/client-cloudwatch-events";

const program = CloudWatchEvents.use((svc) => svc.listRules(args));

const result = pipe(
  program,
  Effect.provide(CloudWatchEvents.defaultLayer),
  Effect.runPromise,
);
```

With custom CloudWatchEventsClient instance:

```typescript
import { CloudWatchEvents } from "@effect-aws/client-cloudwatch-events";

const program = CloudWatchEvents.use((svc) => svc.listRules(args));

const result = await pipe(
  program,
  Effect.provide(
    CloudWatchEvents.baseLayer(() => new CloudWatchEventsClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CloudWatchEventsClient configuration:

```typescript
import { CloudWatchEvents } from "@effect-aws/client-cloudwatch-events";

const program = CloudWatchEvents.use((svc) => svc.listRules(args));

const result = await pipe(
  program,
  Effect.provide(CloudWatchEvents.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CloudWatchEvents.baseLayer((default) => new CloudWatchEventsClient({ ...default, region: "eu-central-1" }))`
