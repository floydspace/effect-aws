import { addEqualityTesters } from "@effect/vitest";
import {
  toHaveReceivedCommand,
  toHaveReceivedCommandOnce,
  toHaveReceivedCommandTimes,
  toHaveReceivedCommandWith,
  toHaveReceivedLastCommandWith,
  toHaveReceivedNthCommandWith,
} from "aws-sdk-client-mock-vitest";
import { expect } from "vitest";

// Registers vitest equality testers that delegate to Effect's `Equal` trait,
// so that `toEqual`/`toStrictEqual` correctly compare Effect data types
// (Cause, Exit, Option, etc.) instead of doing a naive structural walk over
// their internal representation.
addEqualityTesters();

expect.extend({
  toHaveReceivedCommandTimes,
  toHaveReceivedCommandOnce,
  toHaveReceivedCommand,
  toHaveReceivedCommandWith,
  toHaveReceivedNthCommandWith,
  toHaveReceivedLastCommandWith,
});
