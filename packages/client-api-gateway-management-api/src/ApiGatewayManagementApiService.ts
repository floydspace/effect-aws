/**
 * @since 1.0.0
 */
import {
  ApiGatewayManagementApiServiceException,
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
import { Data, Effect, Layer, Record } from "effect";
import {
  ApiGatewayManagementApiClientInstance,
  ApiGatewayManagementApiClientInstanceLayer,
} from "./ApiGatewayManagementApiClientInstance.js";
import {
  DefaultApiGatewayManagementApiClientConfigLayer,
  makeDefaultApiGatewayManagementApiClientInstanceConfig,
  ApiGatewayManagementApiClientInstanceConfig,
} from "./ApiGatewayManagementApiClientInstanceConfig.js";
import {
  AllServiceErrors,
  ForbiddenError,
  GoneError,
  LimitExceededError,
  PayloadTooLargeError,
  SdkError,
  TaggedException,
} from "./Errors.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

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
    SdkError | ForbiddenError | GoneError | LimitExceededError
  >;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionCommandOutput,
    SdkError | ForbiddenError | GoneError | LimitExceededError
  >;

  /**
   * @see {@link PostToConnectionCommand}
   */
  postToConnection(
    args: PostToConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PostToConnectionCommandOutput,
    | SdkError
    | ForbiddenError
    | GoneError
    | LimitExceededError
    | PayloadTooLargeError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeApiGatewayManagementApiService = Effect.gen(function* (_) {
  const client = yield* _(ApiGatewayManagementApiClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (
            e instanceof ApiGatewayManagementApiServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<ApiGatewayManagementApiServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as ApiGatewayManagementApiService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class ApiGatewayManagementApiService extends Effect.Tag(
  "@effect-aws/client-api-gateway-management-api/ApiGatewayManagementApiService",
)<ApiGatewayManagementApiService, ApiGatewayManagementApiService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeApiGatewayManagementApiService,
  ).pipe(
    Layer.provide(ApiGatewayManagementApiClientInstanceLayer),
    Layer.provide(DefaultApiGatewayManagementApiClientConfigLayer),
  );
  static readonly layer = (config: ApiGatewayManagementApiClientConfig) =>
    Layer.effect(this, makeApiGatewayManagementApiService).pipe(
      Layer.provide(ApiGatewayManagementApiClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          ApiGatewayManagementApiClientInstanceConfig,
          makeDefaultApiGatewayManagementApiClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (
      defaultConfig: ApiGatewayManagementApiClientConfig,
    ) => ApiGatewayManagementApiClient,
  ) =>
    Layer.effect(this, makeApiGatewayManagementApiService).pipe(
      Layer.provide(
        Layer.effect(
          ApiGatewayManagementApiClientInstance,
          Effect.map(
            makeDefaultApiGatewayManagementApiClientInstanceConfig,
            evaluate,
          ),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias ApiGatewayManagementApiService
 */
export const ApiGatewayManagementApi = ApiGatewayManagementApiService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ApiGatewayManagementApi.baseLayer instead
 */
export const BaseApiGatewayManagementApiServiceLayer = Layer.effect(
  ApiGatewayManagementApiService,
  makeApiGatewayManagementApiService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ApiGatewayManagementApi.layer instead
 */
export const ApiGatewayManagementApiServiceLayer =
  BaseApiGatewayManagementApiServiceLayer.pipe(
    Layer.provide(ApiGatewayManagementApiClientInstanceLayer),
  );

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use ApiGatewayManagementApi.defaultLayer instead
 */
export const DefaultApiGatewayManagementApiServiceLayer =
  ApiGatewayManagementApiService.defaultLayer;
