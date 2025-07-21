/**
 * @since 1.0.0
 */
import type { DsqlSignerConfig } from "@aws-sdk/dsql-signer";
import { Effect, Layer } from "effect";
import * as Config from "./DsqlSignerConfig.js";
import * as Instance from "./DsqlSignerInstance.js";

interface DsqlSignerService$ {
  readonly _: unique symbol;

  getDbConnectAdminAuthToken(): Effect.Effect<string, never, never>;
  getDbConnectAuthToken(): Effect.Effect<string, never, never>;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDsqlSignerService = Effect.gen(function*() {
  const client = yield* Instance.DsqlSignerInstance;

  return {
    getDbConnectAuthToken: () => Effect.promise(() => client.getDbConnectAuthToken()),
    getDbConnectAdminAuthToken: () => Effect.promise(() => client.getDbConnectAdminAuthToken()),
  } as DsqlSignerService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class DsqlSignerService extends Effect.Tag("@effect-aws/dsql-signer/DsqlSignerService")<
  DsqlSignerService,
  DsqlSignerService$
>() {
  /**
   * @since 1.0.0
   *
   * @example
   * import { Effect, Exit, Layer } from "effect";
   * import { pipe } from "effect/Function";
   * import { DsqlSigner } from "@effect-aws/dsql-signer";
   *
   * const adminToken = DsqlSigner.getDbConnectAdminAuthToken().pipe(
   *   Effect.provide(DsqlSigner.defaultLayer),
   *   Effect.provide(DsqlSignerConfig.layer({
   *     hostname: "<identifier>.dsql.<region>.on.aws",
   *   }))
   * );
   */
  static readonly defaultLayer = Layer.effect(this, makeDsqlSignerService).pipe(
    Layer.provide(Instance.layer),
  );
  /**
   * @since 1.0.0
   *
   * @example
   * import { Effect, Exit, Layer } from "effect";
   * import { pipe } from "effect/Function";
   * import { DsqlSigner } from "@effect-aws/dsql-signer";
   *
   * const adminToken = DsqlSigner.getDbConnectAdminAuthToken().pipe(
   *   Effect.provide(DsqlSigner.layer({
   *     hostname: "<identifier>.dsql.<region>.on.aws",
   *   }))
   * );
   */
  static readonly layer = (config: DsqlSignerService.Config) =>
    Layer.effect(this, makeDsqlSignerService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(Config.layer(config)),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace DsqlSignerService {
  /**
   * @since 1.0.0
   */
  export type Config = DsqlSignerConfig;

  /**
   * @since 1.0.0
   */
  export type Type = DsqlSignerService$;
}
