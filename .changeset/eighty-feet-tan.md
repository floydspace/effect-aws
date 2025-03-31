---
"@effect-aws/s3": patch
---

Allow effect's Stream as Body param in `MultipartUpload.uploadObject`

```ts
import { MultipartUpload } from "@effect-aws/s3"
import { FileSystem } from "@effect/platform"
import { NodeFileSystem } from "@effect/platform-node"
import { Effect, Layer } from "effect"

const program = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem
  const mu = yield* MultipartUpload.MultipartUpload

  yield* mu.uploadObject({
    Bucket: "my-bucket",
    Key: "my-object",
    Body: fs.stream(__dirname + "/big.file")
  })
})

program.pipe(
  Effect.provide(
    Layer.merge(MultipartUpload.defaultLayer, NodeFileSystem.layer)
  ),
  Effect.runPromise
)
```
