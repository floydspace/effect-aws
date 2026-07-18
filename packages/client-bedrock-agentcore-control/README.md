# @effect-aws/client-bedrock-agentcore-control

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-bedrock-agentcore-control?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-bedrock-agentcore-control)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-bedrock-agentcore-control)](https://www.npmjs.com/package/@effect-aws/client-bedrock-agentcore-control)

## Installation

```bash
npm install --save @effect-aws/client-bedrock-agentcore-control
```

## Usage

With default BedrockAgentCoreControlClient instance:

```typescript
import { BedrockAgentCoreControl } from "@effect-aws/client-bedrock-agentcore-control";

const program = BedrockAgentCoreControl.use((svc) => svc.listAgentRuntimes(args));

const result = pipe(
  program,
  Effect.provide(BedrockAgentCoreControl.defaultLayer),
  Effect.runPromise,
);
```

With custom BedrockAgentCoreControlClient instance:

```typescript
import { BedrockAgentCoreControl } from "@effect-aws/client-bedrock-agentcore-control";

const program = BedrockAgentCoreControl.use((svc) => svc.listAgentRuntimes(args));

const result = await pipe(
  program,
  Effect.provide(
    BedrockAgentCoreControl.baseLayer(() => new BedrockAgentCoreControlClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom BedrockAgentCoreControlClient configuration:

```typescript
import { BedrockAgentCoreControl } from "@effect-aws/client-bedrock-agentcore-control";

const program = BedrockAgentCoreControl.use((svc) => svc.listAgentRuntimes(args));

const result = await pipe(
  program,
  Effect.provide(BedrockAgentCoreControl.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `BedrockAgentCoreControl.baseLayer((default) => new BedrockAgentCoreControlClient({ ...default, region: "eu-central-1" }))`
