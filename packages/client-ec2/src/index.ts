/**
 * @since 1.0.0
 */
import { EC2Service } from "./EC2Service.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as EC2ClientInstance from "./EC2ClientInstance.js";

/**
 * @since 1.0.0
 */
export * as EC2ServiceConfig from "./EC2ServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./EC2Service.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias EC2Service
 */
export declare namespace EC2 {
  /**
   * @since 1.0.0
   * @alias EC2Service.Config
   */
  export type Config = EC2Service.Config;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias EC2Service
 */
export const EC2 = EC2Service;
