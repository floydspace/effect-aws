/**
 * @since 1.0.0
 */
import { S3Service } from "./S3Service.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as S3ClientInstance from "./S3ClientInstance.js";

/**
 * @since 1.0.0
 */
export * as S3ServiceConfig from "./S3ServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./S3Service.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias S3Service
 */
export declare namespace S3 {
  /**
   * @since 1.0.0
   * @alias S3Service.Config
   */
  export type Config = S3Service.Config;

  /**
   * @since 1.0.0
   * @alias S3Service.Type
   */
  export type Type = S3Service.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias S3Service
 */
export const S3 = S3Service;
