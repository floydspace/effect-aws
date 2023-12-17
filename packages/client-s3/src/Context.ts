import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class S3ClientOptions extends Data.TaggedClass(
  "S3ClientOptions",
)<S3ClientConfig> {}

export const S3ClientConfigTag = Context.Tag<S3ClientOptions>(
  "@effect-aws/S3Client/Config",
);

export const DefaultS3ClientConfigLayer = Layer.effect(
  S3ClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new S3ClientOptions({
          logger: {
            info: (m) => Effect.logInfo(m).pipe(Runtime.runSync(runtime)),
            warn: (m) => Effect.logWarning(m).pipe(Runtime.runSync(runtime)),
            error: (m) => Effect.logError(m).pipe(Runtime.runSync(runtime)),
            debug: (m) => Effect.logDebug(m).pipe(Runtime.runSync(runtime)),
            trace: (m) => Effect.logTrace(m).pipe(Runtime.runSync(runtime)),
          },
        }),
    ),
  ),
);

export const S3ClientInstanceTag = Context.Tag<S3Client>(
  "@effect-aws/S3Client/Instance",
);

export const S3ClientInstanceLayer = Layer.effect(
  S3ClientInstanceTag,
  S3ClientConfigTag.pipe(Effect.map((config) => new S3Client(config))),
);

export const DefaultS3ClientInstanceLayer = S3ClientInstanceLayer.pipe(
  Layer.provide(DefaultS3ClientConfigLayer),
);
