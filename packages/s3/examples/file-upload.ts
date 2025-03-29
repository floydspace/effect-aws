import { MultipartUpload } from "@effect-aws/s3";
import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import { Effect, Layer } from "effect";

const program = Effect.gen(function*() {
  const fs = yield* FileSystem.FileSystem;
  const mp = yield* MultipartUpload.MultipartUpload;

  yield* mp.uploadObject({
    Bucket: "my-bucket",
    Key: "my-object",
    Body: yield* fs.readFile(__dirname + "/big.file"),
  }, { queueSize: 3 });
});

program.pipe(
  Effect.provide(
    Layer.merge(MultipartUpload.MultipartUpload.Default, NodeFileSystem.layer),
  ),
  Effect.runPromise,
);
