import path from "node:path";
import ts from "typescript";
import { expect, it } from "vitest";

it("compiles SDK type imports without changing Effect error types", () => {
  const root = path.resolve(import.meta.dirname, "../../..");
  const config = ts.getParsedCommandLineOfConfigFile(path.join(root, "tsconfig.base.json"), {}, {
    ...ts.sys,
    onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
      throw new Error(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
    },
  });
  if (!config) {
    throw new Error("Could not load TypeScript configuration");
  }

  const program = ts.createProgram([
    path.join(import.meta.dirname, "Types.test-d.ts"),
    path.join(root, "packages/client-s3/test/Types.test-d.ts"),
  ], {
    ...config.options,
    composite: false,
    incremental: false,
    noEmit: true,
  });

  expect(
    ts.getPreEmitDiagnostics(program).map((diagnostic) =>
      ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")
    ),
  ).toEqual([]);
}, 30000);
