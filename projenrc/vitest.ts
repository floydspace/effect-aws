import type { Project } from "projen";
import { Component, TextFile, typescript } from "projen";

export interface VitestOptions {
  sharedSetupFiles?: Array<string>;
}

export class Vitest extends Component {
  public static of(project: Project): Vitest | undefined {
    const isVitest = (o: Component): o is Vitest => o instanceof Vitest;
    return project.components.find(isVitest);
  }

  constructor(
    project: typescript.TypeScriptProject,
    private readonly options: VitestOptions = {},
  ) {
    super(project);

    project.addDevDeps("vitest", "@vitest/coverage-v8");

    project.testTask.reset("vitest", { receiveArgs: true });
  }

  preSynthesize(): void {
    const packages = this.project.subprojects.map((subproject) => subproject.outdir.split("/").pop());

    // Vitest 4 no longer supports a standalone workspace file
    // (`vitest.workspace.json`/`.js`) as "the source of your workspace" -
    // see https://vitest.dev/guide/migration.html#workspace-is-replaced-with-projects.
    // The `projects` list must be declared directly inside a root
    // `vitest.config.ts`, otherwise Vitest silently falls back to scanning
    // the whole filesystem for any `vitest.config.ts` it can find, which can
    // pick up unrelated nested copies of this repo (e.g. under a nix
    // `.direnv/` cache) that happen to contain their own package configs.
    new TextFile(this.project, "vitest.config.ts", {
      lines: [
        'import { defineConfig } from "vitest/config";',
        "",
        "export default defineConfig({",
        "  test: {",
        "    projects: [",
        ...packages.map((pkg) => `      "packages/${pkg}",`),
        "    ],",
        "  },",
        "});",
        "",
      ],
    });

    new TextFile(this, "vitest.shared.ts", {
      lines: [
        'import path from "node:path";',
        'import type { ViteUserConfig as UserConfig } from "vitest/config";',
        "",
        "const alias = (pkg: string, dir = pkg) => {",
        "  const name = `@effect-aws/${pkg}`",
        '  const target = process.env.TEST_DIST !== undefined ? "dist/dist/esm" : "src"',
        "  return ({",
        `    [\`\${name}/test\`]: path.join(import.meta.dirname, "packages", dir, "test"),`,
        `    [\`\${name}\`]: path.join(import.meta.dirname, "packages", dir, target)`,
        "  })",
        "}",
        "",
        "const config: UserConfig = {",
        // Prefer ESM builds over CJS when resolving deps like @aws-sdk/*.
        // Vitest 4's SSR module runner resolves bare imports using
        // `ssr.resolve.mainFields` (not the client-only `resolve.mainFields`),
        // so both must be set for spies on internal SDK modules (e.g.
        // runtimeConfig) to target the same module instance the SDK uses.
        "  resolve: {",
        '    mainFields: ["module", "main"],',
        "  },",
        "  ssr: {",
        "    resolve: {",
        '      mainFields: ["module", "main"],',
        "    },",
        "    noExternal: [/^@aws-sdk\\//],",
        "  },",
        "  test: {",
        ...(this.options.sharedSetupFiles?.length
          ? [
            `    setupFiles: [${
              this.options.sharedSetupFiles.map((file) => `path.join(import.meta.dirname, "${file}")`).join(", ")
            }],`,
          ]
          : []),
        '    include: ["test/**/*.test.ts"],',
        '    exclude: ["**/node_modules/**", "**/.git/**", "**/.direnv/**"],',
        "    alias: {",
        packages.map((pkg) => `      ...alias("${pkg}"),`).join("\n"),
        "    }",
        "  }",
        "}",
        "",
        "export default config;",
      ],
    });

    this.project.subprojects.forEach((subproject) => {
      if (subproject instanceof typescript.TypeScriptProject) {
        subproject.testTask.exec(
          "vitest run --reporter verbose",
          { receiveArgs: true },
        );

        subproject.addTask("test:watch", {
          description: "Run tests in watch mode",
          exec: "vitest --reporter verbose",
        });

        if (this.options.sharedSetupFiles?.length) {
          new TextFile(subproject, "vitest.config.ts", {
            lines: [
              'import { mergeConfig, type ViteUserConfigExport as UserConfigExport } from "vitest/config";',
              'import configShared from "../../vitest.shared.js";',
              "",
              "const config: UserConfigExport = {};",
              "",
              "export default mergeConfig(configShared, config);",
              "",
            ],
          });
        }
      }
    });
  }
}
