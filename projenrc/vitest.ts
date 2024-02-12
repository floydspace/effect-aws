import { Component, JsonFile, Project, typescript } from "projen";

export class Vitest extends Component {
  public static of(project: Project): Vitest | undefined {
    const isVitest = (o: Component): o is Vitest => o instanceof Vitest;
    return project.components.find(isVitest);
  }

  constructor(project: typescript.TypeScriptProject) {
    super(project);

    project.addDevDeps("vitest");

    project.testTask.reset("vitest --globals", { receiveArgs: true });

    const compilerOptions = project.tsconfig?.compilerOptions as any;

    if (compilerOptions) {
      compilerOptions.types = [
        ...(compilerOptions.types ?? []),
        "vitest/globals",
      ];
    }

    new JsonFile(project, "vitest.workspace.json", {
      obj: ["packages/*"],
      omitEmpty: true,
    });
  }

  preSynthesize(): void {
    this.project.subprojects.forEach((subproject) => {
      if (subproject instanceof typescript.TypeScriptProject) {
        subproject.testTask.prependExec(
          "vitest run --globals --reporter verbose",
          { receiveArgs: true },
        );

        subproject.addTask("test:watch", {
          description: "Run tests in watch mode",
          exec: "vitest --globals --reporter verbose",
        });
      }
    });
  }
}
