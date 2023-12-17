import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class DynamoDBClientOptions extends Data.TaggedClass(
  "DynamoDBClientOptions",
)<DynamoDBClientConfig> {}

export const DynamoDBClientConfigTag = Context.Tag<DynamoDBClientOptions>(
  "@effect-aws/DynamoDBClient/Config",
);

export const DefaultDynamoDBClientConfigLayer = Layer.effect(
  DynamoDBClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new DynamoDBClientOptions({
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

export const DynamoDBClientInstanceTag = Context.Tag<DynamoDBClient>(
  "@effect-aws/DynamoDBClient/Instance",
);

export const DynamoDBClientInstanceLayer = Layer.effect(
  DynamoDBClientInstanceTag,
  DynamoDBClientConfigTag.pipe(
    Effect.map((config) => new DynamoDBClient(config)),
  ),
);

export const DefaultDynamoDBClientInstanceLayer =
  DynamoDBClientInstanceLayer.pipe(
    Layer.provide(DefaultDynamoDBClientConfigLayer),
  );
