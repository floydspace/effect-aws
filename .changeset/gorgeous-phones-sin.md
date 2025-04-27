---
"@effect-aws/lambda": minor
---

add an option to make lambda handler from platform httpApi, for instance

```ts
import { LambdaHandler } from "@effect-aws/lambda"
import { HttpApi, HttpApiBuilder, HttpServer } from "@effect/platform"
import { Layer } from "effect"

class MyApi extends HttpApi.make("api") {}

const MyApiLive = HttpApiBuilder.api(MyApi)

//              ┌─── Handler<LambdaEvent, LambdaResult>
//              ▼
export const handler = LambdaHandler.fromHttpApi(
  Layer.mergeAll(
    MyApiLive,
    // you could also use NodeHttpServer.layerContext, depending on your
    // server's platform
    HttpServer.layerContext
  )
)
```
