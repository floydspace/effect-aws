/**
 * @since 1.0.0
 */
import {
  type ApiGatewayManagementApiClient,
  type ApiGatewayManagementApiClientConfig,
  DeleteConnectionCommand,
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  GetConnectionCommand,
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  PostToConnectionCommand,
  type PostToConnectionCommandInput,
  type PostToConnectionCommandOutput,
} from "@aws-sdk/client-apigatewaymanagementapi";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./ApiGatewayManagementApiClientInstance.js";
import * as ApiGatewayManagementApiServiceConfig from "./ApiGatewayManagementApiServiceConfig.js";
import type { ForbiddenError, GoneError, LimitExceededError, PayloadTooLargeError } from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  DeleteConnectionCommand,
  GetConnectionCommand,
  PostToConnectionCommand,
};

interface ApiGatewayManagementApiService$ {
  readonly _: unique symbol;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionCommandOutput,
    Cause.TimeoutException | SdkError | ForbiddenError | GoneError | LimitExceededError
  >;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionCommandOutput,
    Cause.TimeoutException | SdkError | ForbiddenError | GoneError | LimitExceededError
  >;

  /**
   * @see {@link PostToConnectionCommand}
   */
  postToConnection(
    args: PostToConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PostToConnectionCommandOutput,
    Cause.TimeoutException | SdkError | ForbiddenError | GoneError | LimitExceededError | PayloadTooLargeError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeApiGatewayManagementApiService = Effect.gen(function*() {
  const client = yield* Instance.ApiGatewayManagementApiClientInstance;

  return yield* Service.fromClientAndCommands<ApiGatewayManagementApiService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: ApiGatewayManagementApiServiceConfig.toApiGatewayManagementApiClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ApiGatewayManagementApiService
  extends Effect.Tag("@effect-aws/client-api-gateway-management-api/ApiGatewayManagementApiService")<
    ApiGatewayManagementApiService,
    ApiGatewayManagementApiService$
  >()
{
  static readonly defaultLayer = Layer.effect(this, makeApiGatewayManagementApiService).pipe(
    Layer.provide(Instance.layer),
  );
  static readonly layer = (config: ApiGatewayManagementApiService.Config) =>
    Layer.effect(this, makeApiGatewayManagementApiService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(ApiGatewayManagementApiServiceConfig.setApiGatewayManagementApiServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ApiGatewayManagementApiClientConfig) => ApiGatewayManagementApiClient,
  ) =>
    Layer.effect(this, makeApiGatewayManagementApiService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.ApiGatewayManagementApiClientInstance,
          Effect.map(ApiGatewayManagementApiServiceConfig.toApiGatewayManagementApiClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ApiGatewayManagementApiService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<ApiGatewayManagementApiClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
