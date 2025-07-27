/**
 * @since 0.1.0
 */
import type { DsqlSignerConfig } from "@aws-sdk/dsql-signer";
import { Effect, Layer } from "effect";
import * as Instance from "./DsqlSignerInstance.js";

interface DsqlSigner$ {
  readonly _: unique symbol;

  getDbConnectAdminAuthToken(): Effect.Effect<string>;
  getDbConnectAuthToken(): Effect.Effect<string>;
}

/**
 * @since 0.1.0
 * @category constructors
 */
export const makeDsqlSigner = Effect.gen(function*() {
  const client = yield* Instance.DsqlSignerInstance;

  return {
    getDbConnectAuthToken: () => Effect.promise(() => client.getDbConnectAuthToken()),
    getDbConnectAdminAuthToken: () => Effect.promise(() => client.getDbConnectAdminAuthToken()),
  } as DsqlSigner$;
});

/**
 * @since 0.1.0
 * @category models
 */
export class DsqlSigner extends Effect.Tag("@effect-aws/dsql/DsqlSigner")<
  DsqlSigner,
  DsqlSigner$
>() {
  /**
   * @since 0.1.0
   *
   * @example
   * import { Effect, Exit, Layer } from "effect";
   * import { pipe } from "effect/Function";
   * import { DsqlSigner } from "@effect-aws/dsql";
   *
   * const adminToken = DsqlSigner.getDbConnectAdminAuthToken().pipe(
   *   Effect.provide(DsqlSigner.layer({
   *     hostname: "<identifier>.dsql.<region>.on.aws",
   *   }))
   * );
   */
  static readonly layer = (config: DsqlSigner.Config) =>
    Layer.effect(this, makeDsqlSigner).pipe(
      Layer.provide(Instance.layer(config)),
    );
}

/**
 * @since 0.1.0
 */
export declare namespace DsqlSigner {
  /**
   * @since 0.1.0
   */
  export type Config = DsqlSignerConfig;

  /**
   * @since 0.1.0
   */
  export type Type = DsqlSigner$;
}
