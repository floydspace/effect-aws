/* eslint-disable import/no-extraneous-dependencies */
import { CustomMatcher } from "aws-sdk-client-mock-vitest";
import "vitest";

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatcher<T> {}
  interface AsymmetricMatchersContaining extends CustomMatcher {}
}
