/**
 * @since 1.0.0
 */
import { CognitoIdentityProviderService } from "./CognitoIdentityProviderService.js";

/**
 * @since 1.0.0
 */
export * from "./Errors.js";

/**
 * @since 1.0.0
 */
export * as CognitoIdentityProviderClientInstance from "./CognitoIdentityProviderClientInstance.js";

/**
 * @since 1.0.0
 */
export * as CognitoIdentityProviderServiceConfig from "./CognitoIdentityProviderServiceConfig.js";

/**
 * @since 1.0.0
 */
export * from "./CognitoIdentityProviderService.js";

/**
 * @since 1.0.0
 * @category exports
 * @alias CognitoIdentityProviderService
 */
export declare namespace CognitoIdentityProvider {
  /**
   * @since 1.0.0
   * @alias CognitoIdentityProviderService.Config
   */
  export type Config = CognitoIdentityProviderService.Config;

  /**
   * @since 1.0.0
   * @alias CognitoIdentityProviderService.Type
   */
  export type Type = CognitoIdentityProviderService.Type;
}

/**
 * @since 1.0.0
 * @category exports
 * @alias CognitoIdentityProviderService
 */
export const CognitoIdentityProvider = CognitoIdentityProviderService;
