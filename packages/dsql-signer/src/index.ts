/**
 * @since 1.0.0
 */
import { DsqlSignerService } from "./DsqlSignerService.js";

/**
 * @since 1.0.0
 */
export * as DsqlSignerInstance from "./DsqlSignerInstance.js";

/**
 * @since 1.0.0
 */
export * as DsqlSignerConfig from "./DsqlSignerConfig.js";

/**
 * @since 1.0.0
 */
export * from "./DsqlSignerService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias DsqlSignerService
 *
 * @example
 * import { Effect, Exit, Layer } from "effect";
 * import { pipe } from "effect/Function";
 * import { DsqlSigner } from "@effect-aws/dsql-signer";
 *
 * const adminToken = DsqlSigner.getDbConnectAdminAuthToken().pipe(
 *   Effect.provide(DsqlSigner.layer({
 *     hostname: "01abc2ldefg3hijklmnopqurstu.dsql.us-east-1.on.aws",
 *   }))
 * );
 */
export declare namespace DsqlSigner {
  /**
   * @since 1.0.0
   * @alias DsqlSignerService.Config
   */
  export type Config = DsqlSignerService.Config;

  /**
   * @since 1.0.0
   * @alias DsqlSignerService.Type
   */
  export type Type = DsqlSignerService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias DsqlSignerService
 */
export const DsqlSigner = DsqlSignerService;
