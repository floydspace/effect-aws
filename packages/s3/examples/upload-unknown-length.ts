import { MultipartUpload } from "@effect-aws/s3/MultipartUpload";
import { Effect } from "effect";
import { Readable } from "node:stream";

async function* generateContents() {
  for (let index = 0; index < 8; index++) {
    const time = Math.random() * 10;
    await Effect.sleep(time).pipe(Effect.runPromise);
    console.log(`Delaying part ${index} for ${time}`);
    yield `[Part ${index}] ${"#".repeat(2000000)}`;
  }
}
const fakeStreamOfUnknownLength = Readable.from(generateContents());

const program = MultipartUpload.uploadObject({
  Bucket: "my-bucket",
  Key: "my-object",
  Body: fakeStreamOfUnknownLength,
});

program.pipe(
  Effect.provide(MultipartUpload.Default),
  Effect.runPromise,
);
