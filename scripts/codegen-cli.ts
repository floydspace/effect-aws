/**
 * How to use:
 *
 * 1. Define a new package in `.projenrc.ts` (the package must have the same name as the AWS client) and run `pnpm run synth-workspace`.
 * 2. Run `pnpm run codegen-client`, select the package to generate.
 * 3. Run `Run pnpm run eslint --fix` to fix the formatting.
 * 4. Commit the changes and enjoy.
 */
import { readdir } from "node:fs/promises";

import { Array, Effect, Exit, Option, Predicate, Record, String } from "effect";
import { constVoid, flow, pipe } from "effect/Function";
import Enquirer from "enquirer";
import singularities from "./client-singularities.js";
import type { Manifest } from "./generate-client.js";
import { generateClient } from "./generate-client.js";
import { normalizeServiceName } from "./utils.js";

main().catch(console.error);

async function main() {
  const enquirer = new Enquirer<{
    services: Array<string>;
    commandToTest: string;
    inputToTest: string;
  }>();

  const { services } = await enquirer.prompt({
    type: "autocomplete",
    name: "services",
    message: "Which clients do you want to generate ?",
    multiple: true,
    choices: (await readdir("./packages")).filter((s) => s.startsWith("client-")),
  });

  const each = services.map((packageName) =>
    Effect.promise(async () => {
      const serviceName = pipe(packageName, String.replace(/^client-/, ""));

      const originalServiceName = normalizeServiceName(serviceName);

      const manifest = (await (
        await fetch(
          `https://raw.githubusercontent.com/aws/aws-sdk-js-v3/main/codegen/sdk-codegen/aws-models/${originalServiceName}.json`,
        )
      ).json()) as Manifest;

      const operationTargets = pipe(
        manifest.shapes,
        Record.filter((shape) => shape.type === "operation"),
        Record.keys,
      );

      const operationNames = pipe(
        operationTargets,
        Array.map(flow(
          String.split("#"),
          Array.get(1),
          Option.getOrThrow,
        )),
      );

      const { commandToTest } = singularities[packageName] ??
        (await enquirer.prompt({
          type: "autocomplete",
          name: "commandToTest",
          message: `Which command do you want to test in ${packageName} ?`,
          multiple: false,
          choices: operationNames,
        }));

      const { inputToTest } = singularities[packageName]?.inputToTest !== undefined
        ? {
          inputToTest: singularities[packageName].inputToTest
            ? JSON.stringify(singularities[packageName].inputToTest)
            : "",
        }
        : await enquirer.prompt({
          type: "input",
          name: "inputToTest",
          message: `Which input do you want to test of ${commandToTest} ? (optional)`,
          validate: Predicate.or(String.isEmpty)(
            flow(
              Effect.succeed,
              Effect.tryMap({
                try: JSON.parse,
                catch: constVoid,
              }),
              Effect.runSyncExit,
              Exit.isSuccess,
            ),
          ),
        });

      return [serviceName, originalServiceName, manifest, commandToTest, inputToTest] as const;
    })
  );

  const results = await Effect.runPromise(Effect.all(each, { concurrency: 1 }));

  return Promise.all(results.map(generateClient));
}
