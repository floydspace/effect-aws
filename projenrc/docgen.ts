import type { Project } from "projen";
import { Component, javascript, JsonFile } from "projen";

export class Docgen extends Component {
  public static of(project: Project): Docgen | undefined {
    const isDocgen = (o: Component): o is Docgen => o instanceof Docgen;
    return project.components.find(isDocgen);
  }

  constructor(project: javascript.NodeProject) {
    super(project);

    project.addDevDeps("@effect/docgen");

    project
      .addTask("docgen", {
        exec: "pnpm --recursive --parallel run docgen",
      })
      .exec("node scripts/docs.mjs");
  }

  preSynthesize(): void {
    this.project.subprojects.forEach((subproject) => {
      if (subproject instanceof javascript.NodeProject) {
        subproject.addScripts({ docgen: "docgen" });

        new JsonFile(subproject, "docgen.json", {
          obj: {
            $schema: "../../node_modules/@effect/docgen/schema.json",
            exclude: ["src/index.ts", "src/Errors.ts"],
          },
          omitEmpty: true,
        });

        subproject.addGitIgnore("docs/");
      }
    });
  }
}
