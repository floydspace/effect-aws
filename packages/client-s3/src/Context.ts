import { S3Client } from "@aws-sdk/client-s3";
import * as Context from "@effect/data/Context";
import * as Layer from "@effect/io/Layer";

export const S3ClientInstanceTag = Context.Tag<S3Client>(
  "@effect-aws/S3Client/Instance",
);

export const DefaultS3ClientInstanceLayer = Layer.succeed(
  S3ClientInstanceTag,
  new S3Client({}),
);
