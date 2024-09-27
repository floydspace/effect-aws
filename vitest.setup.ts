/* eslint-disable import/no-extraneous-dependencies */
import {
  toHaveReceivedCommand,
  toHaveReceivedCommandOnce,
  toHaveReceivedCommandTimes,
  toHaveReceivedCommandWith,
  toHaveReceivedLastCommandWith,
  toHaveReceivedNthCommandWith,
} from "aws-sdk-client-mock-vitest";
import { expect } from "vitest";

expect.extend({
  toHaveReceivedCommandTimes,
  toHaveReceivedCommandOnce,
  toHaveReceivedCommand,
  toHaveReceivedCommandWith,
  toHaveReceivedNthCommandWith,
  toHaveReceivedLastCommandWith,
});
