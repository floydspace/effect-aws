/**
 * @since 1.0.0
 */
import type { ApiGatewayManagementApiClientConfig } from "@aws-sdk/client-apigatewaymanagementapi";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class ApiGatewayManagementApiClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-api-gateway-management-api/ApiGatewayManagementApiClientInstanceConfig",
)<ApiGatewayManagementApiClientInstanceConfig, ApiGatewayManagementApiClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultApiGatewayManagementApiClientInstanceConfig: Effect.Effect<
  ApiGatewayManagementApiClientConfig
> = Effect.gen(function*(_) {
  const runtime = yield* _(Effect.runtime<never>());
  const runSync = Runtime.runSync(runtime);

  return {
    logger: {
      info(m) {
        Effect.logInfo(m).pipe(runSync);
      },
      warn(m) {
        Effect.logWarning(m).pipe(runSync);
      },
      error(m) {
        Effect.logError(m).pipe(runSync);
      },
      debug(m) {
        Effect.logDebug(m).pipe(runSync);
      },
      trace(m) {
        Effect.logTrace(m).pipe(runSync);
      },
    },
  };
});

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultApiGatewayManagementApiClientConfigLayer = Layer.effect(
  ApiGatewayManagementApiClientInstanceConfig,
  makeDefaultApiGatewayManagementApiClientInstanceConfig,
);
