---
"@effect-aws/lambda": minor
---

Implement streaming lambda handler

### Usage

```ts
import { LambdaHandler, StreamHandler } from "@effect-aws/lambda"
import { NodeStream } from "@effect/platform-node"
import type { LambdaFunctionURLEvent } from "aws-lambda"
import { Cause, Stream } from "effect"
import { createGzip } from "node:zlib"

/**
 * Streaming handler that takes a Lambda Function URL event, compresses it using gzip and
 * returns the compressed data as a stream.
 */
const streamHandler: StreamHandler<
  LambdaFunctionURLEvent,
  never,
  Cause.UnknownException
> = (event) => {
  return Stream.make(Buffer.from(JSON.stringify(event))).pipe(
    Stream.pipeThroughChannelOrFail(
      NodeStream.fromDuplex(
        () => createGzip(),
        (e) => new Cause.UnknownException(e)
      )
    )
  )
}

export const handler = LambdaHandler.stream(streamHandler)
```

Set the lambda function URL `InvokeMode` to `RESPONSE_STREAM`:

```yaml
MyFunctionUrl:
  Type: AWS::Lambda::Url
  Properties:
    TargetFunctionArn: !Ref StreamingFunction
    AuthType: AWS_IAM
    InvokeMode: RESPONSE_STREAM
```

deploy the stack, and then invoke the function URL:

```bash
curl --request GET https://<url>.lambda-url.<Region>.on.aws/ --user $AWS_ACCESS_KEY_ID:$AWS_SECRET_ACCESS_KEY --aws-sigv4 'aws:amz:<Region>:lambda' --output response.gz
```
