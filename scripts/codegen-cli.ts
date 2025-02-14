/**
 * How to use:
 *
 * 1. Define a new package in `.projenrc.ts` (the package must have the same name as the AWS client) and run `pnpm run synth-workspace`.
 * 2. Run `pnpm run codegen-client`, select the package to generate.
 * 3. Run `Run pnpm run eslint --fix` to fix the formatting.
 * 4. Commit the changes and enjoy.
 */
import { Prompt } from "@effect/cli";
import { FileSystem } from "@effect/platform";
import { NodeContext, NodeHttpClient, NodeRuntime } from "@effect/platform-node";
import { Array, Effect, Option, Record, String } from "effect";
import { pipe } from "effect/Function";
import singularities from "./client-singularities.js";
import { generateClient } from "./generate-client.js";
import { fetchSdkManifest } from "./manifest.js";
import { normalizeServiceName } from "./utils.js";

const readClientPackageNames = Effect.gen(function*() {
  const fs = yield* FileSystem.FileSystem;
  const packages = yield* fs.readDirectory("./packages");
  return packages.filter((s) => s.startsWith("client-"));
});

const cli = Effect.gen(function*() {
  const packages = yield* readClientPackageNames;

  const selectedPackages = yield* Prompt.multiSelect({
    message: "Which clients do you want to generate ?",
    choices: packages.map((s) => ({ title: s, value: s })),
  });

  const results = yield* Effect.forEach(selectedPackages, (packageName) =>
    Effect.gen(function*() {
      const serviceName = String.replace(/^client-/, "")(packageName);
      const awsServiceName = normalizeServiceName(serviceName);
      const manifest = yield* fetchSdkManifest(awsServiceName);

      const operationTargets = pipe(
        manifest.shapes,
        Record.filter((shape) => shape.type === "operation"),
        Record.keys,
      );

      const operationNames = pipe(
        operationTargets,
        Array.map((s) => pipe(String.split(s, "#"), Array.get(1), Option.getOrThrow)),
      );

      const commandToTest = singularities[packageName]?.commandToTest ?? (yield* Prompt.select({
        message: `Which command do you want to test in ${packageName} ?`,
        choices: operationNames.map((s) => ({ title: s, value: s })),
      }));

      const inputToTest = singularities[packageName]?.inputToTest !== undefined
        ? (singularities[packageName].inputToTest ? JSON.stringify(singularities[packageName].inputToTest) : "")
        : yield* Prompt.text({ message: `Which input do you want to test of ${commandToTest} ? (optional)` });

      return [serviceName, awsServiceName, manifest, commandToTest, inputToTest] as const;
    }), { concurrency: 1 });

  yield* Effect.forEach(results, (r) => Effect.promise(() => generateClient(r)), {
    concurrency: "unbounded",
    discard: true,
  });
});

NodeRuntime.runMain(cli.pipe(
  Effect.provide(NodeContext.layer),
  Effect.provide(NodeHttpClient.layer),
));
