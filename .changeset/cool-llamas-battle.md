---
"@effect-aws/s3": patch
---

add MultipartUpload tag to have an option using service like api (thanks to @patroza for the feedback)

example:

```ts
import { MultipartUpload } from "@effect-aws/s3"
import { Effect } from "effect"

const program = Effect.gen(function* () {
  const multipart = yield* MultipartUpload.MultipartUpload

  yield* multipart.uploadObject({
    Bucket: "my-bucket",
    Key: "my-object",
    Body: "Lorem ipsum dolor sit amet"
  })
})
//                                              ┌─── Layer<MultipartUpload, never, never>
//                                              ▼
program.pipe(Effect.provide(MultipartUpload.defaultLayer), Effect.runPromise)
```

added 4 layer options:

- `MultipartUpload.layerWithoutS3Service`: layer which requires providing `S3Service`
- `MultipartUpload.defaultLayer`: default layer is provided with `S3Service.defaultLayer`
- `MultipartUpload.layer`: layer accepts options same as `S3Service.layer`
- `MultipartUpload.baseLayer`: base layer accepts options same as `S3Service.baseLayer`
