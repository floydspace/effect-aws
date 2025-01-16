# @effect-aws/client-ses

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-ses?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-ses)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-ses)](https://www.npmjs.com/package/@effect-aws/client-ses)

## Installation

```bash
npm install --save @effect-aws/client-ses
```

## Usage

With default SESClient instance:

```typescript
import { SES } from "@effect-aws/client-ses";

const program = SES.sendEmail(args);

const result = pipe(
  program,
  Effect.provide(SES.defaultLayer),
  Effect.runPromise,
);
```

With custom SESClient instance:

```typescript
import { SES } from "@effect-aws/client-ses";

const program = SES.sendEmail(args);

const result = await pipe(
  program,
  Effect.provide(
    SES.baseLayer(() => new SESClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom SESClient configuration:

```typescript
import { SES } from "@effect-aws/client-ses";

const program = SES.sendEmail(args);

const result = await pipe(
  program,
  Effect.provide(SES.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `SES.baseLayer((default) => new SESClient({ ...default, region: "eu-central-1" }))`
