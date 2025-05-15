/**
 * @since 1.0.0
 */
import { APIGatewayService } from "./APIGatewayService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as APIGatewayClientInstance from "./APIGatewayClientInstance.js";

/**
 * @since 1.0.0
 */
export * as APIGatewayServiceConfig from "./APIGatewayServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./APIGatewayService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias APIGatewayService
 */
export declare namespace APIGateway {
  /**
   * @since 1.0.0
   * @alias APIGatewayService.Config
   */
  export type Config = APIGatewayService.Config;

  /**
   * @since 1.0.0
   * @alias APIGatewayService.Type
   */
  export type Type = APIGatewayService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias APIGatewayService
 */
export const APIGateway = APIGatewayService;
