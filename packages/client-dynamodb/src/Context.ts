import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import * as Context from "@effect/data/Context";
import * as Data from "@effect/data/Data";
import { flow } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Layer from "@effect/io/Layer";
import * as Runtime from "@effect/io/Runtime";

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
            info: flow(Effect.logInfo, Runtime.runSync(runtime)),
            warn: flow(Effect.logWarning, Runtime.runSync(runtime)),
            error: flow(Effect.logError, Runtime.runSync(runtime)),
            debug: flow(Effect.logDebug, Runtime.runSync(runtime)),
            trace: flow(Effect.logTrace, Runtime.runSync(runtime)),
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
  DynamoDBClientInstanceLayer.pipe(Layer.use(DefaultDynamoDBClientConfigLayer));
