---
"@effect-aws/powertools-logger": minor
---

refactor power tools logger

### Migration guide:

1. Replace the `DefaultPowerToolsLoggerLayer` with `Logger.defaultLayer`.

2. Replace the `PowerToolsLoggerLayer` with `Logger.layer`.

before:

```typescript
import {
  LoggerOptions,
  PowerToolsLoggerLayer
} from "@effect-aws/powertools-logger"
import { Layer } from "effect"

export const PowerToolsLoggerLive = Layer.provide(
  PowerToolsLoggerLayer,
  Layer.succeed(LoggerOptions, { serviceName: "my-service" })
)
```

after:

```typescript
import { Logger } from "@effect-aws/powertools-logger"

export const PowerToolsLoggerLive = Logger.layer({ serviceName: "my-service" })
```

3. Replace the `BasePowerToolsLoggerLayer` with `Logger.baseLayer`.

before:

```typescript
import { Logger } from "@aws-lambda-powertools/logger"
import {
  BasePowerToolsLoggerLayer,
  LoggerInstance
} from "@effect-aws/powertools-logger"
import * as Layer from "effect/Layer"

const serviceName = "my-service"

export const PowerToolsLoggerLive = BasePowerToolsLoggerLayer.pipe(
  Layer.provide(Layer.succeed(LoggerInstance, new Logger({ serviceName })))
)
```

after:

```typescript
import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger"
import { Logger } from "@effect-aws/powertools-logger"

const serviceName = "my-service"

export const PowerToolsLoggerLive = Logger.baseLayer(
  () => new LoggerCtor({ serviceName })
)
```
