/* eslint-disable import/no-extraneous-dependencies */
import path from "node:path";
import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    setupFiles: [path.join(__dirname, "vitest.setup.ts")],
  },
});
