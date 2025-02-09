import type { Project } from "projen";
import { Component, JsonFile, TextFile, typescript } from "projen";

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

    new JsonFile(project, "vitest.workspace.json", {
      obj: ["packages/*"],
      omitEmpty: true,
    });
  }

  preSynthesize(): void {
    const packages = this.project.subprojects.map((subproject) => subproject.outdir.split("/").pop());

    new TextFile(this, "vitest.shared.ts", {
      lines: [
        'import path from "node:path";',
        'import type { UserConfig } from "vitest/config";',
        "",
        "const alias = (pkg: string, dir = pkg) => {",
        "  const name = `@effect-aws/${pkg}`",
        '  const target = process.env.TEST_DIST !== undefined ? "dist/dist/esm" : "src"',
        "  return ({",
        '    [`${name}/test`]: path.join(__dirname, "packages", dir, "test"),',
        '    [`${name}`]: path.join(__dirname, "packages", dir, target)',
        "  })",
        "}",
        "",
        // This is a workaround, see https://github.com/vitest-dev/vitest/issues/4744
        "const config: UserConfig = {",
        "  esbuild: {",
        '    target: "es2020"',
        "  },",
        "  test: {",
        ...(this.options.sharedSetupFiles?.length
          ? [
            `    setupFiles: [${
              this.options.sharedSetupFiles.map((file) => `path.join(__dirname, "${file}")`).join(", ")
            }],`,
          ]
          : []),
        '    include: ["test/**/*.test.ts"],',
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
              'import { mergeConfig, type UserConfigExport } from "vitest/config";',
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
