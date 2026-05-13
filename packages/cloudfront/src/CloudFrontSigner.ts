/**
 * @since 0.1.0
 */
import type {
  CloudfrontSignedCookiesOutput,
  CloudfrontSignerCredentials,
  CloudfrontSignInput,
  CloudfrontSignInputWithParameters,
  CloudfrontSignInputWithPolicy,
} from "@aws-sdk/cloudfront-signer";
import { getSignedCookies as awsGetSignedCookies, getSignedUrl as awsGetSignedUrl } from "@aws-sdk/cloudfront-signer";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

/**
 * @since 0.1.0
 * @category models
 */
export type CloudFrontSignerCredentials = CloudfrontSignerCredentials;

/**
 * @since 0.1.0
 * @category models
 */
export type GetSignedUrlInput =
  | Omit<CloudfrontSignInputWithParameters, keyof CloudfrontSignerCredentials>
  | Omit<CloudfrontSignInputWithPolicy, keyof CloudfrontSignerCredentials>;

/**
 * @since 0.1.0
 * @category models
 */
export type GetSignedCookiesInput =
  | Omit<CloudfrontSignInputWithParameters, keyof CloudfrontSignerCredentials>
  | Omit<CloudfrontSignInputWithPolicy, keyof CloudfrontSignerCredentials>;

interface CloudFrontSigner$ {
  /**
   * Creates a signed URL string using a canned or custom policy.
   *
   * When using a custom policy, `url` may be omitted and the policy resource
   * will be used as the signed URL.
   *
   * Errors thrown by the underlying AWS signer are surfaced as defects.
   * @returns the input URL with signature attached as query parameters.
   */
  getSignedUrl(input: GetSignedUrlInput): Effect.Effect<string>;

  /**
   * Creates signed cookies using a canned or custom policy.
   *
   * Errors thrown by the underlying AWS signer are surfaced as defects.
   * @returns an object with keys/values that can be added to cookies.
   */
  getSignedCookies(
    input: GetSignedCookiesInput,
  ): Effect.Effect<CloudfrontSignedCookiesOutput>;
}

const makeCloudFrontSigner = (
  credentials: CloudFrontSignerCredentials,
): CloudFrontSigner$ => {
  const withCredentials = (
    input: GetSignedUrlInput | GetSignedCookiesInput,
  ): CloudfrontSignInput => ({ ...credentials, ...input });

  return {
    getSignedUrl: (input) => Effect.sync(() => awsGetSignedUrl(withCredentials(input))),
    getSignedCookies: (input) => Effect.sync(() => awsGetSignedCookies(withCredentials(input))),
  } as CloudFrontSigner$;
};

/**
 * @since 0.1.0
 * @category models
 */
export class CloudFrontSigner
  extends Context.Service<CloudFrontSigner, CloudFrontSigner$>()("@effect-aws/cloudfront/CloudFrontSigner")
{
  /**
   * @since 0.1.0
   *
   * @example
   * import { Effect, Layer } from "effect";
   * import { CloudFrontSigner } from "@effect-aws/cloudfront";
   *
   * const signedUrl = CloudFrontSigner.getSignedUrl({
   *   url: "https://d111111abcdef8.cloudfront.net/private-content/private.jpeg",
   *   dateLessThan: "2024-01-01",
   * }).pipe(
   *   Effect.provide(CloudFrontSigner.layer({
   *     keyPairId: "K2JCJMDEHXQW5F",
   *     privateKey: "CONTENTS-OF-PRIVATE-KEY",
   *   }))
   * );
   */
  static readonly layer = (config: CloudFrontSigner.Config) => Layer.succeed(this, makeCloudFrontSigner(config));
}

/**
 * @since 0.1.0
 */
export declare namespace CloudFrontSigner {
  /**
   * @since 0.1.0
   */
  export type Config = CloudFrontSignerCredentials;

  /**
   * @since 0.1.0
   */
  export type Type = CloudFrontSigner$;
}
