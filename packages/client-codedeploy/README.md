# @effect-aws/client-codedeploy

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-codedeploy?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-codedeploy)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-codedeploy)](https://www.npmjs.com/package/@effect-aws/client-codedeploy)

## Installation

```bash
npm install --save @effect-aws/client-codedeploy
```

## Usage

With default CodeDeployClient instance:

```typescript
import { CodeDeploy } from "@effect-aws/client-codedeploy";

const program = CodeDeploy.use((svc) => svc.listApplications(args));

const result = pipe(
  program,
  Effect.provide(CodeDeploy.defaultLayer),
  Effect.runPromise,
);
```

With custom CodeDeployClient instance:

```typescript
import { CodeDeploy } from "@effect-aws/client-codedeploy";

const program = CodeDeploy.use((svc) => svc.listApplications(args));

const result = await pipe(
  program,
  Effect.provide(
    CodeDeploy.baseLayer(() => new CodeDeployClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CodeDeployClient configuration:

```typescript
import { CodeDeploy } from "@effect-aws/client-codedeploy";

const program = CodeDeploy.use((svc) => svc.listApplications(args));

const result = await pipe(
  program,
  Effect.provide(CodeDeploy.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CodeDeploy.baseLayer((default) => new CodeDeployClient({ ...default, region: "eu-central-1" }))`
