import {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CreateMultipartUploadCommand,
  PutObjectCommand,
  S3Client,
  UploadPartCommand,
} from "@aws-sdk/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { MulipartUpload } from "@effect-aws/s3";
import { layer } from "@effect/vitest";
import { mockClient } from "aws-sdk-client-mock";
import { Effect } from "effect";
import { afterEach, expect } from "vitest";

const clientMock = mockClient(S3Client);

layer(S3.defaultLayer)("MulipartUpload", (it) => {
  afterEach(() => {
    clientMock.reset();
  });

  it.effect("should upload a small file", () =>
    Effect.gen(function*() {
      expect.assertions(6);

      clientMock.on(PutObjectCommand).resolves({});
      clientMock.on(CreateMultipartUploadCommand).resolves({ UploadId: "mock-upload-id" });
      clientMock.on(UploadPartCommand).resolves({ ETag: "mock-etag" });
      clientMock.on(CompleteMultipartUploadCommand).resolves({});
      clientMock.on(AbortMultipartUploadCommand).resolves({});

      const result = yield* MulipartUpload.uploadObject({
        Bucket: "test-bucket",
        Key: "path-to-file.ext",
        Body: new Uint8Array(1024 * 1024 * 5), // 5 MB
      });

      expect(result).toStrictEqual({
        Bucket: "test-bucket",
        Key: "path-to-file.ext",
      });
      expect(clientMock).toHaveReceivedCommandOnce(PutObjectCommand);
      expect(clientMock).not.toHaveReceivedCommand(CreateMultipartUploadCommand);
      expect(clientMock).not.toHaveReceivedCommand(UploadPartCommand);
      expect(clientMock).not.toHaveReceivedCommand(CompleteMultipartUploadCommand);
      expect(clientMock).not.toHaveReceivedCommand(AbortMultipartUploadCommand);
    }));

  it.effect("should upload a big file", () =>
    Effect.gen(function*() {
      expect.assertions(6);

      clientMock.on(CreateMultipartUploadCommand).resolves({
        UploadId: "mock-upload-id",
      });
      clientMock.on(UploadPartCommand).resolves({
        ETag: "mock-etag",
      });
      clientMock.on(CompleteMultipartUploadCommand).resolves({});
      clientMock.on(AbortMultipartUploadCommand).resolves({});

      const result = yield* MulipartUpload.uploadObject({
        Bucket: "test-bucket",
        Key: "path-to-file.ext",
        Body: new Uint8Array(1024 * 1024 * 10), // 10 MB
      });

      expect(result).toStrictEqual({});
      expect(clientMock).not.toHaveReceivedCommand(PutObjectCommand);
      expect(clientMock).toHaveReceivedCommandOnce(CreateMultipartUploadCommand);
      expect(clientMock).toHaveReceivedCommandTimes(UploadPartCommand, 2);
      expect(clientMock).toHaveReceivedCommandOnce(CompleteMultipartUploadCommand);
      expect(clientMock).not.toHaveReceivedCommand(AbortMultipartUploadCommand);
    }));
});
