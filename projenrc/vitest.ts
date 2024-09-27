import { Component, JsonFile, TextFile, Project, typescript } from "projen";

export interface VitestOptions {
  sharedSetupFiles?: string[];
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

    project.testTask.reset("vitest --globals", { receiveArgs: true });

    const compilerOptions = project.tsconfig?.compilerOptions as any;

    if (compilerOptions) {
      compilerOptions.types = [
        ...(compilerOptions.types ?? []),
        "vitest/globals",
      ];
    }

    if (this.options.sharedSetupFiles?.length) {
      new TextFile(project, "vitest.shared.ts", {
        lines: [
          "/* eslint-disable import/no-extraneous-dependencies */",
          'import path from "node:path";',
          'import { defineProject } from "vitest/config";',
          "",
          "export default defineProject({",
          "  test: {",
          `    setupFiles: [${this.options.sharedSetupFiles
            .map((file) => `path.join(__dirname, "${file}")`)
            .join(", ")}],`,
          "  },",
          "});",
          "",
        ],
      });
    }

    new JsonFile(project, "vitest.workspace.json", {
      obj: ["packages/*"],
      omitEmpty: true,
    });
  }

  preSynthesize(): void {
    this.project.subprojects.forEach((subproject) => {
      if (subproject instanceof typescript.TypeScriptProject) {
        subproject.addDevDeps("vitest");

        subproject.testTask.prependExec(
          "vitest run --globals --reporter verbose",
          { receiveArgs: true },
        );

        subproject.addTask("test:watch", {
          description: "Run tests in watch mode",
          exec: "vitest --globals --reporter verbose",
        });

        if (this.options.sharedSetupFiles?.length) {
          new TextFile(subproject, "vitest.config.ts", {
            lines: [
              'import configShared from "../../vitest.shared";',
              "",
              "export default configShared;",
              "",
            ],
          });
        }
      }
    });
  }
}
