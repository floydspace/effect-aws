# @effect-aws/client-bedrock-agentcore

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-bedrock-agentcore?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-bedrock-agentcore)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-bedrock-agentcore)](https://www.npmjs.com/package/@effect-aws/client-bedrock-agentcore)

## Installation

```bash
npm install --save @effect-aws/client-bedrock-agentcore
```

## Usage

With default BedrockAgentCoreClient instance:

```typescript
import { BedrockAgentCore } from "@effect-aws/client-bedrock-agentcore";

const program = BedrockAgentCore.use((svc) => svc.listSessions(args));

const result = pipe(
  program,
  Effect.provide(BedrockAgentCore.defaultLayer),
  Effect.runPromise,
);
```

With custom BedrockAgentCoreClient instance:

```typescript
import { BedrockAgentCore } from "@effect-aws/client-bedrock-agentcore";

const program = BedrockAgentCore.use((svc) => svc.listSessions(args));

const result = await pipe(
  program,
  Effect.provide(
    BedrockAgentCore.baseLayer(() => new BedrockAgentCoreClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom BedrockAgentCoreClient configuration:

```typescript
import { BedrockAgentCore } from "@effect-aws/client-bedrock-agentcore";

const program = BedrockAgentCore.use((svc) => svc.listSessions(args));

const result = await pipe(
  program,
  Effect.provide(BedrockAgentCore.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `BedrockAgentCore.baseLayer((default) => new BedrockAgentCoreClient({ ...default, region: "eu-central-1" }))`
