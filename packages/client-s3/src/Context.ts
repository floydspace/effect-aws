import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import * as Context from "@effect/data/Context";
import { flow } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Layer from "@effect/io/Layer";

export const S3ClientConfigTag = Context.Tag<S3ClientConfig>(
  "@effect-aws/S3Client/Config",
);

export const DefaultS3ClientConfigLayer = Layer.succeed(S3ClientConfigTag, {
  logger: {
    info: flow(Effect.logInfo, Effect.runSync),
    warn: flow(Effect.logWarning, Effect.runSync),
    error: flow(Effect.logError, Effect.runSync),
    debug: flow(Effect.logDebug, Effect.runSync),
    trace: flow(Effect.logTrace, Effect.runSync),
  },
});

export const S3ClientInstanceTag = Context.Tag<S3Client>(
  "@effect-aws/S3Client/Instance",
);

export const S3ClientInstanceLayer = Layer.effect(
  S3ClientInstanceTag,
  S3ClientConfigTag.pipe(Effect.map((config) => new S3Client(config))),
);

export const DefaultS3ClientInstanceLayer = Layer.provide(
  DefaultS3ClientConfigLayer,
  S3ClientInstanceLayer,
);
