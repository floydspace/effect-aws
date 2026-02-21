# @effect-aws/client-ivs

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-ivs?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-ivs)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-ivs)](https://www.npmjs.com/package/@effect-aws/client-ivs)

## Installation

```bash
npm install --save @effect-aws/client-ivs
```

## Usage

With default IvsClient instance:

```typescript
import { Ivs } from "@effect-aws/client-ivs";

const program = Ivs.use((svc) => svc.listChannels(args));

const result = pipe(
  program,
  Effect.provide(Ivs.defaultLayer),
  Effect.runPromise,
);
```

With custom IvsClient instance:

```typescript
import { Ivs } from "@effect-aws/client-ivs";

const program = Ivs.use((svc) => svc.listChannels(args));

const result = await pipe(
  program,
  Effect.provide(
    Ivs.baseLayer(() => new IvsClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IvsClient configuration:

```typescript
import { Ivs } from "@effect-aws/client-ivs";

const program = Ivs.use((svc) => svc.listChannels(args));

const result = await pipe(
  program,
  Effect.provide(Ivs.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Ivs.baseLayer((default) => new IvsClient({ ...default, region: "eu-central-1" }))`
