# @effect-aws/client-bedrock-agent

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-bedrock-agent?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-bedrock-agent)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-bedrock-agent)](https://www.npmjs.com/package/@effect-aws/client-bedrock-agent)

## Installation

```bash
npm install --save @effect-aws/client-bedrock-agent
```

## Usage

With default BedrockAgentClient instance:

```typescript
import { BedrockAgent } from "@effect-aws/client-bedrock-agent";

const program = BedrockAgent.use((svc) => svc.listAgents(args));

const result = pipe(
  program,
  Effect.provide(BedrockAgent.defaultLayer),
  Effect.runPromise,
);
```

With custom BedrockAgentClient instance:

```typescript
import { BedrockAgent } from "@effect-aws/client-bedrock-agent";

const program = BedrockAgent.use((svc) => svc.listAgents(args));

const result = await pipe(
  program,
  Effect.provide(
    BedrockAgent.baseLayer(() => new BedrockAgentClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom BedrockAgentClient configuration:

```typescript
import { BedrockAgent } from "@effect-aws/client-bedrock-agent";

const program = BedrockAgent.use((svc) => svc.listAgents(args));

const result = await pipe(
  program,
  Effect.provide(BedrockAgent.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `BedrockAgent.baseLayer((default) => new BedrockAgentClient({ ...default, region: "eu-central-1" }))`
