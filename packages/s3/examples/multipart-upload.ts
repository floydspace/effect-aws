import { S3 } from "@effect-aws/client-s3";
import { MultipartUpload } from "@effect-aws/s3";
import { Effect } from "effect";

const program = MultipartUpload.uploadObject({
  Bucket: "my-bucket",
  Key: "my-object",
  Body: new Uint8Array(1024 * 1024 * 10), // 10 MB
}).pipe(Effect.provide(S3.defaultLayer));

Effect.runPromise(program);
