# @effect-aws/s3

## 0.1.2

### Patch Changes

- [#143](https://github.com/floydspace/effect-aws/pull/143) [`17036d5`](https://github.com/floydspace/effect-aws/commit/17036d54b51e2509ed3245ba45f5d8e72c080a93) Thanks [@floydspace](https://github.com/floydspace)! - Allow effect's Stream as Body param in `MultipartUpload.uploadObject`

  ```ts
  import { MultipartUpload } from "@effect-aws/s3";
  import { FileSystem } from "@effect/platform";
  import { NodeFileSystem } from "@effect/platform-node";
  import { Effect, Layer } from "effect";

  const program = Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const mu = yield* MultipartUpload.MultipartUpload;

    yield* mu.uploadObject({
      Bucket: "my-bucket",
      Key: "my-object",
      Body: fs.stream(__dirname + "/big.file"),
    });
  });

  program.pipe(
    Effect.provide(
      Layer.merge(MultipartUpload.defaultLayer, NodeFileSystem.layer),
    ),
    Effect.runPromise,
  );
  ```

## 0.1.1

### Patch Changes

- [#139](https://github.com/floydspace/effect-aws/pull/139) [`53144a1`](https://github.com/floydspace/effect-aws/commit/53144a1ff6d6d32e60ffd1220d8745f8e578a116) Thanks [@floydspace](https://github.com/floydspace)! - add MultipartUpload tag to have an option using service like api (thanks to @patroza for the feedback)

  example:

  ```ts
  import { MultipartUpload } from "@effect-aws/s3";
  import { Effect } from "effect";

  const program = Effect.gen(function* () {
    const multipart = yield* MultipartUpload.MultipartUpload;

    yield* multipart.uploadObject({
      Bucket: "my-bucket",
      Key: "my-object",
      Body: "Lorem ipsum dolor sit amet",
    });
  });
  //                                              ┌─── Layer<MultipartUpload, never, never>
  //                                              ▼
  program.pipe(Effect.provide(MultipartUpload.defaultLayer), Effect.runPromise);
  ```

  added 4 layer options:

  - `MultipartUpload.layerWithoutS3Service`: layer which requires providing `S3Service`
  - `MultipartUpload.defaultLayer`: default layer is provided with `S3Service.defaultLayer`
  - `MultipartUpload.layer`: layer accepts options same as `S3Service.layer`
  - `MultipartUpload.baseLayer`: base layer accepts options same as `S3Service.baseLayer`

## 0.1.0

### Minor Changes

- [#138](https://github.com/floydspace/effect-aws/pull/138) [`d162eda`](https://github.com/floydspace/effect-aws/commit/d162edad9d69646bddccccb78dcc89261ebdf4ec) Thanks [@floydspace](https://github.com/floydspace)! - implement MultipartUpload.uploadObject

- [#127](https://github.com/floydspace/effect-aws/pull/127) [`649563d`](https://github.com/floydspace/effect-aws/commit/649563d5472ad8b8730f41979520ef2d011637c8) Thanks [@floydspace](https://github.com/floydspace)! - implement POC for S3FileSystem
