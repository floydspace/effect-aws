import { MultipartUpload } from "@effect-aws/s3";
import { NodeFileSystem } from "@effect/platform-node";
import { Effect, FileSystem, Layer } from "effect";

const program = Effect.gen(function*() {
  const fs = yield* FileSystem.FileSystem;
  const mu = yield* MultipartUpload.MultipartUpload;

  yield* mu.uploadObject({
    Bucket: "my-bucket",
    Key: "my-object",
    Body: fs.stream(__dirname + "/big.file"),
  }, { queueSize: 3 });
});

program.pipe(
  Effect.provide(Layer.merge(MultipartUpload.defaultLayer, NodeFileSystem.layer)),
  Effect.runPromise,
);
