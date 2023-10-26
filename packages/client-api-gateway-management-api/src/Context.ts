import {
  ApiGatewayManagementApiClient,
  ApiGatewayManagementApiClientConfig,
} from "@aws-sdk/client-apigatewaymanagementapi";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
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
