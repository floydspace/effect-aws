import {
  ApiGatewayManagementApiClient,
  ApiGatewayManagementApiClientConfig,
} from "@aws-sdk/client-apigatewaymanagementapi";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import { flow } from "effect/Function";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class ApiGatewayManagementApiClientOptions extends Data.TaggedClass(
  "ApiGatewayManagementApiClientOptions",
)<ApiGatewayManagementApiClientConfig> {}

export const ApiGatewayManagementApiClientConfigTag =
  Context.Tag<ApiGatewayManagementApiClientOptions>(
    "@effect-aws/ApiGatewayManagementApiClient/Config",
  );

export const DefaultApiGatewayManagementApiClientConfigLayer = Layer.effect(
  ApiGatewayManagementApiClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new ApiGatewayManagementApiClientOptions({
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

export const ApiGatewayManagementApiClientInstanceTag =
  Context.Tag<ApiGatewayManagementApiClient>(
    "@effect-aws/ApiGatewayManagementApiClient/Instance",
  );

export const ApiGatewayManagementApiClientInstanceLayer = Layer.effect(
  ApiGatewayManagementApiClientInstanceTag,
  ApiGatewayManagementApiClientConfigTag.pipe(
    Effect.map((config) => new ApiGatewayManagementApiClient(config)),
  ),
);

export const DefaultApiGatewayManagementApiClientInstanceLayer =
  ApiGatewayManagementApiClientInstanceLayer.pipe(
    Layer.use(DefaultApiGatewayManagementApiClientConfigLayer),
  );
