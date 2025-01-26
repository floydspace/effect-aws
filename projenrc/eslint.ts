import type { Project, typescript } from "projen";
import { Component, javascript } from "projen";

export class Eslint extends Component {
  public static of(project: Project): Eslint | undefined {
    const isEslint = (o: Component): o is Eslint => o instanceof Eslint;
    return project.components.find(isEslint);
  }

  constructor(
    project: typescript.TypeScriptProject,
  ) {
    super(project);

    if (project.eslint) {
      throw new Error(
        "Cannot add the Eslint component to a project that already has a 'eslint' configuration.",
      );
    }

    project.addDevDeps(
      "@effect/eslint-plugin",
      "@eslint/compat",
      "@eslint/eslintrc",
      "@eslint/js",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "eslint",
      "eslint-import-resolver-typescript",
      "eslint-plugin-codegen",
      "eslint-plugin-import",
      "eslint-plugin-simple-import-sort",
      "eslint-plugin-sort-destructure-keys",
    );

    project.addTask("eslint", {
      description: "Runs eslint against the codebase",
      exec: "eslint .",
      receiveArgs: true,
    });
  }

  preSynthesize(): void {
    this.project.subprojects.forEach((subproject) => {
      if (subproject instanceof javascript.NodeProject) {
        const eslintTask = subproject.addTask("eslint", {
          description: "Runs eslint against the codebase",
          exec: "eslint --fix $@ src test",
          receiveArgs: true,
        });
        subproject.preCompileTask.spawn(eslintTask);
      }
    });
  }
}
