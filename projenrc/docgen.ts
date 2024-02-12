import { Component, JsonFile, Project, javascript } from "projen";

export class Docgen extends Component {
  public static of(project: Project): Docgen | undefined {
    const isDocgen = (o: Component): o is Docgen => o instanceof Docgen;
    return project.components.find(isDocgen);
  }

  constructor(project: javascript.NodeProject) {
    super(project);

    project.addDevDeps("@effect/docgen");

    project.addScripts({ docgen: "docgen" });

    new JsonFile(project, "docgen.json", {
      obj: {
        $schema: "node_modules/@effect/docgen/schema.json",
        exclude: ["src/index.ts", "src/Errors.ts"],
      },
      omitEmpty: true,
    });

    project.addGitIgnore("docs/");
  }
}