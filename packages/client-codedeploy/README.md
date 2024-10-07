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
import {
  CodeDeployService,
  DefaultCodeDeployServiceLayer,
} from "@effect-aws/client-codedeploy";

const program = CodeDeployService.listApplications(args);

const result = pipe(
  program,
  Effect.provide(DefaultCodeDeployServiceLayer),
  Effect.runPromise,
);
```

With custom CodeDeployClient instance:

```typescript
import {
  CodeDeployService,
  BaseCodeDeployServiceLayer,
  CodeDeployClientInstance,
} from "@effect-aws/client-codedeploy";

const program = CodeDeployService.listApplications(args);

const CodeDeployClientInstanceLayer = Layer.succeed(
  CodeDeployClientInstance,
  new CodeDeployClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseCodeDeployServiceLayer),
  Effect.provide(CodeDeployClientInstanceLayer),
  Effect.runPromise,
);
```

With custom CodeDeployClient configuration:

```typescript
import {
  CodeDeployService,
  BaseCodeDeployServiceLayer,
  DefaultCodeDeployClientConfigLayer,
  CodeDeployClientInstance,
  CodeDeployClientInstanceConfig,
} from "@effect-aws/client-codedeploy";

const program = CodeDeployService.listApplications(args);

const CodeDeployClientInstanceLayer = Layer.provide(
  Layer.effect(
    CodeDeployClientInstance,
    CodeDeployClientInstanceConfig.pipe(
      Effect.map(
        (config) => new CodeDeployClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultCodeDeployClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseCodeDeployServiceLayer),
  Effect.provide(CodeDeployClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultCodeDeployClientConfigLayer` layer context and update the configuration...
