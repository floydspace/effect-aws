# @effect-aws/s3

## 0.2.6

### Patch Changes

- Updated dependencies []:
  - @effect-aws/client-s3@1.10.9

## 0.2.5

### Patch Changes

- Updated dependencies [[`aecc0af`](https://github.com/floydspace/effect-aws/commit/aecc0af4f05c734c9e42cc46b552382c32d86b39)]:
  - @effect-aws/client-s3@1.10.7

## 0.2.4

### Patch Changes

- Updated dependencies [[`f1b4ec8`](https://github.com/floydspace/effect-aws/commit/f1b4ec8fed35a1074a17451a8a39ab39e13863ac)]:
  - @effect-aws/client-s3@1.10.6

## 0.2.3

### Patch Changes

- [#168](https://github.com/floydspace/effect-aws/pull/168) [`85b3bd0`](https://github.com/floydspace/effect-aws/commit/85b3bd001dc0b5dcbedf273483e4bbf81d17f0dc) Thanks [@godu](https://github.com/godu)! - update @effect/platform

## 0.2.2

### Patch Changes

- Updated dependencies [[`192aad7`](https://github.com/floydspace/effect-aws/commit/192aad72a154951e5814f12cae90cc3d1b63621c)]:
  - @effect-aws/client-s3@1.10.3

## 0.2.1

### Patch Changes

- Updated dependencies [[`bccec21`](https://github.com/floydspace/effect-aws/commit/bccec2132338db2c04444baf249c48efbb42e80e)]:
  - @effect-aws/client-s3@1.10.2

## 0.2.0

### Patch Changes

- Updated dependencies [[`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8)]:
  - @effect-aws/client-s3@1.10.0

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
