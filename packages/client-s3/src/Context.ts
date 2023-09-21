import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import * as Context from "@effect/data/Context";
import { flow } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Layer from "@effect/io/Layer";
import * as Runtime from "@effect/io/Runtime";

export const S3ClientConfigTag = Context.Tag<S3ClientConfig>(
  "@effect-aws/S3Client/Config",
);

export const DefaultS3ClientConfigLayer = Layer.effect(
  S3ClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map((runtime) => ({
      logger: {
        info: flow(Effect.logInfo, Runtime.runSync(runtime)),
        warn: flow(Effect.logWarning, Runtime.runSync(runtime)),
        error: flow(Effect.logError, Runtime.runSync(runtime)),
        debug: flow(Effect.logDebug, Runtime.runSync(runtime)),
        trace: flow(Effect.logTrace, Runtime.runSync(runtime)),
      },
    })),
  ),
);

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
